import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DefaultSeo as SEO } from 'next-seo';
import { nextSEOConfig } from '../next-seo.config';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<title>TitanFlow: Mobile Options Order Flow</title>
			</Head>
			<SEO {...nextSEOConfig} />
			<div className='flex justify-center items-center flex-col w-[100vw] min-h-screen'>
				<Navbar />
				<div className='flex flex-col w-[clamp(300px,1600px,calc(80%_+_40px))] max-w-[1400px] flex-grow-[1]'>
					<Component {...pageProps} />
				</div>
				<Footer />
			</div>
		</>
	);
}