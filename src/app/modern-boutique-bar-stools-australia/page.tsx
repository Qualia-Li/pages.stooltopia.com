import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star, Truck, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Modern Boutique Bar Stools Australia | StoolTopia",
  description: "Discover premium modern boutique bar stools in Australia. Elegant designs, superior comfort, and exceptional quality for your home or commercial space. Free shipping on orders over $500.",
  keywords: [
    "modern boutique bar stools Australia",
    "premium bar stools",
    "elegant bar seating",
    "boutique furniture Australia",
    "modern bar chairs",
    "luxury bar stools",
    "contemporary bar seating"
  ],
  openGraph: {
    title: "Modern Boutique Bar Stools Australia | StoolTopia",
    description: "Discover premium modern boutique bar stools in Australia. Elegant designs, superior comfort, and exceptional quality.",
    images: ["/images/modern_wooden_bar_stool_with_leather_seat_and_gold_details.jpg"],
  },
};

export default function ModernBoutiqueBarStoolsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Modern Boutique <span className="text-muted-foreground">Bar Stools</span> Australia
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Elevate your space with our curated collection of premium boutique bar stools. 
                Handcrafted with attention to detail, designed for both style and comfort.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="https://stooltopia.com/products"
                  className="bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Shop Collection
                </Link>
                <div className="flex items-center gap-2 text-gray-600">
                  <Truck className="w-5 h-5 text-primary" />
                  <span>Free shipping over $500</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/modern_wooden_bar_stool_with_leather_seat_and_gold_details.jpg"
                alt="Modern boutique bar stool with leather seat and gold details"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Why Choose Our Boutique Bar Stools?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Crafted from the finest materials with meticulous attention to detail, ensuring lasting beauty and durability.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Australian Made</h3>
              <p className="text-gray-600">
                Proudly designed and manufactured in Australia, supporting local craftsmanship and quality standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Nationwide Shipping</h3>
              <p className="text-gray-600">
                Free delivery across Australia on orders over $500, with careful packaging to ensure safe arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Featured Boutique Collections
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/brown_round_leather_stool_with_dark_wooden_legs_and_sturdy_design.jpg"
                alt="Leather bar stool with wooden legs"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Leather Collection</h3>
                <p className="text-gray-600 mb-4">
                  Premium leather seating with solid wood frames, perfect for sophisticated spaces.
                </p>
                <Link 
                  href="https://stooltopia.com/products"
                  className="text-primary font-semibold hover:underline"
                >
                  View Collection →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/modern_kitchen_with_two_stools_and_potted_plant_near_countertop.jpg"
                alt="Modern kitchen with bar stools"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Minimalist</h3>
                <p className="text-gray-600 mb-4">
                  Clean lines and contemporary design for modern homes and commercial spaces.
                </p>
                <Link 
                  href="https://stooltopia.com/products"
                  className="text-primary font-semibold hover:underline"
                >
                  View Collection →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/wooden_modern_bar_stool_with_curved_seat_and_sturdy_leg_design.jpg"
                alt="Wooden bar stool with curved seat"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Natural Wood</h3>
                <p className="text-gray-600 mb-4">
                  Sustainable timber construction with ergonomic curved seating for ultimate comfort.
                </p>
                <Link 
                  href="https://stooltopia.com/products"
                  className="text-primary font-semibold hover:underline"
                >
                  View Collection →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Benefits of Boutique Bar Stools
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Superior Comfort</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ergonomic design for extended sitting comfort</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Premium cushioning materials for optimal support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Adjustable height options for perfect fit</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Timeless Design</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Classic silhouettes that never go out of style</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Versatile finishes to complement any décor</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Handcrafted details that add character</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Transform Your Space Today
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have elevated their spaces with our boutique bar stools.
          </p>
          <Link 
            href="https://stooltopia.com/products"
            className="bg-black text-primary px-8 py-4 rounded-lg font-semibold hover:bg-black/90 transition-all inline-flex items-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Shop Boutique Collection
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What makes boutique bar stools different from regular bar stools?
              </h3>
              <p className="text-gray-600">
                Boutique bar stools feature premium materials, handcrafted details, and superior comfort. They're designed with attention to both aesthetics and functionality, making them perfect for discerning customers who value quality and style.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer free shipping on boutique bar stools?
              </h3>
              <p className="text-gray-600">
                Yes! We offer free nationwide shipping on all orders over $500. Our boutique bar stools are carefully packaged to ensure they arrive in perfect condition.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I customize the finish or fabric of my bar stool?
              </h3>
              <p className="text-gray-600">
                Absolutely! Many of our boutique bar stools can be customized with different finishes, fabrics, and colors. Contact our team to discuss your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
