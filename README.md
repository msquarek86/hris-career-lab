# HRIS Career Lab

HRIS Career Lab is a free, open, self-paced learning site for HR professionals building practical capability in Human Resources, Talent Acquisition, HR Operations, HRIS, conceptual Workday knowledge, people analytics, professional communication, responsible AI use, and career re-entry.

The curriculum is derived from the supplied HRIS career material. It moves from a baseline diagnostic through progressive HR and HRIS learning levels to a simulated HR/TA capstone. Lessons combine objectives, readable content, workplace context, practical exercises, end-of-module learning suggestions, interview questions, and interview-style challenges.

> **Privacy model:** Visitors do not need to sign up, provide an email address, create a password, or create a learner profile. Lesson completion, resume position, and private lesson notes are stored only in the current browser’s local storage. Clearing browser data or switching devices clears that local learning state.

## What learners can do

| Experience | What it provides |
| --- | --- |
| Open course access | Any visitor can start the diagnostic, open every lesson, and navigate the complete curriculum without registration. |
| Self-paced progress | Learners can mark a lesson complete, return to the dashboard, and continue from their last opened lesson on the same browser. |
| Source-derived curriculum | The course covers the supplied learning levels, including Talent Acquisition, HR Operations, HRIS, Workday HCM, Workday Recruiting, analytics, HRBP, communication, responsible AI, career re-entry, and capstone practice. |
| Video briefings | Each module now includes a public external video recommendation, identified by source, learning outcome, recommendation status, and a link that opens in a new tab. |
| Guided practical sessions | Each module includes a timed, three-step practical session and a defined deliverable so that video viewing turns into active learning. |
| Interview preparation | Every module includes focused interview questions and a practical interview-style challenge grounded in that module’s subject matter. |
| Downloadable worksheets | Every lesson can generate a printable HTML worksheet containing its source-derived objectives, key ideas, practical exercise, reflection space, interview questions, and challenge. |
| Visual progress | The dashboard and lesson viewer show an accessible overall completion bar, percentage, and lesson count. |
| Private learner notes | Every lesson includes an automatically saved notes workspace stored only in the learner’s current browser. |
| Privacy controls | The dashboard clearly explains device-local storage and provides a button to reset local progress. |

## Technology

The application uses React 19, TypeScript, Tailwind CSS, and Wouter. Course content and module-practice guidance are version-controlled in `shared/course.ts`. The active learner experience does **not** call server APIs, database procedures, or OAuth flows.

| Location | Responsibility |
| --- | --- |
| `client/src/pages/Home.tsx` | Public landing page and curriculum introduction. |
| `client/src/pages/Dashboard.tsx` | Open learning dashboard, local progress summary, reset control, and course navigation. |
| `client/src/pages/LessonViewer.tsx` | Readable lesson experience, completion control, module suggestions, interview questions, and challenge. |
| `client/src/hooks/useLocalCourseProgress.ts` | Anonymous browser-local completion, resume, and per-lesson note state. |
| `client/src/components/LearningExtensions.tsx` | External video briefing and timed practical-session cards. |
| `client/src/components/WorksheetDownload.tsx` | Client-side worksheet generation and download action. |
| `shared/course.ts` | Source-derived modules, lessons, practical exercises, suggestions, interview questions, and challenges. |
| `shared/worksheet.ts` | Safe printable worksheet document generation from source-derived lesson data. |

## Run locally

Use Node.js 22 or later and pnpm.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Verify a change before opening a pull request:

```bash
pnpm check
pnpm test
pnpm build
pnpm build:static
```

## Publish to GitHub

Push the repository to GitHub after checking that no secrets or private material are present. This project should not contain `.env` files, database credentials, OAuth secrets, real employee information, candidate information, or fabricated career claims.

The site is designed to showcase openly available course material and application code. Completing the course does not imply Workday certification, real Workday tenant access, legal advice, or a guaranteed employment outcome.

## Video briefings and practical sessions

The course links to public third-party videos rather than embedding or reproducing them. Learners should review the host platform’s current availability, captions, and terms before watching. These resources add context and are **not** substitutes for formal certification, organization-specific policy, or authorized Workday tenant practice.

Every module pairs one video briefing with a guided practical session. The session has a suggested time allocation, three self-directed steps, and a defined deliverable. Workday-related cards remain clearly marked as conceptual or third-party learning; they do not provide Workday certification, configuration authority, or a real Workday tenant.

