import React from "react";
import Card from "../components/card";
import TeamCard from "../components/teamCard";


export default function Home() {
  const testData = [
    {
      imgSrc: "../static/Luis.JPG",
      text: "I'm a second year student graduating with dual emphasis Web and Mainframe. I was the main backend developer and database designer. I created the SQL schema, the tables, and seeded data; as well as coded the backend with consultation from Marcie.",
      altText: "Luis",
      title: "Luis Acuna",
    },
    {
      imgSrc: "../static/orange.jpeg",
      text: "",
      altText: "Ana",
      title: "Ana Baltazar Diego",
    },
    {
      imgSrc: "../static/carson.png",
      text: "My name is Carson Robinson. I'm in my second year at Indian Hills, so far I've been doing classes through dual enrollment. So far I've learn Python, HTML, Database, and Cloud Foundations amongst other things. I helped with researching projects, and designing pages on this project.",
      altText: "Carson",
      title: "Carson Robinson",
    },
    {
      imgSrc: "../static/Clayton.JPG",
      text: "I am a second year student graduating with the mobile emphasis. I helped with front end next.js. I created the reusable card components, layout using dynamic page routing, and the page that renders the chosen culture. ",
      altText: "Clayton",
      title: "Clayton Williams",
    },
    {
      imgSrc: "../static/orange.jpeg",
      text: "",
      altText: "Fiori",
      title: "Fiori Weldemichael",
    },
        {
      imgSrc: "../static/Marcie.JPG",
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
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 bg-gray-800 ml-59 text-center rounded-lg p-2">
            Our Project
          </h1>
          <p className="max-w-xs text-lg leading-7 text-black dark:text-zinc-50 bg-gray-800 ml-43 mr-0 text-center rounded-lg p-4">
            Our project is a web application that showcases the diverse cultures that make up the United States. Each culture has its own unique page that highlights its history, traditions, and contributions to American society. The application is built using Next.js for the frontend and Spring Boot for the backend, with a SQL database to store culture information and facts.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-left mt-10">
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
