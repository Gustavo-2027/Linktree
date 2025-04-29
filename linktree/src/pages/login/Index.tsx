import { Link } from "react-router-dom";
import Input from "../../components/social/input/Index";
import { FormEvent, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
  };

  return (
    <div className="w-full h-dvh bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-800 text-white flex flex-col items-center text-center">
      <Link to={"/"}>
        <h1 className="text-5xl font-bold my-15 text-shadow-2xs">
          Dev
          <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-teal-300 bg-clip-text text-transparent font-extrabold">
            Link
          </span>
        </h1>
      </Link>
      <form className="w-full max-w-xl flex flex-col px-1" onSubmit={handleSubmit}>
        <Input
          placeholder="Digite seu Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          placeholder="Digite sua Senha"
          type="password"
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
        />
        <button
          type="submit"
          className="h-9 bg-blue-600 rounded-md border-0 text-lg font-semibold cursor-pointer duration-700 hover:bg-blue-400"
        >
          Acessar
        </button>
      </form>
    </div>
  );
};

export default Login;
