const Footer = () => {
  return (
    <div>
      <div className="fixed bottom-0 w-full">
        <div className="w-[1440px] h-[399px] relative">
          <div className="w-[1440px] h-[399px] relative">
            <div className="w-[1440px] h-[395px] left-0 top-0 absolute bg-zinc-900" />
            <div className="w-[1185px] h-[120px] left-[128px] top-[78px] absolute justify-between items-start inline-flex">
              <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-[193px] justify-center items-center gap-2 inline-flex">
                  <div className="text-zinc-400 text-[32px] font-normal font-['Quanta Grotesk Pro']">
                    Fanaticks
                  </div>
                </div>
                <div className="w-[291px] justify-start items-center gap-2 inline-flex">
                  <div className="text-center text-white text-2xl font-medium font-['Quanta Grotesk Pro'] leading-[29.21px]">
                    Buit at{" "}
                  </div>
                  <div className="w-[183.91px] h-[42.19px] relative">
                    <div className="w-[183.08px] h-[41.51px] left-[0.83px] top-0 absolute"></div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-end gap-1 inline-flex">
                <div className="text-center text-white text-lg font-normal font-['Space Grotesk'] leading-[27px]">
                  About
                </div>
                <div className="text-center text-white text-lg font-normal font-['Space Grotesk'] leading-[27px]">
                  Discover
                </div>
                <div className="text-center text-white text-lg font-normal font-['Space Grotesk'] leading-[27px]">
                  Create Event
                </div>
                <div className="text-center text-white text-lg font-normal font-['Space Grotesk'] leading-[27px]">
                  Connect Wallet
                </div>
              </div>
            </div>
            <div className="w-[1440px] h-[66px] left-0 top-[333px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="w-[1440px] h-[66px] border-t border-white border-opacity-10" />
              <div className="left-[128px] top-[17px] absolute justify-start items-start gap-[674px] inline-flex">
                <div className="text-center text-white text-lg font-normal font-['Space Grotesk'] leading-[27px]">
                  © 2023 Fanaticks
                </div>
                <div className="justify-start items-start gap-[23px] flex">
                  <div className="text-center text-white text-lg font-normal font-['Space Grotesk'] underline leading-[27px]">
                    Copyrights Reserved
                  </div>
                  <div className="text-center text-white text-lg font-normal font-['Space Grotesk'] underline leading-[27px]">
                    Terms & Condition
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1185px] h-[75px] left-[128px] top-[210px] absolute justify-end items-end gap-[561px] inline-flex">
              <div className="flex-col justify-center items-start gap-2 inline-flex">
                <div className="text-center text-white text-lg font-medium font-['Space Grotesk'] leading-[27px]">
                  Follow us
                </div>
                <div className="justify-start items-start gap-2 inline-flex">
                  <div className="w-[41px] justify-center items-center gap-2.5 flex">
                    <div className="w-[41px] h-[41px] bg-white bg-opacity-10 rounded-lg" />
                    <div className="w-6 h-6 left-[8px] top-[8px] absolute" />
                  </div>
                  <div className="w-[41px] justify-center items-center gap-2.5 flex">
                    <div className="w-[41px] h-[41px] bg-white bg-opacity-10 rounded-lg" />
                    <div className="w-[27.90px] h-[18px] left-[7px] top-[11px] absolute" />
                  </div>
                  <div className="w-[41px] justify-center items-center gap-2.5 flex">
                    <div className="w-[41px] h-[41px] bg-white bg-opacity-10 rounded-lg" />
                    <div className="w-6 h-6 left-[9px] top-[8px] absolute" />
                  </div>
                  <div className="w-[41px] justify-center items-center gap-2.5 flex">
                    <div className="w-[41px] h-[41px] bg-white bg-opacity-10 rounded-lg" />
                    <div className="w-6 h-6 left-[9px] top-[8px] absolute" />
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-1 flex">
                <div className="justify-start items-start gap-[9.86px] flex">
                  <div className="h-[36.08px] px-[13.15px] py-[9.04px] rounded-[9.86px] border border-white border-opacity-10 justify-start items-center gap-[8.22px] flex">
                    <div className="text-white text-opacity-50 text-sm font-normal font-['Space Grotesk'] leading-[17.50px]">
                      Your email address
                    </div>
                  </div>
                </div>
                <div className="justify-start items-start gap-[9.86px] flex">
                  <div className="h-[36.08px] px-[13.15px] py-[9.04px] bg-purple-900 rounded-[9.86px] justify-start items-center gap-[8.22px] flex">
                    <div className="text-white text-sm font-medium font-['Space Grotesk'] leading-[17.50px]">
                      Sign up
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
