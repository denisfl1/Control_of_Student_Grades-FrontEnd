"use client"

import background from "@/imgs/classroom.jpg"

export default function login(){

    function handleLogin(e:React.MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    
    alert("logado")



    }


    return(
        <>

    <img className="loginIMG" src={background.src}></img>
        <div className="loginContent flex relative  m-auto  bg-gray-300 bg-opacity-80 " >

            <form className="flex flex-col m-auto">

                <input placeholder="Digite seu (RA)" type="email" name="email"></input>


                <input placeholder="Senha" type="text" name="text"></input>


                <button onClick={handleLogin} className="bg-blue-500">LOGIN</button>

            </form>


        </div>


        </>
    )


}