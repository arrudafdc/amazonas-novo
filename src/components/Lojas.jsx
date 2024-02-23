import { useEffect, useState } from "react";
import styles from "./Lojas.module.css";
import { Map } from "./Map";

export function Lojas() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  const [isOpen, setIsOpen] = useState(false);

  function checkTime() {
    if (day > 0 && day <= 5 && hour >= 8 && hour < 18) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    checkTime();
  });

  return (
    <section id="lojas" className={`${styles.lojas} container`}>
      <h2>Conheça nossas lojas</h2>
      <div className={styles.lojasContainer}>
        <div>
          <div className={styles.map}>
            <Map lat={-9.66367128494393} lng={-35.74128633373857} />
          </div>
          <div>
            <p className={`${styles.openingHours} ${isOpen && styles.aberto}`}>
              Seg à Sex das 8h às 18h, Sáb até 15h
            </p>
          </div>
        </div>
        <div>
          <div className={styles.map}>
            <Map lat={-9.585766215018399} lng={-35.76319176144925} />
          </div>
          <div>
            <p className={`${styles.openingHours} ${isOpen && styles.aberto}`}>
              Seg à Sex das 8h às 18h, Sáb até 15h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
