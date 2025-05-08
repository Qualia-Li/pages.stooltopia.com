import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
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
            <button className="bg-navy text-white px-8 py-4 rounded-lg text-lg font-semibold
              hover:bg-opacity-90 transition-all hover:scale-105">
              Listen Now
            </button>
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
      <section className="bg-skyblue/10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-navy mb-16 animate-fade-up">
            Meet Your Hosts
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">QL</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy">Quan-Lai Li</h3>
                  <p className="text-gray-600">Creator of ChatSlide.AI</p>
                </div>
              </div>
              <p className="text-gray-600">
                Tech innovator and AI enthusiast, bringing cutting-edge insights from the world of presentation technology.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">NN</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy">Nil Ni</h3>
                  <p className="text-gray-600">Creator of MakeForm.AI</p>
                </div>
              </div>
              <p className="text-gray-600">
                Form building pioneer and UX expert, sharing insights on creating seamless digital experiences.
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
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">Ready to Join the Conversation?</h2>
            <p className="text-xl mb-8">Subscribe to our podcast and never miss an episode</p>
            <div className="flex flex-wrap gap-4 justify-center">
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
  );
}
