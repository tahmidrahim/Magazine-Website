import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing!");
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="bg-magazine-dark py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Stay Informed with Our Newsletter
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
            consequatur!
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-magazine-gold hover:bg-magazine-gold/90 text-white"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="text-xs text-gray-400 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
