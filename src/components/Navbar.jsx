import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from 'react';
import GetTheApp from './GetTheApp';

const navLinks = [
    {
        id: '0',
        isRouterLink: true,
        href: '/blog',
        text: 'Blog',
        targetIsBlank: false,
    },
    {
        id: '1',
        isRouterLink: false,
        href: 'https://discord.com/invite/wjWBTFVqrF',
        text: 'Discord',
        targetIsBlank: true,
    },
    {
        id: '2',
        isRouterLink: true,
        href: '/pricing',
        text: 'Pricing',
        targetIsBlank: false,
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='flex justify-between items-center my-4 w-[calc(100vw_-_60px)] md:relative'>
            <div className='w-30%'>
                <Link href='/'>
                    <a className='flex justify-start items-center'>
                        <img
                            src='/images/logo.png'
                            alt='TitanFlow logo.'
                            className='w-9 mr-4'
                        />
                        <h2 className='font-bold text-2xl'>TitanFlow</h2>
                    </a>
                </Link>
            </div>
            <ul className={`flex justify-between items-center gap-x-6 w-38% list-none max-w-[400px]
                            md:absolute md:left-1/2 md:top-[50px] md:-translate-x-1/2 md:flex-col md:gap-y-3 md:bg-black
                            md:w-[100%] md:p-4 md:rounded-md ${isOpen ? 'flex' : 'hidden'} -md:flex md:max-w-none
            `}>
                {navLinks.map((link) => {
                    return (
                        <li key={link.id} onClick={() => setIsOpen(false)}>
                            {link.isRouterLink ? (
                                <NavLink
                                    path={link.href}
                                    text={link.text}
                                    targetIsBlank={link.targetIsBlank}
                                />
                            ) : (
                                <NavAnchor
                                    href={link.href}
                                    text={link.text}
                                    targetIsBlank={link.targetIsBlank}
                                />
                            )}
                        </li>
                    );
                })}
            </ul>
            <div onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)} className='flex justify-center items-center p-[6px] rounded-sm cursor-pointer w-[32px] height-[32px] select-none hover:bg-zinc-800 transition-colors -md:hidden'>
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
            className='nav-link'
        >
            {text}
        </a>
    );
}

function NavLink({ path, text, targetIsBlank }) {
    const router = useRouter();

    return (
        <div className={`nav-link w-full text-center' ${router.pathname === path ? 'text-white' : 'text-zinc-500'}`}>
            <Link
                href={`${path}`}
                target={targetIsBlank ? '_blank' : '_self'}
            >
                <a>{text}</a>
            </Link>
        </div>
    );
}