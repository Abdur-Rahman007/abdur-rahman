/** Edit this file to update the website. All content comes from docs/CV_SOURCE.md. */
export const profile = {
  name: "Abdur Rahman",
  headline: "Software Engineering & AI/ML",
  email: "arrahman00700@gmail.com",
  phone: "+88 01929939063",
  phoneHref: "+8801929939063",
  github: "https://github.com/Abdur-Rahman007",
  linkedin: "https://www.linkedin.com/in/abdur-rahman-9761aa291/",
  codeforces: "https://codeforces.com/profile/AR_ratul",
  leetcode: "https://leetcode.com/u/arrahman00700/",
  // The whole supplied portrait is displayed at its original aspect ratio.
  photoUrl: "images/profile.png",
  // Paste your own YouTube watch/share URL here when your introduction is ready.
  youtubeUrl: "https://youtube.com/shorts/fic9nHCKtxI",
  resumePath: "resume/Abdur-Rahman-CV.pdf",
  bio: [
    "A curious and driven Computer Science and Engineering undergraduate at AIUB, with a passion for coding, analytical problem solving, and continuous learning. My projects span software development, machine learning, deep learning, and natural language processing.",
    "I enjoy contributing to collaborative teams, supporting my peers, and finding practical, creative solutions to technical problems. Through hands-on projects and competitive programming, I am building the skills to create useful software with AI.",
  ],
};

export const education = {
  degree: "Bachelor of Science in Computer Science and Engineering",
  university: "American International University–Bangladesh (AIUB)",
  location: "Dhaka, Bangladesh",
  period: "2023 – Present",
  cgpa: "3.93 / 4.00",
  graduation: "June 2027",
  progress: "Completed 9th semester · 127 of 148 credits",
  coursework: [
    "Data Structures",
    "Algorithms",
    "Object Oriented Programming I & II",
    "Object Oriented Analysis and Design",
    "Introduction to Database",
    "Software Engineering",
    "Artificial Intelligence and Expert System",
    "Web Technologies",
    "Computational Statistics and Probability",
    "Machine Learning",
    "Introduction to Data Science",
    "Computer Vision and Pattern Recognition",
    "Natural Language Processing",
    "Human-computer interaction",
  ],
};

export type ProjectCategory = "Software" | "AI/ML" | "Graphics";
export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  github?: string;
  gradient: string;
  details: string[];
};

