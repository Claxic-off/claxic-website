// Inline SVG cartoon illustrations for Claxic website
// All illustrations use thick black outlines, flat colors, and friendly cartoon style.

export function HeroIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 480 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Friendly cartoon developer working on a laptop with books and a lightbulb"
      role="img"
    >
      {/* Desk */}
      <rect x="40" y="320" width="400" height="18" rx="6" fill="#E8D5C0" stroke="#151515" strokeWidth="3"/>
      <rect x="70" y="338" width="16" height="60" rx="4" fill="#D4BEA8" stroke="#151515" strokeWidth="2.5"/>
      <rect x="394" y="338" width="16" height="60" rx="4" fill="#D4BEA8" stroke="#151515" strokeWidth="2.5"/>

      {/* Books stack */}
      <rect x="50" y="265" width="52" height="14" rx="4" fill="#FF2B12" stroke="#151515" strokeWidth="2.5"/>
      <text x="76" y="275.5" textAnchor="middle" fontSize="7" fill="white" fontFamily="Inter, sans-serif" fontWeight="700">Idea</text>
      <rect x="54" y="251" width="48" height="14" rx="4" fill="#FFF4D8" stroke="#151515" strokeWidth="2.5"/>
      <text x="78" y="261.5" textAnchor="middle" fontSize="7" fill="#151515" fontFamily="Inter, sans-serif" fontWeight="700">Develop</text>
      <rect x="50" y="237" width="52" height="14" rx="4" fill="#4A90D9" stroke="#151515" strokeWidth="2.5"/>
      <text x="76" y="247.5" textAnchor="middle" fontSize="7" fill="white" fontFamily="Inter, sans-serif" fontWeight="700">Learn</text>
      <rect x="54" y="223" width="48" height="14" rx="4" fill="#5CB85C" stroke="#151515" strokeWidth="2.5"/>
      <text x="78" y="233.5" textAnchor="middle" fontSize="7" fill="white" fontFamily="Inter, sans-serif" fontWeight="700">Grow</text>

      {/* Plant pot */}
      <ellipse cx="395" cy="308" rx="22" ry="8" fill="#8B4513" stroke="#151515" strokeWidth="2"/>
      <rect x="373" y="300" width="44" height="20" rx="6" fill="#A0522D" stroke="#151515" strokeWidth="2"/>
      {/* Plant stems */}
      <path d="M395 298 Q380 280 370 268" stroke="#5CB85C" strokeWidth="3" strokeLinecap="round"/>
      <ellipse cx="368" cy="264" rx="12" ry="8" fill="#5CB85C" stroke="#151515" strokeWidth="2" transform="rotate(-20 368 264)"/>
      <path d="M395 295 Q408 275 415 263" stroke="#5CB85C" strokeWidth="3" strokeLinecap="round"/>
      <ellipse cx="417" cy="260" rx="12" ry="8" fill="#4CAF50" stroke="#151515" strokeWidth="2" transform="rotate(15 417 260)"/>
      <path d="M395 292 Q395 270 395 255" stroke="#5CB85C" strokeWidth="3" strokeLinecap="round"/>
      <ellipse cx="395" cy="250" rx="10" ry="7" fill="#5CB85C" stroke="#151515" strokeWidth="2"/>

      {/* Laptop base */}
      <rect x="130" y="270" width="220" height="50" rx="8" fill="#2D2D2D" stroke="#151515" strokeWidth="3"/>
      <rect x="140" y="278" width="200" height="35" rx="4" fill="#1a1a1a"/>
      {/* Laptop screen */}
      <rect x="140" y="140" width="200" height="135" rx="10" fill="#1E1E1E" stroke="#151515" strokeWidth="3"/>
      <rect x="148" y="148" width="184" height="120" rx="6" fill="#252526"/>
      {/* Code lines */}
      <rect x="156" y="158" width="60" height="5" rx="2" fill="#FF2B12" opacity="0.9"/>
      <rect x="164" y="168" width="80" height="5" rx="2" fill="#4A90D9" opacity="0.9"/>
      <rect x="164" y="178" width="100" height="5" rx="2" fill="#5CB85C" opacity="0.9"/>
      <rect x="164" y="188" width="70" height="5" rx="2" fill="#E6DB74" opacity="0.9"/>
      <rect x="156" y="198" width="90" height="5" rx="2" fill="#FF2B12" opacity="0.9"/>
      <rect x="164" y="208" width="60" height="5" rx="2" fill="#4A90D9" opacity="0.9"/>
      <rect x="164" y="218" width="110" height="5" rx="2" fill="#5CB85C" opacity="0.9"/>
      <rect x="156" y="228" width="80" height="5" rx="2" fill="#E6DB74" opacity="0.9"/>
      {/* Screen hinge */}
      <rect x="220" y="273" width="40" height="6" rx="3" fill="#3D3D3D" stroke="#151515" strokeWidth="1.5"/>
      {/* Laptop touchpad */}
      <rect x="210" y="285" width="60" height="28" rx="4" fill="#3D3D3D"/>

      {/* Developer character */}
      {/* Hoodie body */}
      <path d="M210 240 Q200 250 198 270 L198 320 L285 320 L285 270 Q283 250 273 240 Z" fill="#2D3A4A" stroke="#151515" strokeWidth="3"/>
      {/* Hood */}
      <path d="M215 240 Q241 225 268 240 Q260 210 241 205 Q222 210 215 240 Z" fill="#2D3A4A" stroke="#151515" strokeWidth="2.5"/>
      {/* Hoodie pocket */}
      <rect x="218" y="285" width="47" height="25" rx="6" fill="#232F3D" stroke="#151515" strokeWidth="2"/>
      {/* Claxic brand mark on hoodie */}
      <text x="241" y="255" textAnchor="middle" fontSize="7" fill="#FF2B12" fontFamily="Inter, sans-serif" fontWeight="900">CLAXIC</text>
      {/* Arms */}
      <path d="M198 255 Q175 260 170 275 L178 278 Q185 265 202 262 Z" fill="#2D3A4A" stroke="#151515" strokeWidth="2.5"/>
      <path d="M285 255 Q308 260 313 275 L305 278 Q298 265 281 262 Z" fill="#2D3A4A" stroke="#151515" strokeWidth="2.5"/>
      {/* Hands on keyboard */}
      <ellipse cx="175" cy="280" rx="14" ry="10" fill="#FDBCB4" stroke="#151515" strokeWidth="2"/>
      <ellipse cx="308" cy="280" rx="14" ry="10" fill="#FDBCB4" stroke="#151515" strokeWidth="2"/>
      {/* Head */}
      <ellipse cx="241" cy="185" rx="36" ry="38" fill="#FDBCB4" stroke="#151515" strokeWidth="3"/>
      {/* Hair */}
      <path d="M208 175 Q210 148 241 147 Q272 148 274 175 Q268 155 241 153 Q214 155 208 175 Z" fill="#3D2B1F" stroke="#151515" strokeWidth="2"/>
      {/* Eyes */}
      <circle cx="228" cy="183" r="5" fill="white" stroke="#151515" strokeWidth="2"/>
      <circle cx="254" cy="183" r="5" fill="white" stroke="#151515" strokeWidth="2"/>
      <circle cx="229" cy="184" r="2.5" fill="#151515"/>
      <circle cx="255" cy="184" r="2.5" fill="#151515"/>
      <circle cx="230" cy="183" r="1" fill="white"/>
      <circle cx="256" cy="183" r="1" fill="white"/>
      {/* Smile */}
      <path d="M231 196 Q241 204 251 196" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Eyebrows */}
      <path d="M223 177 Q228 174 233 177" stroke="#3D2B1F" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M249 177 Q254 174 259 177" stroke="#3D2B1F" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Ears */}
      <ellipse cx="205" cy="186" rx="6" ry="8" fill="#FDBCB4" stroke="#151515" strokeWidth="2"/>
      <ellipse cx="277" cy="186" rx="6" ry="8" fill="#FDBCB4" stroke="#151515" strokeWidth="2"/>
      {/* Headphones */}
      <path d="M207 172 Q241 145 275 172" stroke="#2D3A4A" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <rect x="200" y="170" width="12" height="18" rx="6" fill="#FF2B12" stroke="#151515" strokeWidth="2"/>
      <rect x="271" y="170" width="12" height="18" rx="6" fill="#FF2B12" stroke="#151515" strokeWidth="2"/>

      {/* Lightbulb floating */}
      <circle cx="360" cy="90" r="26" fill="#FFF4D8" stroke="#151515" strokeWidth="2.5"/>
      <path d="M350 100 Q360 115 370 100" stroke="#151515" strokeWidth="2" fill="none"/>
      <rect x="354" y="113" width="12" height="6" rx="2" fill="#D4BEA8" stroke="#151515" strokeWidth="1.5"/>
      {/* Lightbulb shine */}
      <path d="M348 84 Q352 78 358 82" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Rays */}
      <line x1="360" y1="58" x2="360" y2="64" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
      <line x1="381" y1="64" x2="377" y2="69" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
      <line x1="339" y1="64" x2="343" y2="69" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
      <line x1="388" y1="82" x2="382" y2="84" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
      <line x1="332" y1="82" x2="338" y2="84" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>

      {/* Floating card: Build Solutions */}
      <rect x="30" y="100" width="120" height="36" rx="8" fill="white" stroke="#151515" strokeWidth="2"/>
      <circle cx="48" cy="118" r="7" fill="#FF2B12"/>
      <text x="60" y="115" fontSize="8" fill="#151515" fontFamily="Inter, sans-serif" fontWeight="700">Build</text>
      <text x="60" y="126" fontSize="8" fill="#555B65" fontFamily="Inter, sans-serif">Solutions</text>

      {/* Floating card: Learn Skills */}
      <rect x="335" y="155" width="115" height="36" rx="8" fill="white" stroke="#151515" strokeWidth="2"/>
      <circle cx="352" cy="173" r="7" fill="#4A90D9"/>
      <text x="364" y="170" fontSize="8" fill="#151515" fontFamily="Inter, sans-serif" fontWeight="700">Learn</text>
      <text x="364" y="181" fontSize="8" fill="#555B65" fontFamily="Inter, sans-serif">Skills</text>

      {/* Floating card: Grow Together */}
      <rect x="30" y="200" width="118" height="36" rx="8" fill="white" stroke="#151515" strokeWidth="2"/>
      <circle cx="48" cy="218" r="7" fill="#5CB85C"/>
      <text x="60" y="215" fontSize="8" fill="#151515" fontFamily="Inter, sans-serif" fontWeight="700">Grow</text>
      <text x="60" y="226" fontSize="8" fill="#555B65" fontFamily="Inter, sans-serif">Together</text>

      {/* Dotted arrows */}
      <path d="M148 118 Q168 118 168 155" stroke="#FF2B12" strokeWidth="1.5" strokeDasharray="4 3" fill="none" markerEnd="url(#arrow)"/>
      <path d="M335 173 Q310 173 290 230" stroke="#4A90D9" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
      <path d="M148 218 Q175 218 180 250" stroke="#5CB85C" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
    </svg>
  );
}

