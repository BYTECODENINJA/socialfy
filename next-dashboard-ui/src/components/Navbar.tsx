import React from 'react'
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            {/*---SearchBar---*/}
            <div className="hidden md:flex items-center justify-between">
                <Image src="/search.png" alt="" width={15} height={15} />
                in
            </div>

            {/*---Icon---*/}
        </div>

    )
}
export default Navbar
