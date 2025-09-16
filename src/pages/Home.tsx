import image from "./../assets/restauranfood.jpg";

export default function Home() {
  return (
    <div className="min-h-[110vh] flex flex-col">
      <section className="bg-amber-200 relative flex px-20 py-4">
        <div className="flex flex-col max-w-lg p-4 gap-2">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Little Lemon</h1>
            <p className="text-lg font-light">Chicago</p>
          </div>
          <div className="flex flex-col gap-4 items-start mt-4">
            <p className="text-base font-normal">
              We are a family-owned Mediterranean restaurant in the heart of
              Chicago. For more than 20 years, we have been serving authentic
              dishes with a modern twist. Our chefs use the freshest ingredients
            </p>
            <button>
              <a href="reservations" className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-lg shadow-md hover:bg-amber-600">
                Reserve a Table
              </a>
            </button>
          </div>
        </div>
        <div className="absolute right-[10%] top-[80%] transform -translate-y-1/2">
          <img
            src={image}
            alt="Delicious Mediterranean Dish"
            className="w-[300px] h-[300px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>
    </div>
  );
}
