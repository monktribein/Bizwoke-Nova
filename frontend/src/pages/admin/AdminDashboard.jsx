import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { API_ENDPOINTS, resolveMediaUrl } from '../../utils/api';
import ImageCropperModal from '../../components/admin/ImageCropperModal';
import {
  ShieldCheck,
  LogOut,
  LayoutDashboard,
  Inbox,
  Image as ImageIcon,
  Plus,
  RefreshCw,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Trash2,
  Edit2,
  ExternalLink,
  ChevronUp,
  ChevronDown,
  Download,
  Eye,
  X,
  Crop as CropIcon,
  Monitor,
  Smartphone,
  Save,
  AlertCircle
} from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user, token, logout } = useAdminAuth();

  const [activeTab, setActiveTab] = useState('inquiries'); // 'overview' | 'inquiries' | 'banners'

  // Leads state
  const [leads, setLeads] = useState([]);
  const [leadsLoading, setLeadsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('all');
  const [selectedLeadModal, setSelectedLeadModal] = useState(null);

  // Banners state
  const [banners, setBanners] = useState([]);
  const [bannersLoading, setBannersLoading] = useState(true);
  const [editingBanner, setEditingBanner] = useState(null); // null or banner object
  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);
  const [bannerForm, setBannerForm] = useState({
    name: '',
    title: '',
    primaryLink: '/services/',
    image: '',
    webp: '',
    mobileImage: '',
    mobileWebp: '',
    alt: '',
    active: true,
    order: 1
  });

  // Cropper Studio state
  const [isCropperOpen, setIsCropperOpen] = useState(false);
  const [cropperTarget, setCropperTarget] = useState('desktop'); // 'desktop' or 'mobile'
  const [cropperInitialSrc, setCropperInitialSrc] = useState(null);

  // Status message notification
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Fetch Leads
  const fetchLeads = useCallback(async () => {
    setLeadsLoading(true);
    try {
      const res = await fetch(API_ENDPOINTS.leads);
      const data = await res.json();
      setLeads(data.leads || []);
    } catch (err) {
      console.error('Failed to fetch leads:', err);
      showToast('Failed to load leads from server', 'error');
    } finally {
      setLeadsLoading(false);
    }
  }, []);

  // Fetch Banners
  const fetchBanners = useCallback(async () => {
    setBannersLoading(true);
    try {
      const res = await fetch(API_ENDPOINTS.bannersAdmin);
      const data = await res.json();
      setBanners(data.banners || []);
    } catch (err) {
      console.error('Failed to fetch banners:', err);
      showToast('Failed to load banners from server', 'error');
    } finally {
      setBannersLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLeads();
    fetchBanners();
  }, [fetchLeads, fetchBanners]);

  // Lead status update
  const handleUpdateLeadStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`${API_ENDPOINTS.leads}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
        );
        if (selectedLeadModal?.id === id) {
          setSelectedLeadModal((prev) => ({ ...prev, status: newStatus }));
        }
        showToast(`Status updated to ${newStatus}`);
      }
    } catch (err) {
      showToast('Failed to update status', 'error');
    }
  };

  // Delete Lead
  const handleDeleteLead = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry record?')) return;
    try {
      const res = await fetch(`${API_ENDPOINTS.leads}/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== id));
        if (selectedLeadModal?.id === id) setSelectedLeadModal(null);
        showToast('Enquiry record deleted');
      }
    } catch (err) {
      showToast('Failed to delete enquiry', 'error');
    }
  };

  // Export Leads to CSV
  const handleExportCSV = () => {
    if (!leads.length) {
      showToast('No leads available to export', 'error');
      return;
    }

    const headers = ['ID', 'Type', 'Name', 'Email', 'Phone', 'Organization', 'Status', 'Date', 'Message'];
    const rows = leads.map((l) => [
      `"${l.id || ''}"`,
      `"${l.type || ''}"`,
      `"${(l.name || '').replace(/"/g, '""')}"`,
      `"${l.email || ''}"`,
      `"${l.phone || ''}"`,
      `"${(l.organization || l.company || '').replace(/"/g, '""')}"`,
      `"${l.status || 'new'}"`,
      `"${l.createdAt ? new Date(l.createdAt).toLocaleString() : ''}"`,
      `"${(l.message || l.details || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `bizwoke-enquiries-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Enquiries exported to CSV');
  };

  // Filtered Leads computation
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      // Type filter
      if (selectedTypeFilter !== 'all' && lead.type !== selectedTypeFilter) {
        return false;
      }
      // Status filter
      const leadStatus = lead.status || 'new';
      if (selectedStatusFilter !== 'all' && leadStatus !== selectedStatusFilter) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = (lead.name || '').toLowerCase().includes(q);
        const matchEmail = (lead.email || '').toLowerCase().includes(q);
        const matchPhone = (lead.phone || '').toLowerCase().includes(q);
        const matchOrg = (lead.organization || lead.company || '').toLowerCase().includes(q);
        const matchMsg = (lead.message || lead.details || '').toLowerCase().includes(q);
        if (!matchName && !matchEmail && !matchPhone && !matchOrg && !matchMsg) {
          return false;
        }
      }
      return true;
    });
  }, [leads, selectedTypeFilter, selectedStatusFilter, searchQuery]);

  // Lead Stats computation
  const stats = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    const total = leads.length;
    const todayCount = leads.filter((l) => l.createdAt && l.createdAt.startsWith(today)).length;
    const newCount = leads.filter((l) => (l.status || 'new') === 'new').length;
    const activeBannersCount = banners.filter((b) => b.active !== false).length;
    return { total, todayCount, newCount, activeBannersCount };
  }, [leads, banners]);

  // Open Banner Edit Modal
  const handleOpenAddBanner = () => {
    setEditingBanner(null);
    setBannerForm({
      name: '',
      title: '',
      primaryLink: '/services/',
      image: '',
      webp: '',
      mobileImage: '',
      mobileWebp: '',
      alt: '',
      active: true,
      order: banners.length + 1
    });
    setIsBannerModalOpen(true);
  };

  const handleOpenEditBanner = (banner) => {
    setEditingBanner(banner);
    setBannerForm({
      name: banner.name || '',
      title: banner.title || '',
      primaryLink: banner.primaryLink || '/services/',
      image: banner.image || '',
      webp: banner.webp || banner.image || '',
      mobileImage: banner.mobileImage || '',
      mobileWebp: banner.mobileWebp || banner.mobileImage || '',
      alt: banner.alt || banner.title || '',
      active: banner.active !== false,
      order: banner.order || 1
    });
    setIsBannerModalOpen(true);
  };

  // Save Banner (Create or Update)
  const handleSaveBanner = async (e) => {
    e.preventDefault();
    if (!bannerForm.title.trim() || !bannerForm.image) {
      showToast('Title and Desktop Image are required', 'error');
      return;
    }

    try {
      const isEdit = Boolean(editingBanner);
      const url = isEdit ? `${API_ENDPOINTS.banners}/${editingBanner.id}` : API_ENDPOINTS.banners;
      const method = isEdit ? 'PUT' : 'POST';

      const payload = {
        ...bannerForm,
        alt: bannerForm.alt || bannerForm.title,
        name: bannerForm.name || bannerForm.title
      };

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to save banner');
      }

      setIsBannerModalOpen(false);
      showToast(isEdit ? 'Banner updated successfully' : 'New banner published successfully');
      fetchBanners();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Delete Banner
  const handleDeleteBanner = async (id) => {
    if (!window.confirm('Are you sure you want to delete this hero banner?')) return;
    try {
      const res = await fetch(`${API_ENDPOINTS.banners}/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        setBanners((prev) => prev.filter((b) => b.id !== id));
        showToast('Banner slide deleted');
      }
    } catch (err) {
      showToast('Failed to delete banner', 'error');
    }
  };

  // Toggle Banner Active
  const handleToggleBannerActive = async (banner) => {
    try {
      const updatedStatus = !banner.active;
      const res = await fetch(`${API_ENDPOINTS.banners}/${banner.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ active: updatedStatus })
      });
      if (res.ok) {
        setBanners((prev) =>
          prev.map((b) => (b.id === banner.id ? { ...b, active: updatedStatus } : b))
        );
        showToast(updatedStatus ? 'Banner activated' : 'Banner paused (hidden)');
      }
    } catch (err) {
      showToast('Failed to toggle status', 'error');
    }
  };

  // Restore 5 default high-definition banners
  const handleRestoreDefaultBanners = async () => {
    if (!window.confirm('Restore the 5 official high-definition default hero banners?')) return;
    try {
      const res = await fetch(API_ENDPOINTS.bannersRestoreDefaults, { method: 'POST' });
      const data = await res.json();
      if (res.ok && data.success) {
        setBanners(data.banners || []);
        showToast('5 Default HD Banners restored successfully!');
      }
    } catch (err) {
      showToast('Failed to restore defaults', 'error');
    }
  };

  // Reorder Banners (Move Up / Down)
  const handleMoveBanner = async (index, direction) => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= banners.length) return;

    const newOrder = [...banners];
    const temp = newOrder[index];
    newOrder[index] = newOrder[targetIndex];
    newOrder[targetIndex] = temp;

    const orderIds = newOrder.map((b) => b.id);
    setBanners(newOrder);

    try {
      await fetch(API_ENDPOINTS.bannersReorder, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderIds })
      });
      showToast('Banner sequence updated');
    } catch (err) {
      fetchBanners();
    }
  };

  // Open Crop Studio for Desktop or Mobile
  const handleLaunchCropper = (target) => {
    setCropperTarget(target);
    const existing = target === 'desktop' ? bannerForm.image : (bannerForm.mobileImage || bannerForm.image);
    setCropperInitialSrc(existing ? resolveMediaUrl(existing) : null);
    setIsCropperOpen(true);
  };

  // Crop Complete Callback: Uploads cropped base64 to server
  const handleCropComplete = async ({ base64, preset }) => {
    try {
      showToast('Uploading & processing cropped banner...', 'info');

      const res = await fetch(API_ENDPOINTS.bannerUpload, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64: base64,
          filename: bannerForm.name || 'banner',
          type: cropperTarget
        })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to upload image');
      }

      if (cropperTarget === 'desktop') {
        setBannerForm((prev) => ({
          ...prev,
          image: data.url,
          webp: data.url
        }));
        showToast('Desktop banner cropped & attached! (2560 × 945 px)');
      } else {
        setBannerForm((prev) => ({
          ...prev,
          mobileImage: data.url,
          mobileWebp: data.url
        }));
        showToast('Mobile banner cropped & attached! (1080 × 1080 px)');
      }
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F294A] flex flex-col">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F294A] text-white shadow-2xl border border-slate-700 text-xs font-semibold animate-fade-in">
          {toast.type === 'error' ? (
            <AlertCircle className="w-4 h-4 text-red-400" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-[#F27A24]" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Top Enterprise Navigation */}
      <header className="sticky top-0 z-40 bg-[#0F294A] text-white border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#F27A24] to-amber-500 flex items-center justify-center text-white font-black shadow-md">
              BN
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black tracking-tight text-white text-base">Bizwoke Nova™</span>
                <span className="px-2 py-0.5 rounded-full bg-[#F27A24]/20 text-[#F27A24] border border-[#F27A24]/30 text-[10px] font-bold uppercase tracking-wider">
                  Admin Console
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Production Management System</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'overview' ? 'bg-[#F27A24] text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all relative ${
                activeTab === 'inquiries' ? 'bg-[#F27A24] text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Inbox className="w-3.5 h-3.5" />
              <span>Website Enquiries</span>
              {stats.newCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 rounded-full bg-red-500 text-white text-[10px] font-bold">
                  {stats.newCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('banners')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'banners' ? 'bg-[#F27A24] text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Hero Banners</span>
            </button>
          </nav>

          {/* Actions: View Live, User info, Logout */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://bizwoke.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
              title="Open bizwoke.com in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#F27A24]" />
              <span>bizwoke.com</span>
            </a>

            <button
              onClick={logout}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="md:hidden flex items-center justify-around border-t border-slate-800 py-2 px-2 text-xs font-semibold bg-slate-900/90">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-1 px-3 py-1 rounded-lg ${
              activeTab === 'overview' ? 'bg-[#F27A24] text-white' : 'text-slate-300'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Overview</span>
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex items-center gap-1 px-3 py-1 rounded-lg relative ${
              activeTab === 'inquiries' ? 'bg-[#F27A24] text-white' : 'text-slate-300'
            }`}
          >
            <Inbox className="w-3.5 h-3.5" />
            <span>Enquiries</span>
            {stats.newCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-red-500 text-white text-[10px]">
                {stats.newCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('banners')}
            className={`flex items-center gap-1 px-3 py-1 rounded-lg ${
              activeTab === 'banners' ? 'bg-[#F27A24] text-white' : 'text-slate-300'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Banners</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* ========================================================================= */}
        {/* TAB 1: OVERVIEW & ANALYTICS                                              */}
        {/* ========================================================================= */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Metric Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Enquiries</p>
                  <p className="text-2xl font-black text-[#0F294A] mt-1">{stats.total}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Logged across all channels</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Inbox className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Today's Leads</p>
                  <p className="text-2xl font-black text-[#F27A24] mt-1">{stats.todayCount}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Submitted in the last 24h</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F27A24] flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pending Action</p>
                  <p className="text-2xl font-black text-amber-600 mt-1">{stats.newCount}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Awaiting team contact</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Hero Banners</p>
                  <p className="text-2xl font-black text-emerald-600 mt-1">{stats.activeBannersCount}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Currently live on Homepage</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ImageIcon className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Quick Actions & Recent Enquiries Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Quick Actions Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-[#0F294A]">Quick Operations</h3>
                <div className="space-y-2.5">
                  <button
                    onClick={() => {
                      setActiveTab('banners');
                      handleOpenAddBanner();
                    }}
                    className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-[#F27A24]/10 hover:border-[#F27A24]/30 border border-slate-200 transition-all text-left text-xs font-semibold text-[#0F294A]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#F27A24] text-white flex items-center justify-center">
                        <Plus className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold">Add & Crop New Banner</p>
                        <p className="text-[11px] text-slate-400 font-normal">Desktop & mobile slide</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab('inquiries')}
                    className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50 hover:border-blue-200 border border-slate-200 transition-all text-left text-xs font-semibold text-[#0F294A]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#0F294A] text-white flex items-center justify-center">
                        <Inbox className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold">Review Incoming Enquiries</p>
                        <p className="text-[11px] text-slate-400 font-normal">Manage client requests</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={handleExportCSV}
                    className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 border border-slate-200 transition-all text-left text-xs font-semibold text-[#0F294A]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                        <Download className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold">Export Leads to CSV</p>
                        <p className="text-[11px] text-slate-400 font-normal">Download complete dataset</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Recent Enquiries Feed */}
              <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-[#0F294A]">Recent Website Submissions</h3>
                  <button
                    onClick={() => setActiveTab('inquiries')}
                    className="text-xs font-bold text-[#F27A24] hover:underline"
                  >
                    View All ({leads.length}) →
                  </button>
                </div>

                {leads.length === 0 ? (
                  <div className="text-center py-12 text-slate-400 text-xs">
                    No inquiries recorded yet. Submissions from bizwoke.com will appear here.
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100">
                    {leads.slice(0, 5).map((lead) => (
                      <div
                        key={lead.id}
                        onClick={() => setSelectedLeadModal(lead)}
                        className="py-3 flex items-center justify-between hover:bg-slate-50 px-2 rounded-xl cursor-pointer transition-colors"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#0F294A] truncate">{lead.name}</span>
                            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-semibold text-slate-600 capitalize">
                              {lead.type}
                            </span>
                            {(lead.status || 'new') === 'new' && (
                              <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 truncate mt-0.5">
                            {lead.email} • {lead.organization || lead.company || 'Individual'}
                          </p>
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0 ml-2">
                          {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : ''}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: INQUIRIES & WEBSITE REQUESTS ("jo bizwoke.com pr request aaye")    */}
        {/* ========================================================================= */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            {/* Filter & Search Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by name, email, phone, company or message..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs text-[#0F294A] placeholder-slate-400 focus:outline-none focus:border-[#F27A24] transition-colors"
                />
              </div>

              {/* Filters & Actions */}
              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={selectedTypeFilter}
                  onChange={(e) => setSelectedTypeFilter(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-[#0F294A] focus:outline-none focus:border-[#F27A24]"
                >
                  <option value="all">All Channels</option>
                  <option value="general">General Contact</option>
                  <option value="product_demo">Product Demo</option>
                  <option value="partnership_application">Partnership</option>
                  <option value="job_application">Job Application</option>
                  <option value="service_proposal">Service Inquiry</option>
                  <option value="government">Government / ULB</option>
                </select>

                <select
                  value={selectedStatusFilter}
                  onChange={(e) => setSelectedStatusFilter(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-[#0F294A] focus:outline-none focus:border-[#F27A24]"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New (Uncontacted)</option>
                  <option value="contacted">Contacted</option>
                  <option value="in_progress">In Progress</option>
                  <option value="closed">Closed</option>
                </select>

                <button
                  onClick={fetchLeads}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  title="Refresh Enquiries"
                >
                  <RefreshCw className={`w-4 h-4 ${leadsLoading ? 'animate-spin' : ''}`} />
                </button>

                <button
                  onClick={handleExportCSV}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Inquiries Table Container */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
              <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Enquiries List ({filteredLeads.length})
                </span>
                <span className="text-[11px] text-slate-400">
                  Click any entry to view full message & telemetry
                </span>
              </div>

              {leadsLoading ? (
                <div className="p-12 text-center text-slate-400 text-xs">
                  <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-[#F27A24]" />
                  Loading enquiries from database...
                </div>
              ) : filteredLeads.length === 0 ? (
                <div className="p-12 text-center text-slate-400 text-xs">
                  No enquiries matching your current filters.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                        <th className="py-3 px-4">Contact</th>
                        <th className="py-3 px-4">Channel / Type</th>
                        <th className="py-3 px-4">Organization</th>
                        <th className="py-3 px-4">Message Snippet</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Submitted</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredLeads.map((lead) => {
                        const status = lead.status || 'new';
                        return (
                          <tr
                            key={lead.id}
                            className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                            onClick={() => setSelectedLeadModal(lead)}
                          >
                            <td className="py-3 px-4">
                              <div className="font-bold text-[#0F294A]">{lead.name}</div>
                              <div className="text-[11px] text-slate-400 font-mono">{lead.email}</div>
                              {lead.phone && (
                                <div className="text-[10px] text-slate-500">{lead.phone}</div>
                              )}
                            </td>
                            <td className="py-3 px-4">
                              <span className="inline-block px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700 capitalize">
                                {lead.type?.replace(/_/g, ' ')}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-slate-600 font-medium">
                              {lead.organization || lead.company || '—'}
                            </td>
                            <td className="py-3 px-4 text-slate-500 max-w-xs truncate">
                              {lead.message || lead.details || lead.portfolio || '—'}
                            </td>
                            <td className="py-3 px-4" onClick={(e) => e.stopPropagation()}>
                              <select
                                value={status}
                                onChange={(e) => handleUpdateLeadStatus(lead.id, e.target.value)}
                                className={`text-[10px] font-bold px-2 py-1 rounded-full border focus:outline-none transition-colors ${
                                  status === 'new'
                                    ? 'bg-red-50 text-red-600 border-red-200'
                                    : status === 'contacted'
                                    ? 'bg-blue-50 text-blue-600 border-blue-200'
                                    : status === 'in_progress'
                                    ? 'bg-amber-50 text-amber-600 border-amber-200'
                                    : 'bg-emerald-50 text-emerald-600 border-emerald-200'
                                }`}
                              >
                                <option value="new">● New</option>
                                <option value="contacted">● Contacted</option>
                                <option value="in_progress">● In Progress</option>
                                <option value="closed">● Closed</option>
                              </select>
                            </td>
                            <td className="py-3 px-4 text-slate-400 text-[11px]">
                              {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : '—'}
                            </td>
                            <td className="py-3 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                              <button
                                onClick={() => handleDeleteLead(lead.id)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                                title="Delete enquiry"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: BANNER MANAGEMENT & CROP STUDIO ("jo homepage pr banner h")        */}
        {/* ========================================================================= */}
        {activeTab === 'banners' && (
          <div className="space-y-4">
            {/* Header Toolbar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-base font-bold text-[#0F294A]">Homepage Hero Banners ({banners.length})</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Manage active slides, live ordering, links, and high-definition desktop & mobile crops.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleRestoreDefaultBanners}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all border border-slate-200"
                  title="Restore 5 Default Slides"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-blue-600" />
                  <span className="hidden sm:inline">Restore Defaults</span>
                </button>
                <button
                  onClick={fetchBanners}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  title="Refresh Banners"
                >
                  <RefreshCw className={`w-4 h-4 ${bannersLoading ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={handleOpenAddBanner}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F27A24] hover:bg-[#e06917] text-white text-xs font-bold transition-all shadow-md shadow-[#F27A24]/20"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Banner</span>
                </button>
              </div>
            </div>

            {/* Banners List */}
            {bannersLoading ? (
              <div className="p-12 text-center text-slate-400 text-xs bg-white rounded-2xl border border-slate-200">
                <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-[#F27A24]" />
                Loading banners...
              </div>
            ) : banners.length === 0 ? (
              <div className="p-12 text-center text-slate-400 text-xs bg-white rounded-2xl border border-slate-200 space-y-3">
                <p className="text-slate-600 font-bold text-sm">No hero banners in database (0 slides)</p>
                <p className="text-slate-400 text-xs">The homepage hero slider is currently clean/hidden. You can add a new custom banner with crops, or restore the 5 default banners anytime.</p>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleOpenAddBanner}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F27A24] hover:bg-[#e06917] text-white text-xs font-bold transition-all shadow-md"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add & Crop New Banner</span>
                  </button>
                  <button
                    onClick={handleRestoreDefaultBanners}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0F294A] text-xs font-bold transition-all border border-slate-300"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-[#F27A24]" />
                    <span>Restore 5 Default Banners</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {banners.map((banner, index) => (
                  <div
                    key={banner.id}
                    className={`bg-white rounded-2xl border transition-all p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs ${
                      banner.active ? 'border-slate-200/80' : 'border-slate-200 opacity-60 bg-slate-50/50'
                    }`}
                  >
                    {/* Left: Reorder Controls + Order Number */}
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex flex-col gap-1">
                        <button
                          onClick={() => handleMoveBanner(index, 'up')}
                          disabled={index === 0}
                          className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed"
                          title="Move Slide Up"
                        >
                          <ChevronUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleMoveBanner(index, 'down')}
                          disabled={index === banners.length - 1}
                          className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed"
                          title="Move Slide Down"
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="w-7 h-7 rounded-lg bg-slate-100 text-[#0F294A] font-bold text-xs flex items-center justify-center border border-slate-200">
                        #{index + 1}
                      </span>
                    </div>

                    {/* Desktop Thumbnail Preview */}
                    <div className="relative w-40 sm:w-52 aspect-[2560/945] rounded-lg overflow-hidden bg-slate-900 border border-slate-200 shrink-0 shadow-xs group">
                      <img
                        src={resolveMediaUrl(banner.image)}
                        alt={banner.alt || banner.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/70 text-[9px] font-mono text-white flex items-center gap-1">
                        <Monitor className="w-2.5 h-2.5" />
                        <span>Desktop</span>
                      </div>
                    </div>

                    {/* Mobile Thumbnail Preview */}
                    <div className="relative w-16 sm:w-20 aspect-square rounded-lg overflow-hidden bg-slate-900 border border-slate-200 shrink-0 shadow-xs">
                      <img
                        src={resolveMediaUrl(banner.mobileImage || banner.image)}
                        alt="Mobile preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-black/70 text-[8px] font-mono text-white flex items-center gap-0.5">
                        <Smartphone className="w-2 h-2" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-[#0F294A] text-sm truncate">{banner.name || banner.title}</h4>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            banner.active
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-slate-200 text-slate-600'
                          }`}
                        >
                          {banner.active ? 'Live' : 'Paused'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 truncate mt-0.5">{banner.title}</p>
                      <p className="text-[11px] text-[#F27A24] font-mono truncate mt-0.5">
                        Route: {banner.primaryLink || '/services/'}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleToggleBannerActive(banner)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition-colors ${
                          banner.active
                            ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                            : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200'
                        }`}
                      >
                        {banner.active ? 'Pause' : 'Activate'}
                      </button>

                      <button
                        onClick={() => handleOpenEditBanner(banner)}
                        className="p-2 rounded-xl bg-slate-100 hover:bg-[#F27A24] text-slate-700 hover:text-white transition-colors"
                        title="Edit Banner & Re-Crop"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleDeleteBanner(banner.id)}
                        className="p-2 rounded-xl bg-slate-100 hover:bg-red-500 text-slate-700 hover:text-white transition-colors"
                        title="Delete Banner"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* ========================================================================= */}
      {/* MODAL 1: LEAD DETAIL MODAL                                               */}
      {/* ========================================================================= */}
      {selectedLeadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F27A24]" />
                <h3 className="text-base font-bold text-[#0F294A]">Enquiry Details</h3>
              </div>
              <button
                onClick={() => setSelectedLeadModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Name</span>
                  <p className="font-bold text-sm text-[#0F294A] mt-0.5">{selectedLeadModal.name}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Channel</span>
                  <p className="font-bold text-sm text-[#F27A24] mt-0.5 capitalize">
                    {selectedLeadModal.type?.replace(/_/g, ' ')}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Email</span>
                  <p className="font-mono text-slate-700 mt-0.5">
                    <a href={`mailto:${selectedLeadModal.email}`} className="text-blue-600 hover:underline">
                      {selectedLeadModal.email}
                    </a>
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Phone</span>
                  <p className="font-mono text-slate-700 mt-0.5">
                    {selectedLeadModal.phone ? (
                      <a href={`tel:${selectedLeadModal.phone}`} className="text-blue-600 hover:underline">
                        {selectedLeadModal.phone}
                      </a>
                    ) : (
                      'Not provided'
                    )}
                  </p>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Organization / Company</span>
                  <p className="font-semibold text-slate-800 mt-0.5">
                    {selectedLeadModal.organization || selectedLeadModal.company || 'Individual / General'}
                  </p>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Submitted Message / Scope</span>
                <div className="mt-1.5 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 whitespace-pre-wrap leading-relaxed font-sans">
                  {selectedLeadModal.message || selectedLeadModal.details || selectedLeadModal.portfolio || 'No message text provided.'}
                </div>
              </div>

              {/* Status Action Buttons */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Status</span>
                  <select
                    value={selectedLeadModal.status || 'new'}
                    onChange={(e) => handleUpdateLeadStatus(selectedLeadModal.id, e.target.value)}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200 bg-white"
                  >
                    <option value="new">New (Uncontacted)</option>
                    <option value="contacted">Contacted</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed / Converted</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${selectedLeadModal.email}?subject=Regarding your Bizwoke Nova Inquiry`}
                    className="px-4 py-2 rounded-xl bg-[#F27A24] hover:bg-[#e06917] text-white font-bold text-xs shadow-xs"
                  >
                    Send Email Reply
                  </a>
                  <button
                    onClick={() => handleDeleteLead(selectedLeadModal.id)}
                    className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50"
                    title="Delete lead"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: ADD / EDIT BANNER MODAL                                         */}
      {/* ========================================================================= */}
      {isBannerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[#F27A24]" />
                <h3 className="text-base font-bold text-[#0F294A]">
                  {editingBanner ? 'Edit Hero Banner Slide' : 'Add New Hero Banner Slide'}
                </h3>
              </div>
              <button
                onClick={() => setIsBannerModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveBanner} className="p-6 overflow-y-auto space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Banner Internal Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI & Agentic AI Solutions"
                  value={bannerForm.name}
                  onChange={(e) => setBannerForm({ ...bannerForm, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-[#0F294A] focus:outline-none focus:border-[#F27A24]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Public Title / Alt Text *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI & Agentic AI Solutions for Real Business Impact"
                  value={bannerForm.title}
                  onChange={(e) => setBannerForm({ ...bannerForm, title: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-[#0F294A] focus:outline-none focus:border-[#F27A24]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Target Route / URL *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. /services/ or /platforms/bizorm/"
                    value={bannerForm.primaryLink}
                    onChange={(e) => setBannerForm({ ...bannerForm, primaryLink: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-[#0F294A] focus:outline-none focus:border-[#F27A24]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Display Order
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={bannerForm.order}
                    onChange={(e) => setBannerForm({ ...bannerForm, order: parseInt(e.target.value, 10) || 1 })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-[#0F294A] focus:outline-none focus:border-[#F27A24]"
                  />
                </div>
              </div>

              {/* Desktop Banner Image Upload & Crop Field */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                      <Monitor className="w-3.5 h-3.5 text-blue-600" />
                      <span>Desktop Banner (2560 × 945 px) *</span>
                    </span>
                    <p className="text-[10px] text-slate-400">Ultra-wide 2.71:1 landscape resolution for desktop displays</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleLaunchCropper('desktop')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F294A] hover:bg-[#1a3d6b] text-white text-[11px] font-bold shadow-xs transition-colors"
                  >
                    <CropIcon className="w-3.5 h-3.5 text-[#F27A24]" />
                    <span>{bannerForm.image ? 'Re-Crop / Change' : 'Upload & Crop'}</span>
                  </button>
                </div>

                {bannerForm.image && (
                  <div className="relative w-full aspect-[2560/945] rounded-lg overflow-hidden bg-slate-900 border border-slate-300">
                    <img
                      src={resolveMediaUrl(bannerForm.image)}
                      alt="Desktop preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1 right-1 px-1.5 py-0.5 rounded bg-black/60 text-[9px] font-mono text-white">
                      Active Desktop Asset
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Banner Image Upload & Crop Field */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5 text-[#F27A24]" />
                      <span>Mobile Banner (1080 × 1080 px Square / Portrait)</span>
                    </span>
                    <p className="text-[10px] text-slate-400">Tailored aspect ratio so mobile text & visuals stay crisp and bold</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleLaunchCropper('mobile')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F27A24] hover:bg-[#e06917] text-white text-[11px] font-bold shadow-xs transition-colors"
                  >
                    <CropIcon className="w-3.5 h-3.5" />
                    <span>{bannerForm.mobileImage ? 'Re-Crop / Change' : 'Upload Mobile Crop'}</span>
                  </button>
                </div>

                {bannerForm.mobileImage ? (
                  <div className="relative w-36 aspect-square rounded-lg overflow-hidden bg-slate-900 border border-slate-300">
                    <img
                      src={resolveMediaUrl(bannerForm.mobileImage)}
                      alt="Mobile preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1 right-1 px-1.5 py-0.5 rounded bg-black/60 text-[9px] font-mono text-white">
                      Active Mobile Asset
                    </div>
                  </div>
                ) : (
                  <p className="text-[11px] text-slate-400 italic">
                    Optional: If omitted, desktop banner will be used as fallback on mobile devices.
                  </p>
                )}
              </div>

              {/* Status Switch */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="bannerActiveSwitch"
                  checked={bannerForm.active}
                  onChange={(e) => setBannerForm({ ...bannerForm, active: e.target.checked })}
                  className="w-4 h-4 accent-[#F27A24] rounded"
                />
                <label htmlFor="bannerActiveSwitch" className="text-xs font-semibold text-slate-700 cursor-pointer">
                  Activate this slide immediately on Homepage
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsBannerModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#F27A24] hover:bg-[#e06917] text-white font-bold text-xs shadow-md shadow-[#F27A24]/20 transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingBanner ? 'Save Changes' : 'Publish Banner'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: INTEGRATED HIGH-PRECISION IMAGE CROP STUDIO                      */}
      {/* ========================================================================= */}
      <ImageCropperModal
        isOpen={isCropperOpen}
        onClose={() => setIsCropperOpen(false)}
        initialImageSrc={cropperInitialSrc}
        initialAspect={cropperTarget === 'desktop' ? 'desktop' : 'mobile_square'}
        title={cropperTarget === 'desktop' ? 'Desktop Hero Cropper (2560 × 945 px)' : 'Mobile Hero Cropper (1080 × 1080 px)'}
        onCropComplete={handleCropComplete}
      />
    </div>
  );
}

