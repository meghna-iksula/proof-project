function SideBanner() {
  return (
    <div className="bg-waterfall-img bg-cover bg-[91%_50%] bg-no-repeat w-1/2 max-w-[600px] h-screen text-white px-[15px] pt-[164px] text-center box-border">
      <h1 className="inline-block uppercase font-Roboto-Condensed text-[78px] p-[21px] leading-[60px] border-8 border-solid border-proof-border mb-[31px]">
        Proof
      </h1>
      <div className="text-[45px] font-light mb-[68px]">
        <p className="capitalize font-Roboto-Condensed leading-[54px]">
          explore.
        </p>
        <p className="capitalize font-Roboto-Condensed leading-[54px]">
          shoot.
        </p>
        <p className="capitalize font-Roboto-Condensed leading-[54px]">
          write.
        </p>
      </div>
      <div className="text-[16px]">
        <p className="capitalize font-Roboto-slab leading-[20px] mb-[4px]">
          a nature photography magazine
        </p>
        <p className="capitalize font-Roboto text-[rgba(255,255,255,0.74)]">
          by billy rogers
        </p>
      </div>
      <div className="absolute w-1/2 max-w-[600px] bottom-0 left-0 flex border-t border-proof-border">
        <div className="w-1/4 h-[58px] pt-[20px] border-r border-proof-border cursor-pointer hover:bg-light-white transition-all duration-300">
          <img className="mx-auto" src="/home-icon.svg" alt="twitter" />
        </div>
        <div className="w-1/4 h-[58px] pt-[20px] border-r border-proof-border cursor-pointer hover:bg-light-white transition-all duration-300">
          <img className="mx-auto" src="/twitter-icon.svg" alt="twitter" />
        </div>
        <div className="w-1/4 h-[58px] pt-[20px] border-r border-proof-border cursor-pointer hover:bg-light-white transition-all duration-300">
          <img className="mx-auto" src="/facebook-icon.svg" alt="twitter" />
        </div>
        <div className="w-1/4 h-[58px] pt-[18px] text-center cursor-pointer hover:bg-light-white transition-all duration-300">
          <p className="font-Roboto-Condensed uppercase text-[15px] text-[rgba(255,255,255,0.74)]">
            Subscribe
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideBanner;
