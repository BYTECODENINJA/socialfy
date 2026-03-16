import {ReactNode} from "react";

export default function DashboardLayout({children }: { children: ReactNode }) {
    return <div className="h-screen flex">
        {/*______LEFT______*/}
        <div className="w-[13%] bg-purple-600 rounded-2xl mt-3 ml-2 md:w-[10%] lg:w-[16%] xl:w-[13%]">l</div>
        {/*______RIGHT______*/}
        <div className="w-[87%] bg-blue-100 rounded-2xl mt-3 ml-2 md:w-90% lg:w-[84%] xl:w-[87%]">r</div>

    </div>
}