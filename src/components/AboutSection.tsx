import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "Award-winning journalism and storytelling",
    "Exclusive interviews with industry leaders",
    "In-depth analysis on trending topics",
    "Beautiful design and photography",
    "Ad-free reading experience for subscribers",
    "Access to our complete digital archive",
  ];

  return (
    <section id="about" className="magazine-section bg-magazine-light">
      <div className="magazine-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
              alt="Magazine Spread"
              className="rounded-lg shadow-xl max-w-full"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-magazine-gold/30 z-[-1]"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-magazine-dark/10 z-[-1]"></div>
          </div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full border border-magazine-gold/30 bg-magazine-gold/10 text-magazine-gold font-semibold text-sm">
              Our Mission
            </div>
            <h2 className="magazine-heading">
              Thoughtful Stories for Curious Minds
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate minima vel eveniet optio nobis libero fugiat atque ipsa
              fuga laborum explicabo, quod voluptatibus harum ut! Tempora cumque
              iusto voluptate necessitatibus libero debitis vero nobis
              dignissimos pariatur. Mollitia doloremque perferendis cupiditate
              officia tempora illum obcaecati odit consectetur accusantium,
              perspiciatis distinctio dicta.
            </p>

            <div className="space-y-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-magazine-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
