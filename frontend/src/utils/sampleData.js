/**
 * Sample data for SESG Research Website
 * This will be used to populate Firebase with initial content
 */

export const samplePublications = [
  {
    title: "Smart Grid Optimization Using Artificial Intelligence and Machine Learning Techniques",
    authors: ["Dr. Aminul Islam", "Dr. Sarah Rahman", "Md. Karim Hassan"],
    year: 2024,
    category: "Journal Articles",
    research_areas: ["Smart Grid Technologies", "Grid Optimization & Stability", "Cybersecurity and AI for Power Infrastructure"],
    citations: 45,
    journal_name: "IEEE Transactions on Smart Grid",
    volume: "15",
    issue: "3",
    pages: "1234-1245",
    doi_link: "https://doi.org/10.1109/TSG.2024.1234567",
    paper_link: "https://ieeexplore.ieee.org/document/1234567",
    open_access: true,
    featured: true,
    abstract: "This paper presents novel approaches to smart grid optimization using advanced AI and ML techniques. The proposed methodology demonstrates significant improvements in grid stability and efficiency while maintaining cybersecurity standards.",
    keywords: ["Smart Grid", "Artificial Intelligence", "Machine Learning", "Grid Optimization", "Power Systems"]
  },
  {
    title: "Microgrid Integration with Renewable Energy Sources: Challenges and Solutions",
    authors: ["Prof. Dr. Rashida Khatun", "Eng. Mehmet Ali", "Dr. Fatima Ahmed"],
    year: 2024,
    category: "Conference Proceedings",
    research_areas: ["Microgrids & Distributed Energy Systems", "Renewable Energy Integration", "Energy Storage Systems"],
    citations: 23,
    conference_name: "IEEE Power & Energy Society General Meeting 2024",
    city: "Seattle",
    country: "USA",
    pages: "1-8",
    paper_link: "https://ieeexplore.ieee.org/document/2345678",
    open_access: false,
    featured: true,
    abstract: "This study explores the integration challenges of renewable energy sources in microgrid systems and proposes innovative solutions to enhance system reliability and efficiency.",
    keywords: ["Microgrid", "Renewable Energy", "Integration", "Distributed Systems", "Energy Storage"]
  },
  {
    title: "Energy Storage Systems for Grid Stability: A Comprehensive Review",
    authors: ["Dr. Mohammad Hasan", "Dr. Aisha Begum", "Eng. Abdul Rahman"],
    year: 2023,
    category: "Journal Articles",
    research_areas: ["Energy Storage Systems", "Grid Optimization & Stability", "Smart Grid Technologies"],
    citations: 78,
    journal_name: "Renewable and Sustainable Energy Reviews",
    volume: "185",
    pages: "113456",
    doi_link: "https://doi.org/10.1016/j.rser.2023.113456",
    paper_link: "https://www.sciencedirect.com/science/article/pii/S1364032123",
    open_access: true,
    featured: false,
    abstract: "A comprehensive review of energy storage technologies and their applications in maintaining grid stability in modern power systems with high renewable energy penetration.",
    keywords: ["Energy Storage", "Grid Stability", "Power Systems", "Renewable Energy", "Battery Technology"]
  },
  {
    title: "Cybersecurity Framework for Smart Power Infrastructure",
    authors: ["Dr. Salma Akter", "Prof. Dr. Ahmed Khan", "Dr. Nusrat Jahan"],
    year: 2023,
    category: "Book Chapters",
    research_areas: ["Cybersecurity and AI for Power Infrastructure", "Smart Grid Technologies", "Power System Automation"],
    citations: 34,
    book_title: "Advanced Cybersecurity in Power Systems",
    editor: "Dr. John Smith",
    publisher: "Springer",
    city: "Berlin",
    country: "Germany",
    pages: "45-78",
    paper_link: "https://link.springer.com/chapter/10.1007/978-3-030-12345-6_3",
    open_access: false,
    featured: false,
    abstract: "This chapter presents a comprehensive cybersecurity framework specifically designed for smart power infrastructure protection against modern cyber threats.",
    keywords: ["Cybersecurity", "Smart Grid", "Power Infrastructure", "Threat Detection", "Security Framework"]
  },
  {
    title: "Power System Automation Using IoT and Edge Computing",
    authors: ["Eng. Tanzir Rahman", "Dr. Sultana Razia", "Prof. Dr. Khaled Mahmud"],
    year: 2023,
    category: "Conference Proceedings",
    research_areas: ["Power System Automation", "Smart Grid Technologies", "Cybersecurity and AI for Power Infrastructure"],
    citations: 19,
    conference_name: "International Conference on Smart Grid and Clean Energy Technologies",
    city: "Dubai",
    country: "UAE",
    pages: "156-163",
    paper_link: "https://ieeexplore.ieee.org/document/3456789",
    open_access: true,
    featured: false,
    abstract: "This paper explores the application of IoT and edge computing technologies in automating power system operations and improving overall system efficiency.",
    keywords: ["IoT", "Edge Computing", "Power System Automation", "Smart Grid", "Automation"]
  }
];

