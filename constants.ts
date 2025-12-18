import { Project, Skill, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Kazimla Nkabalaza",
  title: "IT Support Specialist & AI/ML Solutions Builder",
  experience: [
    {
      company: "CAPACITI",
      role: "Digital Associate (AI & Workday BI Stream)",
      year: "Current"
    },
    {
      company: "Imas Finance",
      role: "Desktop Technician Intern",
      year: "Dec 2024 - Sep 2025"
    }
  ],
  education: [
    {
      institution: "Walter Sisulu University",
      qualification: "Diploma in ICT Support Services",
      year: "2024"
    }
  ],
  email: "nkabalazakazimla@gmail.com",
  cvLink: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/kazimla_nkabalaza_capaciti_org_za/IQDb0rkG7cAiS7YHWwkfrCr4AVXEtbSs5naImZcSUj70k_g?e=THMN8T",
  profileImage: "https://media.licdn.com/dms/image/v2/D4D03AQEGbjMW3yT3bQ/profile-displayphoto-crop_800_800/B4DZqXgNu2KQAM-/0/1763478398319?e=1767225600&v=beta&t=dqLDcbNWsXcZqYc8YFajj2Atvjz8pCrtWefnppCCOIM",
  about: `IT enthusiast with hands-on experience in hardware troubleshooting, software support, basic networking, and data visualization using Power BI. Proficient in Microsoft Office 365 with strong communication and problem-solving skills. I am currently a Digital Associate at CAPACITI, undergoing intensive training in AI and Workday Business Intelligence, preparing for upcoming integration into a host company environment to apply these enterprise skills.`,
};

