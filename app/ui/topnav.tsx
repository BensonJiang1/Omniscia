'use client';
import Link from 'next/link';
import Search from '@/app/ui/searchs';
import {UserCircleIcon} from '@heroicons/react/24/outline';
import {signOut, useSession} from 'next-auth/react';


function AuthButton(){
  const {data: session} = useSession();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' }); // Specify the URL you want to redirect to after sign out
  };

  if(session){
    return (
      <div className='pr-[20px]'>
        {/* {session?.user?.name} <br/> */}
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }
}

export default async function TopNav() {

    return(
        <div className='w-full h-14 bg-white flex items-center justify-between'>

        <Link className=' bg-gradient-to-r from-violet-800 to-violet-300
        inline-block text-transparent bg-clip-text text-2xl text-black font-semibold pl-6'href="/">
          O M N I S C I A
        </Link>

        {/* Search Bar */}
        <div className='flex justify-center items-center'>
        <Search placeholder="Search sets..." /> 
        <UserCircleIcon className='px-[40px] h-[30px] w-[30px]text-gray-500 peer-focus:text-gray-900'/>
        <AuthButton/>

        </div>
        

        
        
      </div>
    );
}