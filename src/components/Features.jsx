import { useId } from 'react';

const featuresData = [
    {
        titleSmall: 'Personalized Flow Feed',
        titleLarge: 'Trades Come to You',
        description: 'TitanFlow observes what institutional traders are trading and presents data that traders of all levels can understand.',
        image: 'feature-1.png',
        imageAlt: 'Personalized options flow.'
    },
    {
        titleSmall: 'Hidden Hedge Fund Orders',
        titleLarge: 'Darkpool Prints',
        description: 'Smart money keeps retail traders in the dark on their largest equity trades through private exchanges known as Darkpools.',
        image: 'feature-2.png',
        imageAlt: 'Darkpool prints.'
    },
    {
        titleSmall: 'Historical Search',
        titleLarge: 'Test Any Trading Strategy',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias veritatis quaerat deserunt magnam repellendus impedit! Libero labore quidem est ipsum?',
        image: 'feature-3.png',
        imageAlt: 'Test trading strategies.'
    }
];

export default function Features() {
    return (
        <section>
        <ul className='list-none'>
            {
                featuresData.map((feature, index) => {
                    return (
                        <li key={useId()} className={`flex justify-between items-center mb-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''} md:flex-col md:mb-[100px]`}>
                            <div className='flex justify-center items-center w-40% md:w-full'>
                                <img src={`images/feature-block-images/${feature.image}`} alt={feature.imageAlt} className='w-70% md:w-50% md:mb-8'/>
                            </div>
                            <div className='w-50% md:w-full'>
                                <h4 className='text-sky-500 text-lg font-bold'>{feature.titleSmall}</h4>
                                <h3 className='text-4xl font-bold my-3'>{feature.titleLarge}</h3>
                                <p className='text-zinc-500'>{feature.description}</p>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
        </section>
    ); 
}