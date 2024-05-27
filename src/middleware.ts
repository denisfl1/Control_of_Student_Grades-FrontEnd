
"use client"

import { NextRequest,NextResponse } from "next/server";

export default function middleware(request:NextRequest){
    const token = true

    if(!token){
        // if(request.nextUrl.pathname === '/'){
        //     return NextResponse.next()
        // }
        return NextResponse.redirect(
            new URL('/loginpage',request.url)
        )

    }

    // if(request.nextUrl.pathname === '/'){
    //     return NextResponse.redirect('/')
    // }
}
    
export const config ={

    matcher:['/','/']
        
}