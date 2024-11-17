
import HeroSection from "./components/HeroSection/herosection";
import BestSelling from "./components/bestselling/bestsell";
import Container from "./components/container/container";



  export default function Home() 
  
{
  
  return (
    <>
   

<div className="bgVideo">
  <video 
    src="/vedio/vedio.mp4" 
    autoPlay 
    loop 
    muted 
    className="videoElement">
  </video>
</div>


    <HeroSection />
    <BestSelling />
    <Container />
    
    
  
    </>
  );
}