export const sampleProjects = [
  {
    title: "Development of AI-Based Grid Management System",
    description: "Creating an intelligent grid management system using machine learning algorithms to optimize power distribution and predict system failures.",
    status: "Active",
    start_date: "2024-01-15",
    end_date: "2025-12-31",
    research_areas: ["Smart Grid Technologies", "Cybersecurity and AI for Power Infrastructure", "Grid Optimization & Stability"],
    team_members: ["Dr. Aminul Islam", "Dr. Sarah Rahman", "Eng. Mehmet Ali"],
    funding_source: "Bangladesh Science and Technology Ministry",
    budget: "2,500,000 BDT",
    featured: true,
    objectives: [
      "Develop ML-based fault prediction algorithms",
      "Implement real-time grid monitoring system",
      "Create automated response mechanisms",
      "Ensure cybersecurity compliance"
    ]
  },
  {
    title: "Sustainable Microgrid for Rural Electrification",
    description: "Designing and implementing sustainable microgrid solutions for remote rural areas in Bangladesh using renewable energy sources.",
    status: "Active",
    start_date: "2023-06-01",
    end_date: "2024-08-30",
    research_areas: ["Microgrids & Distributed Energy Systems", "Renewable Energy Integration", "Energy Storage Systems"],
    team_members: ["Prof. Dr. Rashida Khatun", "Dr. Fatima Ahmed", "Eng. Abdul Rahman"],
    funding_source: "World Bank Rural Development Project",
    budget: "1,800,000 BDT",
    featured: true,
    objectives: [
      "Design off-grid renewable energy systems",
      "Implement battery storage solutions",
      "Train local technicians",
      "Monitor system performance"
    ]
  },
  {
    title: "Smart Grid Cybersecurity Research Initiative",
    description: "Comprehensive research project focusing on identifying and mitigating cybersecurity threats in smart grid infrastructure.",
    status: "Completed",
    start_date: "2022-01-01",
    end_date: "2023-12-31",
    research_areas: ["Cybersecurity and AI for Power Infrastructure", "Smart Grid Technologies"],
    team_members: ["Dr. Salma Akter", "Prof. Dr. Ahmed Khan", "Dr. Nusrat Jahan"],
    funding_source: "IEEE Power & Energy Society Grant",
    budget: "1,200,000 BDT",
    featured: false,
    objectives: [
      "Identify smart grid vulnerabilities",
      "Develop threat detection algorithms",
      "Create security protocols",
      "Publish research findings"
    ]
  }
];

