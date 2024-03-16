import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 px-4 sm:my-16 text-center">
      <h1
        className=" mb-8 text-xl text-stone-700 font-semibold 
      text-center md:text-3xl"
      >
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