export function TechIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 820 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Pixel-style coding workspace with robot, floating panels and a desk"
      role="img"
    >
      <style>{`
        .pixel-float-slow {
          animation: pixelFloat 4.6s ease-in-out infinite;
          transform-origin: center;
        }

        .pixel-float-fast {
          animation: pixelFloatFast 3.8s ease-in-out infinite;
          transform-origin: center;
        }

        .pixel-pulse {
          animation: pixelPulse 3.3s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes pixelFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes pixelFloatFast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(-2deg); }
        }

        @keyframes pixelPulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .pixel-float-slow, .pixel-float-fast, .pixel-pulse {
            animation: none !important;
          }
        }
      `}</style>

      <rect x="30" y="40" width="760" height="470" rx="22" fill="#FFFDF8" stroke="#202020" strokeWidth="4"/>

      <g className="pixel-float-slow">
        <rect x="60" y="70" width="86" height="56" rx="12" fill="#FFF1ED" stroke="#202020" strokeWidth="4"/>
        <rect x="76" y="88" width="34" height="9" rx="2" fill="#FF2B12"/>
        <rect x="76" y="103" width="22" height="7" rx="2" fill="#202020" opacity="0.55"/>
        <circle cx="118" cy="99" r="8" fill="#FF2B12"/>
      </g>

      <g className="pixel-float-fast">
        <rect x="168" y="90" width="128" height="80" rx="14" fill="#FFF1ED" stroke="#202020" strokeWidth="4"/>
        <rect x="184" y="110" width="26" height="9" rx="2" fill="#FF2B12"/>
        <rect x="216" y="110" width="38" height="9" rx="2" fill="#202020" opacity="0.55"/>
        <rect x="184" y="129" width="22" height="8" rx="2" fill="#202020" opacity="0.7"/>
        <rect x="212" y="129" width="32" height="8" rx="2" fill="#FF2B12" opacity="0.8"/>
      </g>

      <g className="pixel-pulse">
        <rect x="612" y="92" width="104" height="86" rx="18" fill="#FFF1ED" stroke="#202020" strokeWidth="4"/>
        <circle cx="664" cy="126" r="18" fill="#FF2B12"/>
        <circle cx="664" cy="126" r="28" stroke="#FF2B12" strokeWidth="3" opacity="0.42"/>
        <path d="M653 126 H659 M669 126 H675 M664 117 V121 M664 131 V135" stroke="#202020" strokeWidth="3" strokeLinecap="round"/>
      </g>

      <rect x="120" y="210" width="560" height="220" rx="18" fill="#202020" stroke="#202020" strokeWidth="4"/>
      <rect x="142" y="228" width="516" height="176" rx="10" fill="#262C31"/>
      <rect x="162" y="248" width="86" height="12" rx="3" fill="#FF2B12"/>
      <rect x="178" y="272" width="120" height="12" rx="3" fill="#70A3FF"/>
      <rect x="178" y="294" width="178" height="12" rx="3" fill="#78C7A2"/>
      <rect x="178" y="316" width="116" height="12" rx="3" fill="#FFD166"/>
      <rect x="176" y="338" width="142" height="12" rx="3" fill="#FF8E73"/>

      <path d="M278 365 L318 365 L318 395 L278 395 Z" fill="#FF2B12" opacity="0.8"/>

      <path d="M490 252 L450 348 H560 L535 252 Z" fill="#FF2B12" stroke="#202020" strokeWidth="4"/>
      <ellipse cx="500" cy="224" rx="84" ry="70" fill="#F5CDB7" stroke="#202020" strokeWidth="4"/>
      <path d="M418 219 Q436 146 500 146 Q565 146 584 219 Q561 190 500 187 Q462 188 418 219 Z" fill="#202020"/>
      <circle cx="470" cy="233" r="8" fill="#FFFFFF" stroke="#202020" strokeWidth="3"/>
      <circle cx="533" cy="233" r="8" fill="#FFFFFF" stroke="#202020" strokeWidth="3"/>
      <circle cx="472" cy="235" r="3" fill="#202020"/>
      <circle cx="535" cy="235" r="3" fill="#202020"/>
      <path d="M474 263 Q500 280 526 263" stroke="#202020" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <path d="M460 216 Q470 208 480 216" stroke="#202020" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M520 216 Q530 208 540 216" stroke="#202020" strokeWidth="3" strokeLinecap="round" fill="none"/>

      <g className="pixel-float-fast" transform="translate(222 390)">
        <rect x="0" y="0" width="120" height="84" rx="14" fill="#FFF1ED" stroke="#202020" strokeWidth="4"/>
        <rect x="20" y="18" width="80" height="12" rx="3" fill="#FF2B12"/>
        <rect x="20" y="38" width="38" height="28" rx="8" fill="#FFE2D7" stroke="#202020" strokeWidth="3"/>
        <rect x="66" y="38" width="28" height="8" rx="2" fill="#202020" opacity="0.72"/>
        <rect x="66" y="50" width="22" height="8" rx="2" fill="#202020" opacity="0.42"/>
      </g>

      <g className="pixel-float-fast" transform="translate(586 382)">
        <rect x="0" y="0" width="112" height="74" rx="12" fill="#FFF1ED" stroke="#202020" strokeWidth="4"/>
        <rect x="18" y="14" width="76" height="10" rx="2" fill="#FF2B12"/>
        <rect x="18" y="28" width="28" height="20" rx="5" fill="#FFE2D7" stroke="#202020" strokeWidth="3"/>
        <rect x="52" y="28" width="38" height="7" rx="2" fill="#202020" opacity="0.7"/>
        <rect x="52" y="38" width="28" height="7" rx="2" fill="#202020" opacity="0.45"/>
      </g>

      <rect x="116" y="432" width="590" height="34" rx="10" fill="#E6D5C6" stroke="#202020" strokeWidth="4"/>
      <rect x="160" y="468" width="18" height="34" rx="4" fill="#D7BFA2" stroke="#202020" strokeWidth="3"/>
      <rect x="642" y="468" width="18" height="34" rx="4" fill="#D7BFA2" stroke="#202020" strokeWidth="3"/>
      <rect x="150" y="474" width="520" height="16" rx="5" fill="#E9DDD0" stroke="#202020" strokeWidth="3"/>

      <g transform="translate(90 430)" className="pixel-float-fast">
        <rect x="0" y="0" width="76" height="54" rx="10" fill="#E9F8D9" stroke="#202020" strokeWidth="3"/>
        <path d="M20 36 L14 22 L26 26 L34 12 L38 24 L52 18 L44 36 Z" fill="#7BB866" stroke="#202020" strokeWidth="3"/>
        <path d="M8 42 H70" stroke="#202020" strokeWidth="3" strokeLinecap="round"/>
      </g>

      <g transform="translate(640 420)" className="pixel-float-slow">
        <rect x="0" y="0" width="78" height="56" rx="10" fill="#E9F8D9" stroke="#202020" strokeWidth="3"/>
        <path d="M20 36 L14 24 L26 26 L34 12 L38 22 L52 18 L52 36 Z" fill="#7BB866" stroke="#202020" strokeWidth="3"/>
        <circle cx="30" cy="18" r="8" fill="#FF2B12"/>
      </g>
    </svg>
  );
}

