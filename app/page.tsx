
import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";



const Page = async ()=> {
  //This redirects the user to the dashboard if they are already logged in
  const session = await getServerSession();
  if(session){
    redirect('/dashboard');
  }
  
  return (
    <div>
      {/* Navbar */}
      <div className='w-full h-14 bg-white flex items-center justify-between'>

        <Link className=' bg-gradient-to-r from-violet-800 to-violet-300
        inline-block text-transparent bg-clip-text text-2xl text-black font-semibold pl-6'href="/">
          O M N I S C I A
        </Link>

        {/* Buttons */}
        <div className='pr-[20px]'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md ">
            <Link href="/api/auth/signin">Log In/Sign Up</Link>
          </button>
          
        </div>
        
      </div>



      {/* Hero Body */}
      <div style={{
        position: 'relative',
        width: '100vw',
        height: 'calc(100vh - 3rem)', // Adjusted height to exclude navbar height
        overflow: 'hidden', // Prevents image from overflowing
      }}>
        {/* Text Area */}
        <div className='pl-[74px] pt-[152px] w-[600px] h-[390px]'>
          <h1 className='text-4xl font-bold'>
            Welcome to Omniscia
          </h1>
          <p className='py-[35px] text-xl'>
          Omniscia is a dynamic learning platform designed to empower you with limitless knowledge. Dive into a world of interactive learning, where you can effortlessly create, study, and master any subject.
          </p>
          <Link href="/api/auth/signin">
            <button className="w-[200px] h-[70px] bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">
            Sign Up
          </button>
          </Link>
        </div>

        <Image
          src="/h.jpeg"
          layout='fill'
          objectFit='cover'
          objectPosition='top' // Adjust this to control the vertical positioning of the image
          alt="Women with notebook"
          style={{ zIndex: -1 }}
        />
      </div>




      {/* Three Descriptions */}
      <div className='pt-[80px] h-screen w-screen flex items-center flex-col'>
        <p className='pb-[50px] text-3xl font-semibold'>
          Explore flashcards, quizzes, and more
        </p>

        <div className='w-[840px] h-[500px] shadow-2xl rounded-lg flex flex-row justify-around items-center'>
          <div className='flex flex-col items-center'>
            <div className='w-[180px] h-[230px] rounded-lg bg-[rgb(255,207,150)]'></div>
            <p className='text-xl'>
            Intelligent Flashcards  </p>
          </div>

          <div className='flex flex-col items-center'>
          <div className='w-[180px] h-[230px] rounded-lg bg-[rgb(239,149,149)]'></div>
            <p className='text-xl'>
            Interactive Learning 
            Path
            </p>
          </div>

          <div className='flex flex-col items-center'>
          <div className='w-[180px] h-[230px] rounded-lg bg-[rgb(180,228,255)]'></div>
            <p className='text-xl'>
            Tests 
            </p>
          </div>
          
        </div>


      </div>




      {/* First Description */}
      <div className='flex justify-around items-center h-screen w-screen'>
        <div style={{
          position: 'relative',
          width: '40vw',
          height: '50vh', // Adjusted height to exclude navbar height
          overflow: 'hidden', // Prevents image from overflowing
          borderRadius: '20px'
        }}
        >
        <Image
          src="/h.jpeg"
          layout='fill'
          objectFit='cover'
          objectPosition='top' // Adjust this to control the vertical positioning of the image
          alt="Women with notebook"
          style={{ zIndex: -1 }}
        />
        </div>
        <div className='h-[260px] w-[460px] flex items-center text-xl font-medium'>Craft personalized flashcards tailored to your learning style. Omniscia intelligently adapts to your progress, ensuring an optimal learning experience.</div>
      </div>


      {/* Second Description */}
      <div className='flex justify-around items-center h-screen w-screen'>
        
        <div className='h-[260px] w-[460px] flex items-center text-xl font-medium'>
        Challenge yourself with immersive tests and quizzes. Omniscia's testing methods are designed to reinforce your understanding and boost retention.
        </div>
        
        
        <div style={{
          position: 'relative',
          width: '40vw',
          height: '50vh', // Adjusted height to exclude navbar height
          overflow: 'hidden', // Prevents image from overflowing
          borderRadius: '20px'
        }}
        >
        <Image
          src="/h.jpeg"
          layout='fill'
          objectFit='cover'
          objectPosition='top' // Adjust this to control the vertical positioning of the image
          alt="Women with notebook"
          style={{ zIndex: -1 }}
        />
        </div>
      </div>

      
      {/* Third Description */}
      <div className='flex justify-around items-center h-screen w-screen'>
        <div style={{
          position: 'relative',
          width: '40vw',
          height: '50vh', // Adjusted height to exclude navbar height
          overflow: 'hidden', // Prevents image from overflowing
          borderRadius: '20px'
        }}
        >
        <Image
          src="/h.jpeg"
          layout='fill'
          objectFit='cover'
          objectPosition='top' // Adjust this to control the vertical positioning of the image
          alt="Women with notebook"
          style={{ zIndex: -1 }}
        />
        </div>
        <div className='h-[260px] w-[460px] flex items-center text-xl font-medium'>
        Embark on interactive learning journeys. Omniscia guides you through structured paths, turning your study sessions into engaging adventures.
        </div>
      </div>
    </div>
  );
}

export default Page;