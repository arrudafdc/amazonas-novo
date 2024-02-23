import "./global.css";
import { Header } from "./components/Header.jsx";
import { Bg } from "./components/Bg.jsx";
import { Slogan } from "./components/Slogan.jsx";
import { Produtos } from "./components/Produtos.jsx";
import { Lojas } from "./components/Lojas.jsx";
import { Sobre } from "./components/Sobre.jsx";
import { Footer } from "./components/Footer.jsx";

export function App() {
  return (
    <>
      <Bg />
      <Header />
      <Slogan />
      <Produtos />
      <Sobre />
      <Lojas />
      <Footer />
    </>
  );
}
