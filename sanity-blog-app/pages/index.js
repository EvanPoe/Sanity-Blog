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
      blogs,
    },
  };
}
