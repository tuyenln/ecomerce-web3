import {BaseLayout} from "@components/ui/layout";
import { CourseList } from "@components/ui/common";

export default function Home() {
  return (
      <section>
        <div className="grid grid-cols-2 gap-4 max-w-[1440px] mx-auto">
        {posts.map((post) => (
          <CourseList post={post} />
        ))}
        </div>
      </section>
  )
}

Home.Layout = BaseLayout;

const posts = [
  {
    _id: "121v33hj4b34",
    title: "solidity",
    desc: "learn solidity",
    image: "/images/courselist/solidity.png",
    author: "tuyenln",
    slug: "Solidity"
  },
  {
    _id: "hn3434h34903943j43j",
    title: "Learning Rust",
    desc: "Rust",
    image: "/images/courselist/rust.png",
    author: "TuyenLN",
    slug: "Rust"
  },
  {
    _id: "hn34fefe03943j43j",
    title: "Web3",
    desc: "Web3 Mastering",
    image: "/images/courselist/web3.jpg",
    author: "TuyenLN",
    slug: "Web3"
  },
  {
    _id: "hn34fefe0394edfefj",
    title: "Next JS",
    desc: "Next Js",
    image: "/images/courselist/next.png",
    author: "TuyenLN",
    slug: "nextjs"
  },
  {
    _id: "hn34gegeg9egeg94edfefj",
    title: "BlockChain",
    desc: "BlockChain",
    image: "/images/courselist/blockchain.jpg",
    author: "TuyenLN",
    slug: "blockchain"
  }
]