function AboutUs({}) {
  return (
    <>
      <section className="bg-black text-white min-h-screen px-4 pt-8 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">What We Do</h1>

          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Simply put, we understand how to get business results from social.
            Our content-first offering is completely bespoke for each of our
            clients, with different industries, brands, objectives, audiences
            and influencers, there is no plug &apos;n&apos; play option or
            corner cutting platform. With that in mind, we delve into our years
            of performance data and the latest cultural trends and insights to
            develop the most effective social creative strategies and campaigns
            that deliver industry-leading results for our clients.
          </p>

          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
            Read more
          </button>
        </div>
      </section>
      {/* <hr className="border-gray-400 w-auto mx-auto" /> */}
    </>
  );
}

export default AboutUs;
