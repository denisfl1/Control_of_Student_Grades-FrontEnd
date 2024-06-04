import Header from "@/components/header";
import Menu from "@/components/menu";
import background from "@/imgs/classroom.jpg"
export default function Home() {

  

  return (

   <div>
    <img className="loginIMG " style={{zIndex:-1,minHeight:"100vh"}} src={background.src}></img>
    <div className="background"></div>
    <Header></Header>
    <Menu></Menu>


   </div>
  )
}
