import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Social from "../../components/social/Index";

const Home = () => {
  return (
    <div className="w-full h-dvh bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-800 text-white">
      <section className="flex flex-col justify-center items-center text-center space-y-3 py-6">
        <div className="space-y-5">
          <h1 className="md:text-4xl text-3xl font-bold mt-20">Home</h1>
          <p>Meus Links: </p>
        </div>
        <main className="w-11/12 max-w-xl">
          <section className="bg-white text-zinc-800 py-2 rounded-lg font-semibold select-none cursor-pointer transition-transform hover:scale-110">
            <a href="">
              <p className="md:text-lg text-base">dadadada</p>
            </a>
          </section>
          <footer className="flex justify-center gap-3 my-5">
            <Social url={"dad"}>
              <FaFacebook size={30} className="transition-transform hover:scale-110"/>
            </Social>
            <Social url="#">
              <FaLinkedin size={30} className="transition-transform hover:scale-110"/>
            </Social>
            <Social url="https://github.com/Gustavo-2027">
              <FaGithub size={30} className="transition-transform hover:scale-110"/>
            </Social>

          </footer>
        </main>
      </section>
    </div>
  );
};

export default Home;
