import { CartContainer, PageContainer } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { CartCard } from "../CartCard";
import { useEffect } from "react";

interface Data {
  name: String;
  id: number;
  img: string;
  category: String;
  price: Number;
}
interface cartProps {
  cart: Array<Data>;
  showCart: Boolean;
  setShowCart: Function;
  setPrice: Function;
  totalPrice: Number;
  setCart: Function;
}

export const CartDiv = ({
  cart,
  setCart,
  showCart,
  setShowCart,
  totalPrice,
  setPrice,
}: cartProps) => {
  const removeAll = () => {
    setPrice(0);

    setCart([]);
  };

  return showCart === true ? (
    <PageContainer>
      <CartContainer>
        <div className="topCart">
          <h1>Carrinho de compras</h1>
          <AiOutlineClose onClick={() => setShowCart(false)} />
        </div>
        {cart.length <= 0 ? (
          <div className="empty">
            <h2> Sua sacola está vazia</h2>{" "}
            <p className="buttoon" onClick={() => setShowCart(false)}>
              Adicione itens
            </p>
          </div>
        ) : (
          <>
            <div className="containerItems">
              {cart.map((item, index) => (
                <CartCard
                  item={item}
                  setCart={setCart}
                  cart={cart}
                  index={index}
                  setPrice={setPrice}
                  totalPrice={totalPrice}
                />
              ))}
            </div>

            <div className="pricetotal">
              <h2>total</h2>
              <h3>R$ {totalPrice}</h3>
            </div>
            <button className="removeAll" onClick={() => removeAll()}>
              Remover todos
            </button>
          </>
        )}
      </CartContainer>
    </PageContainer>
  ) : (
    <></>
  );
};
