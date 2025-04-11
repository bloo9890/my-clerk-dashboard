import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Dashboard App</title>
        <meta name="description" content="Welcome to your new app!" />
      </Head>

      <Header />

      <main className="p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Dashboard App</h1>
        <p className="mb-6 text-lg">Log in securely and explore your personalized dashboard.</p>
        <Link href="/dashboard">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Go to Dashboard
          </button>
        </Link>
      </main>
    </>
  );
}