import { LoginContainer, Container, TextContainer, InputStyled } from "./style";
import { useContext, useState, useEffect } from "react";
import { LoginContext } from "../../Providers/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdFastfood } from "react-icons/md";
import axios from "axios";

interface Data {
  text: String;
}
export const Login = () => {
  const { submitLogin, errors, register, handleSubmit, history } =
    useContext(LoginContext);
  const [newsletter, setNewsletter] = useState<Array<Data>>([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    axios
      .get("https://hamburgueria-kenzie-server.herokuapp.com/newsletter")
      .then((response) => {
        setNewsletter(response.data);
      });
  }, []);
  const add = () => {
    if (index < newsletter.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  useEffect(() => {
    if (newsletter.length > 0) {
      console.log(newsletter[index].text);
    }

    setTimeout(add, 5000);
  }, [index, newsletter]);
  return (
    <Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <LoginContainer onSubmit={handleSubmit(submitLogin)}>
        <h1>Login</h1>
        <InputStyled placeholder="Email" {...register("email")} />
        <span className="errors">{errors.email?.message}</span>

        <InputStyled
          placeholder="Senha"
          type="password"
          {...register("password")}
        />
        <span className="errors">{errors.password?.message}</span>

        <button type="submit">Logar</button>
        <p>Crie sua conta para saborear muitas delecias e matar sua fome!</p>
        <button className="register" onClick={() => history.push("/register")}>
          Cadastrar
        </button>
      </LoginContainer>
      <TextContainer>
        <div className="titulo">
          <h1>Burguer</h1> <span>Kenzie</span>
        </div>
        <div className="mensagem">
          <div className="bag">
            <MdFastfood color="var(--green)" />
          </div>
          <p>{newsletter.length > 0 ? newsletter[index].text : ""}</p>
        </div>
      </TextContainer>
    </Container>
  );
};
