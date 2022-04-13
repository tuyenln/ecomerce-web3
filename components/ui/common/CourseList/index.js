import course from "./CourseList.module.css";
import Image from "next/image";
const CourseList = ({ post }) => {
    return (
        <section className={course.wrapper}>
            <div className={course.image}>
                <Image src="/images/courselist/image1.png" width={1920} height={1080} />
            </div>
            <div className={course.info}>
                <div>
                    <h1 className={course.title}>Title</h1>
                    <p className={course.desc}>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className={course.button}>
                    <button>Purchase</button>
                </div>
            </div>
        </section>
    );

};

export default CourseList;