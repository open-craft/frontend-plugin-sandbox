import React from 'react';
import { Image, Row, Col } from '@openedx/paragon';
import largeBannerBg from '../assets/desktop-openclass.jpg';
import smallBannerBg from '../assets/mobile-openclass.jpg';

export const CatalogBanner = () => (
  <Row
    direction="horizontal"
    className="bg-primary"
  >
    <Col
      direction="vertical"
      className="justify-content-center align-content-center px-6 col-12 col-lg-6 col-xl-5"
    >
      <h1 className="intro-header text-light-100">
        You’re viewing a live
        <span className="text-brand-500">
          {' Open edX® '}
        </span>
        demo
      </h1>
      <p className="text-light-100">
        OpenClass is a demo site by OpenCraft where you can explore the
        Open edX platform as a learner or course author.
      </p>
    </Col>
    <Col className={'col-12 col-lg-6 col-xl-7'}>
      <Image
        src={largeBannerBg}
        style={{
          height: '100%',
          width: '100%',
          maxHeight: '550px',
          objectFit: 'contain',
          objectPosition: 'right top',
        }}
        className={'d-none d-xl-block'}
        alt="illustration of a workspace with a computer screen displaying charts and graphs, accompanied by a desk lamp, coffee cup, and potted plant"
      />
      <Image
        src={smallBannerBg}
        style={{
            width: '100%',
            objectFit: 'contain',
        }}
        className={'d-block d-xl-none'}
        alt="illustration of a workspace with a computer screen displaying charts and graphs, accompanied by a desk lamp, coffee cup, and potted plant"
    />
    </Col>
  </Row>
);
