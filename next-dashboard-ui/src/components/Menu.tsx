import Link from "next/link";
import {
    Home,
    GraduationCap,
    Users,
    UserRound,
    BookOpen,
    School,
    CalendarDays,
    ClipboardList,
    FileText,
    BarChart2,
    CheckSquare,
    CalendarCheck,
    MessageSquare,
    Megaphone,
    UserCircle,
    Settings,
    LogOut,
} from "lucide-react";

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: Home,
                label: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: GraduationCap,
                label: "Teachers",
                href: "/list/teachers",
                visible: ["admin", "teacher"],
            },
            {
                icon: Users,
                label: "Students",
                href: "/list/students",
                visible: ["admin", "teacher"],
            },
            {
                icon: UserRound,
                label: "Parents",
                href: "/list/parents",
                visible: ["admin", "teacher"],
            },
            {
                icon: BookOpen,
                label: "Subjects",
                href: "/list/subjects",
                visible: ["admin"],
            },
            {
                icon: School,
                label: "Classes",
                href: "/list/classes",
                visible: ["admin", "teacher"],
            },
            {
                icon: CalendarDays,
                label: "Lessons",
                href: "/list/lessons",
                visible: ["admin", "teacher"],
            },
            {
                icon: ClipboardList,
                label: "Exams",
                href: "/list/exams",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: FileText,
                label: "Assignments",
                href: "/list/assignments",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: BarChart2,
                label: "Results",
                href: "/list/results",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: CheckSquare,
                label: "Attendance",
                href: "/list/attendance",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: CalendarCheck,
                label: "Events",
                href: "/list/events",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: MessageSquare,
                label: "Messages",
                href: "/list/messages",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: Megaphone,
                label: "Announcements",
                href: "/list/announcements",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
    {
        title: "OTHER",
        items: [
            {
                icon: UserCircle,
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: Settings,
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: LogOut,
                label: "Logout",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
];

const Menu = () => {
    return (
        <div className="mt-0 md:mt-4 text-sm w-full flex flex-row md:flex-col gap-1 md:gap-0">
            {menuItems.map((i) => (
                <div className="flex flex-row md:flex-col gap-1 md:gap-1 md:mb-4" key={i.title}>
                    {/* Section title — only visible on large screens */}
                    <span className="hidden lg:block text-purple-200 font-semibold text-xs my-2 px-2 tracking-wider">
                        {i.title}
                    </span>

                    {i.items.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.label} className="relative group">
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-3 text-white hover:bg-white/20 rounded-xl px-2 py-2 transition-colors"
                                >
                                    <Icon
                                        size={20}
                                        className="shrink-0 text-white group-hover:text-yellow-300 transition-colors"
                                    />
                                    {/* Label — only shown on large screens */}
                                    <span className="hidden lg:block">{item.label}</span>
                                </Link>

                                {/* Tooltip — only shown on small/medium screens (hidden on lg+) */}
                                <div className="
                                    lg:hidden
                                    absolute left-full top-1/2 -translate-y-1/2 ml-3
                                    bg-gray-900 text-white text-xs font-medium
                                    px-2 py-1 rounded-md whitespace-nowrap
                                    opacity-0 group-hover:opacity-100
                                    pointer-events-none
                                    transition-opacity duration-200
                                    z-50
                                    shadow-lg
                                ">
                                    {item.label}
                                    {/* Arrow pointing left */}
                                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Menu;
