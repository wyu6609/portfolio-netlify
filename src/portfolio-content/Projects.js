import React from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
import { alpha, darken, styled } from "@mui/material/styles";

const cards = [
  {
    title: "Violet Pocket SP",
    description: "Play Game Boy Advance ROMs in an SP-style handheld and save your progress in the browser.",
    img: process.env.PUBLIC_URL + "/project-laptops.svg#violet-pocket-sp",
    link: "https://wyu6609.github.io/violet-pocket-sp/",
    git: "https://github.com/wyu6609/violet-pocket-sp",
  },
  {
    title: "Object Atlas",
    description: "Point your camera at everyday objects to see their names and a live count of what’s in frame.",
    img: process.env.PUBLIC_URL + "/project-laptops.svg#object-atlas",
    link: "https://wyu6609.github.io/object-atlas/",
    git: "https://github.com/wyu6609/object-atlas",
  },
  {
    title: "EmotionAI",
    description: "Explore seven facial expression scores from your webcam and track how they change over 60 seconds. Video stays on your device.",
    img: process.env.PUBLIC_URL + "/project-laptops.svg#emotion-ai",
    link: "https://wyu6609.github.io/emotion-ai/",
    git: "https://github.com/wyu6609/emotion-ai",
  },
  {
    title: "Pokedex 2.0",
    description: "Pokedex 2.0 enhanced",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/pokedexv2-screen.png?raw=true",
    link: "https://willpokedexv2.netlify.app/",
    git: "https://github.com/wyu6609/pokemonv2",
    disabled: false,
  },
  {
    title: "2048",
    description: "Classic 2048, built with REACT and MATERIAL UI",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/2048_app.png?raw=true",
    link: "https://wyu6609.github.io/2048/",
    git: "https://github.com/wyu6609/2048",
    disabled: false,
  },
  {
    title: "Todo",
    description: "Todo app, built with REACT and MATERIAL UI",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/todo_app.png?raw=true",
    link: "https://wyu6609.github.io/todo/",
    git: "https://github.com/wyu6609/todo",
    disabled: false,
  },
  {
    title: "Bot.io 2.0",
    description:
      "A NFT BOT market directory, built with RAILS, REACT and MATERIAL UI",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/bot_io.png?raw=true",
    link: "http://buy-ya-bots.herokuapp.com/",
    git: "https://github.com/wyu6609/bot_io_2.0",
    demo: "https://www.youtube.com/watch?v=IaJeeMGrXWA",
    disabled: true,
  },
  {
    title: "Dream.",
    description: "Log your dreams. See what others are dreaming",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/dream_mockup.png?raw=true",
    link: "https://journal-da-dreams.herokuapp.com/",
    git: "https://github.com/wyu6609/Dream.",
    demo: "https://youtu.be/bSJZU5kbhbM",
    disabled: true,
  },
  {
    title: "The Sneaker Vault",
    description:
      "A simple shoe directory for some of the rarest sneaker collections in hype beast fashion!",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/sneakervault_mockup.png?raw=true",
    link: "https://the-sneaker-vault.herokuapp.com/",
    git: "https://github.com/wyu6609/fire_kicks",
    disabled: true,
  },
  {
    title: "My Pokedex",
    description:
      "A simple and fun Pokedex. Built with React, React-Bootstrap and Axios",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/pokedex_mockup.png?raw=true",
    link: "https://wills-pokedex.netlify.app/",
    git: "https://github.com/wyu6609/my_pokedex",
    demo: "https://www.youtube.com/watch?v=uKP_ogX1fjE",
    disabled: false,
  },
  {
    title: "Adopet",
    description: "Find a pet companion in need around you!",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/adopet_mockup.png?raw=true",
    link: "https://adopet-adopt.netlify.app/adopt",
    git: "https://github.com/wyu6609/Adopet",
    disabled: false,
  },
  {
    title: "Cat Startup",
    description:
      "A startup web site for cat stuff. Meow. Built with React and BootStrap.",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/catstartup_mockup.png?raw=true",
    link: "https://cat-stuff.netlify.app/",
    git: "https://github.com/wyu6609/cat_startup",
    disabled: false,
  },
  {
    title: "WhatsUpp",
    description:
      "Chat app inspired by WhatsApp. Utilizes action cable and web sockets!",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/whatsupp.png?raw=true",
    link: "https://illustrious-longma-22a381.netlify.app/",
    git: "https://github.com/wyu6609/whats-app-clone-frontend",
    demo: "https://www.youtube.com/watch?v=mZKe-pdVhlc",
    disabled: true,
  },
  {
    title: "NYC HEALTH",
    description:
      "Search a NYC restaurant. Visualize the health stats on Google Maps",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/nyc_heath_mockup.png?raw=true",
    link: "https://nyc-health-inspection.netlify.app/",
    git: "https://github.com/wyu6609/NYC-health-inspection",
    demo: "https://www.youtube.com/watch?v=cagxhY3IvwE",
    disabled: false,
  },

  {
    title: "UHungry?",
    description:
      "Hungry? Search an ingredient and see a bunch of random recipes!",
    img: "https://github.com/wyu6609/portfolio-netlify/blob/main/src/images/uhungry_mockup.png?raw=true",
    link: "https://u-hungry.netlify.app/#",
    git: "https://github.com/wyu6609/Phase-2-project-Uhungry",
    demo: "https://www.youtube.com/watch?v=e5IwFGlZJQc&t=1s",
    disabled: false,
  },

  {
    title: "Minimalist Weather",
    description: "Simple and clean weather app. Built with Vanilla JavaScript",
    img: "https://github.com/wyu6609/wyu6609.github.io/blob/main/assets/img/portfolio/project6.png?raw=true",
    link: "https://minimalists-weather.netlify.app/",
    git: "https://github.com/wyu6609/Weather-app",
  },
];

