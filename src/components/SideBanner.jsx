function SideBanner() {
  return (
    <div className="sm:flex lg:inline-block bg-waterfall-img bg-cover bg-[91%_50%] bg-no-repeat w-full lg:w-1/2 lg:max-w-[600px] lg:h-screen text-white px-[15px] py-[42px] lg:pt-[164px] lg:text-center box-border">
      <h1 className=" inline-block uppercase font-Roboto-Condensed text-[42px] lg:text-[78px] p-[14px] lg:p-[21px] leading-[30px] lg:leading-[60px] border-8 border-solid border-proof-border mb-[13px] lg:mb-[31px] h-fit mr-[14px] lg:mr-0">
        Proof
      </h1>
      <div className="hidden lg:block text-[45px] font-light mb-[68px]">
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
      <div className="text-[16px] text-left lg:text-center">
        <p className="capitalize font-Roboto-slab leading-[20px] mb-[4px]">
          a nature photography magazine
        </p>
        <p className="capitalize font-Roboto text-[rgba(255,255,255,0.74)]">
          by billy rogers
        </p>
      </div>
    </div>
  );
}

export default SideBanner;
