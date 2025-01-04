import Blogs from "@/components/Blogs/Blogs";
import { getAllBlog } from "@/actions/blog";

async function Page({}) {
  const { data: allBlogs } = await getAllBlog();
  console.log("all blogs in server:",allBlogs);
  
  return (
    <>
      <Blogs blogs={allBlogs} />
    </>
  );
}

export default Page;
