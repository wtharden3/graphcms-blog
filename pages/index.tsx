import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const posts = [
  {
    title: 'React',
    excerpt: 'Learn react now'
  },
  {
    title: 'React Testing',
    excerpt: 'Learn react Today'
  },
  {
    title: 'React with Tailwind',
    excerpt: 'Learn react This Moment'
  },
  {
    title: 'React with Next.js too',
    excerpt: 'You gon learn today!'
  },
  {
    title: 'React with Next.js 4',
    excerpt: 'You gon learn today!'
  },
  {
    title: 'React with Next.js 5',
    excerpt: 'You gon learn today!'
  },
  {
    title: 'React with Next.js 6',
    excerpt: 'You gon learn today!'
  },
  {
    title: 'React with Next.js 7',
    excerpt: 'You gon learn today!'
  },
  {
    title: 'React with Next.js 8',
    excerpt: 'You gon learn today!'
  },
  {
    title: 'React with Next.js 9',
    excerpt: 'You gon learn today!'
  },
  {
    title: 'React with Next.js 10',
    excerpt: 'You gon learn today!'
  },
  {
    title: 'React with Next.js 11',
    excerpt: 'You gon learn today!'
  },
  {
    title: 'React with Next.js 12',
    excerpt: 'You gon learn today!'
  },
  {
    title: 'React with Next.js 13',
    excerpt: 'You gon learn today!'
  }
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>Graph CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 bg-blue-100'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, key) => (
            <div key={key}>
              <h2 className='font-serif text-3x font-bold'>{post.title}</h2>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1 bg-red-100">
          <div className="lg:sticky relative top-8">
            bloop!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
