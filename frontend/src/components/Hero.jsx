const Hero = () => {
  return (
    <div className="p-10 py-20 lg:px-20 bg-[url('wick.jpg')] bg-center bg-cover bg-no-repeat text-white">
      <h1 className="text-4xl md:text-5xl font-bold">Hero</h1>
      <h2 className="text-2xl md:text-3xl font-semibold">
        Milyonlarca Film, Dizi ve Aktörleri Keşfet
      </h2>

      <div className="relative rounded-full flex mt-5 overflow-hidden">
        <input
          type="text"
          className="w-full p-2 px-4 text-black"
          placeholder="Film, Dizi ve Aktör Arayın"
        />
        <button className="bg-blue-400 h-full w-20 text-white font-semibold hover:bg-blue-600 transition absolute end-0">
          Ara
        </button>
      </div>
    </div>
  );
};

export default Hero;
