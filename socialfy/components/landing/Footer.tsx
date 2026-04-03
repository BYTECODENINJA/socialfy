"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F2ED] border-t-4 border-black py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6 col-span-1 lg:col-span-2">
            <Link href="/" className="text-3xl font-black italic tracking-tighter">
              Socialfy
            </Link>
            <p className="font-bold text-gray-700 max-w-sm">
              Socialfy is an all-in-one social media management platform built for modern creators who value efficiency and bold design.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <Link key={i} href="#" className="p-3 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#D1FF6B] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-black">Platform</h4>
            <ul className="flex flex-col gap-3 font-bold text-gray-700">
              <li><Link href="#features" className="hover:underline">Features</Link></li>
              <li><Link href="#pricing" className="hover:underline">Pricing</Link></li>
              <li><Link href="#testimonials" className="hover:underline">Testimonials</Link></li>
              <li><Link href="#" className="hover:underline">Blog</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-black">Company</h4>
            <ul className="flex flex-col gap-3 font-bold text-gray-700">
              <li><Link href="#" className="hover:underline">About</Link></li>
              <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold text-gray-600">
            © {currentYear} Socialfy. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#D1FF6B] border border-black rounded-full" />
            <p className="font-bold text-sm">Crafted with passion by Socialfy Team</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
