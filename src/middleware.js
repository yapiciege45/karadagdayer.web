import { NextResponse } from "next/server"
import { isAuth } from "./lib/isAuth"
import { getUser } from "./lib/getUser"

export async function middleware(req) {
    let token = req.cookies.get('token')

    if(!token) {
        return NextResponse.redirect(new URL("/", req.url))
    }

    token = token.value


    if(!(await isAuth(token))) {
        return NextResponse.redirect(new URL("/", req.url))
    }

    const user = await getUser(token)

    if (req.url.includes('/admin')) {
        if(user.type != 'admin') {
            return NextResponse.redirect(new URL("/", req.url))
        } 
    } else if (req.url.includes('/moderator')) {
        if(user.type != 'moderator') {
            return NextResponse.redirect(new URL("/", req.url))
        } 
    } else if (req.url.includes('/employee')) {
        if(user.type != 'employee') {
            return NextResponse.redirect(new URL("/", req.url))
        } 
    } else if (req.url.includes('/customer')) {
        if(user.type != 'customer') {
            return NextResponse.redirect(new URL("/", req.url))
        } 
    }

    const response = NextResponse.next()

    response.cookies.set('user', JSON.stringify(user))

    return response
}

export const config = {
    matcher: ["/admin/:path*","/employee/:path*","/moderator/:path*","/customer/:path*"]
}