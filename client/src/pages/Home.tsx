import CourseHeader from "@/components/CourseHeader";
import { Button } from "@/components/ui/button";
import { courseLessons, courseModules } from "@shared/course";
import { ArrowRight, BookOpen, CheckCircle2, Compass, Leaf, Sparkles, Target, Workflow } from "lucide-react";
import { useLocation } from "wouter";

const outcomes = [
  { icon: Workflow, title: "Practice the work", text: "Move beyond definitions with HR cases, sourcing exercises, communication tasks, and job simulations." },
  { icon: Target, title: "Build credible HRIS fluency", text: "Connect HR processes to data, governance, reporting, Workday terminology, and simulated workflows." },
  { icon: Compass, title: "Return with direction", text: "Build a confident career narrative, role-ready positioning, and an honest view of current strengths and gaps." },
];

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="hris-app min-h-screen overflow-x-hidden bg-[#fbfbf8] text-[#102a43]">
      <CourseHeader />
      <main>
        <section className="relative isolate overflow-hidden border-b border-[#e6e3d9]">
          <div className="pointer-events-none absolute inset-0 -z-10 hris-grid" />
          <div className="pointer-events-none absolute -right-16 top-10 -z-10 h-80 w-80 rounded-full bg-[#f3c969]/30 blur-3xl" />
          <div className="container grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e7d5aa] bg-[#fff9ea] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#8c621e]">
                <Sparkles className="h-3.5 w-3.5" />
                A structured HR career course
              </div>
              <h1 className="font-display text-balance text-5xl font-semibold leading-[.98] tracking-[-0.045em] text-[#102a43] sm:text-6xl lg:text-7xl">
                Build modern HR confidence with <span className="text-[#b77b19]">practice, not promises.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                A focused learning path for HR professionals returning to the workforce—covering Talent Acquisition, HR Operations, HRIS, Workday concepts, analytics, and professional communication.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="group h-12 rounded-full bg-[#102a43] px-6 text-base text-white shadow-[0_14px_30px_rgba(16,42,67,.20)] hover:bg-[#183b5b]" onClick={() => setLocation("/learn/career-diagnostic")}>
                  Start with your diagnostic
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 rounded-full border-[#d9d6cd] bg-white px-6 text-base text-[#102a43] hover:border-[#b77b19] hover:bg-[#fff9ea]" onClick={() => document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth" })}>
                  Explore the curriculum
                </Button>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm text-slate-500"><Leaf className="h-4 w-4 text-[#9a6b1d]" /> No account, email, or password required. Your learning progress stays on this device.</p>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-[2.2rem] bg-[#e9d9b8]/70 blur-xl" />
              <div className="relative rounded-[1.8rem] border border-white/80 bg-[#102a43] p-5 shadow-[0_30px_60px_rgba(16,42,67,.24)] sm:p-7">
                <div className="flex items-start justify-between">
                  <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#f3c969]">Your learning path</p><h2 className="font-display mt-2 text-2xl font-semibold text-white">Career-ready by design</h2></div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-[#f3c969]"><BookOpen className="h-5 w-5" /></span>
                </div>
                <div className="mt-7 space-y-3">
                  {courseModules.slice(0, 4).map((module, index) => (
                    <div key={module.id} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[.06] p-3.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f3c969] text-xs font-extrabold text-[#102a43]">{String(index + 1).padStart(2, "0")}</span>
                      <div><p className="text-[11px] font-bold uppercase tracking-[.14em] text-[#b6c9d8]">{module.level}</p><p className="mt-0.5 text-sm font-semibold text-white">{module.title}</p></div>
                    </div>
                  ))}
                </div>
                <button className="mt-5 flex w-full items-center justify-between rounded-2xl bg-[#f3c969] px-4 py-3 text-left text-sm font-bold text-[#102a43] transition-transform duration-200 hover:-translate-y-0.5" onClick={() => setLocation("/dashboard")}>
                  Open your learning dashboard <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="container py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div><p className="section-kicker">The approach</p><h2 className="font-display mt-3 text-4xl font-semibold tracking-[-.04em] text-[#102a43] sm:text-5xl">Learning that respects prior experience.</h2></div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">The course begins with diagnosis rather than repetition. Lessons pair accessible explanations with professional terminology, realistic workplace context, and a practical task designed to demonstrate application.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {outcomes.map((outcome, index) => <article key={outcome.title} className="group rounded-[1.6rem] border border-[#e5e1d7] bg-white p-7 shadow-[0_12px_30px_rgba(30,47,64,.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(30,47,64,.08)]"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff4d8] text-[#a46d16]"><outcome.icon className="h-5 w-5" /></span><p className="mt-6 text-xs font-bold uppercase tracking-[.18em] text-[#9a6b1d]">0{index + 1}</p><h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-[#102a43]">{outcome.title}</h3><p className="mt-3 leading-7 text-slate-600">{outcome.text}</p></article>)}
          </div>
        </section>

        <section id="curriculum" className="border-y border-[#e6e3d9] bg-[#f3f0e8] py-20 sm:py-28">
          <div className="container">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="section-kicker">The curriculum</p><h2 className="font-display mt-3 max-w-2xl text-4xl font-semibold tracking-[-.04em] text-[#102a43] sm:text-5xl">A deliberate route from baseline to job simulation.</h2></div><p className="max-w-xs text-sm leading-6 text-slate-600">{courseModules.length} levels · {courseLessons.length} practical lessons · one connected HR career pathway</p></div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {courseModules.map((module, index) => <article key={module.id} className="group flex gap-5 rounded-2xl border border-[#dfdbd0] bg-[#fbfbf8] p-5 transition duration-200 hover:border-[#c6a35f] hover:shadow-[0_12px_25px_rgba(30,47,64,.07)]"><span className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf0f2] text-base font-semibold text-[#102a43]">{String(index).padStart(2, "0")}</span><div className="min-w-0"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#9a6b1d]">{module.level}</p><h3 className="mt-1 text-lg font-semibold text-[#102a43]">{module.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{module.overview}</p><p className="mt-3 text-xs font-bold text-[#527080]">{module.lessons.length} {module.lessons.length === 1 ? "lesson" : "lessons"}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="container py-20 sm:py-28"><div className="rounded-[2rem] bg-[#102a43] px-7 py-12 text-center shadow-[0_22px_50px_rgba(16,42,67,.18)] sm:px-12"><CheckCircle2 className="mx-auto h-8 w-8 text-[#f3c969]" /><p className="mt-5 text-xs font-bold uppercase tracking-[.2em] text-[#f3c969]">Ready when you are</p><h2 className="font-display mx-auto mt-3 max-w-2xl text-4xl font-semibold tracking-[-.04em] text-white sm:text-5xl">Start with a baseline. Build real capability.</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-[#c5d3dd]">Learn entirely at your own pace. Completion and resume position are stored only in this browser.</p><Button size="lg" className="mt-8 h-12 rounded-full bg-[#f3c969] px-6 font-bold text-[#102a43] hover:bg-[#f9d77e]" onClick={() => setLocation("/learn/career-diagnostic")}>Begin the diagnostic <ArrowRight className="ml-2 h-4 w-4" /></Button></div></section>
      </main>
      <footer className="border-t border-[#e6e3d9] bg-white py-8"><div className="container flex flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row"><p>HRIS Career Lab · Structured learning for modern HR work.</p><p>Course content is derived from the provided HRIS career curriculum.</p></div></footer>
    </div>
  );
}
