import React from "react";
import { ContactUs } from "./contact_form";

const Contact_content = () => {
  return (
    <div>
      <section className="contact_content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="title d-flex justify-content-center py-5">
                <h3 className="office_title">Our location</h3>
              </div>
              <div className="map">
                <img className="img-fluid" src="location.PNG" alt="" />
              </div>
            </div>
            <div className="information col-md-6">
              <div className="get_intouch d-flex justify-content-center py-5">
                <h3 className="office_title">Get in touch</h3>
              </div>
              <div className="address">
                <p>
                  <b>Phone:</b> +977 9841186190, 9765232597
                </p>
                <p>
                  <b>Email:</b> breadcrumbtechnologies@gmail.com
                </p>
                <p>
                  <b>Address:</b> Devinagar-10, Kathmandu
                </p>
              </div>
              <div className="form mt-5">
                <div className="info_1">
                  <h4>Send us a message:</h4>
                  <p>
                    Want to make contact with us? Please fill in the details
                    below.
                  </p>
                </div>
                {/* <div className="client_info name mt-5">
                  <p>Your name</p>
                  <input className="client_input" type="text" />
                </div>
                <div className="client_info email mt-5">
                  <p>Your email</p>
                  <input className="client_input" type="text" />
                </div>
                <div className="client_info phone mt-5">
                  <p>Your phone number</p>
                  <input className="client_input" type="text" />
                </div>
                <div className="client_info subject mt-5">
                  <p>Subject</p>
                  <input className="client_input" type="text" />
                </div>
                <div className="client_info mt-5">
                  <p>Your message</p>
                  <input className="client_input message" type="text" />
                </div>
                <div className="submit my-4">
                  <button className="submit_button">Submit</button>
  </div> */}
                <ContactUs />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact_content;
