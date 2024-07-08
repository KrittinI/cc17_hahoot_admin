import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import validateLogin from "../validation/login-validator";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const initialInput = {
  email: "",
  password: "",
};

const initialInputError = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate()
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      const errorMassage = validateLogin(input);
      if (errorMassage) {
        return setInputError(errorMassage);
      }

      setInputError({ ...initialInputError });

      const res = await login(input);
      if (res) {
        return setInputError((pre) => ({
          ...pre,
          email: res,
          password: res,
        }));
      }
      navigate('/admin')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        className=" bg-white w-72 shadow-xl rounded-lg p-5 flex justify-center items-center flex-col gap-3 relative"
        onSubmit={handleSubmitLogin}
      >
        <h2 className="text-center mb-2 font-bold text-black text-3xl">
          Login Admin
        </h2>
        <div role="button" className="absolute top-1 right-1">
        </div>
        <>
          <Input
            name="email"
            placeholder="E-mail"
            position="center"
            value={input.email}
            onChange={onChangeInput}
            error={inputError.email}
          />
          <Input
            name="password"
            placeholder="Password"
            position="center"
            type="password"
            value={input.password}
            onChange={onChangeInput}
            error={inputError.password}
          />
          <Button width="full" bg="black">
            Login
          </Button>
        </>
      </form>
    </>
  );
}
