import { GraphQLClient, gql } from 'graphql-request';
import Head from 'next/head';

const graphcms = new GraphQLClient('https://api-us-east-1.hygraph.com/v2/cl9kxpbzf3ety01t94bu35gv9/master');

const QUERY = gql`
    query Post($slug: String!) {
        post(where: {slug: $slug}) {
            title
            slug
            category {
                name
            }
            thumbnail {
                url
            }
            content {
                html
            }
        }
    }
`;

const SLUG_LIST = gql`
    {
        posts {
            slug
        }
    }
`;

export async function getStaticPaths() {
    const { posts } = await graphcms.request(SLUG_LIST);
    return {
        paths: posts.map(post => ({ params: { slug: post.slug } })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const slug = params.slug;
    const data = await graphcms.request(QUERY, { slug });
    const post = data.post;

    return {
        props: {
            post
        }
    }
}

export default function Article({ post }) {
    const { title, category, content } = post;

    <Head>
        {/* TODO: add content as meta description */}
        <title>{title}</title>
    </Head>

    return (
        <div className='flex justify-center items-center flex-col'>
            <div className='my-12 w-70% md:w-full'>
                <h1 className='font-bold text-4xl w-full md:text-3xl'>{title}</h1>
                <h2 className='font-bold text-2xl w-full mt-2 mb-8'>{category.name}</h2>
                <div dangerouslySetInnerHTML={{ __html: content.html }} className='blog-content'></div>
            </div>
        </div>
    );
}