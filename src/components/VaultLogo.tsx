export default function VaultLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 32" fill="none" className={className}>
      <path
        d="M8 4C3.6 4 0 7.6 0 12v8c0 4.4 3.6 8 8 8h8c4.4 0 8-3.6 8-8v-8c0-4.4-3.6-8-8-8H8zm4 4c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4s-4-1.8-4-4v-4c0-2.2 1.8-4 4-4z"
        fill="#0019FF"
      />
      <text
        x="28"
        y="22"
        fill="white"
        fontFamily="Inter"
        fontWeight={800}
        fontSize={18}
      >
        vault
      </text>
    </svg>
  );
}
