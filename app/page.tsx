import React from "react";
import Card from "../components/card";
import TeamCard from "../components/teamCard";


export default function Home() {
  const testData = [
    {
      imgSrc: "../static/orange.jpeg",
      text: "",
      altText: "Luis",
      title: "Luis Acuna",
    },
    {
      imgSrc: "../static/orange.jpeg",
      text: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test 2 ",
      altText: "Ana",
      title: "Ana Baltazar Diego",
    },
    {
      imgSrc: "../static/orange.jpeg",
      text: "My name is Carson Robinson. I'm in my second year at Indian Hills, so far I've been doing classes through dual enrollment. So far I've learn Python, HTML, Database, and Cloud Foundations amongst other things. I helped with researching projects, and designing pages on this project.",
      altText: "Carson",
      title: "Carson Robinson",
    },
    {
      imgSrc: "../static/orange.jpeg",
      text: "I am a second year student graduating with the mobile emphasis. I helped with front end next.js. I created the reusable card components, layout using dynamic page routing, and the page that renders the chosen culture. ",
      altText: "Clayton",
      title: "Clayton Williams",
    },
    {
      imgSrc: "../static/orange.jpeg",
      text: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test 5",
      altText: "Fiori",
      title: "Fiori Weldemichael",
    },
        {
      imgSrc: "../static/orange.jpeg",
      text: "I'm a second year student graduating in May of 2026 in the Web emphasis of my program. I helped out with creating the backend Spring project in various ways such as the tables, controller, and general structure of the backend. I also assisted in making the front end, mainly with the styling of the site itself, alongside helping with making the poster!",
      altText: "Marcie",
      title: "Marcie Benacka",
    },
  ];




  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 bg-gray-800 ml-40 text-center rounded-lg p-2">
            America: United In Diversity
          </h1>
          <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 bg-gray-800 ml-43 mr-0 text-center rounded-lg p-4">
            Our Team Members
          </h2>
            {testData.map((data, index) => (
              <TeamCard name={data.title} url={data.imgSrc} altText={data.altText} desc={data.text} key={index} />
            ))}
          
         
        </div>
        
      </main>
    </div>
  );
}
