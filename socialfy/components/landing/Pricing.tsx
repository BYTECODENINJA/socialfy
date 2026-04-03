"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for exploring the basics",
    features: [
      "3 Social Accounts",
      "Basic Analytics",
      "5 AI-Powered Replies/mo",
      "Standard Support",
      "Simple Post Scheduling"
    ],
    cta: "Start for Free",
    bgColor: "bg-[#EAE6DF]",
    highlight: false
  },
  {
    name: "Premium",
    price: "13",
    description: "For creators who want to dominate",
    features: [
      "Unlimited Accounts",
      "Deep Analytics & Insights",
      "Unlimited AI-Powered Replies",
      "Priority 24/7 Support",
      "Bulk Scheduling & Recurrency",
      "Custom Brand Reports"
    ],
    cta: "Get Premium",
    bgColor: "bg-[#D1FF6B]",
    highlight: true
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-6">
            Simple, <span className="underline decoration-black decoration-8 underline-offset-8">transparent</span> pricing
          </h2>
          <p className="text-xl font-semibold text-gray-700 max-w-2xl mx-auto">
            Choose the plan that fits your social strategy. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`flex flex-col p-10 border-4 border-black rounded-[40px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${plan.bgColor} transition-transform hover:-translate-y-2 relative overflow-hidden`}
            >
              {plan.highlight && (
                <div className="absolute top-8 right-[-35px] bg-orange-500 text-white font-black py-1 px-12 rotate-45 border-y-2 border-black text-xs uppercase tracking-widest">
                  Popular
                </div>
              )}
              
              <h3 className="text-3xl font-black mb-2 italic tracking-tighter">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-black">${plan.price}</span>
                <span className="font-bold text-gray-700">/per month</span>
              </div>
              <p className="font-semibold text-gray-700 mb-8">{plan.description}</p>
              
              <ul className="flex flex-col gap-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 font-bold text-lg">
                    <div className="shrink-0 w-6 h-6 rounded-full border-2 border-black flex items-center justify-center bg-white">
                      <Check size={14} strokeWidth={4} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link href="/signup" className="w-full">
                  <Button className={`w-full py-8 text-xl font-black border-2 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all active:translate-x-1 active:translate-y-1 ${plan.highlight ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-50'}`}>
                    {plan.cta} <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
