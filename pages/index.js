import {BaseLayout} from "@components/ui/layout";
import { CourseList } from "@components/ui/common";

export default function Home() {
  return (
      <section>
        <CourseList posts={post} />
      </section>
  )
}

Home.Layout = BaseLayout;
