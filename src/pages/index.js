import React from "react";
import Main from "@/components/Main";
import { getServerSideProps } from "@/lib/server";

const IndexPage = ({ blogposts }) => {
  return <Main blogposts={blogposts} />;
};

export { getServerSideProps };
export default IndexPage;
