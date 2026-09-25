// Inline copy of public/qelvira-logo.svg so the wordmark can switch to white on dark backgrounds.
export default function Logo({ light = false, className = "h-7 w-auto" }) {
  const ink = light ? "#ffffff" : "#0f2a64"
  const leaf = light ? "#6fd158" : "#3a9a29"
  const vein = light ? "#0a1838" : "#ffffff"

  return (
    <a href="#top" aria-label="Qelvira home" className="inline-flex shrink-0 items-center">
      <svg viewBox="95 200 1100 360" className={className} role="img" aria-hidden="true">
        <g fill={ink}>
          <path fill="none" stroke={ink} strokeWidth="42" d="M305 470A106 94 0 1 0 186 500" />
          <path fill="none" stroke={ink} strokeWidth="30" strokeLinecap="round" d="M178 502C215 482 248 482 290 514S345 550 372 540" />
          <path d="M380 353H492V387H418V421H484V455H418V490H492V524H380Z" />
          <path d="M518 353H556V490H626V524H518Z" />
          <path d="M610 353H650L693 468L738 353H778L708 524H678Z" />
          <path d="M794 353H832V524H794Z" />
          <path fillRule="evenodd" d="M860 353H935C970 353 993 378 993 408C993 434 977 453 953 459L998 524H953L912 463H898V524H860ZM898 385H930C945 385 955 395 955 408C955 421 945 432 930 432H898Z" />
          <path d="M1078 353H1110L1183 524H1140L1094 405L1045 524H1002Z" />
        </g>
        <path fill={leaf} d="M740 342C730 280 770 245 820 236C845 231 862 224 872 212C872 265 850 310 805 325C788 331 770 331 756 330Z" />
        <path fill="none" stroke={vein} strokeWidth="6" strokeLinecap="round" d="M760 327C782 300 802 280 828 262" />
      </svg>
    </a>
  )
}
