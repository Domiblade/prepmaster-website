const app = document.getElementById('main-content');
const toastRegion = document.getElementById('toast-region');

const dashboardModels = {
  overview: {
    title: 'Dashboard',
    icon: 'grid',
    accent: 'Overview',
    stats: [
      { label: 'Study hours', value: '24.8h', note: '+12% this week', icon: 'clock' },
      { label: 'Avg. score', value: '86%', note: '+4 pts', icon: 'score' },
      { label: 'Quizzes done', value: '18', note: '7 this week', icon: 'check' },
      { label: 'Topics complete', value: '72%', note: '24/34', icon: 'book' }
    ],
    progress: [
      { name: 'Mathematics', pct: 87, mark: 'M' },
      { name: 'Physics', pct: 64, mark: 'P' },
      { name: 'Chemistry', pct: 92, mark: 'C' },
      { name: 'English', pct: 78, mark: 'E' }
    ],
    activity: [
      { title: 'Completed Algebra revision', time: '15 mins ago', icon: 'check' },
      { title: 'Attempted mock test - Physics', time: '1 hour ago', icon: 'paper' },
      { title: 'New flashcards unlocked', time: 'Today', icon: 'star' }
    ]
  },
  courses: {
    title: 'Courses',
    icon: 'book',
    accent: 'Subject Library',
    items: [
      { name: 'Advanced Mathematics', level: 'Foundation', type: 'Math', emoji: '📐', desc: 'Algebra, trigonometry, calculus, and problem-solving drills.', classes: 'math' },
      { name: 'Physics Essentials', level: 'Exam Prep', type: 'Science', emoji: '⚛️', desc: 'Mechanics, electricity, and concept-based practice questions.', classes: 'science' },
      { name: 'English Literature', level: 'Writing Lab', type: 'English', emoji: '📚', desc: 'Grammar, essay structure, comprehension, and vocabulary growth.', classes: 'english' },
      { name: 'World History', level: 'Revision', type: 'History', emoji: '🏺', desc: 'Timeline clarity with key events, causes, and analysis tips.', classes: 'history' },
      { name: 'Computer Science', level: 'Hands-on', type: 'Coding', emoji: '💻', desc: 'Programming logic, data structures, and problem-solving patterns.', classes: 'computer' },
      { name: 'Chemistry Core', level: 'Concept Lab', type: 'Science', emoji: '🧪', desc: 'Atomic structure, reactions, and formula-heavy practice modules.', classes: 'science' }
    ]
  },
  materials: {
    title: 'Study Materials',
    icon: 'folder',
    accent: 'Resources',
    categories: [
      { name: 'Class Notes', icon: 'doc', tone: 'blue', desc: 'Short summaries and exam-ready notes.', meta: '12 chapters' },
      { name: 'Formula Sheets', icon: 'spark', tone: 'green', desc: 'Fast reference cards for key formulas.', meta: '8 sheets' },
      { name: 'Video Lessons', icon: 'play', tone: 'orange', desc: 'High-impact tutorial videos and examples.', meta: '20 lessons' },
      { name: 'Revision Guides', icon: 'book', tone: 'pink', desc: 'Quick recaps before unit tests and finals.', meta: '6 guides' }
    ]
  },
  tests: {
    title: 'Practice Tests',
    icon: 'quiz',
    accent: 'Mock Exams',
    items: [
      { name: 'Algebra Mock Test', desc: '20 questions • timed 45 mins', level: 'Intermediate', icon: 'quiz', color: 'blue' },
      { name: 'Science Sprint', desc: '15 questions • revision mode', level: 'Moderate', icon: 'spark', color: 'green' },
      { name: 'Language Analysis', desc: '10 textual questions • 25 mins', level: 'Mixed', icon: 'book', color: 'orange' }
    ]
  },
  tracker: {
    title: 'Progress Tracker',
    icon: 'trend',
    accent: 'Performance',
    overview: [
      { label: 'Monthly growth', value: '18.2%', note: '+2.4%' },
      { label: 'Accuracy', value: '89%', note: '+5%' },
      { label: 'Completion rate', value: '74%', note: 'Top 12%' }
    ],
    scores: [
      { exam: 'Unit Test 1', mark: '91%', status: 'Excellent' },
      { exam: 'Unit Test 2', mark: '84%', status: 'Strong' },
      { exam: 'Physics Quiz', mark: '73%', status: 'Improving' },
      { exam: 'Essay Draft', mark: '88%', status: 'Strong' }
    ],
    columns: [30, 46, 68, 54, 71, 92, 78]
  },
  profile: {
    title: 'Profile & Settings',
    icon: 'user',
    accent: 'Account',
    labels: {
      personal: 'Personal info',
      reminders: 'Smart reminders',
      darkMode: 'Dark mode',
      studySync: 'Study sync'
    }
  },
  about: {
    title: 'About PrepMaster',
    icon: 'info',
    accent: 'Our mission',
    values: [
      { title: 'Focused learning', desc: 'Clear study paths and note-based checkpoints to reduce overwhelm.' },
      { title: 'Confidence building', desc: 'Frequent practice tests help students improve accuracy and timing.' },
      { title: 'Consistent progress', desc: 'Performance tracking turns effort into measurable academic growth.' }
    ]
  },
  contact: {
    title: 'Contact & Support',
    icon: 'mail',
    accent: 'Get help',
    support: [
      { label: 'Email support', value: 'support@prepmaster.io', icon: 'mail' },
      { label: 'Call center', value: '+1 (415) 555-0174', icon: 'call' },
      { label: 'Office hours', value: 'Mon–Sat · 9am–7pm', icon: 'time' }
    ]
  },
  dashboard: { title: 'Dashboard', icon: 'grid', accent: 'Exam Readiness' },
  roadmap: { title: '62-Chapter Roadmap', icon: 'roadmap', accent: 'Syllabus Tracker' },
  tools: { title: 'Tools & Regain', icon: 'spark', accent: 'Focused Study' },
  vault: { title: 'Study Vault', icon: 'book', accent: 'Flashcards & Notes' },
  mocks: { title: 'Mock Test Tracker', icon: 'quiz', accent: 'Performance Benchmarks' },
  revision: { title: 'Spaced Revision', icon: 'clock', accent: 'Due Reviews' }
};

const publicFeatures = [
  { icon: 'roadmap', title: '62-chapter study roadmap', text: 'Track theory, practice, previous-year questions, and revision for every chapter.' },
  { icon: 'trend', title: 'JEE Main, BITSAT & EAMCET', text: 'See exam-specific readiness and high-yield topics across three exam targets.' },
  { icon: 'book', title: 'Study Vault', text: 'Review curated flashcards, formula shortcuts, and chapter revision notes.' },
  { icon: 'quiz', title: 'Mock score tracking', text: 'Log mock results by subject and follow accuracy, total scores, and weak topics.' },
  { icon: 'clock', title: 'Spaced revision', text: 'Schedule focused reviews on day 1, 3, 7, 21, and 45 intervals.' },
  { icon: 'spark', title: 'Six focused study tools', text: 'Use focus sessions, formula decks, PYQ tracking, revision sheets, a mistake book, and exam strategy.' }
];

const sidebarLinks = [
  { key: 'dashboard', label: 'Overview', icon: 'grid' },
  { key: 'roadmap', label: 'Roadmap', icon: 'roadmap' },
  { key: 'tools', label: 'Tools & Regain', icon: 'spark' },
  { key: 'vault', label: 'Vault', icon: 'book' },
  { key: 'mocks', label: 'Mocks', icon: 'quiz' }
];

function readSavedObject(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || '{}');
  } catch (error) {
    console.error(`Could not read PrepMaster browser demo data (${key}):`, error);
    return {};
  }
}

