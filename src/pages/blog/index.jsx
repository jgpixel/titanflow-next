import Head from 'next/head';

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <div className='flex flex-col justify-center items-center mb-10'>
                <h1 className='font-bold text-5xl mt-3 text-center'>Options Flow Daily</h1>
            </div>
        </>
    );
}