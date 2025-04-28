const Home = () => {
  return (
    <div className="w-full h-dvh bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-800 text-white">
      <section className="flex flex-col justify-center items-center text-center space-y-3 py-6"> 
        <div className="space-y-5">
          <h1 className="md:text-4xl text-3xl font-bold mt-20">Home</h1>
          <p>Meus Links: </p>
        </div>
        <main className="w-11/12 max-w-xl">
          <section className="bg-white text-zinc-800 py-2 rounded-lg font-semibold select-none transition-transform cursor-pointer hover:scale-110">
            <a href="">
              <p className="md:text-lg text-base">dadadada</p>
            </a>
          </section>
          <footer className="flex justify-center gap-3 my-5" >
              
          </footer>
        </main>
      </section>
    </div>
  );
};

export default Home;
