// Quiz Questions Data
const quizQuestions = [
  {
    id: 1,
    question: "According to Fitts's Law, what makes a UI target easier to acquire?",
    options: [
      "Smaller size and closer distance",
      "Larger size and closer distance",
      "Smaller size and farther distance",
      "Color and animation"
    ],
    correct: 1,
    explanation: "Fitts's Law states that the time to acquire a target is a function of distance and size. Larger targets that are closer are faster and easier to click."
  },
  {
    id: 2,
    question: "Hick's Law suggests that decision time increases with:",
    options: [
      "The number of choices available",
      "The size of buttons",
      "The color contrast",
      "The page load speed"
    ],
    correct: 0,
    explanation: "Hick's Law states that decision time logarithmically increases with the number of choices. Reducing options streamlines decision-making."
  },
  {
    id: 3,
    question: "Jakob's Law emphasizes that users:",
    options: [
      "Prefer innovative, unique interfaces",
      "Spend most of their time on other sites and prefer familiar patterns",
      "Learn new patterns quickly",
      "Don't care about consistency"
    ],
    correct: 1,
    explanation: "Jakob's Law states users prefer your site to work the same way as all the other sites they already know. Leverage familiar patterns for better UX."
  },
  {
    id: 4,
    question: "Which principle creates visual hierarchy most effectively?",
    options: [
      "Using the same font size for all text",
      "Varying size, weight, and color to guide attention",
      "Adding more borders",
      "Using only uppercase text"
    ],
    correct: 1,
    explanation: "Visual hierarchy is created through contrast in size, weight, color, and spacing. This guides users' attention to the most important elements first."
  },
  {
    id: 5,
    question: "WCAG 2.2 Level AA requires a minimum contrast ratio of:",
    options: [
      "2:1 for normal text",
      "3:1 for normal text",
      "4.5:1 for normal text",
      "7:1 for normal text"
    ],
    correct: 2,
    explanation: "WCAG 2.2 Level AA requires 4.5:1 for normal text and 3:1 for large text (18pt+ or 14pt+ bold) to ensure readability for users with visual impairments."
  },
  {
    id: 6,
    question: "Whitespace (negative space) in design primarily serves to:",
    options: [
      "Fill empty areas to avoid wasted space",
      "Improve readability, focus, and visual breathing room",
      "Make designs look incomplete",
      "Reduce development time"
    ],
    correct: 1,
    explanation: "Whitespace improves comprehension by up to 20%, reduces cognitive load, and creates visual hierarchy. It's not wasted space—it's strategic design."
  },
  {
    id: 7,
    question: "What's the primary difference between wireframes and high-fidelity prototypes?",
    options: [
      "Wireframes include final branding and visual design",
      "Wireframes focus on structure and layout; prototypes include visual design and interactions",
      "There is no difference",
      "Prototypes are always coded"
    ],
    correct: 1,
    explanation: "Wireframes are low-fidelity, focusing on layout and structure. High-fidelity prototypes include visual design, branding, and interactive elements."
  },
  {
    id: 8,
    question: "Which user research method provides quantitative behavioral data?",
    options: [
      "User interviews",
      "Focus groups",
      "A/B testing and analytics",
      "Design critiques"
    ],
    correct: 2,
    explanation: "A/B testing and analytics provide quantitative data on user behavior. Interviews and focus groups provide qualitative insights into motivations and attitudes."
  },
  {
    id: 9,
    question: "Micro-interactions should communicate:",
    options: [
      "System status and provide immediate feedback",
      "Marketing messages",
      "Legal disclaimers",
      "Random animations"
    ],
    correct: 0,
    explanation: "Micro-interactions provide feedback, communicate status, and enhance the sense of direct manipulation. They make interfaces feel responsive and alive."
  },
  {
    id: 10,
    question: "System status visibility means:",
    options: [
      "Hiding loading states to avoid user anxiety",
      "Always keeping users informed about what's happening",
      "Only showing errors when they occur",
      "Displaying technical system logs"
    ],
    correct: 1,
    explanation: "Nielsen's first usability heuristic: always keep users informed through appropriate feedback within reasonable time. This builds trust and reduces uncertainty."
  },
  {
    id: 11,
    question: "The 60-30-10 color rule in UI design suggests:",
    options: [
      "60% dominant color, 30% secondary, 10% accent",
      "Equal distribution of all colors",
      "60% accent, 30% dominant, 10% secondary",
      "Using only three total colors maximum"
    ],
    correct: 0,
    explanation: "The 60-30-10 rule creates balanced, professional interfaces: 60% dominant (usually neutral), 30% secondary, and 10% accent for calls-to-action."
  },
  {
    id: 12,
    question: "In mobile-first design, the recommended minimum touch target size is:",
    options: [
      "24x24 pixels",
      "32x32 pixels",
      "44x44 pixels",
      "64x64 pixels"
    ],
    correct: 2,
    explanation: "Apple's HIG and most modern guidelines recommend 44x44 pixels minimum for touch targets to accommodate the average finger pad size and prevent mis-taps."
  },
  {
    id: 13,
    question: "Which prototyping approach tests usability earliest in the design process?",
    options: [
      "Coded prototypes",
      "Paper prototypes and sketches",
      "High-fidelity mockups",
      "Design systems"
    ],
    correct: 1,
    explanation: "Paper prototypes allow rapid, low-cost usability testing before investing in high-fidelity designs. They help identify major usability issues early."
  },
  {
    id: 14,
    question: "The F-pattern in web reading behavior suggests users:",
    options: [
      "Read every word carefully",
      "Scan horizontally at the top, then vertically down the left side",
      "Start from the bottom",
      "Read in circular patterns"
    ],
    correct: 1,
    explanation: "Eye-tracking studies show users often scan in an F-shaped pattern: two horizontal stripes at the top, then vertically down the left. Place key content accordingly."
  },
  {
    id: 15,
    question: "Progressive disclosure in UX means:",
    options: [
      "Showing all features at once",
      "Revealing information gradually as needed to reduce cognitive load",
      "Hiding advanced features permanently",
      "Using progressive web apps"
    ],
    correct: 1,
    explanation: "Progressive disclosure reduces cognitive load by showing only essential information first, then revealing details as users need them. This keeps interfaces clean and approachable."
  },
  {
    id: 16,
    question: "The Law of Proximity states that:",
    options: [
      "Items close together are perceived as related",
      "Users prefer proximity sensors",
      "Buttons should be far apart",
      "All elements should be equally spaced"
    ],
    correct: 0,
    explanation: "Gestalt's Law of Proximity states that objects near each other appear grouped. Use spacing strategically to show relationships between UI elements."
  },
  {
    id: 17,
    question: "What is the primary purpose of a design system?",
    options: [
      "To limit creativity",
      "To ensure consistency and scalability across products",
      "To replace designers",
      "To reduce development costs only"
    ],
    correct: 1,
    explanation: "Design systems provide reusable components, patterns, and guidelines that ensure consistency, improve collaboration, and accelerate product development."
  },
  {
    id: 18,
    question: "The Miller's Law suggests users can hold how many items in working memory?",
    options: [
      "3 ± 1 items",
      "5 ± 2 items",
      "7 ± 2 items",
      "10 ± 2 items"
    ],
    correct: 2,
    explanation: "Miller's Law states that the average person can hold 7 ± 2 objects in working memory. Chunk information into groups of 5-9 items for better retention."
  },
  {
    id: 19,
    question: "What does the Von Restorff Effect predict?",
    options: [
      "Users remember similar items better",
      "Items that stand out are more memorable",
      "First items are always remembered",
      "Color doesn't affect memory"
    ],
    correct: 1,
    explanation: "The Von Restorff Effect (isolation effect) predicts that distinctive items are more likely to be remembered. Use this for CTAs and important information."
  },
  {
    id: 20,
    question: "In user testing, what is a 'think-aloud protocol'?",
    options: [
      "Testing with audio only",
      "Users verbalize their thoughts while completing tasks",
      "Designers explain the interface",
      "Testing in noisy environments"
    ],
    correct: 1,
    explanation: "Think-aloud protocol asks users to verbalize their thoughts during tasks, revealing mental models, confusion points, and decision-making processes."
  },
  {
    id: 21,
    question: "What is the Doherty Threshold?",
    options: [
      "Maximum file size for web pages",
      "System response time should be under 400ms for optimal productivity",
      "Minimum contrast ratio",
      "Maximum number of navigation items"
    ],
    correct: 1,
    explanation: "The Doherty Threshold states that productivity soars when computer response time is below 400ms, keeping users engaged in a flow state."
  },
  {
    id: 22,
    question: "Which Nielsen heuristic addresses error prevention?",
    options: [
      "Aesthetic and minimalist design",
      "Error prevention is better than good error messages",
      "Recognition rather than recall",
      "Consistency and standards"
    ],
    correct: 1,
    explanation: "Nielsen's heuristic emphasizes preventing errors through careful design—constraints, confirmations, and clear defaults—rather than just handling them well."
  },
  {
    id: 23,
    question: "The Z-pattern in layout design is best for:",
    options: [
      "Text-heavy content",
      "Simple pages with few elements and clear CTAs",
      "Mobile apps only",
      "Navigation menus"
    ],
    correct: 1,
    explanation: "The Z-pattern guides eye movement across sparse layouts—top left to top right, diagonal down, left to right again. Ideal for landing pages and simple interfaces."
  },
  {
    id: 24,
    question: "What is cognitive load in UX design?",
    options: [
      "The weight of content",
      "Mental effort required to use an interface",
      "Server processing power",
      "Number of pages in a site"
    ],
    correct: 1,
    explanation: "Cognitive load is the mental effort required to process information. Good UX minimizes unnecessary cognitive load through clarity, consistency, and simplicity."
  },
  {
    id: 25,
    question: "Card sorting is used to:",
    options: [
      "Organize physical materials",
      "Understand how users categorize and organize information",
      "Sort design assets",
      "Prioritize features"
    ],
    correct: 1,
    explanation: "Card sorting helps understand users' mental models by having them group and label information, informing information architecture and navigation design."
  },
  {
    id: 26,
    question: "What is a 'dark pattern' in UX?",
    options: [
      "Dark mode interfaces",
      "Deceptive design that tricks users into actions",
      "Black backgrounds",
      "Night-time usage patterns"
    ],
    correct: 1,
    explanation: "Dark patterns are deliberately deceptive UI designs that trick users into unwanted actions—hidden costs, forced continuity, difficult unsubscribe flows, etc."
  },
  {
    id: 27,
    question: "The Aesthetic-Usability Effect suggests that:",
    options: [
      "Usability doesn't matter if design is beautiful",
      "Users perceive attractive designs as more usable",
      "Aesthetics and usability are unrelated",
      "Ugly designs work better"
    ],
    correct: 1,
    explanation: "Users often perceive aesthetically pleasing designs as more usable, even if they're objectively not. Good aesthetics create positive emotional responses and tolerance."
  },
  {
    id: 28,
    question: "What is the purpose of a persona in UX design?",
    options: [
      "To represent the design team",
      "To create fictional target user archetypes based on research",
      "To name project files",
      "To replace user testing"
    ],
    correct: 1,
    explanation: "Personas are research-based archetypes representing user segments. They help teams maintain user focus and make design decisions aligned with real user needs."
  },
  {
    id: 29,
    question: "The Serial Position Effect indicates users best remember:",
    options: [
      "Middle items in a list",
      "First and last items in a sequence",
      "Random items",
      "Only the first item"
    ],
    correct: 1,
    explanation: "Users remember the first items (primacy effect) and last items (recency effect) better than middle ones. Place key info at the beginning or end of lists."
  },
  {
    id: 30,
    question: "What does 'above the fold' mean in web design?",
    options: [
      "Content in the header",
      "Content visible without scrolling",
      "Content at the top navigation",
      "Mobile-only content"
    ],
    correct: 1,
    explanation: "Above the fold refers to content visible without scrolling, borrowed from newspaper terminology. Critical content and CTAs should be immediately visible."
  },
  {
    id: 31,
    question: "A/B testing is most effective for:",
    options: [
      "Testing radical redesigns",
      "Comparing two versions to measure performance differences",
      "Replacing user research",
      "Testing with one user"
    ],
    correct: 1,
    explanation: "A/B testing compares two versions by showing them to different user segments simultaneously, measuring which performs better on specific metrics."
  },
  {
    id: 32,
    question: "What is the Pareto Principle (80/20 rule) in design?",
    options: [
      "80% of effects come from 20% of causes",
      "Use 80% white and 20% color",
      "80% of users leave after 20 seconds",
      "Design should be 80% complete before testing"
    ],
    correct: 0,
    explanation: "The Pareto Principle suggests 80% of effects come from 20% of causes. In UX, focusing on the 20% of features that provide 80% of value maximizes impact."
  },
  {
    id: 33,
    question: "Affordances in design refer to:",
    options: [
      "Pricing of products",
      "Properties that suggest how an object should be used",
      "Color schemes",
      "Animation speeds"
    ],
    correct: 1,
    explanation: "Affordances are properties that indicate how something can be used. A button's 3D appearance affords clicking; a flat field affords typing."
  },
  {
    id: 34,
    question: "The Zeigarnik Effect suggests that:",
    options: [
      "Completed tasks are better remembered",
      "Incomplete tasks are better remembered than completed ones",
      "Users forget all tasks equally",
      "Memory isn't affected by task completion"
    ],
    correct: 1,
    explanation: "The Zeigarnik Effect shows people remember uncompleted tasks better. Use progress indicators and completion states to leverage this psychological phenomenon."
  },
  {
    id: 35,
    question: "What is 'information scent' in UX?",
    options: [
      "The smell of old documentation",
      "Cues that indicate whether users are on the right path",
      "Metadata in files",
      "Search engine optimization"
    ],
    correct: 1,
    explanation: "Information scent refers to cues (text, visuals, structure) that help users determine if they're moving toward their goal. Strong scent keeps users engaged."
  },
  {
    id: 36,
    question: "Tesler's Law (Law of Conservation of Complexity) states:",
    options: [
      "Every system has irreducible complexity that cannot be eliminated",
      "More features equal better design",
      "Complexity should always be removed",
      "Users prefer complex interfaces"
    ],
    correct: 0,
    explanation: "Tesler's Law states every system has inherent complexity that can't be removed—only moved. Designers must decide whether complexity lives in the system or with users."
  },
  {
    id: 37,
    question: "What is the peak-end rule in UX?",
    options: [
      "Users only remember the beginning",
      "Users judge experiences by their peak and end moments",
      "Traffic peaks matter most",
      "End users are most important"
    ],
    correct: 1,
    explanation: "The peak-end rule shows people judge experiences largely by their most intense moment and the ending. Design memorable peaks and smooth, positive endings."
  },
  {
    id: 38,
    question: "Responsive design primarily addresses:",
    options: [
      "Fast loading times",
      "Adapting layouts to different screen sizes and devices",
      "User feedback speed",
      "Database responses"
    ],
    correct: 1,
    explanation: "Responsive design ensures layouts adapt fluidly to different screen sizes using flexible grids, images, and media queries for optimal viewing across devices."
  },
  {
    id: 39,
    question: "The principle of least astonishment means:",
    options: [
      "Avoid surprises; interfaces should behave as users expect",
      "Add unexpected animations",
      "Hide advanced features",
      "Never use new patterns"
    ],
    correct: 0,
    explanation: "Interfaces should behave as users expect based on their prior experiences. Unexpected behavior creates confusion and breaks user trust."
  },
  {
    id: 40,
    question: "What is a heatmap in UX analytics?",
    options: [
      "Temperature-sensitive displays",
      "Visual representation of where users click, scroll, or look",
      "Server load visualization",
      "Color palette testing"
    ],
    correct: 1,
    explanation: "Heatmaps visualize user interaction data—clicks, scrolls, eye-tracking—using color gradients. They reveal what users focus on and ignore."
  },
  {
    id: 41,
    question: "The reciprocity principle in UX suggests:",
    options: [
      "Users expect something in return for their actions",
      "Two-way data sync",
      "Mirror layouts",
      "Symmetric designs"
    ],
    correct: 0,
    explanation: "Reciprocity means users feel obligated to give back when they receive something. Offering value first (free trials, content) encourages user commitment."
  },
  {
    id: 42,
    question: "Skeuomorphic design refers to:",
    options: [
      "Minimalist flat design",
      "Digital interfaces that mimic physical objects",
      "Animated interfaces",
      "Text-only interfaces"
    ],
    correct: 1,
    explanation: "Skeuomorphic design uses visual metaphors from physical objects (leather textures, realistic buttons). It helps users understand new digital interfaces through familiarity."
  },
  {
    id: 43,
    question: "What is the job of a breadcrumb navigation?",
    options: [
      "Show page loading status",
      "Display user's location in site hierarchy",
      "List popular pages",
      "Show search history"
    ],
    correct: 1,
    explanation: "Breadcrumb navigation shows users their location within a site's hierarchy, allowing easy navigation back to parent pages. Essential for deep site structures."
  },
  {
    id: 44,
    question: "The Gutenberg Diagram describes:",
    options: [
      "Printing press layouts",
      "How users scan content in a Z-pattern with gravity toward bottom-right",
      "Font pairing rules",
      "Mobile-first design"
    ],
    correct: 1,
    explanation: "The Gutenberg Diagram shows how Western readers scan pages: starting top-left, moving to top-right, then bottom-left to bottom-right terminal area."
  },
  {
    id: 45,
    question: "What is the purpose of user journey mapping?",
    options: [
      "Map physical locations",
      "Visualize the complete user experience across touchpoints",
      "Plan development sprints",
      "Create sitemaps"
    ],
    correct: 1,
    explanation: "User journey maps visualize the entire user experience across all touchpoints, revealing pain points, emotions, and opportunities for improvement."
  },
  {
    id: 46,
    question: "The anchoring effect in UX influences:",
    options: [
      "Link placement",
      "Users' reliance on the first piece of information encountered",
      "Scroll depth",
      "Mobile responsiveness"
    ],
    correct: 1,
    explanation: "The anchoring effect shows the first information users encounter heavily influences subsequent decisions. Use this for pricing, feature comparisons, and defaults."
  },
  {
    id: 47,
    question: "What is a minimum viable product (MVP) in UX?",
    options: [
      "The cheapest version possible",
      "Product with just enough features to validate core assumptions",
      "The final product",
      "A prototype only"
    ],
    correct: 1,
    explanation: "An MVP has the minimum features needed to test core hypotheses with real users. It enables learning and iteration before investing in full development."
  },
  {
    id: 48,
    question: "Accessibility in design means ensuring:",
    options: [
      "Only fast loading times",
      "Products are usable by people with diverse abilities",
      "Mobile optimization only",
      "Simple language only"
    ],
    correct: 1,
    explanation: "Accessibility ensures everyone, including people with visual, auditory, motor, or cognitive disabilities, can perceive, operate, and understand your product."
  },
  {
    id: 49,
    question: "The paradox of choice suggests:",
    options: [
      "More options always improve satisfaction",
      "Too many options can lead to decision paralysis and dissatisfaction",
      "Users never have enough choices",
      "Choice doesn't affect UX"
    ],
    correct: 1,
    explanation: "Too many choices overwhelm users, leading to anxiety, decision paralysis, and dissatisfaction. Curate and limit options to improve decision-making and satisfaction."
  },
  {
    id: 50,
    question: "What does 'mobile-first' design mean?",
    options: [
      "Designing only for mobile devices",
      "Designing for mobile constraints first, then scaling up",
      "Mobile apps only",
      "Ignoring desktop users"
    ],
    correct: 1,
    explanation: "Mobile-first means designing for mobile constraints first (smaller screens, touch, bandwidth), then progressively enhancing for larger screens. This ensures core functionality works everywhere."
  }
];

