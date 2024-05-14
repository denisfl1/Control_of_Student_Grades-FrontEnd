import AddNoteComp from "@/components/addNoteComp"
import Header from "@/components/header"
import background from "@/imgs/classroom.jpg"


export default function AddNotePage(){



    return(

        <div className="addNotePageContainer">
            <Header></Header>
            <img className="loginIMG " style={{zIndex:-1,minHeight:"100vh"}} src={background.src}></img>
            <div className="background"></div>
            <div style={{display:'flex'}}>

            

          
            <AddNoteComp/>
            </div>

        </div>


    )


}