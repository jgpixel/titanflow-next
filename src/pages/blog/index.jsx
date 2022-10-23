import Link from 'next/link';
import Head from 'next/head';
import { GraphQLClient, gql } from 'graphql-request';
import { useId } from 'react';

const graphcms = new GraphQLClient('https://api-us-east-1.hygraph.com/v2/cl9kxpbzf3ety01t94bu35gv9/master');

const QUERY = gql`
    {
        posts {
            title
            slug
            category {
                name
            }
            thumbnail {
                url
            }
            content {
                text
            }
        }
    }
`;

export async function getStaticProps() {
    const { posts } = await graphcms.request(QUERY);
    return {
        props: {
            posts
        }
    };
}

export default function Blog({ posts }) {
    console.log(posts);
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <div className='flex flex-col justify-center items-center mb-10'>
                <h1 className='font-bold text-5xl md:text-4xl mt-3 text-center'>Options Flow Daily</h1>
                <div className='w-full my-12 grid justify-start gap-10 grid-cols-[repeat(auto-fit,minmax(8em,1fr))] md:grid-cols-[repeat(1,minmax(4em,1fr))]'>
                    {
                        posts.map(post => (
                            <BlogCard
                                key={useId()}
                                title={post.title}
                                category={post.category.name}
                                thumbnail={post.thumbnail}
                                text={post.content.text}
                                slug={post.slug}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

function BlogCard({ title, thumbnail, category, text, slug }) {
    const wordCounter = text => text?.length === 0 ? 0 : text?.replace(/\s+/g, ' ').trim().split(' ').length ?? 0;

    return (
        <Link href={`/blog/${slug}`}>
            <a>
                <img src={thumbnail.url} className='h-[200px] w-full object-cover object-center' />
                <div className='w-full flex justify-between items-center my-3'>
                    <span className='py-[1px] px-[5px] bg-sky-500 rounded text-[.85rem] sm:text-[.75rem]'>{category}</span>
                    <span className='sm:text-[.9rem]'>{Math.ceil(wordCounter(text) / 250)} min</span>
                </div>
                <h2 className='font-bold text-2xl md:text-xl'>{title}</h2>
            </a>
        </Link>
    );
}