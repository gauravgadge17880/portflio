import React, { Fragment } from "react";

function About() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center about-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="font-big text-red slide-in-top">About me</h1>
                <hr></hr>
                <p className="slide-in-bottom">
                  Ambitious full-stack developer, a self-led learner and team
                  player. <br></br>
                  Strong in design and integration with intuitive
                  problem-solving skills. Proficient in{" "}
                  <span className="text-red ls-2">
                    {" "}
                    JAVA, J2EE, SPRING, SPRING BOOT, HIBERNATE, JPA,
                    RESTFUL WEB SERVICES</span> and good in<span className="text-red ls-2">  REACT JS, HTML, CSS, JAVASCRIPT, BOOTSTRAP, SQL,
                    MONGODB. {" "}
                  </span>{" "}
                  Passionate about implementing and launching new projects.
                  Ability to translate business requirements into technical
                  solutions. Looking to start the career as an entry-level
                  software developer with a reputed firm driven by technology.
                </p>
                {
                  /* <p className='slide-in-bottom'>
                                Currently looking for new opportunities in industry and willing<br></br>
                                to work on challenging and diverse projects with the latest technologies.
                            </p>
                            <p className='slide-in-bottom'>
                                Previously worked as Full stack web developer.<br></br>
                                The technology I've worked on : <span className="text-red ls-2">Asp.Net Core, Asp.Net Mvc, <br></br>
                                C#, Sql, Ssms, Telerik-UI, Html, Css, Js, Bootstrap </span>
                            </p>*/
                  <p className="slide-in-bottom">
                    Currently Learning Spring Security and Microservice
                  </p>
                }
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                className="img-fluid"
                src="../images/nomad-amico.png"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
