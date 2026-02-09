import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FlaskConical, Users, Award, FolderKanban, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import devopsHero from "@/assets/devops-hero.jpg";
import kecCampus from "@/assets/kec-campus.jpg";
import guviOffice from "@/assets/guvi-office.jpg";

const highlights = [
  { icon: FlaskConical, title: "Hands-on Labs", desc: "Practice with real DevOps tools like Docker, Kubernetes, and CI/CD pipelines in guided lab sessions." },
  { icon: Users, title: "Industry Experts", desc: "Learn directly from GUVI's experienced trainers with deep industry knowledge from HCL." },
  { icon: Award, title: "Certification", desc: "Earn a recognized certificate upon successful completion of the DevOps training program." },
  { icon: FolderKanban, title: "Real-world Projects", desc: "Work on practical projects that simulate actual DevOps workflows used in the industry." },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={devopsHero} alt="DevOps Technology" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-background/20 backdrop-blur text-primary-foreground flex items-center justify-center font-bold text-lg border border-primary-foreground/20">
              KEC
            </div>
            <span className="text-primary-foreground/70 text-2xl font-light">×</span>
            <div className="h-12 w-12 rounded-xl bg-secondary/80 backdrop-blur text-secondary-foreground flex items-center justify-center font-bold text-sm border border-secondary-foreground/20">
              GUVI
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 max-w-3xl mx-auto leading-tight">
            DevOps Practical Teaching Program
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            A hands-on DevOps training program for KEC CSE students, powered by GUVI — an HCL company.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8">
            <Link to="/schedule">
              View Schedule <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">About the Event</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The Department of Computer Science & Engineering at <strong className="text-foreground">Kongu Engineering College (KEC)</strong> has
            partnered with <strong className="text-foreground">GUVI</strong>, an HCL company, to deliver an intensive, hands-on DevOps training
            program. This collaboration brings industry-grade training directly to KEC students, bridging the gap
            between academic learning and real-world DevOps practices.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Program Highlights</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <Card key={item.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* College & Company */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Our Partners</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden border-0 shadow-md">
            <img src={kecCampus} alt="KEC College Campus" className="h-56 w-full object-cover" />
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">KEC</div>
                <h3 className="text-lg font-semibold text-foreground">Kongu Engineering College</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kongu Engineering College, located in Perundurai, Erode, is one of the premier autonomous engineering institutions in Tamil Nadu. The CSE department is known for its strong academic curriculum and industry collaborations.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-0 shadow-md">
            <img src={guviOffice} alt="GUVI Office" className="h-56 w-full object-cover" />
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-md bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-xs">GUVI</div>
                <h3 className="text-lg font-semibold text-foreground">GUVI — An HCL Company</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                GUVI is a leading ed-tech platform backed by HCL, offering industry-relevant tech courses. With expertise in cloud computing, DevOps, and software development, GUVI brings real-world training to students.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
