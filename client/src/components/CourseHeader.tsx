import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpenCheck, LayoutDashboard } from "lucide-react";
import { useLocation } from "wouter";

export default function CourseHeader() {
  const [location, setLocation] = useLocation();

  const goToSection = (section: "curriculum" | "approach") => {
    if (location !== "/") {
      setLocation("/");
      window.setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }), 0);
      return;
    }
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#fbfbf8]/90 backdrop-blur-xl">
      <div className="container flex h-[72px] items-center justify-between gap-4">
        <button className="group flex items-center gap-3 text-left" onClick={() => setLocation("/")} aria-label="Return to the HRIS Career Lab homepage">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#102a43] text-[#f3c969] shadow-[0_8px_20px_rgba(16,42,67,.18)] transition-transform duration-200 group-hover:-rotate-3"><BookOpenCheck className="h-5 w-5" /></span>
          <span><span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#9a6b1d]">Open course</span><span className="font-display block text-lg font-semibold leading-5 tracking-tight text-[#102a43]">HRIS Career Lab</span></span>
        </button>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <button className="transition-colors hover:text-[#102a43]" onClick={() => goToSection("curriculum")}>Curriculum</button>
          <button className="transition-colors hover:text-[#102a43]" onClick={() => goToSection("approach")}>Approach</button>
          <button className="transition-colors hover:text-[#102a43]" onClick={() => setLocation("/dashboard")}>My learning</button>
        </nav>
        <Button className="group rounded-full bg-[#102a43] px-4 text-white shadow-[0_8px_20px_rgba(16,42,67,.18)] hover:bg-[#183b5b] sm:px-5" onClick={() => setLocation("/dashboard")}>
          <LayoutDashboard className="mr-1.5 h-4 w-4" /><span>Start learning</span><ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Button>
      </div>
    </header>
  );
}
