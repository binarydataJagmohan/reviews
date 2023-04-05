import React from 'react'
import Link from 'next/link'

export default function Search()
{
    return(
        <>
         <section className="search-part section-sp">
          <div className="container"> 
            <div className="banner-search-box">
              <p>Search by name, company or group</p>
              <div className="group-search">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <span className="input-group-text" id="basic-addon2"><i className="fa-solid fa-magnifying-glass" /></span>
                </div>
              </div>
            </div>
          </div>
        </section> 
        <section className="my-reviews section-sp">
          <div className="container FrontendTest"> 
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Most recent</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Most liked</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">By firm</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab2" data-bs-toggle="pill" data-bs-target="#pills-contact2" type="button" role="tab" aria-controls="pills-contact2" aria-selected="false">By Bungee score</button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">  
                <div className="main_box mt-4">
                  <div className="row">
                    <div className="col-sm-8 col-7">
                      <h4>Sameed Imran</h4>
                      <h4>Barclays | Investment Banking Technology</h4>
                      <h4>Vice President</h4>
                    </div>
                    <div className="col-sm-4  col-5 text-right ">
                      <h6 className="date-time">3/5/23 14:35 ET |<span> 75</span> </h6>
                      <p><a href="#" className="what">What’s this?</a></p>
                    </div> 
                  </div>
                  <p>Used to work with this guy and he is very aggressive in his expectations of you and timeline for deliverables.Very much a project manager but doesn’t actually have insightful thoughts to add. 
                  </p>
                  <div className="row">
                    <div className="col-6">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-5 ">
                          <h4 className="overall-rating">Overall rating:</h4>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 ">
                          <p className="rating"><span>1</span>/5</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <div className="col-lg-8 col-md-6 col-2" />
                        <div className="col-lg-2 col-md-3 col-5">
                          <p className="thum thum-up"><i className="fa-solid fa-thumbs-up" /> 14</p>
                        </div>
                        <div className="col-lg-2 col-md-3 col-5">
                          <p className="thum thum-down"> <i className="fa-solid fa-thumbs-down" /> 2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main_box mt-5">
                  <div className="row">
                    <div className="col-sm-8 col-7">
                      <h4>Brandon Fiala</h4>
                      <h4>Credit Suisse | IBCM Technology</h4>
                      <h4>Analyst</h4>
                    </div>
                    <div className="col-sm-4 col-5 text-right ">
                      <h6 className="date-time">3/2/23 17:24 ET  |<span> 66</span> </h6>
                      <p><a href="#" className="what">What’s this?</a></p>
                    </div> 
                  </div>
                  <p>Current colleague and can attest that Brandon is really hard working and good industry knowledge for an Analyst. Would be a great addition to any team!</p>
                  <div className="row">
                    <div className="col-6">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-5 ">
                          <h4 className="overall-rating">Overall rating:</h4>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 ">
                          <p className="rating"><span>5</span>/5</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <div className="col-lg-8 col-md-6 col-2" />
                        <div className="col-lg-2 col-md-3 col-5">
                          <p className="thum thum-up"><i className="fa-solid fa-thumbs-up" /> 7</p>
                        </div>
                        <div className="col-lg-2 col-md-3 col-5">
                          <p className="thum thum-down"> <i className="fa-solid fa-thumbs-down" /> 3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">2</div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">3</div>
              <div className="tab-pane fade" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact-tab2">4</div>
            </div>
          </div>
        </section>
        </>
    )
}