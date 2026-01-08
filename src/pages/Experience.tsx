import { Navbar } from '@/components/Navbar';
import { TimelineBlock } from '@/components/TimelineBlock';
import { FloatingShapes } from '@/components/FloatingShapes';

const experiences = [
  {
    title: 'Team Lead (Senior AI Engineer)',
    company: 'Tarsyer Insights LLP',
    location: 'Pune, India',
    period: 'Jun 2021 – Present',
    points: [
      'Owned end-to-end AI solution delivery: problem understanding → solution design → data collection & model development → edge deployment → dashboards → real-time alerts',
      'Deployed real-time Computer Vision analytics for compliance monitoring, customer behavior analysis, and operational intelligence across enterprise environments',
      'Led deployment across 13,000+ edge devices supporting analytics for 10,000+ ATMs and 2,000+ retail stores',
      'Optimized deep learning models for edge hardware: 40 FPS on 2GB RAM, 75% model compression, 120ms → 35ms latency',
      'Built Tarsyer VPN, a Nebula-based P2P orchestration platform for secure remote access across distributed devices',
      'Led a 10+ member engineering team, owning client onboarding, deployment workflows, and post-deployment operations',
    ],
  },
  {
    title: '3D Modeling & Prototyping Core Member',
    company: 'Fortune3D',
    location: 'Pune, India',
    period: 'Jan 2021 – Jul 2021',
    points: [
      'Owned end-to-end 3D prototyping for client projects, delivering production-ready assets for early-stage product validation',
      'Enabled faster product iteration by supporting B2C and C2C use cases with custom 3D design solutions',
    ],
  },
  {
    title: 'Robotics Intern (Team Member)',
    company: 'eYantra IIT Bombay',
    location: 'Mumbai, India',
    period: 'Aug 2020 – Jul 2020',
    points: [
      'Ranked 3rd nationally in IIT Bombay\'s e-Yantra program by delivering a fully autonomous robotics system',
      'Contributed to open-source robotics education by developing instructional content using Blender for multi-domain applications',
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-20 relative overflow-hidden">
        <FloatingShapes />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From intern to Team Lead — 4.7+ years of building production-grade AI systems at scale
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

            <div className="space-y-16">
              {experiences.map((exp, i) => (
                <TimelineBlock
                  key={i}
                  {...exp}
                  isLeft={i % 2 === 1}
                  delay={i * 200}
                />
              ))}
            </div>
          </div>

          {/* Business Impact */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Business <span className="gradient-text">Impact</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Enabled data-driven decision-making by converting large-scale edge telemetry into real-time dashboards and operational KPIs',
                'Reduced infrastructure costs by ~$3K/year with P2P VPN architecture',
                'Achieved ~9× operational efficiency with one-click diagnostics (15 min → 2 min)',
                'Built AI-driven media optimization system with live enterprise client demos',
                'Delivered award-winning AI solutions: Catapult 4.0 (Winner), Retacon (Winner), Maruti Suzuki Innovation Lab (Top 7)',
                'Ensured production reliability across 13K+ live edge deployments',
              ].map((impact, i) => (
                <div key={i} className="glass-card rounded-lg p-4 flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-sm text-foreground/80">{impact}</span>
                </div>
              ))}
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
