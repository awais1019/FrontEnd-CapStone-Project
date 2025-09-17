import image from "./../assets/restauranfood.jpg";

export default function HeroSection() {
  return (
    <section className="bg-secondary/95 relative gap-4 flex flex-col lg:flex-row justify-between items-center lg:px-40 py-6 px-6">
      <div className="flex flex-col max-w-lg lg:p-4 gap-2 lg:items-start">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-primary">Little Lemon</h1>
          <p className="text-lg  text-white/75 font-semibold">Chicago</p>
        </div>
        <div className="flex flex-col gap-5 items-start">
          <p className="text-base font-normal max-w-[200px] lg:max-w-lg text-white/70">
            We are a family-owned Mediterranean restaurant in the heart of
            Chicago. For more than 20 years, we have been serving authentic
            dishes with a modern twist. Our chefs use the freshest ingredients
          </p>
          <button>
            <a
              href="reservations"
              className="px-5 py-3 bg-primary text-white/80 rounded-md shadow-md hover:bg-primary/70 transition hover:text-white"
            >
              Reserve a Table
            </a>
          </button>
        </div>
      </div>
      <div className="lg:absolute lg:right-[10%] lg:bottom-[30%] lg:transform lg:translate-y-1/2">
        <img
          src={image}
          alt="Delicious Mediterranean Dish"
          className="w-[230px] h-[300px]  rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
