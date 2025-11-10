import React from "react";
import Card from "../components/card";
import TeamCard from "../components/teamCard";


export default function Home() {
  const testData = [
    {
      imgSrc: "../static/orange.jpeg",
      text: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ",
      altText: "Test",
      title: "Test Card",
    },
    {
      imgSrc: "../static/orange.jpeg",
      text: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test 2 ",
      altText: "Test",
      title: "Test Card",
    },
    {
      imgSrc: "../static/orange.jpeg",
      text: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test 3 ",
      altText: "Test",
      title: "Test Card",
    },
    {
      imgSrc: "../static/orange.jpeg",
      text: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test 4",
      altText: "Test",
      title: "Test Card",
    },
    {
      imgSrc: "../static/orange.jpeg",
      text: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test 5",
      altText: "Test",
      title: "Test Card",
    },
  ];




  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            We should like, put something here
          </h1>
            {testData.map((data, index) => (
              <TeamCard name={""} url={""} altText={""} key={index} />
            ))}
          
         
        </div>
        
      </main>
    </div>
  );
}
