import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('entro en middleware');

  if (request.nextUrl.pathname.startsWith('/api/entries/')) {
    const id = request.nextUrl.pathname.replace('/api/entries/', '');
    const checkMongoIDRegex = /^[0-9a-fA-F]{24}$/;

    if (!checkMongoIDRegex.test(id)) {
      const url = request.nextUrl.clone();
      url.pathname = '/api/bad-request';
      url.search = `?message=${id} is not a valid MongoID`;

      return NextResponse.rewrite(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/entries/:path*'],
};
