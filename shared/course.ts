export type LessonSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  codeExample?: { title: string; language: string; content: string };
};

export type CourseLesson = {
  id: string;
  title: string;
  summary: string;
  duration: string;
  objectives: string[];
  sections: LessonSection[];
  practice: string;
};

export type CourseModule = {
  id: string;
  level: string;
  title: string;
  overview: string;
  lessons: CourseLesson[];
};

const lesson = (
  id: string,
  title: string,
  summary: string,
  duration: string,
  objectives: string[],
  sections: LessonSection[],
  practice: string,
): CourseLesson => ({ id, title, summary, duration, objectives, sections, practice });

export const courseModules: CourseModule[] = [
  {
    id: "diagnostic",
    level: "Level 0",
    title: "Personalized HR Career Diagnostic",
    overview: "Establish a baseline before teaching, recognizing existing HR experience and identifying targeted gaps.",
    lessons: [
      lesson("career-diagnostic", "Baseline: your HR career diagnostic", "Set an evidence-led starting point across HR, recruitment, HRIS, Workday, analytics, and professional communication.", "30 min", ["Explain the tailored learning path", "Identify current strengths and development areas", "Understand the competency approach"], [
        { title: "How the program works", paragraphs: ["This program treats prior HR Executive experience as an asset. It begins with diagnosis rather than assuming either beginner or expert status.", "Progress represents demonstrated capability, not passive completion. Practical work calls for reasoning, professional judgment, and clear communication."], bullets: ["Assessment combines knowledge, application, accuracy, reasoning, communication, and professional judgment.", "Critical HR tasks require 80%; advanced and capstone work requires 85%.", "Below-threshold performance calls for remediation and reassessment."] },
        { title: "Diagnostic prompts", paragraphs: ["Use these prompts to establish a personal baseline before the foundation refresh."], bullets: ["Map the recruitment lifecycle from requisition to onboarding.", "Explain job, position, and job profile in an HRIS.", "Identify metrics that would investigate slow hiring.", "Write a brief, professional hiring-manager update."] },
      ], "Create a one-page baseline reflection: current strengths, three priority gaps, and the HR role you want to be ready for after the program."),
    ],
  },
  {
    id: "hr-foundations",
    level: "Level 1",
    title: "HR Foundation Refresh",
    overview: "Refresh the modern HR function, employee lifecycle, documentation, service delivery, and practical terminology.",
    lessons: [
      lesson("modern-hr-function", "The modern HR function", "Connect core HR responsibilities to business needs, service delivery, and employee experience.", "25 min", ["Describe key HR roles and operating models", "Connect HR processes to business outcomes", "Distinguish HR operations, shared services, and HR business partnering"], [
        { title: "From administration to business contribution", paragraphs: ["Modern HR combines reliable administration with responsibility for workforce capability, employee experience, governance, and business partnership.", "A practical HR professional understands both the process itself and its consequences for managers, employees, candidates, and the organization."], bullets: ["HR operations and personnel administration", "HR shared services and service delivery", "HR business partnering and workforce conversations", "HR reporting, metrics, and technology"] },
        { title: "Workplace lens", paragraphs: ["When a manager requests an urgent transfer, HR should consider process, records, approvals, people impact, and the corresponding HRIS update—not only paperwork."] },
      ], "Choose one employee-lifecycle event and write a short process note identifying the stakeholders, documents, approvals, employee communication, and HRIS records involved."),
      lesson("employee-lifecycle-records", "Employee lifecycle and HR records", "Follow the employee journey while protecting complete, accurate, and confidential records.", "30 min", ["Map core employee-lifecycle moments", "Identify essential HR documentation", "Recognize data-quality and confidentiality responsibilities"], [
        { title: "One lifecycle, connected processes", paragraphs: ["The HR lifecycle connects recruitment, offer, hire, onboarding, employment changes, absence, performance, benefits, and exit. A gap in one stage can create risk or rework at another."], bullets: ["Joining and onboarding documentation", "Transfers, promotions, and employee movements", "Leave, attendance, payroll and benefits coordination", "Exit processes, exit interviews, and final-settlement concepts"] },
        { title: "Judgment and jurisdiction", paragraphs: ["Employment law and compliance requirements vary by country and organization. Use this course for general HR practice and verify current law and company policy before a jurisdiction-specific decision."] },
      ], "Map Recruitment → Offer → Hire → Onboarding → Employment change → Exit. For each stage, list one record that must be accurate and one risk if it is not."),
    ],
  },
  {
    id: "talent-acquisition",
    level: "Level 2",
    title: "Talent Acquisition Mastery",
    overview: "Build defensible recruiting skill from workforce need and sourcing through structured screening, interviewing, and hiring decisions.",
    lessons: [
      lesson("requisition-and-job-design", "Requisitions, job analysis, and hiring strategy", "Turn a business need into an approved, well-scoped hiring plan.", "35 min", ["Differentiate job descriptions and job specifications", "Create a candidate persona", "Select suitable recruitment channels"], [
        { title: "Start with the business requirement", paragraphs: ["Strong recruitment begins before sourcing. Clarify the workforce need, requisition, job analysis, essential competencies, and realistic market expectations.", "A job description explains the work and responsibilities. A job specification clarifies the qualities, knowledge, skills, and experience required for success."], bullets: ["Workforce-planning basics and requisition management", "Competency-based hiring and candidate personas", "Internal versus external hiring", "Recruitment channels and strategy"] },
        { title: "Stakeholder calibration", paragraphs: ["Address unrealistic requirements constructively using market evidence, essential-versus-preferred criteria, and a shared hiring timeline."] },
      ], "Create a concise requisition brief for a hypothetical HR Operations Specialist: business need, essential competencies, candidate persona, sourcing channels, and approval stakeholders."),
      lesson("sourcing-and-screening", "Sourcing and structured screening", "Build an explainable candidate pipeline using Boolean logic, consistent criteria, and evidence-based screening.", "40 min", ["Use Boolean search concepts", "Define transparent screening criteria", "Identify red flags and false positives"], [
        { title: "Search with intent", paragraphs: ["Sourcing combines target profiles, channels, Boolean logic, passive-candidate outreach, talent mapping, and pipeline management. Structured screening applies the same role criteria to each candidate."], bullets: ["LinkedIn, resume databases, job portals, and X-ray search concepts", "Knockout questions and phone-screen design", "Candidate qualification, comparison, and documented reasoning"], codeExample: { title: "Illustrative Boolean search pattern", language: "text", content: '("HR Executive" OR "HR Generalist") AND (recruitment OR "talent acquisition") AND (HRIS OR Workday)' } },
        { title: "Screening quality", paragraphs: ["Treat a strong résumé as evidence to test, not proof of fit. Look for role-relevant examples and avoid allowing one impressive signal to outweigh the complete requirement."] },
      ], "For the requisition brief from the previous lesson, write a Boolean search string and a five-point screening checklist. Explain why each item matters."),
      lesson("interview-and-recruitment-operations", "Interviews, recruiting operations, and metrics", "Run a structured selection process and read the operating signals behind recruitment performance.", "40 min", ["Design structured interview questions and scorecards", "Explain key recruitment metrics", "Coordinate a candidate experience from scheduling to offer"], [
        { title: "Consistent evidence in selection", paragraphs: ["Behavioral, situational, and competency-based interviews work best when questions and score criteria reflect the job’s required capabilities. STAR responses help examine evidence, while calibration helps teams apply standards consistently."], bullets: ["Structured interview design", "Interview scorecards and candidate evaluation", "Interview scheduling and candidate communication"] },
        { title: "Operate the funnel", paragraphs: ["Recruitment operations covers candidate stages, offers, pre-employment checks, joining coordination, and service levels. Metrics such as time-to-fill, time-to-hire, cost-per-hire, source effectiveness, offer acceptance, and quality of hire identify where attention is needed."] },
      ], "Create a four-question scorecard for the HR Operations Specialist role. Then describe one possible funnel bottleneck and the metric you would use to investigate it."),
    ],
  },
  {
    id: "hr-operations",
    level: "Level 3",
    title: "HR Operations and Employee Lifecycle",
    overview: "Practice dependable HR administration, employee service, documentation, and difficult-case judgment.",
    lessons: [
      lesson("operations-service-delivery", "Practical HR operations", "Coordinate employee movements, absence, records, letters, and service requests with accuracy.", "30 min", ["Identify operational handoffs", "Create clear HR service responses", "Recognize documentation needs"], [
        { title: "Reliable execution", paragraphs: ["Practical HR operations requires complete information, clear ownership, timely communication, and accurate records. Transfers, promotions, leave, attendance, benefits, payroll coordination, and exit should be handled as connected employee experiences."], bullets: ["Joining formalities and employee documentation", "HR letters and employee queries", "Payroll and benefits coordination", "Exit processes and exit interviews"] },
        { title: "Service mindset", paragraphs: ["A professional response explains the next step, owner, timing, and information needed without sharing information the requester is not entitled to receive."] },
      ], "Draft a concise reply to an employee asking about a delayed transfer. Include acknowledgement, the information needed, the next step, and an appropriate confidentiality boundary."),
      lesson("employee-relations-judgment", "Employee relations and professional judgment", "Approach employee concerns, conflict, attendance, and escalation with fairness and discretion.", "35 min", ["Recognize when escalation is appropriate", "Apply confidentiality principles", "Separate general practice from local legal requirements"], [
        { title: "Handle concerns thoughtfully", paragraphs: ["Employee relations may involve complaints, manager conflict, performance concerns, attendance problems, grievances, workplace behavior, and investigation fundamentals. Professional judgment requires listening, accurate documentation, fair process, and appropriate escalation."], bullets: ["Confidentiality and need-to-know boundaries", "Documentation and factual language", "Conflict-resolution and escalation pathways", "General HR practice versus jurisdiction-specific legal obligations"] },
        { title: "A practical distinction", paragraphs: ["A technically correct action can still be poorly timed or poorly communicated. Consider employee experience, manager impact, policy requirements, confidentiality, and reliable records together."] },
      ], "Write a first-response plan for a fictional employee grievance: what you would document, who should be involved, what you would not promise, and what needs policy or legal verification."),
    ],
  },
  {
    id: "hris-foundation",
    level: "Level 4",
    title: "HRIS Foundation",
    overview: "Understand how HR processes are represented in data, organizations, security, reporting, and HR technology governance.",
    lessons: [
      lesson("hris-data-and-organizations", "HRIS architecture, worker data, and organizations", "See how employee master data and organizational structures support a reliable HR operating model.", "35 min", ["Explain employee master data", "Differentiate organizational objects", "Connect data quality to HR reporting"], [
        { title: "The information model behind HR", paragraphs: ["An HRIS supports HR processes through worker data, organizational structures, positions, jobs, job profiles, departments, locations, cost centers, compensation, benefits, absence, recruiting, talent, learning, and reporting.", "Data quality matters for approvals, service delivery, analytics, integrations, and employee trust."], bullets: ["Employee master data", "Jobs, positions, and job profiles", "Supervisory organizations, departments, locations, and cost centers", "Data governance, security, and reporting"] },
        { title: "Process to system translation", paragraphs: ["Translate a business process into the data, organizational structure, approvals, security roles, and reports it depends on. This is the basis for useful HRIS analysis."] },
      ], "For a promotion, map the HR process, the data fields likely to change, approval participants, related records, and one report that may be affected."),
      lesson("hris-governance-and-reporting", "HRIS governance, integrations, and reporting", "Learn the controls that keep HR systems useful, governed, and trusted.", "30 min", ["Describe HRIS governance concepts", "Recognize integration dependencies", "Frame a reporting requirement"], [
        { title: "Governed HR technology", paragraphs: ["HRIS governance combines data ownership, security, process design, change control, integrations, and reporting. It helps ensure that systems reflect approved business processes and that sensitive employee information is handled appropriately."], bullets: ["Security and role-based access concepts", "Integrations and upstream/downstream data dependencies", "Implementation and change-management concepts", "Reporting requirements and data definitions"] },
        { title: "Ask better reporting questions", paragraphs: ["Before building a report, clarify the business decision, population, definitions, time period, owner, and confidentiality constraints. A neat dashboard cannot correct an unclear question or unreliable data."] },
      ], "Write a reporting brief for a monthly headcount report. Define the audience, business question, core measures, data-quality checks, and confidentiality considerations."),
    ],
  },
  {
    id: "workday-hcm",
    level: "Level 5",
    title: "Workday HCM",
    overview: "Build interview-ready conceptual knowledge while distinguishing simulated learning from real tenant access and certification.",
    lessons: [
      lesson("workday-concepts-and-terminology", "Workday concepts and HCM terminology", "Orient to Workday HCM concepts relevant to HR and Talent Acquisition professionals.", "35 min", ["Explain core Workday HCM terms", "Differentiate job, position, and supervisory organization concepts", "Identify what can be learned conceptually"], [
        { title: "Learn the model honestly", paragraphs: ["This course develops conceptual Workday knowledge, terminology, workflow understanding, and simulated practice. It does not provide tenant access or claim certification.", "Workday HCM concepts include workers, organizations, supervisory organizations, staffing models, job profiles, positions, business processes, compensation, absence, performance, talent, learning, security, and reporting."], bullets: ["Conceptual knowledge: terminology and purpose", "Navigation knowledge: requires environment-specific practice", "Business-process knowledge: approvals and workflow logic", "Configuration and reporting concepts: not a substitute for formal training or tenant access"] },
        { title: "Interview-ready language", paragraphs: ["An HR process is the business activity; an HRIS process is how a system represents or supports it; a Workday business process is a platform workflow; configuration, security, and reporting are related but distinct areas."] },
      ], "Write a brief explanation of the difference between a Workday business process, Workday configuration, Workday reporting, and Workday security. Use a hiring example."),
      lesson("workday-business-processes", "Workday business processes and employee lifecycle", "Trace conceptual workflows across hire, onboarding, change, and reporting while recognizing approval and data dependencies.", "35 min", ["Map a conceptual Workday workflow", "Identify approval and security considerations", "Recognize data-quality dependencies"], [
        { title: "Workflow as controlled movement", paragraphs: ["Workday business processes can help organizations standardize actions such as recruiting, hiring, onboarding, compensation changes, and employee movements. Each workflow can involve steps, roles, approvals, notifications, and records."], bullets: ["Worker data and organization context", "Business-process approvals and roles", "Dashboards, reporting, data quality, and governance"] },
        { title: "Simulation boundary", paragraphs: ["Simulated processes build reasoning. Actual navigation, configuration, security administration, and production decisions require authorized access, organizational context, and appropriate training."] },
      ], "Create a simulated hire-to-onboarding workflow. Mark the data, approver, communication, and control needed at each stage."),
    ],
  },
  {
    id: "workday-recruiting",
    level: "Level 6",
    title: "Workday Recruiting",
    overview: "Apply recruiting concepts to a simulated Workday-oriented workflow from approved requisition through onboarding handoff.",
    lessons: [
      lesson("workday-recruiting-workflow", "Workday Recruiting workflow", "Follow a conceptual recruitment workflow through requisition, sourcing, screening, interviews, offers, and hire.", "40 min", ["Describe recruiting workflow stages", "Identify key participants", "Connect candidate stages to approvals and communication"], [
        { title: "Recruiting as a connected workflow", paragraphs: ["A Workday Recruiting-oriented workflow can include job requisitions, approvals, candidate profiles, candidate pools, screening, interview coordination, hiring teams, offers, candidate communication, and onboarding handoff.", "Exact configuration varies by organization. Focus on why each stage exists and the evidence, approvals, and candidate experience it should support."], bullets: ["Requirement identification and approved requisition", "Candidate stages and pools", "Screening and interview coordination", "Offers, hiring, and onboarding handoff"] },
        { title: "A disciplined handoff", paragraphs: ["Recruitment is not complete at verbal acceptance. Candidate communications, offer status, pre-employment requirements, hiring approvals, and onboarding responsibilities must be clear to avoid preventable drop-off."] },
      ], "Walk through a simulated new-position request from business requirement to onboarding handoff. Identify the primary owner and decision point at every stage."),
      lesson("workday-recruiting-reports", "Recruiting reports, metrics, and candidate experience", "Use reporting concepts to spot bottlenecks while preserving accurate candidate status and professional communications.", "30 min", ["Select recruiting metrics for a business question", "Recognize status-data quality needs", "Frame a candidate-experience improvement"], [
        { title: "From status data to action", paragraphs: ["Recruiting reports are useful when candidate stages and requisition data are timely and accurate. They can support questions about open requisitions, funnel conversion, time-to-fill, offer acceptance, source effectiveness, and candidate movement."], bullets: ["Recruiting reports and dashboards", "Recruiting metrics and defined measures", "Candidate communications and service expectations", "Data quality and business-process approvals"] },
        { title: "Candidate experience is operational", paragraphs: ["Clear updates, respectful scheduling, transparent next steps, and prompt closure reflect a mature recruiting operation. The recruiting system should support—not replace—professional judgment."] },
      ], "Choose two recruiting metrics for a situation with candidate drop-offs. Explain what each metric can reveal and one action you would investigate next."),
    ],
  },
  {
    id: "hr-analytics",
    level: "Level 7",
    title: "HR Analytics and Excel",
    overview: "Develop practical comfort with HR data, recruitment metrics, basic analysis, and clear reporting.",
    lessons: [
      lesson("hr-metrics-and-funnels", "HR metrics and the recruitment funnel", "Define HR and recruitment measures before drawing conclusions from them.", "30 min", ["Describe common HR metrics", "Map a hiring funnel", "Identify metric limitations"], [
        { title: "Measure the question that matters", paragraphs: ["HR analytics can examine headcount, attrition, turnover, absenteeism, retention, workforce trends, and hiring activity. Recruitment analysis can examine time-to-fill, time-to-hire, cost-per-hire, offer acceptance, source effectiveness, quality of hire, and funnel conversion.", "A metric needs a clear definition, time period, population, and context."], bullets: ["Headcount, attrition, turnover, and absenteeism", "Time-to-fill and time-to-hire", "Offer acceptance, source effectiveness, and quality of hire", "Hiring funnel and workforce trends"] },
        { title: "Use caution", paragraphs: ["When discussing diversity-related data, consider lawful and appropriate use, data definitions, and privacy. Do not treat a dashboard as a replacement for inquiry into the underlying process."] },
      ], "Sketch a five-stage hiring funnel and describe one question each stage can answer for a recruiting leader."),
      lesson("excel-and-hr-reporting", "Excel, data cleaning, and HR reporting", "Prepare HR data for useful analysis and communicate findings responsibly.", "35 min", ["Select basic spreadsheet techniques", "Recognize data-cleaning steps", "Present a concise HR insight"], [
        { title: "Practical tools for HR data", paragraphs: ["Sorting, filtering, pivot tables, lookup functions, IF logic, conditional calculations, data cleaning, charts, and dashboards support practical HR reporting. Power BI concepts can extend this work where appropriate."], bullets: ["Sorting and filtering", "Pivot tables and lookup functions", "IF logic and conditional calculations", "Data cleaning, charts, dashboards, and basic HR reports"] },
        { title: "Communicate insight, not just output", paragraphs: ["A useful HR report states the finding, supporting evidence, limitation, and suggested next question or action. It does not overstate certainty."] },
      ], "Design a simple monthly recruitment dashboard. Include no more than five measures, the business question behind each, and the audience for the report."),
    ],
  },
  {
    id: "hrbp-strategy",
    level: "Level 8",
    title: "HRBP and Strategic HR",
    overview: "Progress from process execution to manager advisory work, workforce thinking, and stakeholder-sensitive recommendations.",
    lessons: [
      lesson("business-partnering", "Business partnering and workforce judgment", "Advise rather than merely process by linking people matters to business context and trade-offs.", "35 min", ["Frame a manager conversation", "Recognize strategic HR topics", "Recommend a balanced next step"], [
        { title: "Move from execution to advice", paragraphs: ["HR business partnering requires business understanding, stakeholder management, workforce planning, employee engagement, performance management, talent management, succession, organizational development, employee relations, change management, manager coaching, people analytics, and HR strategy."], bullets: ["Workforce planning and employee engagement", "Performance, talent, and succession", "Change management and manager coaching", "People analytics and HR strategy"] },
        { title: "Trade-offs matter", paragraphs: ["When several answers are possible, explain the trade-offs. A technically correct recommendation may still need adjustment for timing, employee impact, confidentiality, or stakeholder alignment."] },
      ], "A manager asks for urgent hiring while reporting performance and retention concerns. Write a short advisory note with priorities, questions, stakeholders, and a first action."),
    ],
  },
  {
    id: "communication",
    level: "Level 9",
    title: "Professional Communication",
    overview: "Build confident, concise communication for candidates, managers, employees, and senior stakeholders.",
    lessons: [
      lesson("hr-communication", "Clear communication in HR", "Write and speak with clarity, professionalism, stakeholder awareness, and appropriate boundaries.", "30 min", ["Structure a professional HR message", "Adapt communication to the stakeholder", "Handle difficult conversations thoughtfully"], [
        { title: "Communication is a core HR competency", paragraphs: ["Professional HR communication includes recruiter and candidate messages, hiring-manager updates, escalation, meeting communication, follow-ups, status reporting, executive communication, difficult conversations, negotiation, and confidence."], bullets: ["Candidate and hiring-manager communication", "Escalation and status updates", "Executive communication and follow-up", "Difficult conversations and negotiation"] },
        { title: "The essentials", paragraphs: ["A reliable message states its purpose early, uses factual language, specifies a next action or decision, and avoids unnecessary disclosure. Match detail and tone to the recipient."] },
      ], "Rewrite a vague status update into a clear hiring-manager email that explains the risk, the supporting evidence, and the decision needed."),
    ],
  },
  {
    id: "ai-for-hr",
    level: "Level 10",
    title: "AI for HR",
    overview: "Explore responsible AI support for HR and recruitment without compromising fairness, privacy, confidentiality, or professional oversight.",
    lessons: [
      lesson("responsible-ai-for-hr", "Responsible AI in HR and recruitment", "Use AI as an assistive tool while retaining human judgment and safeguarding sensitive information.", "30 min", ["Identify useful HR use cases", "Recognize AI risks", "Apply human-oversight principles"], [
        { title: "Useful, but never unsupervised", paragraphs: ["AI can assist with job descriptions, sourcing, outreach drafts, résumé analysis, interview preparation, HR documentation, analytics, reporting, employee communications, research, and workflow automation.", "It can also introduce bias, privacy risks, confidentiality failures, and hallucinated information. Human review and accountable decision-making remain essential."], bullets: ["AI bias and candidate fairness", "Privacy and sensitive employee data", "Confidentiality and hallucinations", "Human oversight and responsible AI"] },
        { title: "Protect real people", paragraphs: ["Do not upload confidential candidate or employee information into public AI systems. Work with de-identified or authorized information and follow company policy before using AI in a live HR workflow."] },
      ], "Draft a safe prompt for improving the structure of a generic job description. Then list the information that must not be included in the prompt."),
    ],
  },
  {
    id: "career-reentry",
    level: "Level 11",
    title: "Career Reentry",
    overview: "Translate actual experience into an honest, confident return-to-work narrative and job-search materials.",
    lessons: [
      lesson("career-story-and-positioning", "Career story, résumé, LinkedIn, and interviews", "Explain the career gap with confidence while keeping every claim accurate and evidence-based.", "40 min", ["Create an honest career-gap narrative", "Strengthen HR-oriented positioning", "Prepare STAR stories without fabrication"], [
        { title: "Professional positioning without exaggeration", paragraphs: ["Career reentry preparation helps the learner explain a one-year career gap, why they are returning, what they did during the gap, and how they have maintained development. The objective is an honest, concise, forward-looking narrative."], bullets: ["Career-gap explanation", "ATS-friendly and HR-focused résumé", "LinkedIn positioning and professional headline", "STAR stories and interview preparation"] },
        { title: "Accuracy is non-negotiable", paragraphs: ["Do not fabricate experience, achievements, metrics, certifications, systems exposure, or qualifications. Translate actual work into clear professional language and identify roles genuinely supported by demonstrated competency."] },
      ], "Write a 90-second answer to: “Why are you returning now?” Include real career-break context, current development, and the HR role you are seeking."),
    ],
  },
  {
    id: "capstone",
    level: "Level 12",
    title: "HR Professional Simulation",
    overview: "Synthesize HR, Talent Acquisition, HRIS, Workday concepts, analytics, and communication in a realistic simulated workload.",
    lessons: [
      lesson("hr-professional-capstone", "Capstone: operate as the HR/TA professional", "Prioritize multiple connected HR challenges, explain your judgment, and build an evidence-led action plan.", "60 min", ["Prioritize a complex HR workload", "Integrate HRIS and recruiting concepts", "Communicate professional recommendations"], [
        { title: "The simulation", paragraphs: ["The final simulation combines open positions, candidate drop-offs, hiring-manager concerns, an employee grievance, an HRIS data issue, an onboarding delay, attrition, a reporting request, and a difficult stakeholder."], bullets: ["Separate urgent from important", "Identify owners, dependencies, and escalation needs", "Use data and documented evidence", "Explain recommendations and trade-offs"] },
        { title: "Job-readiness reflection", paragraphs: ["Completion alone is not job readiness. Use demonstrated performance to identify strongest areas, remaining gaps, roles supported by current capability, and the next steps that continue professional development."] },
      ], "Create an ordered action plan for the simulation. For each item, state the risk, immediate action, key stakeholder, data or document needed, and how you will communicate progress."),
    ],
  },
];

