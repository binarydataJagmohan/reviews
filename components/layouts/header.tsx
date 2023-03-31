import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav on menu-center no-full">
				<div className="container-fluid">         
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
						<i className="ti-align-left" />
					</button>
					<div className="navbar-header">
						<Link className="navbar-brand" href="/index">
							<img src="../../assets/img/logo-white.png" className="logo logo-display" alt="" />
							<img src="../../assets/img/logo.png" className="logo logo-scrolled" alt="" />
						</Link>
					</div>
					<div className="collapse navbar-collapse" id="navbar-menu">
						<ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
							<li className="dropdown active">
							<Link href="/index">Home</Link>
							</li>
							<li className="dropdown">
								<Link href="/User/TopReviewrs" className="dropdowns-toggle" data-toggle="dropdown">Explore</Link>
								{/* <ul className="dropdown-menu animated fadeOutUp"> */}
									{/* <li><Link href="top-author.html">Top Author<span className="new-page-badge">New</span></Link></li>
									<li><Link href="author-detail.html">Author Detail<span className="new-page-badge">New</span></Link></li>
									<li><Link href="search-listing.html">Search Listing</Link></li>
									<li><Link href="add-listing.html">Add Listing</Link></li>
									<li><Link href="listing-detail.html">Listing Detail</Link></li> */}
									{/* <li className="dropdown">
										<Link href="#" className="dropdown-toggle" data-toggle="dropdown">Listing</Link>
										<ul className="dropdown-menu animated fadeOutUp">
											<li><Link href="/User/ListingDetails">Full Width Listing</Link></li>
											<li><Link href="full-width-vertical.html">Full Verticcategoryal Listing</Link></li>
											<li><Link href="grid-sidebar.html">Listing With Sidebar</Link></li>
											<li><Link href="vertical-sidebar.html">Vertical With Sidebar</Link></li>
											<li><Link href="top-place-list.html">Top Places</Link></li>
										</ul>
									</li> */}
									{/* <li className="dropdown">
										<Link href="/Category" className="dropdown-toggle" data-toggle="dropdown">Category</Link>
										<ul className="dropdown-menu animated fadeOutUp"> 
											<li><Link href="category-1.html">Category Style 1</Link></li> 
											 <li><Link href="category-2.html">Category Style 2</Link></li>
											<li><Link href="category-3.html">Category Style 3</Link></li>
										</ul>
									</li> */}
									{/* <li className="dropdown">
										<Link href="#" className="dropdown-toggle" data-toggle="dropdown">User Panel</Link>
										<ul className="dropdown-menu animated fadeOutUp">
											<li><Link href="edit-profile.html">Profile Settings</Link></li>
											<li><Link href="profile-detail.html">Profile Detail</Link></li>
										</ul>
									</li> */}
								{/* </ul> */}
							</li>
							<li className="dropdown">
								<Link href="/Blog" className="dropdowns-toggle" data-toggle="dropdown">Blogs</Link>
								{/* <ul className="dropdown-menu animated fadeOutUp">
									<li><Link href="thank-you.html">Thank You</Link></li>
									<li><Link href="blog.html">Blog</Link></li>
									<li><Link href="blog-detail.html">Blog Detail</Link></li>
									<li><Link href="contact.html">Contact</Link></li>
									<li><Link href="404.html">404</Link></li>
									<li><Link href="404.html">Faq</Link></li>
								</ul> */}
							</li>
							<li>
                            
                              <Link href="/Contact">Contact Us</Link>
                             
                            </li>

							<li><Link href="javascript:void(0)" data-toggle="modal" data-target="#signin">Sign In</Link></li>
						</ul>
						<ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
							<li className="no-pd"><Link href="/AddReviews" className="addlist"><i className="ti-user" aria-hidden="true" />Add Listing</Link></li>
						</ul>
					</div>
				</div>   
      		</nav>


			  <div className="modal fade" id="signin" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
					
						<div className="modal-header">
							<h4 className="modal-title" id="modalLabel2">LogIn Your Account</h4>
							<button type="button" className="m-close" data-dismiss="modal" aria-label="Close">
								<i className="ti-close"></i>
							</button>
						</div>
						
						<div className="modal-body">
							
							<div className="wel-back">
								<h2>Welcome <span className="theme-cl">Back!</span></h2>
							</div>
							
							<form>
							
								<div className="form-group">
									<label>User Name</label>
									<input type="email" className="form-control" placeholder="Username" />
								</div>
								
								<div className="form-group">
									<label>Password</label>
									<input type="password" className="form-control" placeholder="*******" />
								</div>
								
								<span className="custom-checkbox d-block">
									<input type="checkbox" id="select1" />
									<label htmlFor="select1"></label>
									Keep me Signed In
								</span>
								
								<div className="center">
									<button type="submit" id="login-btn" className="btn btn-midium theme-btn btn-radius width-200"> Login </button>
								</div>
								
							</form>
							
							<div className="connect-with">
								<ul>
									<li className="fb-ic"><Link href="#"><i className="ti-facebook"></i></Link></li>
									<li className="gp-ic"><Link href="#"><i className="ti-google"></i></Link></li>
									<li className="tw-ic"><Link href="#"><i className="ti-twitter"></i></Link></li>
								</ul>
							</div>
							
							<div className="center mrg-top-5">
							<div className="bottom-login text-center">Don&apos;t have an account</div>

								<Link href="javascript:void(0)" className="theme-cl" data-toggle="modal" data-dismiss="modal" data-target="#register">Create An Account</Link>
							</div>
							
							
						</div>
						
					</div>
				</div>
			</div> 

			<div className="modal fade" id="register" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel3" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
					
						<div className="modal-header">
							<h4 className="modal-title" id="modalLabel3">Create an Account</h4>
							<button type="button" className="m-close" data-dismiss="modal" aria-label="Close">
								<i className="ti-close"></i>
							</button>
						</div>
						
						<div className="modal-body">
							
							<div className="wel-back">
								<h2>Hi Mate! <span className="theme-cl">How are you?</span></h2>
							</div>
							
							<form>
							
								<div className="form-group">
									<label>User Name</label>
									<input type="email" className="form-control" placeholder="Username" />
								</div>
								
								<div className="form-group">
									<label>Password</label>
									<input type="password" className="form-control" placeholder="*******" />
								</div>
								
								<div className="form-group">
									<label>Confirm Password</label>
									<input type="password" className="form-control" placeholder="*******" />
								</div>
								
								<div className="form-group">
									<select className="form-control">
										<option data-placeholder="Register as a" className="chosen-select">Register As a</option>
										<option value="1">As a Guest</option>
										<option value="2">As a Owner</option>
									</select>
								</div>
								
								<span className="custom-checkbox d-block">
									<input type="checkbox" id="select1" />
									<label htmlFor="select1"></label>
									Keep me Signed In
								</span>
								
								<div className="center">
									<button type="submit" id="login-btn" className="btn btn-midium theme-btn btn-radius width-200"> Login </button>
								</div>
								
							</form>
							
							<div className="connect-with">
								<ul>
									<li className="fb-ic"><Link href="#"><i className="ti-facebook"></i></Link></li>
									<li className="gp-ic"><Link href="#"><i className="ti-google"></i></Link></li>
									<li className="tw-ic"><Link href="#"><i className="ti-twitter"></i></Link></li>
								</ul>
							</div>
							
							<div className="center mrg-top-5">
								<div className="bottom-login text-center">Already have an account?</div>
								<Link href="javascript:void(0)" className="theme-cl" data-toggle="modal" data-dismiss="modal" data-target="#signin">Login</Link>
							</div>
							
							
						</div>
						
					</div>
				</div>
			</div> 
        </>
  )
}
