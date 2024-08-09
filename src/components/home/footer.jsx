import React from 'react';
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <footer className='footer p-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <div className="footer-logo">
                <a href="/">
                  <figure>
                    <img className='footer_logo img-fluid' src="../breadcrumblogo.png" width={188} height={70} alt="" />
                  </figure>
                </a>
                <p className="">We streamline the IT landscape, delivering innovative solutions and expertise, guiding businesses to seamless integration and technological success</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <div className="footer-top-col">
                <div>
                  <div className="mb-12x">
                    <p className="footer-title">About Us</p>
                    <ul className="list">
                      <li>
                        <a href="/about#whoWeAre"><span>Who We Are</span></a>
                      </li>
                      <li>
                        <a href="/about#whyUs"><span>Why Us</span></a>
                      </li>
                      <li>
                        <a href="/about#ourProcess"><span>Our Process</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <div className="footer-top-col">
                <div>
                  <div className="mb-12x">
                    <p className="footer-title">Contact Us</p>
                    <p>Devinagar, kathmandu</p>
                    <p>+977 9841186190, 9865232597</p>
                    <p>breadcrumbtechnologies@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <div className="footer-top-col">
                <div>
                  <div className="mb-12x">
                    <p className="footer-title">Connect with Us</p>
                    <div className="connect_icons">
                      <a href="https://np.linkedin.com/company/breadcrumbtechnologies" target='_blank'><img src="linkedin.svg" alt="" width={24} /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="footer-copyright mt-4">
              <div className="footer-copyright-content">
                <p><FaRegCopyright />
                2023, Breadcrumb Technologies Pvt. Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    
  )
}
