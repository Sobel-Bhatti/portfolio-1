import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/itachi.png';
import design from '../public/design.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import {useState,useEffect} from 'react';
import { useTheme } from 'next-themes';


export default function Home() {
 
 
  return (
    <>
      <Head>
        <title>Sobel Bhatti</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10">
        <section className='min-h-screen'>
        <nav className="py-10 mb-12 flex justify-between">
          <div> 
          <h1 className="cursor-pointer text-xl font-burtons">Developed by SB</h1>
          </div>
          <ul className='flex items-center '>
            <li  onClick={()=>setTheme(dark)} className=" cursor-pointer">
              <BsFillMoonStarsFill/>
            </li>
           <li className="cursor-pointer">
            <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 ml-8 rounded-md" href='#'>resume</a>
           </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600  font-semibold">Sobel Bhatti </h2>
          <h3 className='text-2xl py-2 text-neutral-900'>UI/UX Designer and Developer</h3>
          <a className='py-5 text-md leading-8 text-gray-800  max-w-xl mx-auto text-center'>
          Hi there! I am a React JS UI developer with a passion for crafting elegant and intuitive user experiences. With [number of years] of experience in the industry, I have honed my skills in creating performant and scalable applications that deliver exceptional user engagement. My expertise lies in developing complex UI components, integrating with APIs, and implementing responsive design principles.          </a>
        </div>
        <div className='flex text-4xl justify-center gap-10 py-3 text-gray-600'>
        <AiFillTwitterCircle/>
        <AiFillLinkedin/>
        <AiFillInstagram/>
        </div>
        <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 py-5 mt-10 mx-auto  overflow-hidden'>
          <Image  src={deved} Layout="fill" ObjectFit="cover"/>
        </div>
        </section>
        <section>
          <div className='max-w-xl mx-auto text-center'>
            <h3 className='py-1 text-3xl'>
              Services I offer!
            </h3>
            <p className='py-2 text-md leading-8 text-gray-800 md:max-h-xl'>I strive to <span>stay current</span> with the <span className='text-teal-800'>latest technologies</span> and <span className='text-teal-800'>industry trends</span> to ensure that my clients receive <span className='text-teal-800'> top-quality solutions.</span> </p>
            <p className='py-2 text-md leading-8 text-gray-800 md:max-h-xl'>I strive to <span>stay current</span> with the <span className='text-teal-800'>latest technologies</span> and <span className='text-teal-800'>industry trends</span> to ensure that my clients receive <span className='text-teal-800'> top-quality solutions.</span> </p>
            <p className='py-2 text-md leading-8 text-gray-800 md:max-h-xl'>I strive to <span>stay current</span> with the <span className='text-teal-800'>latest technologies</span> and <span className='text-teal-800'>industry trends</span> to ensure that my clients receive <span className='text-teal-800'> top-quality solutions.</span> </p>

          </div>
            <div className='lg:flex gap-10 align-middle mx-20'>
<div class="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-500 mt-4">
    <a href="#">
        <Image class="rounded-t-lg" src={design} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Beautiful Designs!</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> As a React JS UI developer, I am dedicated to creating beautiful and functional
              user interfaces that not only look great but also provide an exceptional user experience.</p>
        <a href="#" class="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <p className='pl-1'>React JS</p>
              <p className='pl-1'>Next JS</p>
              <p className='pl-1'>Tailwind Css</p>
             
        </a>
    </div>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-500 mt-4">
    <a href="#">
        <Image class="rounded-t-lg" src={design} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Beautiful Designs!</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> As a React JS UI developer, I am dedicated to creating beautiful and functional
              user interfaces that not only look great but also provide an exceptional user experience.</p>
        <a href="#" class="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <p className='pl-1'>React JS</p>
              <p className='pl-1'>Next JS</p>
              <p className='pl-1'>Tailwind Css</p>
             
        </a>
    </div>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-500 mt-4">
    <a href="#">
        <Image class="rounded-t-lg" src={design} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Beautiful Designs!</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> As a React JS UI developer, I am dedicated to creating beautiful and functional
              user interfaces that not only look great but also provide an exceptional user experience.</p>
        <a href="#" class="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <p className='pl-1'>React JS</p>
              <p className='pl-1'>Next JS</p>
              <p className='pl-1'>Tailwind Css</p>
             
        </a>
    </div>
</div>
</div>
<div>
  <h3 className='text-center text-2xl bg-teal-200 my-4 mt-10 ' > Portfolio </h3>
</div>
<div className='flex flex-cl gap-10 py-10 lg:flex-row lg:flex-wrap '>
<div className='basis-1/3 flex-1'>
    <Image src={web1} className="rounded-lg object-cover" width={"100"} height={"100"} layout={"responsive"}/>
  </div>
  <div className='basis-1/3 flex-1'>
    <Image src={web2} className="rounded-lg object-cover" width={"100"} height={"100"} layout={"responsive"}/>
  </div>
  <div className='basis-1/3 flex-1'>
    <Image src={web3} className="rounded-lg object-cover" width={"100"} height={"100"} layout={"responsive"}/>
  </div>
  <div className='basis-1/3 flex-1'>
    <Image src={web4} className="rounded-lg object-cover" width={"100"} height={"100"} layout={"responsive"}/>
  </div>
  <div className='basis-1/3 flex-1'>
    <Image src={web5} className="rounded-lg object-cover" width={"100"} height={"100"} layout={"responsive"}/>
  </div>
  <div className='basis-1/3 flex-1'>
    <Image src={web6} className="rounded-lg object-cover" width={"100"} height={"100"} layout={"responsive"}/>
  </div>

</div>
        </section>
      </main>
    </>
  )
}
