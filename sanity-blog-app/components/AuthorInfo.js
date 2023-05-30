import React from "react";

import { Row, Col, Media, Image } from "react-bootstrap";

export const AuthorInfo = () => {
  return (
    <Row>
      <Col md="8">
        {/* AUTHOR INTRO STARTS */}
        <Media className="mb-4 admin-intro">
          <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src="https://cdn.sanity.io/images/iif2n9aa/production/c51ca43d4da3be715ba1e79a5d105157ceb787e9-770x828.png"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="font-weight-bold mb-0">Hello Butt-Pirates,</h5>
            <p className="welcome-text">
              I'm working through another Udemy course. Stick around and ya might learn ya something you bunch of donught hole punchers.
            </p>
          </Media.Body>
        </Media>
        {/* AUTHOR INTRO ENDS */}
      </Col>
    </Row>
  );
};
