"use client";

import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Lifestyle Influencer",
    content: "Socialfy has completely changed how I manage my Instagram. The AI autoreply feature saves me hours every day and my engagement has never been higher!",
    avatar: "S",
    color: "bg-blue-200"
  },
  {
    name: "Mark Thompson",
    role: "CEO at TechStart",
    content: "The analytics are incredibly deep yet easy to understand. We've seen a 40% growth in our Twitter reach within the first month of using Socialfy.",
    avatar: "M",
    color: "bg-orange-200"
  },
  {
    name: "Elena Rodriguez",
    role: "Social Media Manager",
    content: "I manage 10+ clients and Socialfy's content calendar is a lifesaver. The neubrutalism UI isn't just cool to look at—it's actually really intuitive.",
    avatar: "E",
    color: "bg-[#D1FF6B]"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-6">
            Loved by <span className="bg-orange-400 border-2 border-black px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block -rotate-2">creators</span> worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index}
              className="p-8 border-2 border-black rounded-[32px] bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6"
            >
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={18} fill="currentColor" className="text-yellow-500" />
                ))}
              </div>
              
              <p className="text-lg font-bold text-gray-800 leading-relaxed italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <Avatar className={`size-12 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${t.color}`}>
                  <AvatarFallback className="font-bold">{t.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-black text-lg leading-none">{t.name}</h4>
                  <p className="font-bold text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
