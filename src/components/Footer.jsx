import styles from "./Footer.module.css";
import logo from "../assets/logo-amazonas.svg";

export function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className={styles.flexEnd}>
          <ul>
            <h3>Contato</h3>
            <li>
              <a
                href="https://www.bit.ly/33s3xO8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
              </a>
            </li>
            <li>82 3326-2370 - Centro</li>
            <li>82 3432-9530 - Tabuleiro</li>
          </ul>
        </div>
        <div className={styles.flexEnd}>
          <nav>
            <h3>Menu</h3>
            <ul>
              <li>
                <a href="#produtos">Produtos</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#lojas">Lojas</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.flexEnd}>
          <ul>
            <h3>Siga</h3>
            <li>
              <a
                href="https://www.instagram.com/amazonastecidos.mcz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/amazonastecidos.mcz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={`${styles.copy} container`}>© Amazonas Tecidos 2024</p>
    </footer>
  );
}
