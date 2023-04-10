export default function NewUserReview()
{
    return(
        <>
          <section className="form-part ">
        <div className="container"> 
          <form className="form-center w-60">
            <h2>Thanks for helping the community! Please provide your feedback below. </h2>
            <label className="mt-4 mb-3"><b>Who are you writing a review on?</b></label> 
            <input type="text" placeholder="First Name" /> 
            <input type="text" placeholder="Last Name" />
            <label className="mb-2"><b>What is their position?</b></label>
            <input type="text" placeholder="Company Name" /> 
            <input type="text" placeholder="Group Name" />
            <input type="text" placeholder="Position Title" />
            <label className="mb-2"><b>Tell us how you feel about this person…</b></label>
            <textarea placeholder="Write your review here" className="write-review" defaultValue={""} /> 
            <div className="row">
              <div className="col-sm-3 col-6">
                <div className="row">
                  <div className="col-lg-12 text-left ">
                    <h4 className="overall-rating">Overall rating</h4>
                    <p>Very difficult to work with</p>
                  </div> 
                </div>
              </div>
              <div className="col-1" />
              <div className="col-sm-3  col-5 mt-4 pt-2">
                Fantastic coworker
              </div>
            </div>
            <div className="row">
              <div className="col-6 text-left"> 
                <p className="star-list blue-star">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-regular fa-star" />
                  <i className="fa-regular fa-star" />
                </p> 
              </div> 
              <div className="col-2" />
              <div className="col-2">
                <p className="uverall">Overall rating:</p>
              </div>
              <div className="col-2 rating-view blue-black">
                <h4><span>3</span>/5</h4>
              </div>
            </div>
          </form>
        </div>
      </section>
        </>
    )
}