const state = {
  mode: new URLSearchParams(window.location.search).get('mode') === 'app' ? 'app' : 'public',
  authMode: 'login',
  appView: 'dashboard',
  searchTerm: '',
  activeSubject: 'All Subjects',
  activeExam: 'JEE Main',
  activeClass: 'All Classes',
  activeCompletion: 'All',
  selectedChapter: null,
  selectedSheet: null,
  pyqChapter: getChapters()[0]?.id || '',
  vaultMode: 'flashcards',
  vaultExam: 'All Exams',
  selectedTool: 'focus',
  chapterProgress: readSavedObject('prepmaster-chapter-progress-v1'),
  masteredCards: readSavedObject('prepmaster-mastered-cards-v1'),
  mockResults: (() => {
    const saved = readSavedObject('prepmaster-mock-results-v1');
    return Array.isArray(saved) ? saved : [];
  })(),
  mockExam: 'JEE Main',
  pyqCounts: readSavedObject('prepmaster-pyq-counts-v1'),
  revisionSchedules: (() => {
    const saved = readSavedObject('prepmaster-revisions-v1');
    return Array.isArray(saved) ? saved : [];
  })(),
  mistakes: (() => {
    const saved = readSavedObject('prepmaster-mistakes-v1');
    return Array.isArray(saved) ? saved : [];
  })(),
  flashcardIndex: 0,
  flashcardRevealed: false,
  timerMinutes: 25,
  timerRunning: false,
  timerRemaining: 25 * 60
};
let timerInterval = null;

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toastRegion.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2400);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function SVG(name) {
  const icons = {
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="4" rx="2"/><rect x="14" y="11" width="7" height="10" rx="2"/><rect x="3" y="12" width="7" height="9" rx="2"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M4 18.5V5.5"/><path d="M8 7h7"/><path d="M8 11h7"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H9l1.5 2H18.5A2.5 2.5 0 0 1 21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-10Z"/></svg>',
    quiz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h9"/><path d="M9 12h9"/><path d="M9 18h9"/><path d="M4 6h.01"/><path d="M4 12h.01"/><path d="M4 18h.01"/></svg>',
    trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16l6-6 4 4 7-9"/><path d="M19 5h2v2"/><path d="M3 20h18"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c1.8-3.3 5-5 8-5s6.2 1.7 8 5"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 10v6"/><path d="M12 7h.01"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l4 2"/></svg>',
    score: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 14l2 2 6-6"/><rect x="3" y="4" width="18" height="16" rx="3"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 3"/><path d="M21 20H3"/></svg>',
    paper: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5"/><path d="M8 12h8"/><path d="M8 16h8"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2.8 2.5 5.3 5.9.8-4.2 4.1 1 5.8L12 0 6.8 18.8l1-5.8-4.2-4.1 5.9-.8L12 2.8Z"/></svg>',
    dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13h7V4H4v9Zm9 7h7v-9h-7v9ZM4 20h7v-5H4v5Zm9-9h7V4h-7v7Z"/></svg>',
    device: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18h2"/><path d="M10 6h4"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6"/><path d="m16 16 5 5"/></svg>',
    logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/><path d="M15 7l6 5-6 5"/><path d="M21 12H9"/></svg>',
    dcheck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.4 17 19 7.5"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Z"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3V9Z"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l5 5v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5"/><path d="M8 12h8"/><path d="M8 16h8"/></svg>',
    call: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A18 18 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8l-1.4 1.4a16 16 0 0 0 7.8 7.8l1.4-1.4a2 2 0 0 1 1.8-.6l3 .5A2 2 0 0 1 22 16.9Z"/></svg>',
    time: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',
    bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 20h14"/></svg>',
    roadmap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h12M8 12h12M8 18h12"/><path d="m3 6 1 1 2-2M3 12l1 1 2-2M3 18l1 1 2-2"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="m16 8 5-5"/></svg>',
    timer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6M12 2v3M18 6l1.5-1.5"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-6-4-6 4V4Z"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>'
  };
  return icons[name] || icons.grid;
}

function renderPublicHome() {
  return `
    <header class="public-header">
      <div class="public-nav">
        <div class="brand" aria-label="PrepMaster logo">
          <img class="brand-image" src="assets/prepmaster-logo.png" alt="" />
          <span>PrepMaster</span>
        </div>
        <nav class="public-links" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#subjects">Subjects</a>
          <a href="#tests">Practice</a>
          <a href="#about">About</a>
        </nav>
        <div class="public-actions">
          <button class="button button-outline" data-action="public-login">Log in</button>
          <a class="button button-primary" href="downloads/PrepMaster.apk" download="PrepMaster.apk">Download Android App</a>
        </div>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="hero-inner">
          <div class="hero-copy">
            <span class="eyebrow"><span class="eyebrow-dot"></span> Smart learning platform</span>
            <h1>Study <span>Smarter.</span> Prepare <span>Better.</span> Achieve More.</h1>
            <p>Everything you need to prepare for exams, practise important topics, track your progress, and reach your academic goals in one place.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="downloads/PrepMaster.apk" download="PrepMaster.apk">Download Android App</a>
              <button class="button button-outline" data-action="public-roadmap">Explore Roadmap</button>
              <button class="button button-quiet" data-action="public-mocks">View Mock Tracker</button>
            </div>
            <p class="apk-download-note">Android only · 24 MB APK. Android may ask you to allow installs from Chrome. Install only if you trust this app. Updates must be downloaded and installed manually.</p>
            <div class="hero-proof">
              <span class="proof-mark">${SVG('target')}</span>
              <span>Built for JEE Main · BITSAT · EAMCET</span>
            </div>
          </div>

          <div class="hero-visual" aria-label="PrepMaster dashboard preview">
            <div class="hero-orbit"></div>
            <div class="floating-note note-top">
              ${SVG('dcheck')}
              <div>
                <strong>62 syllabus chapters</strong>
                <small>Physics · Chemistry · Maths</small>
              </div>
            </div>
            <div class="floating-note note-bottom">
              ${SVG('clock')}
              <div>
                <strong>4 progress checkpoints</strong>
                <small>Per chapter, built for mastery</small>
              </div>
            </div>
            <div class="preview-card">
              <div class="preview-top">
                <strong>PrepMaster</strong>
                <small>Weekly overview</small>
              </div>
              <div class="preview-content">
                <div class="preview-greeting">Exam preparation overview</div>
                <h3>Track every chapter milestone</h3>
                <div class="preview-stats">
                  <div class="preview-stat">
                    <small>Chapter roadmap</small>
                    <strong>62 <em>3 subjects</em></strong>
                  </div>
                  <div class="preview-stat">
                    <small>Exam targets</small>
                    <strong>03</strong>
                  </div>
                </div>
                <div class="preview-chart">
                  <small>JEE Main · BITSAT · EAMCET readiness</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="trust-strip" aria-label="PrepMaster syllabus coverage">
        <div class="trust-inner">
          <span>Exam-focused preparation</span>
          <span>62 chapters</span>
          <span>Physics · Chemistry · Maths</span>
          <span>JEE Main · BITSAT · EAMCET</span>
        </div>
      </section>

      <section id="features" class="home-section white">
        <div class="section-inner">
          <div class="section-title">
            <span class="eyebrow"><span class="eyebrow-dot"></span> Why students choose us</span>
            <h2>The same focused tools as your PrepMaster app.</h2>
          </div>
          <div class="feature-grid">
            ${publicFeatures.map(f => `
              <article class="feature-card">
                <div class="feature-icon">${SVG(f.icon)}</div>
                <h3>${f.title}</h3>
                <p>${f.text}</p>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <section id="subjects" class="home-section">
        <div class="section-inner course-teaser">
          <div>
            <span class="eyebrow"><span class="eyebrow-dot"></span> Subject coverage</span>
            <h2>Three subjects. One clear study roadmap.</h2>
            <p>Organise 62 Physics, Chemistry, and Mathematics chapters by Class 11 or 12, then track theory, practice, PYQs, and revision for JEE Main, BITSAT, and EAMCET.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="downloads/PrepMaster.apk" download="PrepMaster.apk">Download Android App</a>
            </div>
          </div>
          <div class="teaser-list">
            <div class="teaser-course"><span>⚛️</span><div><strong>Physics</strong><small>25 chapters</small></div></div>
            <div class="teaser-course"><span>🧪</span><div><strong>Chemistry</strong><small>19 chapters</small></div></div>
            <div class="teaser-course"><span>📐</span><div><strong>Mathematics</strong><small>18 chapters</small></div></div>
            <div class="teaser-course"><span>🎯</span><div><strong>JEE Main</strong><small>Concept depth</small></div></div>
            <div class="teaser-course"><span>⚡</span><div><strong>BITSAT</strong><small>Speed & recall</small></div></div>
            <div class="teaser-course"><span>🚀</span><div><strong>EAMCET</strong><small>Target readiness</small></div></div>
          </div>
        </div>
      </section>

      <section id="tests" class="home-section white">
        <div class="section-inner">
          <div class="section-title">
            <span class="eyebrow"><span class="eyebrow-dot"></span> Practice smarter</span>
            <h2>Practice with the tools your exams actually need.</h2>
          </div>
          <div class="feature-grid">
            <article class="feature-card">
              <div class="feature-icon">${SVG('quiz')}</div>
              <h3>Log mock results</h3>
              <p>Track total marks, subject-wise scores, accuracy, and the weak topics you want to revisit.</p>
            </article>
            <article class="feature-card">
              <div class="feature-icon">${SVG('score')}</div>
              <h3>Study Vault</h3>
              <p>Review exam-specific flashcards, formula shortcuts, and chapter revision notes.</p>
            </article>
            <article class="feature-card">
              <div class="feature-icon">${SVG('trend')}</div>
              <h3>Focus & regain</h3>
              <p>Use Pomodoro, deep-practice, exam-simulation, and stopwatch study sessions.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="about" class="home-section">
        <div class="section-inner">
          <div class="section-title">
            <span class="eyebrow"><span class="eyebrow-dot"></span> Our mission</span>
            <h2>PrepMaster helps students learn better and perform better.</h2>
          </div>
          <div class="about-banner">
            <span class="eyebrow" style="color:#dfe8ff;">Smart study companion</span>
            <h2>Designed for students who want clarity, discipline, and measurable improvement.</h2>
            <p>The Android app combines local chapter progress, exam readiness, spaced revision, mock-test records, and focused study tools. This website preview mirrors those app sections; it does not yet sync with the Android app account.</p>
          </div>
        </div>
      </section>

      <section class="home-cta">
        <div class="home-cta-inner">
          <div>
            <h2>Start your smarter study routine today.</h2>
            <p>Join PrepMaster and build the habits that lead to stronger exam outcomes.</p>
          </div>
          <a class="button button-primary" href="downloads/PrepMaster.apk" download="PrepMaster.apk">Download Android App</a>
        </div>
      </section>
    </main>

    <footer class="public-footer">
      <div class="public-footer-inner">
        <div class="brand" aria-label="PrepMaster Footer logo">
          <img class="brand-image" src="assets/prepmaster-logo.png" alt="" />
          <span>PrepMaster</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#features">Features</a>
          <a href="#subjects">Subjects</a>
          <a href="#tests">Practice</a>
          <a href="#about">About</a>
        </nav>
        <span>© 2026 PrepMaster. Learn Better. Perform Better.</span>
      </div>
    </footer>
  `;
}

function renderAuthScreen() {
  return `
    <div class="auth-screen">
      <aside class="auth-art">
        <div class="brand" aria-label="PrepMaster logo">
          <img class="brand-image" src="assets/prepmaster-logo.png" alt="" />
          <span>PrepMaster</span>
        </div>
        <div class="auth-art-copy">
          <span class="eyebrow"><span class="eyebrow-dot"></span> Study smarter</span>
          <h1>Your study data stays with you.</h1>
          <p>The Android app stores chapter progress on your device and can sync with a Google account. Keep exploring the web preview in local demo mode.</p>
        </div>
        <div class="auth-art-foot">PrepMaster · JEE Main · BITSAT · EAMCET</div>
      </aside>

      <section class="auth-panel">
        <div class="auth-box">
          <button class="auth-back" data-action="auth-back">
            ${SVG('arrow')}
            Back to home
          </button>
          <h2>Sign in to sync</h2>
          <p>The Android app uses Google Sign-In for optional cloud sync.</p>
          <button class="button button-primary auth-submit" data-action="google-signin">
            ${SVG('user')} Continue with Google
          </button>
          <button class="button button-outline auth-submit" data-action="continue-demo">Continue in local demo</button>
          <div class="demo-notice">Google/Firebase sign-in is configured in the Android project only. This standalone website preview does not connect to that account or cloud database.</div>
        </div>
      </section>
    </div>
  `;
}

function renderAppShell() {
  const active = state.appView;
  const model = dashboardModels[active];
  const installedAsApp = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  return `
    <div class="app-layout">
      <aside class="sidebar">
        <div class="brand" aria-label="PrepMaster app logo">
          <img class="brand-image" src="assets/prepmaster-logo.png" alt="" />
          <span>PrepMaster</span>
        </div>

        <div class="nav-label">Navigation</div>
        <nav class="side-nav" aria-label="Sidebar navigation">
          ${sidebarLinks.map(link => `
            <button class="side-link ${link.key === active ? 'active' : ''}" data-action="set-view" data-view="${link.key}">
              ${SVG(link.icon)}
              <span>${link.label}</span>
            </button>
          `).join('')}
        </nav>

        <div class="sidebar-bottom">
            <div class="study-tip actual-study-tip">
              ${SVG('roadmap')}
              <strong>62 chapters</strong>
              <p>Track four checkpoints for each subject and exam target.</p>
          </div>

          <div class="sidebar-user">
            <div class="user-avatar">PM</div>
            <div>
              <strong>Local study mode</strong>
              <small>Progress saved on this device</small>
            </div>
            <button aria-label="Sign in to sync" data-action="open-auth">${SVG('user')}</button>
          </div>
        </div>
      </aside>

      <main class="app-main">
        <header class="app-topbar">
          <div class="breadcrumb">Dashboard <strong>› ${model.accent}</strong></div>
          <div class="topbar-actions">
            <label class="search-box" aria-label="Search">
              ${SVG('search')}
              <input type="search" value="${escapeHtml(state.searchTerm)}" placeholder="Search 62 chapters..." data-action="search-input" />
            </label>
            <button class="icon-button" aria-label="Open revision queue" data-action="set-view" data-view="revision">${SVG('bell')}</button>
            <button class="topbar-avatar" aria-label="Sign in to sync" data-action="open-auth">PM</button>
          </div>
        </header>

        <div class="view-content">
          <div class="page-heading">
            <div>
              <span class="eyebrow"><span class="eyebrow-dot"></span> ${model.accent}</span>
              <h1>${model.title}</h1>
            </div>
            <div class="heading-actions">
              <button class="button button-outline button-small" data-action="open-auth">Sign in to sync</button>
              ${installedAsApp ? '' : '<a class="button button-primary button-small" href="downloads/PrepMaster.apk" download="PrepMaster.apk">Download Android App</a>'}
            </div>
          </div>

          ${renderActiveView(model)}
        </div>
      </main>
    </div>
  `;
}

const chapterSteps = [
  { key: 'theory', label: 'Theory' },
  { key: 'practice', label: 'Practice' },
  { key: 'pyq', label: 'PYQ' },
  { key: 'revision', label: 'Revision' }
];
const examWeightKeys = { 'JEE Main': 'jee', BITSAT: 'bitsat', EAMCET: 'eamcet' };
const studyContent = window.PrepMasterStudyContent;
const flashcards = studyContent.flashcards;
const revisionSheets = studyContent.revisionSheets;

function saveDemoData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Could not save PrepMaster browser demo data (${key}):`, error);
    showToast('Your browser could not save this change.');
  }
}

