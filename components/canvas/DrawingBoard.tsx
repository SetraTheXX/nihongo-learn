"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

interface DrawingBoardProps {
  templateChar?: string;
  width?: number;
  height?: number;
  onClear?: () => void;
}

interface Point {
  x: number;
  y: number;
}

export default function DrawingBoard({
  templateChar,
  width = 320,
  height = 320,
  onClear,
}: DrawingBoardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [strokes, setStrokes] = useState<Point[][]>([]);
  const [currentStroke, setCurrentStroke] = useState<Point[]>([]);
  const lastPoint = useRef<Point | null>(null);

  // Canvas boyutlarını cihaza göre ayarla
  const pixelRatio = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Yüksek DPI desteği
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);

    drawAll(ctx);
  }, [width, height, pixelRatio]);

  useEffect(() => { initCanvas(); }, [initCanvas]);

  // Her stroke değişiminde yeniden çiz
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    drawAll(ctx);
  }, [strokes, templateChar]);

  function drawAll(ctx: CanvasRenderingContext2D) {
    // Temizle
    ctx.clearRect(0, 0, width, height);

    // Arka plan grid çizgileri (rehber)
    ctx.strokeStyle = "rgba(0,0,0,0.05)";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    // Dikey orta
    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();
    // Yatay orta
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Şablon karakter (gri, büyük)
    if (templateChar) {
      ctx.fillStyle = "rgba(0,0,0,0.06)";
      ctx.font = `bold ${Math.floor(width * 0.65)}px serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(templateChar, width / 2, height / 2);
    }

    // Kaydedilmiş çizgiler
    for (const stroke of strokes) {
      drawStroke(ctx, stroke);
    }

    // Devam eden çizgi
    if (currentStroke.length > 0) {
      drawStroke(ctx, currentStroke);
    }
  }

  function drawStroke(ctx: CanvasRenderingContext2D, points: Point[]) {
    if (points.length < 2) return;
    ctx.strokeStyle = "#1a1a2e";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
  }

  function getCanvasPoint(e: React.MouseEvent | React.TouchEvent): Point {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();

    if ("touches" in e) {
      const touch = e.touches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    }
    return {
      x: (e as React.MouseEvent).clientX - rect.left,
      y: (e as React.MouseEvent).clientY - rect.top,
    };
  }

  function handleStart(e: React.MouseEvent | React.TouchEvent) {
    e.preventDefault();
    setIsDrawing(true);
    const pt = getCanvasPoint(e);
    setCurrentStroke([pt]);
    lastPoint.current = pt;
  }

  function handleMove(e: React.MouseEvent | React.TouchEvent) {
    if (!isDrawing) return;
    e.preventDefault();
    const pt = getCanvasPoint(e);

    setCurrentStroke((prev) => [...prev, pt]);
    lastPoint.current = pt;

    // Anlık çizim (smooth)
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    drawAll(ctx);
  }

  function handleEnd() {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (currentStroke.length > 1) {
      setStrokes((prev) => [...prev, currentStroke]);
    }
    setCurrentStroke([]);
    lastPoint.current = null;
  }

  function handleClear() {
    setStrokes([]);
    setCurrentStroke([]);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    drawAll(ctx);
    onClear?.();
  }

  function handleUndo() {
    setStrokes((prev) => prev.slice(0, -1));
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Canvas */}
      <div
        className="rounded-3xl border-2 border-outline-variant/30 shadow-lg overflow-hidden bg-white"
        style={{ width, height, touchAction: "none" }}
      >
        <canvas
          ref={canvasRef}
          style={{ width, height, cursor: "crosshair" }}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        />
      </div>

      {/* Kontroller */}
      <div className="flex gap-3">
        <button
          onClick={handleUndo}
          disabled={strokes.length === 0}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface font-bold text-sm hover:bg-surface-container-high transition-all disabled:opacity-40"
        >
          <span className="material-symbols-outlined text-base">undo</span>
          Geri Al
        </button>
        <button
          onClick={handleClear}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-50 border border-red-200/60 text-red-600 font-bold text-sm hover:bg-red-100 transition-all"
        >
          <span className="material-symbols-outlined text-base">delete</span>
          Temizle
        </button>
      </div>
    </div>
  );
}
