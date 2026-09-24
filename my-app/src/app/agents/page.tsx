// app/agents/page.tsx
"use client";
import Link from "next/link";

export default function AgentsPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-4">
      <div className="w-[380px] h-[750px] bg-gray-900 border-[6px] border-gray-700 rounded-[45px] shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden relative">
        
        {/* Header */}
        <div className="w-full bg-gray-950/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-gray-800/60 z-10">
          <span className="text-sm font-bold">AI Engine & Agents</span>
          <Link href="/" className="text-xs text-indigo-400 hover:underline">Back</Link>
        </div>

        {/* Agents & Engine Status Content */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 p-4 rounded-2xl border border-purple-500/30">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-purple-300">Primary Model</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">ONLINE</span>
            </div>
            <p className="text-sm font-bold mt-1">OpenRouter / OpenAI LLM</p>
            <p className="text-[11px] text-gray-400 mt-1">Status: Ready for real-time prompt processing and automation workflows.</p>
          </div>

          <div className="bg-gray-800/70 p-3.5 rounded-2xl border border-gray-700">
            <p className="text-xs font-semibold text-indigo-300">Agent 01</p>
            <p className="text-sm font-bold mt-1">Workflow Automation Agent</p>
            <span className="inline-block mt-2 text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">Active</span>
          </div>

          <div className="bg-gray-800/70 p-3.5 rounded-2xl border border-gray-700">
            <p className="text-xs font-semibold text-indigo-300">Agent 02</p>
            <p className="text-sm font-bold mt-1">Task & Chat Assistant</p>
            <span className="inline-block mt-2 text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Listening</span>
          </div>
        </div>

      </div>
    </div>
  );
}