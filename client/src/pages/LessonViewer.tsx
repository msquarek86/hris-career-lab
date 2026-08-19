import CourseHeader from "@/components/CourseHeader";
import LearningExtensions from "@/components/LearningExtensions";
import { Button } from "@/components/ui/button";
import { useLocalCourseProgress } from "@/hooks/useLocalCourseProgress";
import { courseLessons, findLesson, findLessonModule, getModuleLearningExtension, getModulePractice } from "@shared/course";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Circle, Clock3, Leaf, Lightbulb, MessageSquareQuote, Target, Trophy } from "lucide-react";
import { useEffect } from "react";
import { useLocation, useRoute } from "wouter";

export default function LessonViewer() {
  const [, params] = useRoute("/learn/:lessonId");
  const lesson = findLesson(params?.lessonId ?? "");
  const module = lesson ? findLessonModule(lesson.id) : undefined;
  const modulePractice = module ? getModulePractice(module.id) : undefined;
  const learningExtension = module ? getModuleLearningExtension(module.id) : undefined;
  const [, setLocation] = useLocation();
  const { completedSet, markOpened, setLessonCompletion } = useLocalCourseProgress();

  useEffect(() => {
    if (lesson) markOpened(lesson.id);
  }, [lesson?.id, markOpened]);

  if (!lesson) {
    return <div className="hris-app min-h-screen bg-[#fbfbf8]"><CourseHeader /><main className="container py-20"><p className="text-slate-600">This lesson is not available.</p><Button className="mt-5 rounded-full bg-[#102a43]" onClick={() => setLocation("/dashboard")}>Back to dashboard</Button></main></div>;
  }

  const completed = completedSet.has(lesson.id);
  const index = courseLessons.findIndex((item) => item.id === lesson.id);
  const previous = courseLessons[index - 1];
  const next = courseLessons[index + 1];

  return (
    <div className="hris-app min-h-screen bg-[#fbfbf8] text-[#102a43]">
      <CourseHeader />
      <main className="container py-7 sm:py-10">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500"><button className="hover:text-[#102a43]" onClick={() => setLocation("/dashboard")}>My learning</button><ChevronRight className="h-3.5 w-3.5" /><span>{module?.title}</span><ChevronRight className="h-3.5 w-3.5" /><span className="font-medium text-[#102a43]">Lesson</span></div>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <article className="min-w-0">
            <header className="border-b border-[#e5e1d7] pb-8"><div className="flex flex-wrap items-center gap-3"><span className="rounded-full bg-[#fff4d8] px-3 py-1 text-xs font-bold uppercase tracking-[.15em] text-[#9a6b1d]">{module?.level}</span><span className="flex items-center gap-1.5 text-sm text-slate-500"><Clock3 className="h-4 w-4" />{lesson.duration}</span><span className="flex items-center gap-1.5 text-sm text-slate-500"><Leaf className="h-4 w-4 text-[#a46d16]" />Open self-paced learning</span></div><h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold tracking-[-.045em] sm:text-5xl">{lesson.title}</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{lesson.summary}</p></header>
            <section className="mt-8 rounded-[1.5rem] border border-[#e2dbc9] bg-[#fff9ea] p-6 sm:p-7"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f3c969] text-[#102a43]"><Target className="h-4 w-4" /></span><h2 className="font-display text-2xl font-semibold">By the end of this lesson</h2></div><ul className="mt-5 grid gap-3 sm:grid-cols-2">{lesson.objectives.map((objective) => <li key={objective} className="flex gap-2 text-sm leading-6 text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#a46d16]" />{objective}</li>)}</ul></section>
            {lesson.sections.map((section) => <section key={section.title} className="border-b border-[#e5e1d7] py-9"><h2 className="font-display text-3xl font-semibold tracking-[-.03em]">{section.title}</h2><div className="mt-5 space-y-4 text-[1.05rem] leading-8 text-slate-700">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>{section.bullets && <ul className="mt-6 space-y-3 rounded-2xl border border-[#e5e1d7] bg-white p-5">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b77b19]" />{bullet}</li>)}</ul>}{section.codeExample && <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-[#102a43]"><div className="flex items-center justify-between border-b border-white/10 px-4 py-3"><span className="text-xs font-bold uppercase tracking-[.15em] text-[#f3c969]">{section.codeExample.title}</span><span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-slate-300">{section.codeExample.language}</span></div><pre className="overflow-x-auto p-5 text-sm leading-7 text-[#eef4f7]"><code>{section.codeExample.content}</code></pre></div>}</section>)}
            <section className="mt-9 rounded-[1.5rem] bg-[#eaf0f2] p-6 sm:p-7"><p className="section-kicker">Practical exercise</p><h2 className="font-display mt-3 text-3xl font-semibold">Demonstrate the skill</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">{lesson.practice}</p></section>
            {learningExtension && <LearningExtensions extension={learningExtension} />}
            {modulePractice && <section className="mt-9 border-t border-[#e5e1d7] pt-9"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#fff4d8] text-[#a46d16]"><Lightbulb className="h-5 w-5" /></span><div><p className="section-kicker">After this module</p><h2 className="font-display mt-1 text-3xl font-semibold">Turn learning into interview-ready practice</h2></div></div><div className="mt-6 grid gap-5 md:grid-cols-2"><div className="rounded-2xl border border-[#e5e1d7] bg-white p-5"><h3 className="font-semibold text-[#102a43]">Self-paced suggestions</h3><ul className="mt-4 space-y-3">{modulePractice.suggestions.map((suggestion) => <li key={suggestion} className="flex gap-3 text-sm leading-6 text-slate-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b77b19]" />{suggestion}</li>)}</ul></div><div className="rounded-2xl border border-[#dbe7eb] bg-[#f4f8f9] p-5"><div className="flex items-center gap-2"><MessageSquareQuote className="h-4 w-4 text-[#527080]" /><h3 className="font-semibold text-[#102a43]">Interview questions to rehearse</h3></div><ol className="mt-4 space-y-4">{modulePractice.interviewQuestions.map((question, questionIndex) => <li key={question} className="flex gap-3 text-sm leading-6 text-slate-700"><span className="font-display flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dcebed] text-xs font-semibold text-[#102a43]">{questionIndex + 1}</span>{question}</li>)}</ol></div></div><div className="mt-5 rounded-[1.4rem] bg-[#102a43] p-6 text-white"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#f3c969]"><Trophy className="h-4 w-4" /> Interview challenge</div><h3 className="font-display mt-3 text-2xl font-semibold">{modulePractice.challenge.title}</h3><p className="mt-3 max-w-3xl leading-7 text-[#c5d3dd]">{modulePractice.challenge.prompt}</p></div></section>}
            <div className="mt-8 flex flex-col-reverse justify-between gap-4 border-t border-[#e5e1d7] pt-7 sm:flex-row">{previous ? <Button variant="outline" className="rounded-full border-[#d9d6cd] bg-white" onClick={() => setLocation(`/learn/${previous.id}`)}><ArrowLeft className="mr-2 h-4 w-4" />Previous lesson</Button> : <div />}{next ? <Button className="rounded-full bg-[#102a43] text-white hover:bg-[#183b5b]" onClick={() => setLocation(`/learn/${next.id}`)}>Next lesson<ArrowRight className="ml-2 h-4 w-4" /></Button> : <Button className="rounded-full bg-[#102a43] text-white hover:bg-[#183b5b]" onClick={() => setLocation("/dashboard")}>Return to dashboard</Button>}</div>
          </article>
          <aside className="lg:sticky lg:top-24"><div className="rounded-[1.5rem] border border-[#e5e1d7] bg-white p-5 shadow-[0_10px_25px_rgba(30,47,64,.05)]"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#9a6b1d]">Lesson status</p><div className="mt-4 flex items-center gap-3"><span className={completed ? "flex h-10 w-10 items-center justify-center rounded-full bg-[#e5f3e8] text-[#267045]" : "flex h-10 w-10 items-center justify-center rounded-full bg-[#edf3f5] text-[#527080]"}>{completed ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}</span><p className="font-semibold">{completed ? "Completed" : "In progress"}</p></div><Button className={completed ? "mt-5 w-full rounded-full border border-[#d5e8d8] bg-white text-[#267045] hover:bg-[#f0faf2]" : "mt-5 w-full rounded-full bg-[#102a43] text-white hover:bg-[#183b5b]"} onClick={() => setLessonCompletion(lesson.id, !completed)}>{completed ? "Mark incomplete" : "Mark complete"}</Button><p className="mt-5 border-t border-[#eeeae2] pt-5 text-xs leading-5 text-slate-500">Progress is stored locally in this browser only. It is not connected to an account.</p><button className="mt-4 flex w-full items-center justify-between text-sm font-semibold text-[#527080] hover:text-[#102a43]" onClick={() => setLocation("/dashboard")}>View course progress <ArrowRight className="h-4 w-4" /></button></div></aside>
        </div>
      </main>
    </div>
  );
}
