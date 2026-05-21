import { Sparkles } from 'lucide-react'
import React from 'react'

const Badge = ({text}) => {
    return (
        <div className="flex items-center gap-2 border border-skin-muted  px-4 py-1.5 rounded-md w-fit mb-6 backdrop-blur-md bg-skin-backgroundHighlight">
            <Sparkles className="text-skin-logo" size={14} />
            <span className="text-xs lg:text-sm text-skin-mutedLight tracking-widest font-semibold">
                {text}
            </span>
        </div>
    )
}

export default Badge