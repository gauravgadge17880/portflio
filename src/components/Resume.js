import React, { Fragment } from 'react'
import { SiCodechef, SiHackerrank } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">GAURAV GADGE</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EXPERIENCE</h4>
                        <ul>
                            
                            <li>
                                <h4 className="ff-jose my-1 text-red">Internship Trainee</h4>
                                <h6 className="blue-label px-2 py-1">Feb 2022 - Jun 2022</h6>
                                <p className="m-0">iBase Electrosoft · Internship</p>
                                <p>Amravati, Maharashtra, India</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Internship Trainee</h4>
                                <h6 className="blue-label px-2 py-1">Aug 2022 - Aug 2022</h6>
                                <p className="m-0">Infrotrixs pvt ltd · Internship</p>
                                <p>Sambhajinagar, Maharashtra, India</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">MCA - Master of Computer Application</h4>
                                <h6 className="blue-label px-2 py-1">2020 - 2022</h6>
                                <p className="m-0">Prof Ram Meghe Collage & Research Center Badnera Amravati</p>
                                <p>CGPA: 9.67</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">BCA - Bachelor of Computer Application</h4>
                                <h6 className="blue-label px-2 py-1">2016 - 2019</h6>
                                <p className="m-0">Shri Shivaji Science College Amaravati</p>
                                <p>Grade: 58.75 %</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                                <h6 className="blue-label px-2 py-1">2016</h6>
                                <p className="m-0">Shri Gurudeo Viddhya Mandir & Junior College Gurukunj Mozari</p>
                                <p>Grade: 55.36 %</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        {/* <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
                            <a href="https://www.codechef.com/users/yagnik_003" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiCodechef className="zoom-on-hover"/>
                            </a> 
                            <a href="https://www.hackerrank.com/Yagnik_003" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiHackerrank className="zoom-on-hover"/>
                            </a> 
                        </h1> */}
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume