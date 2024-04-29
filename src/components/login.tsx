

"use client"

export default function login(){

    function handleLogin(){

    
    alert("logado")



    }


    return(

        <div className="loginContent flex relative  m-auto  bg-blue-300 bg-opacity-50 " >

            <form className="flex flex-col m-auto">

                <input placeholder="E-mail" type="email" name="email"></input>


                <input placeholder="Senha" type="text" name="text"></input>


                <button onClick={handleLogin} className="bg-yellow-300">LOGIN</button>

            </form>


        </div>



    )


}