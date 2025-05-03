import React from "react";
import { Link } from "react-router-dom";

const Erro = () => {
  return (
    <div className="w-full h-dvh bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-800 text-white flex flex-col items-center justify-center py-20 gap-2">
        <h1 className="text-4xl font-black">404</h1>
      <h1 className="text-2xl font-black">Página não encontrada</h1>
      <p className="text-xl">Essa página não existe</p>

      <Link to={"/"} className="bg-gray-50/20 rounded-md py-1 px-4">Voltar para Home</Link>
    </div>
  );
};

export default Erro;
