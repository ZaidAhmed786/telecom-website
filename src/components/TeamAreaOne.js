import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const TeamAreaOne = () => {
  return (
    <>
      {/*====================== team area start ======================*/}
      <div className="team-area bg-relative pd-top-90 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title"> Telecompaybill.us</h6>
            <h2 className="title">
              Your Partner In <span>Connectivity</span> Solutions
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img src="assets/img/team/1.png" alt="img" />
                  <ul className="team-social-inner">
                    <li>
                      <Link href="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="details">
                  <h5>
                    <Link href="/team-details">Devon Lane</Link>
                  </h5>
                  <p>5G Network Specialist</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img src="assets/img/team/2.png" alt="img" />
                  <ul className="team-social-inner">
                    <li>
                      <Link href="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="details">
                  <h5>
                    <Link href="/team-details">Darrell Steward</Link>
                  </h5>
                  <p>Fiber Optics Engineer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img src="assets/img/team/3.png" alt="img" />
                  <ul className="team-social-inner">
                    <li>
                      <Link href="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="details">
                  <h5>
                    <Link href="/team-details">Bessie Cooper</Link>
                  </h5>
                  <p>Network Security Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================== team area end ======================*/}
    </>
  );
};

export default TeamAreaOne;
