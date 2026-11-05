import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Crop as CropIcon,
  Check,
  RefreshCw,
  Sliders,
  Monitor,
  Smartphone,
  Maximize2
} from 'lucide-react';

export default function ImageCropperModal({
  isOpen,
  onClose,
  initialImageSrc,
  initialAspect = 'desktop', // 'desktop' (2560/945) | 'mobile_square' (1:1) | 'mobile_portrait' (4:5) | 'free'
  onCropComplete,
  title = "Banner Image Crop Studio"
}) {
  const [imageSrc, setImageSrc] = useState(initialImageSrc || null);
  const [aspectPreset, setAspectPreset] = useState(initialAspect);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isProcessing, setIsProcessing] = useState(false);

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  // Aspect ratio calculations
  const aspectRatios = {
    desktop: { ratio: 2560 / 945, label: 'Desktop Banner', outputW: 2560, outputH: 945, icon: Monitor },
    mobile_square: { ratio: 1 / 1, label: 'Mobile Square (1:1)', outputW: 1080, outputH: 1080, icon: Smartphone },
    mobile_portrait: { ratio: 4 / 5, label: 'Mobile Portrait (4:5)', outputW: 1080, outputH: 1350, icon: Smartphone },
    mobile_compact: { ratio: 16 / 10, label: 'Mobile Compact (16:10)', outputW: 1080, outputH: 675, icon: Smartphone },
    free: { ratio: null, label: 'Freeform', outputW: 1920, outputH: 1080, icon: Maximize2 }
  };

  const currentConfig = aspectRatios[aspectPreset] || aspectRatios.desktop;

  useEffect(() => {
    if (initialImageSrc) {
      setImageSrc(initialImageSrc);
    }
    if (initialAspect) {
      setAspectPreset(initialAspect);
    }
    setZoom(1);
    setRotation(0);
    setOffset({ x: 0, y: 0 });
  }, [initialImageSrc, initialAspect, isOpen]);

  // Handle local file selection
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        setZoom(1);
        setRotation(0);
        setOffset({ x: 0, y: 0 });
      };
      reader.readAsDataURL(file);
    }
  };

  // Mouse / Touch Dragging Handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - offset.x,
        y: e.touches[0].clientY - offset.y
      });
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    setOffset({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y
    });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.08 : -0.08;
    setZoom((prev) => Math.min(Math.max(0.4, prev + delta), 4));
  };

  const handleReset = () => {
    setZoom(1);
    setRotation(0);
    setOffset({ x: 0, y: 0 });
  };

  // Generate cropped output canvas
  const handleCropAndSave = useCallback(async () => {
    if (!imageSrc || !imageRef.current || !containerRef.current) return;
    setIsProcessing(true);

    try {
      const img = imageRef.current;
      const container = containerRef.current;
      const targetW = currentConfig.outputW;
      const targetH = currentConfig.outputH;

      const canvas = document.createElement('canvas');
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext('2d');

      // Fill with clean background (dark slate matching branding)
      ctx.fillStyle = '#0F294A';
      ctx.fillRect(0, 0, targetW, targetH);

      // Frame dimensions inside UI
      const frameRect = container.getBoundingClientRect();
      const frameW = frameRect.width;
      const frameH = frameRect.height;

      // Scale factor between UI frame and high-res output target
      const scaleToTarget = targetW / frameW;

      ctx.save();
      // Translate to canvas center
      ctx.translate(targetW / 2, targetH / 2);
      ctx.rotate((rotation * Math.PI) / 180);

      // Translate by user offset scaled to output
      ctx.translate(offset.x * scaleToTarget, offset.y * scaleToTarget);

      // Calculate displayed image size in output coordinates
      const naturalAspect = img.naturalWidth / img.naturalHeight;
      let drawW, drawH;

      if (naturalAspect > currentConfig.ratio) {
        // Image is wider than frame
        drawH = targetH * zoom;
        drawW = drawH * naturalAspect;
      } else {
        // Image is taller than frame
        drawW = targetW * zoom;
        drawH = drawW / naturalAspect;
      }

      ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
      ctx.restore();

      // Export as WebP base64 with 92% quality
      const croppedBase64 = canvas.toDataURL('image/webp', 0.92);

      onCropComplete({
        base64: croppedBase64,
        preset: aspectPreset,
        width: targetW,
        height: targetH
      });

      onClose();
    } catch (err) {
      console.error('Error generating crop:', err);
    } finally {
      setIsProcessing(false);
    }
  }, [imageSrc, currentConfig, zoom, rotation, offset, aspectPreset, onCropComplete, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#0F294A] text-white rounded-2xl shadow-2xl border border-slate-700/80 overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700/60 bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F27A24] flex items-center justify-center text-white shadow-md">
              <CropIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">{title}</h3>
              <p className="text-xs text-slate-400">
                Preset: {currentConfig.label} ({currentConfig.outputW} × {currentConfig.outputH} px)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              Choose New File
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Aspect Ratio Selection Toolbar */}
        <div className="flex items-center gap-1.5 px-5 py-2.5 bg-slate-900/40 border-b border-slate-800 overflow-x-auto text-xs">
          <span className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider mr-1">Aspect:</span>
          {Object.entries(aspectRatios).map(([key, config]) => {
            const Icon = config.icon;
            const isSelected = aspectPreset === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setAspectPreset(key);
                  handleReset();
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 ${
                  isSelected
                    ? 'bg-[#F27A24] text-white shadow-xs font-bold'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{config.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Crop Viewport Canvas */}
        <div className="flex-1 min-h-[320px] sm:min-h-[420px] bg-slate-950/90 relative flex items-center justify-center p-4 overflow-hidden select-none">
          {imageSrc ? (
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
              onWheel={handleWheel}
              style={{
                aspectRatio: currentConfig.ratio ? `${currentConfig.outputW} / ${currentConfig.outputH}` : '16/9',
                maxHeight: '440px',
                maxWidth: '100%'
              }}
              className="relative w-full border-2 border-[#F27A24] shadow-[0_0_30px_rgba(242,122,36,0.25)] rounded-lg overflow-hidden cursor-move bg-slate-900 flex items-center justify-center"
            >
              {/* 3x3 Grid Overlay Guidelines */}
              <div className="absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-3 z-20 opacity-30">
                <div className="border-r border-b border-white" />
                <div className="border-r border-b border-white" />
                <div className="border-b border-white" />
                <div className="border-r border-b border-white" />
                <div className="border-r border-b border-white" />
                <div className="border-b border-white" />
                <div className="border-r border-white" />
                <div className="border-r border-white" />
                <div />
              </div>

              {/* Target Dimensions Badge */}
              <div className="absolute top-2 left-2 z-30 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/20">
                {currentConfig.outputW} × {currentConfig.outputH} px
              </div>

              {/* The Interactive Draggable / Scalable Image */}
              <img
                ref={imageRef}
                src={imageSrc}
                alt="Source preview for cropping"
                draggable={false}
                style={{
                  transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom}) rotate(${rotation}deg)`,
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                  maxWidth: 'none',
                  maxHeight: 'none'
                }}
                className="pointer-events-none select-none object-contain w-full h-full"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-8 text-slate-400">
              <CropIcon className="w-12 h-12 text-slate-600 mb-3" />
              <p className="text-sm font-medium text-slate-300">No image selected</p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="mt-3 px-4 py-2 rounded-xl bg-[#F27A24] hover:bg-[#e06917] text-white text-xs font-bold transition-all shadow-md"
              >
                Upload Image to Crop
              </button>
            </div>
          )}
        </div>

        {/* Bottom Control Bar */}
        <div className="px-5 py-3.5 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          {/* Zoom & Rotate Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-2 py-1 rounded-lg border border-slate-700">
              <button
                onClick={() => setZoom((prev) => Math.max(0.4, prev - 0.1))}
                className="p-1 text-slate-300 hover:text-white"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <input
                type="range"
                min="0.5"
                max="3.5"
                step="0.05"
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="w-20 sm:w-28 accent-[#F27A24] cursor-pointer"
              />
              <button
                onClick={() => setZoom((prev) => Math.min(4, prev + 0.1))}
                className="p-1 text-slate-300 hover:text-white"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono text-slate-400 min-w-[32px] text-right">
                {Math.round(zoom * 100)}%
              </span>
            </div>

            <button
              onClick={() => setRotation((prev) => (prev + 90) % 360)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs text-slate-300 border border-slate-700 transition-colors"
              title="Rotate 90 degrees"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Rotate</span>
            </button>

            <button
              onClick={handleReset}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs text-slate-300 border border-slate-700 transition-colors"
              title="Reset position"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              disabled={isProcessing}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleCropAndSave}
              disabled={!imageSrc || isProcessing}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#F27A24] hover:bg-[#e06917] disabled:opacity-50 text-white text-xs font-bold transition-all shadow-lg shadow-[#F27A24]/20"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Crop & Apply</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

