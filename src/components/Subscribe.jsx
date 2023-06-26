function Subscribe() {
  return (
    <div className="p-[20px] lg:p-[40px] lg:max-w-[630px] w-full lg:h-[90vh] mb-[100px] lg:mb-0 overflow-scroll">
      <h2 className="page-title">Subscribe to Proof</h2>
      <p className="page-text mb-[30px]">
        Want the latest articles in your inbox? Subscribe - it's free! Just give
        us your contact info and you're on your way.
      </p>
      <div>
        <form action="#" className="text-[16px] flex flex-wrap justify-between">
          <input
            className="form-input w-[48%] mr-[10px] lg:mr-[15px]"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            className="form-input w-[48%]"
            type="text"
            placeholder="Last Name"
            required
          />
          <input
            className="form-input w-full"
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            className="form-input w-full"
            type="text"
            placeholder="What's you favorite location? (Optional)"
            required
          />
          <button className="form-button">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