export const sampleAchievements = [
  {
    title: "Best Paper Award - IEEE Smart Grid Conference 2024",
    description: "Received the Best Paper Award for outstanding research on 'AI-Based Grid Optimization Techniques' at the IEEE Smart Grid International Conference 2024.",
    date: "2024-08-15",
    category: "Awards",
    recipient: "Dr. Aminul Islam, Dr. Sarah Rahman",
    organization: "IEEE Power & Energy Society",
    featured: true,
    impact: "Recognition of innovative research contributing to smart grid advancement globally."
  },
  {
    title: "Research Grant - Sustainable Energy Development",
    description: "Secured a major research grant from the Bangladesh Ministry of Science and Technology for sustainable energy and smart grid development projects.",
    date: "2024-03-10",
    category: "Grants",
    recipient: "SESG Research Group",
    organization: "Ministry of Science and Technology, Bangladesh",
    amount: "5,000,000 BDT",
    featured: true,
    impact: "Funding will support multiple research projects over 3 years, advancing renewable energy integration."
  },
  {
    title: "International Collaboration Agreement with MIT",
    description: "Established formal research collaboration with MIT's Laboratory for Electromagnetic and Electronic Systems for joint smart grid research initiatives.",
    date: "2023-11-20",
    category: "Collaborations",
    recipient: "SESG Research Group",
    organization: "Massachusetts Institute of Technology (MIT)",
    featured: false,
    impact: "Opens opportunities for student exchange, joint publications, and shared research resources."
  },
  {
    title: "Patent Approval - Smart Grid Security System",
    description: "Received patent approval for innovative smart grid cybersecurity system design with automated threat detection capabilities.",
    date: "2023-09-05",
    category: "Patents", 
    recipient: "Dr. Salma Akter, Prof. Dr. Ahmed Khan",
    organization: "Bangladesh Patent Office",
    patent_number: "BD/P/2023/456789",
    featured: false,
    impact: "Intellectual property protection for innovative cybersecurity technology with commercial potential."
  }
];

export const sampleNewsEvents = [
  {
    title: "SESG Research Group Hosts International Smart Grid Symposium 2024",
    description: "SESG successfully organized the International Smart Grid Symposium 2024, bringing together researchers, industry experts, and policymakers from around the world to discuss the latest developments in smart grid technology.",
    date: "2024-09-15",
    category: "Events",
    location: "BRAC University, Dhaka",
    featured: true,
    attendees: 250,
    image_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    highlights: [
      "Keynote speeches from MIT and Stanford researchers",
      "Panel discussion on renewable energy integration",
      "Student poster competition",
      "Industry networking sessions"
    ]
  },
  {
    title: "New Research Lab Inauguration",
    description: "SESG inaugurated its new state-of-the-art Smart Grid Research Laboratory equipped with advanced simulation tools and testing equipment for renewable energy integration research.",
    date: "2024-07-08",
    category: "News",
    location: "BRAC University Campus",
    featured: true,
    image_url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800",
    highlights: [
      "Advanced grid simulation software",
      "Real-time testing equipment", 
      "Renewable energy integration testbed",
      "Cybersecurity testing environment"
    ]
  },
  {
    title: "PhD Student Wins National Research Competition",
    description: "PhD student Eng. Tanzir Rahman wins first place in the National Young Researchers Competition 2024 for innovative work on IoT-based power system automation.",
    date: "2024-05-20",
    category: "News",
    featured: false,
    achievement_details: {
      student: "Eng. Tanzir Rahman",
      competition: "National Young Researchers Competition 2024",
      research_topic: "IoT-Based Power System Automation",
      prize: "First Place - 100,000 BDT"
    }
  }
];

