import Link from 'next/link';
import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';


const CaseStudyAreaOne = () => {
  return (
    <>
      {/*================== case-study area start ==================*/}
      <div className="case-study-area bg-relative pd-top-110">
        <img
          className="animate-img-1 top_image_bounce"
          src="assets/img/banner/2.png"
          alt="img"
        />
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">OUR NETWORK</h6>
            <h2 className="title">
              Leading The <span>Connectivity</span> Revolution
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-inner">
                <div className="thumb">
                  <img src="assets/img/case-study/1.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link href="/case-study-details">5G Network Deployment</Link>
                  </h5>
                  <Link className="cat" href="#">
                    New York
                  </Link>
                  <Link className="right-arrow" href="#">
                    <FaAngleDoubleRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-inner">
                <div className="thumb">
                  <img src="assets/img/case-study/2.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link href="/case-study-details">Fiber Optic Installation</Link>
                  </h5>
                  <Link className="cat" href="#">
                    Chicago
                  </Link>
                  <Link className="right-arrow" href="#">
                    <FaAngleDoubleRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-inner">
                <div className="thumb">
                  <img src="assets/img/case-study/3.png" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link href="/case-study-details">Data Center Solutions</Link>
                  </h5>
                  <Link className="cat" href="#">
                    Dallas
                  </Link>
                  <Link className="right-arrow" href="#">
                    <FaAngleDoubleRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== case-study area end ==================*/}
    </>
  );
};

export default CaseStudyAreaOne;