// Quiz State
let state = {
    quizStarted: false,
    currentQuestion: 0,
    selectedAnswer: null,
    showExplanation: false,
    score: 0,
    quizComplete: false,
    answeredQuestions: [],
    timeLeft: 30,
    timerActive: false,
    timerInterval: null
};

// Initialize app
function init() {
    renderStartScreen();
}

// Start timer
function startTimer() {
    state.timerActive = true;
    state.timerInterval = setInterval(() => {
        if (state.timeLeft <= 1) {
            handleTimeout();
        } else {
            state.timeLeft--;
            updateTimer();
        }
    }, 1000);
}

// Stop timer
function stopTimer() {
    state.timerActive = false;
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

// Update timer display
function updateTimer() {
    const timerValue = document.querySelector('.timer-value');
    const timerBar = document.querySelector('.timer-bar');
    
    if (timerValue) {
        timerValue.textContent = state.timeLeft + 's';
        
        // Update color classes
        timerValue.className = 'timer-value';
        timerBar.className = 'timer-bar';
        
        if (state.timeLeft <= 10) {
            timerValue.classList.add('critical');
            timerBar.classList.add('critical');
        } else if (state.timeLeft <= 20) {
            timerValue.classList.add('warning');
            timerBar.classList.add('warning');
        } else {
            timerValue.classList.add('safe');
            timerBar.classList.add('safe');
        }
        
        timerBar.style.width = ((state.timeLeft / 30) * 100) + '%';
    }
}

// Handle timeout
function handleTimeout() {
    stopTimer();
    state.selectedAnswer = -1;
    state.showExplanation = true;
    state.answeredQuestions.push({
        question: state.currentQuestion,
        correct: false
    });
    renderQuizScreen();
}

// Handle answer selection
function handleAnswerSelect(index) {
    if (state.selectedAnswer !== null) return;
    
    stopTimer();
    state.selectedAnswer = index;
    state.showExplanation = true;
    
    const isCorrect = index === quizQuestions[state.currentQuestion].correct;
    if (isCorrect) {
        state.score++;
    }
    
    state.answeredQuestions.push({
        question: state.currentQuestion,
        correct: isCorrect
    });
    
    renderQuizScreen();
}

// Handle next question
function handleNext() {
    if (state.currentQuestion < quizQuestions.length - 1) {
        state.currentQuestion++;
        state.selectedAnswer = null;
        state.showExplanation = false;
        state.timeLeft = 30;
        renderQuizScreen();
        startTimer();
    } else {
        state.quizComplete = true;
        stopTimer();
        renderResultsScreen();
    }
}

// Handle quiz start
function handleStart() {
    state.quizStarted = true;
    renderQuizScreen();
    startTimer();
}

// Handle restart
function handleRestart() {
    state = {
        quizStarted: false,
        currentQuestion: 0,
        selectedAnswer: null,
        showExplanation: false,
        score: 0,
        quizComplete: false,
        answeredQuestions: [],
        timeLeft: 30,
        timerActive: false,
        timerInterval: null
    };
    renderStartScreen();
}

// Get designer level
function getDesignerLevel(percentage) {
    if (percentage >= 90) return { title: "UX Master", color: "#eab308" };
    if (percentage >= 80) return { title: "Senior Designer", color: "#4f46e5" };
    if (percentage >= 70) return { title: "Mid-Level Designer", color: "#3b82f6" };
    if (percentage >= 60) return { title: "Junior Designer", color: "#10b981" };
    return { title: "Design Novice", color: "#64748b" };
}

// Render start screen
function renderStartScreen() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="start-screen">
            <div class="icon-container">
                <i data-lucide="award"></i>
            </div>
            <h1>UX Foundations Pro</h1>
            <p class="subtitle">Test your design knowledge with 50 challenging questions</p>
            
            <div class="quiz-details">
                <h3>Quiz Details</h3>
                <div class="detail-item">
                    <i data-lucide="check-circle-2"></i>
                    <div>
                        <p>50 Questions</p>
                        <span>Covering UX laws, UI principles, design process, and more</span>
                    </div>
                </div>
                <div class="detail-item">
                    <i data-lucide="check-circle-2"></i>
                    <div>
                        <p>30 Seconds Per Question</p>
                        <span>Think carefully! Each question has a countdown timer</span>
                    </div>
                </div>
                <div class="detail-item">
                    <i data-lucide="check-circle-2"></i>
                    <div>
                        <p>Instant Feedback</p>
                        <span>Learn from detailed explanations after each answer</span>
                    </div>
                </div>
                <div class="detail-item">
                    <i data-lucide="check-circle-2"></i>
                    <div>
                        <p>Designer Level Rating</p>
                        <span>Discover your expertise level at the end</span>
                    </div>
                </div>
            </div>
            
            <button class="btn-primary" onclick="handleStart()">Start Quiz</button>
        </div>
    `;
    lucide.createIcons();
}

// Render quiz screen
function renderQuizScreen() {
    const question = quizQuestions[state.currentQuestion];
    const progressPercentage = ((state.currentQuestion + 1) / quizQuestions.length) * 100;
    
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="quiz-screen">
            <div class="header">
                <h1>UX Foundations Pro</h1>
                <p>Test your design knowledge</p>
            </div>
            
            <div class="progress-section">
                <div class="progress-header">
                    <span class="progress-text">Question ${state.currentQuestion + 1} of ${quizQuestions.length}</span>
                    <span class="progress-percentage">${Math.round(progressPercentage)}%</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${progressPercentage}%"></div>
                </div>
            </div>
            
            <div class="timer-section">
                <div class="timer-display">
                    <span class="timer-label">Time Remaining</span>
                    <div class="timer-value ${state.timeLeft <= 10 ? 'critical' : state.timeLeft <= 20 ? 'warning' : 'safe'}">
                        ${state.timeLeft}s
                    </div>
                </div>
                <div class="timer-bar-container">
                    <div class="timer-bar ${state.timeLeft <= 10 ? 'critical' : state.timeLeft <= 20 ? 'warning' : 'safe'}" 
                         style="width: ${(state.timeLeft / 30) * 100}%"></div>
                </div>
            </div>
            
            <div class="question-card">
                <h2 class="question-text">${question.question}</h2>
                
                <div class="options">
                    ${question.options.map((option, index) => {
                        const isSelected = state.selectedAnswer === index;
                        const isCorrect = index === question.correct;
                        const showResult = state.showExplanation;
                        
                        let optionClass = 'option';
                        if (showResult) {
                            optionClass += ' disabled';
                            if (isSelected && isCorrect) {
                                optionClass += ' selected-correct';
                            } else if (isSelected && !isCorrect) {
                                optionClass += ' selected-incorrect';
                            } else if (isCorrect) {
                                optionClass += ' correct';
                            }
                        }
                        
                        const indicatorContent = showResult && isCorrect 
                            ? '<i data-lucide="check-circle-2"></i>' 
                            : showResult && isSelected && !isCorrect 
                            ? '<i data-lucide="x-circle"></i>' 
                            : String.fromCharCode(65 + index);
                        
                        return `
                            <button class="${optionClass}" 
                                    onclick="handleAnswerSelect(${index})"
                                    ${state.selectedAnswer !== null ? 'disabled' : ''}>
                                <div class="option-indicator">${indicatorContent}</div>
                                <span class="option-text">${option}</span>
                            </button>
                        `;
                    }).join('')}
                </div>
                
                ${state.showExplanation ? `
                    <div class="explanation ${state.selectedAnswer === -1 ? 'timeout' : state.selectedAnswer === question.correct ? 'correct' : 'incorrect'}">
                        ${state.selectedAnswer === -1 ? `
                            <p class="explanation-title">Time's Up!</p>
                            <p class="explanation-text" style="margin-bottom: 0.5rem;">You ran out of time for this question.</p>
                        ` : ''}
                        <p class="explanation-title">Explanation:</p>
                        <p class="explanation-text">${question.explanation}</p>
                    </div>
                ` : ''}
            </div>
            
            ${state.showExplanation ? `
                <div class="next-button-container">
                    <button class="btn-next" onclick="handleNext()">
                        ${state.currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'View Results'}
                        <i data-lucide="chevron-right"></i>
                    </button>
                </div>
            ` : ''}
        </div>
    `;
    lucide.createIcons();
}

