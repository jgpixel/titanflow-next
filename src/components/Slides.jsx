import { useState, useId } from 'react';

const slidesData = [
    {
        icon: 'fire.svg',
        iconAlt: 'Fire icon.',
        title: 'Aggressive Options Flow',
        text: 'TitanFlow\'s Aggressive flow algorithm identifies leveraged short term trades, indicating anticipation in volatility. Aggressive flow is a calculated tool used by smart money for their most confident positions.',
        image: 'home.png',
        imageAlt: 'TitanFlow\'s home page shows you options flow.'
    },
    {
        icon: 'bolt.svg',
        iconAlt: 'Lightning icon.',
        title: 'Analyze Trades',
        text: 'Smart Money often has inside connections on market catalysts such as earnings and economic data. Gain insight into the direction of these significant events by analyzing large trades to add a layer of context to your decision making.',
        image: 'flow.png',
        imageAlt: 'TitanFlow\'s flow page.'
    },
    {
        icon: 'stats.svg',
        iconAlt: 'Chart icon.',
        title: 'Unusual Flow',
        text: 'The real-time options order flow intelligently analyzes data to cut through the noise and reveals the highest sentiment trades, unusual options movements, and Smart Money positions.',
        image: 'flow-unusual.png',
        imageAlt: 'TitanFlow\'s unusual options flow.'
    },
    {
        icon: 'uptrend.svg',
        iconAlt: 'A chart trending up icon.',
        title: 'Trending Flow Algorithm',
        text: 'TitanFlow\'s trending contract algorithm detects options contracts in high demand. Set alerts and get notified when smart money executes a string of multiple trades on the same contract.',
        image: 'hero.png',
        imageAlt: 'TitanFlow\'s trending contract algorithm.'
    },
    {
        icon: 'up-arrow.svg',
        iconAlt: 'Arrow trending up icon.',
        title: 'Historical Search',
        text: 'Add a layer of confidence to your trade ideas with a 7 day historical search report. Discover smart money\'s recent trades on your favorite stocks and identify correlation between your trading sentiment and theirs.',
        image: 'historical-search.png',
        imageAlt: 'TitanFlow\'s historical search feature.'
    },
    {
        icon: 'split.svg',
        iconAlt: 'A split path icon.',
        title: 'Darkpool data',
        text: 'TitanFlow\'s Darkpool algorithms bring smart money\'s largest private equity transactions to light. Smart money keeps retail traders in the dark on their largest equity trades through private exchanges known as Darkpools.',
        image: 'darkpool.png',
        imageAlt: 'TitanFlow\'s darkpool data.'
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
                                slidesData.map(({ icon, iconAlt }, index) => (
                                        <li key={useId()} onClick={() => setSlideIndex(index)}>
                                            <div className={`rounded-full w-[50px] h-[50px] flex justify-center items-center cursor-pointer transition-colors border-teal-700 border hover:bg-teal-700 ${slideIndex === index ? 'bg-gradient-to-r from-sky-400 to-blue-500 border-none hover:unset' : ''}`}>
                                                <img src={`/images/icons/${icon}`} alt={iconAlt} className='w-[25px] h-[25px]' />
                                            </div>
                                        </li>
                                    )
                                )
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
                                <img className={`w-[30px] ${slideIndex === 0 ? 'opacity-40' : ''}`} src='/images/icons/arrow-left.svg' alt='Arrow left.' />
                            </div>
                            <div className={`nav-arrow ${slideIndex !== slidesData.length - 1 ? 'hover:bg-zinc-800 cursor-pointer' : ''}`} onClick={() => slideArrow('R')}>
                                <img className={`w-[30px] ${slideIndex === slidesData.length - 1 ? 'opacity-40' : ''}`} src='/images/icons/arrow-right.svg' alt='Arrow right.' />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={`/images/screenshots/${slidesData[slideIndex].image}`} alt={slidesData[slideIndex].imageAlt} className='w-[370px] absolute right-[120px] bottom-[-120px] -z-[1] xl:w-[min(90%, 350px)] xl:static'/>
            </div>
        </section>
    );
}