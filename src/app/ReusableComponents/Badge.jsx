import React from 'react'
import { Users, LucideIcon, Sparkles } from 'lucide-react';

 const Badge = ({ text, Icon=Users }) => {
    return (
        // <div className="flex items-center gap-2 border border-skin-muted  px-4 py-1.5 rounded-md w-fit mb-6 backdrop-blur-md bg-skin-backgroundHighlight">
        //     <Sparkles className="text-skin-logo" size={14} />
        //     <span className="text-xs lg:text-sm text-skin-mutedLight tracking-widest font-semibold">
        //         {text}
        //     </span>
        // </div>
        <div className="flex items-center w-full max-w-6xl select-none gap-2 px-4 py-1.5 rounded-md mb-6">
            {/* Left decorative line */}
            <div className="h-[2.5px] flex-grow bg-gradient-to-r from-transparent to-[#3b82f6]" />

            {/* Center Icon Badge */}
            <div className="flex items-center justify-center p-2 rounded-full border border-skin-muted bg-skin-logo shadow-[0_0_15px_rgba(59,130,246,0.1)] backdrop-blur-sm shrink-0">
                <Icon className="text-skin-mutedLight" size={16} />
            </div>

            {/* Connected Line segment between Icon and Text */}
            <div className="flex items-center gap-1 shrink-0">
                <div className="w-2 h-[2.5px] bg-skin-logo" />
                <div className="w-1.5 h-1.5 rounded-full bg-skin-logo" />
            </div>

            {/* Section Text - Forced to uppercase and solid white */}
            <span className="text-xs lg:text-sm text-skin-mutedLight tracking-widest font-semibold">
                {text}
            </span>

            {/* Right decorative line ending with a dot */}
            <div className="flex items-center gap-1 flex-grow">
                <div className="w-1.5 h-1.5 rounded-full bg-skin-logo" />
                <div className="h-[2.5px] w-full bg-gradient-to-l from-transparent to-[#3b82f6]" />
            </div>
        </div>
    )
}

export default Badge;