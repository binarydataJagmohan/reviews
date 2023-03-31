import React from 'react'
export default function Contact()
{
    return(
        <>
            <section className="title-transparent page-title" style={{background:"url(assets/img/title-bg.jpg)"}}>
				<div className="container">
					<div className="title-content">
						<h1>Gent In Touch</h1>
						<div className="breadcrumbs">
							<a href="#">Home</a>
							<span className="gt3_breadcrumb_divider"></span>
							<span className="current">Contact US</span>
						</div>
					</div>
				</div>
			</section>
			<div className="clearfix"></div>

            <section className="padd-0">
				<div className="container">
					<div className="col-md-10 col-md-offset-1 col-sm-12 translateY-60">
						{/* <div className="col-md-6 col-sm-6">
							<div className="detail-wrapper text-center padd-top-40 mrg-bot-10 padd-bot-40 light-bg">
								<i className="theme-cl font-30 ti-location-pin"></i>
								<h4>India Office</h4>
								Sco 52, Sector 48, Near Gurudwara<br />
								Chandigarh (258458)
							</div>
						</div> */}
						{/* <div className="col-md-6 col-sm-6">
							<div className="detail-wrapper text-center padd-top-40 mrg-bot-10 padd-bot-40 light-bg">
								<i className="theme-cl font-30 ti-location-pin"></i>
								<h4>Uk Office</h4>
								Sco 52, Sector 48, Near Gurudwara<br />
								Chandigarh (258458)
							</div>
						</div> */}
					</div>
				</div>
			</section>
            
			
            <section className="padd-top-25" >
				<div className="container d-flex">
					<div className="col-md-6 col-sm-6 " >
						<form>
							<div className="form-group">
								<label>Name:</label>
								<input type="text" className="form-control" placeholder="Name" />
							</div>
							<div className="form-group">
								<label>Email:</label>
								<input type="email" className="form-control" placeholder="Email" />
							</div>
							<div className="form-group">
								<label>Message:</label>
								<textarea className="form-control height-120" placeholder="Message"></textarea>
							</div>
							<div className="form-group">
								<button className="btn theme-btn" name="submit">Send Request</button>
							</div>
						</form>
					</div>
					<div className="col-md-6 col-sm-6">
						<div id="singleMap" data-latitude="42.7427837" data-longitude="-83.11445617675781"></div>
					</div>
				</div>
			</section>
			
        </>
    )
}