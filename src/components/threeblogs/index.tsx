import { useGet, useHooks } from "hooks";
import { TitleArrow } from "assets/images/icons";
import BlogCard from "components/blogCard";

const ThreeBlogs = () => {
  const { t, get } = useHooks()

  const { isLoading, data } = useGet({
    name: "blogs",
    url: "blogs",
    onSuccess: (data) => {
    },
    onError: (error) => {
    },
  });

  const slicedData = get(data, "data", []).length > 3 ? get(data, "data", []).slice(0, 3) : get(data, "data")

  return (
    <div className="three_blogs">
      <div className="three_blogs_title">
        <p className="">{t("Blogs")}</p>
        <TitleArrow/>
      </div>

      <div className="three_blogs_cards">
        {slicedData?.map((blog: any) => (
          <BlogCard {...{blog}}/>
        ))}
      </div>
    </div>
  );
};

export default ThreeBlogs;
