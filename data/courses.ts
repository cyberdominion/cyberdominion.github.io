
export interface Lesson {
  title: string;
  duration: string;
}

export interface Section {
  title: string;
  lessons: string[];
}

export interface Instructor {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Cybersecurity' | 'Development' | 'Architecture';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  price: number;
  instructor: Instructor;
  objectives: string[];
  curriculum: Section[];
  image: string;
}

export const courses: Course[] = [
  {
    id: '1',
    slug: 'ethical-hacking-mastery',
    title: 'Ethical Hacking Mastery',
    shortDescription: 'Master the art of defensive security and ethical penetration testing.',
    fullDescription: 'Become a certified ethical hacker by learning how to think like a malicious actor. This course covers everything from network reconnaissance to advanced exploitation and post-exploitation techniques.',
    category: 'Cybersecurity',
    level: 'Advanced',
    duration: '12 Weeks',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    instructor: {
      name: 'Dr. Elias Vance',
      role: 'Senior Security Architect',
      bio: 'Former intelligence officer with 15 years of experience in offensive security and red teaming.',
      image: 'https://i.pravatar.cc/150?u=elias'
    },
    objectives: [
      'Perform advanced network penetration tests',
      'Understand and exploit web application vulnerabilities',
      'Master wireless security and mobile platform hacking',
      'Write professional security audit reports'
    ],
    curriculum: [
      {
        title: 'Phase 1: Reconnaissance',
        lessons: ['OSINT Techniques', 'Network Scanning', 'Vulnerability Assessment']
      },
      {
        title: 'Phase 2: Exploitation',
        lessons: ['Buffer Overflows', 'SQL Injection Deep Dive', 'Metasploit Fundamentals']
      }
    ]
  },
  {
    id: '2',
    slug: 'full-stack-sentinel',
    title: 'Full-Stack Sentinel',
    shortDescription: 'Build high-performance web applications with a security-first mindset.',
    fullDescription: 'Learn to build modern, scalable web applications using React, Node.js, and PostgreSQL, while integrating security at every layer of the development lifecycle.',
    category: 'Development',
    level: 'Intermediate',
    duration: '16 Weeks',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    instructor: {
      name: 'Sarah Chen',
      role: 'Lead Full-Stack Engineer',
      bio: 'Expert in distributed systems and secure software development lifecycle (S-SDLC).',
      image: 'https://i.pravatar.cc/150?u=sarah'
    },
    objectives: [
      'Architect scalable MERN/PERN stack applications',
      'Implement OAuth2 and JWT security patterns',
      'Deploy and manage secure cloud infrastructure',
      'Master CI/CD with automated security scanning'
    ],
    curriculum: [
      {
        title: 'Frontend Architecture',
        lessons: ['React Patterns', 'State Management Mastery', 'Performance Optimization']
      },
      {
        title: 'Backend Security',
        lessons: ['Node.js API Design', 'Database Hardening', 'Server-Side Rendering']
      }
    ]
  },
  {
    id: '3',
    slug: 'cloud-security-architect',
    title: 'Cloud Security Architect',
    shortDescription: 'Design and defend massive cloud infrastructures on AWS and Azure.',
    fullDescription: 'Deep dive into cloud-native security. Learn to design resilient systems that automatically detect and respond to threats in real-time.',
    category: 'Architecture',
    level: 'Advanced',
    duration: '10 Weeks',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    instructor: {
      name: 'Marcus Thorne',
      role: 'Cloud Security Lead',
      bio: 'AWS Certified Security Specialist with over a decade in enterprise cloud migration.',
      image: 'https://i.pravatar.cc/150?u=marcus'
    },
    objectives: [
      'Implement Zero Trust Architecture in the cloud',
      'Master IAM and resource-level permissions',
      'Configuring CloudWatch and GuardDuty for threat detection',
      'Automating infrastructure security with Terraform'
    ],
    curriculum: [
      {
        title: 'Cloud Fundamentals',
        lessons: ['Shared Responsibility Model', 'Virtual Private Clouds', 'Identity Management']
      },
      {
        title: 'Advanced Defense',
        lessons: ['DDoS Mitigation', 'KMS & Encryption at Rest', 'Cloud Compliance']
      }
    ]
  }
];
