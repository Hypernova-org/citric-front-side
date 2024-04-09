import { useState } from "react";
import { Pagination } from 'antd';
import BlogCard from "components/blogCard";
import Container from "modules/container";
import { useGet, useHooks } from "hooks";

const Blog = () => {
  const { get, t } = useHooks();
  const [page, setPage] = useState();

  // const { isLoading, data } = useGet({
  //   name: "blogs",
  //   url: "blogs",
  //   onSuccess: (data) => {
  //   },
  //   onError: (error) => {
  //   },
  // });

  // const blogData = get(data, "data", [])
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
                <div className="p-[15px] flex justify-end">
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
              {/* <Pagination defaultCurrent={get(meta, "currentPage")} total={get(meta, "totalCount")} /> */}
            </div>
          )
        }}
      </Container.All>
      <div className="pagination"></div>
    </div>
  );
};

export default Blog;
