import React from 'react';
import { Image, Row, Col, Stack } from '@openedx/paragon';
import bannerBg from '../assets/banner-bg.png';

export const CatalogBanner = () => (
  <Row
    direction="horizontal"
    className="bg-primary"
  >
    <Col xl={7} xs={12} className={"d-flex align-content-middle"}>
        <Stack
          direction="vertical"
          className="justify-content-center px-6 py-lg-6 py-5 my-lg-4"
          style={{ maxWidth: '55rem' }}
        >
          <h1 className="display-2 text-light-100">
            You’re viewing a live
            <span className="text-brand-500">
              {' Open edX® '}
            </span>
            demo
          </h1>
          <p className="h4 text-light-100 ">
            OpenClass is a demo site by OpenCraft where you can explore the
            Open edX platform as a learner or course author.
          </p>
        </Stack>
    </Col>
    <Col xl={5} xs={12} className={"d-flex align-content-middle"}>
        <Stack
          className="justify-content-lg-end justify-content-center"
        >
          <Image
            src={bannerBg}
            className="mt-lg-6"
            style={{
              height: '100%',
              width: '100%',
              objectFit: "contain",
            }}
            alt="illustration of a workspace with a computer screen displaying charts and graphs, accompanied by a desk lamp, coffee cup, and potted plant"
          />
        </Stack>
      </Col>
  </Row>
);
