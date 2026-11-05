function Hero() {
  return (
    <section className="hero">
      <p className="hero-tag">STUDENT FREELANCING MARKETPLACE</p>

      <h1>Turn Your Skills Into Opportunities</h1>

      <p className="hero-description">
        Find talented students for your next project or showcase
        your skills and start freelancing.
      </p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for services..."
        />

        <button>Search</button>
      </div>

      <div className="categories">
        <span>Web Development</span>
        <span>Design</span>
        <span>Video Editing</span>
        <span>Tutoring</span>
      </div>
    </section>
  );
}

export default Hero;