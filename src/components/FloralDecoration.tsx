interface FloralDecorationProps {
  position: 'top-left' | 'bottom-right'
}

const FloralDecoration = ({ position }: FloralDecorationProps) => {
  const isTopLeft = position === 'top-left'

  return (
    <div
      className={`${isTopLeft ? 'animate-float' : 'animate-float animation-delay-400'} pointer-events-none`}
    >
      <svg
        width={isTopLeft ? '280' : '200'}
        height={isTopLeft ? '320' : '180'}
        viewBox={isTopLeft ? '0 0 280 320' : '0 0 200 180'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isTopLeft ? '' : 'transform rotate-180'}
      >
        {/* Red Roses */}
        <g opacity="0.95">
          {/* Rose 1 - Large */}
          <circle cx="80" cy="80" r="35" fill="#8B1538" opacity="0.8" />
          <circle cx="75" cy="75" r="28" fill="#A52A4A" />
          <circle cx="78" cy="78" r="22" fill="#6B1F3A" />
          <circle cx="80" cy="80" r="15" fill="#4A0E1E" opacity="0.6" />
          {/* Inner petals */}
          <ellipse cx="72" cy="75" rx="12" ry="8" fill="#8B1538" transform="rotate(-30 72 75)" />
          <ellipse cx="88" cy="75" rx="12" ry="8" fill="#8B1538" transform="rotate(30 88 75)" />
          <ellipse cx="80" cy="68" rx="10" ry="6" fill="#6B1F3A" transform="rotate(0 80 68)" />
          <ellipse cx="80" cy="88" rx="10" ry="6" fill="#6B1F3A" transform="rotate(0 80 88)" />

          {/* Rose 2 - Medium */}
          <circle cx="140" cy="60" r="30" fill="#8B1538" opacity="0.8" />
          <circle cx="136" cy="56" r="24" fill="#A52A4A" />
          <circle cx="138" cy="58" r="18" fill="#6B1F3A" />
          <circle cx="140" cy="60" r="12" fill="#4A0E1E" opacity="0.6" />
          <ellipse cx="133" cy="56" rx="10" ry="7" fill="#8B1538" transform="rotate(-25 133 56)" />
          <ellipse cx="147" cy="56" rx="10" ry="7" fill="#8B1538" transform="rotate(25 147 56)" />

          {/* Rose 3 - Small */}
          <circle cx="50" cy="140" r="28" fill="#8B1538" opacity="0.8" />
          <circle cx="47" cy="137" r="22" fill="#A52A4A" />
          <circle cx="49" cy="139" r="16" fill="#6B1F3A" />
          <circle cx="50" cy="140" r="10" fill="#4A0E1E" opacity="0.6" />
          <ellipse cx="44" cy="137" rx="9" ry="6" fill="#8B1538" transform="rotate(-30 44 137)" />
          <ellipse cx="56" cy="137" rx="9" ry="6" fill="#8B1538" transform="rotate(30 56 137)" />

          {/* White/Pink Rose */}
          <circle cx="110" cy="130" r="26" fill="#FFE4E8" />
          <circle cx="107" cy="127" r="20" fill="#FFD0D9" />
          <circle cx="109" cy="129" r="14" fill="#FFC1CF" />
          <circle cx="110" cy="130" r="9" fill="#FFB3C6" opacity="0.7" />
          <ellipse cx="104" cy="127" rx="8" ry="5" fill="#FFE4E8" transform="rotate(-30 104 127)" />
          <ellipse cx="116" cy="127" rx="8" ry="5" fill="#FFE4E8" transform="rotate(30 116 127)" />
        </g>

        {/* Leaves and Greenery */}
        <g opacity="0.85">
          {/* Eucalyptus-style leaves */}
          <ellipse cx="180" cy="100" rx="12" ry="22" fill="#8FAF8E" transform="rotate(25 180 100)" />
          <ellipse cx="195" cy="130" rx="11" ry="20" fill="#9DBF9C" transform="rotate(15 195 130)" />
          <ellipse cx="165" cy="135" rx="10" ry="18" fill="#A8C5A7" transform="rotate(-20 165 135)" />
          <ellipse cx="210" cy="165" rx="12" ry="22" fill="#8FAF8E" transform="rotate(35 210 165)" />
          <ellipse cx="190" cy="180" rx="11" ry="19" fill="#9DBF9C" transform="rotate(-15 190 180)" />

          {/* Larger leaves near roses */}
          <ellipse cx="155" cy="95" rx="14" ry="25" fill="#7A9A79" transform="rotate(40 155 95)" opacity="0.9" />
          <ellipse cx="125" cy="105" rx="13" ry="23" fill="#8FAF8E" transform="rotate(-35 125 105)" opacity="0.9" />
          <ellipse cx="70" cy="115" rx="15" ry="26" fill="#9DBF9C" transform="rotate(50 70 115)" opacity="0.85" />
          <ellipse cx="85" cy="165" rx="12" ry="21" fill="#A8C5A7" transform="rotate(-25 85 165)" opacity="0.85" />

          {/* Small berry clusters */}
          <circle cx="95" cy="95" r="4" fill="#8B1538" />
          <circle cx="102" cy="97" r="3.5" fill="#A52A4A" />
          <circle cx="98" cy="103" r="3" fill="#8B1538" />
          <circle cx="135" cy="145" r="4" fill="#8B1538" />
          <circle cx="141" cy="148" r="3.5" fill="#A52A4A" />
          <circle cx="138" cy="153" r="3" fill="#8B1538" />

          {/* Stems */}
          <path
            d="M 80 115 Q 85 140 90 180"
            stroke="#6B8E6A"
            strokeWidth="3"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M 140 90 Q 160 120 180 160"
            stroke="#6B8E6A"
            strokeWidth="2.5"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M 110 156 Q 130 180 150 210"
            stroke="#6B8E6A"
            strokeWidth="2.5"
            fill="none"
            opacity="0.7"
          />

          {/* Additional trailing leaves */}
          <ellipse cx="220" cy="200" rx="10" ry="17" fill="#A8C5A7" transform="rotate(45 220 200)" opacity="0.75" />
          <ellipse cx="235" cy="230" rx="9" ry="16" fill="#9DBF9C" transform="rotate(30 235 230)" opacity="0.7" />
          <ellipse cx="205" cy="235" rx="8" ry="15" fill="#8FAF8E" transform="rotate(-20 205 235)" opacity="0.7" />
          <ellipse cx="175" cy="220" rx="10" ry="18" fill="#A8C5A7" transform="rotate(60 175 220)" opacity="0.75" />
        </g>
      </svg>
    </div>
  )
}

export default FloralDecoration
