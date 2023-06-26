function SocialLinks() {
  return (
    <div className="lg:absolute lg:bottom-0 lg:left-0 bg-black lg:bg-transparent w-full lg:w-1/2 lg:max-w-[600px] flex border-t border-proof-border">
      <div className="social-links-icon">
        <img className="mx-auto" src="./home-icon.svg" alt="home" />
      </div>
      <div className="social-links-icon">
        <img className="mx-auto" src="./twitter-icon.svg" alt="twitter" />
      </div>
      <div className="social-links-icon">
        <img className="mx-auto" src="./facebook-icon.svg" alt="facebook" />
      </div>
      <div className="w-1/4 h-[58px] pt-[18px] text-center cursor-pointer hover:bg-light-white transition-all duration-300">
        <p className="font-Roboto-Condensed uppercase text-[15px] text-[rgba(255,255,255,0.74)]">
          Subscribe
        </p>
      </div>
    </div>
  );
}

export default SocialLinks;
