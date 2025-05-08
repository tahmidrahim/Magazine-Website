
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Digital',
      description: 'Full digital access to all our content',
      price: isAnnual ? 59.88 : 5.99,
      interval: isAnnual ? '/year' : '/month',
      savings: isAnnual ? 'Save 20%' : null,
      features: [
        'Unlimited access to all articles',
        'Exclusive online content',
        'Early access to new issues',
        'Commenting privileges',
      ],
      cta: 'Start Digital Access',
      popular: false
    },
    {
      name: 'Premium',
      description: 'Digital plus exclusive premium content',
      price: isAnnual ? 89.88 : 8.99,
      interval: isAnnual ? '/year' : '/month',
      savings: isAnnual ? 'Save 25%' : null,
      features: [
        'All Digital features',
        'Premium subscriber newsletter',
        'Ad-free reading experience',
        'Full access to archives',
        'Exclusive interviews and videos',
        'Invitation to subscriber events'
      ],
      cta: 'Go Premium',
      popular: true
    },
    {
      name: 'Print + Digital',
      description: 'Complete print and digital access',
      price: isAnnual ? 119.88 : 12.99,
      interval: isAnnual ? '/year' : '/month',
      savings: isAnnual ? 'Save 20%' : null,
      features: [
        'All Premium features',
        'Monthly print magazine delivery',
        'Limited-edition subscriber covers',
        'Print archive access',
        'Quarterly special editions',
        'Discounted event tickets'
      ],
      cta: 'Get Complete Access',
      popular: false
    }
  ];

  const handleSubscribe = (plan: string) => {
    toast.info(`Redirecting to ${plan} subscription checkout...`);
    // Here you would typically handle Stripe checkout
    // Example: redirectToStripeCheckout(planId)
  };

  return (
    <section id="pricing" className="magazine-section bg-white">
      <div className="magazine-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-1 rounded-full border border-magazine-gold/30 bg-magazine-gold/10 text-magazine-gold font-semibold text-sm mb-4">
            Subscription Plans
          </div>
          <h2 className="magazine-heading">Choose the Perfect Plan</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get unlimited access to award-winning journalism across all your devices
          </p>

          <div className="flex items-center justify-center">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  !isAnnual ? 'bg-white shadow-sm text-magazine-dark' : 'text-gray-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  isAnnual ? 'bg-white shadow-sm text-magazine-dark' : 'text-gray-600'
                }`}
              >
                Annual
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden border transition-all ${
                plan.popular 
                  ? 'border-magazine-gold scale-105 shadow-lg md:mt-0 -mt-4' 
                  : 'border-gray-200 hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="bg-magazine-gold text-white py-1.5 px-4 text-sm font-medium text-center">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-magazine-dark mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-magazine-dark">${plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.interval}</span>
                  </div>
                  {plan.savings && (
                    <span className="inline-block mt-1 text-sm font-medium text-green-600">
                      {plan.savings}
                    </span>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-magazine-gold flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleSubscribe(plan.name)}
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-magazine-gold hover:bg-magazine-gold/90 text-white' 
                      : 'bg-magazine-dark hover:bg-magazine-dark/90 text-white'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          All subscriptions automatically renew. Cancel anytime. See our terms and conditions.
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;
