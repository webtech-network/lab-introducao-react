import styles from "./styles.module.css";

export function Card() {
  return (
    <div className={styles.card}>
      <h2>Bem-vindo ao meu site</h2>
      <p>Este é um exemplo de um componente Card.</p>
      <button className={styles.cardButton}> Botão</button>
    </div>
  );
}
