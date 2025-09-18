import image1 from "./../assets/greek salad.jpg";
import image2 from "./../assets/bruchetta.svg";
import image3 from "./../assets/lemon dessert.jpg";

const Dishes = [
  {
    name: "Greek Salad",
    price: "$12.99",
    image: image1,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    name: "Bruschetta",
    price: "$10.99",
    image: image2,
    description:
      "Grilled bread topped with a mixture of diced tomatoes, garlic, basil, and olive oil.",
  },
  {
    name: "Lemon Dessert",
    price: "$8.99",
    image: image3,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
  {
    name: "Lemon Dessert",
    price: "$8.99",
    image: image3,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export default function Specials() {
  return (
    <section className="max-w-[1200px] px-20 py-2 mx-auto flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">This Weeks Specials!</h2>
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/60 cursor-pointer transition">
          Online Menu
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {Dishes.map((dish) => (
          <Card key={dish.name} {...dish} />
        ))}
      </div>
    </section>
  );
}
function Card({
  name,
  image,
  description,
  price,
}: {
  name: string;
  image: string;
  description: string;
  price: string;
}) {
  return (
    <div className="bg-black/3 rounded-lg shadow-md h-[300px]  flex flex-col flex-1 min-w-[260px] max-w-[480px] overflow-hidden">
      <div className="w-full h-[150px] relative">
        <img
          className="object-cover w-full h-full rounded-md"
          src={image}
          alt="Special Dish"
        />

        <div className="absolute inset-0 bg-black/40 rounded-md"></div>
      </div>

      <div className="px-4 py-2 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold ">{name}</h3>
          <span className="font-bold text-primary">{price}</span>
        </div>
        <p className="text-sm text-black/60">{description}</p>
      </div>
    </div>
  );
}
