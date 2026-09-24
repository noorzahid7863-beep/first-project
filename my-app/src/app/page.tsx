// src/app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [taskCount, setTaskCount] = useState<number>(3);

  useEffect(() => {
    const saved = localStorage.getItem('smart_ai_tasks');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTaskCount(parsed.length);
      } catch (e) {
        setTaskCount(3);
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black flex items-center justify-center p-4">
      {/* Mobile Frame Outer Chassis */}
      <div className="w-full max-w-[390px] h-[780px] bg-slate-950 border-[10px] border-slate-800/90 rounded-[48px] shadow-[0_0_50px_rgba(79,70,229,0.15)] flex flex-col overflow-hidden relative backdrop-blur-3xl ring-1 ring-white/10">
        
        {/* Dynamic Island / Top Camera Notch */}
        <div className="w-32 h-5 bg-black rounded-b-2xl mx-auto absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ring-1 ring-white/10"></div>
          <div className="w-10 h-1 bg-slate-800 rounded-full"></div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-5 pt-9 flex flex-col justify-between">
          <div className="space-y-5">
            {/* User Profile Card */}
            <div className="bg-gradient-to-b from-indigo-900/30 to-slate-900/60 border border-indigo-500/20 rounded-3xl p-5 shadow-xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <span className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase">
                Welcome Back
              </span>
              <h1 className="text-2xl font-black text-white mt-0.5 tracking-tight">
                Noor Zahid <span className="text-amber-400 text-lg">⚡</span>
              </h1>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                Your personal smart workspace is live & secure.
              </p>
            </div>

            {/* Real-time Status Metric Widgets */}
            <div className="grid grid-cols-2 gap-3.5">
              <Link href="/tasks" className="block group">
                <div className="bg-slate-900/70 group-hover:bg-slate-900 border border-slate-800 group-hover:border-indigo-500/40 rounded-2xl p-4 transition duration-300 shadow-lg relative overflow-hidden">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Active Tasks
                  </span>
                  <div className="flex justify-between items-baseline mt-2">
                    <span className="text-2xl font-black text-white tracking-tight">
                      {taskCount < 10 ? `0${taskCount}` : taskCount}
                    </span>
                    <span className="text-[9px] font-bold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full">
                      Running
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/agents" className="block group">
                <div className="bg-slate-900/70 group-hover:bg-slate-900 border border-slate-800 group-hover:border-indigo-500/40 rounded-2xl p-4 transition duration-300 shadow-lg relative overflow-hidden">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    AI Engine
                  </span>
                  <div className="flex justify-between items-baseline mt-2">
                    <span className="text-xs font-extrabold text-emerald-400 tracking-wide">
                      Online
                    </span>
                    <span className="text-[10px] font-medium text-indigo-400 hover:underline">
                      Configure
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Glowing Bottom Navigation Bar */}
          <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-2.5 flex justify-around items-center backdrop-blur-xl shadow-2xl">
            <Link href="/" className="text-[11px] font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-xl shadow-sm">Home</Link>
            <Link href="/tasks" className="text-[11px] font-medium text-slate-400 hover:text-indigo-400 transition">Tasks</Link>
            <Link href="/chat" className="text-[11px] font-medium text-slate-400 hover:text-indigo-400 transition">Chat</Link>
            <Link href="/agents" className="text-[11px] font-medium text-slate-400 hover:text-indigo-400 transition">Agents</Link>
          </div>
        </div>
      </div>
    </main>
  );
}