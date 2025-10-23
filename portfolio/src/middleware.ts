import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // For now, we'll allow all requests
  // In production, you would check for authentication here
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/auth/:path*',
  ],
}