export const courseLessons = courseModules.flatMap((module) => module.lessons);
export const courseLessonIds = courseLessons.map((item) => item.id);

export function findLesson(lessonId: string) {
  return courseLessons.find((item) => item.id === lessonId);
}

export function findLessonModule(lessonId: string) {
  return courseModules.find((module) => module.lessons.some((item) => item.id === lessonId));
}

export type ModulePractice = {
  suggestions: string[];
  interviewQuestions: string[];
  challenge: {
    title: string;
    prompt: string;
  };
};

export const modulePractice: Record<string, ModulePractice> = {
  diagnostic: {
    suggestions: ["Use your diagnostic answers to identify the three areas where you need the most current practice.", "Set a realistic 60–90 minute learning block for five days each week, then adjust it to your availability."],
    interviewQuestions: ["Which HR responsibilities do you feel most confident handling independently?", "How have you kept your HR knowledge current during a career break?"],
    challenge: { title: "Career baseline briefing", prompt: "Give a two-minute professional introduction that connects your previous HR experience, your career break, and the capability you are actively rebuilding." },
  },
  "hr-foundations": {
    suggestions: ["Draw the employee lifecycle for an organization you know, then identify the record and communication risk at each stage.", "Review a company policy template and note which operational steps it expects HR to coordinate."],
    interviewQuestions: ["How do HR operations, shared services, and HR business partnering differ?", "What would you check before processing an employee transfer?"],
    challenge: { title: "Lifecycle handoff challenge", prompt: "A new joiner has completed pre-joining formalities but payroll does not have complete data. Explain your first three actions, stakeholders, and employee communication." },
  },
  "talent-acquisition": {
    suggestions: ["Take one job description and separate essential from preferred criteria before writing a candidate persona.", "Practice screening against the same rubric for every candidate so that comparisons remain explainable."],
    interviewQuestions: ["How would you handle a hiring manager with an unrealistic candidate requirement?", "What is the difference between time-to-fill and time-to-hire, and when would each matter?"],
    challenge: { title: "Recruiter case interview", prompt: "You must hire an HR Operations Specialist within 30 days. Present a requisition brief, Boolean search approach, screening rubric, interview plan, and the metric you will monitor most closely." },
  },
  "hr-operations": {
    suggestions: ["Practice writing factual, empathetic replies to employee service requests without sharing restricted information.", "For an employee-relations scenario, document facts separately from assumptions and identify when policy or legal advice is needed."],
    interviewQuestions: ["How would you respond to an employee grievance while maintaining confidentiality?", "What controls help keep employee records reliable during a promotion or transfer?"],
    challenge: { title: "Employee relations response", prompt: "An employee alleges unfair attendance treatment by their manager. Outline your intake, documentation, confidentiality, escalation, and follow-up plan without making an unsupported promise." },
  },
  "hris-foundation": {
    suggestions: ["Map a common HR event to the data fields, organizational objects, approvals, security roles, and report that support it.", "When reviewing a report, define the population, period, business question, and data owner before interpreting results."],
    interviewQuestions: ["Why does employee master-data quality matter to an HRIS?", "How would you distinguish a job, a position, and a job profile?"],
    challenge: { title: "HRIS process map", prompt: "Map a promotion from manager request to updated records. Identify data changes, approvals, security considerations, integration dependencies, and the report that could expose an error." },
  },
  "workday-hcm": {
    suggestions: ["Use Workday terminology precisely and distinguish conceptual understanding from real tenant navigation or configuration experience.", "Trace a simulated hire process and label the business action, system workflow, security role, and report separately."],
    interviewQuestions: ["What is a supervisory organization in conceptual Workday language?", "How do a Workday business process, configuration, reporting, and security differ?"],
    challenge: { title: "Workday workflow explanation", prompt: "A manager asks how a new hire moves through approvals and onboarding in Workday. Explain the conceptual workflow, expected roles, data dependencies, and what would require actual tenant access." },
  },
  "workday-recruiting": {
    suggestions: ["Review each recruiting stage through both the candidate experience and the internal approval lens.", "Use accurate stage data before using a recruiting dashboard to diagnose bottlenecks."],
    interviewQuestions: ["How does a requisition move from business need to approved recruiting workflow?", "Which recruiting metrics would you use to investigate candidate drop-off?"],
    challenge: { title: "Workday Recruiting simulation", prompt: "Walk an interviewer through a simulated requisition from requirement identification to sourcing, interview coordination, offer approval, hire, and onboarding handoff. Explain the purpose of each stage." },
  },
  "hr-analytics": {
    suggestions: ["Define the measure and population before using a formula, pivot table, chart, or dashboard.", "Practice stating what a metric can suggest and what further question is required before recommending action."],
    interviewQuestions: ["How would you use a recruitment funnel to find a hiring bottleneck?", "What data checks would you complete before presenting a monthly headcount report?"],
    challenge: { title: "People-data case", prompt: "A recruitment leader reports a longer time-to-hire and lower offer acceptance. Select four measures, describe the relationship you would test, and state the first action you would recommend only after validating the data." },
  },
  "hrbp-strategy": {
    suggestions: ["Frame manager conversations around the business issue, people impact, policy context, available data, and practical options.", "Practice explaining trade-offs rather than offering a single unsupported answer."],
    interviewQuestions: ["How would you advise a manager facing urgent hiring and retention concerns at the same time?", "What questions would you ask before recommending a workforce-planning action?"],
    challenge: { title: "Manager advisory case", prompt: "A business leader asks HR to solve attrition, low engagement, and a hiring backlog in one quarter. Prioritize the first conversation, data needed, stakeholders, and a measured first recommendation." },
  },
  communication: {
    suggestions: ["Draft the purpose, evidence, requested action, and appropriate confidentiality boundary before sending a difficult HR message.", "Read your message aloud once to remove jargon, unnecessary detail, and ambiguous next steps."],
    interviewQuestions: ["How do you tailor a hiring update for a hiring manager versus a senior leader?", "Tell me about a difficult workplace conversation and how you structured it."],
    challenge: { title: "Executive update exercise", prompt: "Write a concise update to a senior leader about an at-risk hiring plan. State the issue, evidence, business implication, options, and decision required in no more than 180 words." },
  },
  "ai-for-hr": {
    suggestions: ["Use AI to improve drafts and research structure, but retain human review for judgment, fairness, and accuracy.", "Practice removing confidential candidate and employee information before using any external tool."],
    interviewQuestions: ["Where can AI assist a recruiter without replacing professional judgment?", "What risks would you raise before using AI with candidate or employee data?"],
    challenge: { title: "Responsible AI review", prompt: "A hiring team wants to paste résumés into a public AI tool for ranking. Explain the privacy, fairness, confidentiality, and human-oversight concerns, then propose a safer workflow." },
  },
  "career-reentry": {
    suggestions: ["Write a career-break explanation that is honest, concise, forward-looking, and grounded in real activity.", "Translate actual responsibilities into evidence-based résumé statements without inventing metrics, systems exposure, or certifications."],
    interviewQuestions: ["Why did you take a career break, and why are you returning now?", "How have you maintained or refreshed your HR capability?"],
    challenge: { title: "Career narrative interview", prompt: "Record or rehearse a 90-second answer to a career-break question. Connect your HR experience, what you genuinely did during the gap, current development, and the role you are now ready to pursue." },
  },
  capstone: {
    suggestions: ["Use a written prioritization method: risk, urgency, employee or business impact, owner, information needed, and communication cadence.", "Review your capstone answer for clear sequencing, defensible assumptions, and appropriate escalation."],
    interviewQuestions: ["How would you prioritize simultaneous recruiting, employee-relations, HRIS, onboarding, and reporting issues?", "Describe the trade-off you would make when two high-stakes HR demands compete for the same stakeholder."],
    challenge: { title: "HR professional simulation", prompt: "You inherit 20 open positions, candidate drop-offs, an employee grievance, an HRIS data error, an onboarding delay, and a senior reporting request. Present your first-day priorities and explain how you will keep stakeholders informed." },
  },
};

