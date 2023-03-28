import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/css/plugins.css'} rel="stylesheet"/>
	      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link href={process.env.NEXT_PUBLIC_BASE_URL+'assets/css/style.css'} rel="stylesheet"/>
        <link href={process.env.NEXT_PUBLIC_BASE_URL+'assets/css/responsiveness.css'} rel="stylesheet"/>
        <link  type="text/css" rel="stylesheet" id="jssDefault" href={process.env.NEXT_PUBLIC_BASE_URL+'assets/css/colors/main.css'}/>
      </Head>
      <body className="home-2">
        <Main />
        <NextScript />
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/js/jquery.min.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/js/bootstrap.min.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/js/bootsnav.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/js/bootstrap-select.min.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/js/bootstrap-touch-slider-min.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/js/jquery.touchSwipe.min.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/js/chosen.jquery.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/js/datedropper.min.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/js/dropzone.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/js/jquery.counterup.min.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/js/jquery.fancybox.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/js/jquery.nice-select.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/js/jqueryadd-count.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/js/jquery-rating.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/js/slick.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/js/timedropper.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/plugins/js/waypoints.min.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/js/jQuery.style.switcher.js'}></script>
        <script src={process.env.NEXT_PUBLIC_BASE_URL+'assets/js/custom.js'}></script>
      </body>
    </Html>
  )
}
