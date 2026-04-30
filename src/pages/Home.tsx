import { Link } from "react-router";

const Home = () => {
  return (
    <div className="min-h-full flex flex-col items-center text-base-100 gap-10">
      <h1 className="font-bold text-3xl text-shadow-md text-shadow-gray-300 mt-10">
        A basic <em className="underline font-light">welcome</em> message...
      </h1>

      <img
        src="https://miro.medium.com/v2/0*EfkvjCOb8HA-dKNR"
        alt="library"
        className="w-140 grayscale shadow-xl hover:grayscale-0 transition duration-300"
      />
      <Link
        to={"/books"}
        className="btn text-2xl py-8 px-6 rounded-2xl shadow-xl bg-blue-700 border-none hover:bg-blue-900 hover:scale-102 transition duration-300"
      >
        Go to Library!
      </Link>
    </div>
  );
};

export default Home;
