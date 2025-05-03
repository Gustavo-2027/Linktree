import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Social from "../../components/social/Index";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { fireStore } from "../../services/firebaseConnection";

interface LinkProps {
  id: string;
  name: string;
  url: string;
  bg: string;
  color: string;
}

interface SocialLinksProps {
  facebook: string;
  instagram: string;
  youtube: string;
}

const Home = () => {
  const [links, setLinks] = useState<LinkProps[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLinksProps>();

  useEffect(() => {
    const loadLinks = () => {
      const linkRef = collection(fireStore, "links");
      const queryRef = query(linkRef, orderBy("created", "asc"));

      getDocs(queryRef).then((snapshot) => {
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
        setLinks(lista);
      });
    };

    loadLinks();
  }, []);

  useEffect(() => {
    const loadSocialLinks = () => {
      const docRef = doc(fireStore, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setSocialLinks({
            facebook: snapshot.data()?.facebook,
            instagram: snapshot.data()?.instagram,
            youtube: snapshot.data()?.youtube,
          });
        }
      });
    };
    loadSocialLinks()
  }, []);

  return (
    <div className="w-full h-dvh bg-gradient-to-r from-zinc-500 via-zinc-600 to-zinc-800 text-white">
      <section className="flex flex-col justify-center items-center text-center space-y-3 py-6">
        <div className="space-y-5">
          <h1 className="md:text-4xl text-3xl font-bold mt-20">Home</h1>
          <p>Meus Links: </p>
        </div>
        <main className="w-11/12 max-w-xl">
          {links.map((Link) => (
            <section
              className="bg-white text-zinc-800 py-2 rounded-lg font-semibold select-none mb-2 cursor-pointer transition-transform hover:scale-110"
              style={{ backgroundColor: Link.bg, color: Link.color }}
              key={Link.url}
            >
              <a href={Link.url} target="_blank">
                <p className="md:text-lg text-base">{Link.name}</p>
              </a>
            </section>
          ))}
          {socialLinks && Object.keys(socialLinks).length > 0 && (
            <footer className="flex justify-center gap-3 my-5">
            <Social url={socialLinks?.facebook}>
              <FaFacebook
                size={30}
                className="transition-transform hover:scale-110"
              />
            </Social>
            <Social url={socialLinks?.instagram}>
              <FaLinkedin
                size={30}
                className="transition-transform hover:scale-110"
              />
            </Social>
            <Social url="https://github.com/Gustavo-2027">
              <FaGithub
                size={30}
                className="transition-transform hover:scale-110"
              />
            </Social>
          </footer>
          )}
        </main>
      </section>
    </div>
  );
};

export default Home;
