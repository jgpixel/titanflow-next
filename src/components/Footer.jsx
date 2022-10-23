import GetTheApp from './GetTheApp'
import Link from 'next/link';

export default function Footer() {
    return (
        <div className='flex justify-center items-center flex-col w-full'>
            <hr className='bg-zinc-800 w-full h-[1px] border-none' />
            <footer className='flex flex-col w-[calc(100vw_-_60px)] py-5'>
                <div className='w-full flex justify-between items-center mb-[50px] md:mb-10 md:flex-col-reverse'>
                    <div className='w-25% md:w-full md:hidden'>
                        <Link href='/'>
                            <a>
                                <img src='/images/logo.png' alt='TitanFlow logo.' className='w-9' />
                            </a>
                        </Link>
                    </div>
                    <p className='w-35% text-center text-sm md:w-full md:mt-10'>Get actionable, real-time alerts, and start making informed decisions on how, when, and where to invest.</p>
                    <div className='flex justify-end w-25% md:w-full md:justify-center'>
                        <GetTheApp />
                    </div>
                </div>
                <div className='w-full flex justify-between items-center text-zinc-500 text-sm md:flex-col'>
                    <div className='w-40% md:w-full md:flex md:justify-center'>
                        <a href='mailto:support@titanflow.io?subject=Hey! I have a question...' className='block w-[fit-content]'>support@titanflow.io</a>
                    </div>
                    <div className='w-20% text-center md:w-full md:my-10'>
                        <span className='block'>Copyright © 2022 TitanFlow LLC</span>
                    </div>
                    <div className='w-40% flex justify-end md:w-full md:justify-center'>
                        <div className='block mr-8'>
                            <Link href='terms'><a>Terms of Use</a></Link>
                        </div>
                        <div className='block'>
                            <Link href='privacy'><a>Privacy Policy</a></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}