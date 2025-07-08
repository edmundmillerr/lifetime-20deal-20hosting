import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Globe,
  Server,
  Shield,
  Clock,
  Users,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const plans = [
    {
      name: "Starter Plan",
      ideal: "Students & Test Projects",
      price: "$149",
      features: [
        "1 vCPU / 2 GB RAM",
        "Free Lifetime Domain",
        "SSD Storage",
        "99.9% Uptime",
        "SSL Certificate",
      ],
    },
    {
      name: "Pro Plan",
      ideal: "Blogs & Portfolios",
      price: "$249",
      features: [
        "2 vCPU / 4 GB RAM",
        "Free Lifetime Domain",
        "WordPress Ready",
        "DDoS Protection",
        "24/7 Support",
      ],
      popular: true,
    },
    {
      name: "Business Plan",
      ideal: "eCommerce & CMS",
      price: "$399",
      features: [
        "4 vCPU / 8 GB RAM",
        "Free Lifetime Domain",
        "High Performance",
        "Advanced Security",
        "Priority Support",
      ],
    },
    {
      name: "Agency Plan",
      ideal: "Client Hosting",
      price: "$599",
      features: [
        "Host Unlimited Domains",
        "White Label Options",
        "Reseller Features",
        "Client Management",
        "Bulk Billing",
      ],
    },
    {
      name: "Enterprise Plan",
      ideal: "SaaS & Apps",
      price: "$799",
      features: [
        "High-Performance Servers",
        "Priority Support",
        "Custom Solutions",
        "Dedicated Resources",
        "SLA Guarantee",
      ],
    },
  ];

  const testimonials = [
    {
      quote: "The best lifetime hosting deal I've seen—no more monthly fees!",
      author: "Fatima R., Blogger",
    },
    {
      quote:
        "I host all my client sites on WebWhiz's lifetime deal hosting. Huge savings.",
      author: "Danish M., Developer",
    },
    {
      quote:
        "Free domain, blazing‑fast servers, WordPress in minutes. I'm sold.",
      author: "Lara P., Store Owner",
    },
  ];

  const faqs = [
    {
      question: "Is the domain really free for life?",
      answer:
        "Yes—every plan includes a lifetime domain with zero renewal fees.",
    },
    {
      question: "Can I run WordPress?",
      answer:
        "Absolutely. WordPress comes pre‑installed and optimized on all plans.",
    },
    {
      question: "Are your servers fast and secure?",
      answer:
        "Top‑tier U.S. datacenters, SSD storage, SSL, DDoS protection, and 99.9% uptime.",
    },
    {
      question: "Can I host multiple sites?",
      answer: "Choose the Agency or Enterprise plan to host unlimited domains.",
    },
    {
      question: "Can I upgrade later?",
      answer: "Yes—scale up any time with zero downtime.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href="https://arzhost.com/"
                className="flex items-center space-x-2"
              >
                <Server className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">
                  ARZ Host
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Life Time web Hosting
              </a>
              <a
                href="https://arzhost.com/region-based-vps/"
                className="text-foreground hover:text-primary transition-colors"
              >
                VPS REGION
              </a>
              <a
                href="https://arzhost.com/hosting/kansas-reliable-vps-hosting/"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                VPS Hosting Hong Kong
              </a>
              <a
                href="https://www.arzhost.com/about-us/"
                className="text-foreground hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="https://www.arzhost.com/contact-us/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </a>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="https://arzhost.com/vps/">Get Started</a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                Life Time web Hosting
              </a>
              <a
                href="https://arzhost.com/region-based-vps/"
                className="block text-foreground hover:text-primary transition-colors"
              >
                VPS REGION
              </a>
              <a
                href="https://arzhost.com/hosting/kansas-reliable-vps-hosting/"
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                VPS Hosting Hong Kong
              </a>
              <a
                href="https://www.arzhost.com/about-us/"
                className="block text-foreground hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="https://www.arzhost.com/contact-us/"
                className="block text-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </a>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a href="https://arzhost.com/vps/">Get Started</a>
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-blush-pink/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-dusty-rose/20 text-deep-plum border-dusty-rose/30">
              High-Speed VPS Hosting in Hong Kong – Built for Global Reach
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Unlock the Best{" "}
              <span className="text-primary">Lifetime Hosting</span>:<br />
              One‑Time Payment, Forever Online
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              💡 Skip monthly bills. Forget renewal stress. Pay once—stay live
              for life with{" "}
              <a
                href="https://arzhost.com/"
                className="text-primary font-semibold hover:underline"
              >
                ARZ Host
              </a>
              , the best lifetime hosting solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="https://arzhost.com/vps/">
                  Secure Your Lifetime Hosting + Free Domain Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#plans">View Pricing Plans</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Our Hosting Lifetime Deal?
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience lightning‑fast servers, full control, and a cheap
              lifetime domain bundled into every plan. Perfect for bloggers,
              devs, agencies, and growing businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blush-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Lifetime Deal Hosting
              </h3>
              <p className="text-muted-foreground">Pay once, host forever.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dusty-rose/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lifetime Domains</h3>
              <p className="text-muted-foreground">
                Your domain stays active for life at no extra cost.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-mauve/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Lifetime Hosting Plans
              </h3>
              <p className="text-muted-foreground">
                WordPress‑ready, SSD storage, 99.9% uptime.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blush-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1‑1 Web Hosting</h3>
              <p className="text-muted-foreground">
                Dedicated resources for every site.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dusty-rose/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Lifetime Server Hosting
              </h3>
              <p className="text-muted-foreground">
                Full root/SSH, PHP & Node.js friendly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-mauve/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Round‑the‑Clock Support
              </h3>
              <p className="text-muted-foreground">Real humans, 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section
        id="plans"
        className="py-16 bg-gradient-to-br from-blush-pink/10 to-background"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Everything Included in Your Hosting Lifetime Deal
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the perfect plan for your needs. All plans include lifetime
              domains and hosting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.ideal}</CardDescription>
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <a href="https://arzhost.com/vps/">Choose Plan</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Who Needs Lifetime Server Hosting?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">
                Freelancers & Bloggers
              </h3>
              <p className="text-muted-foreground">
                Focus on content, not invoices.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Digital Agencies</h3>
              <p className="text-muted-foreground">
                Host client sites under one powerful account.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">eCommerce Stores</h3>
              <p className="text-muted-foreground">
                Keep your shop open 24/7 without renewals.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">
                SaaS Founders & Devs
              </h3>
              <p className="text-muted-foreground">
                Scale apps reliably on a one‑time paid platform.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Startups</h3>
              <p className="text-muted-foreground">
                Cut recurring costs while enjoying premium performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-dusty-rose/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Key Benefits at a Glance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>Cheap Lifetime Domain Included</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>No Renewals, No Hidden Fees</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>U.S.‑Based High‑Speed Servers</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>SSL, SSD Storage & 99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span>24/7 Live Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Real Users Love Our Lifetime Hosting Plans
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Star className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                  <blockquote className="text-lg font-medium mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-muted-foreground">
                    — {testimonial.author}
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-mauve/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Stop Renting—Start Owning
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Lock in the best lifetime hosting today. Build, grow, and scale
              without ever paying another hosting invoice.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="https://arzhost.com/vps/">
                Grab Your Hosting Lifetime Deal + Free Domain
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-plum text-ivory py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Server className="h-8 w-8" />
                <span className="text-xl font-bold">ARZ Host</span>
              </div>
              <p className="text-ivory/80 mb-4">
                Professional lifetime hosting solutions with one-time payments
                and forever online guarantee.
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  Website:{" "}
                  <a href="https://arzhost.com/" className="hover:underline">
                    arzhost.com
                  </a>
                </p>
                <p className="text-sm">Phone: +1 (631) 594-8060</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Hosting Services</h3>
              <ul className="space-y-2 text-ivory/80">
                <li>
                  <a
                    href="https://arzhost.com/lifetime-web-hosting/"
                    className="hover:underline"
                  >
                    Lifetime Web Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/region-based-vps/"
                    className="hover:underline"
                  >
                    VPS Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/hosting/kansas-reliable-vps-hosting/"
                    className="hover:underline"
                  >
                    Hong Kong VPS
                  </a>
                </li>
                <li>
                  <a href="https://arzhost.com/" className="hover:underline">
                    Our Hosting Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-ivory/80">
                <li>
                  <a
                    href="https://www.arzhost.com/about-us/"
                    className="hover:underline"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/contact-us/"
                    className="hover:underline"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/terms-conditions/"
                    className="hover:underline"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/privacy-policy/"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/disclaimer/"
                    className="hover:underline"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-ivory/80">
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/Web_hosting_service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    What is Web Hosting?
                  </a>
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/Performance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Web Performance Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-ivory/20 mt-8 pt-8 text-center text-ivory/60">
            <p>
              &copy; 2024 ARZ Host. All rights reserved. Professional lifetime
              hosting solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
