import { FormEvent, useEffect, useState } from "react";
import Header from "../../components/header/Index";
import Input from "../../components/social/input/Index";
import { BiTrash } from "react-icons/bi";
import { fireStore } from "../../services/firebaseConnection";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

interface LinkProps {
  id: string;
  name: string;
  url: string;
  bg: string;
  color: string;
}

const Admin = () => {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [textColorInput, setTextColorInput] = useState("#f1f1f1");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#00000");
  const [links, setLinks] = useState<LinkProps[]>([])

  useEffect(() => {
    const linksRef = collection(fireStore, "links");
    const queryRef = query(linksRef, orderBy("created", "asc"));

    const unsub = onSnapshot(queryRef, (snapshot) => {
      const lista = [] as LinkProps[];
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          bg: doc.data().bg,
          color: doc.data().color,
        });
      });

      setLinks(lista)
    });


    return () => {
      unsub()
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (nameInput.trim() === "" || urlInput.trim() === "") {
      alert("preencha todos os campos");
      return;
    }

    addDoc(collection(fireStore, "links"), {
      name: nameInput,
      url: urlInput,
      bg: backgroundColorInput,
      color: textColorInput,
      created: new Date(),
    })
      .then(() => {
        setNameInput("");
        setUrlInput("");
      })
      .catch((err) => {
        alert("Erro: " + err);
      });
  };

 const handleDeleteLink =  async(id: string) => {
    const docRef = doc(fireStore, "links", id)
    await(deleteDoc(docRef))
  }

  return (
    <div className="w-full min-h-dvh bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-800 text-white flex flex-col items-center py-7 px-2">
      <Header />
      <form
        className="flex flex-col my-8 w-full max-w-xl"
        onSubmit={handleSubmit}
      >
        <label htmlFor="inome" className="text-white font-medium mt-2 mb-3">
          Nome do Link
        </label>
        <Input
          placeholder="Digite o nome do Link"
          id="inome"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label htmlFor="iurl" className="text-white font-medium mt-2 mb-3">
          URL do Link
        </label>
        <Input
          type="url"
          placeholder="Digite a URL"
          id="iurl"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="flex gap-10 my-4 ">
          <div className="flex gap-2">
            <label
              htmlFor="itextFundo"
              className="text-white font-medium mt-2 mb-3"
            >
              Cor do Link
            </label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
              id="itextFundo"
            />
          </div>
          <div className="flex gap-2">
            <label
              htmlFor="ifundo"
              className="text-white font-medium mt-2 mb-3"
            >
              Fundo do Link
            </label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
              id="ifundo"
            />
          </div>
        </section>
        {nameInput.trim() !== "" && (
          <div className="flex flex-col justify-start items-center mb-7 p-1 border-gray-100/25 border-1 rounded-md w-full text-center">
            <label htmlFor="" className="text-white font-medium mt-2 mb-3">
              Veja como está ficando:
              <article
                className="max-w-lg flex flex-col items-center justify-center rounded w-80 py-3 duration-700 hover:opacity-60 cursor-pointer"
                style={{
                  marginBottom: 8,
                  marginTop: 8,
                  backgroundColor: backgroundColorInput,
                }}
              >
                <p style={{ color: textColorInput }} className="font-medium">
                  {nameInput}
                </p>
              </article>
            </label>
          </div>
        )}

        <button
          type="submit"
          className="mb-7 bg-blue-600 h-9 rounded-md font-medium gap-4 text-center flex justify-center items-center"
        >
          Cadastrar
        </button>
      </form>
      <h2 className="font-bold mb-4 text-2xl">Meus Links</h2>
      {links.map(item => (
        <article key={item.id}
        className="flex items-center justify-between w-11/12 max-w-lg py-3 px-2 mb-2 rounded"
        style={{ background: item.bg, color: item.color }}
      >
        <p>{item.name}</p>
        <div className="flex justify-center items-center">
          <button className="border border-dashed p-1 rounded" onClick={(() => handleDeleteLink(item.id))}>
            <BiTrash size={15} />
          </button>
        </div>
      </article>
      ))}
    </div>
  );
};

export default Admin;
