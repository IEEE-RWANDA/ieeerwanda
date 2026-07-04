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

// Hero background video. Paste the YouTube video ID (the part after
// watch?v= or youtu.be/). Leave "" to fall back to the static image.
export const HERO_VIDEO_ID = "JHVWeyr0tiM";

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Our Team" },
  { href: "/events", label: "Events" },
  { href: "/student-branches", label: "Communities" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

// Top utility bar — the IEEE "network" links present across official sites.
export const UTILITY_LINKS = [
  { href: "https://www.ieee.org/", label: "IEEE.org" },
  { href: "https://ieeexplore.ieee.org/", label: "IEEE Xplore" },
  { href: "https://standards.ieee.org/", label: "Standards" },
  { href: "https://spectrum.ieee.org/", label: "Spectrum" },
  { href: "https://r8.ieee.org/", label: "Region 8" },
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

export type Focus = {
  title: string;
  blurb: string;
  icon: FocusIcon;
  color: string;
};
export type FocusIcon =
  | "ai"
  | "energy"
  | "agri"
  | "digital"
  | "health"
  | "education";

// Solid card colours from the IEEE bright palette (matches r8.ieee.org/rwanda).
export const FOCUS_AREAS: Focus[] = [
  {
    title: "Artificial Intelligence",
    blurb: "Driving AI research and applications for social good.",
    icon: "ai",
    color: "#981d97", // IEEE purple
  },
  {
    title: "Sustainable Energy",
    blurb: "Advancing renewable energy technologies for sustainable development.",
    icon: "energy",
    color: "#009ca6", // IEEE teal
  },
  {
    title: "Smart Agriculture",
    blurb: "Leveraging IoT and AI for agricultural innovation in the region.",
    icon: "agri",
    color: "#78be20", // IEEE green
  },
  {
    title: "Digital Transformation",
    blurb: "Enabling Rwanda's digital economy and smart city initiatives.",
    icon: "digital",
    color: "#ffa300", // IEEE orange
  },
  {
    title: "Healthcare Tech",
    blurb: "Developing medical devices and health informatics solutions.",
    icon: "health",
    color: "#ba0c2f", // IEEE red
  },
  {
    title: "Education Tech",
    blurb: "Supporting STEM education and e-learning platforms.",
    icon: "education",
    color: "#e5007e", // IEEE magenta
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
];

// Student branches, chapters and affinity groups all live under the
// /student-branches route. Edit these three arrays to manage that page.
// An empty array renders a friendly "coming soon" state.

// `url` is optional — add a society's own website once it goes live and the
// card renders a "Visit website" link.
export type Group = { name: string; blurb: string; url?: string };

// Technical society chapters. Societies with their own website link out to it;
// the rest remain joint chapters until they launch dedicated sites.
export const CHAPTERS: Group[] = [
  {
    name: "Communications Society (ComSoc)",
    blurb:
      "Networks, wireless, and the communications technologies connecting the world.",
    url: "https://comsoc.ieeerwanda.org/",
  },
  {
    name: "Industrial Electronics Society (IES)",
    blurb:
      "Industrial and manufacturing automation, control, robotics, and power electronics.",
    url: "https://ies.ieeerwanda.org/",
  },
  {
    name: "Microwave Theory & Technology Society (MTT-S)",
    blurb:
      "Microwave theory & techniques — RF, wireless, and high-frequency systems behind modern connectivity.",
    url: "https://mtts.ieeerwanda.org/",
  },
  {
    name: "Aerospace & Electronic Systems Society (AESS)",
    blurb:
      "Aerospace and electronic systems — radar, navigation, avionics, and autonomous platforms.",
    url: "https://aess.ieeerwanda.org/",
  },
  {
    name: "Geoscience & Remote Sensing Society (GRSS)",
    blurb:
      "Earth observation, satellite imaging, and remote sensing for environmental monitoring.",
    url: "https://grss.ieeerwanda.org/",
  },
  {
    name: "Joint PELS / PES / IAS Chapter",
    blurb:
      "Power electronics, power & energy systems, and industry applications driving sustainable energy and electrification.",
  },
  {
    name: "Joint SPS / CASS Chapter",
    blurb:
      "Signal processing and circuits & systems — from algorithms to the silicon that runs them.",
  },
];

// Affinity groups.
export const AFFINITY_GROUPS: Group[] = [
  {
    name: "Women in Engineering (WIE)",
    blurb:
      "Promoting women engineers and scientists, and inspiring girls to pursue careers in engineering and technology.",
  },
  {
    name: "Young Professionals (YP)",
    blurb:
      "Supporting recent graduates and early-career members as they transition from student life into the profession.",
  },
  {
    name: "SIGHT",
    blurb:
      "Special Interest Group on Humanitarian Technology — applying engineering to local development challenges.",
  },
];

export type Member = { name: string; role: string; photo?: string };

export const EXECUTIVE: Member[] = [
  { name: "Cyiza Augustin", role: "Chair", photo: "/img/team/cyiza.jpg" },
  { name: "Samantha Niyoyita", role: "Vice Chair", photo: "/img/team/samantha.jpg" },
  { name: "Kipngeno Koech", role: "Treasurer", photo: "/img/team/kip.jpg" },
  { name: "Gentille Uwera", role: "Secretary", photo: "/img/team/gentille.jpg" },
];

export const OPERATIONS: Member[] = [
  { name: "Jonathan Simenya", role: "Media Coordinator", photo: "/img/team/jonathan.png" },
  { name: "Samuel Chukwuma", role: "Operations & Logistics Lead", photo: "/img/team/samuel.jpg" },
  { name: "Furaha Benedict", role: "Media Volunteer", photo: "/img/team/furaha.jpg" },
  { name: "Sean Mavhima", role: "Media Volunteer", photo: "/img/team/sean.jpg" },
];

export type Testimonial = { quote: string; name: string; role: string };

export type EventItem = {
  title: string;
  kind: string;
  blurb: string;
};

export const EVENTS: EventItem[] = [
  {
    title: "Technical workshops & seminars",
    kind: "Workshops",
    blurb:
      "Hands-on sessions on emerging engineering topics, led by members and industry partners.",
  },
  {
    title: "Student hackathons & tech challenges",
    kind: "Hackathons",
    blurb:
      "Build-focused competitions where student branches turn ideas into working prototypes.",
  },
  {
    title: "Research showcases — incl. UMURIRO grid initiative",
    kind: "Research",
    blurb:
      "Presentations of member research, including CMU-Africa's cross-border power-grid work.",
  },
  {
    title: "Leadership & professional development forums",
    kind: "Forums",
    blurb:
      "Career, mentorship, and leadership programmes that grow Rwanda's engineering talent.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The community gave me the space to explore robotics and intelligent systems in ways I never imagined. Through it, I've collaborated with fellow innovators and gained a lot of hands-on experience.",
    name: "Eric",
    role: "Member",
  },
  {
    quote:
      "Being part of IEEE Rwanda has accelerated my growth. The workshops, mentorship sessions, and global resources keep me ahead in a fast-changing tech landscape.",
    name: "Alice Umutoni",
    role: "Member",
  },
];
