import { Navbar } from '@/components/Navbar';
import { JourneyMilestone } from '@/components/JourneyMilestone';
import { FloatingShapes } from '@/components/FloatingShapes';

const milestones = [
  {
    year: '2000',
    title: 'Born in Pune',
    description: 'The journey begins in Pune, Maharashtra, India',
    type: 'education' as const,
    location: 'Pune, India',
  },
  {
    year: '2018',
    title: 'Started Engineering',
    description: 'Joined Government College of Engineering and Research, Pune for B.E. in Electronics & Telecommunication',
    type: 'education' as const,
    location: 'Pune, India',
    documentLink: '#', // Add your actual marksheet link
  },
  {
    year: '2020',
    title: 'e-Yantra IIT Bombay',
    description: 'Ranked 3rd nationally in robotics competition. Led 12+ member team for autonomous robotics.',
    type: 'achievement' as const,
    location: 'Mumbai, India',
  },
  {
    year: '2021',
    title: 'Joined Tarsyer as Intern',
    description: 'Started as AI Intern at Tarsyer Insights LLP, beginning the journey in production AI systems',
    type: 'work' as const,
    location: 'Pune, India',
  },
  {
    year: '2022',
    title: 'Graduated with Distinction',
    description: 'Completed B.E. with CGPA 8.88 (First Class with Distinction). Projects: Construct-o-Bot, Smart Home Automation, 3D Volumetric Estimation',
    type: 'education' as const,
    location: 'Pune, India',
    documentLink: '#', // Add your actual degree link
  },
  {
    year: '2022',
    title: 'Promoted to AI Solution Engineer',
    description: 'Promoted from intern to full-time AI Solution Engineer, owning end-to-end AI delivery',
    type: 'work' as const,
    location: 'Pune, India',
  },
  {
    year: '2023',
    title: 'Senior AI Engineer',
    description: 'Promoted to Senior AI Engineer. Led deployment across 13,000+ edge devices in 11+ countries.',
    type: 'work' as const,
    location: 'Pune, India',
  },
  {
    year: '2024',
    title: 'Team Lead',
    description: 'Now leading 10+ member engineering team. Owning client onboarding, deployment workflows, and operations.',
    type: 'work' as const,
    location: 'Pune, India',
  },
];

export default function Education() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-20 relative overflow-hidden">
        <FloatingShapes />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Journey</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From Pune to leading AI deployments across 11+ countries — follow the winding road of my career
            </p>
          </div>

          {/* Journey Road */}
          <div className="relative max-w-5xl mx-auto">
            {/* Winding road line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full" />

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <JourneyMilestone
                  key={i}
                  {...milestone}
                  isLeft={i % 2 === 1}
                  delay={i * 150}
                />
              ))}
            </div>

            {/* Road end marker */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-8">
              <div className="w-6 h-6 rounded-full bg-primary glow-primary animate-pulse" />
            </div>
          </div>

          {/* Education Details */}
          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Academic <span className="gradient-text">Background</span>
            </h2>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Government College of Engineering and Research
              </h3>
              <p className="text-muted-foreground mb-4">
                Bachelor of Engineering in Electronics and Telecommunication
              </p>
              <div className="flex flex-wrap gap-4 text-sm mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  CGPA: 8.88
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  First Class with Distinction
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  Jun 2018 – Jul 2022
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Signal and System', 'Artificial Intelligence', 'MicroControllers', 'DSA', 'Image Processing'].map(course => (
                      <span key={course} className="px-3 py-1 text-xs rounded-full border border-border">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Academic Projects</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Construct-o-Bot', 'Mastering 3D Blender', 'Smart Home Automation', '3D Volumetric Estimation'].map(project => (
                      <span key={project} className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Ashutosh Bhagwat. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
