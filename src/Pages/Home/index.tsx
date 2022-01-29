import { PageContainer, Header, ProductsContainer } from "./style";
import { useEffect, useState } from "react";
import { ProductCard } from "../../Components/ProductCard";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import axios from "axios";
import { CartDiv } from "../../Components/Cart";
import { useHistory } from "react-router-dom";
interface Data {
  name: String;
  id: number;
  img: string;
  category: String;
  price: Number;
}
export const Home = () => {
  const [products, setProducts] = useState<Array<Data>>([]);
  const [filteredSearch, setFiltered] = useState<Array<Data>>([]);
  const [Cart, setCart] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [totalPrice, setPrice] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("https://hamburgueria-kenzie-server.herokuapp.com/item")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      });
  }, []);

  const filterSearch = () => {
    setFiltered(
      products.filter(
        (item) =>
          item.name.toUpperCase().includes(userInput.toUpperCase()) ||
          item.category.toUpperCase().includes(userInput.toUpperCase())
      )
    );
  };

  const logout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <PageContainer>
      <Header>
        {" "}
        <div className="titulo">
          <h1>Burguer</h1> <span>Kenzie</span>
        </div>
        <div className="containerRigth">
          <div className="searchContainer">
            <input
              className="input"
              type="text"
              placeholder="Digitar Pesquisa"
              onChange={(e) => setUserInput(e.target.value)}
            />
            <div className="searchButton">
              {" "}
              <FaSearch onClick={() => filterSearch()} />
            </div>
          </div>

          <div className="containerMobile">
            <FaSearch onClick={() => filterSearch()} />
          </div>
          <div className="cart">
            <FaShoppingCart
              onClick={() => {
                if (showCart === false) {
                  setShowCart(true);
                }
              }}
            />
            <div className="value">{Cart.length}</div>
          </div>
          <MdLogout id="logout" onClick={() => logout()} />
        </div>
      </Header>
      {showCart === true ? (
        <CartDiv
          cart={Cart}
          showCart={showCart}
          setShowCart={setShowCart}
          totalPrice={totalPrice}
          setPrice={setPrice}
          setCart={setCart}
        />
      ) : (
        ""
      )}

      <ProductsContainer>
        {filteredSearch.length > 0
          ? filteredSearch.map((data) => (
              <ProductCard
                item={data}
                Cart={Cart}
                setCart={setCart}
                products={products}
                setPrice={setPrice}
                totalPrice={totalPrice}
              />
            ))
          : products.map((data) => (
              <ProductCard
                item={data}
                Cart={Cart}
                setCart={setCart}
                products={products}
                setPrice={setPrice}
                totalPrice={totalPrice}
              />
            ))}
      </ProductsContainer>
    </PageContainer>
  );
};
