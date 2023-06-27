import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArticlePage = () => {
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    fetchArticlesHandler();
  });

  async function fetchArticlesHandler() {
    const response = await fetch("./photos.json");
    const data = await response.json();
    console.log(data);
    setDataSet(data);
  }

  return (
    <div>
      <header className="font-Roboto-Condensed bg-waves-img h-[115px] md:h-[357px] md:pt-[49px] lg:h-[470px] bg-cover">
        <div className="pt-[66px] md:pt-[241px] lg:pt-[345px] px-[10px] md:px-0 md:max-w-[728px] lg:max-w-[940px] mx-auto">
          <Link to="/proof-project/">
            <h2 className="w-fit text-[14px] leading-[20px] px-[15px] py-[7px] uppercase text-white border-[3px] border-white hover:border-blue cursor-pointer transition-colors ease-in">
              ❮ &nbsp; all stories
            </h2>
          </Link>
        </div>
      </header>
      <div className="md:flex px-[10px] py-[47px] md:px-0 md:max-w-[728px] lg:max-w-[940px] mx-auto text-gray">
        <div>
          <h1 className="font-Roboto-Condensed font-bold text-gray text-[36px] leading-[40px] lg:text-[43px] lg:leading-[47px] mb-[18px]">
            Trekking and Documenting the Surreal Patagonia
          </h1>
          <p className="font-Roboto text-gray font-light text-[16px] leading-[21px] md:text-[19px] md:leading-[24px] mb-[30px] md:mb-[50px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>

          <p className="font-Roboto-slab font-light text-[16px] leading-[23px] mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean
            faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
            vitae risus tristique posuere.
          </p>
          <p className="font-Roboto-slab font-light text-[16px] leading-[23px] mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet.
          </p>
          <p className="font-Roboto-slab font-light text-[16px] leading-[23px] mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean
            faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
            vitae risus tristique posuere.
          </p>
          <h2 className="font-Roboto-Condensed text-[28px] mb-[30px] leading-[31px]">
            Something new is coming
          </h2>
          <p className="font-Roboto-slab font-light text-[16px] leading-[23px] mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <div className="flex flex-wrap">
            {dataSet.map((data) => (
              <img className="w-[60px] md:w-[100px] mr-3 mb-3" src={data.url} />
            ))}
          </div>
        </div>

        <div className="mx-[70px] text-center font-Roboto-Condensed">
          <div className="w-[135px] mt-[70px] md:mt-[-70px] bg-white mx-auto">
            <img
              className="w-full p-[7px]"
              src="./author-img.jpg"
              alt="author"
            />
          </div>
          <p className="mt-[30px] mb-[20px] text-[28px] leading-[31px] text-gray">
            Jimmy Huarez
          </p>
          <p className="w-[147px] lg:w-[200px] mx-auto mb-8 text-[14px] leading-[20px] font-light text-gray">
            Jimmy started ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique
          </p>
          <div className="flex justify-center mb-6 text-[12px] text-light-gray">
            <div className="mr-[6px]">March 2, 2014</div>
            <div className=" px-[8px] border border-[rgba(0,0,0,0.18)] rounded-[30px] mr-[6px]">
              Camera
            </div>
            <div className="px-[8px] border border-[rgba(0,0,0,0.18)] rounded-[30px]">
              Nature
            </div>
          </div>
          <div className="flex justify-center">
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
  );
};

export default ArticlePage;
