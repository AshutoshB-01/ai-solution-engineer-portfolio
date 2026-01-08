import { Navbar } from '@/components/Navbar';
import { FloatingShapes } from '@/components/FloatingShapes';
import { Button } from '@/components/ui/button';
import { Mail, Calendar, Linkedin, Github, Download, MapPin } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:mr.ashutoshbhagwat@gmail.com',
    label: 'mr.ashutoshbhagwat@gmail.com',
  },
  {
    name: 'Book a Call',
    icon: Calendar,
    href: 'https://cal.com/ashutosh-bhagwat-gxcjxv/30min',
    label: 'Schedule 30-min meeting',
    primary: true,
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/ashutosh-bhagwat',
    label: 'Connect on LinkedIn',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/ashutosh-bhagwat',
    label: 'View repositories',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-20 relative overflow-hidden min-h-screen flex items-center">
        <FloatingShapes />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-muted-foreground mb-12 animate-slide-up stagger-1">
              Interested in working together or discussing AI solutions? I'd love to hear from you.
            </p>

            {/* Location */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm mb-12 animate-slide-up stagger-2">
              <MapPin className="h-4 w-4 text-primary" />
              Pune, India
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {socialLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={`glass-card rounded-xl p-6 hover-lift text-left group animate-slide-up ${
                    link.primary ? 'ring-2 ring-primary' : ''
                  }`}
                  style={{ animationDelay: `${(i + 3) * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    link.primary ? 'gradient-purple' : 'bg-secondary'
                  }`}>
                    <link.icon className={`h-6 w-6 ${link.primary ? 'text-primary-foreground' : 'text-primary'}`} />
                  </div>
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <div className="glass-card rounded-2xl p-8 animate-slide-up stagger-5">
              <h2 className="text-2xl font-bold mb-4">
                Download My <span className="gradient-text">Resume</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Get a comprehensive overview of my experience, skills, and achievements
              </p>
              <Button size="lg" className="gradient-purple text-primary-foreground px-8 glow-primary">
                <Download className="mr-2 h-5 w-5" />
                Download Resume (PDF)
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold gradient-text">4.7+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold gradient-text">11+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold gradient-text">13K+</div>
                <div className="text-sm text-muted-foreground">Devices Deployed</div>
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
