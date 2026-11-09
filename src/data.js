export const projects = [
  {
    id: 'gamehub', kind: 'product', number: '01', category: 'LIVE PRODUCT · BUILT WITH AI', title: 'Good company.\nA game I brought to life.', shortTitle: 'NaijaGameHub', description: 'An AI-assisted build you can actually play. Browser games for friends, family, and a little friendly competition.', tags: ['AI-assisted development', 'Browser games', 'Deployed on Vercel'], type: 'gamehub',
    intro: 'NaijaGameHub is a game website I built using AI and deployed on Vercel. Open the live site to explore the games and try the experience for yourself.',
    challenge: 'Make a playful idea tangible: a browser experience people can visit, understand, and explore together.',
    approach: 'I used AI as part of the development process to build the site. The public experience brings game discovery and shared-screen play together, with a searchable catalogue and game categories.',
    outcome: 'The live catalogue currently lists ten pass-and-play games, including Code Crackers, Mystery Card, Mental Math Duel, and Know Your Partner. Visitors can explore the published site directly.',
    facts: [['10', 'games listed'], ['Web', 'play in the browser'], ['AI', 'assisted development']],
    link: 'https://naijagamehub.vercel.app/', linkLabel: 'Play GameHub',
    note: 'Personal project. AI-assisted authorship is supplied by James; catalogue details were observed on the public site on November 8, 2026. Online-room games were unavailable during this review. Individual games may have their own sign-in requirements.'
  },
  {
    id: 'delivery', number: '02', category: 'PERSONAL PROJECT · AGENT SYSTEMS', title: 'A team of agents.\nOne delivery system.', shortTitle: 'Multi-Agent Delivery', description: 'Five specialist roles. Independent review. Evidence at every handoff.', tags: ['Claude Code', 'Orchestration', 'Evaluation'], type: 'agents',
    intro: 'A Claude Code plugin that divides software delivery into five focused roles: planner, researcher, builder, reviewer, and QA.',
    challenge: 'Getting an agent to write code is one step. Keeping a whole delivery process coherent, reviewed, and testable is a different engineering problem.',
    approach: 'Each specialist receives a defined role, tools, and handoff format. The builder and reviewer are separate agents. Routine tasks route to smaller models, while browser checks preserve screenshots and test results.',
    outcome: 'Used to deliver 5+ web applications from research through browser testing. Model routing reduced token cost by approximately 40%, as reported in my project experience.',
    facts: [['5', 'specialist roles'], ['5+', 'web apps delivered'], ['~40%', 'less token cost']],
    note: 'Personal project · September 2026–present. Workflow visuals are illustrative; they do not run models in your browser.'
  },
  {
    id: 'platform', number: '03', category: 'PROFESSIONAL WORK · AI INFRASTRUCTURE', title: 'Four models.\nOne place to work.', shortTitle: 'Multi-Provider AI Platform', description: 'Streaming conversations, retrieval, and controlled access in a self-hosted platform.', tags: ['React', 'TypeScript', 'Node.js', 'RAG'], type: 'platform',
    intro: 'A self-hosted chat platform built at LSPedia, bringing four LLM providers into a shared interface with a four-tier retrieval pipeline.',
    challenge: 'Teams need useful model access alongside control over retrieval, user permissions, and provider keys.',
    approach: 'Built with TypeScript, React, and Node.js. Integrated streaming from OpenAI, Anthropic, Gemini, and Azure AI Foundry, with role-based access control and AES-256 encryption for provider keys.',
    outcome: 'Connected four model providers and a four-tier RAG pipeline in a self-hosted application. The work connects interface engineering with the infrastructure needed to operate AI tools.',
    facts: [['4', 'LLM providers'], ['4-tier', 'RAG pipeline'], ['RBAC', 'access control']],
    note: 'Professional work at LSPedia, summarized from my CV. Visuals are conceptual. Proprietary source code and internal interfaces are not published.'
  },
  {
    id: 'prompt', number: '04', category: 'PROFESSIONAL WORK · AGENT EFFICIENCY', title: 'Less context.\nMore intention.', shortTitle: 'Agent Prompt Optimization', description: 'An always-on prompt reduced from ~4,500 tokens to 550 with on-demand skills.', tags: ['Prompt architecture', 'Guardrails', 'Evals'], type: 'prompt',
    intro: 'Reworked a requirements agent around a small router, with specialized skills loaded only when needed.',
    challenge: 'An always-on prompt of roughly 4,500 tokens carried instructions for work that was not relevant to every request.',
    approach: 'Separated routing from detailed skills and loaded those skills on demand. Alongside agent engineering, established session compliance logs, monthly knowledge checks, and adversarial tests for injection, rule bypass, and multi-intent requests.',
    outcome: 'Reduced the always-on prompt to 550 tokens, approximately 88% smaller. This measures prompt size; it is not a claim of an 88% reduction in total API cost.',
    facts: [['~4,500', 'tokens before'], ['550', 'tokens after'], ['~88%', 'smaller base prompt']],
    note: 'Professional work at LSPedia, summarized from my CV. No proprietary prompts or evaluation data are exposed.'
  },
  {
    id: 'driveway', number: '05', category: 'ACADEMIC PROJECT · FULL-STACK DELIVERY', title: 'From first quote\nto final dispatch.', shortTitle: 'Driveway Sealing Platform', description: 'Client registration, quotes, payments, scheduling, and a clear audit history.', tags: ['.NET Core', 'JavaScript', 'SQL', 'Next.js'], type: 'dispatch',
    intro: 'A full-stack driveway sealing platform developed as a school project, covering the operational journey from customer registration to dispatch.',
    challenge: 'Service teams need a consistent way to manage quotes, bills, and job assignments without losing the history of a price change.',
    approach: 'Built client sign-up, quote, and payment modules with .NET Core, JavaScript, and SQL. Added audit tables for quote and bill changes, with scheduling and dispatch using Next.js and SQL triggers.',
    outcome: 'Tested against 50+ sample jobs. Audit tables record every quote and bill change. The scheduling workflow reduced manual assignment steps by about 40% in the project.',
    facts: [['3', 'core modules'], ['50+', 'sample jobs'], ['100%', 'quote change history']],
    link: 'https://github.com/Burnout38x/driveway-sealing-app', linkLabel: 'View source on GitHub',
    note: 'Academic project · January–December 2025. Results describe the project test environment.'
  }
];
export const stages = [
  { name: 'Plan', role: 'Planner', icon: '01', title: 'Make the goal testable.', text: 'Turn the brief into a bounded plan, clear constraints, and acceptance checks.', artifact: 'delivery-plan.md', detail: 'Scope → requirements → acceptance checks' },
  { name: 'Research', role: 'Researcher', icon: '02', title: 'Replace guesses with evidence.', text: 'Inspect the existing system and primary sources before choosing an implementation.', artifact: 'research-notes.md', detail: 'Sources → tradeoffs → implementation direction' },
  { name: 'Build', role: 'Builder', icon: '03', title: 'Ship a working slice.', text: 'Implement the smallest useful journey and hand over the code with its checks.', artifact: 'implementation.diff', detail: 'Interface → implementation → focused checks' },
  { name: 'Review', role: 'Reviewer', icon: '04', title: 'Give the work a second set of eyes.', text: 'A separate agent reviews the change against the original goal, not the builder’s assumptions.', artifact: 'review-findings.md', detail: 'Independent review → findings → corrections' },
  { name: 'Verify', role: 'QA', icon: '05', title: 'Show that it actually works.', text: 'Exercise the user journey in a browser and keep screenshots and test results as evidence.', artifact: 'verification-report.md', detail: 'Browser checks → screenshots → delivery evidence' }
];
