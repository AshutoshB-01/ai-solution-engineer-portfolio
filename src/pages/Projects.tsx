import { Navbar } from '@/components/Navbar';
import { ProjectCard } from '@/components/ProjectCard';
import { FloatingShapes } from '@/components/FloatingShapes';

const projects = [
  {
    title: 'Edge AI Analytics Platform',
    subtitle: 'Computer Vision at Scale',
    description: 'Real-time analytics platform deployed across 13,000+ edge devices supporting 10,000+ ATMs and 2,000+ retail stores. Includes compliance monitoring, customer behavior analysis, and operational intelligence.',
    tags: ['YOLO', 'OpenCV', 'Edge Computing', 'Raspberry Pi', 'NVIDIA Jetson'],
  },
  {
    title: 'Tarsyer VPN',
    subtitle: 'P2P Orchestration Platform',
    description: 'Nebula-based P2P orchestration platform enabling secure remote access and bandwidth-efficient communication for distributed devices. Reduced infrastructure costs by ~$3K/year.',
    tags: ['Nebula', 'P2P Networking', 'Security', 'DevOps'],
  },
  {
    title: 'High-Speed OCR System',
    subtitle: 'Industrial Computer Vision',
    description: 'High-accuracy OCR systems for industrial conveyor belts and machine odometers operating under variable lighting conditions and high speeds.',
    tags: ['OCR', 'TensorFlow', 'Computer Vision', 'Industrial IoT'],
  },
  {
    title: 'Auto-Labeling Tool',
    subtitle: 'ML Pipeline Optimization',
    description: 'CPU-based auto-labeling tool using SAM (Segment Anything Model). Reduced annotation effort by 80% and accelerated model iteration cycles significantly.',
    tags: ['SAM', 'Python', 'ML Pipeline', 'Annotation'],
  },
  {
    title: 'One-Click Diagnostics',
    subtitle: 'Operational Efficiency',
    description: 'System health diagnostics platform that achieved ~9× operational efficiency improvement, cutting health checks from ~15 min to ~2 min.',
    tags: ['Monitoring', 'FastAPI', 'Dashboard', 'Automation'],
  },
  {
    title: 'AI Media Optimization',
    subtitle: 'Camera-Based Analytics',
    description: 'AI-driven media optimization system using camera-based analytics. Demonstrated via live enterprise client demos with real-time insights.',
    tags: ['Deep Learning', 'Analytics', 'Real-time', 'Enterprise'],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-20 relative overflow-hidden">
        <FloatingShapes />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Production-grade AI systems deployed across multiple continents and industries
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                {...project}
                delay={i * 100}
              />
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              🔒 Click "Technical Deep Dive" on any project for detailed architecture and implementation details
            </p>
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
