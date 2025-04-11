import { SignedIn, SignedOut, SignIn, useUser, SignOutButton } from "@clerk/nextjs";
import Header from "../components/Header";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <>
      <Header />
      <main className="p-10">
        <SignedIn>
          <div className="text-center max-w-md mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">
              Welcome, {user?.firstName || "there"}!
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Email: {user?.primaryEmailAddress?.emailAddress}
            </p>

            <div className="flex justify-center mb-4">
              <img
                src={user?.imageUrl}
                alt="User Avatar"
                className="w-4 h-4 rounded-full border shadow-sm"
              />
            </div>

            <SignOutButton>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Sign Out
              </button>
            </SignOutButton>
          </div>
        </SignedIn>

        <SignedOut>
          <div className="text-center">
            <p className="mb-4 text-red-500">
              You must be signed in to view this page.
            </p>
            <SignIn />
          </div>
        </SignedOut>
      </main>
    </>
  );
}