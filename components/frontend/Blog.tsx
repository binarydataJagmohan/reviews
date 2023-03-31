import React from 'react'
import Link from 'next/link'
export default function Blog()
{
    return(
        <>

			<section className="title-transparent page-title" style={{ background: "url(assets/img/title-bg.jpg)"}}>
				<div className="container">
					<div className="title-content">
						<h1>All Blogs</h1>
						<div className="breadcrumbs">
							<Link href="#">Home</Link>
							<span className="gt3_breadcrumb_divider"></span>
							<span className="current">Blog</span>
						</div>
					</div>
				</div>
			</section>
			<div className="clearfix"></div>
			
			
			
			<section>
				<div className="container">
					<Link href="/BlogDetails"><div className="row">
						<div className="col-md-4 col-sm-6">
							<div className="blog-box blog-grid-box">
								<div className="blog-grid-box-img">
									<img src="assets/img/blog/blog-1.jpg" className="img-responsive" alt="" />
								</div>
								
								<div className="blog-grid-box-content">
									{/* <div className="blog-avatar text-center">
										<img src="assets/img/user-1.png" className="img-responsive" alt="" />
										<p><strong>By</strong> <span className="theme-cl">Adam Khiwak</span></p>
									</div> */}
									<h4>Why People Use Listing Hub</h4>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
									<Link href="/BlogDetails" className="theme-cl" title="Read More..">Continue...</Link>
								</div>
								
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="blog-box blog-grid-box">
							
								<div className="blog-grid-box-img">
									<img src="assets/img/blog/blog-2.jpg" className="img-responsive" alt="" />
								</div>
								
								<div className="blog-grid-box-content">
									{/* <div className="blog-avatar text-center">
										<img src="assets/img/user-2.jpg" className="img-responsive" alt="" />
										<p><strong>By</strong> <span className="theme-cl">Adam Khiwak</span></p>
									</div> */}
									<h4>Why People Use Listing Hub</h4>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
									<Link href="blog-detail.html" className="theme-cl" title="Read More..">Continue...</Link>
								</div>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="blog-box blog-grid-box">
								<div className="blog-grid-box-img">
									<img src="assets/img/blog/blog-3.jpg" className="img-responsive" alt="" />
								</div>
								<div className="blog-grid-box-content">
									{/* <div className="blog-avatar text-center">
										<img src="assets/img/user-3.jpg" className="img-responsive" alt="" />
										<p><strong>By</strong> <span className="theme-cl">Adam Khiwak</span></p>
									</div> */}
									<h4>Why People Use Listing Hub</h4>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
									<Link href="blog-detail.html" className="theme-cl" title="Read More..">Continue...</Link>
								</div>
							</div>
						</div>
					</div></Link>
					
					<Link href="/BlogDetails"><div className="row">
						<div className="col-md-4 col-sm-6">
							<div className="blog-box blog-grid-box">
								<div className="blog-grid-box-img">
									<img src="assets/img/blog/blog-4.jpg" className="img-responsive" alt="" />
								</div>
								<div className="blog-grid-box-content">
									{/* <div className="blog-avatar text-center">
										<img src="assets/img/user-1.png" className="img-responsive" alt="" />
										<p><strong>By</strong> <span className="theme-cl">Adam Khiwak</span></p>
									</div> */}
									<h4>Why People Use Listing Hub</h4>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
									<Link href="blog-detail.html" className="theme-cl" title="Read More..">Continue...</Link>
								</div>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="blog-box blog-grid-box">
								<div className="blog-grid-box-img">
									<img src="assets/img/blog/blog-5.jpg" className="img-responsive" alt="" />
								</div>
								<div className="blog-grid-box-content">
									{/* <div className="blog-avatar text-center">
										<img src="assets/img/user-2.jpg" className="img-responsive" alt="" />
										<p><strong>By</strong> <span className="theme-cl">Adam Khiwak</span></p>
									</div> */}
									<h4>Why People Use Listing Hub</h4>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
									<Link href="blog-detail.html" className="theme-cl" title="Read More..">Continue...</Link>
								</div>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="blog-box blog-grid-box">
								<div className="blog-grid-box-img">
									<img src="assets/img/blog/blog-6.jpg" className="img-responsive" alt="" />
								</div>
								<div className="blog-grid-box-content">
									{/* <div className="blog-avatar text-center">
										<img src="assets/img/user-3.jpg" className="img-responsive" alt="" />
										<p><strong>By</strong> <span className="theme-cl">Adam Khiwak</span></p>
									</div> */}
									<h4>Why People Use Listing Hub</h4>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
									<Link href="blog-detail.html" className="theme-cl" title="Read More..">Continue...</Link>
								</div>
							</div>
						</div>
					</div></Link>
					
					<Link href="/BlogDetails"><div className="row">
						<div className="col-md-4 col-sm-6">
							<div className="blog-box blog-grid-box">
								<div className="blog-grid-box-img">
									<img src="assets/img/blog/blog-7.jpg" className="img-responsive" alt="" />
								</div>
								<div className="blog-grid-box-content">
									{/* <div className="blog-avatar text-center">
										<img src="assets/img/user-1.png" className="img-responsive" alt="" />
										<p><strong>By</strong> <span className="theme-cl">Adam Khiwak</span></p>
									</div> */}
									<h4>Why People Use Listing Hub</h4>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
									<Link href="blog-detail.html" className="theme-cl" title="Read More..">Continue...</Link>
								</div>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="blog-box blog-grid-box">
								<div className="blog-grid-box-img">
									<img src="assets/img/blog/blog-8.jpg" className="img-responsive" alt="" />
								</div>
								<div className="blog-grid-box-content">
									{/* <div className="blog-avatar text-center">
										<img src="assets/img/user-2.jpg" className="img-responsive" alt="" />
										<p><strong>By</strong> <span className="theme-cl">Adam Khiwak</span></p>
									</div> */}
									<h4>Why People Use Listing Hub</h4>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
									<Link href="blog-detail.html" className="theme-cl" title="Read More..">Continue...</Link>
								</div>
							</div>
						</div>
						
						<div className="col-md-4 col-sm-6">
							<div className="blog-box blog-grid-box">
								<div className="blog-grid-box-img">
									<img src="assets/img/blog/blog-4.jpg" className="img-responsive" alt="" />
								</div>
								<div className="blog-grid-box-content">
									{/* <div className="blog-avatar text-center">
										<img src="assets/img/user-3.jpg" className="img-responsive" alt="" />
										<p><strong>By</strong> <span className="theme-cl">Adam Khiwak</span></p>
									</div> */}
									<h4>Why People Use Listing Hub</h4>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
									<Link href="blog-detail.html" className="theme-cl" title="Read More..">Continue...</Link>
								</div>
							</div>
						</div>
					</div></Link>
					
					<div className="row">
						<div className="col-md-12">
							<div className="bs-example">
								<ul className="pagination">
									<li><Link href="#">«</Link></li>
									<li><Link href="#">1</Link></li>
									<li><Link href="#">2</Link></li>
									<li><Link href="#">3</Link></li>
									<li><Link href="#">4</Link></li>
									<li><Link href="#">5</Link></li>
									<li><Link href="#">»</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			
        
        </>
    )
}