import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.png";
import "./Home.css";
const Home = () => {
  return (
    <section id="hero">
      <div className="md:container md:mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="col-2 md:col-span-1 flex justify-center flex-col">
            <h1>
              Srijan <br className="md:block hidden" /> Shrestha
            </h1>
            <h4 className="text-gray-500 lg:text-4xl text-2xl">Full Stack Software Engineer</h4>
            <p className="text-gray-400 lg:my-6 my-3">
              An experienced and skilled professional, who produces quality
              work.
            </p>
            <button
              type="button"
              className="w-fit mt-4 md:mt-5 p-2 bg-bieze rounded-sm outline outline-offset-4"
            >
               <Link to={'https://srijanshrestha.com.np'} target="_blank"> Learn More </Link>
            </button>
          </div>
          <div className="col-2 md:col-span-1 img-col">
            <img
              src={heroImg}
              className="object-fit  sm:object-fill md:object-scale-down"
              alt="Software Development"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
