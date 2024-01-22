import React, { useState } from 'react'

export const Operation = () => {
  
  const[projectOne,setProjectOne]=useState(true);
  const[projectTwo,setProjectTwo]=useState(false);
  const[projectThree,setProjectThree]=useState(false);
  const showProjectTwoDetail=()=>{
    setProjectOne(false);
    setProjectTwo(true);
    setProjectThree(false);
  }
  
  const showProjectOneDetail=()=>{
    setProjectOne(true);
    setProjectTwo(false);
    setProjectThree(false);
  }
  
  const showProjectThreeDetail=()=>{
    setProjectOne(false);
    setProjectTwo(false);
    setProjectThree(true);
  }

  
  return (
  <div>
    <section className="section-5 products p-5">
      <div className="container body-container">
        <div className="row product-content">
          <div className="col-md-6 desc-tabs">
            <h2 className="section-heading">Our Major Operations</h2>
            <p className="sub-title">Unveiling the heartbeat of our endeavors: Explore the core operations that drive us forward.</p>
            <div className="product-content-tabs">
              <ul className="tab-list">
                <li className={projectOne?"tab-item active":"tab-item"} id='onthecase-mfb' onClick={(e)=>{e.preventDefault();showProjectOneDetail();}}>
                  <p className="product-content-tabs--heading">Onthecase</p>
                  <div className="product-content-tabs_desc">
                    {projectOne && <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, architecto quo. Alias blanditiis accusantium quam repudiandae aperiam dolorem autem, nostrum, numquam voluptatem earum quisquam cupiditate?</p>}
                  </div>
                </li>
                <li className={projectTwo?"tab-item active":"tab-item"}  onClick={(e)=>{e.preventDefault();showProjectTwoDetail();}}>
                  <p className="product-content-tabs--heading">Email love</p>
                  <div className="product-content-tabs_desc">
                  {projectTwo && <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, architecto quo. Alias blanditiis accusantium quam repudiandae aperiam dolorem autem, nostrum, numquam voluptatem earum quisquam cupiditate?</p>}
                  
                  </div>
                  
                </li>
                <li className={projectThree?"tab-item active":"tab-item"}onClick={(e)=>{e.preventDefault();showProjectThreeDetail();}}>
                  <p className="product-content-tabs--heading">Appkogent</p>
                  <div className="product-content-tabs_desc">
                    {projectThree && <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, architecto quo. Alias blanditiis accusantium quam repudiandae aperiam dolorem autem, nostrum, numquam voluptatem earum quisquam cupiditate?</p>}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 vid-content">
            <div className="vid">
              <div className="vid-img">
                {projectOne && <span><img className='img-fluid' width={450} src="onthecase.PNG" alt="" /></span>}
                {projectTwo &&  <span><img className='img-fluid' width={450} src="email love 2.jpg" alt="" /></span>}
                {projectThree &&  <span><img className='img-fluid' width={450} src="appkogent.jpg" alt="" /></span>}
                <img className='img-border' src="img border.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
