import {
    SignedIn,
    SignedOut,
    SignIn,
    useUser,
    SignOutButton
  } from "@clerk/nextjs";
  import Header from "../components/Header";
  
  export default function Dashboard() {
    return (
      <>
        <Header />
        <main className="p-10">
          <SignedIn>
            <DashboardContent />
          </SignedIn>
  
          <SignedOut>
            <div className="text-center">
              <p className="mb-4 text-red-500">
                You must be signed in to view this page.
              </p>
              {/* ✅ Use hash routing to avoid Clerk error */}
              <SignIn routing="hash" />
            </div>
          </SignedOut>
        </main>
      </>
    );
  }
  
  // 🔒 Rendered only when user is signed in
  function DashboardContent() {
    const { user } = useUser();
  
    return (
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
            className="w-24 h-28 rounded border shadow-sm object-cover"
          />
        </div>
  
        <SignOutButton>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Sign Out
          </button>
        </SignOutButton>
      </div>
    );
  }
  