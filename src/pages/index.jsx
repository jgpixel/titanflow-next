import Hero from '../components/Hero';
import Slides from '../components/Slides';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

export default function Home() {
	return (
		<>
			<Hero />
			<Slides />
			<h2 className='text-[7.5vw] leading-[8vw] text-center font-bold my-[200px] -lg:text-[6rem] h-full'>Discover options flow</h2>
			<Features />
			<Testimonials />
		</>
	);
}