"use client";
import React, { useRef, useState } from 'react';
import './SpotlightCard.css';

const SpotlightCard = () => {
    const cardRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();

        // Calculate position relative to the element
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={cardRef}
            className="spotlight-card"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
            style={{
                '--x': `${position.x}px`,
                '--y': `${position.y}px`,
                '--spotlight-opacity': isFocused ? 1 : 0,
            }}
        >
            <div className="spotlight-content">
                <h2>Premium Gift</h2>
                <p>This card has a subtle glow following your cursor.</p>
                <button className="card-btn">Learn More</button>
            </div>
        </div>
    );
};

export default SpotlightCard;