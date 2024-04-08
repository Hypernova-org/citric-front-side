import BlogCard from "components/blogCard";
import { useGet, useHooks } from "hooks";

const Blog = () => {
  const { get, t } = useHooks();
  const { isLoading, data } = useGet({
    name: "blogs",
    url: "blogs",
    onSuccess: (data) => {
    },
    onError: (error) => {
    },
  });

  const slicedData = get(data, "data", [])
  return (
    <div className="blog_page container">
      <p className="blog_page_title">{t("Blog")}</p>
      <div className="blog_cards">
        {slicedData?.map((blog: any) => (
          <BlogCard {...{ blog }} />
        ))}
      </div>
      <div className="pagination"></div>
    </div>
  );
};

export default Blog;
