import spiral from "../assets/images/spiral.svg";

const Home = () => {
  return (
    <div>
      <div className="hero-section flex items-center justify-center h-screen relative">
        <div className="hero-section justify-center text-center">
          <div className="hero-section-title text-4xl font-bold mb-4 font-secondary text-secondary">
            Elevate Events
          </div>
          <div className="hero-section-title text-4xl font-bold mb-4 font-secondary text-secondary">
            Own Experiences
          </div>
          <div className="hero-section-subtitle text-lg mb-8 font-primary text-white text-center w-30">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            diam justo, varius non sapien id.
          </div>
          <div className="hero-section-button flex justify-center space-x-4">
            <button className="hero-button create bg-secondary font-primary text-background font-medium py-2 px-4 rounded-full">
              Create Event
            </button>
            <div className="flex">
              <button className="hero-button discover flex gap-2 bg-none font-primary border text-white font-medium  py-2 px-4 rounded-full">
                Discover Events
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M15.1696 6.5C17.273 8.05556 19.1622 9.87278 20.7905 11.9057C20.9302 12.0801 21 12.29 21 12.5M15.1696 18.5C17.273 16.9444 19.1622 15.1272 20.7905 13.0943C20.9302 12.9199 21 12.71 21 12.5M21 12.5H3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>

            </div>
          </div>
        </div>

        {/* Top Right Image */}
        <img
          src={spiral} // Replace with the actual path to your image
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
      <div id="about">
        <div className="justify-center items-center gap-[251px] inline-flex">
          <div className="h-[237px] flex-col justify-start items-start gap-5 inline-flex">
            <div className="text-zinc-400 text-4xl font-semibold font-['Quanta Grotesk Pro'] leading-[45px]">
              About Us
            </div>
            <div className="w-[585px] h-[137px] text-black text-xl font-medium font-['Space Grotesk'] leading-[30px]">
              Embark on a revolutionary journey with Fanaticks – your ultimate NFT
              ticketing platform. Elevate your events, sell tickets effortlessly,
              and incentivize your audience according to their interest &
              interaction. Unleash the power of NFTs in ticketing. Join us, where
              innovation meets seamless event experiences
            </div>
          </div>
          <img
            className="w-[258px] h-[202px]"
            src="https://via.placeholder.com/258x202"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
