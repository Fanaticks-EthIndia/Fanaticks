const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-section content">
          <div className="hero-section-title">
            Elevate Events Own Experiences
          </div>
          <div className="hero-section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            diam justo, varius non sapien id.
          </div>
          <div className="hero-section-button space-x-4">
            <button className="hero-button create bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create Event
            </button>
            <button className="hero-button discover bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Discover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
