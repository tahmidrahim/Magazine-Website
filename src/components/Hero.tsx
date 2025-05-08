import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-magazine-light overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-block px-4 py-1 rounded-full border border-magazine-gold/30 bg-magazine-gold/10 text-magazine-gold font-semibold text-sm">
              Anything is Possible
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Landing Page
              <br />
              <span className="text-magazine-gold">By</span> Tahmid Tanjim Rahim
              <br />
              Mern Stack Developer
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              error, molestias aspernatur vitae, ipsum ducimus quas magnam
              voluptate animi mollitia nisi quidem architecto, repudiandae
              aliquam praesentium nam sint hic dolorum.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-3">
              <Button className="bg-magazine-dark hover:bg-magazine-dark/90 text-white text-base font-medium py-6 px-8 rounded-md">
                Subscribe Now
              </Button>
              <Button
                variant="outline"
                className="border-magazine-gold text-magazine-gold hover:bg-magazine-gold/10 py-6 px-8 rounded-md"
              >
                Explore Content
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative transform rotate-3 shadow-xl rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Magazine Cover"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-magazine-dark/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <p className="font-semibold text-sm opacity-80 mb-1">
                  FEATURED
                </p>
                <h3 className="font-serif text-2xl font-bold mb-2">
                  The Unseen Beauty of Modern Architecture
                </h3>
                <p className="text-sm opacity-80">
                  By Emma Richardson • 8 min read
                </p>
              </div>
            </div>
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-magazine-gold/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