export const PROJECTS: Project[] = [
  {
    id: "5",
    name: "InfiniteAI Assistant",
    description: "An educational chatbot designed to introduce beginners to fundamental AI concepts through interactive conversations.",
    category: "No-Code",
    languages: ["No-Code Development"],
    tools: ["Botpress Studio", "Conversational Design", "Workflow Automation", "Knowledge Base Management"],
    deploymentLink: "https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/10/15/09/20251015090512-3NKILXXF.json",
    githubLink: "", 
    featured: true,
    detailedDescription: "InfiniteAi is an educational chatbot developed on the no-code platform Botpress. It is designed to introduce beginners to fundamental AI concepts through interactive conversations, Q&A sessions, and multimedia content. It simplifies complex topics into digestible dialogue.",
    imageUrl: "https://94fa3c88.delivery.rocketcdn.me/en/files/2024/11/chatbot-datascientest-1024x512.webp",
    images: [
        "https://94fa3c88.delivery.rocketcdn.me/en/files/2024/11/chatbot-datascientest-1024x512.webp", 
        "https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg?semt=ais_hybrid&w=740&q=80", 
        "https://www.shutterstock.com/image-vector/ai-chat-bot-digital-brain-260nw-2553053767.jpg"
    ]
  },
  {
    id: "6",
    name: "Edu-Gen",
    description: "The AI Edu-Gen is an AI-powered educational content generation tool designed to assist Grade 10–12 learners by producing high-quality materials.",
    category: "AI & ML",
    languages: ["TypeScript", "HTML/CSS"],
    tools: ["Google Gemini API", "React", "Vite", "Node.js", "Vercel"],
    deploymentLink: "https://ai-edu-generator.vercel.app",
    githubLink: "https://github.com/nkabalazakazimla/ai-edu-generator",
    featured: true,
    detailedDescription: "The AI Edu-Gen is an AI-powered educational content generation tool designed to assist Grade 10–12 learners by producing high-quality learning materials such as quizzes, study guides, and topic explanations. It leverages the Google Gemini API to provide accurate and context-aware educational support.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgzVAeY57FWc9KyNRZ_u4a5xccyxssW42lbA&s",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgzVAeY57FWc9KyNRZ_u4a5xccyxssW42lbA&s",
      "https://washingtonian.com/wp-content/uploads/2025/03/GettyImages-1458679628-scaled-down.jpg",
      "https://media.currys.biz/i/currysprod/How-To-Choose-Tablet-For-Schoolwork-Header"
    ]
  },
  {
    id: "1",
    name: "ResuMate",
    description: "An AI tool that helps you create professional resumes quickly using Google Gemini.",
    category: "AI & ML",
    languages: ["TypeScript", "Node.js"],
    tools: ["Google Gemini API", "React", "Vite", "Tailwind CSS", "Vercel"],
    deploymentLink: "https://resumate-eight-tan.vercel.app",
    githubLink: "https://github.com/nkabalazakazimla/ResuMate",
    featured: true,
    detailedDescription: "ResuMate is an AI tool that helps you create professional resumes quickly. It suggests content, checks for job fit, and lets you choose from three templates to make and save resumes easily. It leverages the power of Large Language Models to assist job seekers in presenting their best selves.",
    imageUrl: "https://www.resufit.com/wp-content/uploads/2025/04/article-image-00d731de-57c5-42b5-bbe5-cf26639aed01.webp",
    images: [
      "https://www.resufit.com/wp-content/uploads/2025/04/article-image-00d731de-57c5-42b5-bbe5-cf26639aed01.webp",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800", 
      "https://media.istockphoto.com/id/1359108560/photo/resumes-on-laptop-with-glasses-resume-review-job-interview.jpg?s=612x612&w=0&k=20&c=if4zqnVhIDnMHXnpxG5WSWDMXihPADhTO209AW20ORE=" 
    ]
  },
  {
    id: "3",
    name: "FraudGuard",
    description: "Intelligent, multi-modal security dashboard to protect banking users from financial fraud.",
    category: "AI & ML",
    languages: ["TypeScript", "HTML"],
    tools: ["Google Gemini API", "React", "Vite", "Node.js", "Vercel"],
    deploymentLink: "https://fraudguard-ochre.vercel.app",
    githubLink: "https://github.com/nkabalazakazimla/FraudGuard",
    featured: true,
    detailedDescription: "FraudGuard AI is an intelligent, multi-modal security dashboard designed to protect banking users from modern financial fraud. It analyzes transaction patterns and user behavior to detect anomalies in real-time.",
    imageUrl: "https://ecommercegermany.com/wp-content/uploads/2021/06/zdj.jpg",
    images: [
      "https://ecommercegermany.com/wp-content/uploads/2021/06/zdj.jpg",
      "https://blog.internxt.com/content/images/2024/06/mobile_banking_security.png",
      "https://beyondexclamation.com/wp-content/uploads/2019/07/Banking-Security.jpg"
    ]
  },
  {
    id: "4",
    name: "SentraMind",
    description: "Interactive dashboard for analyzing sentiment in text data with ease and precision.",
    category: "AI & ML",
    languages: ["TypeScript", "HTML"],
    tools: ["Google Gemini API", "React", "Vite", "Node.js", "Vercel"],
    deploymentLink: "https://sentramindnewupdate.vercel.app",
    githubLink: "https://github.com/nkabalazakazimla/SentraMind",
    featured: true,
    detailedDescription: "SentraMind is an intelligent and interactive dashboard designed to help users analyse sentiment in text data with ease and precision. It empowers you to uncover the emotional tone behind customer reviews, social media posts, and other written content, turning raw text into actionable insights.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", 
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", 
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"  
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Technical",
    items: ["TypeScript & React", "Google Gemini API Integration", "Prompt Engineering", "HTML/CSS", "Power BI", "Figma", "Microsoft Office 365", "Hardware Troubleshooting", "Basic Networking"]
  },
  {
    category: "Soft Skills",
    items: ["Teamwork", "Problem Solving", "Adaptability", "Communication", "Analytical Thinking"]
  }
];

export const SOCIALS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/kazimla-nkabalaza-0b6440321/",
    icon: "linkedin"
  },
  {
    platform: "GitHub",
    url: "https://github.com/nkabalazakazimla",
    icon: "github"
  }
];