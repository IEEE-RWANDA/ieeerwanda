import Image from "next/image";
import Link from "next/link";
import { AFFINITY_GROUPS, CHAPTERS, COMMUNITIES, SECTION, SUBUNITS } from "@/lib/content";

export function LandingHero() {
  return (
    <section className="landing-hero" aria-labelledby="landing-title">
      <div className="landing-hero-image"><Image src="/img/landing/launch-group.jpg" alt="The IEEE Rwanda community together at the subsection launch" fill preload sizes="100vw" /></div>
      <div className="landing-hero-shade" />
      <div className="container-x landing-hero-content">
        <p className="label landing-eyebrow"><span /> IEEE Rwanda Subsection</p>
        <h1 id="landing-title">Together,<br />we engineer<br /><em>what’s next.</em></h1>
        <p className="landing-hero-intro">Rwandan ingenuity. Global possibility.<br />A community of people turning technical curiosity into a better tomorrow.</p>
        <div className="landing-hero-actions">
          <a href={SECTION.joinUrl} target="_blank" rel="noopener noreferrer" className="btn landing-join">Find your place <span aria-hidden>↗</span></a>
          <Link href="/events" className="landing-text-link">Explore our events <span aria-hidden>→</span></Link>
        </div>
      </div>
      <div className="container-x landing-hero-bottom">
        <p><span className="label">Local roots. Global reach.</span><br />Kigali, Rwanda · IEEE Region 8</p>
        <a href="#discover" className="landing-scroll">Discover the community <span aria-hidden>↓</span></a>
      </div>
    </section>
  );
}

export function LandingIntro() {
  const paths = [
    { title: "Find your people.", text: "Students, engineers, researchers. Different perspectives, shared ambition.", href: "/student-branches", label: "Our communities" },
    { title: "Grow your ideas.", text: "Get closer to the knowledge, mentors, and experiences that move you forward.", href: "/events", label: "Events & opportunities" },
    { title: "Make a difference.", text: "Bring your expertise to the challenges that matter here in Rwanda.", href: "/contact", label: "Get involved" },
  ];
  return (
    <section id="discover" className="landing-intro">
      <div className="container-x">
        <div className="landing-intro-heading">
          <p className="label text-blue">A place to begin. A network to go further.</p>
          <h2>Big things happen<br />when <span>we connect.</span></h2>
          <p>IEEE Rwanda connects the people behind technology. From your first campus workshop to your next research collaboration, this is where you can learn, contribute, and belong.</p>
        </div>
        <div className="landing-paths">
          {paths.map(path => (
            <Link key={path.title} href={path.href} className="landing-path">
              <h3>{path.title}<span aria-hidden>↗</span></h3>
              <p>{path.text}</p>
              <span className="label">{path.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LandingStory() {
  return (
    <section className="landing-story">
      <div className="container-x landing-story-grid">
        <figure className="landing-story-photo">
          <Image src="/img/landing/launch-conversation.jpg" alt="A speaker sharing ideas during the IEEE Rwanda launch" fill sizes="(max-width: 760px) 100vw, 45vw" />
          <figcaption>Ideas shared. Connections made.</figcaption>
        </figure>
        <div className="landing-story-copy">
          <p className="label">Our next chapter</p>
          <h2>One community.<br />A world of<br /><span>possibility.</span></h2>
          <p>On 17 July 2026, students, engineers, researchers, and partners came together to launch the IEEE Rwanda Subsection.</p>
          <p>That was a beginning. The work continues in our workshops, on university campuses, and in the connections we build with industry.</p>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7482450069162463233/" target="_blank" rel="noopener noreferrer" className="landing-text-link">Revisit the launch <span aria-hidden>↗</span></a>
        </div>
      </div>
    </section>
  );
}

export function LandingCommunities() {
  const groups = [...CHAPTERS, ...AFFINITY_GROUPS, ...COMMUNITIES];
  return (
    <section className="landing-communities">
      <div className="container-x">
        <div className="landing-community-heading">
          <div><p className="label text-blue">Many interests. One IEEE.</p><h2>There’s a place<br /><span>for you here.</span></h2></div>
          <p>Find the people who share your curiosity. Explore our student branches, technical chapters, and affinity groups.</p>
        </div>
        <div className="landing-branches">
          {SUBUNITS.map(branch => (
            <a key={branch.short} href={branch.url ?? "/student-branches"} className="landing-branch" {...(branch.url ? {target:"_blank",rel:"noopener noreferrer"} : {})}>
              <span className="label">Student branch</span><strong>{branch.short}</strong><span>{branch.name}</span><span className="landing-branch-arrow" aria-hidden>↗</span>
            </a>
          ))}
        </div>
        <div className="landing-group-links">
          {groups.map(group => <a key={group.name} href={group.url ?? "/student-branches"} {...(group.url ? {target:"_blank",rel:"noopener noreferrer"} : {})}>{group.name}<span aria-hidden>↗</span></a>)}
        </div>
      </div>
    </section>
  );
}
