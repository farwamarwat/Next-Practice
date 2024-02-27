import styles from "./singlePost.module.css"
import Image from "next/image"

const SinglepostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                {/* <Image 
                src="/post1.png"
                alt=""
                fill
                className={styles.img}
                /> */}
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image 
                    className={styles.avatar}
                    src="https://images.pexels.com/photos/20193715/pexels-photo-20193715/free-photo-of-cockburn-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    width={50}
                    height={50}
                    />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.datailValue}>FARWA KHAN</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.datailValue}>08-12-2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                </div>
            </div>
        </div>
    )
}

export default SinglepostPage