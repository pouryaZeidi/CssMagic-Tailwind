import localFont from "next/font/local";
import TagComponent from "./components/tagdetails/TagComponent";
import FlipCard from "./components/flipcards/Flipcard";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div >
      <main className=" ">
        <TagComponent/>
        <div className="flex w-full h-auto justify-between items-center mt-10 ">
        <FlipCard src={'/photo1.jpeg'} src2={'/photo2.jpg'}/>
        <FlipCard src={'/photo1.jpeg'} src2={'/photo2.jpg'}/>
        <FlipCard src={'/photo1.jpeg'} src2={'/photo2.jpg'}/>
        </div>
     
      </main>
      
    </div>
  );
}
