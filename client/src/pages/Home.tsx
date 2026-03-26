import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Droplet, Shield } from "lucide-react";

/**
 * Pure Skin Care - Minimalist Skincare Website
 * Design Philosophy: Organic Minimalism
 * - Clean, simple layouts with generous whitespace
 * - Natural color palette: sage green, cream, terracotta
 * - Premium typography: Playfair Display for headings, Inter for body
 * - Soft shadows and organic curves for depth
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-primary" />
            <span style={{ fontFamily: '"Playfair Display", serif' }} className="text-xl font-bold">Pure</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm hover:text-primary transition-colors">
              Products
            </a>
            <a href="#ritual" className="text-sm hover:text-primary transition-colors">
              Ritual
            </a>
            <a href="#ingredients" className="text-sm hover:text-primary transition-colors">
              Ingredients
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <Button variant="outline" className="text-sm">
            Shop
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden section-spacing">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663478829385/cF5LUjkLsHryzUSaaj8Mi4/hero-skincare-Xt7B5c8cPitN7ukgEtNF2r.webp"
              alt="Pure Skincare Hero"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 style={{ fontFamily: '"Playfair Display", serif' }} className="text-5xl md:text-6xl font-bold leading-tight">
                Pure Skin,
                <br />
                <span className="text-primary">Pure You</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience the transformative power of nature's finest ingredients. Our minimalist approach to skincare strips away the unnecessary and delivers what your skin truly needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Explore Collection
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">100%</p>
                <p className="text-xs text-muted-foreground">Natural Ingredients</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Dermatologist</p>
                <p className="text-xs text-muted-foreground">Tested & Approved</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Cruelty</p>
                <p className="text-xs text-muted-foreground">Free & Vegan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-organic my-12" />

      {/* Product Showcase Section */}
      <section id="products" className="section-spacing">
        <div className="container space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-4xl md:text-5xl font-semibold">
              Our Collection
            </h2>
            <p className="text-lg text-muted-foreground">
              Carefully curated products that work in harmony with your skin's natural rhythm.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Cleansing Oil",
                description: "Gentle yet effective removal of impurities",
                icon: Droplet,
              },
              {
                name: "Hydrating Toner",
                description: "Restore balance and prepare skin for serums",
                icon: Leaf,
              },
              {
                name: "Radiance Serum",
                description: "Boost luminosity with concentrated actives",
                icon: Shield,
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-soft"
                style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)' }}
              >
                <div className="mb-6 inline-block p-3 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 style={{ fontFamily: '"Playfair Display", serif' }} className="text-xl font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>
                <a href="#" className="text-primary text-sm font-semibold hover:underline">
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          {/* Product Image */}
          <div className="mt-16 rounded-lg overflow-hidden" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663478829385/cF5LUjkLsHryzUSaaj8Mi4/product-showcase-igZzviiowQ7qYWRRk53ngA.webp"
              alt="Product Showcase"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-organic my-12" />

      {/* Skincare Ritual Section */}
      <section id="ritual" className="section-spacing bg-secondary/30">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-4xl md:text-5xl font-semibold">
                Your Daily Ritual
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Skincare is more than a routine—it's a moment of self-care. Our products are designed to work together seamlessly, creating a ritual that nourishes both your skin and your mind.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { step: "01", title: "Cleanse", desc: "Start with our gentle cleansing oil" },
                { step: "02", title: "Tone", desc: "Balance with our hydrating toner" },
                { step: "03", title: "Treat", desc: "Apply targeted serums and treatments" },
                { step: "04", title: "Moisturize", desc: "Lock in benefits with our cream" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-playfair font-semibold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden order-1 md:order-2" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663478829385/cF5LUjkLsHryzUSaaj8Mi4/skincare-ritual-NYHf4wCZsZrpVMAizLZrYe.webp"
              alt="Skincare Ritual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-organic my-12" />

      {/* Ingredients Section */}
      <section id="ingredients" className="section-spacing">
        <div className="container space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-4xl md:text-5xl font-semibold">
              Nature's Best
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe in transparency. Every ingredient is chosen for its efficacy and purity.
            </p>
          </div>

          {/* Ingredients Image */}
          <div className="rounded-lg overflow-hidden" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663478829385/cF5LUjkLsHryzUSaaj8Mi4/ingredients-close-up-4QBoC9xGMt5hGinkNGBnVY.webp"
              alt="Natural Ingredients"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Ingredient Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Aloe Vera",
                benefit: "Deep hydration and soothing properties",
              },
              {
                name: "Green Tea Extract",
                benefit: "Antioxidant protection and brightening",
              },
              {
                name: "Honey",
                benefit: "Nourishing and antibacterial benefits",
              },
            ].map((ingredient, idx) => (
              <div key={idx} className="text-center space-y-3">
                <h3 style={{ fontFamily: '"Playfair Display", serif' }} className="text-xl font-semibold text-primary">
                  {ingredient.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {ingredient.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-organic my-12" />

      {/* Before & After Section */}
      <section className="section-spacing bg-secondary/30">
        <div className="container space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-4xl md:text-5xl font-semibold">
              See the Difference
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from our community of skincare enthusiasts.
            </p>
          </div>

          {/* Before & After Image */}
          <div className="rounded-lg overflow-hidden max-w-3xl mx-auto" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663478829385/cF5LUjkLsHryzUSaaj8Mi4/before-after-glow-MBFhCbtu5ACuTVZvutgb86.webp"
              alt="Before and After Results"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Results typically visible within 4-6 weeks of consistent use
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-organic my-12" />

      {/* CTA Section */}
      <section id="contact" className="section-spacing">
        <div className="container max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 style={{ fontFamily: '"Playfair Display", serif' }} className="text-4xl md:text-5xl font-semibold">
              Ready to Transform Your Skin?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of people who have discovered the power of pure, minimalist skincare.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary">
              Shop Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline">Subscribe to Newsletter</Button>
          </div>

          <p className="text-xs text-muted-foreground">
              Free shipping on orders over $50 • 30-day money-back guarantee
            </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/20 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-primary" />
                <span style={{ fontFamily: '"Playfair Display", serif' }} className="font-bold">Pure</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Minimalist skincare for modern living.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Products</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Cleansers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Serums</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Moisturizers</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Pure Skin Care. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
