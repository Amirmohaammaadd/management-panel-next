import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const token = request.cookies.get("token")?.value;
  const isLogin = Boolean(token);

  console.log("Middleware Page for:", path, "| isLogin:", isLogin);

  // if user is not login move to login page
  if (!isLogin && path !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // redirect to Page if user is login
  if (isLogin && path === "/") {
    return NextResponse.redirect(new URL("/charts", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
