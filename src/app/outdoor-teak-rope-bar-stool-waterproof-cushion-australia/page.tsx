import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star, Truck, Shield, Sun, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Outdoor Teak Rope Bar Stool with Waterproof Cushion Australia | StoolTopia",
  description: "Premium outdoor teak rope bar stools with waterproof cushions in Australia. Weather-resistant teak wood, durable rope seating, and comfortable waterproof cushions for outdoor living.",
  keywords: [
    "outdoor teak rope bar stool waterproof cushion Australia",
    "teak outdoor bar stools",
    "rope bar stools Australia",
    "waterproof cushion bar stools",
    "outdoor bar seating",
    "weather-resistant bar stools",
    "teak furniture Australia"
  ],
  openGraph: {
    title: "Outdoor Teak Rope Bar Stool with Waterproof Cushion Australia | StoolTopia",
    description: "Premium outdoor teak rope bar stools with waterproof cushions in Australia. Weather-resistant teak wood, durable rope seating, and comfortable waterproof cushions.",
    images: ["/images/wooden_bar_stool_with_curved_seat_and_minimalist_design_steps.jpg"],
  },
};

export default function OutdoorTeakRopeBarStoolPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Outdoor Teak Rope Bar Stool with <span className="text-muted-foreground">Waterproof Cushion</span> Australia
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience outdoor living at its finest with our premium teak rope bar stools. 
                Featuring weather-resistant teak wood, durable rope seating, and comfortable waterproof cushions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="https://stooltopia.com/products"
                  className="bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center gap-2"
                >
                  <Sun className="w-5 h-5" />
                  Shop Outdoor Collection
                </Link>
                <div className="flex items-center gap-2 text-gray-600">
                  <Truck className="w-5 h-5 text-primary" />
                  <span>Free shipping over $500</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/wooden_bar_stool_with_curved_seat_and_minimalist_design_steps.jpg"
                alt="Outdoor teak rope bar stool with waterproof cushion"
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
            Premium Outdoor Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Weather-Resistant Teak</h3>
              <p className="text-gray-600">
                Premium grade teak wood naturally resistant to rot, decay, and insect damage, perfect for outdoor use.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Waterproof Cushions</h3>
              <p className="text-gray-600">
                High-quality waterproof cushions that resist moisture, UV damage, and maintain comfort in all weather conditions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Durable Rope Seating</h3>
              <p className="text-gray-600">
                Marine-grade rope seating that's comfortable, breathable, and built to last through seasons of outdoor use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Material Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Why Choose Teak for Outdoor Furniture?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Natural Durability</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Naturally resistant to rot, decay, and insect damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>High oil content provides natural weather protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Dense grain structure ensures long-lasting strength</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Beautiful Aging</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Develops a beautiful silver-gray patina over time</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Maintains structural integrity while aging gracefully</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Can be restored to original golden color if desired</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Outdoor Teak Collection
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative w-full h-64">
                <Image
                  src="/images/wooden_modern_bar_stool_with_curved_seat_and_sturdy_leg_design.jpg"
                  alt="Teak rope bar stool"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Classic Teak Rope</h3>
                <p className="text-gray-600 mb-4">
                  Traditional rope seating with premium teak frame, perfect for coastal and outdoor settings.
                </p>
                <Link 
                  href="https://stooltopia.com/products"
                  className="text-primary font-semibold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/modern_bar_with_three_stools_and_warm_lighting_neutral_color_decor.jpg"
                alt="Outdoor bar with teak stools"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Outdoor Bar Set</h3>
                <p className="text-gray-600 mb-4">
                  Complete outdoor bar setup with teak rope stools and waterproof cushions.
                </p>
                <Link 
                  href="https://stooltopia.com/products"
                  className="text-primary font-semibold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/modern_kitchen_with_three_chairs_and_warm_cozy_lighting_above_bar.jpg"
                alt="Modern outdoor seating"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Outdoor</h3>
                <p className="text-gray-600 mb-4">
                  Contemporary teak design with clean lines and comfortable rope seating.
                </p>
                <Link 
                  href="https://stooltopia.com/products"
                  className="text-primary font-semibold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Care & Maintenance
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Teak Wood Care</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Clean with mild soap and water, rinse thoroughly</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Allow natural aging or apply teak oil for golden color</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Store indoors during extreme weather when possible</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Cushion Care</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Wipe with damp cloth and mild detergent</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Store cushions indoors when not in use</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Replace cushions every 3-5 years for optimal comfort</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Create Your Perfect Outdoor Space
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your outdoor area with our premium teak rope bar stools featuring comfortable waterproof cushions.
          </p>
          <Link 
            href="https://stooltopia.com/products"
            className="bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2"
          >
            <Sun className="w-5 h-5" />
            Shop Outdoor Collection
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long will teak outdoor furniture last?
              </h3>
              <p className="text-gray-600">
                With proper care, teak outdoor furniture can last 20-30 years or more. Teak's natural oils and dense grain make it highly resistant to weather, rot, and insect damage.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are the waterproof cushions really waterproof?
              </h3>
              <p className="text-gray-600">
                Yes! Our waterproof cushions are made with high-quality materials that resist water penetration. However, we recommend storing them indoors during heavy rain or when not in use for extended periods.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I leave the stools outside year-round?
              </h3>
              <p className="text-gray-600">
                While teak is highly weather-resistant, we recommend storing the stools and cushions indoors during extreme weather conditions to maximize their lifespan and maintain their appearance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
