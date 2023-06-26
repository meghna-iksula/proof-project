function IndividualArticle(props) {
  return (
    <div className="flex p-[20px] lg:p-[40px] max-w-full cursor-pointer hover:text-blue shadow-gray-bottom hover:shadow-none">
      <div className="mr-[10px] lg:w-[40%]">
        <img
          className="border border-solid border-[rgba(0,0,0,0.09)] p-[4px]"
          src={props.image}
        ></img>
      </div>
      <div className="pl-[10px]">
        <div className="flex">
          <div className="mb-[15px]">
            <h2 className="text-[24px] md:text-[28px] capitalize font-Roboto-Condensed mb-[10px] leading-[31px]">
              {props.title}
            </h2>
            <p className="font-Roboto-slab text-[16px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              recusandae obcaecati numquam consequuntur rerum et.
            </p>
          </div>
          <div>
            <h2 className="text-[23px] leading-[31px]">❯</h2>
          </div>
        </div>
        <div className="flex text-[12px] text-light-gray">
          <div className="mr-[6px]">{props.date}</div>
          <div className=" px-[7px] border border-[rgba(0,0,0,0.18)] rounded-[30px] mr-[6px]">
            Photography
          </div>
          <div className="px-[7px] border border-[rgba(0,0,0,0.18)] rounded-[30px]">
            Nature
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualArticle;
