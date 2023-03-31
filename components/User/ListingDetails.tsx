import React from 'react'
import Link from 'next/link';
export default function ListingDetails()
{
    return(
        <>
        
            	<section className="detail-section bg-image" style={{ background:"url(../../assets/img/slider-3.jpg)"}} data-overlay="6">
				<div className="profile-cover-content">
					<div className="container">
						<div className="cover-buttons">
							<ul>
							<li><div className="user_name">SUNIL KUMAR</div></li>
							<li><div className="user_detail">Binary Data | Web designer</div></li>
							<li>
								<div className="inside-rating buttons listing-rating theme-btn button-plain"><span className="value">9.7</span> <sup className="out-of">/10</sup>
								</div>
								</li>
							<li><a href="#add-review" className="buttons btn-outlined medium add-review"><i className="fa fa-comments-o"></i><span className="hidden-xs">Add review</span></a></li>
							{/* <li><a href="#" data-listing-id="74" data-nonce="01a769d424" className="buttons btn-outlined"><i className="fa fa-heart-o"></i><span className="hidden-xs">Bookmark</span> </a></li> */}
							</ul>
						</div>
						<div className="listing-owner hidden-xs hidden-sm">
							<Link href="/User/ProfileDetails"><div className="listing-owner-avater">
								<img src="../assets/img/avatar.jpg" className="img-responsive img-circle" alt="" />
							</div></Link>
							{/* <div className="listing-owner-detail">
								<h4>Lucy Lukie</h4>
								<span className="theme-cl">Web Designer</span>
							</div> */}
						</div>
					</div>
				</div>
			</section>

            <section className="list-detail">
				<div className="container">
					<div className="row">
						
						<div className="col-md-8 col-sm-8">
							{/* <div className="detail-wrapper">
								<div className="detail-wrapper-body">
									<div className="listing-title-bar">
										<h3>Pizza Prizm House <span className="mrg-l-5 category-tag">Restaurants</span></h3>
										<div>
											<a href="#listing-location" className="listing-address">
												<i className="ti-location-pin mrg-r-5"></i>
												2726 Shinn Street, New York
											</a>
											
											<div className="rating-box">
												<div className="detail-list-rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<a href="#" className="detail-rating-count">47 Rating</a>
											</div>
										</div>
									</div>
								</div>
							</div>	 */}
							
							<div className="detail-wrapper">
								<div className="detail-wrapper-header">
									<h4 className="mt-3">Overview</h4>
								</div>
								<div className="detail-wrapper-body">
									<p>Used to work with this guy and he is very aggressive in his expectations of you and timeline for deliverables. Very much a project manager but doesn’t actually have insightful thoughts to add.
										
									  </p>
								</div>
							</div>
							
							<div className="detail-wrapper">
								{/* <div className="detail-wrapper-header">
									<h4>Amenities</h4>
								</div> */}
								{/* <div className="detail-wrapper-body">
									<ul className="detail-check">
										<li>Alarm system</li>
										<li>Depanneur in building</li>
										<li>Onsite management</li>
										<li>Janitor</li>
										<li>Security cameras</li>
										<li>Laundry room in building</li>
										<li>Door attendant</li>
										<li>Street parking</li>
										<li>Attached garage</li>
										<li>Elevator</li>
										<li>Wheelchair accessible</li>
										<li>Hot water</li>
									</ul>
								</div> */}
							</div>
							
							{/* <div className="detail-wrapper">
								<div className="detail-wrapper-header">
									<h4>Location</h4>
								</div>
								<div className="detail-wrapper-body">
									<div id="map_full_width_one" className="full-width" style={{ height:"400px;" }}></div>
								</div>
							</div> */}
							
							<div className="detail-wrapper">
								<div className="detail-wrapper-header">
									<h4>24 Reviews</h4>
								</div>
								<div className="detail-wrapper-body">
									<ul className="review-list">
										<li>
											<div className="reviews-box">
												<div className="review-body">
													{/* <div className="review-avatar">
														<img alt="" src="../assets/img/user-1.png" className="avatar avatar-140 photo" />
													</div> */}
													<div className="review-content">
														<div className="review-info">
															<div className="review-comment">
																<div className="review-author">
																	<b>03/03/23 17:24 ET |</b> Anonymous #.66
																</div>
																<div className="review-comment-stars">
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star empty"></i>
																</div>
																
															</div>
															<div className="review-comment-date">
																<div className="review-date">
																	<span>4 weeks ago</span>
																</div>
															</div>
														</div>
														<p>At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui Blanditiis Praesentium Voluptatum Deleniti Atque Corrupti Quos Dolores Et Quas Molestias Excepturi Sint Occaecati Cupiditate Non Provident.</p>
													</div>
												</div>
											</div>
										</li>
										
										<li>
											<div className="reviews-box">
												<div className="review-body">
													{/* <div className="review-avatar">
														<img alt="" src="../assets/img/user-2.jpg" className="avatar avatar-140 photo" />
													</div> */}
													<div className="review-content">
														<div className="review-info">
															<div className="review-comment">
																<div className="review-author">
																<b>05/09/20 14:24 ET | </b>Anonymous #.23
																</div>
																<div className="review-comment-stars">
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star empty"></i>
																</div>
															</div>
															<div className="review-comment-date">
																<div className="review-date">
																	<span>3 weeks ago</span>
																</div>
															</div>
														</div>
														<p>At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui Blanditiis Praesentium Voluptatum Deleniti Atque Corrupti Quos Dolores Et Quas Molestias Excepturi Sint Occaecati Cupiditate Non Provident.</p>
													</div>
												</div>
											</div>
										</li>
										
										<li>
											<div className="reviews-box">
												<div className="review-body">
													{/* <div className="review-avatar">
														<img alt="" src="../assets/img/user-3.jpg" className="avatar avatar-140 photo" />
													</div> */}
													<div className="review-content">
														<div className="review-info">
															<div className="review-comment">
																<div className="review-author">
																<b>02/08/22 15:30 ET |</b> Anonymous #.19
																</div>
																<div className="review-comment-stars">
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star empty"></i>
																</div>
															</div>
															<div className="review-comment-date">
																<div className="review-date">
																	<span>5 weeks ago</span>
																</div>
															</div>
														</div>
														<p>Used to work with this guy and he is very aggressive in his expectations of you and timeline for deliverables. Very much a project manager but doesn’t actually have insightful thoughts to add. </p>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
							
							<div className="detail-wrapper" id='add-review'>
								<div className="detail-wrapper-header">
									<h4>Rate & Write Reviews</h4>
								</div>
								<div className="detail-wrapper-body">
								
									<div className="row mrg-bot-10">
										<div className="col-md-12">
											<div className="rating-opt">
												<div   className="jr-ratenode jr-nomal"></div>
												<div   className="jr-ratenode jr-nomal "></div>
												<div   className="jr-ratenode jr-nomal "></div>
												<div   className="jr-ratenode jr-nomal "></div>
												<div   className="jr-ratenode jr-nomal "></div>
											</div>
										</div>
									</div>
									
									<div className="row">
										<div className="col-sm-6">
											<input type="text" className="form-control" placeholder="Your Name*" />
										</div>
										<div className="col-sm-6">
											<input type="email" className="form-control" placeholder="Email Address*" />
										</div>
										<div className="col-sm-12">
											<textarea className="form-control height-110" placeholder="Tell us your experience..."></textarea>
										</div>
										<div className="col-sm-12">
											<button type="button" className="btn theme-btn">Submit your review</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						
						
						<div className="col-md-4 col-sm-12">
							<div className="sidebar">
							<div className="widget-boxed">
									<div className="widget-boxed-header">
										<h4><i className="ti-check-box padd-r-10"></i>Latest Listing</h4>
									</div>
									<div className="widget-boxed-body padd-top-5">
										<div className="side-list">
											<ul className="listing-list">
												<li>
													<a href="#">
														<div className="listing-list-img">
															<img src="../assets/img/image-3.jpg" className="img-responsive" alt=""/>
														</div>
													</a>
													<div className="listing-list-info">
														<h5><a href="#" title="Listing">Brandon Fiala
                                                         </a></h5>
														<div className="listing-post-meta">
															<span className="updated">Credit Suisse
                                                           </span> | <a href="#" rel="tag">IBCM Technology | Analyst
                                                            </a>
															<h6><a href="#" title="Listing">New York, NY
                                                         </a></h6>					
														</div>
														<div className='row'>
														<div className="col-md-5 review-comment-stars">
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star empty"></i>
																</div>
																<div className='col-md-7'>
																	<span className='badge bg-success'>9.7/10</span>
																</div>
																</div>
													</div>
													
												</li>
												
												<li>
													<a href="#">
														<div className="listing-list-img">
															<img src="../assets/img/image-4.jpg" className="img-responsive" alt=""/>
														</div>
													</a>
													<div className="listing-list-info">
														<h5><a href="#" title="Listing">Ryan
														Macedo

                                                         </a></h5>
														<div className="listing-post-meta">
															<span className="updated">Credit Suisse
                                                           </span> | <a href="#" rel="tag">IBCM Technology | Analyst
                                                            </a>
															<h6><a href="#" title="Listing">New York, NY
                                                         </a></h6>					
														</div>
														<div className='row'>
														<div className="col-md-5 review-comment-stars">
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star empty"></i>
																</div>
																<div className='col-md-7'>
																	<span className='badge bg-warning'>9.7/10</span>
																</div>
																</div>
													</div>
												</li>
												
												<li>
													<a href="#">
														<div className="listing-list-img">
															<img src="../assets/img/image-1.jpg" className="img-responsive" alt=""/>
														</div>
													</a>
													<div className="listing-list-info">
														<h5><a href="#" title="Listing">Phylicia
														Wilkov
</a></h5>
														<div className="listing-post-meta">
															<span className="updated">Apollo Global Management
                                                        </span> | <a href="#" rel="tag">Investor
                                                         </a>
														 <h6><a href="#" title="Listing">New York, NY
                                                         </a></h6>					
														</div>
														<div className="review-comment-stars">
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star empty"></i>
																</div>
													</div>
												</li>
												
												<li>
													<a href="#">
														<div className="listing-list-img">
															<img src="../assets/img/image-5.jpg" className="img-responsive" alt=""/>
														</div>
													</a>
													<div className="listing-list-info">
														<h5><a href="#" title="Listing">Cullen
														Lee
                                                       </a></h5>
														<div className="listing-post-meta">
															<span className="updated">Credit Suisse |
                                                            </span> Equity Capital Markets
                                                           | <a href="#" rel="tag">Group Head
                                                           </a>					
														</div>
														<div className="review-comment-stars">
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star empty"></i>
																</div>
													</div>
												</li>

											</ul>
										</div>
									</div>
								</div>
								
								{/* <div className="widget-boxed">
									<div className="widget-boxed-header">
										<h4><i className="ti-calendar padd-r-10"></i>Book A Reservation</h4>
									</div>
									<div className="widget-boxed-body">
										<div className="row">
											<div className="col-lg-6 col-md-12">
												<input type="text" id="reservation-date" data-lang="en" data-large-mode="true" data-min-year="2017" data-max-year="2020" data-disabled-days="08/17/2017,08/18/2017" data-id="datedropper-0" data-theme="my-style" className="form-control" readOnly /> 
											</div>
											<div className="col-lg-6 col-md-12">
                                             <input type="text" id="reservation-time" className="form-control" readOnly />
                                              </div>

										</div>
										<div className="row mrg-top-15">
											<div className="col-lg-6 col-md-12">
												<label>Adult</label>
												<div className="input-group">
													<span className="input-group-btn">
														<button type="button" className="btn counter-btn theme-cl btn-number" disabled data-type="minus" data-field="quant[1]">
															<i className="fa fa-minus"></i>
														</button>
													</span>
													<input type="text" name="quant[1]" className="border-0 text-center form-control input-number" data-min="0" data-max="10" value="0" />
													<span className="input-group-btn">
														 <button type="button" className="btn counter-btn theme-cl btn-number" data-type="plus" data-field="quant[1]">
															 <i className="fa fa-plus"></i>
															</button>
													</span>
												</div>
											</div>
											<div className="col-lg-6 col-md-12">
												<label>Children</label>
												<div className="input-group">
													<span className="input-group-btn">
														<button type="button" className="btn counter-btn theme-cl btn-number" disabled data-type="minus" data-field="quant[2]">
															<i className="fa fa-minus"></i>
														</button>
													</span>
													<input type="text" name="quant[2]" className="border-0 text-center form-control input-number" data-min="0" data-max="10" value="0"/>
													<span className="input-group-btn" >
														 <button type="button" className="btn counter-btn theme-cl btn-number" data-type="plus" data-field="quant[2]">
															 <i className="fa fa-plus"></i>
															</button>
													</span>
												</div>
											</div>
										</div>
										<a href="payment-method.html" className="btn reservation btn-radius theme-btn full-width mrg-top-10">Book Now</a>
									</div>
								</div> */}
								
								
								
								{/* <div className="widget-boxed">
									<div className="widget-boxed-header">
										<h4><i className="ti-time padd-r-10"></i>Opening Hours</h4>
									</div>
									<div className="widget-boxed-body">
										<div className="side-list">
											<ul>
												<li>Monday <span>9 AM - 5 PM</span></li>
												<li>Tuesday <span>9 AM - 5 PM</span></li>
												<li>Wednesday <span>9 AM - 5 PM</span></li>
												<li>Thursday <span>9 AM - 5 PM</span></li>
												<li>Friday <span>9 AM - 5 PM</span></li>
												<li>Saturday <span>9 AM - 3 PM</span></li>
												<li>Sunday <span>Closed</span></li>
											</ul>
										</div>
									</div>
								</div> */}
								
								<div className="widget-boxed">
									<div className="widget-boxed-header">
										<h4><i className="ti-briefcase padd-r-10"></i>Top Categories</h4>
									</div>
									<div className="widget-boxed-body padd-top-10 padd-bot-0">
										<div className="side-list">
											<ul className="category-list">
												<li><a href="#">Business <span className="badge bg-o">4</span></a></li>
												<li><a href="#">Shopping <span className="badge bg-o">7</span></a></li>
												<li><a href="#">Photography <span className="badge bg-o">10</span></a></li>
												<li><a href="#">Intertainment <span className="badge bg-o">55</span></a></li>
												<li><a href="#">Education <span className="badge bg-o">8</span></a></li>
												<li><a href="#">Travel & Tour <span className="badge bg-o">17</span></a></li>
												<li><a href="#">Health & Fitness <span className="badge bg-o">9</span></a></li>
											</ul>
										</div>
									</div>
								</div>
								
								{/* <div className="widget-boxed">
									<div className="widget-boxed-header">
										<h4><i className="ti-gallery padd-r-10"></i>Gallery</h4>
									</div>
									<div className="widget-boxed-body">
										<div className="side-list no-border gallery-box">
											<ul className="gallery-list">
												<li>
													<a data-fancybox="gallery" href="../assets/img/slider-2.jpg">
														<img src="../assets/img/slider-2.jpg" className="img-responsive" alt="" />
													</a>
												</li>
												<li>
													<a data-fancybox="gallery" href="assets/img/slider-2.jpg">
														<img src="../assets/img/slider-2.jpg" className="img-responsive" alt="" />
													</a>
												</li>
												<li>
													<a data-fancybox="gallery" href="assets/img/slider-2.jpg">
														<img src="../assets/img/slider-2.jpg" className="img-responsive" alt="" />
													</a>
												</li>
												<li>
													<a data-fancybox="gallery" href="assets/img/slider-2.jpg">
														<img src="assets/img/slider-2.jpg" className="img-responsive" alt="" />
													</a>
												</li>
												<li>
													<a data-fancybox="gallery" href="assets/img/slider-2.jpg">
														<img src="../assets/img/slider-2.jpg" className="img-responsive" alt="" />
													</a>
												</li>
												<li>
													<a data-fancybox="gallery" href="assets/img/slider-2.jpg">
														<img src="../assets/img/slider-2.jpg" className="img-responsive" alt="" />
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div> */}
								
								
								
						
								
								
								
								{/* <div className="widget-boxed">
									<div className="widget-boxed-header">
										<h4><i className="ti-briefcase padd-r-10"></i>Top Categories</h4>
									</div>
									<div className="widget-boxed-body padd-top-10 padd-bot-0">
										<div className="side-list">
											<ul className="category-list">
												<li><a href="#">Business <span className="badge bg-g">4</span></a></li>
												<li><a href="#">Shopping <span className="badge bg-a">7</span></a></li>
												<li><a href="#">Photography <span className="badge bg-d">10</span></a></li>
												<li><a href="#">Intertainment <span className="badge bg-l">55</span></a></li>
												<li><a href="#">Education <span className="badge bg-o">8</span></a></li>
												<li><a href="#">Travel & Tour <span className="badge bg-y">17</span></a></li>
												<li><a href="#">Health & Fitness <span className="badge bg-s">9</span></a></li>
											</ul>
										</div>
									</div>
								</div> */}
								
								
								
								{/* <div className="widget-boxed">
									<div className="widget-boxed-header">
										<h4><i className="ti-location-pin padd-r-10"></i>Location</h4>
									</div>
									<div className="widget-boxed-body">
										<div className="side-list no-border">
											<ul>
												<li><i className="ti-location-pin padd-r-10"></i>171 Greenwich St QCH7</li>
												<li><i className="ti-mobile padd-r-10"></i>91 234 567 8765</li>
												<li><i className="ti-email padd-r-10"></i>suppoer@listinghub.com</li>
											</ul>
											<h5>Share Listing</h5>
											<ul className="side-list-inline no-border social-side">
												<li><a href="#"><i className="fa fa-facebook theme-cl"></i></a></li>
												<li><a href="#"><i className="fa fa-google-plus theme-cl"></i></a></li>
												<li><a href="#"><i className="fa fa-twitter theme-cl"></i></a></li>
												<li><a href="#"><i className="fa fa-linkedin theme-cl"></i></a></li>
												<li><a href="#"><i className="fa fa-pinterest theme-cl"></i></a></li>
											</ul>
										</div>
									</div>
								</div> */}
								
							</div>
						</div>
					   
					</div>
				</div>
			</section>
        </>
    )
}