const Gallery = styled('section')(({ theme }) => ({
  maxWidth: 1360, margin: '0 auto', padding: 'clamp(16px, 3vw, 48px) clamp(4px, 2vw, 32px) 88px', color: '#182028',
  background: 'radial-gradient(ellipse at 85% 0%, '+alpha(theme.palette.primary.main,.13)+' 0%, transparent 52rem)',
  '& h1, & h2, & h3, & p': { margin: 0 },
  '& .gallery-head': { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 28 },
  '& h1': { fontSize: 'clamp(2.25rem,5vw,4rem)', letterSpacing: '-.055em', lineHeight: 1.05, fontWeight: 550 },
  '& h2': { fontSize: '1.5rem', letterSpacing: '-.035em', margin: '48px 0 18px' },
  '& .project-grid': { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 245px),1fr))', gap: 'clamp(14px, 1.6vw, 24px)' },
  '& article': { minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: 'rgba(255,255,255,.76)', backgroundImage: 'linear-gradient(145deg,'+alpha(theme.palette.primary.light,.14)+','+alpha(theme.palette.primary.main,.24)+')', backdropFilter: 'blur(14px)', border: '1px solid '+alpha(theme.palette.primary.main,.34), borderRadius: 18, boxShadow: '0 8px 24px rgba(28,40,52,.055)' },
  '& .project-art': { display: 'grid', placeItems: 'center', aspectRatio: '16 / 9', padding: '5% 7%', background: 'linear-gradient(150deg,#fff,'+alpha(theme.palette.primary.light,.12)+')' },
  '& img': { width: '100%', height: '100%', minHeight: 0, objectFit: 'contain', borderRadius: 4 },
  '& .project-copy': { padding: '20px clamp(16px,2vw,24px)', display: 'flex', flexDirection:'column', flexGrow: 1 },
  '& h3': { fontSize: '1.3rem', letterSpacing: '-.035em', lineHeight: 1.2 },
  '& p': { marginTop: 8, fontSize: '1rem', lineHeight: 1.5, color: '#45515c' },
  '& .project-actions': { display:'flex', alignItems:'center', flexWrap:'wrap', gap: 14, marginTop:'auto', paddingTop:18 },
  '& a': { color:'inherit', fontWeight:600, fontSize:'.875rem', textUnderlineOffset:4 },
  '& a:focus-visible': { outline:'3px solid '+theme.palette.primary.main, outlineOffset:3 },
  '& .launch': { background:darken(theme.palette.primary.main,.32), color:'#fff', padding:'9px 14px', borderRadius:8, textDecoration:'none' },
  '& .launch:hover': { background:darken(theme.palette.primary.main,.43), color:'#fff' },
  '@media (max-width: 600px)': {
    '& .project-grid': { gridTemplateColumns: 'minmax(0, 1fr)' },
    '& article': { scrollSnapAlign: 'start' },
  },
  '& .offline': { fontSize:'.875rem', color:'#545f68' },
}));

const external = { target: '_blank', rel: 'noopener noreferrer' };
function ProjectGrid({ projects, label }) {
  return <section aria-label={label}><div className="project-grid">{projects.map(card => {
    const image = <img src={card.img} alt="" loading="lazy" />;
    return <article key={card.title}>
      {card.disabled ? <div className="project-art">{image}</div> :
        <a className="project-art" href={card.link} aria-label={'Open '+card.title} {...external}>{image}</a>}
      <div className="project-copy">
        <h3>{card.title}</h3><p>{card.description}</p>
        <div className="project-actions">
          {card.disabled ? <span className="offline">Demo offline</span> :
            <a className="launch" href={card.link} {...external}>{card.title === 'Violet Pocket SP' ? 'Play emulator' : 'Try demo'}</a>}
          <a href={card.git} aria-label={card.title+' source code'} {...external}>Source</a>
          {card.demo && <a href={card.demo} {...external}>Watch demo</a>}
        </div>
      </div>
    </article>;
  })}</div>
  </section>;
}

export default function Projects() {
  return <Gallery aria-label="Projects">
    <GlobalStyles styles={{
      '@media (max-width: 600px) and (prefers-reduced-motion: no-preference)': {
        html: { scrollSnapType: 'y proximity', scrollPaddingTop: '68px' },
        '.gallery-head': { scrollSnapAlign: 'start' },
      },
    }} />
    <div className="gallery-head"><h1>Projects</h1><a href="https://github.com/wyu6609?tab=repositories" {...external}>All repositories</a></div>
    <ProjectGrid label="Featured projects" projects={cards.slice(0,3)} />
    <h2>More projects</h2><ProjectGrid label="More projects" projects={cards.slice(3).filter(card => !card.disabled)} />
    <h2>Archived projects</h2><ProjectGrid label="Archived projects" projects={cards.filter(card => card.disabled)} />
  </Gallery>;
}
