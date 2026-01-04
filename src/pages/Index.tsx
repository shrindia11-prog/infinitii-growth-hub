import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="h-screen bg-background overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center pt-20 px-6">
        {/* Video Container */}
        <div className="w-full max-w-4xl aspect-video bg-navy/10 rounded-lg overflow-hidden shadow-elevated mb-8">
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

        {/* Two Lines of Text */}
        <div className="text-center max-w-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-foreground mb-3">
            Transforming Vision Into <span className="text-metallic">Infinite Possibilities</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Strategic consulting solutions that drive growth and unlock your organization's full potential.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
