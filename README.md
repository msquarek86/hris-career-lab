# HRIS Career Lab

HRIS Career Lab is a free, open, self-paced learning site for HR professionals building practical capability in Human Resources, Talent Acquisition, HR Operations, HRIS, conceptual Workday knowledge, people analytics, professional communication, responsible AI use, and career re-entry.

The curriculum is derived from the supplied HRIS career material. It moves from a baseline diagnostic through progressive HR and HRIS learning levels to a simulated HR/TA capstone. Lessons combine objectives, readable content, workplace context, practical exercises, end-of-module learning suggestions, interview questions, and interview-style challenges.

> **Privacy model:** Visitors do not need to sign up, provide an email address, create a password, or create a learner profile. Lesson completion and resume position are stored only in the current browser’s local storage. Clearing browser data or switching devices clears that local progress.

## What learners can do

| Experience | What it provides |
| --- | --- |
| Open course access | Any visitor can start the diagnostic, open every lesson, and navigate the complete curriculum without registration. |
| Self-paced progress | Learners can mark a lesson complete, return to the dashboard, and continue from their last opened lesson on the same browser. |
| Source-derived curriculum | The course covers the supplied learning levels, including Talent Acquisition, HR Operations, HRIS, Workday HCM, Workday Recruiting, analytics, HRBP, communication, responsible AI, career re-entry, and capstone practice. |
| Interview preparation | Every module includes focused interview questions and a practical interview-style challenge grounded in that module’s subject matter. |
| Privacy controls | The dashboard clearly explains device-local storage and provides a button to reset local progress. |

## Technology

The application uses React 19, TypeScript, Tailwind CSS, and Wouter. Course content and module-practice guidance are version-controlled in `shared/course.ts`. The active learner experience does **not** call server APIs, database procedures, or OAuth flows.

| Location | Responsibility |
| --- | --- |
| `client/src/pages/Home.tsx` | Public landing page and curriculum introduction. |
| `client/src/pages/Dashboard.tsx` | Open learning dashboard, local progress summary, reset control, and course navigation. |
| `client/src/pages/LessonViewer.tsx` | Readable lesson experience, completion control, module suggestions, interview questions, and challenge. |
| `client/src/hooks/useLocalCourseProgress.ts` | Anonymous browser-local completion and resume state. |
| `shared/course.ts` | Source-derived modules, lessons, practical exercises, suggestions, interview questions, and challenges. |

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
```

## Publish to GitHub

Push the repository to GitHub after checking that no secrets or private material are present. This project should not contain `.env` files, database credentials, OAuth secrets, real employee information, candidate information, or fabricated career claims.

The site is designed to showcase openly available course material and application code. Completing the course does not imply Workday certification, real Workday tenant access, legal advice, or a guaranteed employment outcome.

## Free-tier deployment guide

The learner-facing application has no account flow or server-backed progress requirement. After `pnpm build`, the browser-ready site is available in `dist/public`, allowing it to be deployed as a static site. A permanently cost-free service cannot be guaranteed: providers can change eligibility, fair-use terms, or included limits at any time.

| Platform | Current fit | Deployment notes |
| --- | --- | --- |
| **Vercel Hobby** | Strong fit for a personal, non-commercial static portfolio or learning project. | The Hobby plan is free for personal projects and is subject to its usage and fair-use limits. Import the GitHub repo, use `pnpm install --frozen-lockfile && pnpm build` as the build command, and publish `dist/public`. [1] |
| **Render Static Site** | Strong fit when you want a Git-connected static deployment. | Render supports free static sites. Connect the GitHub repo, set the build command to `pnpm install --frozen-lockfile && pnpm build`, and set the publish directory to `dist/public`. Review current included bandwidth and pipeline limits before sharing publicly. [2] |
| **GitHub Pages** | Appropriate if you later configure a static-site publishing workflow. | The app does not require sign-in or a database for the learner experience, but configure a static build-and-publish workflow before selecting this option. |
| **Railway** | Not required for the open learner experience. | Railway can host Node projects, but its current Free plan includes a limited monthly credit. Use it only if you later add a real server-side feature. [3] |

### Vercel static deployment

1. Create a public GitHub repository and push this project.
2. In Vercel, choose **Add New → Project**, then import the repository.
3. Configure the build command as `pnpm install --frozen-lockfile && pnpm build`.
4. Configure the output directory as `dist/public`.
5. Deploy, open the public URL, complete a lesson, refresh the page, and confirm the progress indicator remains on the same browser.

### Render static deployment

1. In Render, create a **Static Site** and connect the GitHub repository.
2. Use `pnpm install --frozen-lockfile && pnpm build` as the build command.
3. Use `dist/public` as the publish directory.
4. Deploy and test dashboard, lesson navigation, completion, reset, and mobile responsiveness.

## References

[1] [Vercel: Hobby Plan](https://vercel.com/docs/plans/hobby)

[2] [Render: Deploy for Free](https://render.com/docs/free)

[3] [Railway: Pricing Plans](https://docs.railway.com/reference/pricing)
