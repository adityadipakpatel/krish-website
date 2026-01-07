import { Mail, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in-up">
          {/* Email */}
          <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <a
                  href="mailto:krajani@ualberta.ca"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  krajani@ualberta.ca
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0077b5] to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Linkedin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/krishrajani21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  krishrajani21
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Let's Connect Text */}
        <div className="bg-card border border-border rounded-2xl p-8 text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just chatting about AI/ML and software development. Feel free to reach out via email or connect with me on LinkedIn!
          </p>
        </div>
      </div>
    </section>
  );
};

