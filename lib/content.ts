// Single source of truth for the IEEE Rwanda Subsection website.
// Content adapted from the existing r8.ieee.org/rwanda WordPress site.

export const SECTION = {
  org: "IEEE Rwanda Subsection",
  short: "IEEE Rwanda",
  region: "IEEE Region 8 · Africa",
  heroLine: "Harnessing African ingenuity to advance technology for humanity.",
  tagline:
    "Connecting engineers, technologists, and researchers to foster collaboration and innovation across Rwanda's growing technology sector.",
  // TODO: confirm a real public contact address for the section.
  contactEmail: "ieee.rwanda@ieee.org",
  joinUrl: "https://www.ieee.org/membership/join/index.html",
};

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
];

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#focus", label: "Focus Areas" },
  { href: "#subunits", label: "Subunits" },
  { href: "#team", label: "Our Team" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export const ABOUT = {
  heading: "Driving Rwanda's tech transformation",
  body: [
    "IEEE Rwanda is a Subsection of the Institute of Electrical and Electronics Engineers — the world's largest technical professional organization for the advancement of technology.",
    "We serve Rwanda's engineering and technology community by providing a platform for professional development, technical excellence, and innovation — connecting members to a global network of over 400,000 professionals across 160 countries.",
  ],
};

export const STATS = [
  { value: "400K+", label: "Global IEEE members" },
  { value: "6", label: "Strategic focus areas" },
  { value: "3", label: "University subunits" },
  { value: "160+", label: "Countries connected" },
];

export type Focus = { title: string; blurb: string; icon: FocusIcon };
export type FocusIcon =
  | "ai"
  | "energy"
  | "agri"
  | "digital"
  | "health"
  | "education";

export const FOCUS_AREAS: Focus[] = [
  {
    title: "Artificial Intelligence",
    blurb:
      "Advancing responsible AI and machine learning to solve uniquely Rwandan and African challenges.",
    icon: "ai",
  },
  {
    title: "Sustainable Energy",
    blurb:
      "Clean power, smart grids, and energy access for resilient, low-carbon communities.",
    icon: "energy",
  },
  {
    title: "Smart Agriculture",
    blurb:
      "Precision farming and sensing technologies that strengthen food security.",
    icon: "agri",
  },
  {
    title: "Digital Transformation",
    blurb:
      "Connectivity, digital public infrastructure, and the skills to power a digital economy.",
    icon: "digital",
  },
  {
    title: "Healthcare Tech",
    blurb:
      "Medical devices, telemedicine, and data systems that expand access to care.",
    icon: "health",
  },
  {
    title: "Education Tech",
    blurb:
      "Mentorship, workshops, and tools that build the next generation of engineers.",
    icon: "education",
  },
];

export type Subunit = {
  name: string;
  short: string;
  blurb: string;
};

export const SUBUNITS: Subunit[] = [
  {
    name: "Carnegie Mellon University Africa",
    short: "CMU-Africa",
    blurb:
      "Leading cutting-edge research, including the UMURIRO initiative that enhances power-grid efficiency between Rwanda and Uganda.",
  },
  {
    name: "University of Rwanda",
    short: "UoR",
    blurb:
      "A highly active unit organizing workshops and seminars that keep members current with the latest engineering advancements.",
  },
  {
    name: "African Leadership University",
    short: "ALU",
    blurb:
      "Focused on developing future leaders through hackathons, tech challenges, and hands-on innovation.",
  },
];

export type Member = { name: string; role: string };

export const EXECUTIVE: Member[] = [
  { name: "Cyiza Augustin", role: "Chair" },
  { name: "Samantha Niyoyita", role: "Vice Chair" },
  { name: "Kipngeno Koech", role: "Treasurer" },
  { name: "Sylvia Jebet", role: "Secretary" },
];

export const OPERATIONS: Member[] = [
  { name: "Jonathan Simenya", role: "Media Coordinator" },
  { name: "Samuel Chukwuma", role: "Operations & Logistics Lead" },
];

export type Testimonial = { quote: string; name: string; role: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Being part of IEEE Rwanda has accelerated my growth. The workshops, mentorship sessions, and global resources keep me ahead in a fast-changing tech landscape.",
    name: "Alice Umutoni",
    role: "Member",
  },
  {
    quote:
      "The community gave me a space to explore robotics and find collaborators I'd never have met otherwise. It's where ideas turn into projects.",
    name: "Eric",
    role: "Student Member",
  },
];
