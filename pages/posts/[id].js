import Link from 'next/link';
import { getGlobalData } from '../../utils/global-data';
import { getPostBySlug } from '../../utils/mdx-utils';
import Layout, { GradientBackground } from '../../components/Layout'
import Header from '../../components/Header';
import SEO from '../../components/SEO';
import ArrowIcon from '../../components/ArrowIcon';

export default function PostPage({
  posts,
  globalData,
}) {
  return (
    <Layout>
      <SEO
        title={`${posts[0].title} - ${globalData.name}`}
        description={posts[0].description}
      />
      <Header name={globalData.name} />
      <article className="opacity bg-black/30 rounded-lg p-8 w-full">
        <header>
          {posts[0].created_at && (
            <p className="uppercase font-bold opacity-60">
              {posts[0].created_at.slice(0,10).split('-').reverse().join('/')}
            </p>
          )}
          <h1 className="text-3xl font-bold md:text-4xl text-white text-center mb-8">
            {posts[0].title}
          </h1>
          {posts[0].description && (
            <p className="text-xl mb-4">{posts[0].description}</p>
          )}
        </header>
        <main>
          <article className="prose prose-dark">
            {posts[0].body}
          </article>
        </main>
      </article>

      <div className="flex justify-end w-full pr-5 pt-5">
        <Link
            as={`/`}
            href={`/`}
          >
          <button className='opacity-80 hover:scale-110 hover:opacity-100 rotate-180 bg-next-brown rounded-3xl ' >
            <ArrowIcon h="50" w="50" className="flex p-1"/>
          </button>
        </Link>
      </div>
      <GradientBackground
        variant="large"
        className="fixed opacity-40 dark:opacity-60"
      />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const globalData = getGlobalData();
  const posts = await getPostBySlug(params.id);

  return {
    props: {
      globalData,
      posts,
    }
  };
};

