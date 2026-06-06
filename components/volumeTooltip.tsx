import React, { ReactNode, useState } from "react";

export const Tooltip = ({ message, children }: { message: string; children: ReactNode }) => {
    const [show, setShow] = useState(false);
    return (
        <div className="relative flex flex-col w-100">
            <div className="flex flex-col w-100" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                {children}
            </div>
            <div className={`absolute whitespace-nowrap bottom-full flex flex-col items-center  group-hover:flex ${!show ? "hidden" : null}`}>
                <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md">
                    {message}
                </span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-600" />
            </div>
        </div>
    )
}