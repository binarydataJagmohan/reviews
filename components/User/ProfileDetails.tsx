import React from "react"

export default function ProfileDetails()
{
    return(
        <>
             <section className="title-transparent page-title" style={{background: 'url(../assets/img/title-bg.jpg)'}}>
          <div className="container">
            <div className="title-content">
            </div>
          </div>
        </section>
        <div className="clearfix" />
        {/* Page Title */}
        <section className="padd-0">
          <div className="container">
            {/* General Information */}
            <div className="add-listing-box translateY-60 edit-info mrg-bot-25 padd-bot-30 padd-top-25">
              <div className="listing-box-header">
                <div className="avater-box">
                  <img src="../assets/img/avatar.jpg" className="img-responsive img-circle edit-avater" alt="" />
                </div>
                <h3>Daniel M. Dev</h3>
                <p>Account Manager</p>
              </div>
              <div className="row mrg-r-10 mrg-l-10 preview-info">
                <div className="col-sm-6">
                  <label><i className="ti-mobile preview-icon call mrg-r-10" />91 258 574 5287</label>
                </div>
                <div className="col-sm-6">
                  <label><i className="ti-email preview-icon email mrg-r-10" />support@listinghub@.com</label>
                </div>
                <div className="col-sm-6">
                  <label><i className="ti-gift preview-icon birth mrg-r-10" />July 17 1990</label>
                </div>
                <div className="col-sm-6">
                  <label><i className="ti-world preview-icon web mrg-r-10" />Www.listinghub.com</label>
                </div>
              </div>
            </div>
            {/* End General Information */}
          </div>
        </section>
        <section className="padd-top-0">
          <div className="container">
            <div className="col-md-6 col-sm-12 mob-padd-0">
              {/* Basic Information */}
              <div className="add-listing-box edit-info mrg-bot-25 padd-bot-30 padd-top-5">
                <div className="preview-info-header">
                  <h4>Basic Info</h4>
                </div>
                <div className="preview-info-body">
                  <ul className="info-list">
                    <li>
                      <label>Name:</label>
                      <span>Daniel Deve</span>
                    </li>
                    <li>
                      <label>Company:</label>
                      <span>Info Soft Ltd</span>
                    </li>
                    <li>
                      <label>Designation:</label>
                      <span>Account Manager</span>
                    </li>
                    <li>
                      <label>Birth:</label>
                      <span>July 15 1990</span>
                    </li>
                    <li>
                      <label>Age:</label>
                      <span>22 Year</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Basic Information */}
            </div>
            <div className="col-md-6 col-sm-12 mob-padd-0">
              {/* Address Information */}
              <div className="add-listing-box edit-info mrg-bot-25 padd-bot-30 padd-top-5">
                <div className="preview-info-header">
                  <h4>Basic Info</h4>
                </div>
                <div className="preview-info-body">
                  <ul className="info-list">
                    <li>
                      <label>Phone:</label>
                      <span>91 258 758 6584</span>
                    </li>
                    <li>
                      <label>Email:</label>
                      <span>support@listinghub.com</span>
                    </li>
                    <li>
                      <label>State:</label>
                      <span>Punjab</span>
                    </li>
                    <li>
                      <label>Country:</label>
                      <span>India</span>
                    </li>
                    <li>
                      <label>Address:</label>
                      <span>1126 Sunrise Road, NV 89107</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Address Information */}
            </div>
            <div className="col-md-6 col-sm-12 mob-padd-0">
              {/* About Information */}
              <div className="add-listing-box edit-info mrg-bot-25 padd-bot-30 padd-top-5">
                <div className="preview-info-header">
                  <h4>About</h4>
                </div>
                <div className="preview-info-body">
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi</p>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti blanditiis praesentium voluptatum deleniti quos dolores et quas molestias excepturi sint occaecati ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                </div>
              </div>
              {/* End About Information */}
            </div>
            <div className="col-md-6 col-sm-12 mob-padd-0">
              {/* Follow Information */}
              <div className="add-listing-box edit-info mrg-bot-25 padd-bot-30 padd-top-5">
                <div className="preview-info-header">
                  <h4>Follow Us</h4>
                </div>
                <div className="preview-info-body">
                  <ul className="social-info info-list">
                    <li>
                      <label><i className="fa fa-facebook" /></label>
                      <span>https://www.facebook.com</span>
                    </li>
                    <li>
                      <label><i className="fa fa-twitter" /></label>
                      <span>https://www.twitter.com/</span>
                    </li>
                    <li>
                      <label><i className="fa fa-google-plus" /></label>
                      <span>https://www.plus.google.com</span>
                    </li>
                    <li>
                      <label><i className="fa fa-linkedin" /></label>
                      <span>https://www.linkedin.com</span>
                    </li>
                    <li>
                      <label><i className="fa fa-youtube" /></label>
                      <span>https://www.youtube.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Follow Information */}
            </div>
          </div>
        </section>

           
        </>
    )
}