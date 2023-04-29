import React from 'react';
import Image from 'next/image';

const NcNews = () => {
  return (
    <>
       <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3" >
  <div class="md:flex">
    <div class="md:shrink-0">
      <Image class="h-48 w-full object-cover md:h-full md:w-48" src="https://jdwd40.com/wp-content/uploads/2023/01/arnold-francisca-f77Bh3inUpE-unsplash.jpg" alt="random news pic from upspash"width='300' height='600' className='rounded-md'/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Nc News Demo App</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">NC News, a Small Reddit Clone</a>
      <p class="mt-2 mb-2 text-slate-500">This app was built as part of my final project after finishing my web development course at northcoders. </p>
      <p class="mt-2 mb-2 text-slate-500">Nc News is a small reddit clone. A user can read news stories and comment on individual articles. They can also upvote articles and comments.</p>
    <Image src="https://jdwd40.com/wp-content/uploads/2023/04/markus-petritz-LFe6Prglw4-unsplash.jpg" width="300" height="350" className='rounded-md'/>
    </div>
  </div>
</div>
    </>
  );
};

export default NcNews;
