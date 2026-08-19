# Verification Notes

## Open-course verification scope

The course has been converted from an account-gated experience into an open, self-paced site. The learner-facing UI does not offer signup, login, email entry, password entry, or Manus OAuth actions.

Progress is represented by an anonymous browser-local object containing completed lesson identifiers and the most recently opened lesson identifier. The dashboard exposes a reset control, and the lesson viewer states that progress is stored on the current device only.

The public dashboard was visually checked at the development URL. It opens directly at zero progress without an account gate, presents the device-local privacy notice, lists all 13 learning levels, and identifies the suggestions and interview challenge available after every module.

The `career-diagnostic` lesson route was visually checked without a learner session. It opens directly and contains the full lesson, practical exercise, end-of-module suggestions, interview questions, interview challenge, and a local “Mark complete” control.

The diagnostic completion control was activated in the browser without any authentication. The UI immediately changed from “In progress” and “Mark complete” to “Completed” and “Mark incomplete”, confirming that the self-paced local-progress interaction is active.

After returning to the open dashboard, the browser displayed 5% progress, one completed lesson, and a completed Level 0 card. Reloading the dashboard retained the same state without an account session, confirming local persistence and resume behavior for the checked flow.

The open dashboard and the diagnostic lesson viewer were also visually checked at a 375px-wide mobile viewport. The dashboard preserves direct access, privacy messaging, level cards, and progress controls. The lesson preserves readable content, practical exercise, suggestions, interview questions, challenge, navigation, and the local completion control without horizontal overflow.

## Manual checks to perform before publishing

Open the dashboard in a fresh browser, start a lesson, mark it complete, return to the dashboard, refresh the page, and confirm that completion and resume position are retained. Then use **Reset local progress**, refresh again, and confirm that the course returns to zero completion. Repeat the lesson check at a narrow mobile viewport.

## Content review

Every course module includes source-derived suggestions, interview questions, and one interview-style challenge. Workday content remains clearly labelled as conceptual or simulated; it does not claim tenant access or certification.
