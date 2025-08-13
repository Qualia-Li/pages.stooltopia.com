import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star, Truck, Crown, Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Velvet Bar Stools with Gold Frame Australia | StoolTopia",
  description: "Luxury velvet bar stools with gold frames in Australia. Premium velvet upholstery, elegant gold detailing, and sophisticated design for upscale spaces. Free shipping over $500.",
  keywords: [
    "velvet bar stools gold frame Australia",
    "luxury velvet bar stools",
    "gold frame bar chairs",
    "premium velvet seating",
    "elegant bar stools Australia",
    "sophisticated bar chairs",
    "upscale bar seating"
  ],
  openGraph: {
    title: "Velvet Bar Stools with Gold Frame Australia | StoolTopia",
    description: "Luxury velvet bar stools with gold frames in Australia. Premium velvet upholstery, elegant gold detailing, and sophisticated design.",
    images: ["/images/modern_wooden_bar_stool_with_leather_seat_and_gold_details.jpg"],
  },
};

export default function VelvetBarStoolsGoldFramePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Velvet Bar Stools with <span className="text-primary">Gold Frame</span> Australia
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience luxury with our premium velvet bar stools featuring elegant gold frames. 
                Perfect for sophisticated spaces that demand both comfort and style.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="https://stooltopia.com/products"
                  className="bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center gap-2"
                >
                  <Crown className="w-5 h-5" />
                  Shop Luxury Collection
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
                alt="Velvet bar stool with gold frame"
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
            Luxury Features That Set Us Apart
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Velvet</h3>
              <p className="text-gray-600">
                High-quality velvet upholstery that's soft to the touch, durable, and available in a range of sophisticated colors.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gold Frame Details</h3>
              <p className="text-gray-600">
                Elegant gold-finished frames that add a touch of luxury and sophistication to any space.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Colors</h3>
              <p className="text-gray-600">
                Choose from our curated palette of velvet colors to perfectly match your interior design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Available Velvet Colors
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-32 bg-emerald-600"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emerald Green</h3>
                <p className="text-gray-600 text-sm">
                  Rich, deep green velvet for a sophisticated and natural look.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-32 bg-purple-700"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Royal Purple</h3>
                <p className="text-gray-600 text-sm">
                  Luxurious purple velvet that exudes elegance and royalty.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-32 bg-rose-600"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Blush Rose</h3>
                <p className="text-gray-600 text-sm">
                  Soft, romantic rose velvet perfect for feminine spaces.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-32 bg-slate-800"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Charcoal Gray</h3>
                <p className="text-gray-600 text-sm">
                  Classic charcoal velvet for timeless elegance and versatility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Velvet & Gold Collection
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/images/brown_leather_stool_top_with_dark_wooden_legs_in_background.jpg"
                alt="Velvet bar stool with gold accents"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Classic Velvet</h3>
                <p className="text-gray-600 mb-4">
                  Timeless design with premium velvet upholstery and gold frame details.
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
                src="/images/modern_room_with_comfy_seat_art_and_minimal_furniture_design.jpg"
                alt="Modern velvet bar stool"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Velvet</h3>
                <p className="text-gray-600 mb-4">
                  Contemporary design with clean lines and luxurious velvet comfort.
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
                src="/images/beige_armchair_on_patterned_rug_against_gray_concrete_textured_wall_background.jpg"
                alt="Luxury velvet seating"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Velvet</h3>
                <p className="text-gray-600 mb-4">
                  Premium velvet with intricate gold detailing for the ultimate luxury experience.
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Why Choose Velvet Bar Stools?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Luxurious Comfort</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Soft, plush velvet that feels luxurious to the touch</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Excellent durability for long-lasting beauty</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Temperature-regulating properties for year-round comfort</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Elegant Design</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Gold frame accents add sophistication and luxury</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Versatile design that complements various interior styles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Available in multiple colors to match any décor</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Elevate Your Space with Luxury
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your home or commercial space with our premium velvet bar stools featuring elegant gold frames.
          </p>
          <Link 
            href="https://stooltopia.com/products"
            className="bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2"
          >
            <Crown className="w-5 h-5" />
            Shop Velvet Collection
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
                How do I care for velvet bar stools?
              </h3>
              <p className="text-gray-600">
                Velvet bar stools require gentle care. Regular vacuuming with a soft brush attachment helps maintain their appearance. For spills, blot immediately with a clean, dry cloth. Professional cleaning is recommended for deep cleaning.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are the gold frames real gold?
              </h3>
              <p className="text-gray-600">
                Our gold frames feature a premium gold finish that provides the luxurious appearance of gold while ensuring durability and resistance to tarnishing. The finish is designed to maintain its beautiful appearance for years.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I order custom velvet colors?
              </h3>
              <p className="text-gray-600">
                Yes! We offer custom velvet colors for larger orders. Contact our team to discuss your specific color requirements and we'll work with you to create the perfect match for your space.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
