import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import Head from 'next/head';
import FrontendLayout from '../components/layouts/layout';
import BackendLayout from '../components/Admin/layouts/layout';

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
        <BackendLayout>
        <Component {...pageProps} />
        </BackendLayout>
      </>
    ) 
  } else {
    return(
      <>
        <Head>
          <title>Bunjee</title>  
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
