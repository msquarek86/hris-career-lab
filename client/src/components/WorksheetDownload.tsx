import { Button } from "@/components/ui/button";
import type { CourseLesson, ModulePractice } from "@shared/course";
import { buildLessonWorksheet, worksheetFilename } from "@shared/worksheet";
import { Download, FileText } from "lucide-react";

type WorksheetDownloadProps = {
  lesson: CourseLesson;
  moduleTitle: string;
  modulePractice?: ModulePractice;
};

export default function WorksheetDownload({ lesson, moduleTitle, modulePractice }: WorksheetDownloadProps) {
  const downloadWorksheet = () => {
    const document = buildLessonWorksheet(lesson, moduleTitle, modulePractice);
    const blob = new Blob([document], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = window.document.createElement("a");
    anchor.href = url;
    anchor.download = worksheetFilename(lesson);
    window.document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  return <Button variant="outline" className="mt-5 rounded-full border-[#d9d6cd] bg-white text-[#102a43] hover:border-[#d4a832] hover:bg-[#fff9ea]" onClick={downloadWorksheet}><Download className="mr-2 h-4 w-4" />Download worksheet <FileText className="ml-2 h-4 w-4 text-[#a46d16]" /></Button>;
}
