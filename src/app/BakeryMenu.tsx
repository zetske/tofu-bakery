import { playfair_display } from "./fonts";

const content = [
  {
    id: 1,
    name: "Sourdough Bread",
    description:
      "Our sourdough bread is made with a 100 year old starter and baked fresh daily.",
    items: [
      {
        id: 1,
        name: "Original Sourdough",
        price: "10",
      },
      {
        id: 2,
        name: "Jalapeno Cheddar Sourdough",
        price: "12",
      },
    ],
  },
  {
    id: 2,
    name: "Sourdough brown butter chocolate chip cookies",
    description: "",
    items: [
      {
        id: 1,
        name: "Dozen Baked",
        price: "18",
      },
      {
        id: 2,
        name: "Dozen Frozen",
        price: "15",
      },
    ],
  },
];

const BakeryMenuItem = ({
  index,
  name,
  items,
}: Readonly<{
  name: string;
  index: number;
  items: ReadonlyArray<{ id: number; name: string; price: string }>;
}>) => {
  return (
    <div className="my-20">
      <p className={playfair_display.className}>{index}.</p>
      <p className={`uppercase mt-2 ${playfair_display.className}`}>{name}</p>
      <div className="border-t-2 my-6 pt-6 border-t-[#E57C14] space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BakeryMenu = () => {
  return (
    <div className="min-h-screen px-4 md:px-10">
      {content.map((item) => (
        <BakeryMenuItem
          items={item.items}
          name={item.name}
          key={item.id}
          index={item.id}
        />
      ))}
    </div>
  );
};