function getChapters() {
  return Array.isArray(window.PrepMasterChapters) ? window.PrepMasterChapters : [];
}

function getChapterProgress(chapterId) {
  return state.chapterProgress[chapterId] || {};
}

function getChapterCompletion(chapterId) {
  const progress = getChapterProgress(chapterId);
  return chapterSteps.filter(step => progress[step.key]).length / chapterSteps.length;
}

function getProgressSummary() {
  const chapters = getChapters();
  const done = chapters.filter(chapter => getChapterCompletion(chapter.id) === 1).length;
  const started = chapters.filter(chapter => getChapterCompletion(chapter.id) > 0 && getChapterCompletion(chapter.id) < 1).length;
  const totalTasks = chapters.length * chapterSteps.length;
  const finishedTasks = chapters.reduce((total, chapter) => total + chapterSteps.filter(step => getChapterProgress(chapter.id)[step.key]).length, 0);
  const subjectPct = subject => {
    const matching = chapters.filter(chapter => chapter.subject === subject);
    return matching.length ? Math.round(matching.reduce((total, chapter) => total + getChapterCompletion(chapter.id), 0) * 100 / matching.length) : 0;
  };
  const examPct = exam => {
    const weightKey = examWeightKeys[exam];
    let weighted = 0;
    let maximum = 0;
    chapters.forEach(chapter => {
      const level = chapter[weightKey];
      const weight = level === 'HIGH' ? 3 : level === 'LOW' ? 1 : 2;
      weighted += getChapterCompletion(chapter.id) * weight;
      maximum += weight;
    });
    return maximum ? Math.round(weighted * 100 / maximum) : 0;
  };
  return {
    total: chapters.length,
    done,
    started,
    untouched: chapters.length - done - started,
    percent: totalTasks ? Math.round(finishedTasks * 100 / totalTasks) : 0,
    subjectPct,
    examPct
  };
}

function renderProgressBar(percent) {
  return `<div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div>`;
}

function renderChapterPicker(id, selectedId = '') {
  const chapters = getChapters();
  return `<select id="${id}" class="form-select">${chapters.map(chapter => `<option value="${escapeHtml(chapter.id)}" ${chapter.id === selectedId ? 'selected' : ''}>${escapeHtml(chapter.subject)} · ${escapeHtml(chapter.title)}</option>`).join('')}</select>`;
}

function getFilteredChapters() {
  const search = state.searchTerm.trim().toLowerCase();
  return getChapters().filter(chapter =>
    (state.activeSubject === 'All Subjects' || chapter.subject === state.activeSubject) &&
    (state.activeClass === 'All Classes' || chapter.classLevel === Number(state.activeClass)) &&
    (state.activeCompletion === 'All' ||
      (state.activeCompletion === 'Complete' && getChapterCompletion(chapter.id) === 1) ||
      (state.activeCompletion === 'In Progress' && getChapterCompletion(chapter.id) > 0 && getChapterCompletion(chapter.id) < 1) ||
      (state.activeCompletion === 'Not Started' && getChapterCompletion(chapter.id) === 0)) &&
    (!search || `${chapter.subject} ${chapter.title}`.toLowerCase().includes(search))
  );
}

