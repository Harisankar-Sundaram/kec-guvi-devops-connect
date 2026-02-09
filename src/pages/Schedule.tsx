import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarDays, Clock, MapPin, GraduationCap, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import kecCampus from "@/assets/kec-campus.jpg";

const eventDetails = [
  { icon: CalendarDays, label: "Dates", value: "March 10 – March 21, 2025" },
  { icon: Clock, label: "Duration", value: "2 Weeks (10 Working Days)" },
  { icon: MapPin, label: "Venue", value: "KEC CSE Department Lab" },
  { icon: GraduationCap, label: "Eligibility", value: "KEC CSE Students (All Years)" },
];

const schedule = [
  { day: "Day 1", topic: "Introduction to DevOps", description: "DevOps philosophy, culture, lifecycle, and toolchain overview" },
  { day: "Day 2", topic: "Linux Fundamentals", description: "Essential Linux commands, shell scripting, file system navigation" },
  { day: "Day 3", topic: "Version Control with Git & GitHub", description: "Git workflow, branching, merging, pull requests, collaboration" },
  { day: "Day 4", topic: "Containerization with Docker", description: "Docker basics, images, containers, Dockerfile, Docker Compose" },
  { day: "Day 5", topic: "Advanced Docker & Networking", description: "Multi-container apps, Docker networking, volumes, and registry" },
  { day: "Day 6", topic: "Kubernetes Fundamentals", description: "Pods, services, deployments, namespaces, kubectl commands" },
  { day: "Day 7", topic: "Kubernetes in Practice", description: "Scaling, rolling updates, ConfigMaps, Secrets, Helm basics" },
  { day: "Day 8", topic: "CI/CD Pipelines", description: "Jenkins / GitHub Actions setup, automated build and test pipelines" },
  { day: "Day 9", topic: "Cloud Deployment & Monitoring", description: "Cloud platforms overview, deploying apps, logging, monitoring tools" },
  { day: "Day 10", topic: "Capstone Project & Certification", description: "End-to-end project deployment using full DevOps pipeline, certificate distribution" },
];

const trainers = [
  { name: "Trainer 1", role: "Senior DevOps Engineer", org: "GUVI / HCL" },
  { name: "Trainer 2", role: "Cloud & Infrastructure Specialist", org: "GUVI / HCL" },
  { name: "Trainer 3", role: "Full-Stack DevOps Trainer", org: "GUVI / HCL" },
];

const Schedule = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Event Details Banner */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-8">
            Schedule & Syllabus
          </h1>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {eventDetails.map((item) => (
              <Card key={item.label} className="border-0 bg-primary-foreground/10 backdrop-blur">
                <CardContent className="p-5 flex items-start gap-3">
                  <div className="rounded-lg bg-primary-foreground/20 p-2.5">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70 font-medium">{item.label}</p>
                    <p className="text-primary-foreground font-semibold">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule Table */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Class Schedule</h2>
        <Card className="border shadow-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-24 font-semibold">Day</TableHead>
                <TableHead className="font-semibold">Topic</TableHead>
                <TableHead className="hidden md:table-cell font-semibold">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedule.map((item) => (
                <TableRow key={item.day}>
                  <TableCell>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0 font-semibold">
                      {item.day}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium text-foreground">{item.topic}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground text-sm">{item.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Trainers */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Instructors & Trainers</h2>
          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {trainers.map((trainer) => (
              <Card key={trainer.name} className="border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/15">
                    <User className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{trainer.name}</h3>
                  <p className="text-sm text-muted-foreground">{trainer.role}</p>
                  <Badge variant="outline" className="mt-2 text-xs">{trainer.org}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Venue</h2>
        <Card className="overflow-hidden border-0 shadow-md max-w-3xl mx-auto">
          <img src={kecCampus} alt="KEC College Campus" className="h-64 w-full object-cover" />
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">Kongu Engineering College</h3>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4" />
              Perundurai, Erode – 638060, Tamil Nadu, India
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              CSE Department — Computer Lab, Block II
            </p>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
