import Link from 'next/link';
import Head from 'next/head';
import { GraphQLClient, gql } from 'graphql-request';
import { useId } from 'react';

const graphcms = new GraphQLClient(process.env.API_LINK);

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
            thumbnailAlt
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
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <div className='flex flex-col justify-center items-center mb-10'>
                <h1 className='page-title'>Options Flow Daily</h1>
                <div className='w-full my-12 grid justify-start gap-x-12 gap-y-[4rem] grid-cols-[repeat(auto-fit,minmax(22em,1fr))] md:grid-cols-[repeat(1,minmax(4em,1fr))]'>
                    {
                        posts.map(({ title, category, thumbnail, thumbnailAlt, content, slug }) => (
                            <BlogCard
                                key={useId()}
                                title={title}
                                category={category.name}
                                thumbnail={thumbnail}
                                thumbnailAlt={thumbnailAlt}
                                text={content.text}
                                slug={slug}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

function BlogCard({ title, thumbnail, thumbnailAlt, category, text, slug }) {
    const wordCounter = text => text?.length === 0 ? 0 : text?.replace(/\s+/g, ' ').trim().split(' ').length ?? 0;

    return (
        <Link href={`/blog/${slug}`}>
            <a>
                <img src={thumbnail.url} alt={thumbnailAlt} className='h-[200px] w-full object-cover object-center' />
                <div className='w-full flex justify-between items-center my-3'>
                    <span className='py-[1px] px-[5px] bg-sky-500 rounded text-[.85rem] sm:text-[.75rem]'>{category}</span>
                    <span className='sm:text-[.9rem]'>{Math.ceil(wordCounter(text) / 250)} min</span>
                </div>
                <h2 className='font-bold text-2xl md:text-xl'>{title}</h2>
            </a>
        </Link>
    );
}