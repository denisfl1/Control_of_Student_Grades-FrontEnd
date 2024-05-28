
"use client"

import { NextRequest,NextResponse } from "next/server";

export default function middleware(request:NextRequest){
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidGVhdGNoZXJOYW1lIjoiRGVuaXMgVGVhdGNoZXIiLCJjcmVkZW50aWFsIjoiMTIzNDUyMyJ9.OHLO5s02hjTCBoodndHjwLDqnniukpItzt3ZnMYpFpU"
    const verify = !!token
    if(!verify){
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