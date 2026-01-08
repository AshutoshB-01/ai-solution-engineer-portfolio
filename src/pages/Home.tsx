import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { FloatingShapes } from '@/components/FloatingShapes';
import { StatCounter } from '@/components/StatCounter';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <FloatingShapes />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm mb-6 animate-slide-up">
              <MapPin className="h-4 w-4 text-primary" />
              Pune, India
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up stagger-1">
              Hi, I'm{' '}
              <span className="gradient-text">Ashutosh Bhagwat</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up stagger-2">
              Senior AI Engineer & Team Lead
            </p>

            {/* Description */}
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8 animate-slide-up stagger-3 leading-relaxed">
              4.7+ years building and scaling production-grade AI systems across edge devices, 
              backend infrastructure, and analytics platforms. Deployed Computer Vision platforms 
              across 13,000+ edge devices spanning 11+ countries.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-4">
              <Button asChild size="lg" className="gradient-purple text-primary-foreground px-8 glow-primary">
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <a href="https://cal.com/ashutosh-bhagwat-gxcjxv/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Call
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value={4} suffix="+" label="Years Experience" />
            <StatCounter value={13000} suffix="+" label="Edge Devices Deployed" />
            <StatCounter value={11} suffix="+" label="Countries" />
            <StatCounter value={10} suffix="+" label="Team Members Led" />
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technologies & <span className="gradient-text">Expertise</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'TensorFlow', 'PyTorch', 'YOLO', 'OpenCV', 'NCNN', 'SAM',
              'Raspberry Pi', 'NVIDIA Jetson', 'Docker', 'Kubernetes',
              'FastAPI', 'MySQL', 'MongoDB', 'Redis', 'AWS', 'GCP', 'Azure'
            ].map((tech, i) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 cursor-default"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Looking for an AI Engineer who can take your project from concept to production at scale?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gradient-purple text-primary-foreground">
                <Link to="/contact">
                  Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Ashutosh Bhagwat. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
