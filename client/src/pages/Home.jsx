const Home = () => {
  return (
    <div>
      <div className="hero-section flex items-center justify-center h-screen relative">
        <div className="hero-section content text-center">
          <div className="hero-section-title text-4xl font-bold mb-4 font-secondary">
            Elevate Events
          </div>
          <div className="hero-section-title text-4xl font-bold mb-4">
            Own Experiences
          </div>
          <div className="hero-section-subtitle text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            diam justo, varius non sapien id.
          </div>
          <div className="hero-section-button space-x-4">
            <button className="hero-button create bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create Event
            </button>
            <button className="hero-button discover bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Discover Events
            </button>
          </div>
        </div>

        {/* Top Right Image */}
        <img
          src="top-right-image.jpg" // Replace with the actual path to your image
          alt="Top Right Image"
          className="absolute top-0 right-0 w-24 h-24 mr-4 mt-4"
        />

        {/* Bottom Left Image */}
        <img
          src="bottom-left-image.jpg" // Replace with the actual path to your image
          alt="Bottom Left Image"
          className="absolute bottom-0 left-0 w-24 h-24 ml-4 mb-4"
        />
      </div>
    </div>
  );
};

export default Home;
