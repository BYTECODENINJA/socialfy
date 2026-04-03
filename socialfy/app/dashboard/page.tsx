"use client";

import React from "react";
import { 
  LayoutDashboard, 
  Calendar, 
  Library, 
  MessageSquare, 
  Users, 
  Settings, 
  Plus,
  ArrowUpRight,
  MoreHorizontal,
  Menu
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <div className={cn(
    "flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all",
    "border-2 border-transparent",
    active 
      ? "bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
      : "hover:bg-gray-100"
  )}>
    <Icon size={20} />
    <span className="font-semibold text-sm">{label}</span>
  </div>
);

const StatCard = ({ title, value, icon: Icon }: { title: string, value: string, icon?: any }) => (
  <Card className="bg-white border-2 border-black rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      {Icon && <div className="p-2 bg-yellow-100 rounded-full border border-black"><ArrowUpRight size={16} /></div>}
    </CardHeader>
    <CardContent>
      <div className="text-4xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

const UpcomingPost = ({ title, time }: { title: string, time: string }) => (
  <div className="flex items-center justify-between p-4 bg-white border-2 border-black rounded-2xl mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
    <span className="font-semibold">{title}</span>
    <span className="text-sm text-purple-600 font-bold">{time}</span>
  </div>
);

export default function Dashboard() {
  const SidebarContent = () => (
    <>
      <div className="px-4 py-2">
        <h1 className="text-2xl font-black italic tracking-tighter">Socialfy</h1>
      </div>
      
      <nav className="flex flex-col gap-2">
        <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
        <SidebarItem icon={Calendar} label="Calendar" />
        <SidebarItem icon={Library} label="Media Library" />
        <SidebarItem icon={MessageSquare} label="Auto-Reply" />
        <SidebarItem icon={Users} label="Accounts" />
        <SidebarItem icon={Settings} label="Settings" />
      </nav>
    </>
  );

  return (
    <div className="flex min-h-screen bg-[#F5F2ED] p-4 md:p-6 gap-6 font-sans text-black antialiased">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col gap-8">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-6 md:gap-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center bg-white/50 p-4 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3">
            {/* Mobile Nav */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger
                  render={
                    <Button variant="outline" size="icon" className="border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <Menu size={20} />
                    </Button>
                  }
                />
                <SheetContent side="left" className="bg-[#F5F2ED] border-r-2 border-black w-72">
                  <SheetHeader className="text-left mb-8">
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-8">
                    <SidebarContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <h2 className="text-2xl md:text-3xl font-black">Overview</h2>
          </div>
          <Button className="bg-[#D1FF6B] text-black border-2 border-black rounded-full px-4 py-4 md:px-6 md:py-6 font-bold hover:bg-[#b8f04d] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer text-sm md:text-base">
            <Plus className="mr-1 md:mr-2" size={18} /> <span className="hidden sm:inline">New Post</span><span className="sm:hidden">Post</span>
          </Button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <StatCard title="Total Posts" value="5" />
          <StatCard title="Scheduled" value="75" />
          <StatCard title="Engagement" value="12.5k" icon={ArrowUpRight} />
          <StatCard title="Active Accounts" value="101" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Posts */}
          <section className="flex flex-col gap-4">
             <div className="flex items-center justify-between">
                <h3 className="text-xl font-black">Upcoming Posts</h3>
                <MoreHorizontal className="text-gray-400" />
             </div>
             <div className="bg-[#EAE6DF] border-2 border-black rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <UpcomingPost title="Launch Announcement" time="Tomorrow, 10:00 AM" />
                <UpcomingPost title="Weekly Update Video" time="Friday, 2:00 PM" />
             </div>
          </section>

          {/* Recent Activity */}
          <section className="flex flex-col gap-4">
             <h3 className="text-xl font-black">Recent Activity</h3>
             <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] h-full">
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0 border border-black" />
                    <p className="font-medium text-gray-700">Your Instagram post reached <span className="font-bold text-black">4.2k users</span>.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0 border border-black" />
                    <p className="font-medium text-gray-700">Auto-reply rule <span className="font-bold text-black">"Pricing"</span> was triggered 14 times today.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0 border border-black" />
                    <p className="font-medium text-gray-700">Twitter thread published successfully.</p>
                  </li>
                </ul>
             </div>
          </section>
        </div>
        
        {/* Additional decorative element inspired by Musmentor */}
        <div className="mt-auto p-6 md:p-8 bg-[#D1FF6B] border-2 border-black rounded-[30px] md:rounded-[40px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter mb-4">
                    Interactive social<br className="hidden sm:block"/>management<br className="hidden sm:block"/>that inspire 
                    <span className="inline-flex ml-2">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-500 border-2 border-black -mr-3" />
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-black flex items-center justify-center">
                            <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rotate-45 border border-black" />
                        </div>
                    </span>
                </h2>
                <p className="max-w-md font-semibold text-gray-800 text-sm md:text-base">
                    Discover the joy of social media management through our vibrant tools, where passionate creators inspire audiences of all ages.
                </p>
            </div>
            {/* Abstract shapes */}
            <div className="absolute top-4 right-4 md:top-10 md:right-10 flex gap-1 opacity-50 md:opacity-100">
                {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-12 md:w-12 md:h-16 bg-black opacity-20 rounded-lg transform -rotate-12" style={{ marginLeft: i > 1 ? '-15px' : '0' }} />
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}
