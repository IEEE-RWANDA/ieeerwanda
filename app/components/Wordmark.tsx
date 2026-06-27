export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid h-8 w-8 place-items-center bg-blue font-mono text-[9px] font-medium leading-none text-cloud">
        IEEE
      </span>
      <span className="font-display text-lg font-bold leading-none tracking-tight">
        Rwanda
      </span>
    </span>
  );
}
