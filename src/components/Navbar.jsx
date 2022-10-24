import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useId } from 'react';
import GetTheApp from './GetTheApp';

const navLinks = [
    {
        isRouterLink: true,
        href: '/blog',
        text: 'Blog',
        targetIsBlank: false,
    },
    {
        isRouterLink: false,
        href: 'https://discord.com/invite/wjWBTFVqrF',
        text: 'Discord',
        targetIsBlank: true,
    },
    {
        isRouterLink: true,
        href: '/pricing',
        text: 'Pricing',
        targetIsBlank: false,
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='flex justify-between items-center my-4 w-[calc(100vw_-_60px)] md:relative md:w-[clamp(300px,1600px,calc(80%_+_40px))]'>
            <div className='w-30%'>
                <Link href='/'>
                    <a onClick={() => setIsOpen(false)} className='flex justify-start items-center w-min'>
                        <img
                            src='/images/logo.png'
                            alt='TitanFlow logo.'
                            className='w-9 mr-4'
                        />
                        <h2 className='font-bold text-2xl'>TitanFlow</h2>
                    </a>
                </Link>
            </div>
            <ul className={`flex justify-between items-center gap-x-6 w-38% list-none max-w-[400px] md:absolute md:left-1/2 md:top-[50px] md:-translate-x-1/2 md:flex-col md:gap-y-3 md:bg-black md:w-[100%] md:p-4 md:rounded-md ${isOpen ? 'flex' : 'hidden'} -md:flex md:max-w-none
            `}>
                {navLinks.map(({ href, text, targetIsBlank, isRouterLink }) => (
                        <li key={useId()} onClick={() => setIsOpen(false)} className='w-full'>
                            {isRouterLink ? (
                                <NavLink
                                    path={href}
                                    text={text}
                                    targetIsBlank={targetIsBlank}
                                />
                            ) : (
                                <NavAnchor
                                    href={href}
                                    text={text}
                                    targetIsBlank={targetIsBlank}
                                />
                            )}
                        </li>
                    )
                )}
            </ul>
            <div onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)} className='flex justify-center items-center p-[6px] rounded-[4px] cursor-pointer w-[32px] height-[32px] select-none hover:bg-zinc-800 transition-colors -md:hidden'>
                <div className={`w-[20px] ${isOpen ? 'hidden' : 'block'}`}>
                    <div className='burger-bar mb-[5px]'></div>
                    <div className='burger-bar mb-[5px]'></div>
                    <div className='burger-bar'></div>
                </div>
                <div className={`ml-[2px] ${isOpen ? 'block' : 'hidden'}`}>
                    <img className='cross' src='/images/icons/cross.svg' alt='Close.' />
                </div>
            </div>
            <div className='flex justify-end w-30% md:hidden'>
                <GetTheApp />
            </div>
        </nav>
    );
}

function NavAnchor({ href, text, targetIsBlank }) {
    return (
        <a
            href={`${href}`}
            target={targetIsBlank ? '_blank' : '_self'}
            className='nav-link w-full'
        >
            {text}
        </a>
    );
}

function NavLink({ path, text, targetIsBlank }) {
    const router = useRouter();

    return (
        <div className={`w-full text-center' ${router.pathname === path ? 'text-white' : 'text-zinc-500'}`}>
            <Link
                href={`${path}`}
                target={targetIsBlank ? '_blank' : '_self'}
            >
                <a className='nav-link'>{text}</a>
            </Link>
        </div>
    );
}