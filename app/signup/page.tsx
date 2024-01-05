
import Image from 'next/image';
import Link from 'next/link';

const Page = () =>{

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh', 
      overflow: 'hidden', // Prevents image from overflowing
    }}>

      {/* Log In Area */}
      <div className='bg-white w-[50vw] h-screen float-end'>
        {/* Home Button */}
        <Link href='/'>
          <Image
            src="/xButton.svg"
            width={50}
            height={50}
            className='float-end'
            alt='X Button'
          />
        </Link>


        {/* Sign up and Log in buttons */}
        <div className='flex flex-col items-center pt-[160px] '>

          <div className='text-xl'>
            <span className='pr-[155px]'>
              <Link href='/login'>Log In</Link>
            </span>
            <span><Link href='/signup'>Sign Up</Link></span>
          </div> 

          <div className='pt-[80px] w-[530px] h-[70px]'>
            
            
            <form>
              <label htmlFor="frm-email">Email</label><br />
              <input
                placeholder="...@gmail.com"
                className="text-slate-400 w-full h-12 px-4 mt-2 rounded-md border border-gray-300"
              />
              <br />
              <br />
              <label htmlFor="frm-email">Password</label><br />
              <input
                placeholder="***********"
                className="text-slate-400 w-full h-12 px-4 mt-2 rounded-md border border-gray-300"
              />
              <div className='pt-[50px]'>
              <button type="submit" className="w-full h-12 mt-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md">
                Sign Up
              </button>
              </div>
            </form>
          </div>



        </div>
        
      </div>

      {/* Computer Background Image */}
      <Image
        src="/auth.jpeg"
        layout='fill'
        objectFit='cover'
        objectPosition='top' // Adjust this to control the vertical positioning of the image
        alt="Women with notebook"
        style={{ zIndex: -1 }}
      />
    </div>
  );
}

export default Page;