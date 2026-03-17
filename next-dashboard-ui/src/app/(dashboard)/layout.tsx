import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row p-2 gap-2 bg-slate-50">

            {/* ______ SIDEBAR ______ */}
            <div className="w-full md:w-[10%] lg:w-[16%] xl:w-[13%] bg-purple-600 rounded-2xl p-4 flex flex-col items-center md:items-start shrink-0">

                {/* Logo */}
                <Link href="/" className="flex items-center justify-center gap-2 mb-8">
                    <Image src="/logo.png" alt="logo" width={30} height={30} />
                    <span className="hidden lg:block font-bold text-white text-sm">EduTech</span>
                </Link>

                {/* Navigation Menu */}
                <Menu />

            </div>

            {/* ______ MAIN CONTENT ______ */}
            <main className="flex-1 bg-white rounded-2xl shadow-sm overflow-y-auto p-4 md:h-[calc(100vh-1rem)]">
                {children}
            </main>

        </div>
    );
}
