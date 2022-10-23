import { useState } from 'react';

const testimonialsData = [
    {
        quote: 'I recently installed TitanFlow and so far it has been just amazing. The app makes it super easy for me to find options plays, and shows me the overall market sentiment/what\'s being traded most. I receive push notifications when certain contracts are traded which has been very helpful for me',
        reviewer: {
            name: 'Justin G.',
            title: 'Pro trader at HSBC'
        }
    },
    {
        quote: 'Ad quod eum iste consequatur vel facilis magni saepe sequi delectus tempore amet excepturi aliquam, optio ex quaerat quae odio sint temporibus omnis maxime blanditiis?',
        reviewer: {
            name: 'Ben Dover',
            title: 'Pro trader at HSBC'
        }
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sit tempore voluptate explicabo possimus dolor quae, deserunt placeat ipsum alias?',
        reviewer: {
            name: 'Mike Hawk',
            title: 'Pro trader at HSBC'
        }
    }
];

export default function Testimonials() {
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const slideArrow = direction => {
        if (direction === 'R' && testimonialIndex !== testimonialsData.length - 1) {
            setTestimonialIndex(prevSlideIndex => prevSlideIndex + 1);
        } else if (direction === 'L' && testimonialIndex !== 0) {
            setTestimonialIndex(prevSlideIndex => prevSlideIndex - 1);
        }
    }

    return (
        <div className='text-center flex flex-col justify-center items-center mb-10'>
            <h2 className='text-6xl font-bold text-center my-[80px] md:text-4xl md:my-[40px]'>Testimonials</h2>
            <div className='mb-[80px] w-60% md:w-full'>
                <blockquote className='text-xl'>{`"${testimonialsData[testimonialIndex].quote}"`}</blockquote>
                <div className='flex flex-col mt-8'>
                    <span>{testimonialsData[testimonialIndex].reviewer.name}</span>
                    <span className='text-zinc-500'>{testimonialsData[testimonialIndex].reviewer.title}</span>
                </div>
            </div>
            <div className='flex select-none justify-center items-center'>
                <div className={`nav-arrow ${testimonialIndex !== 0 ? 'hover:bg-zinc-800 cursor-pointer' : ''}`} onClick={() => slideArrow('L')}>
                    <img className={`w-[30px] ${testimonialIndex === 0 ? 'opacity-40' : ''}`} src="/images/icons/arrow-left.svg" alt="Arrow left." />
                </div>
                <div className='mx-4'>
                    <span>
                        {testimonialIndex + 1}&nbsp;&nbsp;
                    </span>
                    <span className='opacity-40'>
                        /&nbsp;&nbsp;{testimonialsData.length}
                    </span>
                </div>
                <div className={`nav-arrow ${testimonialIndex !== testimonialsData.length - 1 ? 'hover:bg-zinc-800 cursor-pointer' : ''}`} onClick={() => slideArrow('R')}>
                    <img className={`w-[30px] ${testimonialIndex === testimonialsData.length - 1 ? 'opacity-40' : ''}`} src="/images/icons/arrow-right.svg" alt="Arrow right." />
                </div>
            </div>
        </div>
    );
}