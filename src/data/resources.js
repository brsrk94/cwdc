export const resourceData = {
    cybersecurity: {
        title: "Cybersecurity",
        description: "Master the art of protecting and penetrating digital fortresses",
        topics: {
            blueteam: {
                title: "Blue Team - Defense",
                description: "Learn defensive security, incident response, threat hunting, and security operations.",
                skills: [
                    "Security Monitoring & SIEM",
                    "Incident Response",
                    "Threat Hunting",
                    "Network Security",
                    "Endpoint Protection",
                    "Log Analysis",
                    "Forensics",
                    "Security Architecture",
                    "Vulnerability Management",
                    "Security Automation"
                ],
                jobs: [
                    "Security Operations Center (SOC) Analyst",
                    "Incident Response Analyst",
                    "Threat Hunter",
                    "Security Engineer",
                    "Forensics Analyst",
                    "Security Architect",
                    "Compliance Analyst",
                    "Security Consultant"
                ],
                resources: {
                    books: [
                        {
                            title: "Blue Team Handbook: Incident Response Edition",
                            author: "Don Murdoch",
                            description: "A condensed field guide for the Cyber Security Incident Responder",
                            url: "https://archive.org/details/blueteamhandbook0000murd/mode/2up"
                        },
                        {
                            title: "The Practice of Network Security Monitoring",
                            author: "Richard Bejtlich",
                            description: "Understanding incident detection and response",
                            url: "https://someplace-else.neocities.org/books/The%20Practice%20of%20Network%20Security%20Monitoring.pdf"
                        },
                        {
                            title: "Applied Incident Response",
                            author: "Steve Anson",
                            description: "Comprehensive guide to incident response",
                            url: "https://www.wiley.com/en-us/Applied+Incident+Response-p-9781119560265"
                        }
                    ],
                    videos: [
                        {
                            title: "SANS Blue Team Operations",
                            creator: "SANS Institute",
                            description: "Comprehensive video series on defensive security operations",
                            url: "https://www.sans.org/blue-team/"
                        },
                        {
                            title: "Security Blue Team Training",
                            creator: "Security Blue Team",
                            description: "Free and paid courses on defensive security",
                            url: "https://securityblue.team/"
                        },
                        {
                            title: "Blue Team Essentials",
                            creator: "Day Cyberwox",
                            description: "Essential skills for Blue Team operations",
                            url: "https://youtube.com/playlist?list=PLBf0hzazHTGNcIS_dHjM2NgNUFMW1EZFx&si=l-mlV4N_FbZ72gXG"
                        },
                        {
                            title: "Security Analyst Training",
                            creator: "Simplilearn",
                            description: "Complete course for Security Analysts",
                            url: "https://youtube.com/playlist?list=PLKHIhZJiQ5Al-LFaJlia0wmhBE9BzcD4V&si=oaU_ARucN_sXv_bT"
                        },
                        {
                            title: "Threat Hunting Fundamentals",
                            creator: "Various",
                            description: "Learn proactive threat hunting techniques",
                            url: "https://youtube.com/playlist?list=PLjWEV7pmvSa5UTZlsWp5wRnURNbeMS-fu&si=zuvQFQxOyyrJ1VMZ"
                        }
                    ],
                    docs: [
                        {
                            title: "NIST Cybersecurity Framework",
                            description: "Official framework for improving critical infrastructure cybersecurity",
                            url: "https://www.nist.gov/cyberframework"
                        },
                        {
                            title: "MITRE ATT&CK Framework",
                            description: "Knowledge base of adversary tactics and techniques",
                            url: "https://attack.mitre.org/"
                        },
                        {
                            title: "Blue Team Notes",
                            description: "Community-driven blue team knowledge base",
                            url: "https://github.com/Purp1eW0lf/Blue-Team-Notes"
                        }
                    ]
                }
            },
            redteam: {
                title: "Red Team - Offense",
                description: "Master offensive security, penetration testing, and ethical hacking.",
                skills: [
                    "Penetration Testing",
                    "Web Application Security",
                    "Network Exploitation",
                    "Social Engineering",
                    "Exploit Development",
                    "Post-Exploitation",
                    "Active Directory Attacks",
                    "Wireless Security",
                    "Mobile Security",
                    "Malware Analysis"
                ],
                jobs: [
                    "Penetration Tester",
                    "Red Team Operator",
                    "Security Researcher",
                    "Exploit Developer",
                    "Bug Bounty Hunter",
                    "Offensive Security Consultant",
                    "Application Security Tester",
                    "Wireless Security Specialist"
                ],
                resources: {
                    books: [
                        {
                            title: "The Hacker Playbook 3",
                            author: "Peter Kim",
                            description: "Practical guide to penetration testing",
                            url: "https://cdn.bookey.app/files/pdf/book/en/the-hacker-playbook-3.pdf"
                        },
                        {
                            title: "Red Team Field Manual (RTFM)",
                            author: "Ben Clark",
                            description: "Quick reference guide for red team operations",
                            url: "https://kolegite.com/EE_library/books_and_lectures/%D0%9A%D0%B8%D0%B1%D0%B5%D1%80%D1%81%D0%B8%D0%B3%D1%83%D1%80%D0%BD%D0%BE%D1%81%D1%82/RTFM%20Red%20Team%20Field%20Manual%20v2%20--%20Ben%20Clark%20%26%20Nick%20Downer.pdf"
                        },
                        {
                            title: "Penetration Testing: A Hands-On Introduction to Hacking",
                            author: "Georgia Weidman",
                            description: "Comprehensive introduction to penetration testing",
                            url: "https://repo.zenk-security.com/Magazine%20E-book/Penetration%20Testing%20-%20A%20hands-on%20introduction%20to%20Hacking.pdf"
                        }
                    ],
                    videos: [
                        {
                            title: "IppSec - HackTheBox Walkthroughs",
                            creator: "IppSec",
                            description: "Detailed penetration testing walkthroughs",
                            url: "https://www.youtube.com/@ippsec"
                        },
                        {
                            title: "The Cyber Mentor",
                            creator: "Heath Adams",
                            description: "Practical ethical hacking courses",
                            url: "https://www.youtube.com/@TCMSecurityAcademy"
                        },
                        {
                            title: "John Hammond",
                            creator: "John Hammond",
                            description: "CTF walkthroughs and security tutorials",
                            url: "https://www.youtube.com/@_JohnHammond"
                        }
                    ],
                    docs: [
                        {
                            title: "OWASP Testing Guide",
                            description: "Comprehensive web application security testing guide",
                            url: "https://owasp.org/www-project-web-security-testing-guide/"
                        },
                        {
                            title: "HackTricks",
                            description: "Collection of hacking tricks and techniques",
                            url: "https://book.hacktricks.xyz/"
                        },
                        {
                            title: "PayloadsAllTheThings",
                            description: "List of useful payloads and bypasses",
                            url: "https://github.com/swisskyrepo/PayloadsAllTheThings"
                        }
                    ]
                }
            },
            purpleteam: {
                title: "Purple Team - Integration",
                description: "Bridge the gap between offense and defense.",
                skills: [
                    "Threat Emulation",
                    "Security Testing & Validation",
                    "Detection Engineering",
                    "Security Metrics & KPIs",
                    "Adversary Simulation",
                    "Security Tool Integration",
                    "Tabletop Exercises",
                    "Security Automation",
                    "Threat Intelligence",
                    "Security Program Management"
                ],
                jobs: [
                    "Purple Team Lead",
                    "Detection Engineer",
                    "Security Validation Specialist",
                    "Adversary Emulation Specialist",
                    "Security Operations Manager",
                    "Threat Intelligence Analyst",
                    "Security Program Manager"
                ],
                resources: {
                    books: [
                        {
                            title: "Purple Team Strategies",
                            author: "Various Authors",
                            description: "Integrating offensive and defensive security",
                            url: "https://www.attackiq.com/wp-content/uploads/2021/07/9781119828976.pdf"
                        },
                        {
                            title: "Threat Modeling: Designing for Security",
                            author: "Adam Shostack",
                            description: "Comprehensive guide to threat modeling",
                            url: "https://public.magendanz.com/Temp/Threat%20Modeling%20-%20Shostack,%20Adam.pdf"
                        }
                    ],
                    videos: [
                        {
                            title: "Purple Team Exercises",
                            creator: "Various",
                            description: "Learn how to conduct purple team exercises",
                            url: "https://github.com/DefensiveOrigins/PurpleTeam"
                        },
                        {
                            title: "Detection Engineering",
                            creator: "Various",
                            description: "Building effective detection rules",
                            url: "https://logz.io/blog/detection-engineering-guide/"
                        }
                    ],
                    docs: [
                        {
                            title: "MITRE Caldera",
                            description: "Automated adversary emulation platform",
                            url: "https://github.com/mitre/caldera"
                        },
                        {
                            title: "Atomic Red Team",
                            description: "Library of tests mapped to MITRE ATT&CK",
                            url: "https://github.com/redcanaryco/atomic-red-team"
                        },
                        {
                            title: "Detection Lab",
                            description: "Build a lab to test security monitoring",
                            url: "https://github.com/clong/DetectionLab"
                        }
                    ]
                }
            },
            cryptography: {
                title: "Cryptography",
                description: "Master cryptographic algorithms and code-breaking.",
                resources: {
                    websites: [
                        {
                            title: "CryptoHack",
                            description: "Interactive platform for learning modern cryptography",
                            url: "https://cryptohack.org/"
                        },
                        {
                            title: "Cryptopals Crypto Challenges",
                            description: "Practical cryptography challenges",
                            url: "https://cryptopals.com/"
                        },
                        {
                            title: "Crypto101",
                            description: "Introductory course on cryptography",
                            url: "https://www.crypto101.io/"
                        }
                    ],
                    tools: [
                        {
                            title: "CyberChef",
                            description: "Web app for encryption, encoding, compression and data analysis",
                            url: "https://gchq.github.io/CyberChef/"
                        },
                        {
                            title: "RsaCtfTool",
                            description: "RSA attack tool for CTF",
                            url: "https://github.com/RsaCtfTool/RsaCtfTool"
                        }
                    ],
                    docs: [
                        {
                            title: "Practical Cryptography for Developers",
                            description: "Modern cryptography guide",
                            url: "https://cryptobook.nakov.com/"
                        }
                    ]
                }
            },
            binaryexploitation: {
                title: "Binary Exploitation",
                description: "Learn to exploit binary vulnerabilities.",
                resources: {
                    websites: [
                        {
                            title: "pwn.college",
                            description: "Education platform for learning binary exploitation",
                            url: "https://pwn.college/"
                        },
                        {
                            title: "Exploit Education",
                            description: "Learn about software vulnerabilities",
                            url: "https://exploit.education/"
                        },
                        {
                            title: "ROP Emporium",
                            description: "Learn return-oriented programming",
                            url: "https://ropemporium.com/"
                        }
                    ],
                    tools: [
                        {
                            title: "pwntools",
                            description: "CTF framework and exploit development library",
                            url: "https://github.com/Gallopsled/pwntools"
                        },
                        {
                            title: "GDB with PEDA/GEF/pwndbg",
                            description: "Enhanced debugging for exploit development",
                            url: "https://github.com/longld/peda"
                        }
                    ],
                    docs: [
                        {
                            title: "Nightmare",
                            description: "Intro to binary exploitation course",
                            url: "https://guyinatuxedo.github.io/"
                        }
                    ]
                }
            },
            reverseengineering: {
                title: "Reverse Engineering",
                description: "Analyze and understand compiled programs.",
                resources: {
                    websites: [
                        {
                            title: "Crackmes.one",
                            description: "Platform for practicing reverse engineering",
                            url: "https://crackmes.one/"
                        },
                        {
                            title: "Reverse Engineering for Beginners",
                            description: "Free book on reverse engineering",
                            url: "https://beginners.re/"
                        },
                        {
                            title: "MalwareTech Tutorials",
                            description: "Reverse engineering and malware analysis",
                            url: "https://www.malwaretech.com/"
                        }
                    ],
                    tools: [
                        {
                            title: "Ghidra",
                            description: "NSA's software reverse engineering framework",
                            url: "https://ghidra-sre.org/"
                        },
                        {
                            title: "IDA Free",
                            description: "Interactive disassembler",
                            url: "https://hex-rays.com/ida-free/"
                        },
                        {
                            title: "Binary Ninja",
                            description: "Reverse engineering platform",
                            url: "https://binary.ninja/"
                        }
                    ],
                    docs: [
                        {
                            title: "Practical Malware Analysis",
                            description: "Guide to analyzing malicious software",
                            url: "https://www.kea.nu/files/textbooks/humblesec/practicalmalwareanalysis.pdf"
                        }
                    ]
                }
            },
            forensics: {
                title: "Forensics",
                description: "Investigate digital artifacts and recover hidden data.",
                resources: {
                    websites: [
                        {
                            title: "Digital Forensics Discord",
                            description: "Community for digital forensics",
                            url: "https://aboutdfir.com/"
                        },
                        {
                            title: "Forensics Wiki",
                            description: "Comprehensive forensics knowledge base",
                            url: "https://forensicswiki.xyz/"
                        },
                        {
                            title: "DFIR Training",
                            description: "Digital forensics and incident response resources",
                            url: "https://www.dfir.training/"
                        }
                    ],
                    tools: [
                        {
                            title: "Autopsy",
                            description: "Digital forensics platform",
                            url: "https://www.autopsy.com/"
                        },
                        {
                            title: "Volatility",
                            description: "Memory forensics framework",
                            url: "https://www.volatilityfoundation.org/"
                        },
                        {
                            title: "Wireshark",
                            description: "Network protocol analyzer",
                            url: "https://www.wireshark.org/"
                        }
                    ],
                    docs: [
                        {
                            title: "File Signatures Table",
                            description: "Database of file format signatures",
                            url: "https://www.garykessler.net/library/file_sigs.html"
                        }
                    ]
                }
            },
            webexploitation: {
                title: "Web Exploitation",
                description: "Exploit web application vulnerabilities.",
                resources: {
                    websites: [
                        {
                            title: "PortSwigger Web Security Academy",
                            description: "Free online web security training",
                            url: "https://portswigger.net/web-security"
                        },
                        {
                            title: "HackTheBox",
                            description: "Penetration testing labs",
                            url: "https://www.hackthebox.com/"
                        },
                        {
                            title: "PentesterLab",
                            description: "Learn web penetration testing",
                            url: "https://pentesterlab.com/"
                        }
                    ],
                    tools: [
                        {
                            title: "Burp Suite",
                            description: "Web application security testing",
                            url: "https://portswigger.net/burp"
                        },
                        {
                            title: "OWASP ZAP",
                            description: "Web app security scanner",
                            url: "https://www.zaproxy.org/"
                        },
                        {
                            title: "sqlmap",
                            description: "Automatic SQL injection tool",
                            url: "https://sqlmap.org/"
                        }
                    ],
                    docs: [
                        {
                            title: "OWASP Top 10",
                            description: "Top web application security risks",
                            url: "https://owasp.org/www-project-top-ten/"
                        },
                        {
                            title: "PayloadsAllTheThings",
                            description: "Web exploitation payloads",
                            url: "https://github.com/swisskyrepo/PayloadsAllTheThings"
                        }
                    ]
                }
            },
            osint: {
                title: "OSINT",
                description: "Master open-source intelligence gathering techniques.",
                resources: {
                    websites: [
                        {
                            title: "OSINT Framework",
                            description: "Collection of OSINT tools and resources",
                            url: "https://osintframework.com/"
                        },
                        {
                            title: "Bellingcat's Online Investigation Toolkit",
                            description: "Tools for online investigations",
                            url: "https://bit.ly/bcattools"
                        },
                        {
                            title: "IntelTechniques",
                            description: "OSINT tools and training",
                            url: "https://inteltechniques.com/"
                        }
                    ],
                    tools: [
                        {
                            title: "Maltego",
                            description: "Link analysis and data mining",
                            url: "https://www.maltego.com/"
                        },
                        {
                            title: "theHarvester",
                            description: "E-mail, subdomain and people names harvester",
                            url: "https://github.com/laramies/theHarvester"
                        },
                        {
                            title: "Shodan",
                            description: "Search engine for Internet-connected devices",
                            url: "https://www.shodan.io/"
                        }
                    ],
                    docs: [
                        {
                            title: "Awesome OSINT",
                            description: "Curated list of OSINT resources",
                            url: "https://github.com/jivoi/awesome-osint"
                        },
                        {
                            title: "OSINT Techniques",
                            description: "Resources for online investigations",
                            url: "https://www.osinttechniques.com/"
                        }
                    ]
                }
            }
        }
    },
    webdev: {
        title: "Web Development",
        description: "Build the digital experiences of tomorrow",
        topics: {
            frontend: {
                title: "Frontend Development",
                description: "Master the art of creating beautiful, responsive, and interactive user interfaces.",
                skills: [
                    "HTML5 & Semantic Markup",
                    "CSS3 & Responsive Design",
                    "JavaScript (ES6+)",
                    "React / Vue / Angular",
                    "TypeScript",
                    "State Management",
                    "Web Performance",
                    "Accessibility (a11y)",
                    "CSS Frameworks",
                    "Build Tools (Webpack, Vite)"
                ],
                jobs: [
                    "Frontend Developer",
                    "UI Developer",
                    "React Developer",
                    "Vue Developer",
                    "Web Designer",
                    "UX Engineer",
                    "Frontend Architect"
                ],
                resources: {
                    books: [
                        {
                            title: "Eloquent JavaScript",
                            author: "Marijn Haverbeke",
                            description: "Modern introduction to programming and JavaScript",
                            url: "https://eloquentjavascript.net/"
                        },
                        {
                            title: "You Don't Know JS",
                            author: "Kyle Simpson",
                            description: "Deep dive into JavaScript mechanics",
                            url: "https://github.com/getify/You-Dont-Know-JS"
                        },
                        {
                            title: "CSS Secrets",
                            author: "Lea Verou",
                            description: "Better solutions to everyday web design problems",
                            url: "http://repo.darmajaya.ac.id/4018/1/CSS%20Secrets_%20Better%20Solutions%20to%20Everyday%20Web%20Design%20Problems%20%28%20PDFDrive%20%29.pdf"
                        }
                    ],
                    videos: [
                        {
                            title: "Traversy Media",
                            creator: "Brad Traversy",
                            description: "Web development tutorials and crash courses",
                            url: "https://www.youtube.com/@TraversyMedia"
                        },
                        {
                            title: "Kevin Powell",
                            creator: "Kevin Powell",
                            description: "CSS tutorials and best practices",
                            url: "https://www.youtube.com/@KevinPowell"
                        },
                        {
                            title: "Web Dev Simplified",
                            creator: "Kyle Cook",
                            description: "Simplified web development concepts",
                            url: "https://www.youtube.com/@WebDevSimplified"
                        }
                    ],
                    docs: [
                        {
                            title: "MDN Web Docs",
                            description: "Comprehensive web development documentation",
                            url: "https://developer.mozilla.org/"
                        },
                        {
                            title: "React Documentation",
                            description: "Official React documentation",
                            url: "https://react.dev/"
                        },
                        {
                            title: "CSS-Tricks",
                            description: "Articles and guides on CSS and frontend",
                            url: "https://css-tricks.com/"
                        }
                    ]
                }
            },
            backend: {
                title: "Backend Development",
                description: "Build robust server-side applications, APIs, and database systems.",
                skills: [
                    "Node.js / Python / Java",
                    "RESTful API Design",
                    "GraphQL",
                    "Database Design (SQL/NoSQL)",
                    "Authentication & Authorization",
                    "Server Architecture",
                    "Microservices",
                    "Caching Strategies",
                    "Message Queues",
                    "API Security"
                ],
                jobs: [
                    "Backend Developer",
                    "API Developer",
                    "Database Administrator",
                    "DevOps Engineer",
                    "Systems Architect",
                    "Cloud Engineer",
                    "Backend Architect"
                ],
                resources: {
                    books: [
                        {
                            title: "Designing Data-Intensive Applications",
                            author: "Martin Kleppmann",
                            description: "The big ideas behind reliable, scalable systems",
                            url: "https://unidel.edu.ng/focelibrary/books/Designing%20Data-Intensive%20Applications%20The%20Big%20Ideas%20Behind%20Reliable,%20Scalable,%20and%20Maintainable%20Systems%20by%20Martin%20Kleppmann%20(z-lib.org).pdf"
                        },
                        {
                            title: "Clean Code",
                            author: "Robert C. Martin",
                            description: "A handbook of agile software craftsmanship",
                            url: "https://ptgmedia.pearsoncmg.com/images/9780132350884/samplepages/9780132350884.pdf"
                        },
                        {
                            title: "System Design Interview",
                            author: "Alex Xu",
                            description: "An insider's guide to system design",
                            url: "https://bytes.usc.edu/~saty/courses/docs/data/SystemDesignInterview.pdf"
                        }
                    ],
                    videos: [
                        {
                            title: "Hussein Nasser",
                            creator: "Hussein Nasser",
                            description: "Backend engineering and system design",
                            url: "https://www.youtube.com/@hnasr"
                        },
                        {
                            title: "Fireship",
                            creator: "Jeff Delaney",
                            description: "Quick backend and full-stack tutorials",
                            url: "https://www.youtube.com/@Fireship"
                        }
                    ],
                    docs: [
                        {
                            title: "Node.js Documentation",
                            description: "Official Node.js documentation",
                            url: "https://nodejs.org/docs/"
                        },
                        {
                            title: "PostgreSQL Documentation",
                            description: "Comprehensive PostgreSQL guide",
                            url: "https://www.postgresql.org/docs/"
                        },
                        {
                            title: "System Design Primer",
                            description: "Learn how to design large-scale systems",
                            url: "https://github.com/donnemartin/system-design-primer"
                        }
                    ]
                }
            },
            fullstack: {
                title: "Full-Stack Development",
                description: "Master both frontend and backend to build complete web applications.",
                skills: [
                    "Frontend Technologies",
                    "Backend Technologies",
                    "Database Management",
                    "DevOps & Deployment",
                    "Version Control (Git)",
                    "Testing & QA",
                    "CI/CD Pipelines",
                    "Cloud Platforms (AWS/Azure/GCP)",
                    "Containerization (Docker)",
                    "Project Management"
                ],
                jobs: [
                    "Full-Stack Developer",
                    "Software Engineer",
                    "Technical Lead",
                    "Startup CTO",
                    "Solutions Architect",
                    "Product Engineer"
                ],
                resources: {
                    books: [
                        {
                            title: "Full Stack JavaScript",
                            author: "Azat Mardan",
                            description: "Build complete applications with JavaScript",
                            url: "https://pepa.holla.cz/wp-content/uploads/2016/08/Full-Stack-JavaScript.pdf"
                        },
                        {
                            title: "The Pragmatic Programmer",
                            author: "David Thomas & Andrew Hunt",
                            description: "Your journey to mastery",
                            url: "https://ptgmedia.pearsoncmg.com/images/9780201616224/samplepages/020161622X.pdf"
                        }
                    ],
                    videos: [
                        {
                            title: "freeCodeCamp",
                            creator: "freeCodeCamp.org",
                            description: "Full-stack development courses",
                            url: "https://www.youtube.com/@freecodecamp"
                        },
                        {
                            title: "The Net Ninja",
                            creator: "Shaun Pelling",
                            description: "Full-stack tutorials and courses",
                            url: "https://www.youtube.com/@NetNinja"
                        }
                    ],
                    docs: [
                        {
                            title: "Full Stack Open",
                            description: "Deep dive into modern web development",
                            url: "https://fullstackopen.com/"
                        },
                        {
                            title: "The Odin Project",
                            description: "Free full-stack curriculum",
                            url: "https://www.theodinproject.com/"
                        },
                        {
                            title: "Roadmap.sh",
                            description: "Developer roadmaps and guides",
                            url: "https://roadmap.sh/"
                        }
                    ]
                }
            }
        }
    },
    datascience: {
        title: "Data Science",
        description: "Unlock insights from data and build intelligent systems",
        topics: {
            machinelearning: {
                title: "Machine Learning",
                description: "Learn to build models that learn from data and make predictions.",
                skills: [
                    "Supervised Learning",
                    "Unsupervised Learning",
                    "Feature Engineering",
                    "Model Evaluation",
                    "Scikit-learn",
                    "TensorFlow / PyTorch",
                    "Model Deployment",
                    "MLOps",
                    "Hyperparameter Tuning",
                    "Ensemble Methods"
                ],
                jobs: [
                    "Machine Learning Engineer",
                    "Data Scientist",
                    "ML Research Scientist",
                    "AI Engineer",
                    "MLOps Engineer",
                    "Applied Scientist"
                ],
                resources: {
                    books: [
                        {
                            title: "Hands-On Machine Learning",
                            author: "Aurélien Géron",
                            description: "Practical ML with Scikit-Learn, Keras, and TensorFlow",
                            url: "https://github.com/ageron/handson-ml3"
                        },
                        {
                            title: "Pattern Recognition and Machine Learning",
                            author: "Christopher Bishop",
                            description: "Comprehensive ML textbook",
                            url: "https://www.microsoft.com/en-us/research/people/cmbishop/prml-book/"
                        },
                        {
                            title: "The Hundred-Page Machine Learning Book",
                            author: "Andriy Burkov",
                            description: "Concise introduction to ML",
                            url: "http://themlbook.com/"
                        }
                    ],
                    videos: [
                        {
                            title: "Andrew Ng - Machine Learning",
                            creator: "Andrew Ng",
                            description: "Classic ML course from Stanford",
                            url: "https://www.youtube.com/results?search_query=andrew+ng+machine+learning"
                        },
                        {
                            title: "StatQuest",
                            creator: "Josh Starmer",
                            description: "ML and statistics explained clearly",
                            url: "https://www.youtube.com/@statquest"
                        },
                        {
                            title: "3Blue1Brown - Neural Networks",
                            creator: "Grant Sanderson",
                            description: "Visual explanation of neural networks",
                            url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi"
                        }
                    ],
                    docs: [
                        {
                            title: "Scikit-learn Documentation",
                            description: "Machine learning in Python",
                            url: "https://scikit-learn.org/"
                        },
                        {
                            title: "TensorFlow Documentation",
                            description: "End-to-end ML platform",
                            url: "https://www.tensorflow.org/"
                        },
                        {
                            title: "PyTorch Documentation",
                            description: "Deep learning framework",
                            url: "https://pytorch.org/docs/"
                        }
                    ]
                }
            },
            deeplearning: {
                title: "Deep Learning",
                description: "Master neural networks and deep learning architectures.",
                skills: [
                    "Neural Networks",
                    "Convolutional Neural Networks (CNN)",
                    "Recurrent Neural Networks (RNN)",
                    "Transformers",
                    "Transfer Learning",
                    "Computer Vision",
                    "Natural Language Processing",
                    "Generative Models (GANs, VAEs)",
                    "Reinforcement Learning",
                    "Model Optimization"
                ],
                jobs: [
                    "Deep Learning Engineer",
                    "Computer Vision Engineer",
                    "NLP Engineer",
                    "Research Scientist",
                    "AI Researcher",
                    "Applied ML Scientist"
                ],
                resources: {
                    books: [
                        {
                            title: "Deep Learning",
                            author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
                            description: "The definitive deep learning textbook",
                            url: "https://www.deeplearningbook.org/"
                        },
                        {
                            title: "Deep Learning with Python",
                            author: "François Chollet",
                            description: "Practical deep learning with Keras",
                            url: "https://github.com/fchollet/deep-learning-with-python-notebooks"
                        }
                    ],
                    videos: [
                        {
                            title: "Fast.ai - Practical Deep Learning",
                            creator: "Jeremy Howard",
                            description: "Top-down approach to deep learning",
                            url: "https://www.youtube.com/@howardjeremyp"
                        },
                        {
                            title: "Stanford CS231n",
                            creator: "Stanford University",
                            description: "Convolutional Neural Networks for Visual Recognition",
                            url: "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv"
                        }
                    ],
                    docs: [
                        {
                            title: "Papers With Code",
                            description: "Latest ML papers with code implementations",
                            url: "https://paperswithcode.com/"
                        },
                        {
                            title: "Hugging Face Documentation",
                            description: "Transformers and NLP models",
                            url: "https://huggingface.co/docs"
                        },
                        {
                            title: "Dive into Deep Learning",
                            description: "Interactive deep learning book",
                            url: "https://d2l.ai/"
                        }
                    ]
                }
            },
            llm: {
                title: "Large Language Models",
                description: "Explore the cutting edge of AI with large language models.",
                skills: [
                    "Transformer Architecture",
                    "Prompt Engineering",
                    "Fine-tuning LLMs",
                    "RAG (Retrieval Augmented Generation)",
                    "LangChain / LlamaIndex",
                    "Vector Databases",
                    "Model Quantization",
                    "LLM Evaluation",
                    "AI Safety & Alignment",
                    "Multimodal Models"
                ],
                jobs: [
                    "LLM Engineer",
                    "Prompt Engineer",
                    "AI Product Manager",
                    "Generative AI Engineer",
                    "AI Research Scientist",
                    "ML Platform Engineer"
                ],
                resources: {
                    books: [
                        {
                            title: "Build a Large Language Model (From Scratch)",
                            author: "Sebastian Raschka",
                            description: "Understanding LLMs by building one",
                            url: "https://github.com/rasbt/LLMs-from-scratch"
                        },
                        {
                            title: "Prompt Engineering Guide",
                            author: "DAIR.AI",
                            description: "Comprehensive guide to prompt engineering",
                            url: "https://github.com/dair-ai/Prompt-Engineering-Guide"
                        }
                    ],
                    videos: [
                        {
                            title: "Andrej Karpathy - Neural Networks",
                            creator: "Andrej Karpathy",
                            description: "Building neural networks from scratch",
                            url: "https://www.youtube.com/@AndrejKarpathy"
                        },
                        {
                            title: "Sam Witteveen - LLM Tutorials",
                            creator: "Sam Witteveen",
                            description: "Practical LLM applications",
                            url: "https://www.youtube.com/@samwitteveenai"
                        }
                    ],
                    docs: [
                        {
                            title: "OpenAI Documentation",
                            description: "GPT models and API documentation",
                            url: "https://platform.openai.com/docs"
                        },
                        {
                            title: "LangChain Documentation",
                            description: "Building applications with LLMs",
                            url: "https://python.langchain.com/"
                        },
                        {
                            title: "Awesome LLM",
                            description: "Curated list of LLM resources",
                            url: "https://github.com/Hannibal046/Awesome-LLM"
                        }
                    ]
                }
            },
            mathematics: {
                title: "Mathematics for ML/AI",
                description: "Master the mathematical foundations essential for machine learning.",
                skills: [
                    "Linear Algebra",
                    "Calculus & Optimization",
                    "Probability Theory",
                    "Statistics",
                    "Information Theory",
                    "Numerical Methods",
                    "Graph Theory",
                    "Convex Optimization",
                    "Bayesian Statistics",
                    "Matrix Calculus"
                ],
                jobs: [
                    "Research Scientist",
                    "Quantitative Analyst",
                    "Data Scientist",
                    "ML Researcher",
                    "Algorithm Engineer",
                    "Applied Mathematician"
                ],
                resources: {
                    books: [
                        {
                            title: "Mathematics for Machine Learning",
                            author: "Marc Peter Deisenroth et al.",
                            description: "Essential math for ML practitioners",
                            url: "https://mml-book.github.io/"
                        },
                        {
                            title: "The Elements of Statistical Learning",
                            author: "Hastie, Tibshirani, Friedman",
                            description: "Statistical learning theory",
                            url: "https://hastie.su.domains/ElemStatLearn/"
                        },
                        {
                            title: "Linear Algebra Done Right",
                            author: "Sheldon Axler",
                            description: "Modern approach to linear algebra",
                            url: "https://linear.axler.net/"
                        }
                    ],
                    videos: [
                        {
                            title: "3Blue1Brown - Essence of Linear Algebra",
                            creator: "Grant Sanderson",
                            description: "Visual introduction to linear algebra",
                            url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"
                        },
                        {
                            title: "MIT 18.06 - Linear Algebra",
                            creator: "Gilbert Strang",
                            description: "Classic linear algebra course",
                            url: "https://www.youtube.com/playlist?list=PL49CF3715CB9EF31D"
                        }
                    ],
                    docs: [
                        {
                            title: "Khan Academy - Statistics & Probability",
                            description: "Interactive statistics courses",
                            url: "https://www.khanacademy.org/math/statistics-probability"
                        },
                        {
                            title: "Seeing Theory",
                            description: "Visual introduction to probability and statistics",
                            url: "https://seeing-theory.brown.edu/"
                        },
                        {
                            title: "Immersive Linear Algebra",
                            description: "Interactive linear algebra textbook",
                            url: "http://immersivemath.com/ila/index.html"
                        }
                    ]
                }
            }
        }
    },
    competitive: {
        title: "Competitive Programming",
        description: "Master algorithms and problem-solving for competitive coding",
        topics: {
            datastructures: {
                title: "Data Structures",
                description: "Master fundamental and advanced data structures.",
                skills: [
                    "Arrays & Strings",
                    "Linked Lists",
                    "Stacks & Queues",
                    "Trees & Binary Search Trees",
                    "Heaps & Priority Queues",
                    "Hash Tables",
                    "Graphs",
                    "Tries",
                    "Segment Trees",
                    "Disjoint Set Union (DSU)"
                ],
                jobs: [
                    "Software Engineer",
                    "Competitive Programmer",
                    "Algorithm Engineer",
                    "Backend Developer",
                    "Systems Engineer",
                    "Technical Interviewer"
                ],
                resources: {
                    books: [
                        {
                            title: "Introduction to Algorithms (CLRS)",
                            author: "Cormen, Leiserson, Rivest, Stein",
                            description: "The definitive algorithms textbook",
                            url: "https://www.cs.mcgill.ca/~akroit/math/compsci/Cormen%20Introduction%20to%20Algorithms.pdf"
                        },
                        {
                            title: "Competitive Programming 4",
                            author: "Steven & Felix Halim",
                            description: "Comprehensive competitive programming guide",
                            url: "http://195.178.93.92:48082/sklad/bulletin/2024-3/zdrojaky/striz-cp4/obr/cp4-1.pdf"
                        },
                        {
                            title: "The Algorithm Design Manual",
                            author: "Steven Skiena",
                            description: "Practical guide to algorithm design",
                            url: "https://mrce.in/ebooks/Algorithm%20Design%20Manual%203rd%20Ed.pdf"
                        }
                    ],
                    videos: [
                        {
                            title: "Abdul Bari - Algorithms",
                            creator: "Abdul Bari",
                            description: "Clear explanations of algorithms and data structures",
                            url: "https://www.youtube.com/@abdul_bari"
                        },
                        {
                            title: "William Fiset - Data Structures",
                            creator: "William Fiset",
                            description: "Comprehensive data structures playlist",
                            url: "https://www.youtube.com/@WilliamFiset-videos"
                        }
                    ],
                    docs: [
                        {
                            title: "CP-Algorithms",
                            description: "Algorithms and data structures for competitive programming",
                            url: "https://cp-algorithms.com/"
                        },
                        {
                            title: "VisuAlgo",
                            description: "Visualizing data structures and algorithms",
                            url: "https://visualgo.net/"
                        },
                        {
                            title: "GeeksforGeeks - Data Structures",
                            description: "Comprehensive DS tutorials",
                            url: "https://www.geeksforgeeks.org/data-structures/"
                        }
                    ]
                }
            },
            algorithms: {
                title: "Algorithms",
                description: "Learn algorithmic techniques and problem-solving strategies.",
                skills: [
                    "Sorting & Searching",
                    "Dynamic Programming",
                    "Greedy Algorithms",
                    "Divide and Conquer",
                    "Graph Algorithms",
                    "String Algorithms",
                    "Number Theory",
                    "Computational Geometry",
                    "Bit Manipulation",
                    "Backtracking"
                ],
                jobs: [
                    "Software Engineer",
                    "Algorithm Engineer",
                    "Quantitative Developer",
                    "Research Engineer",
                    "Competitive Programmer",
                    "Technical Lead"
                ],
                resources: {
                    books: [
                        {
                            title: "Guide to Competitive Programming",
                            author: "Antti Laaksonen",
                            description: "Learning and improving algorithms",
                            url: "https://duoblogger.github.io/assets/pdf/memonvyftw/guide-t-cp.pdf"
                        },
                        {
                            title: "Algorithms",
                            author: "Robert Sedgewick & Kevin Wayne",
                            description: "Comprehensive algorithms textbook",
                            url: "https://mrce.in/ebooks/Algorithms%204th%20Ed.pdf"
                        }
                    ],
                    videos: [
                        {
                            title: "Errichto - Competitive Programming",
                            creator: "Kamil Dębowski",
                            description: "Advanced competitive programming techniques",
                            url: "https://www.youtube.com/@Errichto"
                        },
                        {
                            title: "Colin Galen",
                            creator: "Colin Galen",
                            description: "CP tutorials and contest analysis",
                            url: "https://www.youtube.com/@ColinGalen"
                        }
                    ],
                    docs: [
                        {
                            title: "Codeforces",
                            description: "Competitive programming platform and community",
                            url: "https://codeforces.com/"
                        },
                        {
                            title: "USACO Guide",
                            description: "Free collection of curated CP resources",
                            url: "https://usaco.guide/"
                        },
                        {
                            title: "Competitive Programmer's Handbook",
                            description: "Free online CP book",
                            url: "https://cses.fi/book/book.pdf"
                        }
                    ]
                }
            },
            problemsolving: {
                title: "Problem Solving",
                description: "Develop systematic approaches to solving complex algorithmic problems.",
                skills: [
                    "Problem Analysis",
                    "Pattern Recognition",
                    "Time Complexity Analysis",
                    "Space Complexity Analysis",
                    "Optimization Techniques",
                    "Edge Case Handling",
                    "Code Implementation",
                    "Debugging",
                    "Contest Strategy",
                    "Mathematical Thinking"
                ],
                jobs: [
                    "Software Engineer",
                    "Problem Setter",
                    "Technical Interviewer",
                    "Algorithm Researcher",
                    "Competitive Programming Coach"
                ],
                resources: {
                    books: [
                        {
                            title: "Cracking the Coding Interview",
                            author: "Gayle Laakmann McDowell",
                            description: "189 programming questions and solutions",
                            url: "http://www.r-5.org/files/books/computers/overviews/cs-tools/Gayle_Laakmann-Cracking_the_Coding_Interview-EN.pdf"
                        },
                        {
                            title: "Elements of Programming Interviews",
                            author: "Aziz, Lee, Prakash",
                            description: "The insiders' guide to coding interviews",
                            url: "https://elementsofprogramminginterviews.com/sample/epilight_cpp_new.pdf"
                        }
                    ],
                    videos: [
                        {
                            title: "NeetCode",
                            creator: "NeetCode",
                            description: "LeetCode problem explanations",
                            url: "https://www.youtube.com/@NeetCode"
                        },
                        {
                            title: "take U forward",
                            creator: "Striver",
                            description: "DSA and problem-solving tutorials",
                            url: "https://www.youtube.com/@takeUforward"
                        }
                    ],
                    docs: [
                        {
                            title: "LeetCode",
                            description: "Platform for practicing coding problems",
                            url: "https://leetcode.com/"
                        },
                        {
                            title: "HackerRank",
                            description: "Coding challenges and competitions",
                            url: "https://www.hackerrank.com/"
                        },
                        {
                            title: "AtCoder",
                            description: "Japanese competitive programming platform",
                            url: "https://atcoder.jp/"
                        }
                    ]
                }
            },
            contests: {
                title: "Contests & Practice",
                description: "Participate in coding contests and practice platforms.",
                skills: [
                    "Contest Strategy",
                    "Time Management",
                    "Fast Implementation",
                    "Stress Testing",
                    "Virtual Contests",
                    "Upsolving",
                    "Rating Improvement",
                    "Team Coordination (ICPC)",
                    "Problem Selection",
                    "Mental Preparation"
                ],
                jobs: [
                    "Software Engineer at Top Tech Companies",
                    "Competitive Programming Coach",
                    "Problem Setter",
                    "Contest Organizer",
                    "Algorithm Researcher"
                ],
                resources: {
                    books: [
                        {
                            title: "Competitive Programming Handbook",
                            author: "Antti Laaksonen",
                            description: "Free comprehensive CP guide",
                            url: "https://cses.fi/book/book.pdf"
                        }
                    ],
                    videos: [
                        {
                            title: "William Lin",
                            creator: "tmwilliamlin168",
                            description: "Contest screencasts and tutorials",
                            url: "https://www.youtube.com/@tmwilliamlin168"
                        },
                        {
                            title: "SecondThread",
                            creator: "SecondThread",
                            description: "Contest analysis and tutorials",
                            url: "https://www.youtube.com/@SecondThread"
                        }
                    ],
                    docs: [
                        {
                            title: "Codeforces",
                            description: "Regular contests and practice problems",
                            url: "https://codeforces.com/"
                        },
                        {
                            title: "CodeChef",
                            description: "Monthly contests and practice",
                            url: "https://www.codechef.com/"
                        },
                        {
                            title: "TopCoder",
                            description: "Algorithm competitions",
                            url: "https://www.topcoder.com/"
                        },
                        {
                            title: "Google Code Jam",
                            description: "Annual coding competition",
                            url: "https://codingcompetitions.withgoogle.com/"
                        }
                    ]
                }
            }
        }
    }
};