function renderDashboardView() {
  const summary = getProgressSummary();
  const subjects = ['Physics', 'Chemistry', 'Mathematics'];
  const exams = ['JEE Main', 'BITSAT', 'EAMCET'];
  const nextChapter = getChapters().find(chapter => getChapterCompletion(chapter.id) < 1);
  const dueCount = state.revisionSchedules.filter(item => !item.completed && new Date(item.dueAt).getTime() <= Date.now()).length;
  const latestMock = [...state.mockResults].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  return `
    <section class="welcome-banner actual-welcome">
      <div class="welcome-text">
        <span class="eyebrow"><span class="eyebrow-dot"></span> ${summary.total}-chapter roadmap</span>
        <h2>Build exam readiness one chapter at a time.</h2>
        <p>Track theory, practice, previous-year questions, and revision for JEE Main, BITSAT, and EAMCET.</p>
      </div>
      <button class="button" data-action="set-view" data-view="roadmap">Open roadmap ${SVG('arrow')}</button>
    </section>
    <div class="stat-grid actual-stat-grid">
      <div class="stat-card"><div class="stat-card-top"><span>Roadmap progress</span><div class="stat-icon">${SVG('trend')}</div></div><strong>${summary.percent}%</strong><small>${summary.done} of ${summary.total} chapters complete</small></div>
      <div class="stat-card"><div class="stat-card-top"><span>In progress</span><div class="stat-icon">${SVG('clock')}</div></div><strong>${summary.started}</strong><small>Chapters with checkpoints started</small></div>
      <div class="stat-card"><div class="stat-card-top"><span>Due revisions</span><div class="stat-icon">${SVG('book')}</div></div><strong>${dueCount}</strong><small>Reviews scheduled for now</small></div>
      <div class="stat-card"><div class="stat-card-top"><span>Mock tests logged</span><div class="stat-icon">${SVG('quiz')}</div></div><strong>${state.mockResults.length}</strong><small>${latestMock ? `Latest: ${escapeHtml(latestMock.exam)}` : 'Add your first mock result'}</small></div>
    </div>
    <div class="dashboard-grid actual-dashboard-grid section-gap">
      <section class="panel">
        <div class="panel-header"><div><h2>Subject progress</h2><small>Based on four checkpoints per chapter</small></div><button class="text-button" data-action="set-view" data-view="roadmap">View roadmap ${SVG('arrow')}</button></div>
        <div class="progress-list">${subjects.map(subject => `<div class="subject-progress-item"><div class="progress-name"><span class="subject-mark">${subject === 'Mathematics' ? 'M' : subject[0]}</span>${subject}</div>${renderProgressBar(summary.subjectPct(subject))}<span class="progress-percent">${summary.subjectPct(subject)}%</span></div>`).join('')}</div>
      </section>
      <section class="panel">
        <div class="panel-header"><div><h2>Exam readiness</h2><small>Weighted by chapter importance</small></div></div>
        <div class="readiness-list">${exams.map(exam => `<div class="readiness-row"><div><strong>${exam}</strong><span>${summary.examPct(exam)}% ready</span></div>${renderProgressBar(summary.examPct(exam))}</div>`).join('')}</div>
      </section>
    </div>
    <div class="dashboard-grid actual-dashboard-grid section-gap">
      <section class="panel">
        <div class="panel-header"><div><h2>Pick up where you left off</h2><small>Your next chapter in syllabus order</small></div></div>
        ${nextChapter ? `<div class="next-chapter-card"><span class="tag">${escapeHtml(nextChapter.subject)} · Class ${nextChapter.classLevel}</span><h3>${escapeHtml(nextChapter.title)}</h3><p>${getChapterCompletion(nextChapter.id) ? 'Continue the remaining checkpoints for this chapter.' : 'Start with theory, then practice, PYQs, and revision.'}</p><button class="button button-primary button-small" data-action="open-chapter" data-chapter="${escapeHtml(nextChapter.id)}">Continue chapter ${SVG('arrow')}</button></div>` : '<p class="empty-state">All chapters are complete. Great work!</p>'}
      </section>
      <section class="panel">
        <div class="panel-header"><div><h2>Quick tools</h2><small>Study tools from the Android app</small></div></div>
        <div class="quick-tools">
          <button data-action="open-tool" data-tool="focus"><span>${SVG('clock')}</span>Focus timer</button>
          <button data-action="open-tool" data-tool="formula"><span>${SVG('spark')}</span>Formula deck</button>
          <button data-action="open-tool" data-tool="pyq"><span>${SVG('quiz')}</span>PYQ tracker</button>
          <button data-action="set-view" data-view="revision"><span>${SVG('book')}</span>Revision queue</button>
        </div>
      </section>
    </div>
    <p class="local-data-note">Web preview data is saved in this browser only. It does not sync with the Android app.</p>
  `;
}

function renderRoadmapView() {
  const chapters = getFilteredChapters();
  const subjects = ['All Subjects', 'Physics', 'Chemistry', 'Mathematics'];
  const classes = ['All Classes', '11', '12'];
  const summary = getProgressSummary();
  const activeChapter = state.selectedChapter ? getChapters().find(chapter => chapter.id === state.selectedChapter) : null;
  return `
    <div class="roadmap-summary panel">
      <div><span class="eyebrow">Syllabus progress</span><strong>${summary.done}<small>/${summary.total} complete</small></strong></div>
      <div>${renderProgressBar(summary.percent)}<small>${summary.percent}% of all chapter checkpoints</small></div>
    </div>
    <div class="roadmap-filters">
      <div class="filter-chips">${subjects.map(subject => `<button class="filter-chip ${state.activeSubject === subject ? 'active' : ''}" data-action="filter-subject" data-subject="${subject}">${subject}</button>`).join('')}</div>
      <div class="filter-chips">${classes.map(level => `<button class="filter-chip ${state.activeClass === level ? 'active' : ''}" data-action="filter-class" data-class="${level}">${level === 'All Classes' ? 'All classes' : `Class ${level}`}</button>`).join('')}</div>
      <div class="filter-chips">${['All', 'In Progress', 'Complete', 'Not Started'].map(status => `<button class="filter-chip ${state.activeCompletion === status ? 'active' : ''}" data-action="filter-completion" data-completion="${status}">${status}</button>`).join('')}</div>
      <div class="filter-chips">${['JEE Main', 'BITSAT', 'EAMCET'].map(exam => `<button class="filter-chip ${state.activeExam === exam ? 'active' : ''}" data-action="filter-exam" data-exam="${exam}">${exam}</button>`).join('')}</div>
    </div>
    ${activeChapter ? renderChapterDetail(activeChapter) : ''}
    <div class="chapter-list">${chapters.length ? chapters.map(chapter => {
      const progress = getChapterProgress(chapter.id);
      const count = chapterSteps.filter(step => progress[step.key]).length;
      const weight = chapter[examWeightKeys[state.activeExam]].replace('FOUNDATIONAL', 'BASE');
      return `<article class="chapter-row">
        <button class="chapter-open" data-action="open-chapter" data-chapter="${escapeHtml(chapter.id)}"><span class="chapter-order">${String(chapter.order).padStart(2, '0')}</span><span class="chapter-info"><strong>${escapeHtml(chapter.title)}</strong><small>${escapeHtml(chapter.subject)} · Class ${chapter.classLevel}</small></span><span class="chapter-weight ${weight.toLowerCase()}">${weight === 'HIGH' ? 'High yield' : weight === 'MEDIUM' ? 'Medium' : weight === 'LOW' ? 'Low' : 'Base'}</span><span class="chapter-progress-text">${count}/4</span>${SVG('chevron')}</button>
        <div class="chapter-inline-progress">${renderProgressBar(Math.round(getChapterCompletion(chapter.id) * 100))}</div>
      </article>`;
    }).join('') : '<p class="empty-state">No chapters match this search and filter.</p>'}</div>
    <p class="local-data-note">Roadmap changes are stored in this browser only and are not linked to your Android app account.</p>
  `;
}

function renderChapterDetail(chapter) {
  const progress = getChapterProgress(chapter.id);
  return `<section class="panel chapter-detail" id="chapter-detail">
    <div class="panel-header"><div><span class="tag">${escapeHtml(chapter.subject)} · Class ${chapter.classLevel}</span><h2>${escapeHtml(chapter.title)}</h2></div><button class="icon-button" aria-label="Close chapter details" data-action="close-chapter">×</button></div>
    <p class="chapter-detail-copy">Update the four checkpoints used by the PrepMaster chapter roadmap.</p>
    <div class="checkpoint-grid">${chapterSteps.map(step => `<label class="checkpoint ${progress[step.key] ? 'completed' : ''}"><input type="checkbox" data-action="toggle-checkpoint" data-chapter="${escapeHtml(chapter.id)}" data-checkpoint="${step.key}" ${progress[step.key] ? 'checked' : ''}><span class="checkpoint-mark">${progress[step.key] ? '✓' : ''}</span><span><strong>${step.label}</strong><small>${step.key === 'pyq' ? 'Previous-year questions' : step.key === 'theory' ? 'Concepts and notes' : step.key === 'practice' ? 'Practice problems' : 'Review the chapter'}</small></span></label>`).join('')}</div>
  </section>`;
}

