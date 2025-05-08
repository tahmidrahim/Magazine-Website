
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const FeatureSection = () => {
  const features = [
    {
      badge: 'TRENDING',
      category: 'Culture',
      title: 'The Evolution of Digital Art in Modern Museums',
      excerpt: 'How technology is reshaping the way we experience art in the world\'s leading cultural institutions.',
      author: 'James Wilson',
      readTime: '5',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22'
    },
    {
      badge: 'EXCLUSIVE',
      category: 'Technology',
      title: 'AI Revolution: Beyond the Hype and into Reality',
      excerpt: 'An in-depth look at how artificial intelligence is transforming industries and everyday life.',
      author: 'Sarah Chen',
      readTime: '7',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
    {
      badge: 'ANALYSIS',
      category: 'Business',
      title: 'Sustainable Economies: The New Business Frontier',
      excerpt: 'How forward-thinking companies are redefining success through environmental stewardship.',
      author: 'Michael Torres',
      readTime: '6',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843'
    }
  ];

  return (
    <section id="features" className="magazine-section bg-white">
      <div className="magazine-container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="magazine-heading">
            Featured Stories
          </h2>
          <Button variant="ghost" className="text-magazine-dark font-medium hidden md:flex items-center gap-2 hover:text-magazine-gold">
            View All <ArrowRight size={16} />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group flex flex-col overflow-hidden border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                />
                <Badge className="absolute top-3 left-3 bg-magazine-gold text-white hover:bg-magazine-gold/90">
                  {feature.badge}
                </Badge>
              </div>
              <div className="flex flex-col flex-grow p-6">
                <p className="text-xs font-semibold text-gray-500 mb-2">{feature.category}</p>
                <h3 className="font-serif text-xl font-bold mb-3 transition-colors group-hover:text-magazine-gold">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{feature.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
                    <p className="text-xs text-gray-600">{feature.author}</p>
                  </div>
                  <p className="text-xs text-gray-500">{feature.readTime} min read</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 md:hidden">
          <Button variant="ghost" className="text-magazine-dark font-medium flex items-center gap-2 hover:text-magazine-gold">
            View All <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
