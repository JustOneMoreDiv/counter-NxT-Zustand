import type { NextPage } from "next";
import Head from "next/head";
import Parent from "../components/Parent";
import Child from "../components/Child";
import GrandChild from "../components/GrandChild";

const Home: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center py-2'>
			<Head>
				<title>NxT + Zustand</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='flex w-full flex-1 flex-col items-center  px-20 text-center'>
				<h1 className='absolute top-10 text-6xl font-bold text-blue-600'>
					NxT+Zustand Tree
				</h1>
				<Parent>
					<Child>
						<GrandChild />
						<GrandChild />
					</Child>
					<Child>
						<GrandChild />
						<GrandChild />
					</Child>
				</Parent>
			</main>
		</div>
	);
};

export default Home;
