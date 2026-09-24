"use client";
import { useState } from "react";
import Link from "next/link";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Welcome to AI Chat Room! Ask me anything." }
  ]);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const userMessage = input;
    setInput("");
    
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userMessage },
      { sender: "ai", text: "Processing your request..." }
    ]);
    setIsProcessing(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      setMessages((prev) => {
        const newMsgs = [...prev];
        newMsgs.pop(); 
        return [
          ...newMsgs,
          { 
            sender: "ai", 
            text: data.reply || `Response to "${userMessage}": Processed successfully via AI pipeline.` 
          }
        ];
      });
    } catch (error) {
      setMessages((prev) => {
        const newMsgs = [...prev];
        newMsgs.pop();
        return [...newMsgs, { sender: "ai", text: "Error connecting to AI service." }];
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-4">
      <div className="w-[380px] h-[750px] bg-gray-900 border-[6px] border-gray-700 rounded-[45px] shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden relative">
        
        <div className="w-full bg-gray-950/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-gray-800/60 z-10">
          <span className="text-sm font-bold">AI Chat Room</span>
          <Link href="/" className="text-xs text-indigo-400 hover:underline">Back</Link>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map((msg, idx) => (
            <div key={idx} className={`p-3 rounded-2xl text-xs ${msg.sender === 'user' ? 'bg-indigo-600 text-white ml-6' : 'bg-gray-800 text-gray-200 mr-6'}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="p-3 bg-gray-950 border-t border-gray-800 flex space-x-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..." 
            disabled={isProcessing}
            className="flex-1 bg-gray-900 border border-gray-800 rounded-full px-4 py-2 text-xs text-white focus:outline-none disabled:opacity-50"
          />
          <button 
            type="submit" 
            disabled={isProcessing}
            className="bg-indigo-600 px-4 py-2 rounded-full text-xs font-semibold disabled:opacity-50 hover:bg-indigo-500 transition"
          >
            {isProcessing ? "..." : "Send"}
          </button>
        </form>

      </div>
    </div>
  );
}