function renderVaultView() {
  const currentMode = state.vaultMode;
  const subjectOptions = ['All Subjects', 'Physics', 'Chemistry', 'Mathematics'];
  const filteredCards = flashcards.filter(card =>
    (state.activeSubject === 'All Subjects' || card.subject === state.activeSubject) &&
    (state.vaultExam === 'All Exams' || card.exam === state.vaultExam)
  );
  const cardIndex = filteredCards.length ? Math.min(state.flashcardIndex, filteredCards.length - 1) : 0;
  const card = filteredCards[cardIndex];
  const sheets = revisionSheets.filter(sheet => state.activeSubject === 'All Subjects' || sheet.subject === state.activeSubject);
  const selectedSheet = sheets.find(sheet => sheet.id === state.selectedSheet) || sheets[0];
  return `
    <div class="vault-tabs">${[['flashcards', 'Formula & Cheatsheet'], ['sheets', 'Revision Sheets']].map(([key, label]) => `<button class="vault-tab ${currentMode === key ? 'active' : ''}" data-action="vault-mode" data-mode="${key}">${label}</button>`).join('')}</div>
    <div class="roadmap-filters"><div class="filter-chips">${subjectOptions.map(subject => `<button class="filter-chip ${state.activeSubject === subject ? 'active' : ''}" data-action="filter-subject" data-subject="${subject}">${subject}</button>`).join('')}</div></div>
    ${currentMode === 'flashcards' ? `<div class="filter-chips vault-exam-filter">${['All Exams', 'JEE Main', 'BITSAT', 'EAMCET'].map(exam => `<button class="filter-chip ${state.vaultExam === exam ? 'active' : ''}" data-action="filter-vault-exam" data-exam="${exam}">${exam}</button>`).join('')}</div>` : ''}
    ${currentMode === 'flashcards' ? `<div class="flashcard-layout">
      <section class="flashcard panel">
        ${card ? `<div class="flashcard-top"><span class="tag">${escapeHtml(card.subject)} · ${escapeHtml(card.exam)}</span><span>${cardIndex + 1} / ${filteredCards.length}</span></div><p class="flashcard-chapter">${escapeHtml(card.chapter)}</p><h2>${escapeHtml(state.flashcardRevealed ? card.back : card.front)}</h2>${state.flashcardRevealed ? `<span class="flashcard-answer-label">Exam note: ${escapeHtml(card.note)}</span>` : '<span class="flashcard-answer-label">Think it through, then reveal</span>'}<div class="flashcard-actions"><button class="button button-outline" data-action="flip-card">${state.flashcardRevealed ? 'Show question' : 'Reveal answer'}</button><button class="button button-primary" data-action="next-card">Next card ${SVG('arrow')}</button></div>` : '<p class="empty-state">No cards match this subject and exam filter.</p>'}
      </section>
      <aside class="panel vault-progress"><div class="panel-header"><div><h3>Deck progress</h3><small>Saved on this device</small></div></div><strong>${Object.keys(state.masteredCards).length}</strong><p>cards marked mastered</p>${card ? `<button class="button button-outline button-small" data-action="master-card" data-card="${escapeHtml(card.id)}">${state.masteredCards[card.id] ? 'Marked mastered ✓' : 'Mark mastered'}</button>` : ''}</aside>
    </div>` : `<div class="revision-material-layout">
      <div class="revision-sheet-list" aria-label="Revision sheets">
        ${sheets.map(sheet => `<button class="revision-sheet-row ${selectedSheet?.id === sheet.id ? 'selected' : ''}" data-action="select-sheet" data-sheet="${escapeHtml(sheet.id)}" aria-pressed="${selectedSheet?.id === sheet.id}">
          <span class="resource-icon">${SVG('doc')}</span>
          <span><strong>${escapeHtml(sheet.title)}</strong><small>${escapeHtml(sheet.subject)} · ${escapeHtml(sheet.exam)}</small></span>
          ${SVG('arrow')}
        </button>`).join('') || '<p class="empty-state">No revision sheets match this subject.</p>'}
      </div>
      ${selectedSheet ? `<article class="panel revision-sheet-detail">
        <div class="panel-header"><div><span class="tag">${escapeHtml(selectedSheet.subject)} · ${escapeHtml(selectedSheet.exam)}</span><h2>${escapeHtml(selectedSheet.title)}</h2></div></div>
        <section class="revision-note-section"><h3>Core concepts</h3><p>${escapeHtml(selectedSheet.concepts)}</p></section>
        <section class="revision-note-section"><h3>Key formulas</h3><p>${escapeHtml(selectedSheet.formulas)}</p></section>
        <section class="revision-note-section"><h3>Exam tips</h3><p>${escapeHtml(selectedSheet.tips)}</p></section>
      </article>` : ''}
    </div><p class="local-data-note">These revision sheets and flashcards are taken from the uploaded PrepMaster Android source. Web demo progress is saved only in this browser.</p>`}
  `;
}