// Sample people data
export const samplePeople = {
  advisors: [
    {
      id: "advisor_1",
      name: "Dr. Aminul Islam",
      title: "Professor & Lead Researcher",
      department: "Electrical & Electronic Engineering",
      university: "BRAC University",
      email: "aminul.islam@bracu.ac.bd",
      phone: "+880-1234-567890",
      office: "UB40401, BRACU Campus",
      profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      researchInterests: ["Smart Grid Technologies", "Renewable Energy Integration", "Power System Optimization"],
      qualifications: [
        "PhD in Electrical Engineering, University of Toronto, Canada",
        "MSc in Power Systems, BUET, Bangladesh",
        "BSc in Electrical Engineering, BUET, Bangladesh"
      ],
      experience: "15+ years in Smart Grid Research",
      publications: 45,
      biography: "Dr. Aminul Islam is a leading researcher in smart grid technologies with extensive experience in power system optimization and renewable energy integration."
    },
    {
      id: "advisor_2", 
      name: "Prof. Dr. Rashida Khatun",
      title: "Professor & Research Director",
      department: "Electrical & Electronic Engineering",
      university: "BRAC University",
      email: "rashida.khatun@bracu.ac.bd",
      phone: "+880-1234-567891",
      office: "UB40402, BRACU Campus",
      profilePicture: "https://images.unsplash.com/photo-1494790108755-2616c4e2b419?w=400",
      researchInterests: ["Microgrids", "Distributed Energy Systems", "Energy Storage"],
      qualifications: [
        "PhD in Power Electronics, University of British Columbia, Canada",
        "MSc in Electrical Engineering, BUET, Bangladesh",
        "BSc in Electrical Engineering, KUET, Bangladesh"
      ],
      experience: "18+ years in Power Electronics Research",
      publications: 62,
      biography: "Prof. Dr. Rashida Khatun specializes in microgrid systems and distributed energy resources with a focus on sustainable energy solutions."
    }
  ],
  teamMembers: [
    {
      id: "team_1",
      name: "Dr. Sarah Rahman",
      title: "Assistant Professor",
      department: "Electrical & Electronic Engineering", 
      university: "BRAC University",
      email: "sarah.rahman@bracu.ac.bd",
      phone: "+880-1234-567892",
      office: "UB40403, BRACU Campus",
      profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      researchInterests: ["AI in Power Systems", "Grid Optimization", "Machine Learning"],
      qualifications: [
        "PhD in Computer Engineering, University of Waterloo, Canada",
        "MSc in Computer Science, BUET, Bangladesh"
      ],
      experience: "8+ years in AI-Power Systems Research",
      publications: 28,
      biography: "Dr. Sarah Rahman focuses on applying artificial intelligence and machine learning techniques to solve complex power system challenges."
    },
    {
      id: "team_2",
      name: "Dr. Salma Akter",
      title: "Research Associate",
      department: "Electrical & Electronic Engineering",
      university: "BRAC University", 
      email: "salma.akter@bracu.ac.bd",
      phone: "+880-1234-567893",
      office: "UB40404, BRACU Campus",
      profilePicture: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
      researchInterests: ["Cybersecurity", "Smart Grid Security", "Power Infrastructure Protection"],
      qualifications: [
        "PhD in Cybersecurity, University of Ottawa, Canada",
        "MSc in Information Security, BUET, Bangladesh"
      ],
      experience: "6+ years in Cybersecurity Research",
      publications: 22,
      biography: "Dr. Salma Akter specializes in cybersecurity for power systems and smart grid infrastructure protection."
    }
  ],
  collaborators: [
    {
      id: "collab_1",
      name: "Eng. Mehmet Ali",
      title: "PhD Student",
      department: "Electrical & Electronic Engineering",
      university: "BRAC University",
      email: "mehmet.ali@g.bracu.ac.bd",
      phone: "+880-1234-567894", 
      office: "Graduate Research Lab, BRACU Campus",
      profilePicture: "https://images.usplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      researchInterests: ["Renewable Energy", "Power Electronics", "Grid Integration"],
      qualifications: [
        "MSc in Electrical Engineering, BRAC University",
        "BSc in Electrical Engineering, METU, Turkey"
      ],
      experience: "4+ years in Renewable Energy Research",
      publications: 12,
      biography: "Eng. Mehmet Ali is pursuing PhD research in renewable energy integration and power electronics applications."
    },
    {
      id: "collab_2",
      name: "Eng. Tanzir Rahman", 
      title: "PhD Student",
      department: "Electrical & Electronic Engineering",
      university: "BRAC University",
      email: "tanzir.rahman@g.bracu.ac.bd",
      phone: "+880-1234-567895",
      office: "Graduate Research Lab, BRACU Campus", 
      profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      researchInterests: ["IoT", "Power System Automation", "Edge Computing"],
      qualifications: [
        "MSc in Computer Science, BRAC University",
        "BSc in Electrical Engineering, BUET, Bangladesh"
      ],
      experience: "3+ years in IoT-Power Systems Research",
      publications: 8,
      biography: "Eng. Tanzir Rahman focuses on IoT applications in power system automation and edge computing solutions."
    }
  ]
};