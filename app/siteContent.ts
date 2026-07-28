export const products = [
  {
    title: "QuickStud-E",
    tagline: "AI flashcards and studying",
    text: "Study workflows designed to help people retain material faster, practice more deliberately, and stay engaged.",
    href: "https://quickstud-e.com",
    accent: "amber",
    image: "/brands/quickstud-e.png",
  },
  {
    title: "Mate-E",
    tagline: "Personal AI workspace",
    text: "A companion workspace for planning, organizing, and reasoning across projects, notes, and decisions.",
    href: "https://mate-e.com",
    accent: "blue",
    image: "/brands/mate-e.png",
  },
  {
    title: "SingSong-E",
    tagline: "Music generation",
    text: "Creative tooling for generating original musical ideas, sketches, and compositions with AI in the loop.",
    href: "https://singsong-e.com",
    accent: "rose",
    image: "/brands/singsong-e.png",
  },
  {
    title: "SmartArts-E",
    tagline: "Creative image generation",
    text: "Visual creation tools built to turn prompts, concepts, and references into polished image outputs.",
    href: "https://smartarts-e.com",
    accent: "violet",
    image: "/brands/smartarts-e.png",
  },
  {
    title: "SmartMove-E",
    tagline: "Video generation",
    text: "Motion-first AI products aimed at turning ideas into short-form video and dynamic media.",
    href: "https://smartmove-e.com",
    accent: "teal",
    image: "/brands/smartmove-e.png",
  },
  {
    title: "Currents-E",
    tagline: "Personal finance assistant",
    text: "Finance interfaces that help people understand spending, track priorities, and make better day-to-day decisions.",
    href: "https://currents-e.com",
    accent: "gold",
    image: "/brands/currents-e.png",
  },
] as const;

export const platformProof = [
  "Authentication and subscription systems",
  "React frontends with Flask and Spring backends across projects",
  "PostgreSQL, AI integrations, and production deployments",
  "Google OAuth, GitHub OAuth, Stripe, and Vercel shipping workflows",
] as const;

export const ecosystemPillars = [
  {
    title: "Learn better",
    text: "Education products that turn AI into a disciplined study and tutoring companion.",
  },
  {
    title: "Think better",
    text: "Workspace tools that help people reason, organize, and act with more clarity.",
  },
  {
    title: "Create better",
    text: "Music, image, and video tools that expand creative range without removing the human author.",
  },
  {
    title: "Manage life better",
    text: "Consumer AI products that support better financial and everyday decision-making.",
  },
] as const;

export const researchAreas = [
  {
    title: "AI systems",
    text: "Product interfaces, agent workflows, and applied intelligence systems that can actually ship.",
  },
  {
    title: "Robotics",
    text: "Automation, embodied tooling, and physical systems research connected to long-term mechatronics interests.",
  },
  {
    title: "Education",
    text: "Tutoring workflows, adaptive learning experiments, and better ways to help people understand difficult material.",
  },
  {
    title: "Future interfaces",
    text: "Speculative physics, interface experiments, and other longer-horizon ideas worth exploring in public.",
  },
] as const;

export const updateItems = [
  {
    title: "Product ecosystem positioning",
    date: "Now",
    text: "Muon Mechatronics is being reframed around the family of shipped AI products rather than generic technology messaging.",
  },
  {
    title: "Platform capabilities",
    date: "Current",
    text: "Across the portfolio, the stack already includes auth, subscriptions, AI integrations, databases, and live deployments.",
  },
  {
    title: "Research pipeline",
    date: "Ongoing",
    text: "Research, experiments, and technical essays are being separated from product marketing so each can stand on its own.",
  },
] as const;

export const navigationLinks = [
  { label: "Products", href: "#products" },
  { label: "Research", href: "/research" },
  { label: "Vision", href: "#vision" },
  { label: "About", href: "#about" },
  { label: "Updates", href: "/updates" },
] as const;
