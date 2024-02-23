import { CaretDown } from "@phosphor-icons/react";
import styles from "./Produto.module.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function Produto({ icon, product, content }) {
  const [teste, setTeste] = useState("");

  function handleClick() {
    if (!teste) setTeste(styles.active);
    else setTeste("");
  }

  return (
    <div className={styles.produto}>
      <header>
        <h3>
          {icon} {product}
        </h3>
        <button onClick={handleClick}>
          <CaretDown size={20} />
        </button>
      </header>
      <p className={`${styles.produtoConteudo} ${teste}`}>{content}</p>
    </div>
  );
}
