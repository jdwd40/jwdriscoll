import React from 'react';
import Image from 'next/image';

const SkillsSet = () => {
  return (
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3" >
    <div class="md:flex">
      <div class="md:shrink-0">
        <Image class="h-48 w-full object-cover md:h-full md:w-48 m-3" src="https://source.unsplash.com/random/300×600/?coding,tech" alt="random coding picture from upsplash" width='300' height='600'/>
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">John Driscoll Skills Set</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Full Stack Web Developer and Software Engineer.</a>
        <p class="mt-2 text-slate-500">
        <div class="row">
                    <div ><p>
                        <ul className='list-disc p-2'>
                        <li>Proficient at Node.js, React.js, HTML and CSS.</li>
                        <li>Good understanding of asynchronous programming concepts.</li>
                        <li>Good understanding of SQL and relational databases.</li>
                        <li>Can successfully build a RESTful API using API-driven development.</li>
                        <li>Able to build apps form the ground up using TDD and incorporating error handling along the way.</li>
                        <li>Working knowledge of AWS. Can create virtual networks servers and storage space on AWS.</li>
                        <li>Excellent knowledge of networking, TCP/IP and DHCP Servers.</li>
                        <li>Good working knowledge of Linux based operating systems and servers.</li>
                        <li>Comfortable using the command line, BASH and PowerShell.</li>
                        </ul>
                        </p>
                        </div>
                  
                </div>

        </p>
      </div>
    </div>
  </div>
  )
}

export default SkillsSet