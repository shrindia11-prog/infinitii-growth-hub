import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="h-screen bg-background overflow-hidden flex flex-col relative">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-navy/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center pt-20 px-6 relative z-10">
        {/* Video Container with animation */}
        <div 
          className="w-full max-w-4xl aspect-video bg-navy/10 rounded-2xl overflow-hidden shadow-elevated mb-8 animate-fade-up ring-1 ring-border/30 hover:ring-navy/20 transition-all duration-500 hover:shadow-glow"
          style={{ animationDelay: "0.1s" }}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster=""
          >
            {/* Replace src with your video URL */}
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Two Lines of Text with staggered animation */}
        <div className="text-center max-w-2xl">
          <h1 
            className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-foreground mb-3 animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}
          >
            Transforming Vision Into{" "}
            <span className="text-metallic bg-clip-text animate-shimmer">Infinite Possibilities</span>
          </h1>
          <p 
            className="text-base md:text-lg text-muted-foreground animate-fade-up"
            style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}
          >
            Strategic consulting solutions that drive growth and unlock your organization's full potential.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
