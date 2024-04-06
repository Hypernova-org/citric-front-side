import { useHooks } from "hooks";
import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const { get, t } = useHooks();
  return (
    <div className="details_page">
      <div className="details_top">
        <Link to={"/blog"}>
          <p>{t("Orqaga")}</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
