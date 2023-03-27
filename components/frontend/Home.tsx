import React, { useState ,useEffect} from 'react'
export default function Home(){
    return(
        <>
            <div className="banner dark-opacity" style={{"backgroundImage": "url(assets/img/banner-4.jpg)"}} data-overlay={7}>  
                <div className="container">
                    <div className="banner-caption">
                    <div className="col-md-12 col-sm-12 banner-text">
                        <h1>Cooking with fine Wine</h1>
                        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam</p>
                        <form className="form-verticle">
                        <div className="col-md-4 col-sm-4 no-padd">
                            <i className="banner-icon icon-pencil" />
                            <input type="text" className="form-control left-radius right-br" placeholder="Keywords.." />
                        </div>
                        <div className="col-md-3 col-sm-3 no-padd">
                            <div className="form-box">
                            <i className="banner-icon icon-map-pin" />
                            <input type="text" className="form-control right-br" placeholder="Location.." />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 no-padd">
                            <div className="form-box">
                            <i className="banner-icon icon-layers" />
                            <select className="form-control">
                                <option data-placeholder="Choose Category" className="chosen-select">Choose Category</option>
                                <option value={1}>Food &amp; restaurants </option>
                                <option value={2}>Shop &amp; Education</option>
                                <option value={3}>Education</option>
                                <option value={4}>Business</option>
                            </select>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 no-padd">
                            <div className="form-box">
                            <button type="button" className="btn theme-btn btn-default">Search</button>
                            </div>
                        </div>
                        </form>
                        <div className="pulse-tag">
                        <a href="#listing" className="pulse btn-banner-link"><i className="theme-cl ti-angle-double-down" /></a>
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
                        <h2>Top &amp; Popular <span>Listings</span></h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="listing-shot grid-style">
                        <div className="listing-badge now-open">Now Open</div>
                        <a href="listing-detail.html">
                            <div className="listing-shot-img">
                            <img src="assets/img/category/art.jpg" className="img-responsive" alt="" />
                            <span className="approve-listing"><i className="fa fa-check" /></span>
                            </div>
                            <div className="listing-shot-caption">
                            <h4>Art &amp; Design</h4>
                            <p className="listing-location">Bishop Avenue, New York</p>
                            <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                            </div>
                        </a>
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
                    <div className="col-md-4 col-sm-6">
                        <div className="listing-shot grid-style">
                        <a href="listing-detail.html">
                            <div className="listing-shot-img">
                            <img src="assets/img/category/education.jpg" className="img-responsive" alt="" />
                            </div>
                            <div className="listing-shot-caption">
                            <h4>Education</h4>
                            <p className="listing-location">Bishop Avenue, New York</p>
                            <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                            </div>
                        </a>
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
                    <div className="col-md-4 col-sm-6">
                        <div className="listing-shot grid-style">
                        <a href="listing-detail.html">
                            <div className="listing-shot-img">
                            <img src="assets/img/category/documentry.jpg" className="img-responsive" alt="" />
                            <span className="approve-listing"><i className="fa fa-check" /></span>
                            </div>
                            <div className="listing-shot-caption">
                            <h4>Documentary</h4>
                            <p className="listing-location">Bishop Avenue, New York</p>
                            <span className="like-listing style-2"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                            </div>
                        </a>
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
                </div>
            </section>
            <section className="gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="heading">
                            <h2>Most Popular <span>Categories</span></h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="category-slide">
                            <div className="list-slide-box">
                                <div className="category-full-widget">
                                    <div className="category-widget-bg" style={{"backgroundImage": "url(assets/img/category/art.jpg)"}}>
                                    <i className="bg-a cat-icon fa fa-paint-brush" aria-hidden="true" />
                                    </div>
                                    <div className="cat-box-name">
                                    <h4>Art &amp; Design</h4>
                                    <a href="search-listing.html" className="btn-btn-wrowse">Browse</a>
                                    </div>
                                </div>
                            </div>
                            <div className="list-slide-box">
                                <div className="category-full-widget">
                                    <div className="category-widget-bg" style={{"backgroundImage": "url(assets/img/category/education.jpg)"}}>
                                    <i className="bg-b cat-icon fa fa-graduation-cap" aria-hidden="true" />
                                    </div>
                                    <div className="cat-box-name">
                                    <h4>Education</h4>
                                    <a href="search-listing.html" className="btn-btn-wrowse">Browse</a>
                                    </div>
                                </div>
                            </div>
                            <div className="list-slide-box">
                                <div className="category-full-widget">
                                    <div className="category-widget-bg" style={{"backgroundImage": "url(assets/img/category/documentry.jpg)"}}>
                                    <i className="bg-q cat-icon fa fa-file-text" aria-hidden="true" />
                                    </div>
                                    <div className="cat-box-name">
                                    <h4>Documentary</h4>
                                    <a href="search-listing.html" className="btn-btn-wrowse">Browse</a>
                                    </div>
                                </div>
                            </div>
                            <div className="list-slide-box">
                                <div className="category-full-widget">
                                    <div className="category-widget-bg" style={{"backgroundImage": "url(assets/img/category/food.jpg)"}}>
                                    <i className="bg-d cat-icon fa fa-glass" aria-hidden="true" />
                                    </div>
                                    <div className="cat-box-name">
                                    <h4>Food &amp; Restaurants</h4>
                                    <a href="search-listing.html" className="btn-btn-wrowse">Browse</a>
                                    </div>
                                </div>
                            </div>
                            <div className="list-slide-box">
                                <div className="category-full-widget">
                                    <div className="category-widget-bg" style={{"backgroundImage": "url(assets/img/category/instructional.jpg)"}}>
                                    <i className="bg-e fa cat-icon fa-heart" aria-hidden="true" />
                                    </div>
                                    <div className="cat-box-name">
                                    <h4>Instructional</h4>
                                    <a href="search-listing.html" className="btn-btn-wrowse">Browse</a>
                                    </div>
                                </div>
                            </div>
                            <div className="list-slide-box">
                                <div className="category-full-widget">
                                    <div className="category-widget-bg" style={{"backgroundImage": "url(assets/img/category/sport.jpg)"}}>
                                    <i className="bg-f fa cat-icon fa-futbol-o" aria-hidden="true" />
                                    </div>
                                    <div className="cat-box-name">
                                    <h4>Sport</h4>
                                    <a href="search-listing.html" className="btn-btn-wrowse">Browse</a>
                                    </div>
                                </div>
                            </div>
                            <div className="list-slide-box">
                                <div className="category-full-widget">
                                    <div className="category-widget-bg" style={{"backgroundImage": "url(assets/img/category/business.jpg)"}}>
                                    <i className="bg-g fa cat-icon fa-briefcase" aria-hidden="true" />
                                    </div>
                                    <div className="cat-box-name">
                                    <h4>Business</h4>
                                    <a href="search-listing.html" className="btn-btn-wrowse">Browse</a>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        <h2>Hello favourite day</h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa</p>
                        <a href="#" className="btn theme-btn btn-radius">EXPLORE US<i className="ti-shift-right" /></a>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}