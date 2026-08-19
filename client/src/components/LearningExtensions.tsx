import type { LearningExtension } from "@shared/course";
import { Clock3, ExternalLink, FileCheck2, PlayCircle, ShieldCheck, Video } from "lucide-react";

export default function LearningExtensions({ extension }: { extension: LearningExtension }) {
  return (
    <section className="mt-9 border-t border-[#e5e1d7] pt-9">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eaf0f2] text-[#527080]"><Video className="h-5 w-5" /></span>
        <div>
          <p className="section-kicker">Learn, then do</p>
          <h2 className="font-display mt-1 text-3xl font-semibold">Video briefing and practical session</h2>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <article className="overflow-hidden rounded-[1.5rem] border border-[#dae5e8] bg-[#f4f8f9]">
          <div className="flex items-start justify-between gap-4 border-b border-[#dbe7eb] bg-[#eaf0f2] p-5">
            <div className="flex gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#102a43] text-[#f3c969]"><PlayCircle className="h-5 w-5" /></span><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#527080]">{extension.video.status} video</p><h3 className="mt-1 font-semibold text-[#102a43]">{extension.video.title}</h3></div></div>
            <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-[#527080]">{extension.video.duration}</span>
          </div>
          <div className="p-5"><p className="text-sm font-semibold text-[#527080]">Source: {extension.video.source}</p><p className="mt-3 text-sm leading-6 text-slate-700">{extension.video.outcome}</p>{extension.video.caution && <p className="mt-4 flex gap-2 rounded-xl border border-[#ead6ab] bg-[#fff9ea] p-3 text-xs leading-5 text-[#75551d]"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />{extension.video.caution}</p>}<a href={extension.video.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center rounded-full bg-[#102a43] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#183b5b]">Watch external video <ExternalLink className="ml-2 h-4 w-4" /></a></div>
        </article>

        <article className="rounded-[1.5rem] border border-[#e5e1d7] bg-white p-5">
          <div className="flex items-start justify-between gap-4"><div className="flex gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#fff4d8] text-[#a46d16]"><FileCheck2 className="h-5 w-5" /></span><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#9a6b1d]">Guided practical session</p><h3 className="mt-1 font-semibold text-[#102a43]">{extension.practicalSession.title}</h3></div></div><span className="flex shrink-0 items-center gap-1 text-xs font-bold text-[#527080]"><Clock3 className="h-3.5 w-3.5" />{extension.practicalSession.duration}</span></div><ol className="mt-5 space-y-3">{extension.practicalSession.steps.map((step, index) => <li key={step} className="flex gap-3 text-sm leading-6 text-slate-700"><span className="font-display flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eaf0f2] text-xs font-semibold text-[#102a43]">{index + 1}</span>{step}</li>)}</ol><div className="mt-5 rounded-xl bg-[#102a43] p-4 text-sm leading-6 text-[#e6eff3]"><span className="font-bold text-[#f3c969]">Deliverable: </span>{extension.practicalSession.deliverable}</div></article>
      </div>
    </section>
  );
}
