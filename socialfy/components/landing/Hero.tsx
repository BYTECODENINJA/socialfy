"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F2ED] py-20 px-6 md:px-12 lg:py-32">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-1.5 rounded-full mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <Sparkles size={16} className="text-yellow-500" />
          <span className="font-bold text-sm">AI-Powered Social Media Management</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter leading-[1.1] mb-8 max-w-5xl">
          Scale your <span className="bg-[#D1FF6B] border-2 border-black px-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block my-2">social presence</span> with Socialfy.
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl font-semibold text-gray-700 max-w-2xl mb-12">
          The ultimate platform for creators and businesses to schedule, automate, and analyze social media across all platforms.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <Button className="bg-[#D1FF6B] text-black border-2 border-black rounded-2xl px-10 py-8 text-xl font-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-[#b8f04d] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none" nativeButton={false} render={
            <Link href="/signup">
              Start for Free <ArrowRight className="ml-2" />
            </Link>
          } />
          <Button variant="outline" className="bg-white border-2 border-black rounded-2xl px-10 py-8 text-xl font-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 transition-all active:translate-x-1 active:translate-y-1 active:shadow-none" nativeButton={false} render={
            <Link href="#features">
              See Features
            </Link>
          } />
        </div>

        {/* Abstract shapes/Icons for visual interest */}
        <div className="absolute top-20 left-10 opacity-20 hidden lg:block animate-bounce">
           <div className="w-20 h-20 bg-orange-500 rounded-full border-4 border-black rotate-12" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 hidden lg:block animate-pulse">
           <div className="w-24 h-24 bg-[#D1FF6B] border-4 border-black rotate-45" />
        </div>
      </div>
    </section>
  );
}
