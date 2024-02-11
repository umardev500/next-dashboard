import { languages } from '@/app/i18n/settings'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse, type NextRequest } from 'next/server'

const locales = languages

// Get the preferred locale, similar to the above or using a library
const getLocale = (request: NextRequest) => {
  const lang = request.headers.get('accept-language') ?? 'en-US,en;q=0.5'

  const headers = { 'accept-language': lang }
  const languagese = new Negotiator({ headers }).languages()
  const defaultLocale = 'id'

  const locale = match(languagese, locales, defaultLocale) // -> 'en-US'
  return locale
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
