import Header from '@/components/Header';
import Image from "next/image";

export default function Home() {

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-navy mb-6">
                Welcome to <span className="text-gold">VibeHacker</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join us as we explore the intersection of technology, innovation, and entrepreneurship
                with industry leaders and visionaries.
              </p>
              <a 
                href="https://www.youtube.com/@VibeHackerFM"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-navy text-white px-8 py-4 rounded-lg text-lg font-semibold
                  hover:bg-opacity-90 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Watch Now</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
                </svg>
              </a>
            </div>
            <div className="lg:w-1/2 animate-fade-in">
              <Image
                src="/images/vibehacker_logo.png"
                alt="VibeHacker Podcast"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Hosts Section */}
        <section className="bg-skyblue/10 py-20" id="hosts">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-navy mb-16 animate-fade-up">
              Meet Your Hosts
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-6 mb-6">
                  <Image
                    src="/images/quanlai.png"
                    alt="Quan-Lai Li"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-navy">
                      <a 
                        href="https://quanlai.li"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-skyblue transition-colors"
                      >
                        Quan-Lai Li
                      </a>
                    </h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">Building:</p>
                      <a 
                        href="https://chatslide.ai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-navy hover:text-skyblue transition-colors block hover:underline"
                      >
                        ChatSlide.AI
                      </a>
                      <a 
                        href="https://googlemapstimeline.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-navy hover:text-skyblue transition-colors block hover:underline"
                      >
                        Google Maps Timeline
                      </a>
                      <a 
                        href="https://enception.ai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-navy hover:text-skyblue transition-colors block hover:underline"
                      >
                        Enception.AI
                      </a>
                      <div className="flex gap-2 mt-2">
                        <a 
                          href="https://x.com/quanlai_li" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-navy hover:text-skyblue transition-colors"
                        >
                          @quanlai_li
                        </a>
                        <span className="text-gray-400">•</span>
                        {/* <a 
                          href="https://x.com/chatslide_ai" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-navy hover:text-skyblue transition-colors"
                        >
                          @chatslide_ai
                        </a>
                        <span className="text-gray-400">•</span>
                        <a 
                          href="https://x.com/enception_ai" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-navy hover:text-skyblue transition-colors"
                        >
                          @enception_ai
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Serial entrepreneur focused on AI-powered tools and innovative solutions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-6 mb-6">
                  <Image
                    src="/images/nil.jpg"
                    alt="Nil Ni"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-navy">Nil Ni</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">Previously at @Intuit, @CreditKarma</p>
                      <p className="text-gray-600">Angel Squad @hustlefundvc</p>
                      <div className="space-y-1 mt-2">
                        <a 
                          href="https://tarotread.ai" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-navy hover:text-skyblue transition-colors block hover:underline"
                        >
                          TarotRead.AI (Free)
                        </a>
                        <a 
                          href="https://autofillr.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-navy hover:text-skyblue transition-colors block hover:underline"
                        >
                          Autofillr.com (Free)
                        </a>
                        <a 
                          href="https://louerable.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-navy hover:text-skyblue transition-colors block hover:underline"
                        >
                          Louerable.com ($6000 ARR)
                        </a>
                      </div>
                      <a 
                        href="https://x.com/_nilni" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-navy hover:text-skyblue transition-colors block mt-2"
                      >
                        @_nilni
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Husband, Dad of 2, and serial entrepreneur building innovative tools and platforms. Angel investor passionate about supporting early-stage startups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center text-navy mb-16 animate-fade-up">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tech Insights",
                description: "Deep dives into the latest technology trends and innovations"
              },
              {
                title: "Startup Stories",
                description: "Real experiences from successful entrepreneurs and founders"
              },
              {
                title: "AI & Future",
                description: "Exploring the cutting edge of artificial intelligence and its impact"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-navy mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy text-white py-20" id="follow_us">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl font-bold mb-6">Ready to Join the Conversation?</h2>
              <p className="text-xl mb-8">Subscribe and never miss an episode</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="https://www.youtube.com/@VibeHackerFM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF0000] text-white px-8 py-4 rounded-lg text-lg font-semibold
                    hover:bg-opacity-90 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
                  </svg>
                  YouTube
                </a>
                <button className="bg-gold text-navy px-8 py-4 rounded-lg text-lg font-semibold
                  hover:bg-opacity-90 hover:scale-105 transition-all duration-300">
                  Apple Podcasts
                </button>
                <button className="bg-skyblue text-navy px-8 py-4 rounded-lg text-lg font-semibold
                  hover:bg-opacity-90 hover:scale-105 transition-all duration-300">
                  Spotify
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/image/vibehacker_logo.png"
                  alt="VibeHacker"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-2xl font-bold">VibeHacker</span>
              </div>
              <p className="text-gray-300">
                Exploring the intersection of technology, innovation, and entrepreneurship
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#hosts" className="text-gray-300 hover:text-white transition-colors">
                    Our Hosts
                  </a>
                </li>
                <li>
                  <a href="#episodes" className="text-gray-300 hover:text-white transition-colors">
                    Latest Episodes
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.youtube.com/@VibeHackerFM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
                    </svg>
                    YouTube
                  </a>
                </li>
                <li>
                  <a 
                    href="https://x.com/vibehacker_fm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    X (Twitter)
                  </a>
                </li>
              </ul>
            </div>

            {/* Listen On */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Listen On</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Apple Podcasts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Spotify
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
            <p>© {new Date().getFullYear()} VibeHacker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
