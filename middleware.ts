import { NextResponse, type NextRequest } from 'next/server'

// Configure wildcard subdomains like <slug>.flvckz.xyz to map to /projects/<slug>
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const host = req.headers.get('host') || ''

  // In dev (localhost), skip subdomain handling
  const isLocalhost = host.includes('localhost') || host.includes('127.0.0.1')
  if (isLocalhost) {
    return NextResponse.next()
  }

  // Apex domain where subdomains are expected
  const apexDomain = 'flvckz.xyz'

  if (host.endsWith(apexDomain)) {
    const sub = host.replace(`.${apexDomain}`, '')

    // Ignore apex itself and common subdomains
    if (sub && sub !== apexDomain && !['www'].includes(sub)) {
      url.pathname = `/projects/${sub}`
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Run for all paths except static assets and API routes
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
}