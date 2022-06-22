import styles from "./Grid.module.sass";

function Grid({ children }) {
    return <div className={styles.Grid}>{children}</div>;
}

export default Grid;
