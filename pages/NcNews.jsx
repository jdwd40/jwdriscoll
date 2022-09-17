import React from 'react';
import Image from 'next/image';

const NcNews = () => {
  return (
    <>
       <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3" >
  <div class="md:flex">
    <div class="md:shrink-0">
      <Image class="h-48 w-full object-cover md:h-full md:w-48" src="https://source.unsplash.com/random/300×500/?news" alt="random news pic from upspash"width='300' height='500'/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Nc News Demo App</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">NC News, a Small Reddit Clone</a>
      <p class="mt-2 mb-2 text-slate-500">This app was built as part of my final project after finishing my web development course at northcoders. </p>
    <Image src="https://jdwd40.tech/wp-content/uploads/2022/09/ncnews_pic.png" width="300" height="350"/>
    </div>
  </div>
</div>
    </>
  );
};

export default NcNews;