// Render results screen
function renderResultsScreen() {
    const finalPercentage = Math.round((state.score / quizQuestions.length) * 100);
    const level = getDesignerLevel(finalPercentage);
    
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="results-screen">
            <div class="results-icon">
                <i data-lucide="award" style="width: 5rem; height: 5rem; color: ${level.color}"></i>
            </div>
            <h1 class="results-title">Quiz Complete!</h1>
            <p class="results-subtitle">Here's how you performed</p>
            
            <div class="score-card">
                <div class="score-percentage">${finalPercentage}%</div>
                <div class="score-detail">${state.score} out of ${quizQuestions.length} correct</div>
                <div class="designer-level" style="color: ${level.color}">${level.title}</div>
            </div>
            
            <div class="performance-section">
                <h3 class="performance-title">Your Performance:</h3>
                <div class="performance-list">
                    ${state.answeredQuestions.map((answer, idx) => `
                        <div class="performance-item ${answer.correct ? 'correct' : 'incorrect'}">
                            <i data-lucide="${answer.correct ? 'check-circle-2' : 'x-circle'}"></i>
                            <span>Question ${idx + 1}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <button class="btn-restart" onclick="handleRestart()">
                <i data-lucide="rotate-ccw"></i>
                Retake Quiz
            </button>
        </div>
    `;
    lucide.createIcons();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);