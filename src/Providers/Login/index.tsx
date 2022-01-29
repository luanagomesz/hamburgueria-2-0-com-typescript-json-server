import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";

interface LoginProps {
  children: ReactNode;
}

interface SubmitLogin {
  email: String;
  password: String;
}

interface LoginProviderData {
  submitLogin: Function;
  errors: any;
  register: Function;
  handleSubmit: Function;
  authorization: object;
  clearLocalStorage: Function;
  history: any;
}

export const LoginContext = createContext<LoginProviderData>(
  {} as LoginProviderData
);

export const LoginProvider = ({ children }: LoginProps) => {
  const history = useHistory();
  const location = useLocation();
  const [authorization, setAuthorization] = useState({});

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatorio"),
    password: yup.string().required("Password Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitLogin = ({ email, password }: SubmitLogin) => {
    console.log(email, password);
    const user = { email, password };

    axios
      .post("https://hamburgueria-kenzie-server.herokuapp.com/login/", user)
      .then((response) => {
        console.log(response);
        window.localStorage.clear();
        window.localStorage.setItem("token", response.data.accessToken);
        window.localStorage.setItem("user", response.data.user.name);
        setAuthorization({
          headers: {
            Authorization: `Bearer ${response.data.accessToken}`,
          },
        });
        history.push("/home");
      })
      .catch((err) => {
        toast.error("Senha ou email inválidos", {
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

  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      if (location.pathname !== "/" && location.pathname !== "/register") {
        history.push("/");
      }
    }
  }, [location, history]);

  const clearLocalStorage = () => {
    window.localStorage.clear();
  };

  return (
    <LoginContext.Provider
      value={{
        submitLogin,
        errors,
        register,
        handleSubmit,
        authorization,
        clearLocalStorage,
        history,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
