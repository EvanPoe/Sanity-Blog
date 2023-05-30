import { AuthorInfo } from "@/components/AuthorInfo";
import { CardItem } from "@/components/CardItem";
import { CardListItem } from "@/components/CardListItem";
import { PageLayout } from "@/components/PageLayout";

import { Row, Col } from "react-bootstrap";

import { getAllBlogs } from "lib/api";

export default function Home({ blogs }) {
  return (
    <PageLayout>
      <AuthorInfo />
      <hr />
      <Row className="mb-5">
        {/* <Col md="10">
          <CardListItem />
        </Col> */}
        {blogs.map((blog) => (
          <Col key={blog.slug} md="4">
            <CardItem 
              title={blog.title}
              subtitle={blog.subtitle}
              date={blog.date}
              image={blog.coverImage}
            />
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
}

// this function is called during the build (build time)
// Provides props to your page
// It will create a static page

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    },
  };
}

// anything here is limited by the time of getServerSideProps
// we must always wait for this function to create the HTML document

// export async function getServerSideProps() {
//   const randomNumber = Math.random();
//   const blogs = await getAllBlogs();
//   return {
//     props: {
//       blogs,
//       randomNumber
//     },
//   };
// }

// Static Page
// Faster, can be cached using CDN
// Created at build time
// When we make the request we are always receiving the same html document

// Dynamic Page
// Created at request time (we can fetch data on server)
// Little slower, the time depends on the data you are fetching