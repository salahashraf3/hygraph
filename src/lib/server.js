import { gql } from "@apollo/client";
import client from "@/apolloClient";

const query = gql`
query  {
    posts {
      author
      blog
      createdAt
      date
      description
      postImage{
        url
      }
      publishedAt
      slug
      title
      updatedAt
    }
  }
`;

export async function getServerSideProps() {
  try {
    const { data } = await client.query({
      query: query,
    });
    const { posts } = data;
    console.log("Blogposts:", posts);
    return { props: { blogposts: posts } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { blogposts: [] } };
  }
}
