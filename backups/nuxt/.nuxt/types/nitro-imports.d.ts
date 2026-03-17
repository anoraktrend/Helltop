declare global {
  const H3Error: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').H3Error
  const H3Event: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').H3Event
  const __buildAssetsURL: typeof import('../../node_modules/.pnpm/@nuxt+nitro-server@4.4.2_@babel+core@7.29.0_better-sqlite3@12.8.0_db0@0.3.4_better-sqli_393d79e39705ac68029da3bd16f5cba2/node_modules/@nuxt/nitro-server/dist/runtime/utils/paths').buildAssetsURL
  const __publicAssetsURL: typeof import('../../node_modules/.pnpm/@nuxt+nitro-server@4.4.2_@babel+core@7.29.0_better-sqlite3@12.8.0_db0@0.3.4_better-sqli_393d79e39705ac68029da3bd16f5cba2/node_modules/@nuxt/nitro-server/dist/runtime/utils/paths').publicAssetsURL
  const appendCorsHeaders: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').appendCorsHeaders
  const appendCorsPreflightHeaders: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').appendCorsPreflightHeaders
  const appendHeader: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').appendHeader
  const appendHeaders: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').appendHeaders
  const appendResponseHeader: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').appendResponseHeader
  const appendResponseHeaders: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').appendResponseHeaders
  const asSitemapUrl: typeof import('../../node_modules/.pnpm/@nuxtjs+sitemap@7.6.0_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightning_6928f0e02ba672570dc513d6d2e47798/node_modules/@nuxtjs/sitemap/dist/runtime/server/composables/asSitemapUrl').asSitemapUrl
  const assertMethod: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').assertMethod
  const cachedEventHandler: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/cache').cachedEventHandler
  const cachedFunction: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/cache').cachedFunction
  const callNodeListener: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').callNodeListener
  const clearResponseHeaders: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').clearResponseHeaders
  const clearSession: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').clearSession
  const clearStudioUserSession: typeof import('../../node_modules/.pnpm/nuxt-studio@1.4.0_db0@0.3.4_better-sqlite3@12.8.0__ioredis@5.10.0_magicast@0.5.2_vue@3.5.30_typescript@5.9.3_/node_modules/nuxt-studio/dist/module/runtime/server/utils/session').clearStudioUserSession
  const createApp: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').createApp
  const createAppEventHandler: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').createAppEventHandler
  const createError: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').createError
  const createEvent: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').createEvent
  const createEventStream: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').createEventStream
  const createRouter: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').createRouter
  const createSitePathResolver: typeof import('../../node_modules/.pnpm/nuxt-site-config@3.2.21_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightni_771a32fce14216811a05d2e4a52f4f33/node_modules/nuxt-site-config/dist/runtime/server/composables/utils').createSitePathResolver
  const defaultContentType: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').defaultContentType
  const defineAppConfig: typeof import('../../node_modules/.pnpm/@nuxt+nitro-server@4.4.2_@babel+core@7.29.0_better-sqlite3@12.8.0_db0@0.3.4_better-sqli_393d79e39705ac68029da3bd16f5cba2/node_modules/@nuxt/nitro-server/dist/runtime/utils/config').defineAppConfig
  const defineCachedEventHandler: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/cache').defineCachedEventHandler
  const defineCachedFunction: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/cache').defineCachedFunction
  const defineEventHandler: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').defineEventHandler
  const defineLazyEventHandler: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').defineLazyEventHandler
  const defineNitroErrorHandler: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/error/utils').defineNitroErrorHandler
  const defineNitroPlugin: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/plugin').defineNitroPlugin
  const defineNodeListener: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').defineNodeListener
  const defineNodeMiddleware: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').defineNodeMiddleware
  const defineRenderHandler: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/renderer').defineRenderHandler
  const defineRequestMiddleware: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').defineRequestMiddleware
  const defineResponseMiddleware: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').defineResponseMiddleware
  const defineRouteMeta: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/meta').defineRouteMeta
  const defineSitemapEventHandler: typeof import('../../node_modules/.pnpm/@nuxtjs+sitemap@7.6.0_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightning_6928f0e02ba672570dc513d6d2e47798/node_modules/@nuxtjs/sitemap/dist/runtime/server/composables/defineSitemapEventHandler').defineSitemapEventHandler
  const defineTask: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/task').defineTask
  const defineWebSocket: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').defineWebSocket
  const defineWebSocketHandler: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').defineWebSocketHandler
  const defuReplaceArray: typeof import('../../node_modules/.pnpm/nuxt-security@2.5.1_magicast@0.5.2_rollup@4.59.0/node_modules/nuxt-security/dist/utils/merge').defuReplaceArray
  const deleteCookie: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').deleteCookie
  const dynamicEventHandler: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').dynamicEventHandler
  const eventHandler: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').eventHandler
  const fetchWithEvent: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').fetchWithEvent
  const fromNodeMiddleware: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').fromNodeMiddleware
  const fromPlainHandler: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').fromPlainHandler
  const fromWebHandler: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').fromWebHandler
  const generateRss: typeof import('../../server/utils/generateRss').generateRss
  const getCookie: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getCookie
  const getHeader: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getHeader
  const getHeaders: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getHeaders
  const getMethod: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getMethod
  const getNitroOrigin: typeof import('../../node_modules/.pnpm/nuxt-site-config@3.2.21_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightni_771a32fce14216811a05d2e4a52f4f33/node_modules/nuxt-site-config/dist/runtime/server/composables/getNitroOrigin').getNitroOrigin
  const getPathRobotConfig: typeof import('../../node_modules/.pnpm/@nuxtjs+sitemap@7.6.0_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightning_6928f0e02ba672570dc513d6d2e47798/node_modules/@nuxtjs/sitemap/dist/runtime/server/robots-polyfill/getPathRobotConfig').getPathRobotConfig
  const getProxyRequestHeaders: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getProxyRequestHeaders
  const getQuery: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getQuery
  const getRequestFingerprint: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getRequestFingerprint
  const getRequestHeader: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getRequestHeader
  const getRequestHeaders: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getRequestHeaders
  const getRequestHost: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getRequestHost
  const getRequestIP: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getRequestIP
  const getRequestPath: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getRequestPath
  const getRequestProtocol: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getRequestProtocol
  const getRequestURL: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getRequestURL
  const getRequestWebStream: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getRequestWebStream
  const getResponseHeader: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getResponseHeader
  const getResponseHeaders: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getResponseHeaders
  const getResponseStatus: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getResponseStatus
  const getResponseStatusText: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getResponseStatusText
  const getRouteRules: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/route-rules').getRouteRules
  const getRouterParam: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getRouterParam
  const getRouterParams: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getRouterParams
  const getSession: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getSession
  const getSiteConfig: typeof import('../../node_modules/.pnpm/nuxt-site-config@3.2.21_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightni_771a32fce14216811a05d2e4a52f4f33/node_modules/nuxt-site-config/dist/runtime/server/composables/getSiteConfig').getSiteConfig
  const getSiteIndexable: typeof import('../../node_modules/.pnpm/nuxt-site-config@3.2.21_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightni_771a32fce14216811a05d2e4a52f4f33/node_modules/nuxt-site-config/dist/runtime/server/composables/getSiteIndexable').getSiteIndexable
  const getValidatedQuery: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getValidatedQuery
  const getValidatedRouterParams: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').getValidatedRouterParams
  const handleCacheHeaders: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').handleCacheHeaders
  const handleCors: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').handleCors
  const isCorsOriginAllowed: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').isCorsOriginAllowed
  const isError: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').isError
  const isEvent: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').isEvent
  const isEventHandler: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').isEventHandler
  const isMethod: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').isMethod
  const isPreflightRequest: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').isPreflightRequest
  const isStream: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').isStream
  const isWebResponse: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').isWebResponse
  const lazyEventHandler: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').lazyEventHandler
  const nitroPlugin: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/plugin').nitroPlugin
  const parseCookies: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').parseCookies
  const parseMarkdown: typeof import('../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/parser').parseMarkdown
  const promisifyNodeListener: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').promisifyNodeListener
  const proxyRequest: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').proxyRequest
  const queryCollection: typeof import('../../node_modules/.pnpm/@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0_typescript@5.9.3_/node_modules/@nuxt/content/dist/runtime/nitro').queryCollection
  const queryCollectionItemSurroundings: typeof import('../../node_modules/.pnpm/@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0_typescript@5.9.3_/node_modules/@nuxt/content/dist/runtime/nitro').queryCollectionItemSurroundings
  const queryCollectionNavigation: typeof import('../../node_modules/.pnpm/@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0_typescript@5.9.3_/node_modules/@nuxt/content/dist/runtime/nitro').queryCollectionNavigation
  const queryCollectionSearchSections: typeof import('../../node_modules/.pnpm/@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0_typescript@5.9.3_/node_modules/@nuxt/content/dist/runtime/nitro').queryCollectionSearchSections
  const readBody: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').readBody
  const readFormData: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').readFormData
  const readMultipartFormData: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').readMultipartFormData
  const readRawBody: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').readRawBody
  const readValidatedBody: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').readValidatedBody
  const removeResponseHeader: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').removeResponseHeader
  const runTask: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/task').runTask
  const sanitizeStatusCode: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').sanitizeStatusCode
  const sanitizeStatusMessage: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').sanitizeStatusMessage
  const sealSession: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').sealSession
  const send: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').send
  const sendError: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').sendError
  const sendIterable: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').sendIterable
  const sendNoContent: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').sendNoContent
  const sendProxy: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').sendProxy
  const sendRedirect: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').sendRedirect
  const sendStream: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').sendStream
  const sendWebResponse: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').sendWebResponse
  const serveStatic: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').serveStatic
  const setCookie: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').setCookie
  const setHeader: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').setHeader
  const setHeaders: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').setHeaders
  const setResponseHeader: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').setResponseHeader
  const setResponseHeaders: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').setResponseHeaders
  const setResponseStatus: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').setResponseStatus
  const setStudioUserSession: typeof import('../../node_modules/.pnpm/nuxt-studio@1.4.0_db0@0.3.4_better-sqlite3@12.8.0__ioredis@5.10.0_magicast@0.5.2_vue@3.5.30_typescript@5.9.3_/node_modules/nuxt-studio/dist/module/runtime/server/utils/session').setStudioUserSession
  const splitCookiesString: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').splitCookiesString
  const stringifyMarkdown: typeof import('../../node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/stringify').stringifyMarkdown
  const toEventHandler: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').toEventHandler
  const toNodeListener: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').toNodeListener
  const toPlainHandler: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').toPlainHandler
  const toWebHandler: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').toWebHandler
  const toWebRequest: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').toWebRequest
  const unsealSession: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').unsealSession
  const updateSession: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').updateSession
  const updateSiteConfig: typeof import('../../node_modules/.pnpm/nuxt-site-config@3.2.21_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightni_771a32fce14216811a05d2e4a52f4f33/node_modules/nuxt-site-config/dist/runtime/server/composables/updateSiteConfig').updateSiteConfig
  const useAppConfig: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/config').useAppConfig
  const useBase: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').useBase
  const useEvent: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/context').useEvent
  const useImage: typeof import('../../node_modules/.pnpm/@nuxt+image@2.0.0_db0@0.3.4_better-sqlite3@12.8.0__ioredis@5.10.0_magicast@0.5.2/node_modules/@nuxt/image/dist/runtime/server/utils/image').useImage
  const useNitroApp: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/app').useNitroApp
  const useNitroOrigin: typeof import('../../node_modules/.pnpm/nuxt-site-config@3.2.21_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightni_771a32fce14216811a05d2e4a52f4f33/node_modules/nuxt-site-config/dist/runtime/server/composables/useNitroOrigin').useNitroOrigin
  const useRuntimeConfig: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/config').useRuntimeConfig
  const useSession: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').useSession
  const useSiteConfig: typeof import('../../node_modules/.pnpm/nuxt-site-config@3.2.21_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightni_771a32fce14216811a05d2e4a52f4f33/node_modules/nuxt-site-config/dist/runtime/server/composables/useSiteConfig').useSiteConfig
  const useStorage: typeof import('../../node_modules/.pnpm/nitropack@2.13.1_better-sqlite3@12.8.0/node_modules/nitropack/dist/runtime/internal/storage').useStorage
  const withSiteTrailingSlash: typeof import('../../node_modules/.pnpm/nuxt-site-config@3.2.21_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightni_771a32fce14216811a05d2e4a52f4f33/node_modules/nuxt-site-config/dist/runtime/server/composables/utils').withSiteTrailingSlash
  const withSiteUrl: typeof import('../../node_modules/.pnpm/nuxt-site-config@3.2.21_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightni_771a32fce14216811a05d2e4a52f4f33/node_modules/nuxt-site-config/dist/runtime/server/composables/utils').withSiteUrl
  const writeEarlyHints: typeof import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3').writeEarlyHints
}
// for type re-export
declare global {
  // @ts-ignore
  export type { EventHandler, EventHandlerRequest, EventHandlerResponse, EventHandlerObject, H3EventContext } from '../../node_modules/.pnpm/h3@1.15.6/node_modules/h3'
  import('../../node_modules/.pnpm/h3@1.15.6/node_modules/h3')
}
export { H3Event, H3Error, appendCorsHeaders, appendCorsPreflightHeaders, appendHeader, appendHeaders, appendResponseHeader, appendResponseHeaders, assertMethod, callNodeListener, clearResponseHeaders, clearSession, createApp, createAppEventHandler, createError, createEvent, createEventStream, createRouter, defaultContentType, defineEventHandler, defineLazyEventHandler, defineNodeListener, defineNodeMiddleware, defineRequestMiddleware, defineResponseMiddleware, defineWebSocket, defineWebSocketHandler, deleteCookie, dynamicEventHandler, eventHandler, fetchWithEvent, fromNodeMiddleware, fromPlainHandler, fromWebHandler, getCookie, getHeader, getHeaders, getMethod, getProxyRequestHeaders, getQuery, getRequestFingerprint, getRequestHeader, getRequestHeaders, getRequestHost, getRequestIP, getRequestPath, getRequestProtocol, getRequestURL, getRequestWebStream, getResponseHeader, getResponseHeaders, getResponseStatus, getResponseStatusText, getRouterParam, getRouterParams, getSession, getValidatedQuery, getValidatedRouterParams, handleCacheHeaders, handleCors, isCorsOriginAllowed, isError, isEvent, isEventHandler, isMethod, isPreflightRequest, isStream, isWebResponse, lazyEventHandler, parseCookies, promisifyNodeListener, proxyRequest, readBody, readFormData, readMultipartFormData, readRawBody, readValidatedBody, removeResponseHeader, sanitizeStatusCode, sanitizeStatusMessage, sealSession, send, sendError, sendIterable, sendNoContent, sendProxy, sendRedirect, sendStream, sendWebResponse, serveStatic, setCookie, setHeader, setHeaders, setResponseHeader, setResponseHeaders, setResponseStatus, splitCookiesString, toEventHandler, toNodeListener, toPlainHandler, toWebHandler, toWebRequest, unsealSession, updateSession, useBase, useSession, writeEarlyHints } from 'h3';
export { useNitroApp } from 'nitropack/runtime/internal/app';
export { useRuntimeConfig, useAppConfig } from 'nitropack/runtime/internal/config';
export { defineNitroPlugin, nitroPlugin } from 'nitropack/runtime/internal/plugin';
export { defineCachedFunction, defineCachedEventHandler, cachedFunction, cachedEventHandler } from 'nitropack/runtime/internal/cache';
export { useStorage } from 'nitropack/runtime/internal/storage';
export { defineRenderHandler } from 'nitropack/runtime/internal/renderer';
export { defineRouteMeta } from 'nitropack/runtime/internal/meta';
export { getRouteRules } from 'nitropack/runtime/internal/route-rules';
export { useEvent } from 'nitropack/runtime/internal/context';
export { defineTask, runTask } from 'nitropack/runtime/internal/task';
export { defineNitroErrorHandler } from 'nitropack/runtime/internal/error/utils';
export { buildAssetsURL as __buildAssetsURL, publicAssetsURL as __publicAssetsURL } from '/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+nitro-server@4.4.2_@babel+core@7.29.0_better-sqlite3@12.8.0_db0@0.3.4_better-sqli_393d79e39705ac68029da3bd16f5cba2/node_modules/@nuxt/nitro-server/dist/runtime/utils/paths';
export { defineAppConfig } from '/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+nitro-server@4.4.2_@babel+core@7.29.0_better-sqlite3@12.8.0_db0@0.3.4_better-sqli_393d79e39705ac68029da3bd16f5cba2/node_modules/@nuxt/nitro-server/dist/runtime/utils/config';
export { queryCollection, queryCollectionSearchSections, queryCollectionNavigation, queryCollectionItemSurroundings } from '/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0_typescript@5.9.3_/node_modules/@nuxt/content/dist/runtime/nitro';
export { useImage } from '/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+image@2.0.0_db0@0.3.4_better-sqlite3@12.8.0__ioredis@5.10.0_magicast@0.5.2/node_modules/@nuxt/image/dist/runtime/server/utils/image';
export { setStudioUserSession, clearStudioUserSession } from '/home/lucy/git/Helltop/node_modules/.pnpm/nuxt-studio@1.4.0_db0@0.3.4_better-sqlite3@12.8.0__ioredis@5.10.0_magicast@0.5.2_vue@3.5.30_typescript@5.9.3_/node_modules/nuxt-studio/dist/module/runtime/server/utils/session';
export { defineSitemapEventHandler } from '/home/lucy/git/Helltop/node_modules/.pnpm/@nuxtjs+sitemap@7.6.0_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightning_6928f0e02ba672570dc513d6d2e47798/node_modules/@nuxtjs/sitemap/dist/runtime/server/composables/defineSitemapEventHandler';
export { asSitemapUrl } from '/home/lucy/git/Helltop/node_modules/.pnpm/@nuxtjs+sitemap@7.6.0_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightning_6928f0e02ba672570dc513d6d2e47798/node_modules/@nuxtjs/sitemap/dist/runtime/server/composables/asSitemapUrl';
export { defuReplaceArray } from '/home/lucy/git/Helltop/node_modules/.pnpm/nuxt-security@2.5.1_magicast@0.5.2_rollup@4.59.0/node_modules/nuxt-security/dist/utils/merge';
export { parseMarkdown } from '/home/lucy/git/Helltop/node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/parser';
export { stringifyMarkdown } from '/home/lucy/git/Helltop/node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/stringify';
export { getPathRobotConfig } from '/home/lucy/git/Helltop/node_modules/.pnpm/@nuxtjs+sitemap@7.6.0_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightning_6928f0e02ba672570dc513d6d2e47798/node_modules/@nuxtjs/sitemap/dist/runtime/server/robots-polyfill/getPathRobotConfig';
export { getNitroOrigin } from '/home/lucy/git/Helltop/node_modules/.pnpm/nuxt-site-config@3.2.21_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightni_771a32fce14216811a05d2e4a52f4f33/node_modules/nuxt-site-config/dist/runtime/server/composables/getNitroOrigin';
export { getSiteConfig } from '/home/lucy/git/Helltop/node_modules/.pnpm/nuxt-site-config@3.2.21_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightni_771a32fce14216811a05d2e4a52f4f33/node_modules/nuxt-site-config/dist/runtime/server/composables/getSiteConfig';
export { getSiteIndexable } from '/home/lucy/git/Helltop/node_modules/.pnpm/nuxt-site-config@3.2.21_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightni_771a32fce14216811a05d2e4a52f4f33/node_modules/nuxt-site-config/dist/runtime/server/composables/getSiteIndexable';
export { updateSiteConfig } from '/home/lucy/git/Helltop/node_modules/.pnpm/nuxt-site-config@3.2.21_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightni_771a32fce14216811a05d2e4a52f4f33/node_modules/nuxt-site-config/dist/runtime/server/composables/updateSiteConfig';
export { useNitroOrigin } from '/home/lucy/git/Helltop/node_modules/.pnpm/nuxt-site-config@3.2.21_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightni_771a32fce14216811a05d2e4a52f4f33/node_modules/nuxt-site-config/dist/runtime/server/composables/useNitroOrigin';
export { useSiteConfig } from '/home/lucy/git/Helltop/node_modules/.pnpm/nuxt-site-config@3.2.21_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightni_771a32fce14216811a05d2e4a52f4f33/node_modules/nuxt-site-config/dist/runtime/server/composables/useSiteConfig';
export { createSitePathResolver, withSiteTrailingSlash, withSiteUrl } from '/home/lucy/git/Helltop/node_modules/.pnpm/nuxt-site-config@3.2.21_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightni_771a32fce14216811a05d2e4a52f4f33/node_modules/nuxt-site-config/dist/runtime/server/composables/utils';
export { generateRss } from '/home/lucy/git/Helltop/server/utils/generateRss';