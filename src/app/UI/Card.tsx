"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';
import image from '../UI/image.jpg';

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex flex-col gap-y-5 justify-center items-center p-20">
        <h1>Welcome to Dashboard</h1>
        <h3> Hii {session.user?.name} <br /></h3>
       
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 w-40 h-10" onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <>
<div className="p-24 flex flex-row justify-center gap-x-8 md:gap-x-30 md:flex-row flex-col">
  <div className="h-35 md:h-80 w-full md:w-2/5  flex items-center justify-center ">
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 w-60 h-15" onClick={() => signIn()}>Sign in</button>
  </div>
  <div className="w-full md:w-3/5 h-80">
    <Image
      src={image}
      alt="img"
      className="w-full h-full object-contain"
    />
  </div>
</div>
</>
  );
}
