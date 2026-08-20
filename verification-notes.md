# Verification Notes

## Open-course verification scope

The course has been converted from an account-gated experience into an open, self-paced site. The learner-facing UI does not offer signup, login, email entry, password entry, or Manus OAuth actions.

Progress is represented by an anonymous browser-local object containing completed lesson identifiers and the most recently opened lesson identifier. The dashboard exposes a reset control, and the lesson viewer states that progress is stored on the current device only.

The public dashboard was visually checked at the development URL. It opens directly at zero progress without an account gate, presents the device-local privacy notice, lists all 13 learning levels, and identifies the suggestions and interview challenge available after every module.

The `career-diagnostic` lesson route was visually checked without a learner session. It opens directly and contains the full lesson, practical exercise, end-of-module suggestions, interview questions, interview challenge, and a local “Mark complete” control.

The diagnostic completion control was activated in the browser without any authentication. The UI immediately changed from “In progress” and “Mark complete” to “Completed” and “Mark incomplete”, confirming that the self-paced local-progress interaction is active.

After returning to the open dashboard, the browser displayed 5% progress, one completed lesson, and a completed Level 0 card. Reloading the dashboard retained the same state without an account session, confirming local persistence and resume behavior for the checked flow.

The open dashboard and the diagnostic lesson viewer were also visually checked at a 375px-wide mobile viewport. The dashboard preserves direct access, privacy messaging, level cards, and progress controls. The lesson preserves readable content, practical exercise, suggestions, interview questions, challenge, navigation, and the local completion control without horizontal overflow.

## Video and practical-session verification

Video recommendations were added as clearly labelled external links, not embedded media. This preserves the open learner flow while letting learners decide whether to open an external provider. The Talent Acquisition resource was analyzed for competency-based-hiring relevance; HRIS, professional-communication, and career-reentry resources were browser-validated for title and publisher.

Desktop checks confirmed that the video briefing and guided practical-session cards appear between a lesson’s core practical exercise and its interview-practice content. The cards visibly present a source, expected outcome, recommendation label, external-link action, suggested session duration, three numbered steps, and a deliverable. A 375px-wide mobile check of the HRIS lesson confirmed that both cards stack cleanly and remain readable without horizontal overflow.

The public HRIS lesson’s video button was followed in the browser and resolved to the intended AIHR YouTube resource. After returning to the lesson, the public route and its video briefing remained available. The same external-link card is fully visible in the verified 375px mobile layout; it uses a standard external anchor and the single-column practical-session card preserves the same source and action without clipping.

The mobile lesson layout was independently checked at 375px, where the external-video card and its action are visible in the single-column flow. The rendered control is a visible standard anchor with the intended AIHR URL, `target="_blank"`, and `rel="noreferrer"`; its desktop click was verified to resolve to that URL. Because the responsive layout retains the same anchor element rather than substituting a mobile-specific control, the mobile action uses the same verified navigation behavior.

A dedicated 375×812 mobile browser run then activated the public lesson’s “Watch external video” anchor with a browser-recognized user gesture. The action opened a new target at `https://www.youtube.com/watch?v=Y72bRzL-bHU`, confirming the intended external video flow from the actual mobile viewport.

## Manual checks to perform before publishing

Open the dashboard in a fresh browser, start a lesson, mark it complete, return to the dashboard, refresh the page, and confirm that completion and resume position are retained. Then use **Reset local progress**, refresh again, and confirm that the course returns to zero completion. Repeat the lesson check at a narrow mobile viewport.

## Content review

Every course module includes source-derived suggestions, interview questions, and one interview-style challenge. Workday content remains clearly labelled as conceptual or simulated; it does not claim tenant access or certification.

## Public GitHub Pages verification

The static course was successfully published at `https://msquarek86.github.io/hris-career-lab/`. The public homepage loaded with the open-course messaging, source-derived 13-level curriculum, and no account, email, or password prompt. A direct request to `/hris-career-lab/learn/hris-data-and-organizations` also loaded the HRIS lesson through the GitHub Pages fallback. The public lesson included its video briefing, external-video action, practical session, interview practice, and browser-local completion control.

On the published lesson, selecting **Mark complete** immediately changed the status to **Completed** and the control to **Mark incomplete**. The published dashboard then showed 5% progress, one of 21 lessons complete, the HRIS lesson as the continuation point, and Level 4 as one of two lessons complete. This confirms the public course preserves its no-account, browser-local progress behavior.

The public lesson’s **Watch external video** action resolved to the intended AIHR YouTube URL. YouTube displayed its own anonymous-session “Sign in to confirm you’re not a bot” wall in this browser, but the course link and destination were correct; video availability beyond that page is governed by YouTube’s controls, not the course site.

## Worksheet, progress, and notes verification

Desktop checks confirmed an overall completion bar and clear percentage in the dashboard summary and in the lesson status card. The lesson practical-exercise card now exposes a worksheet download action, while the private notes panel visibly explains browser-local storage, offers a multiline editor, and reports its save state. At a 375px mobile viewport, the worksheet action, practical-session cards, notes editor, completion control, and overall journey bar remain within a single readable column without horizontal overflow.

In the development course, a representative HRIS reflection was entered in the lesson-notes editor. The panel immediately changed from **Not shared** to **Saved in this browser**, displayed the local auto-save message, and exposed a clear-note action. The note contains no account identity or network submission path.

The HRIS lesson’s worksheet action produced the expected client-side file, `hris-architecture-worker-data-and-organizations-worksheet.html`, in the browser download history. This confirms the worksheet is generated and downloaded directly by the static course rather than retrieved from a learner account or server-side file store.

After returning to the development lesson, the representative HRIS note remained visible with its **Saved in this browser** status, confirming persistence across navigation. The downloaded worksheet contained the HRIS Foundation label, source-derived objectives, key ideas, practical exercise, reflection fields, the module interview questions, and the HRIS process-map challenge.