| Module theme | Example recommended resource | Practice pairing |
| --- | --- | --- |
| Talent Acquisition | [SHRM: How to Recruit “Hidden Talent”](https://www.youtube.com/watch?v=iZujLexGi-U) [6] | Build a Boolean search, screening rubric, and evidence-led candidate comparison. |
| HRIS Foundation | [What Is an HRIS? — AIHR Learning Bite](https://www.youtube.com/watch?v=Y72bRzL-bHU) [7] | Map an HR event to data fields, approvals, controls, and a reporting check. |
| Professional Communication | [Think Fast, Talk Smart: Communication Techniques](https://www.youtube.com/watch?v=HAnw168huqA) [8] | Rehearse and improve a structured HR update or interview response. |
| Career Reentry | [CIPD: Breaking into the people profession](https://www.youtube.com/watch?v=9_LAfYaijVQ) [9] | Produce an honest career-return narrative and two evidence-based STAR-story outlines. |

## Hosting: GitHub Pages static deployment

The learner-facing course **does need a host** if others should visit it through a public URL. It does **not** need a server host, database, Manus OAuth, email storage, password storage, or persistent backend. The dedicated `build:github-pages` command produces only browser files in `dist/public`; unused Express and database code is excluded from the static deployment.

**GitHub Pages is the recommended hosting path for this repository showcase.** It is a static hosting service that publishes HTML, CSS, and JavaScript from a GitHub repository, including sites built with a custom GitHub Actions workflow. [1] [2] This project includes that workflow at `.github/workflows/deploy-pages.yml` and a GitHub Pages 404 fallback for direct lesson URLs.

| Platform | Fit for this project | Important boundary |
| --- | --- | --- |
| **GitHub Pages** | **Recommended.** No separate hosting account or server process is needed; the included workflow builds and deploys the client-only course. | Public Pages sites are publicly reachable, and GitHub logs visitor IP addresses for security purposes. [1] |
| **Cloudflare Pages** | A viable static-host alternative if its dashboard verification succeeds. | The previous Cloudflare GitHub App connection should remain uninstalled unless you intentionally choose that platform again. |
| **Vercel Hobby** | Suitable for a personal portfolio site. | The free plan is subject to current usage and fair-use conditions. [4] |
| **Render or Railway** | Unnecessary for the current learner experience. | Use a server host only after adding accounts, shared progress, administration, submissions, or other genuine backend features. |

### GitHub Pages deployment

1. Create a **public** GitHub repository named `hris-career-lab` under your account and push this project to its `main` branch. Do not commit `.env` files, credentials, employee data, candidate data, or learner data.
2. The included workflow builds the Vite client with the project subpath `/hris-career-lab/`, uploads `dist/public`, and deploys it to GitHub Pages through GitHub Actions. It uses the official Pages configuration, artifact-upload, and deploy actions. [2]
3. In the repository, open **Settings → Pages**. Under **Build and deployment → Source**, select **GitHub Actions**. GitHub will create the `github-pages` environment if it does not already exist. [3]
4. Push to `main` or choose **Run workflow** from the Actions tab. When the workflow succeeds, GitHub will show the public project URL, generally in the form `https://YOUR-ACCOUNT.github.io/hris-career-lab/`.
5. Test the homepage, `/dashboard`, and a direct lesson URL such as `/learn/hris-data-and-organizations`. The included `404.html` returns direct GitHub Pages lesson requests to the client router.
6. If you later configure a custom domain, add it through **Settings → Pages**. Do not add auth, database, or OAuth settings unless you deliberately redesign the open course around a backend.

> **Privacy note:** The application itself does not create learner accounts or transmit completion data to the course project. Hosting and external video providers still handle normal website requests under their own terms, so link to their privacy notices in any public policy you publish.

## References

[1] [GitHub Docs: About GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

[2] [GitHub Docs: Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

[3] [GitHub Docs: Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

[4] [Vercel: Hobby Plan](https://vercel.com/docs/plans/hobby)

[6] [Workforce.com: SHRM — How to Recruit “Hidden Talent”](https://www.youtube.com/watch?v=iZujLexGi-U)

[7] [AIHR: What Is an HRIS? — AIHR Learning Bite](https://www.youtube.com/watch?v=Y72bRzL-bHU)

[8] [Stanford Graduate School of Business: Think Fast, Talk Smart](https://www.youtube.com/watch?v=HAnw168huqA)

[9] [CIPD: Breaking into the people profession](https://www.youtube.com/watch?v=9_LAfYaijVQ)
