import { LoginContainer, Container, TextContainer, InputStyled } from "./style";
import { useHistory } from "react-router-dom";
import { RegisterContext } from "../../Providers/Register";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdFastfood } from "react-icons/md";
export const Register = () => {
  const history = useHistory();
  const { submitRegister, errors, register, handleSubmit } =
    useContext(RegisterContext);
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
      <TextContainer>
        <div className="titulo">
          <h1>Burguer</h1> <span>Kenzie</span>
        </div>
        <div className="mensagem">
          <div className="bag">
            {" "}
            <MdFastfood color="var(--green)" />
          </div>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <b>melhores</b> ingredientes.
          </p>
        </div>
      </TextContainer>
      <LoginContainer onSubmit={handleSubmit(submitRegister)}>
        <div>
          <h1>Cadastro</h1>
          <span onClick={() => history.push("/")}>Retornar para o login</span>
        </div>
        <InputStyled placeholder="Nome" {...register("name")} />
        <span className="errors">{errors.name?.message}</span>
        <InputStyled placeholder="Email" {...register("email")} />
        <span className="errors">{errors.email?.message}</span>

        <InputStyled
          placeholder="Senha"
          {...register("password")}
          type={"password"}
        />
        <span className="errors">{errors.password?.message}</span>

        <InputStyled
          placeholder="Confirmar Senha"
          {...register("confirmPassword")}
          type={"password"}
        />
        <span className="errors">{errors.confirmPassword?.message}</span>

        <button className="register" type="submit">
          Cadastrar
        </button>
      </LoginContainer>
    </Container>
  );
};
