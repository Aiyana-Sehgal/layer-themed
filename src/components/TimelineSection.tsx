import { Card } from "@/components/ui/card";
import { CheckCircle, Circle, Clock, Users, Sword, Trophy } from "lucide-react";

const TimelineSection = () => {
  const timelineSteps = [
    {
      step: 1,
      title: "Application Submission",
      duration: "1 Day",
      description: "Submit your application with personal details and motivation letter. Our recruitment team will review your application within 24 hours.",
      icon: Clock,
      status: "active"
    },
    {
      step: 2,
      title: "Physical Assessment",
      duration: "3 Days",
      description: "Undergo rigorous physical and mental evaluations. Test your endurance, strength, and determination to face supernatural threats.",
      icon: Users,
      status: "pending"
    },
    {
      step: 3,
      title: "Breathing Technique Training",
      duration: "2 Weeks",
      description: "Master the fundamental breathing techniques. Learn to harness your inner strength and unlock your full potential.",
      icon: Sword,
      status: "pending"
    },
    {
      step: 4,
      title: "Final Selection",
      duration: "7 Days",
      description: "Face the ultimate test on Mount Fujikasane. Survive seven nights among demons to earn your place in the Corps.",
      icon: Trophy,
      status: "pending"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recruitment <span className="bg-flame-gradient bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your journey to becoming a Demon Slayer follows a structured path. Each stage is designed to test 
            and develop your skills, ensuring only the most dedicated join our ranks.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {timelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === timelineSteps.length - 1;
            
            return (
              <div key={step.step} className="relative">
                {/* Timeline line */}
                {!isLast && (
                  <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-primary to-muted-foreground/30"></div>
                )}
                
                {/* Timeline item */}
                <div className="flex items-start space-x-6 mb-12">
                  {/* Step indicator */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                      step.status === 'active' 
                        ? 'bg-flame-gradient border-secondary shadow-flame animate-breathing' 
                        : 'bg-muted border-border hover:border-primary'
                    }`}>
                      {step.status === 'active' ? (
                        <CheckCircle className="w-8 h-8 text-white" />
                      ) : (
                        <Circle className="w-8 h-8 text-muted-foreground" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <Card className="p-6 hover:shadow-breathing transition-all duration-500 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center space-x-3 mb-2 md:mb-0">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">
                              Step {step.step}: {step.title}
                            </h3>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{step.duration}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress indicator */}
                      <div className="mt-4 flex items-center space-x-2">
                        <div className="flex-grow bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ${
                              step.status === 'active' 
                                ? 'bg-flame-gradient w-full' 
                                : 'bg-muted-foreground/30 w-0'
                            }`}
                          ></div>
                        </div>
                        <span className={`text-sm font-medium ${
                          step.status === 'active' ? 'text-secondary' : 'text-muted-foreground'
                        }`}>
                          {step.status === 'active' ? 'Active' : 'Pending'}
                        </span>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="p-8 max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Important Note</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The recruitment process is designed to be challenging. Only those with unwavering determination 
              and pure intentions will succeed. Remember: "The weak have no rights or choices. Their only 
              fate is to be relentlessly crushed by others."
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Sword className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Total Duration: ~3-4 Weeks</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;