export const projects: Project[] = [
  {
    id: "ecommerce",
    title: "E-Commerce Store Management System",
    category: "Software",
    description:
      "A full-stack e-commerce platform for product, category, and inventory management.",
    tech: ["PHP", "MySQL", "AJAX", "JavaScript", "HTML/CSS"],
    github: "https://github.com/Abdur-Rahman007/E-Commerce-Store",
    gradient: "from-blue-400 to-purple-500",
    details: [
      "Developed product CRUD operations, category management, image uploads, stock tracking, and database-integrated inventory management.",
      "Implemented admin-side category hierarchy handling, AJAX-based live availability toggling, responsive product management, and real-time stock alerts.",
    ],
  },
  {
    id: "hrms",
    title: "Human Resource Management System",
    category: "Software",
    description:
      "A .NET application supporting user, employee, and employer workflows.",
    tech: ["C#", ".NET", "OOP"],
    github:
      "https://github.com/Abdur-Rahman007/Human-Resource-Management-System-",
    gradient: "from-green-400 to-blue-500",
    details: [
      "Built HR workflows with file/database storage for persistent employee records.",
      "Applied abstraction, inheritance, and event-driven programming in C# to manage routine HR functionality.",
    ],
  },
  {
    id: "water-quality",
    title: "End-to-End Water Quality Classifier",
    category: "AI/ML",
    description:
      "An end-to-end machine learning pipeline with an interactive water potability predictor.",
    tech: ["Python", "Scikit-learn", "Random Forest", "Gradio"],
    github:
      "https://github.com/Abdur-Rahman007/End-to-End-water-quality-Classifier",
    gradient: "from-cyan-400 to-blue-500",
    details: [
      "Implemented missing-value imputation, feature scaling, GridSearchCV, and cross-validation for water potability prediction.",
      "Built a Gradio interface, evaluated classification metrics and a confusion matrix, and serialized the trained pipeline using Pickle.",
    ],
  },
  {
    id: "fashion-mnist",
    title: "Fashion-MNIST Image Classification",
    category: "AI/ML",
    description:
      "A four-block PyTorch CNN classifying ten categories of clothing images.",
    tech: ["Python", "PyTorch", "CNN", "Deep Learning"],
    github: "https://github.com/Abdur-Rahman007/Fashion-mnist-CNN-pytorch",
    gradient: "from-purple-400 to-pink-500",
    details: [
      "Designed a four-block CNN with batch normalization, pooling, and dropout for feature extraction and regularization.",
      "Processed grayscale images into tensors and achieved 90.65% test accuracy across ten clothing categories.",
    ],
  },
  {
    id: "gk-rnn",
    title: "Simple GK Answering System",
    category: "AI/ML",
    description:
      "A general knowledge question-answering system built with a recurrent neural network.",
    tech: ["Python", "PyTorch", "RNN", "NLP"],
    github:
      "https://github.com/Abdur-Rahman007/Simple_gk_answring_system_using_rnn",
    gradient: "from-orange-400 to-red-500",
    details: [
      "Implemented text cleaning, tokenization, vocabulary creation, numerical encoding, and word embeddings.",
      "Built a custom Dataset and DataLoader and trained an Embedding–RNN–Linear architecture with CrossEntropyLoss and Adam for answer-token prediction.",
    ],
  },
  {
    id: "lstm",
    title: "LSTM Next Word Predictor",
    category: "AI/ML",
    description:
      "An NLP project that predicts the next word and generates text autoregressively.",
    tech: ["Python", "PyTorch", "LSTM", "NLTK"],
    github:
      "https://github.com/Abdur-Rahman007/lstm-next-word-predictor-pytorch",
    gradient: "from-pink-400 to-purple-500",
    details: [
      "Implemented NLTK tokenization, vocabulary construction, sequence generation, padding, and custom data loading.",
      "Trained an Embedding–LSTM–Linear model using CrossEntropyLoss and Adam, achieving 96.94% training accuracy and generating text with greedy decoding.",
    ],
  },
  {
    id: "opengl",
    title: "Interactive 2D Animated Environment",
    category: "Graphics",
    description:
      "An interactive OpenGL environment with weather, day-night transitions, and animated scenes.",
    tech: ["C++", "OpenGL", "GLUT"],
    github: "https://github.com/Abdur-Rahman007/Computer-Graphics",
    gradient: "from-emerald-400 to-cyan-500",
    details: [
      "Created dynamic weather, day-night transitions, sports simulations, carnival scenes, and real-time object interactions.",
      "Used translation, rotation, scaling, alpha blending, dynamic lighting, animation loops, and coordinate-based rendering.",
    ],
  },
  {
    id: "shop",
    title: "Shop Management System",
    category: "Software",
    description:
      "A Java desktop application for small retail operations, inventory, billing, and users.",
    tech: ["Java", "OOP", "File I/O"],
    gradient: "from-amber-400 to-orange-500",
    details: [
      "Designed and implemented inventory, billing, and user management for small retail operations in Spring 2023–2024.",
      "Applied encapsulation, inheritance, and polymorphism, with file I/O for data persistence.",
    ],
  },
];

