import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import "./FAQ.css"

const FAQ = () => {
  const [val, setVal] = useState(false);
  const [val1, setVal1] = useState(false);
  const [val2, setVal2] = useState(false);
  const [val3, setVal3] = useState(false);
  const [val4, setVal4] = useState(false);
  const [val5, setVal5] = useState(false);

  return (

    <div className=" ">
      <div className="flex  ml-36 mb-4 mr-48 items-center justify-between max-w-[400px] ">
        <h1 className=" text-white text-2xl p-0 ">Frequently Asked Questions</h1>
      </div>

      <div className=" flex flex-col mb-3 ml-36 mr-48  max-w-[900px] items-center justify-between  bg-zinc-800 " >
        <div className="flex items-center justify-between  w-full  hover:bg-zinc-700" >
          <p className="aman text-white text-2xl pl-4 py-2 cursor-pointer" onClick={() => setVal((val) => !val)} >What is Netflix?</p>
            <button  onClick={() => setVal((val) => !val)}   className=" border-white text-3xl mr-5 text-white border-2 text-center "  >
              {val ? (<div> <RxCross1 /> </div>) : ( <div> <FiPlus /> </div> )}
            </button>
        </div>
          <button className='' onClick={() => setVal((val) => !val)}>
            {val ? (
                <p className="text-white text-2xl px-5 py-2 text-left w-full "> Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, 
                    anime, documentaries and more – on thousands of internet-connected devices.
                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's 
                    always something new to discover, and new TV shows and movies are added every week!hello world </p> 
            ) : (
              <span ></span>
            )}
          </button>
      </div>
     
     
      <div className="flex flex-col mb-3 ml-36 mr-48 items-center justify-between max-w-[900px] bg-zinc-800" >
        <div className="flex items-center justify-between w-full  hover:bg-zinc-700 " >
          <p className="text-white text-2xl pl-4 py-4 cursor-pointer" onClick={() => setVal1((val1) => !val1)} >How does netflix cost?</p>
            <button  onClick={() => setVal1((val1) => !val1)}   className="border-white text-3xl mr-5 text-white border-2 text-center "  >
              {val1 ? (<div> <RxCross1 /> </div>) : ( <div> <FiPlus /> </div> )}
            </button>
        </div>
          <button onClick={() => setVal1((val1) => !val1)}>
            {val1 ? (
                <p className="text-white text-2xl px-5 py-3 text-left w-full "> Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts. </p> 
            ) : (
              <span ></span>
            )}
          </button>
      </div>      
 
  <div className="flex flex-col  mb-3  ml-36  mr-48 items-center justify-between max-w-[900px] bg-zinc-800 " >
<div className="flex items-center justify-between w-full  hover:bg-zinc-700" >
  <p className="text-white text-2xl pl-4 py-4 cursor-pointer" onClick={() => setVal2((val2) => !val2)}> Where can I watch?</p>

    <button  onClick={() => setVal2((val2) => !val2)}   className="border-white text-3xl mr-5 text-white border-2 text-center "  >
      {val2 ? (<div> <RxCross1 /> </div>) : ( <div> <FiPlus /> </div> )}
    </button>
</div>

  <button onClick={() => setVal((val2) => !val2)}>
    {val2 ? (
        <p className="text-white text-2xl px-5 py-3 text-left w-full ">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. </p> 
    ) : (
      <span ></span>
    )}
  </button>
</div>
 
<div className="flex flex-col  mb-3  ml-36  mr-48 items-center justify-between max-w-[900px] bg-zinc-800 " >
<div className="flex items-center justify-between w-full  hover:bg-zinc-700" >
  <p className="text-white text-2xl pl-4 py-4 cursor-pointer" onClick={() => setVal3((val3) => !val3)}> Where do I cancel?</p>

    <button  onClick={() => setVal3((val3) => !val3)}   className="border-white text-3xl mr-5 text-white border-2 text-center "  >
      {val3 ? (<div> <RxCross1 /> </div>) : ( <div> <FiPlus /> </div> )}
    </button>
</div>

  <button onClick={() => setVal((val3) => !val3)}>
    {val3 ? (
        <p className="text-white text-2xl px-5 py-3 text-left w-full ">Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime. </p> 
    ) : (
      <span ></span>
    )}
  </button>
</div>


<div className="flex flex-col  mb-3  ml-36  mr-48 items-center justify-between max-w-[900px] bg-zinc-800 " >
<div className="flex items-center justify-between w-full  hover:bg-zinc-700" >
  <p className="text-white text-2xl pl-4 py-4 cursor-pointer" onClick={() => setVal4((val4) => !val4)}> How can I watch on Netflix?</p>

    <button  onClick={() => setVal4((val4) => !val4)}   className="border-white text-3xl mr-5 text-white border-2 text-center "  >
      {val4 ? (<div> <RxCross1 /> </div>) : ( <div> <FiPlus /> </div> )}
    </button>
</div>

  <button onClick={() => setVal((val4) => !val4)}>
    {val4 ? (
        <p className="text-white text-2xl px-5 py-3 text-left w-full ">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want. </p> 
    ) : (
      <span ></span>
    )}
  </button>
</div> 

<div className="flex flex-col  mb-3  ml-36  mr-48 items-center justify-between max-w-[900px] bg-zinc-800 " >
<div className="flex items-center justify-between w-full  hover:bg-zinc-700" >
  <p className="text-white text-2xl pl-4 py-4 cursor-pointer" onClick={() => setVal5((val5) => !val5)}>Is Netflix good for kids?</p>

    <button  onClick={() => setVal5((val5) => !val5)}   className="border-white text-3xl mr-5 text-white border-2 text-center "  >
      {val5 ? (<div> <RxCross1 /> </div>) : ( <div> <FiPlus /> </div> )}
    </button>
</div>

  <button onClick={() => setVal5((val5) => !val5)}>
    {val5 ? (
        <p className="text-white text-2xl px-5 py-3 text-left w-full ">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see. </p> 
    ) : (
      <span ></span>
    )}
  </button>
</div>

    </div>
  );
};

export default FAQ;
