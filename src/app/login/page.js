"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {session ? (
        <>
          <p>Welcome, {session.user.name}!</p>
          <img src={session.user.image} alt="Profile" className="w-12 h-12 rounded-full" />
          <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 mt-2">Logout</button>
        </>
      ) : (
        <button onClick={() => signIn("google")} className="bg-blue-500 text-white px-4 py-2">Login with Google</button>
      )}
    </div>
  );
}
