
import styles from '../styles/Home.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3" >
  <div class="md:flex">
    <div class="md:shrink-0">
      <Image class="h-48 w-full object-cover md:h-full md:w-48 m-3" src="https://source.unsplash.com/random/300×500/?coding, web dev" alt="random web dev pic from upsplash" width='300' height='500'/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">John Driscoll</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Full Stack Web Developer and Software Engineer.</a>
      <p class="mt-2 text-slate-500">I am a retrained software developer who used to work in a large warehosue distrubion center. I am partly self tought, and partly univerity taught. I have completed the web developer course at Nothcoders and I am currently taking a course at Aston University in software development. </p>
      <p class="mt-2 text-slate-500">I am a retrained software developer who used to work in alarge warehosue distrubion center. I am partly self tought, and partly univerity taught. I completed the web developer course at nothcoders and I am currently taking a course at Aston University in software development. </p>
    </div>
  </div>
</div>
    
    </>
  )
}
