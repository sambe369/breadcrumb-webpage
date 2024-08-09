import React from "react";

const Services_section_5 = () => {
  return (
    <div>
      <section className="section-3 p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <span>
                <h2>Dev Ops</h2>
              </span>
              <p className="my-4">
                We ensure seamless database performance and security through continuous monitoring, automated backups, and real-time error detection. Our DevOps approach optimizes and scales your databases, minimizing downtime and ensuring reliability.
              </p>
              <p className="my-4">
                With expert repair services, we swiftly resolve issues, keeping your systems running smoothly. Trust us to safeguard your data and enhance your operational efficiency.
              </p>
            </div>
            <div className="col-md images">
              <img className="services-images img-fluid" src="service frontend 4.jpg" alt="" width={600} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services_section_5;
