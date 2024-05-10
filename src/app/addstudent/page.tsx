"use client"
import AddStudendComp from "@/components/addStudentComp"
import Header from "@/components/header"

export default function AddStudend(){


return(
    <>
    <Header></Header>
    <div className="addStudentContainer h-full">
    
        <AddStudendComp></AddStudendComp>

    </div>
    </>

)


}