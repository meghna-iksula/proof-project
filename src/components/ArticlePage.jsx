import { Link } from "react-router-dom";

const ArticlePage = () => {
  return (
    <div>
      <header className="font-Roboto-Condensed bg-waves-img h-[115px] md:h-[357px] md:pt-[49px] lg:h-[470px] bg-cover">
        <div className="pt-[66px] md:pt-[241px] lg:pt-[345px] px-[10px] md:px-0 md:max-w-[728px] lg:max-w-[940px] mx-auto">
          <Link to="/">
            <h2 className="w-fit text-[14px] leading-[20px] px-[15px] py-[7px] uppercase text-white border-[3px] border-white hover:border-blue cursor-pointer transition-colors ease-in">
              ❮ &nbsp; all stories
            </h2>
          </Link>
        </div>
      </header>
      <div className="md:flex px-[10px] py-[47px] md:px-0 md:max-w-[728px] lg:max-w-[940px] mx-auto">
        <div>
          <h1 className="font-Roboto-Condensed font-bold text-gray text-[43px] leading-[47px] mb-[18px]">
            Trekking and Documenting the Surreal Patagonia
          </h1>
          <p className="font-Roboto-slab font-light text-[16px] leading-[23px] mb-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus minus cupiditate dolore temporibus labore repellendus
            ducimus nisi facilis earum culpa, magni eius magnam minima ex quo!
            Nihil ad qui numquam asperiores tempora id doloremque modi? Delectus
            optio omnis cumque quod? Maxime porro natus totam repellat, mollitia
            officia quia, reiciendis, repudiandae voluptatum dicta sequi a illum
            et adipisci sunt dolorem beatae? Quis qui aliquid accusamus dolor
            quo velit quasi maxime quas in illum! Sint, fuga unde! Eveniet
            corrupti, fugiat atque quae ut odit.
          </p>
          <p className="font-Roboto-slab font-light text-[16px] leading-[23px] mb-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus minus cupiditate dolore temporibus labore repellendus
            ducimus nisi facilis earum culpa, magni eius magnam minima ex quo!
            Nihil ad qui numquam asperiores tempora id doloremque modi? Delectus
            optio omnis cumque quod? Maxime porro natus totam repellat, mollitia
            officia quia, reiciendis, repudiandae voluptatum dicta sequi a illum
            et adipisci sunt dolorem beatae? Quis qui aliquid accusamus dolor
            quo velit quasi maxime quas in illum! Sint, fuga unde! Eveniet
            corrupti, fugiat atque quae ut odit.
          </p>
          <p className="font-Roboto-slab font-light text-[16px] leading-[23px] mb-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus minus cupiditate dolore temporibus labore repellendus
            ducimus nisi facilis earum culpa, magni eius magnam minima ex quo!
            Nihil ad qui numquam asperiores tempora id doloremque modi? Delectus
            optio omnis cumque quod? Maxime porro natus totam repellat, mollitia
            officia quia, reiciendis, repudiandae voluptatum dicta sequi a illum
            et adipisci sunt dolorem beatae? Quis qui aliquid accusamus dolor
            quo velit quasi maxime quas in illum! Sint, fuga unde! Eveniet
            corrupti, fugiat atque quae ut odit.
          </p>
        </div>
        <div className="mx-[100px] text-center font-Roboto-Condensed">
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
          <p className="text-[14px] leading-[20px] font-light text-gray">
            Jimmy started ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
