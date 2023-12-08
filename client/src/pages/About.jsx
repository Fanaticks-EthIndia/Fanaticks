const About = () => {
  return (
    <div>
      <div className="w-[1094px] h-[237px] justify-center items-center gap-[251px] inline-flex">
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
  );
};

export default About;
