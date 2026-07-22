import React from "react";

export function TaxiSprite({
    className = "",
    style,
    spinWheels = true,
}) {
    return (
        <svg
            viewBox="0 0 260 120"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="taxiBody" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffd76a" />
                    <stop offset="55%" stopColor="#f5a524" />
                    <stop offset="100%" stopColor="#b8730b" />
                </linearGradient>

                <linearGradient id="taxiRoof" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffe89a" />
                    <stop offset="100%" stopColor="#e69412" />
                </linearGradient>

                <linearGradient id="taxiGlass" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3a5a7a" />
                    <stop offset="100%" stopColor="#0f2338" />
                </linearGradient>

                <radialGradient id="taxiShadow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(10,20,30,0.5)" />
                    <stop offset="100%" stopColor="rgba(10,20,30,0)" />
                </radialGradient>

                <linearGradient id="wheelRim" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#d9dde3" />
                    <stop offset="100%" stopColor="#6c737d" />
                </linearGradient>
            </defs>

            {/* Ground Shadow */}
            <ellipse cx="130" cy="108" rx="100" ry="8" fill="url(#taxiShadow)" />

            {/* Body */}
            <g>
                <path
                    d="M18,86 Q22,72 40,68 L70,66 Q92,44 130,42 Q170,42 196,66 L226,72 Q240,76 242,90 L242,96 Q242,100 238,100 L20,100 Q16,100 16,96 Z"
                    fill="url(#taxiBody)"
                    stroke="#3a2308"
                    strokeWidth="1.2"
                />

                <path
                    d="M80,66 Q100,48 130,46 Q162,46 186,66 Z"
                    fill="url(#taxiRoof)"
                    opacity="0.95"
                />

                <path
                    d="M90,64 Q106,52 128,50 L128,64 Z"
                    fill="url(#taxiGlass)"
                />

                <path
                    d="M132,50 Q158,52 176,64 L132,64 Z"
                    fill="url(#taxiGlass)"
                />

                <rect x="128.5" y="50" width="3" height="14" fill="#2a1a06" />

                {/* Taxi Stripe */}
                <g>
                    {Array.from({ length: 16 }).map((_, i) => (
                        <rect
                            key={i}
                            x={22 + i * 14}
                            y={92}
                            width="7"
                            height="7"
                            fill={i % 2 === 0 ? "#0e1a2a" : "#fff8e1"}
                        />
                    ))}
                </g>

                {/* Headlight */}
                <circle
                    cx="230"
                    cy="82"
                    r="4.2"
                    fill="#fff6c2"
                    stroke="#8a5a10"
                    strokeWidth="0.8"
                />
                <circle cx="230" cy="82" r="1.6" fill="#fff" />

                {/* Taillight */}
                <rect x="19" y="78" width="6" height="6" rx="1.5" fill="#c02b2b" />

                {/* Door */}
                <path
                    d="M130,66 L130,92"
                    stroke="#3a2308"
                    strokeWidth="0.9"
                    opacity="0.5"
                />

                {/* Handles */}
                <rect
                    x="118"
                    y="76"
                    width="8"
                    height="2"
                    rx="1"
                    fill="#2a1a06"
                    opacity="0.6"
                />
                <rect
                    x="136"
                    y="76"
                    width="8"
                    height="2"
                    rx="1"
                    fill="#2a1a06"
                    opacity="0.6"
                />

                {/* Taxi Sign */}
                <g transform="translate(112,36)">
                    <rect
                        width="36"
                        height="12"
                        rx="2"
                        fill="#0e1a2a"
                        stroke="#f5a524"
                        strokeWidth="0.8"
                    />
                    <text
                        x="18"
                        y="9"
                        textAnchor="middle"
                        fontSize="8"
                        fontWeight="800"
                        fill="#ffd76a"
                        fontFamily="Poppins, sans-serif"
                        letterSpacing="1"
                    >
                        TAXI
                    </text>
                </g>
            </g>

            {/* Left Wheel */}
            <g>
                <circle cx="68" cy="100" r="14" fill="#0e1116" />
                <circle cx="68" cy="100" r="9" fill="url(#wheelRim)" />

                <g
                    style={{
                        transformOrigin: "68px 100px",
                        transformBox: "fill-box",
                    }}
                    className={spinWheels ? "taxi-wheel-spin" : ""}
                >
                    <circle cx="68" cy="92" r="1.6" fill="#8a8f97" />
                    <circle cx="68" cy="108" r="1.6" fill="#8a8f97" />
                </g>
            </g>

            {/* Right Wheel */}
            <g>
                <circle cx="194" cy="100" r="14" fill="#0e1116" />
                <circle cx="194" cy="100" r="9" fill="url(#wheelRim)" />

                <g
                    style={{
                        transformOrigin: "194px 100px",
                        transformBox: "fill-box",
                    }}
                    className={spinWheels ? "taxi-wheel-spin" : ""}
                >
                    <circle cx="194" cy="92" r="1.6" fill="#8a8f97" />
                    <circle cx="194" cy="108" r="1.6" fill="#8a8f97" />
                </g>
            </g>
        </svg>
    );
}