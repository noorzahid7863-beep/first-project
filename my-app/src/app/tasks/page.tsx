// src/app/tasks/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Task {
  id: number;
  title: string;
  status: 'Running' | 'Completed';
}

const DEFAULT_TASKS: Task[] = [
  { id: 1, title: 'Analyze OpenRouter API endpoints', status: 'Running' },
  { id: 2, title: 'Configure AI Engine workflows', status: 'Running' },
  { id: 3, title: 'Test Next.js frontend components', status: 'Running' },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('smart_ai_tasks');
    if (saved) {
      try {
        setTasks(JSON.parse(saved));
      } catch (e) {
        setTasks(DEFAULT_TASKS);
      }
    } else {
      setTasks(DEFAULT_TASKS);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('smart_ai_tasks', JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle,
      status: 'Running',
    };

    setTasks((prev) => [newTask, ...prev]);
    setNewTaskTitle('');
  };

  const toggleTaskStatus = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === 'Running' ? 'Completed' : 'Running',
            }
          : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-slate-100 flex justify-center items-center">
        <div className="animate-pulse text-xs tracking-widest text-indigo-400 font-mono uppercase">
          Initializing Engine...
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black flex items-center justify-center p-4">
      {/* Mobile Frame Outer Chassis */}
      <div className="w-full max-w-[390px] h-[780px] bg-slate-950 border-[10px] border-slate-800/90 rounded-[48px] shadow-[0_0_50px_rgba(79,70,229,0.15)] flex flex-col overflow-hidden relative backdrop-blur-3xl ring-1 ring-white/10">
        
        {/* Dynamic Island / Top Camera Notch */}
        <div className="w-32 h-5 bg-black rounded-b-2xl mx-auto absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ring-1 ring-white/10"></div>
          <div className="w-10 h-1 bg-slate-800 rounded-full"></div>
        </div>

        {/* Interior Screen Content Area */}
        <div className="flex-1 p-5 pt-9 overflow-y-auto flex flex-col justify-between scrollbar-none">
          <div>
            {/* Header Title Bar */}
            <div className="flex justify-between items-center mb-6 mt-1">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase">
                  Workspace
                </span>
                <h1 className="text-xl font-extrabold text-white tracking-tight">
                  Task Command
                </h1>
              </div>
              <Link
                href="/"
                className="text-[11px] font-medium bg-slate-800/80 hover:bg-slate-700/80 text-indigo-300 border border-indigo-500/20 px-3 py-1.5 rounded-xl backdrop-blur-md transition shadow-sm"
              >
                Back
              </Link>
            </div>

            {/* Futuristic Add Task Form */}
            <form onSubmit={addTask} className="relative mb-6">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="Enter futuristic mission objective..."
                  className="w-full bg-slate-900/90 border border-slate-700/60 rounded-2xl pl-4 pr-16 py-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 shadow-inner transition"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-md shadow-indigo-600/30 transition active:scale-95"
                >
                  Add
                </button>
              </div>
            </form>

            {/* Task Item Cards */}
            <div className="space-y-3">
              {tasks.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-slate-800 rounded-2xl">
                  <p className="text-xs text-slate-500 font-medium">All systems clear. No active tasks.</p>
                </div>
              ) : (
                tasks.map((task) => (
                  <div
                    key={task.id}
                    className="group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-3.5 flex justify-between items-center transition shadow-lg backdrop-blur-md"
                  >
                    <div className="flex-1 pr-3">
                      <p className={`text-xs font-semibold ${task.status === 'Completed' ? 'line-through text-slate-500' : 'text-slate-100'} transition`}>
                        {task.title}
                      </p>
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mt-1.5 ${
                          task.status === 'Running'
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]'
                            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]'
                        }`}
                      >
                        {task.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => toggleTaskStatus(task.id)}
                        className="text-[10px] font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/50 px-2.5 py-1.5 rounded-xl transition active:scale-95"
                      >
                        {task.status === 'Running' ? 'Done' : 'Undo'}
                      </button>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="text-[10px] font-medium bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 px-2.5 py-1.5 rounded-xl transition active:scale-95"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Glowing Bottom Dock Navigation */}
          <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-2.5 mt-4 flex justify-around items-center backdrop-blur-xl shadow-2xl">
            <Link href="/" className="text-[11px] font-medium text-slate-400 hover:text-indigo-400 transition">Home</Link>
            <Link href="/tasks" className="text-[11px] font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-xl shadow-sm">Tasks</Link>
            <Link href="/chat" className="text-[11px] font-medium text-slate-400 hover:text-indigo-400 transition">Chat</Link>
            <Link href="/agents" className="text-[11px] font-medium text-slate-400 hover:text-indigo-400 transition">Agents</Link>
          </div>
        </div>
      </div>
    </main>
  );
}