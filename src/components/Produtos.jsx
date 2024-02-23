import {
  TShirt,
  BeerBottle,
  Couch,
  Cube,
  Rug,
  Wrench,
} from "@phosphor-icons/react";
import styles from "./Produtos.module.css";
import { Produto } from "./Produto";

export function Produtos() {
  return (
    <section className={`${styles.produtos} container`}>
      <div className={styles.produtosContainer}>
        <Produto
          icon={<TShirt size={24} />}
          product="Tecidos"
          content="Ampla gama de tecidos, incluindo algodão, seda, linho e muitos outros em
        diversas cores, padrões e texturas."
        />
        <Produto
          icon={<BeerBottle size={24} />}
          product="Plásticos"
          content="Folhas de plástico e materiais plásticos transparentes, ideais para projetos de estofamento, revestimento e artesanato."
        />
        <Produto
          icon={<Couch size={24} />}
          product="Couros"
          content="Couros genuínos e sintéticos para projetos de moda e estofamento disponíveis para seu projeto."
        />
        <Produto
          icon={<Cube weight="fill" size={24} />}
          product="Espumas"
          content="Espumas de diferentes densidades e tamanhos para estofamento de móveis, colchões, travesseiros e projetos de isolamento acústico."
        />
        <Produto
          icon={<Rug size={24} />}
          product="Carpetes"
          content="Uma seleção de carpetes de alta qualidade com opções variadas de cores e texturas para uso em residências, escritórios e espaços comerciais."
        />
        <Produto
          icon={<Wrench size={24} />}
          product="Acessórios"
          content="Uma ampla variedade de acessórios essenciais, como linhas, zíperes, botões, agulhas, elásticos, fitas e outros itens para costura e artesanato."
        />
      </div>
    </section>
  );
}
