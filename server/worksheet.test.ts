import { describe, expect, it } from "vitest";
import type { CourseLesson, ModulePractice } from "../shared/course";
import { buildLessonWorksheet, worksheetFilename } from "../shared/worksheet";

const lesson: CourseLesson = {
  id: "sample-lesson",
  title: "HRIS <data> essentials",
  summary: "Practice reliable worker-data reasoning.",
  duration: "25 min",
  objectives: ["Explain master data", "Recognize report risks"],
  sections: [{ title: "Data controls", paragraphs: ["Use reliable definitions."] }],
  practice: "Map an employee change and its approvals.",
};

const practice: ModulePractice = {
  suggestions: ["Review the workflow."],
  interviewQuestions: ["Why does data quality matter?"],
  challenge: { title: "Data map", prompt: "Map the records and controls." },
};

describe("lesson worksheets", () => {
  it("builds a printable source-derived worksheet with practice and interview content", () => {
    const document = buildLessonWorksheet(lesson, "HRIS Foundation", practice);

    expect(document).toContain("HRIS Career Lab · HRIS Foundation");
    expect(document).toContain("Explain master data");
    expect(document).toContain("Map an employee change and its approvals.");
    expect(document).toContain("Why does data quality matter?");
    expect(document).toContain("Data map");
    expect(document).toContain("HRIS &lt;data&gt; essentials");
  });

  it("creates a safe downloadable filename", () => {
    expect(worksheetFilename(lesson)).toBe("hris-data-essentials-worksheet.html");
  });
});
