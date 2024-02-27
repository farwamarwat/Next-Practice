import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>FARWA</div>
            <div className={styles.text}>
                Farwa Ameer Khan copyright reserved.
            </div>

        </div>
    )
}

export default Footer