import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/19845825/pexels-photo-19845825/free-photo-of-a-tent-is-set-up-in-the-woods-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}>08-12-2022</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsa qui necessitatibus amet tempora cum ducimus? Sit recusandae totam, sapiente vitae modi earum. Neque repudiandae sit non sunt nesciunt. Quas.</p>
        <Link className={styles.link} href='/blog/post'>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard
