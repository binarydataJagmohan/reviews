import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import Head from 'next/head';
import FrontendLayout from '../components/layouts/layout';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (router.pathname.startsWith("/admin")) {
    return(
      <>
        <Head>
          <title>Admin Dashboard</title>  
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>    
        </Head>
        <Component {...pageProps} />
      </>
    ) 
  } else if (router.pathname.startsWith("/user")) {
    return(
      <>
        <Head>
          <title>Admin Dashboard</title>  
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>    
        </Head>
        <Component {...pageProps} />
      </>
    ) 
  } else {
    return(
      <>
        <Head>
          <title>Frontend Pages</title>  
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>    
        </Head>
        <FrontendLayout>
          <Component {...pageProps} />
        </FrontendLayout>
      </>
    ) 
  }
}