export function AcademyIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 360 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cartoon student learning with books and laptop"
      role="img"
    >
      {/* Desk */}
      <rect x="30" y="225" width="300" height="13" rx="5" fill="#D4BEA8" stroke="#151515" strokeWidth="2.5"/>
      <rect x="50" y="238" width="12" height="40" rx="3" fill="#C4A890" stroke="#151515" strokeWidth="2"/>
      <rect x="298" y="238" width="12" height="40" rx="3" fill="#C4A890" stroke="#151515" strokeWidth="2"/>
      {/* Notebook */}
      <rect x="40" y="185" width="55" height="42" rx="5" fill="#FFF4D8" stroke="#151515" strokeWidth="2.5"/>
      <line x1="50" y1="198" x2="85" y2="198" stroke="#555B65" strokeWidth="1.5"/>
      <line x1="50" y1="207" x2="85" y2="207" stroke="#555B65" strokeWidth="1.5"/>
      <line x1="50" y1="216" x2="75" y2="216" stroke="#555B65" strokeWidth="1.5"/>
      <rect x="37" y="185" width="7" height="42" rx="3" fill="#FF2B12" stroke="#151515" strokeWidth="1.5"/>
      {/* Books */}
      <rect x="265" y="192" width="18" height="35" rx="3" fill="#4A90D9" stroke="#151515" strokeWidth="2"/>
      <rect x="279" y="196" width="18" height="31" rx="3" fill="#5CB85C" stroke="#151515" strokeWidth="2"/>
      <rect x="293" y="200" width="18" height="27" rx="3" fill="#FF2B12" stroke="#151515" strokeWidth="2"/>
      {/* Laptop */}
      <rect x="120" y="155" width="160" height="75" rx="8" fill="#1E1E1E" stroke="#151515" strokeWidth="2.5"/>
      <rect x="128" y="162" width="144" height="60" rx="5" fill="#252526"/>
      {/* Screen content */}
      <rect x="136" y="170" width="40" height="5" rx="2" fill="#FF2B12" opacity="0.8"/>
      <rect x="144" y="180" width="60" height="5" rx="2" fill="#4A90D9" opacity="0.8"/>
      <rect x="144" y="190" width="80" height="5" rx="2" fill="#5CB85C" opacity="0.8"/>
      <rect x="144" y="200" width="50" height="5" rx="2" fill="#E6DB74" opacity="0.8"/>
      {/* Laptop base */}
      <rect x="110" y="228" width="180" height="10" rx="4" fill="#2D2D2D" stroke="#151515" strokeWidth="2"/>
      <rect x="178" y="228" width="44" height="8" rx="3" fill="#3D3D3D"/>
      {/* Character */}
      {/* Body with jumper */}
      <path d="M160 215 Q152 223 151 228 L209 228 L208 223 Q200 215 190 215 Z" fill="#4A90D9" stroke="#151515" strokeWidth="2.5"/>
      {/* Head */}
      <ellipse cx="180" cy="178" rx="28" ry="30" fill="#FDBCB4" stroke="#151515" strokeWidth="2.5"/>
      {/* Hair - ponytail */}
      <path d="M154 170 Q156 150 180 149 Q204 150 206 170 Q200 155 180 154 Q160 155 154 170 Z" fill="#3D2B1F" stroke="#151515" strokeWidth="2"/>
      <path d="M204 158 Q215 158 215 170 Q215 178 210 178" stroke="#3D2B1F" strokeWidth="6" strokeLinecap="round" fill="none"/>
      {/* Eyes - wide and bright */}
      <circle cx="169" cy="175" r="5.5" fill="white" stroke="#151515" strokeWidth="2"/>
      <circle cx="191" cy="175" r="5.5" fill="white" stroke="#151515" strokeWidth="2"/>
      <circle cx="170" cy="176" r="3" fill="#151515"/>
      <circle cx="192" cy="176" r="3" fill="#151515"/>
      <circle cx="171" cy="175" r="1.2" fill="white"/>
      <circle cx="193" cy="175" r="1.2" fill="white"/>
      {/* Eyebrows */}
      <path d="M163 169 Q169 166 174 169" stroke="#3D2B1F" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M186 169 Q191 166 197 169" stroke="#3D2B1F" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Big smile */}
      <path d="M170 188 Q180 197 190 188" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Rosy cheeks */}
      <ellipse cx="161" cy="182" rx="7" ry="5" fill="#FFB3B3" opacity="0.5"/>
      <ellipse cx="199" cy="182" rx="7" ry="5" fill="#FFB3B3" opacity="0.5"/>
      {/* Ears */}
      <ellipse cx="152" cy="178" rx="5" ry="7" fill="#FDBCB4" stroke="#151515" strokeWidth="2"/>
      <ellipse cx="208" cy="178" rx="5" ry="7" fill="#FDBCB4" stroke="#151515" strokeWidth="2"/>
      {/* Floating education cards */}
      <rect x="30" y="80" width="100" height="34" rx="7" fill="white" stroke="#151515" strokeWidth="2"/>
      <circle cx="46" cy="97" r="6" fill="#4A90D9"/>
      <text x="57" y="94" fontSize="7" fill="#151515" fontFamily="Inter, sans-serif" fontWeight="700">Online</text>
      <text x="57" y="105" fontSize="7" fill="#555B65" fontFamily="Inter, sans-serif">Courses</text>
      <rect x="230" y="75" width="105" height="34" rx="7" fill="white" stroke="#151515" strokeWidth="2"/>
      <circle cx="246" cy="92" r="6" fill="#5CB85C"/>
      <text x="257" y="89" fontSize="7" fill="#151515" fontFamily="Inter, sans-serif" fontWeight="700">Live</text>
      <text x="257" y="100" fontSize="7" fill="#555B65" fontFamily="Inter, sans-serif">Classes</text>
      {/* Dotted path */}
      <path d="M130 97 Q180 90 230 92" stroke="#FF2B12" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
    </svg>
  );
}