export function getModulePractice(moduleId: string) {
  return modulePractice[moduleId];
}

export type LearningExtension = {
  video: {
    title: string;
    source: string;
    url: string;
    duration: string;
    status: "Recommended" | "Optional";
    outcome: string;
    caution?: string;
  };
  practicalSession: {
    title: string;
    duration: string;
    steps: string[];
    deliverable: string;
  };
};

export const moduleLearningExtensions: Record<string, LearningExtension> = {
  diagnostic: {
    video: { title: "Building your career: Breaking into the people profession", source: "CIPD", url: "https://www.youtube.com/watch?v=9_LAfYaijVQ", duration: "Provider runtime", status: "Optional", outcome: "Use a people-profession career discussion to frame your own evidence-based return-to-work plan." },
    practicalSession: { title: "30-minute career baseline session", duration: "30 min", steps: ["Set a timer and answer the diagnostic prompts without external help.", "Sort answers into confident, refresh, and learn-next categories.", "Choose one HR, one HRIS, and one communication goal for the coming week."], deliverable: "A one-page baseline and a realistic one-week learning plan." },
  },
  "hr-foundations": {
    video: { title: "Introduction to Human Resource Management", source: "From A Business Professor", url: "https://www.youtube.com/watch?v=4YRchaXY2-M", duration: "Provider runtime", status: "Recommended", outcome: "Refresh the modern HR function before mapping the employee lifecycle." },
    practicalSession: { title: "Employee lifecycle mapping lab", duration: "35 min", steps: ["Select a familiar organization or use a fictional company.", "Map recruitment, hire, onboarding, movement, absence, performance, and exit.", "For every stage, identify one record, one owner, and one employee-facing communication."], deliverable: "A lifecycle map with records, roles, and employee-experience risks." },
  },
  "talent-acquisition": {
    video: { title: "SHRM: How to Recruit “Hidden Talent”", source: "Workforce.com with SHRM guest Julie Schweber", url: "https://www.youtube.com/watch?v=iZujLexGi-U", duration: "Provider runtime", status: "Recommended", outcome: "Practice evaluating adjacent skills, transferable experience, and behavioral evidence rather than keyword matching alone.", caution: "Treat attitude-first hiring as a strategy discussion; required credentials still matter in regulated or safety-critical roles." },
    practicalSession: { title: "Sourcing and screening sprint", duration: "45 min", steps: ["Choose a hypothetical HR Operations Specialist role and define five essential criteria.", "Draft a Boolean search string and a five-point screening rubric.", "Compare three hypothetical candidates using only your rubric and document the evidence."], deliverable: "A sourcing plan, Boolean string, screening rubric, and brief candidate-comparison note." },
  },
  "hr-operations": {
    video: { title: "Professional behaviours and valuing people", source: "CIPD", url: "https://www.youtube.com/watch?v=bMCFrnaZPNA", duration: "Provider runtime", status: "Optional", outcome: "Reflect on professional behavior, fairness, and people-centred judgment while handling operational HR work." },
    practicalSession: { title: "HR service desk simulation", duration: "40 min", steps: ["Read a fictional employee request involving a delayed transfer, absence record, or benefits query.", "List the facts you need, the policy boundary, the likely owner, and the response deadline.", "Write a concise employee reply and a separate internal follow-up note."], deliverable: "An employee-facing response plus a factual internal action log." },
  },
  "hris-foundation": {
    video: { title: "What Is an HRIS? — AIHR Learning Bite", source: "AIHR — Academy to Innovate HR", url: "https://www.youtube.com/watch?v=Y72bRzL-bHU", duration: "Provider runtime", status: "Recommended", outcome: "Connect employee data, HR processes, and organizational performance to the HRIS foundation lessons." },
    practicalSession: { title: "HRIS data-quality lab", duration: "45 min", steps: ["Choose an employee event such as a promotion or transfer.", "List the worker, job, position, organization, cost-centre, and approval data that may change.", "Identify two data-quality checks and one report that could reveal an error."], deliverable: "A one-page process-to-data map with controls and a reporting check." },
  },
  "workday-hcm": {
    video: { title: "Introduction to Business Process in Workday HCM", source: "ZaranTech public tutorial", url: "https://www.youtube.com/watch?v=hFRXvvHKatw", duration: "Provider runtime", status: "Optional", outcome: "Hear common Workday business-process terminology before applying it to a simulated employee lifecycle." , caution: "This is third-party conceptual training, not official Workday certification, tenant access, or configuration authorization." },
    practicalSession: { title: "Simulated Workday workflow lab", duration: "40 min", steps: ["Pick a hire, promotion, or transfer scenario.", "Separate the business event, system workflow, approval roles, security considerations, and report need.", "Mark which activity is conceptual versus what would require a real tenant."], deliverable: "A simulated workflow map with explicit learning boundaries." },
  },
  "workday-recruiting": {
    video: { title: "How to Create Prospects & Candidates", source: "Workday Recruiting public tutorial", url: "https://www.youtube.com/watch?v=d6VV8l_p6e8", duration: "Provider runtime", status: "Optional", outcome: "Observe the conceptual movement from prospect to active candidate before practising recruiting-stage decisions.", caution: "Use this as a public conceptual demonstration; configuration and navigation vary by organization and require authorized tenant access." },
    practicalSession: { title: "Recruiting workflow simulation", duration: "45 min", steps: ["Write a new-position business requirement and approval path.", "Map requisition, sourcing, screening, interview, offer, hire, and onboarding handoff stages.", "For each stage, note the candidate communication and internal decision evidence required."], deliverable: "A candidate-stage workflow with owners, decision points, and communications." },
  },
  "hr-analytics": {
    video: { title: "What is HR Analytics? — AIHR Learning Bite", source: "AIHR — Academy to Innovate HR", url: "https://www.youtube.com/watch?v=2aq0wXB00OM", duration: "Provider runtime", status: "Recommended", outcome: "Differentiate people, workforce, HR, and talent analytics before building a focused recruitment or HR report." },
    practicalSession: { title: "Recruitment funnel analysis lab", duration: "45 min", steps: ["Create a five-stage fictional hiring funnel with stage counts.", "Calculate conversion rates and identify the stage with the largest drop-off.", "Write one data-quality check and one cautious recommendation for a recruiting leader."], deliverable: "A simple funnel table, conversion calculations, and an evidence-led recommendation." },
  },
  "hrbp-strategy": {
    video: { title: "What I Wish I’d Known — HR Directors", source: "CIPD webinar", url: "https://www.youtube.com/watch?v=ciYnvpyHrvo", duration: "Provider runtime", status: "Optional", outcome: "Reflect on the professional judgment, stakeholder perspective, and career lessons shared by senior HR practitioners." },
    practicalSession: { title: "Manager advisory case", duration: "40 min", steps: ["Read a fictional manager request combining attrition, engagement, and urgent hiring pressure.", "List the business questions, people risks, policy considerations, and data needed.", "Prepare a three-minute advisory response with options and trade-offs."], deliverable: "A manager advisory brief and verbal-response outline." },
  },
  communication: {
    video: { title: "Think Fast, Talk Smart: Communication Techniques", source: "Stanford Graduate School of Business / Think Fast Talk Smart", url: "https://www.youtube.com/watch?v=HAnw168huqA", duration: "58 min", status: "Recommended", outcome: "Use communication techniques to structure clear HR updates, difficult conversations, and interview responses." },
    practicalSession: { title: "HR communication rehearsal", duration: "35 min", steps: ["Choose a hiring-manager update, employee escalation, or interview answer from this module.", "Prepare a purpose-first outline with evidence, recommendation, and next action.", "Record a two-minute rehearsal, then revise for clarity, professionalism, and stakeholder awareness."], deliverable: "A revised message and a two-minute spoken response outline." },
  },
  "ai-for-hr": {
    video: { title: "Beyond the Hype: Ethical AI in Recruitment", source: "Jobylon webinar", url: "https://www.youtube.com/watch?v=JqpTRydDQPI", duration: "Provider runtime", status: "Recommended", outcome: "Examine how efficiency, fairness, privacy, human oversight, and candidate experience interact in AI-supported hiring." },
    practicalSession: { title: "Responsible AI prompt review", duration: "30 min", steps: ["Draft a generic prompt to improve a job-description structure.", "Highlight confidential, identifying, or sensitive employee and candidate data that must never be included.", "Add a human-review checkpoint for accuracy, bias, and final decision ownership."], deliverable: "A safe prompt, exclusion list, and human-oversight checklist." },
  },
  "career-reentry": {
    video: { title: "Building your career: Breaking into the people profession", source: "CIPD", url: "https://www.youtube.com/watch?v=9_LAfYaijVQ", duration: "Provider runtime", status: "Recommended", outcome: "Use a people-profession career discussion to strengthen credible positioning, networking, and return-to-work planning." },
    practicalSession: { title: "Career-return interview rehearsal", duration: "40 min", steps: ["Write an honest 90-second career-break explanation.", "Choose two real examples that demonstrate HR capability or recent development.", "Practise answering why you are returning now and why you are suited to the target role."], deliverable: "A factual career narrative, two STAR-story outlines, and a target-role statement." },
  },
  capstone: {
    video: { title: "Think Fast, Talk Smart: Communication Techniques", source: "Stanford Graduate School of Business / Think Fast Talk Smart", url: "https://www.youtube.com/watch?v=HAnw168huqA", duration: "58 min", status: "Optional", outcome: "Review how to present a concise, structured response before delivering the integrated capstone briefing." },
    practicalSession: { title: "90-minute HR professional simulation", duration: "90 min", steps: ["Read the capstone scenario and sort each issue by urgency, impact, and dependency.", "Create a first-day action plan with owners, evidence required, and stakeholder updates.", "Deliver a five-minute verbal briefing, then self-assess prioritization, professionalism, and judgment."], deliverable: "A prioritized action plan, stakeholder communication plan, and capstone briefing outline." },
  },
};

export function getModuleLearningExtension(moduleId: string) {
  return moduleLearningExtensions[moduleId];
}
