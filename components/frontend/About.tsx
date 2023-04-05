import React from 'react'
import Link from 'next/link'

export default function About()
{
    return(
        <>
        <section className="about-section bg-eee section-sp text-center">
          <div className="container"> 
            <h1>Frequently Asked Questions</h1>
            <h2>What is Bungee?</h2>
            <p>Bungee is an anonymous review platform meant to inform other professionals about their peers before they make a career move. We have found that some of the largest contributors to satisfaction at work revolve around work / life balance and group culture- both largely impacted by bosses, colleagues, and other members of the group.</p>
            <hr />
            <h2>Are my reviews anonymous?</h2>
            <p>Yes! Your reviews are completely anonymous to allow for honest and open communication. Others will only be able to view the date and time of the review, as well as the Bungee score of the reviewer at the time of the review, but not anything that would reveal which user wrote a review.</p>
            <hr />
            <h2>What is a Bungee score?</h2>
            <p>A user’s bungee score is an indication of how often / to the extent that other users tend to agree with that user’s reviews. The score ranges from -100 to 100 and is based on the thumbs up and thumbs down the user’s reviews received. A person’s Bungee score at the time of writing a review is indicated on the review for others to see, but this number does not change as the user’s Bungee score changes after writing the review. </p>
            <hr />
            <h2>How can I see my colleagues' reviews?</h2>
            <p>Once you have signed up and logged in, you'll be able to see reviews and write your own reviews anonymously on the platform.</p>
          </div>
        </section>
        </>
    )
}

