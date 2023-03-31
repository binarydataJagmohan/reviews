import React from 'react'
import Link from 'next/link';

export default function TopReviers()
{
    return(

        <>
        <section className="title-transparent page-title" style={{background: 'url(../assets/img/title-bg.jpg)'}}>
          <div className="container">
            <div className="title-content">
              <h1>Full Width Grid</h1>
              <div className="breadcrumbs">
                <a href="#">Home</a>
                <span className="gt3_breadcrumb_divider" />
                <span className="current">Full Width Grid</span>
              </div>
            </div>
          </div>
        </section>
        <div className="clearfix" />

           <section className="padd-top-0 padd-bot-0 overlap">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="white-box white-shadow padd-top-30 padd-bot-30 translateY-60">
                  <h3 className="text-center">Search For Listing</h3>
                  <form className="form-verticle">
                    <div className="col-md-4 col-sm-4 no-padd">
                      <input type="text" className="form-control left-radius" placeholder="Keywords.." />
                    </div>
                    <div className="col-md-3 col-sm-3 no-padd">
                      <input type="text" className="form-control" placeholder="Location.." />
                    </div>
                    <div className="col-md-3 col-sm-3 no-padd">
                      <select className="selectpicker form-control" data-live-search="true">
                        <option data-tokens="ketchup mustard">Choose Category</option>
                        <option data-tokens="mustard">Burger, Shake and a Smile</option>
                        <option data-tokens="frosting">Sugar, Spice and all things nice</option>
                      </select>
                    </div>
                    <div className="col-md-2 col-sm-2 no-padd">
                      <button type="button" className="btn theme-btn normal-height full-width">Search</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================ End Search Bar Style ======================= */}
        {/* ================ Full Width Grid Style ======================= */}
        <section className="padd-top-20">
          <div className="container">
            <div className="row mrg-bot-20">
              <div className="col-md-6">
                <h5>Short By</h5>
              </div>
              <div className="col-md-6">
                <div className="layout-option pull-right">
                  <a href="full-width-grid.html" className="active" title="Grid Layout"><i className="ti-layout-grid3" /></a>
                  <a href="full-width-vertical.html" title="List Layout"><i className="ti-view-list" /></a>
                </div>
              </div>
            </div>
            <Link href="/User/ListingDetails"><div className="row">
            <div className="col-md-4 col-sm-6">
                <div className="tp-author-box">
                  <div className="author-cover-img">
                    <img src="../assets/img/places/place-1.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="tp-author-detail-wrapper">
                    <div className="tp-author-detail-box">	
                      <div className="tp-author">
                        <a href="/User/ListingDetails" title="author"><img src="../assets/img/team3.jpg" className="img-responsive " alt="" /></a>
                      </div>
                    </div>
                    <div className="listing-shot-caption">
                      <h4>Art &amp; Design</h4>
                      <p className="listing-location">Bishop Avenue, New York</p>
                      <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                    </div>
                    <div className="listing-shot-info">
                      <div className="row extra">
                        <div className="col-md-12">
                          <div className="listing-detail-info">
                            <span><i className="fa fa-phone" aria-hidden="true" /> 807-502-5867</span>
                            <span><i className="fa fa-globe" aria-hidden="true" /> www.mysitelink.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-shot-info rating">
                      <div className="row extra">
                        <div className="col-md-7 col-sm-7 col-xs-6">
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star-half-o" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
                          <a href="/User/ListingDetails" className="detail-link">Open Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/User/ListingDetails"><div className="col-md-4 col-sm-6">
                <div className="tp-author-box">
                  <div className="author-cover-img">
                    <img src="../assets/img/places/place-1.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="tp-author-detail-wrapper">
                    <div className="tp-author-detail-box">	
                      <div className="tp-author">
                        <a href="/User/ListingDetails" title="author"><img src="../assets/img/team4.jpg" className="img-responsive " alt="" /></a>
                      </div>
                    </div>
                    <div className="listing-shot-caption">
                      <h4>Art &amp; Design</h4>
                      <p className="listing-location">Bishop Avenue, New York</p>
                      <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                    </div>
                    <div className="listing-shot-info">
                      <div className="row extra">
                        <div className="col-md-12">
                          <div className="listing-detail-info">
                            <span><i className="fa fa-phone" aria-hidden="true" /> 807-502-5867</span>
                            <span><i className="fa fa-globe" aria-hidden="true" /> www.mysitelink.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-shot-info rating">
                      <div className="row extra">
                        <div className="col-md-7 col-sm-7 col-xs-6">
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star-half-o" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
                          <a href="/User/ListingDetails" className="detail-link">Open Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></Link> 
              <Link href="/User/ListingDetails"><div className="col-md-4 col-sm-6">
                <div className="tp-author-box">
                  <div className="author-cover-img">
                    <img src="../assets/img/places/place-1.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="tp-author-detail-wrapper">
                    <div className="tp-author-detail-box">	
                      <div className="tp-author">
                        <a href="/User/ListingDetails" title="author"><img src="../assets/img/team4.jpg" className="img-responsive " alt="" /></a>
                      </div>
                    </div>
                    <div className="listing-shot-caption">
                      <h4>Art &amp; Design</h4>
                      <p className="listing-location">Bishop Avenue, New York</p>
                      <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                    </div>
                    <div className="listing-shot-info">
                      <div className="row extra">
                        <div className="col-md-12">
                          <div className="listing-detail-info">
                            <span><i className="fa fa-phone" aria-hidden="true" /> 807-502-5867</span>
                            <span><i className="fa fa-globe" aria-hidden="true" /> www.mysitelink.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-shot-info rating">
                      <div className="row extra">
                        <div className="col-md-7 col-sm-7 col-xs-6">
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star-half-o" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
                          <a href="/User/ListingDetails" className="detail-link">Open Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></Link> 
              <Link href="/User/ListingDetails"><div className="col-md-4 col-sm-6">
                <div className="tp-author-box">
                  <div className="author-cover-img">
                    <img src="../assets/img/places/place-1.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="tp-author-detail-wrapper">
                    <div className="tp-author-detail-box">	
                      <div className="tp-author">
                        <a href="/User/ListingDetails" title="author"><img src="../assets/img/team4.jpg" className="img-responsive " alt="" /></a>
                      </div>
                    </div>
                    <div className="listing-shot-caption">
                      <h4>Art &amp; Design</h4>
                      <p className="listing-location">Bishop Avenue, New York</p>
                      <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                    </div>
                    <div className="listing-shot-info">
                      <div className="row extra">
                        <div className="col-md-12">
                          <div className="listing-detail-info">
                            <span><i className="fa fa-phone" aria-hidden="true" /> 807-502-5867</span>
                            <span><i className="fa fa-globe" aria-hidden="true" /> www.mysitelink.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-shot-info rating">
                      <div className="row extra">
                        <div className="col-md-7 col-sm-7 col-xs-6">
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star-half-o" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
                          <a href="/User/ListingDetails" className="detail-link">Open Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></Link> 
              <div className="col-md-4 col-sm-6">
                <div className="tp-author-box">
                  <div className="author-cover-img">
                    <img src="../assets/img/places/place-1.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="tp-author-detail-wrapper">
                    <div className="tp-author-detail-box">	
                      <div className="tp-author">
                        <a href="author-detail.html" title="author"><img src="../assets/img/team3.jpg" className="img-responsive " alt="" /></a>
                      </div>
                    </div>
                    <div className="listing-shot-caption">
                      <h4>Art &amp; Design</h4>
                      <p className="listing-location">Bishop Avenue, New York</p>
                      <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                    </div>
                    <div className="listing-shot-info">
                      <div className="row extra">
                        <div className="col-md-12">
                          <div className="listing-detail-info">
                            <span><i className="fa fa-phone" aria-hidden="true" /> 807-502-5867</span>
                            <span><i className="fa fa-globe" aria-hidden="true" /> www.mysitelink.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-shot-info rating">
                      <div className="row extra">
                        <div className="col-md-7 col-sm-7 col-xs-6">
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star-half-o" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
                          <a href="listing-detail.html" className="detail-link">Open Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="tp-author-box">
                  <div className="author-cover-img">
                    <img src="../assets/img/places/place-1.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="tp-author-detail-wrapper">
                    <div className="tp-author-detail-box">	
                      <div className="tp-author">
                        <a href="author-detail.html" title="author"><img src="../assets/img/team3.jpg" className="img-responsive " alt="" /></a>
                      </div>
                    </div>
                    <div className="listing-shot-caption">
                      <h4>Art &amp; Design</h4>
                      <p className="listing-location">Bishop Avenue, New York</p>
                      <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                    </div>
                    <div className="listing-shot-info">
                      <div className="row extra">
                        <div className="col-md-12">
                          <div className="listing-detail-info">
                            <span><i className="fa fa-phone" aria-hidden="true" /> 807-502-5867</span>
                            <span><i className="fa fa-globe" aria-hidden="true" /> www.mysitelink.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-shot-info rating">
                      <div className="row extra">
                        <div className="col-md-7 col-sm-7 col-xs-6">
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star-half-o" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
                          <a href="listing-detail.html" className="detail-link">Open Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="tp-author-box">
                  <div className="author-cover-img">
                    <img src="../assets/img/places/place-1.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="tp-author-detail-wrapper">
                    <div className="tp-author-detail-box">	
                      <div className="tp-author">
                        <a href="author-detail.html" title="author"><img src="../assets/img/team3.jpg" className="img-responsive " alt="" /></a>
                      </div>
                    </div>
                    <div className="listing-shot-caption">
                      <h4>Art &amp; Design</h4>
                      <p className="listing-location">Bishop Avenue, New York</p>
                      <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                    </div>
                    <div className="listing-shot-info">
                      <div className="row extra">
                        <div className="col-md-12">
                          <div className="listing-detail-info">
                            <span><i className="fa fa-phone" aria-hidden="true" /> 807-502-5867</span>
                            <span><i className="fa fa-globe" aria-hidden="true" /> www.mysitelink.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-shot-info rating">
                      <div className="row extra">
                        <div className="col-md-7 col-sm-7 col-xs-6">
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star-half-o" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
                          <a href="listing-detail.html" className="detail-link">Open Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="tp-author-box">
                  <div className="author-cover-img">
                    <img src="../assets/img/places/place-1.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="tp-author-detail-wrapper">
                    <div className="tp-author-detail-box">	
                      <div className="tp-author">
                        <a href="author-detail.html" title="author"><img src="../assets/img/team3.jpg" className="img-responsive " alt="" /></a>
                      </div>
                    </div>
                    <div className="listing-shot-caption">
                      <h4>Art &amp; Design</h4>
                      <p className="listing-location">Bishop Avenue, New York</p>
                      <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                    </div>
                    <div className="listing-shot-info">
                      <div className="row extra">
                        <div className="col-md-12">
                          <div className="listing-detail-info">
                            <span><i className="fa fa-phone" aria-hidden="true" /> 807-502-5867</span>
                            <span><i className="fa fa-globe" aria-hidden="true" /> www.mysitelink.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-shot-info rating">
                      <div className="row extra">
                        <div className="col-md-7 col-sm-7 col-xs-6">
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star-half-o" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
                          <a href="listing-detail.html" className="detail-link">Open Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="tp-author-box">
                  <div className="author-cover-img">
                    <img src="../assets/img/places/place-1.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="tp-author-detail-wrapper">
                    <div className="tp-author-detail-box">	
                      <div className="tp-author">
                        <a href="author-detail.html" title="author"><img src="../assets/img/team3.jpg" className="img-responsive " alt="" /></a>
                      </div>
                    </div>
                    <div className="listing-shot-caption">
                      <h4>Art &amp; Design</h4>
                      <p className="listing-location">Bishop Avenue, New York</p>
                      <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                    </div>
                    <div className="listing-shot-info">
                      <div className="row extra">
                        <div className="col-md-12">
                          <div className="listing-detail-info">
                            <span><i className="fa fa-phone" aria-hidden="true" /> 807-502-5867</span>
                            <span><i className="fa fa-globe" aria-hidden="true" /> www.mysitelink.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-shot-info rating">
                      <div className="row extra">
                        <div className="col-md-7 col-sm-7 col-xs-6">
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star-half-o" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
                          <a href="listing-detail.html" className="detail-link">Open Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="tp-author-box">
                  <div className="author-cover-img">
                    <img src="../assets/img/places/place-1.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="tp-author-detail-wrapper">
                    <div className="tp-author-detail-box">	
                      <div className="tp-author">
                        <a href="author-detail.html" title="author"><img src="../assets/img/team4.jpg" className="img-responsive " alt="" /></a>
                      </div>
                    </div>
                    <div className="listing-shot-caption">
                      <h4>Art &amp; Design</h4>
                      <p className="listing-location">Bishop Avenue, New York</p>
                      <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                    </div>
                    <div className="listing-shot-info">
                      <div className="row extra">
                        <div className="col-md-12">
                          <div className="listing-detail-info">
                            <span><i className="fa fa-phone" aria-hidden="true" /> 807-502-5867</span>
                            <span><i className="fa fa-globe" aria-hidden="true" /> www.mysitelink.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-shot-info rating">
                      <div className="row extra">
                        <div className="col-md-7 col-sm-7 col-xs-6">
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star-half-o" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
                          <a href="listing-detail.html" className="detail-link">Open Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="tp-author-box">
                  <div className="author-cover-img">
                    <img src="../assets/img/places/place-1.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="tp-author-detail-wrapper">
                    <div className="tp-author-detail-box">	
                      <div className="tp-author">
                        <a href="author-detail.html" title="author"><img src="../assets/img/team3.jpg" className="img-responsive " alt="" /></a>
                      </div>
                    </div>
                    <div className="listing-shot-caption">
                      <h4>Art &amp; Design</h4>
                      <p className="listing-location">Bishop Avenue, New York</p>
                      <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                    </div>
                    <div className="listing-shot-info">
                      <div className="row extra">
                        <div className="col-md-12">
                          <div className="listing-detail-info">
                            <span><i className="fa fa-phone" aria-hidden="true" /> 807-502-5867</span>
                            <span><i className="fa fa-globe" aria-hidden="true" /> www.mysitelink.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-shot-info rating">
                      <div className="row extra">
                        <div className="col-md-7 col-sm-7 col-xs-6">
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star-half-o" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
                          <a href="listing-detail.html" className="detail-link">Open Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="tp-author-box">
                  <div className="author-cover-img">
                    <img src="../assets/img/places/place-1.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="tp-author-detail-wrapper">
                    <div className="tp-author-detail-box">	
                      <div className="tp-author">
                        <a href="author-detail.html" title="author"><img src="../assets/img/team4.jpg" className="img-responsive " alt="" /></a>
                      </div>
                    </div>
                    <div className="listing-shot-caption">
                      <h4>Art &amp; Design</h4>
                      <p className="listing-location">Bishop Avenue, New York</p>
                      <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                    </div>
                    <div className="listing-shot-info">
                      <div className="row extra">
                        <div className="col-md-12">
                          <div className="listing-detail-info">
                            <span><i className="fa fa-phone" aria-hidden="true" /> 807-502-5867</span>
                            <span><i className="fa fa-globe" aria-hidden="true" /> www.mysitelink.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-shot-info rating">
                      <div className="row extra">
                        <div className="col-md-7 col-sm-7 col-xs-6">
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star" aria-hidden="true" />
                          <i className="color fa fa-star-half-o" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                        </div>
                        <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
                          <a href="listing-detail.html" className="detail-link">Open Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div></Link> 
            {/* Start Pagination */}
            <div className="row">
              <div className="col-md-12">
                <div className="bs-example">
                  <ul className="pagination">
                    <li><a href="#"><i className="ti-arrow-left" /></a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#"><i className="ti-arrow-right" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Pagination */}
          </div>
        </section>
        
        </>
    )
}