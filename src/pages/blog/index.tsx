import BlogCard from "components/blogCard";
import { useHooks } from "hooks";

const Blog = () => {
  const { get, t } = useHooks();
  return (
    <div className="blog_page container">
      <p className="blog_page_title">{t("Blog")}</p>
      <div className="blog_cards">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="pagination"></div>
    </div>
  );
};

export default Blog;