export function AboutIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cartoon team collaboration illustration"
      role="img"
    >
      {/* Background circles */}
      <circle cx="160" cy="120" r="90" fill="#FFF9F2" stroke="#E8D5C0" strokeWidth="2"/>
      {/* Person 1 - developer */}
      <ellipse cx="100" cy="145" rx="22" ry="24" fill="#FDBCB4" stroke="#151515" strokeWidth="2.5"/>
      <path d="M80 140 Q82 125 100 124 Q118 125 120 140 Q114 130 100 129 Q86 130 80 140 Z" fill="#3D2B1F" stroke="#151515" strokeWidth="1.5"/>
      <circle cx="93" cy="143" r="3.5" fill="white" stroke="#151515" strokeWidth="1.5"/>
      <circle cx="107" cy="143" r="3.5" fill="white" stroke="#151515" strokeWidth="1.5"/>
      <circle cx="94" cy="144" r="1.8" fill="#151515"/>
      <circle cx="108" cy="144" r="1.8" fill="#151515"/>
      <path d="M94 155 Q100 160 106 155" stroke="#151515" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <rect x="80" y="168" width="40" height="30" rx="6" fill="#FF2B12" stroke="#151515" strokeWidth="2"/>
      <text x="100" y="180" textAnchor="middle" fontSize="5.5" fill="white" fontFamily="Inter, sans-serif" fontWeight="700">CLAXIC</text>
      <text x="100" y="189" textAnchor="middle" fontSize="5" fill="#FFB3A0" fontFamily="Inter, sans-serif">TECH</text>
      {/* Person 2 - student */}
      <ellipse cx="220" cy="145" rx="22" ry="24" fill="#FDBCB4" stroke="#151515" strokeWidth="2.5"/>
      <path d="M200 140 Q202 125 220 124 Q238 125 240 140 Q234 130 220 129 Q206 130 200 140 Z" fill="#151515" stroke="#151515" strokeWidth="1.5"/>
      <circle cx="213" cy="143" r="3.5" fill="white" stroke="#151515" strokeWidth="1.5"/>
      <circle cx="227" cy="143" r="3.5" fill="white" stroke="#151515" strokeWidth="1.5"/>
      <circle cx="214" cy="144" r="1.8" fill="#151515"/>
      <circle cx="228" cy="144" r="1.8" fill="#151515"/>
      <path d="M214 155 Q220 160 226 155" stroke="#151515" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <ellipse cx="212" cy="186" rx="3" ry="3" fill="#FFB3B3" opacity="0.6"/>
      <ellipse cx="228" cy="186" rx="3" ry="3" fill="#FFB3B3" opacity="0.6"/>
      <rect x="200" y="168" width="40" height="30" rx="6" fill="#4A90D9" stroke="#151515" strokeWidth="2"/>
      <text x="220" y="180" textAnchor="middle" fontSize="5.5" fill="white" fontFamily="Inter, sans-serif" fontWeight="700">CLAXIC</text>
      <text x="220" y="189" textAnchor="middle" fontSize="5" fill="#A8CFFF" fontFamily="Inter, sans-serif">ACADEMY</text>
      {/* Connection / handshake area */}
      <circle cx="160" cy="178" r="18" fill="#FFF4D8" stroke="#FF2B12" strokeWidth="2"/>
      <text x="160" y="183" textAnchor="middle" fontSize="16" fontFamily="serif">🤝</text>
      {/* Stars / sparkles */}
      <text x="140" y="80" fontSize="14" fontFamily="serif">✨</text>
      <text x="185" y="72" fontSize="10" fontFamily="serif">✨</text>
      <text x="105" y="75" fontSize="10" fontFamily="serif">⭐</text>
    </svg>
  );
}

