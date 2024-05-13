"use client"
import AddStudendComp from "@/components/addStudentComp"
import Header from "@/components/header"
import background from "@/imgs/classroom.jpg"

export default function AddStudend(){

return(
    <>
    <Header ></Header>
    <div className="addStudentContainer h-full">
    <div className="background"></div>
          <img className="loginIMG" src={background.src} style={{zIndex:'-2'}}></img>
        <AddStudendComp></AddStudendComp>

    </div>
    </>

)


}