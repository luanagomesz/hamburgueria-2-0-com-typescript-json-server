import { Card } from "./style";

interface Data {
  name: String;
  id: number;
  img: string;
  category: String;
  price: Number;
}

interface CardProps {
  item: Data;
  setCart: Function;
  Cart: Array<object>;
  products: Array<Data>;
  setPrice: Function;
  totalPrice: Number;
}

export const ProductCard = ({
  item,
  setCart,
  Cart,
  products,
  setPrice,
  totalPrice,
}: CardProps) => {
  const handleAdd = (item: number) => {
    setCart([...Cart, products[item]]);
    console.log(products[item]);
    setPrice(
      parseInt(totalPrice.toFixed(2)) +
        parseInt(products[item].price.toFixed(2))
    );
    console.log(totalPrice);
  };
  return (
    <Card id={item.id.toString()}>
      <div className="imgContainer">
        <img src={item.img} alt="" />
      </div>
      <h2>{item.name}</h2>
      <p>{item.category}</p>
      <span> R$ {item.price.toFixed(2)}</span>
      <button onClick={() => handleAdd(item.id - 1)}>Adicionar</button>
    </Card>
  );
};
