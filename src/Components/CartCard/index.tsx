import { Card } from "./style";
import { BsFillTrashFill } from "react-icons/bs";
interface Data {
  name: String;
  id: Number;
  img: string;
  category: String;
  price: Number;
}

interface cartProps {
  item: Data;
  cart: Array<Data>;
  setCart: Function;
  index: number;
  totalPrice: Number;
  setPrice: Function;
}

export const CartCard = ({
  item,
  cart,
  setCart,
  index,
  totalPrice,
  setPrice,
}: cartProps) => {
  const removeItem = () => {
    let newCart = cart;
    setPrice(
      parseInt(totalPrice.toFixed(2)) - parseInt(cart[index].price.toFixed(2))
    );
    console.log(newCart);
    newCart.splice(index, 1);
    console.log(newCart);
    setCart([...newCart]);
  };

  return (
    <Card>
      <figure>
        <img src={item.img} alt="" />
      </figure>

      <h2>{item.name}</h2>
      <BsFillTrashFill onClick={() => removeItem()} />
    </Card>
  );
};
