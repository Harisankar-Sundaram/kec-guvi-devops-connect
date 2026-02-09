import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* KEC Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-xs">
                KEC
              </div>
              <h3 className="font-semibold text-foreground">Kongu Engineering College</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /> Perundurai, Erode, Tamil Nadu</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> +91 4294 226 600</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> info@kongu.edu</p>
            </div>
          </div>

          {/* GUVI Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-secondary-foreground font-bold text-xs">
                GUVI
              </div>
              <h3 className="font-semibold text-foreground">GUVI (HCL Company)</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /> Chennai, Tamil Nadu</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> support@guvi.in</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://www.kongu.edu" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">KEC Official Website</a></li>
              <li><a href="https://www.guvi.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">GUVI Official Website</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          © 2025 KEC × GUVI DevOps Practical Teaching Program. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
