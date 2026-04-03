"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { UserButton, useUser, SignInButton, SignUpButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { isSignedIn, user } = useUser();

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F5F2ED] border-b-4 border-black py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-black italic tracking-tighter">
          Socialfy
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-bold text-lg hover:underline underline-offset-4 decoration-2"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            {isSignedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="font-bold text-lg hover:underline underline-offset-4 decoration-2"
                >
                  Dashboard
                </Link>
                <UserButton />
              </>
            ) : (
              <>
                <Button variant="ghost" className="font-bold text-lg border-2 border-transparent hover:border-black rounded-xl" asChild>
                  <Link href="/signin">
                    Log in
                  </Link>
                </Button>
                <Button className="bg-[#D1FF6B] text-black border-2 border-black rounded-xl px-6 py-5 font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#b8f04d] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none" asChild>
                  <Link href="/signup">
                    Sign Up
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 border-2 border-black rounded-lg bg-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-[#F5F2ED] border-b-4 border-black transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 py-6" : "max-h-0"
        )}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-bold text-xl"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col w-full gap-4 mt-4">
            {isSignedIn ? (
              <>
                <Button className="w-full bg-[#D1FF6B] text-black border-2 border-black rounded-xl py-6 font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" asChild>
                  <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                    Dashboard
                  </Link>
                </Button>
                <div className="flex justify-center py-2">
                   <UserButton />
                </div>
              </>
            ) : (
              <>
                <Button variant="outline" className="w-full font-bold text-lg border-2 border-black rounded-xl py-6 bg-white" asChild>
                  <Link href="/signin" onClick={() => setIsOpen(false)}>
                    Log in
                  </Link>
                </Button>
                <Button className="w-full bg-[#D1FF6B] text-black border-2 border-black rounded-xl py-6 font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" asChild>
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
