import { List, ArrowArcRight } from "@phosphor-icons/react";
import styles from "./Header.module.css";
import logo from "../assets/logo-amazonas.svg";
import { useState } from "react";

export function Header() {
  const [menuState, setMenuState] = useState("");

  function handleOpenMenu() {
    setMenuState(styles.active);
    document.body.style.overflow = "hidden";
  }

  function handleCloseMenu() {
    setMenuState("");
    document.body.style.overflow = "initial";
  }

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="Logo da Amazonas" />
      <div className={styles.localeAndNumber}>
        <a>CENTRO📍</a>
        <a>82 3326-2370</a>
      </div>
      <div className={styles.localeAndNumber}>
        <a>TABULEIRO📍</a>
        <a>82 3432-9530</a>
      </div>
      <button onClick={handleOpenMenu}>
        <List size={24} />
      </button>
      <nav className={`${menuState} ${styles.nav}`}>
        <ul className={styles.navMenu}>
          <button onClick={handleCloseMenu}>
            <ArrowArcRight size={24} />
          </button>
          <li>
            <a onClick={handleCloseMenu} href="#produtos">
              Produtos
            </a>
          </li>
          <li>
            <a onClick={handleCloseMenu} href="#sobre">
              Sobre
            </a>
          </li>
          <li>
            <a onClick={handleCloseMenu} href="#lojas">
              Lojas
            </a>
          </li>
          <li>
            <a onClick={handleCloseMenu} href="#footer">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
