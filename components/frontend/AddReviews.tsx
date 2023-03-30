import React from 'react'

export default function AddReviews(): JSX.Element
{
    return(

        <>
        <div className="container">
          <div className="add-listing-box full-detail mrg-bot-25 padd-bot-30 padd-top-25" id='add-reviews'>
            <div className="listing-box-header">
              <i className="ti-write theme-cl" />
              <h3>Full Details</h3>
              <p>Write full detail information about listing Owner</p>
            </div>
            <form>
              <div className="row mrg-r-10 mrg-l-10">
                <div className="col-sm-6">
                  <label>Owner Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-6">
                  <label>Email</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-6">
                  <label>Phone</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-6">
                  <label>Website</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-6">
                  <label>Owner Designation</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-6">
                  <label>Company</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-6">
                  <label><i className="fa fa-facebook mrg-r-5" aria-hidden="true" />Facebook Link</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-6">
                  <label><i className="fa fa-twitter mrg-r-5" aria-hidden="true" />Twitter User</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-6">
                  <label><i className="fa fa-google-plus mrg-r-5" aria-hidden="true" />Google Plus</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-6">
                  <label><i className="fa fa-linkedin-square mrg-r-5" aria-hidden="true" />Linked In</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-12">
                  <label>Description</label>
                  <textarea className="h-100 form-control" defaultValue={""} />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="clearfix" />
       
        <section>
          <div className="container">
            <div className="col-md-10 col-sm-12 col-md-offset-1 mob-padd-0">
            
              <div className="add-listing-box general-info mrg-bot-25 padd-bot-30 padd-top-25">
                <div className="listing-box-header">
                  <i className="ti-files theme-cl" />
                  <h3>General Information</h3>
                  <p>Write something general information about your listing</p>
                </div>
                <form>
                  <div className="row mrg-r-10 mrg-l-10">
                    <div className="col-sm-6">
                      <label>Listing Title</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                      <label>Keyword</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                      <label>Category</label>
                      <select data-placeholder="Choose Category" className="form-control chosen-select" tabIndex={2}>
                        <option>Select</option>
                        <option>Eat &amp; Drink</option>
                        <option>Food &amp; Restaurants</option>
                        <option>Fitness</option>
                        <option>Hospital</option>
                        <option>Education</option>
                        <option>Sport</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label>Website</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </form>
              </div>
              
              <div className="add-listing-box add-location mrg-bot-25 padd-bot-30 padd-top-25">
                <div className="listing-box-header">
                  <i className="ti-location-pin theme-cl" />
                  <h3>Add Location</h3>
                  <p>Write Address Information about your listing Location</p>
                </div>
                <form>
                  <div className="row mrg-r-10 mrg-l-10">
                    <div className="col-sm-6">
                      <label>Address</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                      <label>Temporary Address</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                      <label>City</label>
                      <select data-placeholder="Choose City" className="form-control chosen-select" tabIndex={2}>
                        <option>New York</option>
                        <option>Los Angeles</option>
                        <option>Chicago</option>
                        <option>Phoenix</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label>State</label>
                      <select data-placeholder="Choose Sate" className="form-control chosen-select" tabIndex={2}>
                        <option>New York</option>
                        <option>Los Angeles</option>
                        <option>Chicago</option>
                        <option>Phoenix</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label>Country</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                      <label>Zip-Code</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </form>
              </div>
              {/* End Add Location */}
              {/* Add Gallery Information */}
              <div className="add-listing-box full-detail mrg-bot-25 padd-bot-30 padd-top-25">
                <div className="listing-box-header">
                  <i className="ti-gallery theme-cl" />
                  <h3>Add Gallery</h3>
                  <p>Write full detail information about listing Owner</p>
                </div>
                <form action="/upload-target" className="dropzone dz-clickable primary-dropzone">
                  <div className="dz-default dz-message">
                    <i className="ti-gallery" />
                    <span>Drag &amp; Drop To Change Logo</span>
                  </div>
                </form>
              </div>
             
              <div className="text-center">
                <a href="#" className="btn theme-btn" title="Submit Listing">Submit Listing</a>
              </div>
            </div>
          </div>
        </section>

        </>
    )
 }