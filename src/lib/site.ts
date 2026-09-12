export const site = {
  name: 'BXR Architect',
  tagline: 'Space, soul, story',
  email: 'scarxarchitect@gmail.com',
  phone: '9786024242',
  telephone: '+919786024242',
  phoneDisplay: '+91 97860 24242',
  whatsappUrl: 'https://wa.me/919786024242',
  url: 'https://bxr-architect.vercel.app',
  locale: 'en',
  description:
    'BXR Architect is a studio for architecture and interior design. Space, soul, story. Explore selected work or start a project brief.',
} as const;

export const nav = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
] as const;

export const team = [
  {
    role: 'Principal Architect',
    focus: 'Plan, structure, and climate. Holds the brief from first sketch to site.',
    photo: 'photo-1507003211169-0a1dd7228f2d',
  },
  {
    role: 'Interior Designer',
    focus: 'Rooms, materials, furniture, and light. Makes the plan livable.',
    photo: 'photo-1573496359142-b8d87734a5a2',
  },
  {
    role: 'Project Architect',
    focus: 'Drawings, consultants, and site reviews. Keeps the design buildable.',
    photo: 'photo-1500648767791-00dcc994a43e',
  },
  {
    role: 'Visualisation',
    focus: 'Light studies and presentation drawings. Tests the space before it is built.',
    photo: 'photo-1580489944761-15a19d654956',
  },
] as const;

export const processSteps = [
  { n: '01', title: 'Brief', text: 'Plot, programme, budget, and how the place will be used.' },
  { n: '02', title: 'Concept', text: 'Plan, light, and materials. Options tested against climate and cost.' },
  { n: '03', title: 'Drawings', text: 'Working drawings and coordination so the idea survives construction.' },
  { n: '04', title: 'Site', text: 'Reviews on site. Adjustments where the drawing meets the wall.' },
] as const;
