function About() {
  return (
    <div className="max-w-[630px] w-full h-[90vh] overflow-scroll">
      <div className=" p-[40px] w-full shadow-gray-bottom">
        <h2 className="page-title">About Proof</h2>
        <p className="page-text mb-[15px]">
          We started Proof to commodo diam libero vitae erat. Aenean faucibus
          nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
          risus tristique posuere.
        </p>
        <p className="page-text mb-[15px]">
          Then we decided that it was varius enim in eros elementum tristique.
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
          commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus
          id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
        </p>
      </div>
      <div className=" p-[40px] w-full">
        <h2 className="page-title">The Team</h2>
        <div className="flex justify-between">
          <div className="w-[150px]">
            <img src="./rob-thomas.jpg" alt="team member" />
            <p className="team-member">Rob Thomas</p>
            <div className="flex">
              <img
                className="social-media-icon"
                src="./twitter-icon_black.svg"
                alt="twitter"
              />
              <img
                className="social-media-icon"
                src="./instagram-icon-black.svg"
                alt="instagram"
              />
              <img
                className="social-media-icon"
                src="./facebook-icon_black.svg"
                alt="facebook"
              />
            </div>
          </div>
          <div className="w-[150px]">
            <img src="./jen-jillians.jpg" alt="team member" />
            <p className="team-member">Jen Jillians</p>
            <div className="flex">
              <img
                className="social-media-icon"
                src="./twitter-icon_black.svg"
                alt="twitter"
              />
              <img
                className="social-media-icon"
                src="./instagram-icon-black.svg"
                alt="instagram"
              />
              <img
                className="social-media-icon"
                src="./facebook-icon_black.svg"
                alt="facebook"
              />
            </div>
          </div>
          <div className="w-[150px]">
            <img src="./tommy-tikes.jpg" alt="team member" />
            <p className="team-member">Tommy Tikes</p>
            <div className="flex">
              <img
                className="social-media-icon"
                src="./twitter-icon_black.svg"
                alt="twitter"
              />
              <img
                className="social-media-icon"
                src="./instagram-icon-black.svg"
                alt="instagram"
              />
              <img
                className="social-media-icon"
                src="./facebook-icon_black.svg"
                alt="facebook"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
