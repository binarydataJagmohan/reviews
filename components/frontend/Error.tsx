import React from 'react';
import Link from 'next/link';
export default function Error() {
  return (
    <section>
      <div className="container">
        <div className="error-page padd-top-30 padd-bot-30">
          <h1 className="mrg-top-15 mrg-bot-0 cl-danger font-250 font-bold">404</h1>
          <h2 className="mrg-top-10 mrg-bot-5 funky-font font-60">You Missed</h2>
          <p>The page you are looking for doesn&apos;t exist </p>
          <Link href="/" className="btn theme-btn-trans mrg-top-20">Go To Home Page</Link>
        </div>
      </div>
    </section>
  );
}