function renderRevisionView() {
  const now = Date.now();
  const schedules = state.revisionSchedules.map((item, index) => ({ ...item, index }))
    .sort((a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime());
  const due = schedules.filter(item => !item.completed && new Date(item.dueAt).getTime() <= now);
  const upcoming = schedules.filter(item => !item.completed && new Date(item.dueAt).getTime() > now);
  const completed = schedules.filter(item => item.completed);
  const row = item => `<article class="revision-queue-row ${new Date(item.dueAt).getTime() <= now && !item.completed ? 'is-due' : ''}"><span class="revision-date">${item.completed ? 'Done' : new Date(item.dueAt).toLocaleDateString()}</span><span class="revision-row-info"><strong>${escapeHtml(item.chapterTitle)}</strong><small>${escapeHtml(item.subject)} · ${escapeHtml(item.intervalLabel || 'Scheduled review')}</small></span>${item.completed ? '<span class="tag">Completed</span>' : `<button class="button button-small ${new Date(item.dueAt).getTime() <= now ? 'button-primary' : 'button-outline'}" data-action="complete-revision" data-index="${item.index}">Complete</button>`}</article>`;
  return `
    <section class="panel revision-scheduler">
      <div class="panel-header"><div><h2>Schedule a chapter review</h2><small>Spaced intervals: day 1, 3, 7, 21, and 45</small></div></div>
      <div class="schedule-form"><label class="form-field"><span>Chapter</span>${renderChapterPicker('revision-chapter')}</label><label class="form-field"><span>Interval</span><select id="revision-interval" class="form-select"><option value="1">Day 1</option><option value="3">Day 3</option><option value="7">Day 7</option><option value="21">Day 21</option><option value="45">Day 45</option></select></label><button class="button button-primary" data-action="schedule-revision">Add review</button></div>
    </section>
    <div class="revision-columns section-gap">
      <section class="panel"><div class="panel-header"><div><h2>Due now</h2><small>${due.length} reviews</small></div></div>${due.length ? due.map(row).join('') : '<p class="empty-state">Nothing due right now. Schedule a review above.</p>'}</section>
      <section class="panel"><div class="panel-header"><div><h2>Coming up</h2><small>${upcoming.length} scheduled</small></div></div>${upcoming.length ? upcoming.map(row).join('') : '<p class="empty-state">No upcoming reviews scheduled.</p>'}</section>
    </div>
    ${completed.length ? `<section class="panel section-gap"><div class="panel-header"><div><h2>Completed reviews</h2><small>${completed.length} completed</small></div></div>${completed.map(row).join('')}</section>` : ''}
  `;
}

function renderMocksView() {
  const results = [...state.mockResults].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const average = results.length ? Math.round(results.reduce((total, result) => total + Number(result.accuracy || 0), 0) / results.length) : 0;
  const best = results.reduce((top, result) => !top || Number(result.accuracy) > Number(top.accuracy) ? result : top, null);
  return `
    <div class="stat-grid actual-stat-grid">
      <div class="stat-card"><div class="stat-card-top"><span>Total mocks</span><div class="stat-icon">${SVG('quiz')}</div></div><strong>${results.length}</strong><small>Score logs saved locally</small></div>
      <div class="stat-card"><div class="stat-card-top"><span>Average accuracy</span><div class="stat-icon">${SVG('trend')}</div></div><strong>${average}%</strong><small>Across saved results</small></div>
      <div class="stat-card"><div class="stat-card-top"><span>Best score</span><div class="stat-icon">${SVG('target')}</div></div><strong>${best ? `${best.score}/${best.maxScore}` : 'N/A'}</strong><small>${best ? escapeHtml(best.exam) : 'Log a mock to begin'}</small></div>
    </div>
    <section class="panel section-gap">
      <div class="panel-header"><div><h2>Log a mock result</h2><small>Keep your practice history in this browser</small></div></div>
      <div class="mock-form">
        <label class="form-field"><span>Exam</span><select id="mock-exam" class="form-select"><option ${state.mockExam === 'JEE Main' ? 'selected' : ''}>JEE Main</option><option ${state.mockExam === 'BITSAT' ? 'selected' : ''}>BITSAT</option><option ${state.mockExam === 'EAMCET' ? 'selected' : ''}>EAMCET</option></select></label>
        <label class="form-field"><span>Test name</span><input id="mock-name" type="text" maxlength="80" placeholder="e.g. Allen Mock 4"></label>
        <label class="form-field"><span>Physics score</span><input id="mock-physics" type="number" min="0" step="1" placeholder="0"></label>
        <label class="form-field"><span>Chemistry score</span><input id="mock-chemistry" type="number" min="0" step="1" placeholder="0"></label>
        <label class="form-field"><span>Mathematics score</span><input id="mock-mathematics" type="number" min="0" step="1" placeholder="0"></label>
        ${state.mockExam === 'BITSAT' ? '<label class="form-field"><span>English & logical reasoning</span><input id="mock-english-lr" type="number" min="0" step="1" placeholder="0"></label>' : ''}
        <label class="form-field mock-weak-topics"><span>Weak topics (optional)</span><input id="mock-weak-topics" type="text" maxlength="240" placeholder="e.g. Rotational motion, electrochemistry"></label>
        <button class="button button-primary" data-action="save-mock">Save result</button>
      </div>
    </section>
    <section class="panel section-gap"><div class="panel-header"><div><h2>Result history</h2><small>Newest first</small></div></div>
      ${results.length ? `<div class="table-wrap"><table class="data-table"><thead><tr><th>Test</th><th>Exam</th><th>Score</th><th>Subject breakdown</th><th>Accuracy</th><th>Date</th><th>Weak topics</th><th></th></tr></thead><tbody>${results.map(result => `<tr><td>${escapeHtml(result.name)}</td><td>${escapeHtml(result.exam)}</td><td>${result.score} / ${result.maxScore}</td><td>Phy ${result.physics} · Chem ${result.chemistry} · Math ${result.mathematics}${result.exam === 'BITSAT' ? ` · Eng/LR ${result.englishLr}` : ''}</td><td>${result.accuracy}%</td><td>${new Date(result.date).toLocaleDateString()}</td><td>${escapeHtml(result.weakTopics || '—')}</td><td><button class="text-button" data-action="delete-mock" data-index="${state.mockResults.indexOf(result)}" aria-label="Delete ${escapeHtml(result.name)}">Delete</button></td></tr>`).join('')}</tbody></table></div>` : '<p class="empty-state">No mock tests logged yet. Add a result above to start tracking performance.</p>'}
    </section>
  `;
}

function renderToolsView() {
  const tools = [
    ['focus', 'Regain & Time Studied', 'Focus timer and study sessions', 'clock'],
    ['formula', 'Formula & Cheatsheet', 'Rapid equations and flashcards', 'spark'],
    ['pyq', 'PYQ Tracker', 'Chapter-wise solved question goals', 'quiz'],
    ['sheets', 'Revision Sheets', 'High-yield review for all 62 chapters', 'doc'],
    ['mistakes', 'Mistake Book', 'Record errors and lessons learned', 'book'],
    ['strategy', 'Strategy Matrix', 'Exam speed and marks strategy', 'target']
  ];
  return `
    <div class="tool-tabs">${tools.map(([key, title, subtitle, icon]) => `<button class="tool-tab ${state.selectedTool === key ? 'active' : ''}" data-action="open-tool" data-tool="${key}"><span class="resource-icon">${SVG(icon)}</span><span><strong>${title}</strong><small>${subtitle}</small></span>${SVG('chevron')}</button>`).join('')}</div>
    <section class="panel tool-detail">${renderSelectedTool()}</section>
  `;
}

function renderSelectedTool() {
  if (state.selectedTool === 'focus') {
    const seconds = state.timerRemaining == null ? state.timerMinutes * 60 : state.timerRemaining;
    const time = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
    return `<div class="panel-header"><div><h2>Focus timer</h2><small>Set a focused study interval and log your session</small></div></div><div class="timer-picker">${[[25, 'Pomodoro'], [50, 'Deep practice'], [180, 'Exam simulation'], [0, 'Stopwatch']].map(([minutes, label]) => `<button class="filter-chip ${state.timerMinutes === minutes ? 'active' : ''}" data-action="choose-timer" data-minutes="${minutes}">${label}${minutes ? ` · ${minutes}m` : ''}</button>`).join('')}</div><div class="timer-display"><strong class="timer-countdown">${time}</strong><span>${state.timerRunning ? 'Focus session in progress' : 'Ready when you are'}</span></div><div class="timer-actions"><button class="button button-primary" data-action="toggle-timer">${state.timerRunning ? 'Pause session' : 'Start focus session'}</button><button class="button button-outline" data-action="reset-timer">Reset</button></div>`;
  }
  if (state.selectedTool === 'formula') return `<div class="panel-header"><div><h2>Formula & Cheatsheet</h2><small>Quick recall cards for core concepts</small></div><button class="text-button" data-action="set-view" data-view="vault">Open Study Vault ${SVG('arrow')}</button></div><p class="tool-description">Review a question, reveal its answer, and mark the cards you have mastered.</p><button class="button button-primary" data-action="set-view" data-view="vault">Study flashcards</button>`;
  if (state.selectedTool === 'pyq') {
    const chapter = getChapters().find(item => item.id === state.pyqChapter) || getChapters()[0];
    const count = chapter ? Number(state.pyqCounts[chapter.id] || 0) : 0;
    return `<div class="panel-header"><div><h2>Previous-year question tracker</h2><small>Keep a chapter-wise count of questions solved</small></div></div><div class="pyq-form"><label class="form-field"><span>Chapter</span><select id="pyq-chapter" class="form-select">${getChapters().map(item => `<option value="${escapeHtml(item.id)}" ${chapter && chapter.id === item.id ? 'selected' : ''}>${escapeHtml(item.subject)} · ${escapeHtml(item.title)}</option>`).join('')}</select></label><div class="pyq-count"><strong>${count}</strong><span>questions logged</span></div><button class="button button-primary" data-action="add-pyq">Add solved question</button></div>`;
  }
  if (state.selectedTool === 'sheets') return `<div class="panel-header"><div><h2>62-chapter revision sheets</h2><small>Find a topic in the PrepMaster syllabus</small></div></div><p class="tool-description">The Android project includes curated concepts, formula summaries, and exam tips. Open the Vault to browse its chapter index.</p><button class="button button-primary" data-action="set-view" data-view="vault" data-vault-mode="sheets">Browse revision sheets</button>`;
  if (state.selectedTool === 'mistakes') return `<div class="panel-header"><div><h2>Mistake Book</h2><small>Capture an error and what you learned from it</small></div></div><div class="mistake-form"><label class="form-field"><span>Chapter</span>${renderChapterPicker('mistake-chapter')}</label><label class="form-field"><span>Question or error</span><textarea id="mistake-summary" maxlength="300" placeholder="What went wrong?"></textarea></label><label class="form-field"><span>Lesson learned</span><textarea id="mistake-lesson" maxlength="300" placeholder="What will you remember next time?"></textarea></label><button class="button button-primary" data-action="save-mistake">Save mistake</button></div><div class="mistake-list">${state.mistakes.length ? state.mistakes.map((mistake, index) => `<article class="revision-queue-row"><span class="revision-row-info"><strong>${escapeHtml(mistake.chapterTitle)}</strong><small>${escapeHtml(mistake.summary)}</small><small>Lesson: ${escapeHtml(mistake.lesson)}</small></span><button class="button button-small button-outline" data-action="delete-mistake" data-index="${index}">Remove</button></article>`).join('') : '<p class="empty-state">Your mistake book is empty.</p>'}</div>`;
  return `<div class="panel-header"><div><h2>Exam strategy matrix</h2><small>Choose your target and plan focused practice</small></div></div><div class="strategy-grid">${[['JEE Main', 'Balance chapter mastery with timed mixed practice.', 'Prioritize high-yield concepts, then strengthen accuracy.'], ['BITSAT', 'Build speed across the full syllabus.', 'Use short timed sets and review errors quickly.'], ['EAMCET', 'Strengthen fundamentals and question fluency.', 'Revisit core concepts and maintain consistent practice.']].map(([exam, focus, tip]) => `<article class="strategy-card"><span class="tag">${exam}</span><h3>${focus}</h3><p>${tip}</p><strong>${getProgressSummary().examPct(exam)}% readiness</strong>${renderProgressBar(getProgressSummary().examPct(exam))}</article>`).join('')}</div>`;
}

function renderActiveView(model) {
  switch (state.appView) {
    case 'dashboard': return renderDashboardView();
    case 'roadmap': return renderRoadmapView();
    case 'vault': return renderVaultView();
    case 'revision': return renderRevisionView();
    case 'mocks': return renderMocksView();
    case 'tools': return renderToolsView();
    case 'courses':
      return `
        <div class="filter-row">
          <div class="filter-chips">
            <button class="filter-chip active">All</button>
            <button class="filter-chip">Science</button>
            <button class="filter-chip">Math</button>
            <button class="filter-chip">Writing</button>
          </div>
          <button class="button button-primary button-small" data-action="start-practice">Start practice</button>
        </div>
        <div class="course-grid">
          ${model.items.map(course => `
            <article class="course-card">
              <div class="course-cover ${course.classes}">
                <div class="course-emoji">${course.emoji}</div>
                <span class="course-level">${course.level}</span>
              </div>
              <div class="course-body">
                <h3>${course.name}</h3>
                <p>${course.desc}</p>
                <div class="tag">${course.type}</div>
                <div class="course-meta">
                  <span>8 modules</span>
                  <strong>Open</strong>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      `;
    case 'materials':
      return `
        <div class="material-grid">
          ${model.categories.map(item => `
            <article class="material-card">
              <div class="resource-icon ${item.tone === 'green' ? 'green' : item.tone === 'orange' ? 'orange' : item.tone === 'pink' ? 'pink' : ''}">
                ${SVG(item.icon)}
              </div>
              <h3>${item.name}</h3>
              <p>${item.desc}</p>
              <div class="resource-meta">
                <span>${item.meta}</span>
                <span class="tag">View</span>
              </div>
            </article>
          `).join('')}
        </div>
      `;
    case 'tests':
      return `
        <div class="test-grid">
          ${model.items.map(item => `
            <article class="test-card">
              <div class="test-card-top">
                <div class="resource-icon ${item.color === 'green' ? 'green' : item.color === 'orange' ? 'orange' : ''}">${SVG(item.icon)}</div>
                <span class="difficulty">${item.level}</span>
              </div>
              <h3>${item.name}</h3>
              <p>${item.desc}</p>
              <button class="button button-primary" data-action="start-test" data-test="${item.name}">Attempt test</button>
            </article>
          `).join('')}
        </div>
      `;
    case 'tracker':
      return `
        <div class="progress-overview">
          ${model.overview.map(item => `
            <div class="overview-card">
              <span>${item.label}</span>
              <strong>${item.value}</strong>
              <small>${item.note}</small>
            </div>
          `).join('')}
        </div>
        <div class="panel section-gap">
          <div class="panel-header">
            <h2>Performance chart</h2>
            <small>Last 7 assessments</small>
          </div>
          <div class="chart-area">
            <div class="chart-y"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div>
            <div class="chart-plot">
              ${model.columns.map((value, index) => `
                <div class="chart-column" style="height:100%">
                  <div class="chart-bar" style="height:${value}%"></div>
                  <span class="chart-label">${['M','T','W','T','F','S','S'][index]}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        <div class="panel section-gap">
          <div class="panel-header">
            <h3>Recent exam results</h3>
            <small>Updated today</small>
          </div>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr><th>Exam</th><th>Score</th><th>Status</th></tr>
              </thead>
              <tbody>
                ${model.scores.map(result => `
                  <tr>
                    <td>${result.exam}</td>
                    <td>${result.mark}</td>
                    <td><span class="score-pill ${result.status === 'Improving' ? 'needs-work' : ''}">${result.status}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    case 'profile':
      return `
        <div class="profile-layout">
          <div class="profile-card">
            <div class="profile-heading">
              <div class="profile-avatar">AR</div>
              <div>
                <h2>Aisha Rahman</h2>
                <p>Student • Grade 12</p>
              </div>
            </div>

            <div class="form-grid">
              <div class="form-field"><label>Full name</label><input value="Aisha Rahman" /></div>
              <div class="form-field"><label>Student ID</label><input value="PM-2048" /></div>
              <div class="form-field"><label>Email</label><input value="aisha@prepmaster.io" /></div>
              <div class="form-field"><label>Institution</label><input value="Lakeside Academy" /></div>
            </div>

            <div class="heading-actions" style="margin-top:20px; justify-content:flex-start;">
              <button class="button button-primary button-small" data-action="save-profile">Save changes</button>
            </div>
          </div>

          <div class="profile-card">
            <div class="panel-header" style="margin-bottom:10px;">
              <h3>Preferences</h3>
            </div>
            <div class="setting-list">
              <div class="setting-row"><div><strong>Smart reminders</strong><small>Daily revision nudges</small></div><button class="switch" aria-checked="true"></button></div>
              <div class="setting-row"><div><strong>Dark mode</strong><small>Low-light viewing</small></div><button class="switch" aria-checked="false"></button></div>
              <div class="setting-row"><div><strong>Study sync</strong><small>Sync with calendar</small></div><button class="switch" aria-checked="true"></button></div>
            </div>
          </div>
        </div>
      `;
    case 'about':
      return `
        <div class="about-banner">
          <span class="eyebrow" style="color:#dfe8ff;">Our mission</span>
          <h2>Support students with better structure, more clarity, and measurable growth.</h2>
          <p>PrepMaster was designed to simplify exam preparation. We combine focused academic planning, performance data, and self-paced resources so students can study confidently and consistently.</p>
        </div>
        <div class="about-values">
          ${model.values.map(value => `
            <div class="value-card">
              <div class="feature-icon">${SVG('spark')}</div>
              <strong>${value.title}</strong>
              <p>${value.desc}</p>
            </div>
          `).join('')}
        </div>
      `;
    case 'contact':
      return `
        <div class="support-grid">
          <div class="support-info">
            ${model.support.map(item => `
              <div class="support-item">
                <div class="feature-icon">${SVG(item.icon)}</div>
                <div>
                  <strong>${item.label}</strong>
                  <p>${item.value}</p>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="profile-card">
            <div class="panel-header">
              <h3>Send a message</h3>
            </div>
            <div class="form-field"><label>Name</label><input value="Aisha Rahman" /></div>
            <div class="form-field"><label>Email</label><input value="aisha@prepmaster.io" /></div>
            <div class="form-field"><label>How can we help?</label><textarea>I'm looking for help with my chemistry revision plan and mock-test strategy.</textarea></div>
            <button class="button button-primary" data-action="send-message">Send message</button>
          </div>
        </div>
      `;
    default:
      return `
        <div class="welcome-banner">
          <div class="welcome-text">
            <span class="eyebrow"><span class="eyebrow-dot"></span> Ready to learn</span>
            <h2>Welcome back, Aisha. Your revision plan is looking strong.</h2>
            <p>Keep your momentum going with your next set of targeted practice tasks and concept refreshers.</p>
          </div>
          <button class="button" data-action="start-practice">Continue study</button>
        </div>

        <div class="dashboard-grid">
          <div>
            <div class="stat-grid">
              ${model.stats.map(stat => `
                <div class="stat-card">
                  <div class="stat-card-top">
                    <span>${stat.label}</span>
                    <div class="stat-icon">${SVG(stat.icon)}</div>
                  </div>
                  <strong>${stat.value}</strong>
                  <small>${stat.note}</small>
                </div>
              `).join('')}
            </div>

            <div class="panel">
              <div class="panel-header">
                <h2>Subject progress</h2>
                <small>Updated recently</small>
              </div>

              <div class="progress-list">
                ${model.progress.map(item => `
                  <div class="progress-row">
                    <div class="progress-name"><span class="subject-mark">${item.mark}</span> ${item.name}</div>
                    <div class="progress-track"><div class="progress-fill" style="width:${item.pct}%"></div></div>
                    <div class="progress-percent">${item.pct}%</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <div>
            <div class="panel">
              <div class="panel-header">
                <h3>Recent activity</h3>
                <small>Today</small>
              </div>
              <div class="activity-list">
                ${model.activity.map(item => `
                  <div class="activity-item">
                    <div class="activity-icon">${SVG(item.icon)}</div>
                    <div>
                      <strong>${item.title}</strong>
                      <small>${item.time}</small>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="streak-card" style="margin-top:18px;">
              <div class="streak-top">
                <strong>Current streak</strong>
                <span class="tag">9 days</span>
              </div>
              <div class="streak-number">9</div>
              <p>Keep your daily study rhythm to stay ahead for your next exam cycle.</p>
              <div class="week-dots">
                ${['M','T','W','T','F','S','S'].map((day, index) => `
                  <div class="week-day ${index < 5 ? 'done' : ''}"><span>${index + 1}</span>${day}</div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
  }
}

function renderCurrentView() {
  if (state.mode === 'public') {
    app.innerHTML = renderPublicHome();
    return;
  }
  if (state.mode === 'auth') {
    app.innerHTML = renderAuthScreen();
    return;
  }
  if (state.mode === 'app') {
    app.innerHTML = renderAppShell();
    return;
  }
}

function handleAction(actionName, target) {
  if (actionName === 'public-login') {
    state.mode = 'auth';
    renderCurrentView();
    return;
  }
  if (actionName === 'public-signup') {
    state.mode = 'auth';
    renderCurrentView();
    return;
  }
  if (actionName === 'public-courses' || actionName === 'public-tests') {
    state.mode = 'public';
    const section = actionName === 'public-courses' ? 'subjects' : 'tests';
    setTimeout(() => {
      const anchor = document.getElementById(section);
      if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
    renderCurrentView();
    return;
  }
  if (actionName === 'auth-back') {
    state.mode = 'public';
    renderCurrentView();
    return;
  }
  if (actionName === 'google-signin') {
    showToast('Google sign-in is not configured on this website. Use the Android app to sync.');
    return;
  }
  if (actionName === 'continue-demo') {
    state.mode = 'app';
    state.appView = 'dashboard';
    renderCurrentView();
    showToast('Local demo opened. Progress stays in this browser.');
    return;
  }
  if (actionName === 'set-view') {
    state.appView = target.dataset.view;
    state.selectedChapter = null;
    if (target.dataset.vaultMode) state.vaultMode = target.dataset.vaultMode;
    renderCurrentView();
    return;
  }
  if (actionName === 'logout') {
    state.mode = 'public';
    renderCurrentView();
    showToast('Logged out');
    return;
  }
  if (actionName === 'open-home') {
    state.mode = 'public';
    renderCurrentView();
    return;
  }
  if (actionName === 'open-auth') {
    state.mode = 'auth';
    renderCurrentView();
    return;
  }
  if (actionName === 'start-practice' || actionName === 'start-test') {
    state.appView = 'mocks';
    renderCurrentView();
    return;
  }
  if (actionName === 'open-chapter') {
    state.selectedChapter = target.dataset.chapter;
    state.appView = 'roadmap';
    renderCurrentView();
    document.getElementById('chapter-detail')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return;
  }
  if (actionName === 'close-chapter') {
    state.selectedChapter = null;
    renderCurrentView();
    return;
  }
  if (actionName === 'filter-subject') {
    state.activeSubject = target.dataset.subject;
    state.flashcardIndex = 0;
    state.flashcardRevealed = false;
    renderCurrentView();
    return;
  }
  if (actionName === 'filter-class') {
    state.activeClass = target.dataset.class;
    renderCurrentView();
    return;
  }
  if (actionName === 'filter-completion') {
    state.activeCompletion = target.dataset.completion;
    renderCurrentView();
    return;
  }
  if (actionName === 'filter-exam') {
    state.activeExam = target.dataset.exam;
    renderCurrentView();
    return;
  }
  if (actionName === 'filter-vault-exam') {
    state.vaultExam = target.dataset.exam;
    state.flashcardIndex = 0;
    state.flashcardRevealed = false;
    renderCurrentView();
    return;
  }
  if (actionName === 'vault-mode') {
    state.vaultMode = target.dataset.mode;
    renderCurrentView();
    return;
  }
  if (actionName === 'select-sheet') {
    state.selectedSheet = target.dataset.sheet;
    renderCurrentView();
    return;
  }
  if (actionName === 'flip-card') {
    state.flashcardRevealed = !state.flashcardRevealed;
    renderCurrentView();
    return;
  }
  if (actionName === 'next-card') {
    const filteredCards = flashcards.filter(card =>
      (state.activeSubject === 'All Subjects' || card.subject === state.activeSubject) &&
      (state.vaultExam === 'All Exams' || card.exam === state.vaultExam)
    );
    state.flashcardIndex = filteredCards.length ? (state.flashcardIndex + 1) % filteredCards.length : 0;
    state.flashcardRevealed = false;
    renderCurrentView();
    return;
  }
  if (actionName === 'master-card') {
    const cardId = target.dataset.card;
    if (state.masteredCards[cardId]) delete state.masteredCards[cardId];
    else state.masteredCards[cardId] = true;
    saveDemoData('prepmaster-mastered-cards-v1', state.masteredCards);
    renderCurrentView();
    return;
  }
  if (actionName === 'save-mock') {
    const exam = document.getElementById('mock-exam').value;
    const name = document.getElementById('mock-name').value.trim() || `${exam} Practice Test`;
    const scoreFrom = id => {
      const input = document.getElementById(id);
      return input ? (input.value.trim() ? Number(input.value) : 0) : 0;
    };
    const physics = scoreFrom('mock-physics');
    const chemistry = scoreFrom('mock-chemistry');
    const mathematics = scoreFrom('mock-mathematics');
    const englishLr = scoreFrom('mock-english-lr');
    const score = physics + chemistry + mathematics + englishLr;
    const maxScore = exam === 'BITSAT' ? 390 : exam === 'EAMCET' ? 160 : 300;
    if (![physics, chemistry, mathematics, englishLr].every(value => Number.isInteger(value) && value >= 0) || score > maxScore) {
      showToast(`Enter whole, non-negative section scores totaling no more than ${maxScore}.`);
      return;
    }
    state.mockResults.push({
      name,
      exam,
      physics,
      chemistry,
      mathematics,
      englishLr,
      score,
      maxScore,
      accuracy: Math.round(score * 100 / maxScore),
      weakTopics: document.getElementById('mock-weak-topics').value.trim(),
      date: new Date().toISOString()
    });
    saveDemoData('prepmaster-mock-results-v1', state.mockResults);
    renderCurrentView();
    showToast('Mock result saved in this browser.');
    return;
  }
  if (actionName === 'delete-mock') {
    state.mockResults.splice(Number(target.dataset.index), 1);
    saveDemoData('prepmaster-mock-results-v1', state.mockResults);
    renderCurrentView();
    showToast('Mock result deleted.');
    return;
  }
  if (actionName === 'schedule-revision') {
    const chapter = getChapters().find(item => item.id === document.getElementById('revision-chapter').value);
    if (!chapter) {
      showToast('Choose a chapter to schedule.');
      return;
    }
    const interval = Number(document.getElementById('revision-interval').value);
    const dueAt = new Date(Date.now() + interval * 24 * 60 * 60 * 1000).toISOString();
    state.revisionSchedules.push({
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      subject: chapter.subject,
      intervalLabel: `Day ${interval}`,
      dueAt,
      completed: false
    });
    saveDemoData('prepmaster-revisions-v1', state.revisionSchedules);
    renderCurrentView();
    showToast(`Review scheduled for ${new Date(dueAt).toLocaleDateString()}.`);
    return;
  }
  if (actionName === 'complete-revision') {
    const item = state.revisionSchedules[Number(target.dataset.index)];
    if (item) {
      item.completed = true;
      item.completedAt = new Date().toISOString();
      saveDemoData('prepmaster-revisions-v1', state.revisionSchedules);
      renderCurrentView();
      showToast('Revision marked complete.');
    }
    return;
  }
  if (actionName === 'open-tool') {
    state.selectedTool = target.dataset.tool;
    state.appView = 'tools';
    renderCurrentView();
    return;
  }
  if (actionName === 'add-pyq') {
    const chapterId = document.getElementById('pyq-chapter').value;
    state.pyqCounts[chapterId] = Number(state.pyqCounts[chapterId] || 0) + 1;
    saveDemoData('prepmaster-pyq-counts-v1', state.pyqCounts);
    renderCurrentView();
    showToast('PYQ count updated.');
    return;
  }
  if (actionName === 'choose-timer') {
    state.timerMinutes = Number(target.dataset.minutes);
    state.timerRemaining = state.timerMinutes * 60;
    state.timerRunning = false;
    window.clearInterval(timerInterval);
    timerInterval = null;
    renderCurrentView();
    return;
  }
  if (actionName === 'toggle-timer') {
    if (state.timerRunning) {
      state.timerRunning = false;
      window.clearInterval(timerInterval);
      timerInterval = null;
      renderCurrentView();
      return;
    }
    if (state.timerMinutes > 0 && state.timerRemaining <= 0) state.timerRemaining = state.timerMinutes * 60;
    state.timerRunning = true;
    window.clearInterval(timerInterval);
    timerInterval = window.setInterval(() => {
      state.timerRemaining += state.timerMinutes === 0 ? 1 : -1;
      const display = document.querySelector('.timer-countdown');
      if (display) display.textContent = `${String(Math.floor(state.timerRemaining / 60)).padStart(2, '0')}:${String(state.timerRemaining % 60).padStart(2, '0')}`;
      if (state.timerMinutes > 0 && state.timerRemaining <= 0) {
        state.timerRemaining = 0;
        state.timerRunning = false;
        window.clearInterval(timerInterval);
        timerInterval = null;
        renderCurrentView();
        showToast('Focus session complete.');
      }
    }, 1000);
    renderCurrentView();
    return;
  }
  if (actionName === 'reset-timer') {
    state.timerRunning = false;
    state.timerRemaining = state.timerMinutes * 60;
    window.clearInterval(timerInterval);
    timerInterval = null;
    renderCurrentView();
    return;
  }
  if (actionName === 'save-mistake') {
    const chapterId = document.getElementById('mistake-chapter').value;
    const chapter = getChapters().find(item => item.id === chapterId);
    const summary = document.getElementById('mistake-summary').value.trim();
    const lesson = document.getElementById('mistake-lesson').value.trim();
    if (!chapter || !summary || !lesson) {
      showToast('Add the chapter, error, and lesson learned.');
      return;
    }
    state.mistakes.unshift({ chapterTitle: chapter.title, summary, lesson, createdAt: new Date().toISOString() });
    saveDemoData('prepmaster-mistakes-v1', state.mistakes);
    renderCurrentView();
    showToast('Mistake saved in this browser.');
    return;
  }
  if (actionName === 'delete-mistake') {
    state.mistakes.splice(Number(target.dataset.index), 1);
    saveDemoData('prepmaster-mistakes-v1', state.mistakes);
    renderCurrentView();
    return;
  }
  if (actionName === 'save-profile' || actionName === 'send-message') {
    showToast('Saved successfully');
    return;
  }
}

document.addEventListener('click', (event) => {
  const actionTarget = event.target.closest('[data-action]');
  if (!actionTarget) return;
  handleAction(actionTarget.dataset.action, actionTarget);
});

document.addEventListener('input', (event) => {
  const input = event.target;
  if (input.matches('[data-action="search-input"]')) {
    state.searchTerm = input.value;
    if (state.mode === 'app' && state.appView !== 'roadmap' && input.value.trim()) {
      state.appView = 'roadmap';
      renderCurrentView();
      const replacement = document.querySelector('[data-action="search-input"]');
      replacement?.focus();
      replacement?.setSelectionRange(input.value.length, input.value.length);
      return;
    }
    if (state.mode === 'app' && state.appView === 'roadmap') {
      const cursor = input.selectionStart;
      renderCurrentView();
      const replacement = document.querySelector('[data-action="search-input"]');
      replacement?.focus();
      replacement?.setSelectionRange(cursor, cursor);
    }
  }
});

document.addEventListener('change', event => {
  const input = event.target;
  if (input.matches('[data-action="toggle-checkpoint"]')) {
    const chapterId = input.dataset.chapter;
    const checkpoint = input.dataset.checkpoint;
    state.chapterProgress[chapterId] = {
      ...getChapterProgress(chapterId),
      [checkpoint]: input.checked
    };
    saveDemoData('prepmaster-chapter-progress-v1', state.chapterProgress);
    renderCurrentView();
    return;
  }
  if (input.id === 'pyq-chapter') {
    state.pyqChapter = input.value;
    renderCurrentView();
    return;
  }
  if (input.id === 'mock-exam') {
    state.mockExam = input.value;
    renderCurrentView();
  }
});

if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  navigator.serviceWorker.register('./service-worker.js').catch(error => {
    console.error('PrepMaster offline support could not be enabled:', error);
  });
}

renderCurrentView();
