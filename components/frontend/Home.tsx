import React, { useState ,useEffect} from 'react'
import Link from 'next/link' ;
export default function Home(): JSX.Element{
    return(
        <>
            <div className="banner dark-opacity" style={{backgroundImage: "url(/assets/img/banner-4.jpg)"}} data-overlay="7">  
                <div className="container">
                    <div className="banner-caption">
                    <div className="col-md-12 col-sm-12 banner-text">
                        <h1>What is Bungee?</h1>
                        <p>Bungee is an anonymous review platform meant to inform other professionals about their peers before they make a career move. We have found that some of the largest contributors to satisfaction at work revolve around work / life balance and group culture- both largely impacted by bosses, colleagues, and other members of the group.
</p>
                        <form className="form-verticle" id="home-btn">
                        <div className="col-md-10 col-sm-10 no-padd">
                            <i className="banner-icon icon-pencil"></i>
                            <input type="text" className="form-control left-radius right-br" placeholder="Keywords.."/>
                        </div>
                        <div className="col-md-2 col-sm-2 no-padd">
                            <div className="form-box">
                            <button type="button" className="btn theme-btn btn-default">Search</button>
                            </div>
                        </div>
                        </form>
                        <div className="pulse-tag">
                        <a href="#listing" className="pulse btn-banner-link"><i className="theme-cl ti-angle-double-down"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
			<div className="clearfix"></div>
            <section id="listing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="heading">
                            <h2>Top &amp; Popular <span>Reviewrs</span></h2>
                            <p>Bringing Transparency to the Workplace.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Link href='/User/ListingDetails'>
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
                   </div></Link>
                   <Link href='/User/ListingDetails'>
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
                  </div></Link>
                  <Link href='/User/ListingDetails'>
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
                 </Link>
                </div>
                </div>
            </section>
            <section className="features">
                <div className="container">
                    <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="heading">
                        <h2>Plan Which in <span>Your Mind</span></h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                    <div className="feature-box">
                        <span className="ti-map-alt" />
                        <h4>Find Interesting Place</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                    <div className="feature-box">
                        <span className="ti-email" />
                        <h4>Contact a Few Owners</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                    <div className="feature-box">
                        <span className="ti-user" />
                        <h4>Make a Reservation</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    </div>
                </div>
            </section>
            <section className="tag-sec" style={{"background": "url(assets/img/tag-bg.jpg)"}}>
                <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                    <div className="tag-content">
                        <img src="assets/img/listing-hub-favicon.png" className="img-responsive" alt="" />
                        <h2>How can I see my colleagues' reviews?
</h2>
                        <p>Once you have signed up and logged in, you'll be able to see reviews and write your own reviews anonymously on the platform.
</p>
                        <Link href="User/ListingDetails" className="btn theme-btn btn-radius">Our Top Reviewrs<i className="ti-shift-right" /></Link>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}