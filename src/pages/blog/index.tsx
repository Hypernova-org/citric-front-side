import { useEffect, useState } from "react";
import { Pagination } from 'antd';
import BlogCard from "components/blogCard";
import Container from "modules/container";
import { useHooks } from "hooks";
import { gsap } from "gsap";

const Blog = () => {
  let mm = gsap.matchMedia();
  
  useEffect(() => {
    mm.add("(min-width: 800px)", () => {
      gsap.from('.blog_page', {
        duration: 1,
        opacity: 0,
        y: 50,
      }); });
  },)
  const { t } = useHooks();
  const [page, setPage] = useState();

  return (
    <div className="blog_page container">
      <p className="blog_page_title">{t("Blog")}</p>
      <Container.All
        name='blogs'
        url='blogs'
        params={{
          limit: 6,
          page
        }}
      >
        {({ isLoading, items, meta }) => {

          return (
            <div>
              <div className="blog_cards">
                {items?.map((blog: any) => (
                  <BlogCard {...{ blog }} />
                ))}
              </div>
              {meta && meta.perPage && (
                <div className="mt-[-20px] flex justify-center">
                  <Pagination
                    current={meta.currentPage}
                    pageSize={meta.perPage}
                    total={(meta.totalCount)}
                    onChange={(page: any) => {
                      setPage(page)
                      window.scrollTo({
                        behavior: "smooth",
                        top: 0,
                        left: 0
                      })
                    }}
                  />
                </div>
              )}
            </div>
          )
        }}
      </Container.All>
      <div className="pagination"></div>
    </div>
  );
};

export default Blog;
