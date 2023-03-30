import React from 'react'
export default  function Login(): JSX.Element
{
    return(
        <>
			<section className="log-wrapper">
				<div className="container">
					<div className="col-md-6 col-sm-10 col-md-offset-3 col-sm-offset-1">
						<div className="log-box">
							<h2>Welcome <span className="theme-cl">Back!</span></h2>
							<form>
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope theme-cl"></i></span>
									<input type="text" className="form-control" placeholder="User Name" />
								</div>
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock theme-cl"></i></span>
									<input type="password" className="form-control" placeholder="Password" />
								</div>
								<div className="text-center">
									<button type="button" className="btn theme-btn width-200 btn-radius">Enter</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
        </>
	)
							
}