export function ContactIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 300 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cartoon character sending a message"
      role="img"
    >
      {/* Character */}
      <ellipse cx="90" cy="135" rx="28" ry="30" fill="#FDBCB4" stroke="#151515" strokeWidth="2.5"/>
      <path d="M64 128 Q66 108 90 107 Q114 108 116 128 Q108 114 90 113 Q72 114 64 128 Z" fill="#3D2B1F" stroke="#151515" strokeWidth="2"/>
      <circle cx="80" cy="132" r="5" fill="white" stroke="#151515" strokeWidth="2"/>
      <circle cx="100" cy="132" r="5" fill="white" stroke="#151515" strokeWidth="2"/>
      <circle cx="81" cy="133" r="2.5" fill="#151515"/>
      <circle cx="101" cy="133" r="2.5" fill="#151515"/>
      <path d="M80 145 Q90 152 100 145" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M65 140 Q55 145 52 158 L128 158 L125 145 Q122 140 115 140 Z" fill="#FF2B12" stroke="#151515" strokeWidth="2.5"/>
      {/* Message envelope */}
      <rect x="155" y="80" width="120" height="85" rx="10" fill="white" stroke="#151515" strokeWidth="2.5"/>
      <path d="M155 90 L215 130 L275 90" stroke="#151515" strokeWidth="2.5" fill="none"/>
      {/* Content lines in envelope */}
      <rect x="172" y="105" width="70" height="5" rx="2" fill="#F4F5F6"/>
      <rect x="172" y="115" width="55" height="5" rx="2" fill="#F4F5F6"/>
      <rect x="172" y="125" width="60" height="5" rx="2" fill="#F4F5F6"/>
      {/* Floating message bubble */}
      <rect x="130" y="65" width="90" height="35" rx="10" fill="#FF2B12"/>
      <path d="M150 100 L145 112 L162 100 Z" fill="#FF2B12"/>
      <text x="175" y="79" textAnchor="middle" fontSize="8" fill="white" fontFamily="Inter, sans-serif" fontWeight="700">Hello, Claxic!</text>
      <text x="175" y="91" textAnchor="middle" fontSize="7" fill="#FFB3A0" fontFamily="Inter, sans-serif">Let's talk 👋</text>
      {/* Arrow */}
      <path d="M118 135 Q135 120 148 100" stroke="#FF2B12" strokeWidth="2" strokeDasharray="4 3" fill="none"/>
    </svg>
  );
}
