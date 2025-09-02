export const personalInfo = {
  name: "Harshit Mishra",
  title: "Inventor & Software Developer",
  email: "22323@iiitu.ac.in",
  phone: "+91-9651908428",
  github: "https://github.com/harshit7045",
  linkedin: "https://www.linkedin.com/in/harshit7045/",
  education: {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Indian Institute of Information Technology Una",
    cgpa: "8.35 (till 4th sem)",
    year: "2022-2026"
  }
};

export const patents = [
  {
    id: 1,
    title: "RFID-Based Weapon Detection and Friend-or-Foe Identification System",
    period: "Jan 2025 – Apr 2025",
    status: "Prototype Development",
    description: "Developed RFID-enabled system to detect weapon-carrying individuals and classify them as friendly or hostile, enhancing situational awareness in military zones.",
    tags: ["RFID Technology", "Military Tech", "Security Systems"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    id: 2,
    title: "Face Mask with Integrated Sensors for Bruxism Detection",
    period: "May 2025 – July 2025", 
    status: "Provisional Patent",
    description: "Filed patent for wearable sleep mask detecting sleep bruxism, a prevalent sleep disorder affecting 20% of adults, following rigorous prototype testing and refinement.",
    tags: ["Biosensors", "Healthcare Tech", "Wearables"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  }
];

export const projects = [
  {
    id: 1,
    title: "Parking Lot Aggregator (FASTag based)",
    subtitle: "Optimizing Urban Parking Spaces for Efficient City Mobility Using RFID(FASTag) Technology",
    description: "Built a comprehensive parking lot aggregator platform with 2 different client and business sites separately using the MERN stack, integrating IoT (RFID) for automated entry and exit.",
    period: "2024",
    highlights: [
      "Designed architecture with minimal hardware cost (Rs 20,000), using ESP32 for RFID (FASTag)-based entry and exit",
      "Implemented real-time updates with Redis and Socket.io, enhancing the user experience with a dynamic dashboard and reduced API response time by 80%",
      "Implemented 3 booking types—hour-wise, date-wise, and walk-in—with real-time updates via NodeMailer",
      "Integrated Stripe as the payment gateway and Mapbox API for interactive maps of parking lots",
      "Included more than 9 edge-case handling and deployed the application on AWS with Nginx for optimized server management"
    ],
    technologies: ["MERN Stack", "ESP32", "RFID", "Redis", "Socket.io", "Stripe", "Mapbox", "AWS", "Nginx"],
    category: ["web", "iot"],
    links: {
      github: "#",
      live: "#",
      demo: "#"
    },
    image: "https://pixabay.com/get/gf0cc3ad5be52fcab9e70da21a1c6d8ad99bbfa66cd018e997b78bcc15051435d2e1748dd8b3c3f30c2650301a4b836520aa0e6fc57781b41e44262372b4490d0_1280.jpg"
  },
  {
    id: 2,
    title: "OSint SaaS Platform",
    subtitle: "Efficient Open-Source Intelligence Gathering with 4 Integrated APIs",
    description: "Programmed a comprehensive OSint SaaS platform using MERN, enabling efficient open-source intelligence gathering.",
    period: "2024",
    highlights: [
      "Integrated 4 APIs for OSINT services—including phone/email validation, social media retrieval, and reverse image search",
      "Secure Stripe payment processing for a pay-per-search model and user balance tracking",
      "Deployed the application on AWS with Nginx for optimized server management"
    ],
    technologies: ["MERN Stack", "OSINT APIs", "Stripe", "AWS", "Nginx"],
    category: ["web"],
    links: {
      github: "#",
      live: "#",
      demo: "#"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  },
  {
    id: 3,
    title: "Automatic PC Cooling Pad Adapter",
    subtitle: "Optimized cooling solution for laptops based on CPU usage using Python and Arduino",
    description: "Developed an automatic cooling pad adapter that activates based on CPU usage, using Python driver and Arduino Uno for efficient power management.",
    period: "2024",
    highlights: [
      "Utilized 2 libraries Psutil and Serial in the Driver to monitor and transmit CPU usage data to the cooling pad system",
      "Designed an adapter that transforms regular cooling pads into smart ones, enhancing efficiency by up to 62%"
    ],
    technologies: ["Python", "Arduino Uno", "Psutil", "Serial Communication"],
    category: ["hardware"],
    links: {
      github: "#"
    },
    image: "https://pixabay.com/get/g9f682f728fb11708a3882b344cda756990a9bf5b6501c4cfec670082c57a76c6195b5e1261fdeb236b3205f25d7427e50d004fca872cd010293049ce873538e6_1280.jpg"
  }
];

export const experience = [
  {
    id: 1,
    title: "Research and Development Intern",
    company: "Maker Bhavan Foundation (IITGN)",
    period: "May 2025 - July 2025",
    highlights: [
      "Selected as one of 60 students across India for a prestigious national-level innovation program",
      "Developed a smart wearable mask in a team of 3 to detect and monitor Sleep Bruxism using biosensors",
      "Honored with the Special Jury Award of ₹50,000 for outstanding innovation and technical execution"
    ]
  },
  {
    id: 2,
    title: "Cyber Security Extern",
    company: "Sopra Steria",
    period: "Jun 2024 - July 2024",
    highlights: [
      "Gained hands-on experience in cybersecurity practices and threat analysis",
      "Worked on security assessment projects and vulnerability testing",
      "Collaborated with security teams on enterprise-level security solutions"
    ]
  },
  {
    id: 3,
    title: "Head of Public Speaking, Literature and Content",
    company: "Eunoia (Cultural Club of IIIT Una)",
    period: "June 2024 - Present",
    highlights: [
      "Leading the public speaking and literature wing of the cultural club",
      "Organizing literary events and content creation workshops",
      "Mentoring students in public speaking and creative writing"
    ]
  },
  {
    id: 4,
    title: "Secretary of Public Speaking and Literature",
    company: "Eunoia (Cultural Club of IIIT Una)",
    period: "Jul 2023 - Jun 2024",
    highlights: [
      "Coordinated literary events and public speaking competitions",
      "Managed club activities and member engagement initiatives",
      "Developed creative content strategies for club promotions"
    ]
  },
  {
    id: 5,
    title: "Contributor",
    company: "Social Summer of Code",
    period: "Jun 2023 - July 2023",
    highlights: [
      "Participated in open source program focused on social impact projects",
      "Contributed to community-driven software development initiatives",
      "Collaborated with developers on meaningful social technology solutions"
    ]
  }
];

export const skills = {
  programming: [
    { name: "JavaScript", level: 90 },
    { name: "C++", level: 85 },
    { name: "C", level: 80 }
  ],
  webDevelopment: [
    "HTML", "CSS", "JavaScript", "MongoDB", "Node.js", "Redis"
  ],
  tools: [
    "Git & GitHub", "SQL", "AWS", "Nginx"
  ],
  courses: [
    "Introduction to C",
    "Computer Networks", 
    "Object-Oriented Programming in C++",
    "Data Structures and Algorithms",
    "Operating Systems",
    "Database Management Systems"
  ]
};

export const achievements = [
  "Special Jury Award ₹50,000 for Outstanding Innovation at Maker Bhavan Foundation",
  "Selected as one of 60 students across India for national-level innovation program",
  "2 Patents filed in Military Technology and Healthcare sectors",
  "80% API response time improvement in Parking Lot Aggregator project",
  "62% efficiency improvement in PC Cooling Adapter system"
];

export const blogs = [
  {
    id: 1,
    title: "Building Scalable IoT Solutions for Smart Cities",
    excerpt: "Exploring the intersection of hardware and software in modern urban infrastructure development.",
    content: "Deep dive into IoT architecture, sensor networks, and data processing pipelines for smart city applications...",
    publishedAt: "2024-12-15",
    readTime: 8,
    tags: ["IoT", "Smart Cities", "Technology", "Innovation"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    id: 2,
    title: "From Patent to Product: My Innovation Journey",
    excerpt: "Lessons learned from filing patents and turning innovative ideas into working prototypes.",
    content: "The journey from ideation to patent filing, prototype development, and real-world testing...",
    publishedAt: "2024-11-28",
    readTime: 6,
    tags: ["Patents", "Innovation", "Entrepreneurship", "Product Development"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  },
  {
    id: 3,
    title: "Full-Stack Development Best Practices in 2024",
    excerpt: "Modern approaches to building scalable web applications with MERN stack and cloud technologies.",
    content: "Comprehensive guide to modern full-stack development practices, deployment strategies, and performance optimization...",
    publishedAt: "2024-10-10",
    readTime: 12,
    tags: ["Web Development", "MERN Stack", "Best Practices", "Cloud Computing"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
  }
];
