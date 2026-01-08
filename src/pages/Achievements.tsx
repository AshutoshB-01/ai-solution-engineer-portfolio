import { Navbar } from '@/components/Navbar';
import { AchievementCard } from '@/components/AchievementCard';
import { FloatingShapes } from '@/components/FloatingShapes';
import { Badge } from '@/components/ui/badge';

const achievements = [
  {
    title: 'Catapult 4.0 - Winner',
    description: 'Award-winning AI solution recognized for innovation and impact in the AI/ML space.',
    date: '2023',
    certificateLink: '#',
  },
  {
    title: 'Retacon - Winner',
    description: 'First place in AI competition for developing cutting-edge computer vision solutions.',
    date: '2023',
    certificateLink: '#',
  },
  {
    title: 'Maruti Suzuki Innovation Lab - Top 7',
    description: 'Selected among top 7 teams nationally for innovative AI automotive solutions.',
    date: '2022',
    certificateLink: '#',
  },
  {
    title: 'e-Yantra IIT Bombay - Air 3',
    description: 'Ranked 3rd nationally in IIT Bombay\'s prestigious robotics competition. Led 12+ member team.',
    date: '2020',
    certificateLink: '#',
  },
  {
    title: 'Campus Ambassador',
    description: 'Selected as campus ambassador, representing the institution in various tech initiatives.',
    date: '2019-2022',
  },
];

const certifications = [
  {
    title: 'TensorFlow Developer',
    issuer: 'Google',
    date: '2022',
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'Coursera / deeplearning.ai',
    date: '2021',
  },
  {
    title: 'AWS Machine Learning',
    issuer: 'Amazon Web Services',
    date: '2022',
  },
  {
    title: 'Docker & Kubernetes',
    issuer: 'Linux Foundation',
    date: '2022',
  },
];

const skills = {
  'AI & CV': ['TensorFlow', 'PyTorch', 'YOLO', 'OpenCV', 'NCNN', 'SAM', 'ML Flow', 'AWS SageMaker', 'Object Detection & Tracking'],
  'Edge & Infra': ['Raspberry Pi', 'NVIDIA Jetson', 'Qualcomm', 'Docker', 'Kubernetes', 'CUDA', 'CI/CD', 'Git', 'GitHub Actions'],
  'Data & Backend': ['FastAPI', 'Flask', 'REST APIs', 'MySQL', 'MongoDB', 'Redis', 'Looker', 'Power BI', 'Tableau', 'Metabase', 'Streamlit'],
  'Systems & Security': ['GCP', 'Azure', 'P2P Networking', 'Nebula VPN', 'Secure Communication', 'Remote Device Orchestration'],
  'Leadership': ['Technical Ownership', 'People Management', 'Systems Thinking', 'Operational Execution', 'Ambiguity Handling'],
};

export default function Achievements() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-20 relative overflow-hidden">
        <FloatingShapes />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Achievements & <span className="gradient-text">Certifications</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Awards, recognitions, and professional certifications
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {achievements.map((achievement, i) => (
              <AchievementCard
                key={i}
                {...achievement}
                delay={i * 100}
              />
            ))}
          </div>

          {/* Certifications */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl font-bold text-center mb-8">
              Professional <span className="gradient-text">Certifications</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="glass-card rounded-xl p-5 hover-lift">
                  <h3 className="font-bold text-foreground mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <Badge variant="secondary" className="mt-2">{cert.date}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Technologies & <span className="gradient-text">Skills</span>
            </h2>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="glass-card rounded-xl p-6">
                  <h3 className="font-bold text-primary mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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
