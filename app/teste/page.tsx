// pages/index.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/Header/Header';

const Home: NextPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Morry - Crypto Trading Platform</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        <h1 className="text-5xl font-bold mt-20">
          The safest cryptocurrency trading platform
        </h1>
        <p className="mt-4 text-lg">
          Morry is a new platform that provides more than 10,000+ markets to buy and sell
        </p>
        <div className="mt-8 flex items-center justify-center">
          <input
            type="text"
            placeholder="Search Markets"
            className="px-4 py-2 text-black rounded-l"
          />
          <button className="px-4 py-2 bg-purple-600 rounded-r hover:bg-purple-700">
            Search
          </button>
        </div>
        <div className="mt-16">
          <img src="/chart-placeholder.png" alt="Chart" className="max-w-full h-auto"/>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t mt-20">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
};

export default Home;
