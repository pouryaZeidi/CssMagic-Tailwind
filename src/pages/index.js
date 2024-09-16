import localFont from "next/font/local";
import TagComponent from "./components/tagdetails/TagComponent";


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
      <main className="">
     <div className="w-[80%] h-[70vh]">

        <TagComponent/>
    
      </div>
      </main>
      
    </div>
  );
}
