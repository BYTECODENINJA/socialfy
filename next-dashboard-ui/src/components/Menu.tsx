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
        <div className="mt-4 text-sm w-full">
            {menuItems.map((i) => (
                <div className="flex flex-col gap-1 mb-4" key={i.title}>
                    <span className="hidden lg:block text-purple-200 font-semibold text-xs my-2 px-2 tracking-wider">
                        {i.title}
                    </span>
                    {i.items.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                href={item.href}
                                key={item.label}
                                className="flex items-center gap-3 text-white hover:bg-white/20 rounded-xl px-2 py-2 transition-colors group"
                            >
                                <Icon
                                    size={20}
                                    className="shrink-0 text-white group-hover:text-yellow-300 transition-colors"
                                />
                                <span className="hidden lg:block">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Menu;
