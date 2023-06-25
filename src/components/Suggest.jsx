function Suggest() {
  return (
    <div className=" p-[40px] max-w-[630px] w-full h-[90vh] overflow-scroll">
      <h2 className="page-title">Suggest an article</h2>
      <p className="page-text mb-[30px]">
        Proof magazine is a community effort. No one person writes or creates
        awesome stuff. We all play a role people!
      </p>
      <div>
        <form action="#" className="text-[16px] flex flex-wrap justify-between">
          <input
            className="form-input w-full"
            type="text"
            placeholder="Full Name"
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
            placeholder="What's the Subject?"
            required
          />
          <textarea
            className="form-input w-full h-[150px]"
            maxlength="5000"
            placeholder="What's the story?"
            required
          />
          <button className="form-button">Send suggestion</button>
        </form>
      </div>
    </div>
  );
}

export default Suggest;
