export default function ContactInfoLink(logosrc, text1, text2, text3) {
  return (
    <main>
      <div className="h-full rounded-[1.75rem] bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04] transition duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
        <img src={logosrc} className="h-8 w-8 rounded-lg bg-[#f5f5f7]" />
        <h1 className="mt-4 text-base font-semibold tracking-tight text-[#1d1d1f]">
          {text1}
        </h1>
        <p className="mt-1 text-[15px] text-[#0071e3]">{text2}</p>
        <p className="mt-2 text-[13px] leading-relaxed text-[#6e6e73]">
          {text3}
        </p>
      </div>
    </main>
  );
}
