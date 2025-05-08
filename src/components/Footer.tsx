import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "Features", href: "#features" },
        { name: "About", href: "#about" },
        { name: "Subscribe", href: "#pricing" },
      ],
    },
    {
      title: "Categories",
      links: [
        { name: "Culture", href: "#" },
        { name: "Technology", href: "#" },
        { name: "Business", href: "#" },
        { name: "Politics", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Accessibility", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white pt-12 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
          <div className="col-span-2">
            <a
              href="/"
              className="font-serif text-2xl font-bold text-magazine-dark tracking-tight inline-flex"
            >
              Maga<span className="text-magazine-gold">Zine</span>
            </a>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, quasi laborum! Repellat repudiandae aspernatur cum
              obcaecati tempora consequatur adipisci nemo.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-gray-500 hover:text-magazine-gold transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-magazine-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-magazine-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {sections.map((section, i) => (
            <div key={i} className="col-span-1">
              <h4 className="font-medium text-sm text-magazine-dark mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-magazine-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 mt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Magazine. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-500">
              Development by Tahmid Tanjim Rahim <br />
              <span>CLICK HERE 👉 </span>
              <a href="https://www.upwork.com/freelancers/~01b63673557a6f5e4c?mp_source=share">
                {" "}
                Upwork
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