export const techCategories = [
  {
    category: "Programming & Web",
    icon: "code",
    skills: [
      "C++",
      "C",
      "Python",
      "C#",
      "Java",
      "JavaScript",
      "PHP",
      "HTML/CSS",
      "MySQL",
    ],
  },
  {
    category: "AI/ML & Data",
    icon: "brain",
    skills: [
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Gradio",
    ],
  },
  {
    category: "Developer Tools",
    icon: "terminal",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Google Colab",
      "Jupyter Notebooks",
      "Notepad++",
    ],
  },
  {
    category: "Other Tools & Knowledge",
    icon: "cpu",
    skills: [
      "LaTeX",
      "MATLAB",
      "VHDL (Basic)",
      "Proteus",
      "NI Multisim",
      "Notion",
      "Trello",
    ],
  },
];

export const awards = [
  {
    title: "Dean’s List Honors",
    detail: "Four semesters at AIUB, with GPAs of 3.90, 3.91, and 4.00 twice.",
  },
  {
    title: "ICPC Asia Dhaka Regional Selection",
    detail:
      "Selected to represent AIUB in the International Collegiate Programming Contest in 2024.",
  },
  {
    title: "Merit Scholarship",
    detail:
      "Up to 60% tuition waiver based on AIUB academic and previous results.",
  },
  {
    title: "School Science Fair · 3rd Place",
    detail: "Developed an eco-friendly electricity generation concept in 2015.",
  },
];

export const certifications = [
  { title: "Intermediate Importing Data in Python", issuer: "DataCamp" },
  { title: "Preprocessing for Machine Learning in Python", issuer: "DataCamp" },
  { title: "IT Essentials", issuer: "Cisco Networking Academy" },
];

export const events = [
  {
    title: "7th Bangladeshi IEOM International Conference",
    organization: "Poster presentation",
    period: "December 2024",
    description:
      "Presented “A Statistical Analysis on Unemployment After Graduation in Bangladesh,” using a secondary dataset and statistical analysis.",
  },
  {
    title: "Workshop on Persuasive Presentation",
    organization: "AIUB English Club",
    period: "August 2025",
    description:
      "Developed public speaking, persuasive presentation, communication, and audience engagement skills.",
  },
  {
    title: "LinkedIn Profile Optimization Workshop",
    organization: "AIUB English Club",
    period: "November 2025",
    description:
      "Explored LinkedIn optimization, personal branding, professional networking, and communication.",
  },
  {
    title: "Practical DevOps with AWS Workshop",
    organization: "Cloudly Infotech Limited & AWS Partner",
    period: "April 2026",
    description:
      "Gained hands-on exposure to AWS cloud services, DevOps practices, cloud infrastructure, and deployment workflows.",
  },
];

export const activities = [
  {
    title: "Associate Member",
    organization: "UNYSAB",
    period: "Present",
    description: "United Nations Youth and Students Association of Bangladesh.",
  },
  {
    title: "Member",
    organization: "AIUB English Club",
    period: "Spring 2024 – Present",
    description:
      "Participated in events, debates, and speaking sessions, strengthening communication, public speaking, teamwork, leadership, and confidence.",
  },
  {
    title: "Problem Solving",
    organization: "Codeforces & LeetCode",
    period: "September 2023 – Present",
    description: "Solved 1000+ problems using C++.",
    links: [
      { label: "Codeforces", url: profile.codeforces },
      { label: "LeetCode", url: profile.leetcode },
    ],
  },
  {
    title: "Entrepreneurship",
    organization: "Cover Station",
    period: "November 2020 – June 2021",
    description:
      "Started a phone-cover business at age 16 and sold through Instagram.",
    links: [
      {
        label: "Cover Station",
        url: "https://www.instagram.com/cover.station_bd?igsh=aWQ1eTZlbGRoNG9j",
      },
    ],
  },
  {
    title: "Club Cricket",
    organization: "Aswad Cricket Academy",
    period: "2017 – 2018",
    description: "Played cricket at club level.",
  },
  {
    title: "CLEAR MEN U17 Football",
    organization: "School team",
    period: "April 2018",
    description: "Represented school at U17 level.",
  },
  {
    title: "Drawing Competition · 1st Place",
    organization: "School",
    period: "2014",
    description:
      "Won first place in the school drawing competition in Class 5.",
  },
];
