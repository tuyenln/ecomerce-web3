import course from "./CourseList.module.css";
import Image from "next/image";
const CourseList = ({ post }) => {
    return (
        <section className={course.wrapper}>
            <div className={course.image}>
                <Image src={post.image} width={1920} height={1080} />
            </div>
            <div className={course.info}>
                <div>
                    <h1 className={course.title}>{post.title}</h1>
                    <p className={course.desc}>{post.desc}</p>
                </div>
                <div className={course.button}>
                    <button>Purchase</button>
                </div>
            </div>
        </section>
    );

};

export default CourseList;