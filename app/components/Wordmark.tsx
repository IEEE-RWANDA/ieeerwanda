export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-600 font-display text-[10px] font-bold leading-none text-cloud">
        IEEE
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight">
          Rwanda
        </span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-slate">
          Subsection
        </span>
      </span>
    </span>
  );
}
