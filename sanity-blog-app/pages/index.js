import { AuthorInfo } from "@/components/AuthorInfo";
import { CardItem } from "@/components/CardItem";
import { CardListItem } from "@/components/CardListItem";
import { PageLayout } from "@/components/PageLayout";

import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <PageLayout>
      <AuthorInfo />
      <hr />
      {/* className from props */}
      <Row className="mb-5">
        <Col md="10">
          {/* CardListItem STARTS */}
          <CardListItem />
          {/* CardListItem ENDS */}
        </Col>
        <Col md="4">
          <CardItem />
        </Col>
      </Row>
    </PageLayout>
  );
}
