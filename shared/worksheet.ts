import type { CourseLesson, ModulePractice } from "./course";

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

function list(items: string[]) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

export function worksheetFilename(lesson: CourseLesson) {
  const safeSlug = lesson.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${safeSlug || "hris-lesson"}-worksheet.html`;
}

export function buildLessonWorksheet(lesson: CourseLesson, moduleTitle: string, modulePractice?: ModulePractice) {
  const keyIdeas = lesson.sections.map((section) => section.title);
  const interviewQuestions = modulePractice?.interviewQuestions ?? [];
  const challenge = modulePractice?.challenge;

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(lesson.title)} worksheet | HRIS Career Lab</title>
  <style>
    body { color: #102a43; font-family: Arial, sans-serif; line-height: 1.55; margin: 0 auto; max-width: 800px; padding: 40px 32px; }
    .kicker { color: #9a6b1d; font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
    h1 { font-family: Georgia, serif; font-size: 32px; line-height: 1.1; margin: 10px 0; }
    h2 { border-bottom: 1px solid #d9d6cd; font-family: Georgia, serif; font-size: 21px; margin-top: 30px; padding-bottom: 8px; }
    .meta { color: #52606d; font-size: 14px; }
    .response { border: 1px solid #d9d6cd; border-radius: 10px; min-height: 72px; margin: 12px 0 18px; padding: 12px; }
    .challenge { background: #102a43; border-radius: 14px; color: white; padding: 22px; }
    .challenge h2 { border: 0; color: #f3c969; margin-top: 0; }
    footer { border-top: 1px solid #d9d6cd; color: #52606d; font-size: 12px; margin-top: 36px; padding-top: 14px; }
    @media print { body { max-width: none; padding: 16mm; } }
  </style>
</head>
<body>
  <p class="kicker">HRIS Career Lab · ${escapeHtml(moduleTitle)}</p>
  <h1>${escapeHtml(lesson.title)}</h1>
  <p class="meta">Estimated study time: ${escapeHtml(lesson.duration)}</p>
  <p>${escapeHtml(lesson.summary)}</p>

  <h2>Learning objectives</h2>
  <ul>${list(lesson.objectives)}</ul>

  <h2>Key ideas to review</h2>
  <ul>${list(keyIdeas)}</ul>

  <h2>Practical exercise</h2>
  <p>${escapeHtml(lesson.practice)}</p>
  <p><strong>My plan or response</strong></p>
  <div class="response"></div>

  <h2>Reflection</h2>
  <p><strong>What evidence, terminology, or professional judgment would I use when explaining this work?</strong></p>
  <div class="response"></div>
  <p><strong>What is one question I still need to investigate?</strong></p>
  <div class="response"></div>

  ${interviewQuestions.length ? `<h2>Interview practice</h2><ol>${list(interviewQuestions)}</ol>` : ""}
  ${challenge ? `<section class="challenge"><h2>${escapeHtml(challenge.title)}</h2><p>${escapeHtml(challenge.prompt)}</p></section>` : ""}

  <footer>This worksheet is generated from the HRIS Career Lab lesson content. Use it for personal, self-directed learning and verify organization-specific policy, law, and system details independently.</footer>
</body>
</html>`;
}
