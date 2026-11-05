import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { RefreshCw } from 'lucide-react';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAdminAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0F294A] flex flex-col items-center justify-center text-white">
        <RefreshCw className="w-8 h-8 text-[#F27A24] animate-spin mb-3" />
        <p className="text-xs font-semibold text-slate-300">Verifying secure administrative session...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
}

