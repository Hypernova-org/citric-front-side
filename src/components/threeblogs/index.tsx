import { useGet, useHooks } from "hooks";
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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
            fill="#70B32F"
          />
        </svg>
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
