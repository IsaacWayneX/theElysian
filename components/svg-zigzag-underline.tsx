"use client"

interface ZigzagUnderlineProps {
  className?: string
}

export function ZigzagUnderline({ className = "" }: ZigzagUnderlineProps) {
  return (
    <svg
      width="100%"
      height="20"
      viewBox="0 0 400 20"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M0,10 L40,0 L80,20 L120,0 L160,20 L200,0 L240,20 L280,0 L320,20 L360,0 L400,10"
        stroke="#EAB308"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
