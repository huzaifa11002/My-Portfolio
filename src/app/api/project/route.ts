import { NextResponse } from "next/server";

export async function GET() {
  return await NextResponse.json([
    {
      title: "E-commerce Hackathon",
      desc: "This is my hackathon ecommerce project. In this app you can buy products. In this app I use stripe payment gateway for payment and sanity for backend.", 
      github: "https://github.com/huzaifa11002/Hackathon-Q2",
      live: "https://hackathon-q2-seven-beta.vercel.app/",
      skills: [
        "NextJS",
        "Stripe",
        "TypeScript",
        "Tailwind CSS",
        "React Hooks",
        "Redux Toolkit",
        "Sanity",
        "Zod",
      ],
    },
    {
      title: "Portfolio Website",
      desc: "This is my portfoilo website. In this website show about me and my projects.",
      github: "https://github.com/huzaifa11002/My-Portfolio",
      live: "https://huzaifaportfolio-coral.vercel.app/",
      skills: ["NextJS", "RESTAPI", "TypeScript", "Tailwind CSS", "Shadcn UI", "React Hook"],
    },
    {
      title: "Secure Data Encryption",
      desc: "This is my secure data encryption App. In this app, you can secure your data with special passkey and also decrypt your data with same key.",
      github: "https://github.com/huzaifa11002/Secure-Data-Encryption",
      live: "https://secure-data-encryption-huzaifa.streamlit.app/",
      skills: ["Streamlit", "Python", "crypthography", "hashing"],
    },
    {
      title: "AI Recipe Generator",
      desc: "This is my Recipe Generator App. In this app, you input your ingredients and the app generates a recipe for you. The app uses the Gemini API to generate the recipe.",
      github: "https://github.com/huzaifa11002/Recipe-Generator",
      live: "https://recipe-generator-huzaifa.streamlit.app/",
      skills: ["Streamlit", "Python", "Gemini"],
    },
    {
      title: "Guess the number App",
      desc: "This is my Number Guessing Game App. In this app, you can play a number guessing game and set your difficulties.",
      github: "https://github.com/huzaifa11002/Guessed-Number",
      live: "https://guessed-number-huzaifa.streamlit.app/",
      skills: ["Streamlit", "Python"],
    },
    {
      title: "Secure Password Generator App",
      desc: "This is my Password Generator App. In this app, you want to generate your secure password and checking security of password.",
      github: "https://github.com/huzaifa11002/password-generator",
      live: "https://secure-data-encryption-huzaifa.streamlit.app/",
      skills: ["Streamlit", "Python"],
    },
    {
      title: "Unit Converter App",
      desc: "This is a Simple Unit Converter App. In this app, you can convert different units.",
      github: "https://github.com/huzaifa11002/unit-converter",
      live: "https://unit-converter-rwywsfxsgrjgqqsrpsrode.streamlit.app/",
      skills: ["Streamlit", "Python"],
    },
  ]);
}
