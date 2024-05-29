
"use client"

import { NextRequest,NextResponse } from "next/server";


export default function middleware(request:NextRequest){

    const loginPage = new URL('/loginpage',request.url)
    const home = new URL('/',request.url)
    const token = request.cookies.get('token')?.value

    if(!token){

    if(request.nextUrl.pathname === '/loginpage'){
        return NextResponse.next()
    }

        return NextResponse.redirect(loginPage)
    }
    if(request.nextUrl.pathname === '/loginpage'){
        return NextResponse.redirect(home)
    }
}
    
export const config ={

    matcher:['/loginpage','/']
        
}