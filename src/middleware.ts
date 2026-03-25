import {defineMiddleware} from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const hostname = url.hostname;

  // Handle admin subdomains/hostnames
  if (hostname === 'helltop.admin' || hostname === 'admin.helltop.net') {
    // Redirect root to /admin to trigger the login flow
    if (url.pathname === '/') {
      return context.redirect('/admin');
    }
  }

  return next();
});
