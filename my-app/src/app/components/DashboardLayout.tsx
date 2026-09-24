import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="w-full max-w-[400px] h-[800px] bg-black border-[8px] border-gray-800 rounded-[45px] shadow-2xl flex flex-col overflow-hidden relative">
      {children}
    </div>
  );
}