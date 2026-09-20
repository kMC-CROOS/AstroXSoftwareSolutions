/* ============================================================
   All hero copy lives here — edit text freely without touching
   animation logic (script.js) or presentation (styles.css).
   index.html carries the same strings as a no-JS fallback.
   ============================================================ */
const heroContent = {
  nav: [
    { label: "Work", href: "#work", active: true },
    { label: "About", href: "#section-03" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#method" },
    { label: "Contact", href: "#contact" },
  ],

  cta: { label: "Let’s Talk", href: "#contact" },

  headline: "AstroX",
  role: ["Software", "Solutions"],
  meta: ["Ideas", "Innovation", "Impact"],

  notification: {
    name: "AstroX Software Solutions",
    time: "now",
    lead: "Software",
    message: "for a better tomorrow — clean, reliable and scalable digital products.",
  },

  section2: {
    sideLeft: ["Clients", "Growth."],
    sideRight: ["Passion.", "Innovation."],
  },

  /* Our Works — add projects here (image + metadata per card); the Works
     carousel builds itself from this array. `teaser: true` cards are
     decorative edge slices and never become the active project. */
  works: {
    brand: "AstroX",
    projects: [
      { key: "ecommerce",  name: "E-Commerce",  img: "assets/e-commerce.jpg",  w: 498, h: 405,
        cat: "Python · E-Commerce", year: "2026", accent: "#4da3ff",
        title: "Shopping application with cart and checkout functionality" },
      { key: "employee-record-manager", name: "Employee Record manager", img: "assets/employee_record-manager.jpg", w: 383, h: 363,
        cat: "Python · Management", year: "2026", accent: "#a8e063",
        title: "Employee management system for adding, searching, updating and deleting records" },
      { key: "login-signup",   name: "Login & Signup System",   img: "assets/login-signup.jpg",   w: 186, h: 362,
        cat: "Python · Authentication", year: "2026", accent: "#f28b3c",
        title: "User authentication system with signup, login and account management" },
    ],
  },

  /* ---- BIG ROBOT section ----
     All copy is editable here; the 3D and the scroll journey never
     touch these strings. */
  bigRobot: {
    labels: { left: "AstroX Software Solutions", right: "Ideas · Innovation · Impact" },
    eyebrow: "( 05 · The Team )",
    titleLines: ["We build with purpose.", "We grow with you."],
    description: "We turn ideas into practical software by solving real problems with clean, reliable code.",
    hint: "Scroll to move through the ideas.",

    /* the panels that travel through the 3D space — add or edit freely */
    techIdeas: [
      {
        no: "01",
        title: "Python Development",
        description: "Building practical, reliable applications that solve real problems.",
        tags: ["Python", "Functions", "Dictionaries", "File Handling", "OOP"],
      },
      {
        no: "02",
        title: "Web Development",
        description: "Turning ideas into simple, useful and responsive web experiences.",
        tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Development"],
      },
    ],

  },

  /* ---- EDITORIAL / SERVICES section (scroll-choreographed) ----
     The statement enters from the left, the skills from the right,
     one item at a time. Copy only — the timeline lives in script.js. */
  editorial: {
    eyebrow: "( 06 · Our Services )",
    statement: ["Building through code.", "Growing through innovation."],
    note: "We build, test and improve every product to deliver real impact for our clients.",
    skills: {
      title: "We Work With",
      groups: [
        { name: "Programming", items: ["Python"] },
        { name: "Web", items: ["HTML", "CSS", "JavaScript"] },
        { name: "Tools", items: ["Git", "GitHub", "VS Code"] },
      ],
    },
    mindset: {
      title: "Plan → Build → Launch → Improve",
      lines: [
        "We plan with purpose.",
        "We build with clean code.",
        "We launch with confidence.",
        "And we keep improving with every project.",
      ],
    },
    exploring: {
      title: "Currently Exploring",
      items: [
        "Building better web experiences",
        "Strengthening Python solutions",
        "Advanced JavaScript development",
        "Smarter problem-solving",
        "Full stack development",
      ],
    },
    ending: { lines: ["Always building.", "Always improving.", "Always innovating."], note: "And we’re just getting started." },
  },

  /* ---- SMALL ROBOT section (its own minimal chapter) ---- */
  smallRobot: {
    eyebrow: "( 06 · Always Innovating )",
    titleLines: ["Always innovating", "what comes next."],
    description: "We keep exploring, building projects and improving our solutions.",
    note: "Move your cursor · it follows",
  },

  /* ---- FOOTER ----
     Edit freely. `social` is empty on purpose: add entries like
     { label: "GitHub", href: "https://github.com/..." } and they
     appear automatically. Remove `email` if you would rather not
     publish an address. */
  footer: {
    eyebrow: "( 07 · Contact )",
    headline: ["Let's build", "something great."],
    line: "Open to new projects and partnerships.",
    email: "astrox.solutions@gmail.com",
    emailLabel: "Say hello",
    columns: [
      {
        title: "Sections",
        items: [
          { label: "Hero", href: "#top" },
          { label: "Creative", href: "#work" },
          { label: "About", href: "#section-03" },
          { label: "Selected Works", href: "#projects" },
          { label: "The Mind", href: "#think" },
        ],
      },
      {
        title: "Method",
        items: [
          { label: "How we think", href: "#method" },
          { label: "What we work with", href: "#method" },
          { label: "Currently exploring", href: "#method" },
          { label: "Always innovating", href: "#curious" },
        ],
      },
    ],
    social: [],
    legal: "© 2026 AstroX Software Solutions",
    note: "Built with code and innovation.",
    backToTop: "Back to top",
  },

  /* About Us chapter */
  about: {
    boxes: {
      who:   { title: "Who We Are",   sub: "AstroX — software solutions company." },
      what:  { title: "What We Do",  sub: "Web · Apps · Software" },
      think: { title: "How We Think", sub: "Plan · Build · Launch · Improve" },
    },
    views: {
      who: {
        eyebrow: "01 — Who We Are",
        head: "AstroX Software Solutions",
        text: "We build practical, reliable and scalable software — turning ideas into products that make a real impact.",
      },
      what: {
        eyebrow: "02 — What We Do",
        head: "Code Into Solutions.",
        text: "We turn ideas into practical applications with Python, web technologies and clean code. Built with passion, driven by innovation.",
      },
      think: {
        eyebrow: "03 — How We Think",
        head: "Idea to Impact",
        text: "Plan · Build · Launch · Improve.",
      },
    },
  },
};