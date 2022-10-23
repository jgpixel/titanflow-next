import { useState, useId } from 'react';

const slidesData = [
    {
        icon: 'fire.svg',
        iconAlt: 'Fire icon.',
        title: 'Title 1',
        text: 'TitanFlow\'s Aggressive flow algorithm identifies leveraged short term trades, indicating anticipation in volatility. Aggressive flow is a calculated tool used by smart money for their most confident positions.',
        image: 'home.png'
    },
    {
        icon: 'bolt.svg',
        iconAlt: 'Lightning icon.',
        title: 'Title 2',
        text: 'Bruh',
        image: 'flow.png'
    },
    {
        icon: 'bolt.svg',
        iconAlt: 'Lightning icon.',
        title: 'Title 2',
        text: 'Bruh',
        image: 'flow.png'
    },
    {
        icon: 'bolt.svg',
        iconAlt: 'Lightning icon.',
        title: 'Title 2',
        text: 'Bruh',
        image: 'flow.png'
    }
];

export default function Slides() {
    const [slideIndex, setSlideIndex] = useState(0);

    const slideArrow = direction => {
        if (direction === 'R' && slideIndex !== slidesData.length - 1) {
            setSlideIndex(prevSlideIndex => prevSlideIndex + 1);
        } else if (direction === 'L' && slideIndex !== 0) {
            setSlideIndex(prevSlideIndex => prevSlideIndex - 1);
        }
    }

    return (
        <section>
            <div className='py-[80px] px-[100px] h-[600px] overflow-hidden relative gradient-border-2 xl:overflow-visible xl:flex xl:flex-col xl:justify-center xl:items-center xl:h-full xl:p-2'>
                <div className='flex flex-col justify-between w-40% h-full xl:w-full'>
                    <nav className='select-none xl:hidden'>
                        <ul className='list-none list-inside m-0 p-0 w-full flex justify-between max-w-[380px]'>
                            {
                                slidesData.map((slide, index) => {
                                    return (
                                        <li key={useId()} onClick={() => setSlideIndex(index)}>
                                            <div className={`rounded-full w-[50px] h-[50px] flex justify-center items-center cursor-pointer transition-colors border-teal-700 border hover:bg-teal-700 ${slideIndex === index ? 'bg-gradient-to-r from-sky-400 to-blue-500 border-none hover:unset' : ''}`}>
                                                <img src={`/images/icons/${slide.icon}`} alt={slide.iconAlt} className='w-[25px] h-[25px]' />
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </nav>
                    <div>
                        <div className='ml-3 xl:text-center'>
                            <h3 className='font-bold text-base mb-2'>{slidesData[slideIndex].title}</h3>
                            <p className='mb-[40px] text-base text-zinc-500'>{slidesData[slideIndex].text}</p>
                        </div>
                        <div className='flex select-none xl:bg-black xl:rounded-lg xl:py-[10px] xl:px-[5px] xl:justify-center xl:items-center xl:w-[100px] xl:absolute xl:left-1/2 xl:bottom-[60px] xl:-translate-x-1/2'>
                            <div className={`nav-arrow ${slideIndex !== 0 ? 'hover:bg-zinc-800 cursor-pointer' : ''}`} onClick={() => slideArrow('L')}>
                                <img className={`w-[30px] ${slideIndex === 0 ? 'opacity-40' : ''}`} src="/images/icons/arrow-left.svg" alt="Arrow left." />
                            </div>
                            <div className={`nav-arrow ${slideIndex !== slidesData.length - 1 ? 'hover:bg-zinc-800 cursor-pointer' : ''}`} onClick={() => slideArrow('R')}>
                                <img className={`w-[30px] ${slideIndex === slidesData.length - 1 ? 'opacity-40' : ''}`} src="/images/icons/arrow-right.svg" alt="Arrow right." />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={`/images/screenshots/${slidesData[slideIndex].image}`} className='w-[370px] absolute right-[120px] bottom-[-120px] -z-[1] xl:w-[min(90%, 350px)] xl:static'/>
            </div>
        </section>
    );
}