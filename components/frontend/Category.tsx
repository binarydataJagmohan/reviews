import React from 'react'

export default function Category()
{
    return(
        <>
         <section className="title-transparent page-title" style={{background:"url(assets/img/title-bg.jpg)"}}>
				<div className="container">
					<div className="title-content">
						<h1>Category 1</h1>
						<div className="breadcrumbs">
							<a href="#">Home</a>
							<span className="gt3_breadcrumb_divider"></span>
							<span className="current">Category 1</span>
						</div>
					</div>
				</div>
			</section>
			<div className="clearfix"></div>
			
			
			
			<section>
				<div className="container">
				
					<div className="col-md-4 col-sm-6">
						<div className="category-box-full style-1">
							<a href="search-listing.html" className="category-boxs" data-background-image="assets/img/category/art.jpg" tabIndex={0}>
								<div className="category-box-content">
									<h3>Art & Design</h3>
									<span>70 listings</span>
								</div>
								<span className="category-box-btn">Browse</span>
								<div className="category-box-bg" style={{ backgroundImage: "url(assets/img/category/art.jpg)" }}></div>

							</a>
						</div>
					</div>
					
					<div className="col-md-4 col-sm-6">
						<div className="category-box-full style-1">
							<a href="search-listing.html" className="category-boxs" data-background-image="assets/img/category/education.jpg" tabIndex={0}>
								<div className="category-box-content">
									<h3>Education</h3>
									<span>40 listings</span>
								</div>
								<span className="category-box-btn">Browse</span>
								<div className="category-box-bg" style={{ backgroundImage: "url(assets/img/category/education.jpg)"}} ></div>
							</a>
						</div>
					</div>
					
					<div className="col-md-4 col-sm-6">
						<div className="category-box-full style-1">
							<a href="search-listing.html" className="category-boxs" data-background-image="assets/img/category/documentry.jpg" tabIndex={0}>
								<div className="category-box-content">
									<h3>Documentary</h3>
									<span>110 listings</span>
								</div>
								<span className="category-box-btn">Browse</span>
								<div className="category-box-bg" style= {{backgroundImage: "url(assets/img/category/documentry-2.jpg)"}}></div>
							</a>
						</div>
					</div>
					
					<div className="col-md-4 col-sm-6">
						<div className="category-box-full style-1">
                        <a href="search-listing.html" className="category-boxs" data-background-image="assets/img/category/food.jpg" tabIndex={0}>

								<div className="category-box-content">
									<h3>Food & Restaurants</h3>
									<span>58 listings</span>
								</div>
								<span className="category-box-btn">Browse</span>
								<div className="category-box-bg" style={{backgroundImage: "url(assets/img/category/food.jpg)"}}></div>
							</a>
						</div>
					</div>
					
					<div className="col-md-4 col-sm-6">
						<div className="category-box-full style-1">
							<a href="search-listing.html" className="category-boxs" data-background-image="assets/img/category/instructional.jpg" tabIndex={0}>
								<div className="category-box-content">
									<h3>Instructional</h3>
									<span>76 listings</span>
								</div>
								<span className="category-box-btn">Browse</span>
								<div className="category-box-bg" style={{backgroundImage: "url(assets/img/category/instructional.jpg)"}}></div>
							</a>
						</div>
					</div>
					
					<div className="col-md-4 col-sm-6">
						<div className="category-box-full style-1">
							<a href="search-listing.html" className="category-boxs" data-background-image="assets/img/category/sport.jpg" tabIndex={0}>
								<div className="category-box-content">
									<h3>Sport</h3>
									<span>92 listings</span>
								</div>
								<span className="category-box-btn">Browse</span>
								<div className="category-box-bg" style={{backgroundImage: "url(assets/img/category/sport.jpg)"}}></div>
							</a>
						</div>
					</div>
					
					<div className="col-md-4 col-sm-6">
						<div className="category-box-full style-1">
							<a href="search-listing.html" className="category-boxs" data-background-image="assets/img/category/business.jpg" tabIndex={0}>
								<div className="category-box-content">
									<h3>Business</h3>
									<span>87 listings</span>
								</div>
								<span className="category-box-btn">Browse</span>
								<div className="category-box-bg" style={{backgroundImage: "url(assets/img/category/business.jpg)"}}></div>
							</a>
						</div>
					</div>
					
					<div className="col-md-4 col-sm-6">
						<div className="category-box-full style-1">
							<a href="search-listing.html" className="category-boxs" data-background-image="assets/img/category/shopping.jpg" tabIndex={0}>
								<div className="category-box-content">
									<h3>Shopping</h3>
									<span>240 listings</span>
								</div>
								<span className="category-box-btn">Browse</span>
								<div className="category-box-bg" style={{backgroundImage: "url(assets/img/category/shopping.jpg)"}}></div>
							</a>
						</div>
					</div>
					
					<div className="col-md-4 col-sm-6">
						<div className="category-box-full style-1">
							<a href="search-listing.html" className="category-boxs" data-background-image="assets/img/category/travel.jpg" tabIndex={0}>
								<div className="category-box-content">
									<h3>travel</h3>
									<span>68 listings</span>
								</div>
								<span className="category-box-btn">Browse</span>
								<div className="category-box-bg" style={{backgroundImage: "url(assets/img/category/travel.jpg)"}}></div>
							</a>
						</div>
					</div>

				</div>
			</section>
        </>
    )
}