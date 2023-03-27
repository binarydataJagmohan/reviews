import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav on menu-center no-full">
				<div className="container-fluid">         
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
						<i className="ti-align-left" />
					</button>
					<div className="navbar-header">
						<a className="navbar-brand" href="index.html">
							<img src="assets/img/logo-white.png" className="logo logo-display" alt="" />
							<img src="assets/img/logo.png" className="logo logo-scrolled" alt="" />
						</a>
					</div>
					<div className="collapse navbar-collapse" id="navbar-menu">
						<ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
							<li className="dropdown active">
								<a href="login.html">Home</a>
							</li>
							<li className="dropdown">
								<a href="login.html" className="dropdown-toggle" data-toggle="dropdown">Explore</a>
								<ul className="dropdown-menu animated fadeOutUp">
									<li><a href="top-author.html">Top Author<span className="new-page-badge">New</span></a></li>
									<li><a href="author-detail.html">Author Detail<span className="new-page-badge">New</span></a></li>
									<li><a href="search-listing.html">Search Listing</a></li>
									<li><a href="add-listing.html">Add Listing</a></li>
									<li><a href="listing-detail.html">Listing Detail</a></li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Listing</a>
										<ul className="dropdown-menu animated fadeOutUp">
											<li><a href="full-width-grid.html">Full Width Listing</a></li>
											<li><a href="full-width-vertical.html">Full Vertical Listing</a></li>
											<li><a href="grid-sidebar.html">Listing With Sidebar</a></li>
											<li><a href="vertical-sidebar.html">Vertical With Sidebar</a></li>
											<li><a href="top-place-list.html">Top Places</a></li>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Category</a>
										<ul className="dropdown-menu animated fadeOutUp">
											<li><a href="category-1.html">Category Style 1</a></li>
											<li><a href="category-2.html">Category Style 2</a></li>
											<li><a href="category-3.html">Category Style 3</a></li>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">User Panel</a>
										<ul className="dropdown-menu animated fadeOutUp">
											<li><a href="edit-profile.html">Profile Settings</a></li>
											<li><a href="profile-detail.html">Profile Detail</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li className="dropdown">
								<a href="login.html" className="dropdown-toggle" data-toggle="dropdown">Pages</a>
								<ul className="dropdown-menu animated fadeOutUp">
									<li><a href="thank-you.html">Thank You</a></li>
									<li><a href="blog.html">Blog</a></li>
									<li><a href="blog-detail.html">Blog Detail</a></li>
									<li><a href="contact.html">Contact</a></li>
									<li><a href="404.html">404</a></li>
									<li><a href="404.html">Faq</a></li>
								</ul>
							</li>
							<li><a href="#" data-toggle="modal" data-target="#signin">Sign In</a></li>
						</ul>
						<ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
							<li className="no-pd"><a href="add-listing.html" className="addlist"><i className="ti-user" aria-hidden="true" />Add Listing</a></li>
						</ul>
					</div>
				</div>   
      		</nav>
        </>
  )
}
