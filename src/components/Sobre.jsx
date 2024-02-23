import styles from "./Sobre.module.css";
import bgSobre from "../assets/vertical-bg.jpg";
import { WhatsappLogo } from "@phosphor-icons/react";

export function Sobre() {
  return (
    <section id="sobre" className={`container`}>
      <div className={styles.sobreContainer}>
        <img src={bgSobre} alt="" />
        <div>
          <p>
            <span>Nossa Filosofia -</span> Com uma equipe experiente e
            prestativa, a Amazonas está comprometida em fornecer assistência
            personalizada aos seus clientes, ajudando-os a escolher os materiais
            ideais para seus projetos específicos.
          </p>
          <button>
            fale conosco <WhatsappLogo weight="fill" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
