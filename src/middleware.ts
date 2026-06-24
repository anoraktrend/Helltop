import {defineMiddleware} from 'astro:middleware';

const ADMIN_HOSTNAMES = new Set(['helltop.admin', 'admin.helltop.net']);

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  if (ADMIN_HOSTNAMES.has(url.hostname) && url.pathname === '/') {
    return context.redirect('/admin');
  }

  return next();
});
