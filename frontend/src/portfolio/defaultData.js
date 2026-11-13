export const defaultPortfolio = {
  identity: {
    name: 'Samuel Minwagaw',
    shortName: 'Samuel',
    role: 'Full Stack Developer',
    available: true,
    availabilityLabel: 'Available for freelance',
  },
  hero: {
    summary:
      'Building web applications from the database to the interface with Laravel, React and MySQL. Replace this with your own one-line pitch.',
    cvUrl: '#',
  },
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Work' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'contact', label: 'Contact' },
  ],
  sections: [
    { id: 'about', eyebrow: 'About', title: 'Professional journey', note: 'Task 6 fills this section with real content.' },
    { id: 'skills', eyebrow: 'Stack', title: 'Technical expertise', note: 'The skill orbit lives here.' },
    { id: 'work', eyebrow: 'Selected work', title: "What I've built for production", note: 'Task 6 shows your projects here.' },
    { id: 'timeline', eyebrow: 'Timeline', title: "Where I've built real systems", note: 'Task 6 shows experience and education here.' },
    { id: 'contact', eyebrow: 'Contact', title: "Let's build something", note: 'Task 14 adds the contact form here.' },
  ],
  skills: {
    groups: [
      { id: 'frontend', label: 'Frontend', color: '#3B82F6' },
      { id: 'backend', label: 'Backend', color: '#FF4B2B' },
      { id: 'data', label: 'Data', color: '#2EE6A6' },
      { id: 'tools', label: 'Tools', color: '#F5B83D' },
    ],
    items: [
      { id: 'react', group: 'frontend', name: 'React', description: 'Component-driven interfaces with state and routing.', tags: ['Hooks', 'Routing', 'Components'] },
      { id: 'javascript', group: 'frontend', name: 'JavaScript', description: 'The language behind interactive interfaces and API clients.', tags: ['ES6+', 'Async', 'DOM'] },
      { id: 'tailwind', group: 'frontend', name: 'Tailwind CSS', description: 'Utility-first styling for consistent, responsive layouts.', tags: ['Responsive', 'Design tokens'] },
      { id: 'laravel', group: 'backend', name: 'Laravel', description: 'PHP framework for APIs, authentication and queues.', tags: ['Eloquent', 'Sanctum', 'Policies'] },
      { id: 'php', group: 'backend', name: 'PHP', description: 'Server-side language that powers the API layer.', tags: ['OOP', 'Composer'] },
      { id: 'rest', group: 'backend', name: 'REST APIs', description: 'Clean JSON interfaces between the client and the server.', tags: ['Validation', 'Resources'] },
      { id: 'mysql', group: 'data', name: 'MySQL', description: 'Relational database for structured application data.', tags: ['Indexes', 'Joins', 'Migrations'] },
      { id: 'schema', group: 'data', name: 'Schema design', description: 'Normalized tables with sensible keys and constraints.', tags: ['Relations', 'Integrity'] },
      { id: 'git', group: 'tools', name: 'Git', description: 'Version control and collaboration workflow.', tags: ['Branches', 'Reviews'] },
      { id: 'vite', group: 'tools', name: 'Vite', description: 'Fast dev server and production builds.', tags: ['HMR', 'Bundling'] },
    ],
  },
  social: [
    { label: 'GitHub', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Telegram', href: '#' },
  ],
}