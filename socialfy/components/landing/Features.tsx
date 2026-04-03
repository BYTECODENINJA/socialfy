"use client";

import { 
  Calendar, 
  MessageSquare, 
  Library, 
  BarChart3, 
  Layout, 
  Share2 
} from "lucide-react";

const features = [
  {
    icon: <Calendar className="size-8" />,
    title: "Smart Scheduling",
    description: "Plan your content weeks in advance with our AI-optimized scheduler for maximum reach.",
    bgColor: "bg-[#D1FF6B]"
  },
  {
    icon: <MessageSquare className="size-8" />,
    title: "AI-Powered Autoreply",
    description: "Engage with your audience 24/7. Let AI handle routine comments and inquiries instantly.",
    bgColor: "bg-orange-400"
  },
  {
    icon: <Library className="size-8" />,
    title: "Media Management",
    description: "Centralized storage for all your assets. Organize, edit, and repurpose media effortlessly.",
    bgColor: "bg-purple-400"
  },
  {
    icon: <BarChart3 className="size-8" />,
    title: "Advanced Analytics",
    description: "Track performance across all platforms with real-time insights and growth metrics.",
    bgColor: "bg-blue-400"
  },
  {
    icon: <Layout className="size-8" />,
    title: "Content Calendar",
    description: "A beautiful, intuitive view of your social strategy. Drag and drop to rearrange your posts.",
    bgColor: "bg-yellow-400"
  },
  {
    icon: <Share2 className="size-8" />,
    title: "Multiplatform Posts",
    description: "Write once, publish everywhere. One-click distribution to X, Instagram, LinkedIn, and more.",
    bgColor: "bg-pink-400"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-6">
            Everything you need to <span className="bg-[#D1FF6B] border-2 border-black px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">thrive online</span>
          </h2>
          <p className="text-xl font-semibold text-gray-700 max-w-2xl mx-auto">
            Socialfy provides a comprehensive suite of tools designed to streamline your workflow and boost your social engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 border-2 border-black rounded-3xl bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <div className={`inline-flex items-center justify-center p-4 rounded-2xl border-2 border-black mb-6 ${feature.bgColor} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black mb-4">{feature.title}</h3>
              <p className="font-semibold text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
