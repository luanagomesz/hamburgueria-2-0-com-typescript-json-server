import { createContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactNode } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

interface RegisterProps {
  children: ReactNode;
}

interface SubmitRegister {
  email: String;
  password: String;
  name: String;
}

interface RegisterProviderData {
  submitRegister: Function;
  errors: any;
  register: Function;
  handleSubmit: Function;
  history: any;
}

export const RegisterContext = createContext<RegisterProviderData>(
  {} as RegisterProviderData
);

export const RegisterProvider = ({ children }: RegisterProps) => {
  const history = useHistory();
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/;
  const nameRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(nameRegex, "Somente Letras"),
    email: yup.string().required("Email inválido").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        passwordRegex,
        "Deve conter ao menos 6 caracteres incluindo um numero"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas devem ser iguais")
      .required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const redirect = () => {
    history.push("/");
    clearTimeout();
  };

  const goBase = () => {
    toast("Cadastrado com Sucesso, redirecionando ao login...", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    const redirectTimeout = setTimeout(redirect, 3000);
  };
  const submitRegister = ({ email, password, name }: SubmitRegister) => {
    console.log(email, password, name);
    const user = { email, password, name };

    axios
      .post("https://hamburgueria-kenzie-server.herokuapp.com/register/", user)
      .then((response) => {
        console.log(response);
        window.localStorage.clear();

        goBase();
      })
      .catch((err) => {
        toast.error("Email já cadastrado", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <RegisterContext.Provider
      value={{
        submitRegister,
        errors,
        register,
        handleSubmit,
        history,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
