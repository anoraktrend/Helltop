import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, removeResponseHeader, createError, getQuery as getQuery$1, readBody, getResponseStatus, useSession, getRequestProtocol, deleteCookie, setCookie, getRequestHost, readRawBody, getCookie, setHeader, getHeader, handleCors, getRequestIP, readMultipartFormData, getRouterParam, appendHeader, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener, getResponseStatusText } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/h3@1.15.6/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import path, { resolve as resolve$1, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { escapeHtml } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/@vue+shared@3.5.30/node_modules/@vue/shared/dist/shared.cjs.js';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, hasProtocol, withHttps, withTrailingSlash, decodePath, withLeadingSlash, withoutTrailingSlash, joinRelativeURL, withBase, parsePath, stringifyQuery, parseQuery, encodePath, stringifyParsedURL } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/ufo@1.6.3/node_modules/ufo/dist/index.mjs';
import defu, { defuFn, defu as defu$1, createDefu } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import { toRouteMatcher, createRouter } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import { XMLParser } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/fast-xml-parser@5.5.5/node_modules/fast-xml-parser/src/fxp.js';
import RSS from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/rss@1.2.2/node_modules/rss/lib/index.js';
import fs, { readFile } from 'node:fs/promises';
import MarkdownIt from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/markdown-it@14.1.1/node_modules/markdown-it/index.mjs';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/vue-bundle-renderer@2.2.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import destr, { destr as destr$1 } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { FetchError, createFetch, Headers as Headers$1 } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/node-mock-http@1.0.4/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/unstorage@1.17.4_db0@0.3.4_better-sqlite3@12.8.0__ioredis@5.10.0/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/unstorage@1.17.4_db0@0.3.4_better-sqlite3@12.8.0__ioredis@5.10.0/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47lru_45cache from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/unstorage@1.17.4_db0@0.3.4_better-sqlite3@12.8.0__ioredis@5.10.0/node_modules/unstorage/drivers/lru-cache.mjs';
import { digest, hash as hash$1 } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import { snakeCase, pascalCase } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs';
import consola, { createConsola, consola as consola$1 } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/youch-core@0.3.3/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/youch@4.1.0/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/source-map@0.7.6/node_modules/source-map/source-map.js';
import devalue from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+devalue@2.0.2/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { toValue, isVNode, isRef } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/vue@3.5.30_typescript@5.9.3/node_modules/vue/index.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify, uneval } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/devalue@5.6.4/node_modules/devalue/index.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/errx@0.1.0/node_modules/errx/dist/index.js';
import _wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+vite-builder@4.4.2_@babel+plugin-syntax-jsx@7.28.6_@babel+core@7.29.0__@types+nod_19109499b8060bcb35e67d90956491ef/node_modules/@nuxt/vite-builder/dist/fix-stacktrace.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$2, basename, isAbsolute } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/unhead@2.1.12/node_modules/unhead/dist/server.mjs';
import { renderToString } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/vue@3.5.30_typescript@5.9.3/node_modules/vue/server-renderer/index.mjs';
import { walkResolver } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/unhead@2.1.12/node_modules/unhead/dist/utils.mjs';
import { getIcons } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/@iconify+utils@3.1.0/node_modules/@iconify/utils/lib/index.js';
import { collections } from 'file:///home/lucy/git/Helltop/.nuxt/nuxt-icon-server-bundle.mjs';
import { getRandomValues } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/uncrypto@0.1.3/node_modules/uncrypto/dist/crypto.node.mjs';
import { minimatch } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/minimatch@10.2.4/node_modules/minimatch/dist/esm/index.js';
import { FilterXSS } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/xss@1.0.15/node_modules/xss/lib/index.js';
import localAdapter from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/db0@0.3.4_better-sqlite3@12.8.0/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file:///home/lucy/git/Helltop/node_modules/.pnpm/ipx@3.1.1_db0@0.3.4_better-sqlite3@12.8.0__ioredis@5.10.0/node_modules/ipx/dist/index.mjs';

const serverAssets = [{"baseName":"server","dir":"/home/lucy/git/Helltop/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

storage$1.mount('nuxt_studio_content', unstorage_47drivers_47fs({"driver":"fs","base":"/home/lucy/git/Helltop/content"}));
storage$1.mount('nuxt_studio_public_assets', unstorage_47drivers_47fs({"driver":"fs","base":"/home/lucy/git/Helltop/public"}));
storage$1.mount('#rate-limiter-storage', unstorage_47drivers_47lru_45cache({"driver":"lruCache"}));
storage$1.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/lucy/git/Helltop","watchOptions":{"ignored":[null]}}));
storage$1.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/lucy/git/Helltop/server","watchOptions":{"ignored":[null]}}));
storage$1.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/lucy/git/Helltop/.nuxt"}));
storage$1.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/lucy/git/Helltop/.nuxt/cache"}));
storage$1.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/home/lucy/git/Helltop/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {},
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "mode": "svg",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "lucide",
      "simple-icons",
      "catppuccin"
    ],
    "fetchTimeout": 1500
  },
  "ui": {
    "colors": {
      "primary": "green",
      "secondary": "blue",
      "success": "green",
      "info": "blue",
      "warning": "yellow",
      "error": "red",
      "neutral": "slate"
    },
    "icons": {
      "arrowDown": "i-lucide-arrow-down",
      "arrowLeft": "i-lucide-arrow-left",
      "arrowRight": "i-lucide-arrow-right",
      "arrowUp": "i-lucide-arrow-up",
      "caution": "i-lucide-circle-alert",
      "check": "i-lucide-check",
      "chevronDoubleLeft": "i-lucide-chevrons-left",
      "chevronDoubleRight": "i-lucide-chevrons-right",
      "chevronDown": "i-lucide-chevron-down",
      "chevronLeft": "i-lucide-chevron-left",
      "chevronRight": "i-lucide-chevron-right",
      "chevronUp": "i-lucide-chevron-up",
      "close": "i-lucide-x",
      "copy": "i-lucide-copy",
      "copyCheck": "i-lucide-copy-check",
      "dark": "i-lucide-moon",
      "drag": "i-lucide-grip-vertical",
      "ellipsis": "i-lucide-ellipsis",
      "error": "i-lucide-circle-x",
      "external": "i-lucide-arrow-up-right",
      "eye": "i-lucide-eye",
      "eyeOff": "i-lucide-eye-off",
      "file": "i-lucide-file",
      "folder": "i-lucide-folder",
      "folderOpen": "i-lucide-folder-open",
      "hash": "i-lucide-hash",
      "info": "i-lucide-info",
      "light": "i-lucide-sun",
      "loading": "i-lucide-loader-circle",
      "menu": "i-lucide-menu",
      "minus": "i-lucide-minus",
      "panelClose": "i-lucide-panel-left-close",
      "panelOpen": "i-lucide-panel-left-open",
      "plus": "i-lucide-plus",
      "reload": "i-lucide-rotate-ccw",
      "search": "i-lucide-search",
      "stop": "i-lucide-square",
      "success": "i-lucide-circle-check",
      "system": "i-lucide-monitor",
      "tip": "i-lucide-lightbulb",
      "upload": "i-lucide-upload",
      "warning": "i-lucide-triangle-alert"
    },
    "tv": {
      "twMergeConfig": {}
    }
  }
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/__nuxt_content/**": {
        "robots": false,
        "cache": false
      },
      "/__nuxt_content/content/sql_dump.txt": {
        "prerender": true
      },
      "/__nuxt_content/blog/sql_dump.txt": {
        "prerender": true
      },
      "/__nuxt_content/homepage/sql_dump.txt": {
        "prerender": true
      },
      "/_fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        },
        "cache": {
          "maxAge": 31536000
        }
      },
      "/__sitemap__/style.xsl": {
        "headers": {
          "Content-Type": "application/xslt+xml"
        }
      },
      "/sitemap.xml": {
        "headers": {
          "Content-Type": "text/xml; charset=UTF-8",
          "Cache-Control": "public, max-age=600, must-revalidate",
          "X-Sitemap-Prerendered": "2026-03-16T22:16:19.646Z"
        }
      },
      "/**": {
        "headers": {
          "Referrer-Policy": "no-referrer",
          "Strict-Transport-Security": "max-age=15552000; includeSubDomains",
          "X-Content-Type-Options": "nosniff",
          "X-Download-Options": "noopen",
          "X-Frame-Options": "SAMEORIGIN",
          "X-Permitted-Cross-Domain-Policies": "none",
          "X-XSS-Protection": "0"
        }
      },
      "/_scripts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        },
        "cache": {
          "maxAge": 31536000
        }
      },
      "/": {
        "prerender": true
      },
      "/blog": {
        "prerender": true
      },
      "/rss.xml": {
        "prerender": true
      },
      "/cover.jpg": {
        "prerender": true
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/__nuxt_content/content/sql_dump.txt/_payload.json": {
        "prerender": true
      },
      "/__nuxt_content/blog/sql_dump.txt/_payload.json": {
        "prerender": true
      },
      "/__nuxt_content/homepage/sql_dump.txt/_payload.json": {
        "prerender": true
      },
      "//_payload.json": {
        "prerender": true
      },
      "/blog/_payload.json": {
        "prerender": true
      },
      "/rss.xml/_payload.json": {
        "prerender": true
      },
      "/cover.jpg/_payload.json": {
        "prerender": true
      }
    }
  },
  "public": {
    "nuxt-scripts": {
      "version": "1.0.0-beta.1",
      "defaultScriptOptions": {
        "trigger": "onNuxtReady"
      },
      "googleStaticMapsProxy": ""
    },
    "studio": {
      "route": "/_studio",
      "dev": true,
      "development": {
        "server": ""
      },
      "ai": {
        "enabled": false,
        "context": {
          "collectionName": "studio",
          "contentFolder": ".studio"
        },
        "experimental": {
          "collectionContext": false
        }
      },
      "repository": {
        "provider": "github",
        "owner": "anoraktrend",
        "repo": "Helltop",
        "branch": "main",
        "rootDir": "",
        "private": true,
        "instanceUrl": "https://github.com"
      },
      "i18n": {
        "defaultLocale": "en"
      },
      "media": {
        "external": false,
        "publicUrl": "",
        "maxFileSize": 10485760,
        "allowedTypes": [
          "image/*",
          "video/*",
          "audio/*"
        ],
        "prefix": "studio"
      }
    },
    "mdc": {
      "components": {
        "prose": true,
        "map": {
          "accordion": "ProseAccordion",
          "accordion-item": "ProseAccordionItem",
          "badge": "ProseBadge",
          "callout": "ProseCallout",
          "card": "ProseCard",
          "card-group": "ProseCardGroup",
          "caution": "ProseCaution",
          "code-collapse": "ProseCodeCollapse",
          "code-group": "ProseCodeGroup",
          "code-icon": "ProseCodeIcon",
          "code-preview": "ProseCodePreview",
          "code-tree": "ProseCodeTree",
          "collapsible": "ProseCollapsible",
          "field": "ProseField",
          "field-group": "ProseFieldGroup",
          "icon": "ProseIcon",
          "kbd": "ProseKbd",
          "note": "ProseNote",
          "steps": "ProseSteps",
          "tabs": "ProseTabs",
          "tabs-item": "ProseTabsItem",
          "tip": "ProseTip",
          "warning": "ProseWarning"
        },
        "customElements": []
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      },
      "highlight": {
        "noApiRoute": true,
        "theme": {
          "light": "material-theme-lighter",
          "default": "github-light",
          "dark": "github-dark"
        },
        "highlighter": "shiki",
        "shikiEngine": "oniguruma",
        "langs": [
          "js",
          "jsx",
          "json",
          "ts",
          "tsx",
          "vue",
          "css",
          "html",
          "bash",
          "md",
          "mdc",
          "yaml"
        ]
      }
    },
    "content": {
      "wsUrl": ""
    }
  },
  "icon": {
    "serverKnownCssClasses": []
  },
  "nuxt-scripts": {
    "version": "1.0.0-beta.1",
    "googleStaticMapsProxy": ""
  },
  "studio": {
    "ai": {
      "apiKey": "",
      "context": {
        "title": "",
        "description": "",
        "style": "",
        "tone": "",
        "collection": {
          "name": "studio",
          "folder": ".studio"
        }
      },
      "experimental": ""
    },
    "auth": {
      "sessionSecret": "d41d8cd98f00b204e9800998ecf8427e",
      "github": {
        "clientId": "",
        "clientSecret": "",
        "instanceUrl": "https://github.com"
      },
      "gitlab": {
        "applicationId": "",
        "applicationSecret": "",
        "instanceUrl": "https://gitlab.com"
      },
      "google": {
        "clientId": "",
        "clientSecret": ""
      },
      "sso": {
        "serverUrl": "",
        "clientId": "",
        "clientSecret": ""
      }
    },
    "repository": {
      "provider": "github",
      "owner": "anoraktrend",
      "repo": "Helltop",
      "branch": "main",
      "rootDir": "",
      "private": true,
      "instanceUrl": "https://github.com"
    },
    "meta": {
      "components": {
        "include": [],
        "exclude": []
      }
    },
    "markdown": {
      "highlight": {
        "theme": {
          "dark": "github-dark",
          "default": "github-light"
        }
      }
    }
  },
  "sitemap": {
    "isI18nMapped": false,
    "sitemapName": "sitemap.xml",
    "isMultiSitemap": false,
    "excludeAppSources": [],
    "cacheMaxAgeSeconds": 0,
    "autoLastmod": false,
    "defaultSitemapsChunkSize": 1000,
    "minify": false,
    "sortEntries": true,
    "debug": false,
    "discoverImages": true,
    "discoverVideos": true,
    "sitemapsPathPrefix": "/__sitemap__/",
    "isNuxtContentDocumentDriven": false,
    "xsl": "/__sitemap__/style.xsl",
    "xslTips": true,
    "xslColumns": [
      {
        "label": "URL",
        "width": "50%"
      },
      {
        "label": "Images",
        "width": "25%",
        "select": "count(image:image)"
      },
      {
        "label": "Last Updated",
        "width": "25%",
        "select": "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"
      }
    ],
    "credits": true,
    "version": "7.6.0",
    "sitemaps": {
      "sitemap.xml": {
        "sitemapName": "sitemap.xml",
        "route": "sitemap.xml",
        "defaults": {},
        "include": [],
        "exclude": [
          "/_**",
          "/_nuxt/**",
          "/__nuxt_content/**"
        ],
        "includeAppSources": true
      }
    }
  },
  "private": {
    "basicAuth": false
  },
  "security": {
    "strict": false,
    "headers": {
      "crossOriginResourcePolicy": "same-origin",
      "crossOriginOpenerPolicy": "same-origin",
      "crossOriginEmbedderPolicy": "unsafe-none",
      "contentSecurityPolicy": {
        "base-uri": [
          "'none'"
        ],
        "font-src": [
          "'self'",
          "https:",
          "data:"
        ],
        "form-action": [
          "'self'"
        ],
        "frame-ancestors": [
          "'self'"
        ],
        "img-src": [
          "'self'",
          "data:"
        ],
        "object-src": [
          "'none'"
        ],
        "script-src-attr": [
          "'none'"
        ],
        "style-src": [
          "'self'",
          "https:",
          "'unsafe-inline'"
        ],
        "script-src": [
          "'self'",
          "https:",
          "'unsafe-inline'",
          "'strict-dynamic'",
          "'nonce-{{nonce}}'"
        ],
        "upgrade-insecure-requests": true
      },
      "originAgentCluster": "?1",
      "referrerPolicy": "no-referrer",
      "strictTransportSecurity": {
        "maxAge": 15552000,
        "includeSubdomains": true
      },
      "xContentTypeOptions": "nosniff",
      "xDNSPrefetchControl": "off",
      "xDownloadOptions": "noopen",
      "xFrameOptions": "SAMEORIGIN",
      "xPermittedCrossDomainPolicies": "none",
      "xXSSProtection": "0",
      "permissionsPolicy": {
        "camera": [],
        "display-capture": [],
        "fullscreen": [],
        "geolocation": [],
        "microphone": []
      }
    },
    "requestSizeLimiter": {
      "maxRequestSizeInBytes": 2000000,
      "maxUploadFileRequestInBytes": 8000000,
      "throwError": true
    },
    "rateLimiter": {
      "tokensPerInterval": 150,
      "interval": 300000,
      "headers": false,
      "driver": {
        "name": "lruCache"
      },
      "whiteList": "",
      "ipHeader": "",
      "throwError": true
    },
    "xssValidator": {
      "methods": [
        "GET",
        "POST"
      ],
      "throwError": true
    },
    "corsHandler": {
      "origin": "http://localhost:3000",
      "methods": [
        "GET",
        "HEAD",
        "PUT",
        "PATCH",
        "POST",
        "DELETE"
      ],
      "preflight": {
        "statusCode": 204
      }
    },
    "allowedMethodsRestricter": {
      "methods": "*",
      "throwError": true
    },
    "hidePoweredBy": true,
    "enabled": true,
    "csrf": false,
    "nonce": false,
    "removeLoggers": true,
    "ssg": {
      "meta": true,
      "hashScripts": true,
      "hashStyles": false,
      "nitroHeaders": true,
      "exportToPresets": true
    },
    "sri": false
  },
  "content": {
    "databaseVersion": "v3.5.0",
    "version": "3.12.0",
    "database": {
      "type": "sqlite",
      "filename": "./contents.sqlite"
    },
    "localDatabase": {
      "type": "sqlite",
      "filename": "/home/lucy/git/Helltop/.data/content/contents.sqlite"
    },
    "integrityCheck": true
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "name": "Helltop",
        "env": "development"
      },
      {
        "_context": "package.json",
        "_priority": -10,
        "name": "content-wind",
        "description": "A personal website theme powered by Nuxt Content, TailwindCSS, Iconify and Vue components."
      },
      {
        "_priority": -3,
        "_context": "nuxt-site-config:config",
        "url": "https://helltop.net",
        "cover": "/cover.jpg",
        "siteName": "helltop.net",
        "siteUrl": "https://helltop.net/",
        "socials": {
          "liberapay": {
            "user": "anoraktrend",
            "icon": "i-simple-icons-liberapay"
          },
          "github": {
            "repo": "anoraktrend/helltop",
            "icon": "i-simple-icons-github"
          },
          "codeberg": {
            "user": "anoraktrend",
            "icon": "i-simple-icons-codeberg"
          },
          "mastodon": {
            "user": "@lucyinchat",
            "host": "tech.lgbt",
            "icon": "i-simple-icons-mastodon"
          },
          "bluesky": {
            "user": "lucy.helltop.net",
            "icon": "i-simple-icons-bluesky"
          }
        }
      }
    ],
    "version": "3.2.21",
    "debug": false,
    "multiTenancy": []
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "/home/lucy/git/Helltop/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  {
    return _sharedAppConfig;
  }
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	// If the client specifically requests HTML, then avoid classifying as JSON.
	if (hasReqHeader(event, "accept", "text/html")) {
		return false;
	}
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return !!(value && typeof value === "string" && value.toLowerCase().includes(includes));
}

const iframeStorageBridge = (nonce) => `
(function () {
  const NONCE = ${JSON.stringify(nonce)};
  const memoryStore = Object.create(null);

  const post = (type, payload) => {
    window.parent.postMessage({ type, nonce: NONCE, ...payload }, '*');
  };

  const isValid = (data) => data && data.nonce === NONCE;

  const mockStorage = {
    getItem(key) {
      return Object.hasOwn(memoryStore, key)
        ? memoryStore[key]
        : null;
    },
    setItem(key, value) {
      const v = String(value);
      memoryStore[key] = v;
      post('storage-set', { key, value: v });
    },
    removeItem(key) {
      delete memoryStore[key];
      post('storage-remove', { key });
    },
    clear() {
      for (const key of Object.keys(memoryStore))
        delete memoryStore[key];
      post('storage-clear', {});
    },
    key(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] ?? null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };

  const defineLocalStorage = () => {
    try {
      Object.defineProperty(window, 'localStorage', {
        value: mockStorage,
        writable: false,
        configurable: true
      });
    } catch {
      window.localStorage = mockStorage;
    }
  };

  defineLocalStorage();

  window.addEventListener('message', (event) => {
    const data = event.data;
    if (!isValid(data) || data.type !== 'storage-sync-data') return;

    const incoming = data.data || {};
    for (const key of Object.keys(incoming))
      memoryStore[key] = incoming[key];

    if (typeof window.initTheme === 'function')
      window.initTheme();
    window.dispatchEvent(new Event('storage-ready'));
  });

  // Clipboard API is unavailable in data: URL iframe, so we use postMessage
  document.addEventListener('DOMContentLoaded', function() {
    window.copyErrorMessage = function(button) {
      post('clipboard-copy', { text: button.dataset.errorText });
      button.classList.add('copied');
      setTimeout(function() { button.classList.remove('copied'); }, 2000);
    };
  });

  post('storage-sync-request', {});
})();
`;
const parentStorageBridge = (nonce) => `
(function () {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;

  const NONCE = ${JSON.stringify(nonce)};
  const isValid = (data) => data && data.nonce === NONCE;

  // Handle clipboard copy from iframe
  window.addEventListener('message', function(e) {
    if (isValid(e) && e.data.type === 'clipboard-copy') {
      navigator.clipboard.writeText(e.data.text).catch(function() {});
    }
  });

  const collectLocalStorage = () => {
    const all = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k != null) all[k] = localStorage.getItem(k);
    }
    return all;
  };

  const attachWhenReady = () => {
    const root = host.shadowRoot;
    if (!root)
      return false;
    const iframe = root.getElementById('frame');
    if (!iframe || !iframe.contentWindow)
      return false;

    const handlers = {
      'storage-set': (d) => localStorage.setItem(d.key, d.value),
      'storage-remove': (d) => localStorage.removeItem(d.key),
      'storage-clear': () => localStorage.clear(),
      'storage-sync-request': () => {
        iframe.contentWindow.postMessage({
          type: 'storage-sync-data',
          data: collectLocalStorage(),
          nonce: NONCE
        }, '*');
      }
    };

    window.addEventListener('message', (event) => {
      const data = event.data;
      if (!isValid(data)) return;
      const fn = handlers[data.type];
      if (fn) fn(data);
    });

    return true;
  };

  if (attachWhenReady())
    return;

  const obs = new MutationObserver(() => {
    if (attachWhenReady())
      obs.disconnect();
  });

  obs.observe(host, { childList: true, subtree: true });
})();
`;
const errorCSS = `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  --error-pip-left: auto;
  --error-pip-top: auto;
  --error-pip-right: 5px;
  --error-pip-bottom: 5px;
  --error-pip-origin: bottom right;
  --app-preview-left: auto;
  --app-preview-top: auto;
  --app-preview-right: 5px;
  --app-preview-bottom: 5px;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: var(--error-pip-right);
  bottom: var(--error-pip-bottom);
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: var(--error-pip-origin);
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: var(--app-preview-right);
  bottom: var(--app-preview-bottom);
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 6px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#preview iframe {
  transform-origin: var(--error-pip-origin);
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: calc(var(--app-preview-right) - 3px);
  bottom: calc(var(--app-preview-bottom) - 3px);
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 0;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
#frame[inert] ~ #toggle {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: calc(var(--error-pip-right) - 3px);
  bottom: calc(var(--error-pip-bottom) - 3px);
  cursor: grab;
}
:host(.dragging) #frame[inert] ~ #toggle {
  cursor: grabbing;
}
#frame:not([inert]) ~ #toggle,
#frame:not([inert]) + #preview {
  cursor: grab;
}
:host(.dragging-preview) #frame:not([inert]) ~ #toggle,
:host(.dragging-preview) #frame:not([inert]) + #preview {
  cursor: grabbing;
}

#pip-close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
}
#pip-close:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}

#pip-restore {
  position: fixed;
  right: 16px;
  bottom: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 2px solid #00DC82;
  background: #111;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  z-index: calc(var(--z-base) + 2);
  cursor: grab;
}
#pip-restore:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}
:host(.dragging-restore) #pip-restore {
  cursor: grabbing;
}

#frame[hidden],
#toggle[hidden],
#preview[hidden],
#pip-restore[hidden],
#pip-close[hidden] {
  display: none !important;
}

@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`;
function webComponentScript(base64HTML, startMinimized) {
	return `
(function () {
  try {
    // =========================
    // Host + Shadow
    // =========================
    const host = document.querySelector('nuxt-error-overlay');
    if (!host)
      return;
    const shadow = host.attachShadow({ mode: 'open' });

    // =========================
    // DOM helpers
    // =========================
    const el = (tag) => document.createElement(tag);
    const on = (node, type, fn, opts) => node.addEventListener(type, fn, opts);
    const hide = (node, v) => node.toggleAttribute('hidden', !!v);
    const setVar = (name, value) => host.style.setProperty(name, value);
    const unsetVar = (name) => host.style.removeProperty(name);

    // =========================
    // Create DOM
    // =========================
    const style = el('style');
    style.textContent = ${JSON.stringify(errorCSS)};

    const iframe = el('iframe');
    iframe.id = 'frame';
    iframe.src = 'data:text/html;base64,${base64HTML}';
    iframe.title = 'Detailed error stack trace';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-top-navigation-by-user-activation');

    const preview = el('div');
    preview.id = 'preview';

    const toggle = el('div');
    toggle.id = 'toggle';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    toggle.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';

    const liveRegion = el('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';

    const pipCloseButton = el('button');
    pipCloseButton.id = 'pip-close';
    pipCloseButton.setAttribute('type', 'button');
    pipCloseButton.setAttribute('aria-label', 'Hide error preview overlay');
    pipCloseButton.innerHTML = '&times;';
    pipCloseButton.hidden = true;
    toggle.appendChild(pipCloseButton);

    const pipRestoreButton = el('button');
    pipRestoreButton.id = 'pip-restore';
    pipRestoreButton.setAttribute('type', 'button');
    pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
    pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
    pipRestoreButton.hidden = true;

    // Order matters: #frame + #preview adjacency
    shadow.appendChild(style);
    shadow.appendChild(liveRegion);
    shadow.appendChild(iframe);
    shadow.appendChild(preview);
    shadow.appendChild(toggle);
    shadow.appendChild(pipRestoreButton);

    // =========================
    // Constants / keys
    // =========================
    const POS_KEYS = {
      position: 'nuxt-error-overlay:position',
      hiddenPretty: 'nuxt-error-overlay:error-pip:hidden',
      hiddenPreview: 'nuxt-error-overlay:app-preview:hidden'
    };

    const CSS_VARS = {
      pip: {
        left: '--error-pip-left',
        top: '--error-pip-top',
        right: '--error-pip-right',
        bottom: '--error-pip-bottom'
      },
      preview: {
        left: '--app-preview-left',
        top: '--app-preview-top',
        right: '--app-preview-right',
        bottom: '--app-preview-bottom'
      }
    };

    const MIN_GAP = 5;
    const DRAG_THRESHOLD = 2;

    // =========================
    // Local storage safe access + state
    // =========================
    let storageReady = true;
    let isPrettyHidden = false;
    let isPreviewHidden = false;

    const safeGet = (k) => {
      try {
        return localStorage.getItem(k);
      } catch {
        return null;
      }
    };

    const safeSet = (k, v) => {
      if (!storageReady) 
        return;
      try {
        localStorage.setItem(k, v);
      } catch {}
    };

    // =========================
    // Sizing helpers
    // =========================
    const vvSize = () => {
      const v = window.visualViewport;
      return v ? { w: v.width, h: v.height } : { w: window.innerWidth, h: window.innerHeight };
    };

    const previewSize = () => {
      const styles = getComputedStyle(host);
      const w = parseFloat(styles.getPropertyValue('--preview-width')) || 240;
      const h = parseFloat(styles.getPropertyValue('--preview-height')) || 180;
      return { w, h };
    };

    const sizeForTarget = (target) => {
      if (!target)
        return previewSize();
      const rect = target.getBoundingClientRect();
      if (rect.width && rect.height)
        return { w: rect.width, h: rect.height };
      return previewSize();
    };

    // =========================
    // Dock model + offset/alignment calculations
    // =========================
    const dock = { edge: null, offset: null, align: null, gap: null };

    const maxOffsetFor = (edge, size) => {
      const vv = vvSize();
      if (edge === 'left' || edge === 'right')
        return Math.max(MIN_GAP, vv.h - size.h - MIN_GAP);
      return Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
    };

    const clampOffset = (edge, value, size) => {
      const max = maxOffsetFor(edge, size);
      return Math.min(Math.max(value, MIN_GAP), max);
    };

    const updateDockAlignment = (size) => {
      if (!dock.edge || dock.offset == null)
        return;
      const max = maxOffsetFor(dock.edge, size);
      if (dock.offset <= max / 2) {
        dock.align = 'start';
        dock.gap = dock.offset;
      } else {
        dock.align = 'end';
        dock.gap = Math.max(0, max - dock.offset);
      }
    };

    const appliedOffsetFor = (size) => {
      if (!dock.edge || dock.offset == null)
        return null;
      const max = maxOffsetFor(dock.edge, size);

      if (dock.align === 'end' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, max - dock.gap, size);
      }
      if (dock.align === 'start' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, dock.gap, size);
      }
      return clampOffset(dock.edge, dock.offset, size);
    };

    const nearestEdgeAt = (x, y) => {
      const { w, h } = vvSize();
      const d = { left: x, right: w - x, top: y, bottom: h - y };
      return Object.keys(d).reduce((a, b) => (d[a] < d[b] ? a : b));
    };

    const cornerDefaultDock = () => {
      const vv = vvSize();
      const size = previewSize();
      const offset = Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
      return { edge: 'bottom', offset };
    };

    const currentTransformOrigin = () => {
      if (!dock.edge) return null;
      if (dock.edge === 'left' || dock.edge === 'top')
        return 'top left';
      if (dock.edge === 'right')
        return 'top right';
      return 'bottom left';
    };

    // =========================
    // Persist / load dock
    // =========================
    const loadDock = () => {
      const raw = safeGet(POS_KEYS.position);
      if (!raw)
        return;
      try {
        const parsed = JSON.parse(raw);
        const { edge, offset, align, gap } = parsed || {};
        if (!['left', 'right', 'top', 'bottom'].includes(edge))
          return;
        if (typeof offset !== 'number')
          return;

        dock.edge = edge;
        dock.offset = clampOffset(edge, offset, previewSize());
        dock.align = align === 'start' || align === 'end' ? align : null;
        dock.gap = typeof gap === 'number' ? gap : null;

        if (!dock.align || dock.gap == null)
          updateDockAlignment(previewSize());
      } catch {}
    };

    const persistDock = () => {
      if (!dock.edge || dock.offset == null)
        return; 
      safeSet(POS_KEYS.position, JSON.stringify({
        edge: dock.edge,
        offset: dock.offset,
        align: dock.align,
        gap: dock.gap
      }));
    };

    // =========================
    // Apply dock
    // =========================
    const dockToVars = (vars) => ({
      set: (side, v) => host.style.setProperty(vars[side], v),
      clear: (side) => host.style.removeProperty(vars[side])
    });

    const dockToEl = (node) => ({
      set: (side, v) => { node.style[side] = v; },
      clear: (side) => { node.style[side] = ''; }
    });

    const applyDock = (target, size, opts) => {
      if (!dock.edge || dock.offset == null) {
        target.clear('left');
        target.clear('top');
        target.clear('right');
        target.clear('bottom');
        return;
      }

      target.set('left', 'auto');
      target.set('top', 'auto');
      target.set('right', 'auto');
      target.set('bottom', 'auto');

      const applied = appliedOffsetFor(size);

      if (dock.edge === 'left') {
        target.set('left', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'right') {
        target.set('right', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'top') {
        target.set('top', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      } else {
        target.set('bottom', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      }

      if (!opts || opts.persist !== false)
        persistDock();
    };

    const applyDockAll = (opts) => {
      applyDock(dockToVars(CSS_VARS.pip), previewSize(), opts);
      applyDock(dockToVars(CSS_VARS.preview), previewSize(), opts);
      applyDock(dockToEl(pipRestoreButton), sizeForTarget(pipRestoreButton), opts);
    };

    const repaintToDock = () => {
      if (!dock.edge || dock.offset == null)
        return;
      const origin = currentTransformOrigin();
      if (origin)
        setVar('--error-pip-origin', origin);
      else 
        unsetVar('--error-pip-origin');
      applyDockAll({ persist: false });
    };

    // =========================
    // Hidden state + UI
    // =========================
    const loadHidden = () => {
      const rawPretty = safeGet(POS_KEYS.hiddenPretty);
      if (rawPretty != null)
        isPrettyHidden = rawPretty === '1' || rawPretty === 'true';
      const rawPreview = safeGet(POS_KEYS.hiddenPreview);
      if (rawPreview != null)
        isPreviewHidden = rawPreview === '1' || rawPreview === 'true';
    };

    const setPrettyHidden = (v) => {
      isPrettyHidden = !!v;
      safeSet(POS_KEYS.hiddenPretty, isPrettyHidden ? '1' : '0');
      updateUI();
    };

    const setPreviewHidden = (v) => {
      isPreviewHidden = !!v;
      safeSet(POS_KEYS.hiddenPreview, isPreviewHidden ? '1' : '0');
      updateUI();
    };

    const isMinimized = () => iframe.hasAttribute('inert');

    const setMinimized = (v) => {
      if (v) {
        iframe.setAttribute('inert', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        iframe.removeAttribute('inert');
        toggle.setAttribute('aria-expanded', 'true');
      }
    };

    const setRestoreLabel = (kind) => {
      if (kind === 'pretty') {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
      } else {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error page</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error page');
      }
    };

    const updateUI = () => {
      const minimized = isMinimized();
      const showPiP = minimized && !isPrettyHidden;
      const showPreview = !minimized && !isPreviewHidden;
      const pipHiddenByUser = minimized && isPrettyHidden;
      const previewHiddenByUser = !minimized && isPreviewHidden;
      const showToggle = minimized ? showPiP : showPreview;
      const showRestore = pipHiddenByUser || previewHiddenByUser;

      hide(iframe, pipHiddenByUser);
      hide(preview, !showPreview);
      hide(toggle, !showToggle);
      hide(pipCloseButton, !showToggle);
      hide(pipRestoreButton, !showRestore);

      pipCloseButton.setAttribute('aria-label', minimized ? 'Hide error overlay' : 'Hide error page preview');

      if (pipHiddenByUser)
        setRestoreLabel('pretty');
      else if (previewHiddenByUser)
        setRestoreLabel('preview');

      host.classList.toggle('pip-hidden', isPrettyHidden);
      host.classList.toggle('preview-hidden', isPreviewHidden);
    };

    // =========================
    // Preview snapshot
    // =========================
    const updatePreview = () => {
      try {
        let previewIframe = preview.querySelector('iframe');
        if (!previewIframe) {
          previewIframe = el('iframe');
          previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
          previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
          preview.appendChild(previewIframe);
        }

        const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
        const cleanedHTML = document.documentElement.outerHTML
          .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
          .replace(/<script[^>]*>.*?<\\/script>/gs, '');

        const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(doctype + cleanedHTML);
        iframeDoc.close();
      } catch (err) {
        console.error('Failed to update preview:', err);
      }
    };

    // =========================
    // View toggling
    // =========================
    const toggleView = () => {
      if (isMinimized()) {
        updatePreview();
        setMinimized(false);
        liveRegion.textContent = 'Showing detailed error view';
        setTimeout(() => { 
          try { 
            iframe.contentWindow.focus();
          } catch {}
        }, 100);
      } else {
        setMinimized(true);
        liveRegion.textContent = 'Showing error page';
        repaintToDock();
        void iframe.offsetWidth;
      }
      updateUI();
    };

    // =========================
    // Dragging (unified, rAF throttled)
    // =========================
    let drag = null;
    let rafId = null;
    let suppressToggleClick = false;
    let suppressRestoreClick = false;

    const beginDrag = (e) => {
      if (drag) 
        return;

      if (!dock.edge || dock.offset == null) {
        const def = cornerDefaultDock();
        dock.edge = def.edge;
        dock.offset = def.offset;
        updateDockAlignment(previewSize());
      }

      const isRestoreTarget = e.currentTarget === pipRestoreButton;

      drag = {
        kind: isRestoreTarget ? 'restore' : (isMinimized() ? 'pip' : 'preview'),
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        lastX: e.clientX,
        lastY: e.clientY,
        moved: false,
        target: e.currentTarget
      };

      drag.target.setPointerCapture(e.pointerId);

      if (drag.kind === 'restore')
        host.classList.add('dragging-restore');
      else 
        host.classList.add(drag.kind === 'pip' ? 'dragging' : 'dragging-preview');

      e.preventDefault();
    };

    const moveDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      
      const dx = drag.lastX - drag.startX;
      const dy = drag.lastY - drag.startY;

      if (!drag.moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
        drag.moved = true;
      }

      if (!drag.moved)
        return;
      if (rafId)
        return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const edge = nearestEdgeAt(drag.lastX, drag.lastY);
        const size = sizeForTarget(drag.target);

        let offset;
        if (edge === 'left' || edge === 'right') {
          const top = drag.lastY - (size.h / 2);
          offset = clampOffset(edge, Math.round(top), size);
        } else {
          const left = drag.lastX - (size.w / 2);
          offset = clampOffset(edge, Math.round(left), size);
        }

        dock.edge = edge;
        dock.offset = offset;
        updateDockAlignment(size);

        const origin = currentTransformOrigin();
        setVar('--error-pip-origin', origin || 'bottom right');

        applyDockAll({ persist: false });
      });
    };

    const endDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      const endedKind = drag.kind;
      drag.target.releasePointerCapture(e.pointerId);

      if (endedKind === 'restore')
        host.classList.remove('dragging-restore');
      else 
        host.classList.remove(endedKind === 'pip' ? 'dragging' : 'dragging-preview');

      const didMove = drag.moved;
      drag = null;

      if (didMove) {
        persistDock();
        if (endedKind === 'restore')
          suppressRestoreClick = true;
        else 
          suppressToggleClick = true;
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const bindDragTarget = (node) => {
      on(node, 'pointerdown', beginDrag);
      on(node, 'pointermove', moveDrag);
      on(node, 'pointerup', endDrag);
      on(node, 'pointercancel', endDrag);
    };

    bindDragTarget(toggle);
    bindDragTarget(pipRestoreButton);

    // =========================
    // Events (toggle / close / restore)
    // =========================
    on(toggle, 'click', (e) => {
      if (suppressToggleClick) {
        e.preventDefault();
        suppressToggleClick = false;
        return;
      }
      toggleView();
    });

    on(toggle, 'keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleView();
      }
    });

    on(pipCloseButton, 'click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized())
        setPrettyHidden(true);
      else
        setPreviewHidden(true);
    });

    on(pipCloseButton, 'pointerdown', (e) => {
      e.stopPropagation();
    });

    on(pipRestoreButton, 'click', (e) => {
      if (suppressRestoreClick) {
        e.preventDefault();
        suppressRestoreClick = false;
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized()) 
        setPrettyHidden(false);
      else 
        setPreviewHidden(false);
    });

    // =========================
    // Lifecycle: load / sync / repaint
    // =========================
    const loadState = () => {
      loadDock();
      loadHidden();

      if (isPrettyHidden && !isMinimized())
        setMinimized(true);

      updateUI();
      repaintToDock();
    };

    loadState();

    on(window, 'storage-ready', () => {
      storageReady = true;
      loadState();
    });

    const onViewportChange = () => repaintToDock();

    on(window, 'resize', onViewportChange);

    if (window.visualViewport) {
      on(window.visualViewport, 'resize', onViewportChange);
      on(window.visualViewport, 'scroll', onViewportChange);
    }

    // initial preview
    setTimeout(updatePreview, 100);

    // initial minimized option
    if (${startMinimized}) {
      setMinimized(true);
      repaintToDock();
      void iframe.offsetWidth;
      updateUI();
    }
  } catch (err) {
    console.error('Failed to initialize Nuxt error overlay:', err);
  }
})();
`;
}
function generateErrorOverlayHTML(html, options) {
	const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
	const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
	const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
	return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) {
		// let Nitro handle JSON errors
		return;
	}
	// invoke default Nitro error handler (which will log appropriately if required)
	const defaultRes = await defaultHandler(error, event, { json: true });
	// let Nitro handle redirect if appropriate
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
		// normalize to string format expected by nuxt `error.vue`
		defaultRes.body.stack = defaultRes.body.stack.join("\n");
	}
	const errorObject = defaultRes.body;
	// remove proto/hostname/port from URL
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	// add default server message (keep sanitized for unhandled errors)
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	// we will be rendering this error internally so we can pass along the error.data safely
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	// Access request headers
	const reqHeaders = getRequestHeaders(event);
	// Detect to avoid recursion in SSR rendering of errors
	const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
	// HTML response (via SSR)
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) {
		return;
	}
	// Fallback to static rendered error page
	if (!res) {
		const { template } = await Promise.resolve().then(function () { return error500; });
		{
			// TODO: Support `message` in template
			errorObject.description = errorObject.message;
		}
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	if (!globalThis._importMeta_.test && typeof html === "string") {
		const prettyResponse = await defaultHandler(error, event, { json: false });
		if (typeof prettyResponse.body === "string") {
			return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= status && status < 500 })}</body>`));
		}
	}
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve$1(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script$1 = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _V2BwBeaBOKDwgEp5BFe0Lw3FaTUP4q2IrDqkMFyeag = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script$1}<\/script>`);
  });
});

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined" && !config.trailingSlash)
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(String(config.url), { acceptRelative: true, strict: false }))
    config.url = withHttps(String(config.url));
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0) {
      return () => {
      };
    }
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2]?.split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length === 0) {
      return () => {
      };
    }
    stack.push(entry);
    return () => {
      const idx = stack.indexOf(entry);
      if (idx !== -1)
        stack.splice(idx, 1);
    };
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    siteConfig._priority = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined" && val !== "") {
          siteConfig[k] = val;
          if (typeof stack[o]._priority !== "undefined" && stack[o]._priority !== -1) {
            siteConfig._priority[key] = stack[o]._priority;
          }
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function envSiteConfig(env = {}) {
  return Object.fromEntries(Object.entries(env).filter(([k]) => k.startsWith("NUXT_SITE_") || k.startsWith("NUXT_PUBLIC_SITE_")).map(([k, v]) => [
    k.replace(/^NUXT_(PUBLIC_)?SITE_/, "").split("_").map((s, i) => i === 0 ? s.toLowerCase() : s[0]?.toUpperCase() + s.slice(1).toLowerCase()).join(""),
    v
  ]));
}

const logger$2 = /* @__PURE__ */ createConsola({
  defaults: {
    tag: "nuxt-site-config"
  }
});

function getSiteConfig$1(e, _options) {
  if (!e.context._initedSiteConfig) {
    logger$2.warn("Site config has not been initialized yet. If you're trying to access site config in a server middleware then this not yet supported. See https://github.com/harlan-zw/nuxt-seo/issues/397");
  }
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu$1(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

const __1PCBQN2ObbRaRnmBazuy7KFnaegFqnA_mqXwjB4Qs = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    event.path;
    const noSSR = !!process.env.NUXT_NO_SSR || event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (false);
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(getSiteConfig$1(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

const rootDir = "/home/lucy/git/Helltop";

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico"}],"style":[],"script":[],"noscript":[]};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt","class":"isolate"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : undefined,
	URL: (data) => data instanceof URL ? data.toString() : undefined
};
const asyncContext = getContext("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
const _9UXNblxFCpf7x2WOtkSP27ijXELsq2dYRZD88FQl2M = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
			return;
		}
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) {
				continue;
			}
			if (EXCLUDE_TRACE_RE.test(entry.source)) {
				continue;
			}
			filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			filename,
			stack: trace
		};
		// retain log to be include in the next render
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	// Pass any logs to the client
	nitroApp.hooks.hook("render:html", (htmlContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		try {
			const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
			htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
		} catch (e) {
			const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
			console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload.`);
		}
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"nuxt-color-mode\")||\"system\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"light\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _15DJ_UPj05PrI_BCCcMe_XYkMKlTazdvaOdpqpNM0 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const defuReplaceArray = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) || Array.isArray(value)) {
    obj[key] = value;
    return true;
  }
});

const nitroAppSecurityOptions = {};
function getAppSecurityOptions() {
  return nitroAppSecurityOptions;
}
function resolveSecurityRules(event) {
  if (!event.context.security) {
    event.context.security = {};
  }
  if (!event.context.security.rules) {
    const router = createRouter({ routes: structuredClone(nitroAppSecurityOptions) });
    const matcher = toRouteMatcher(router);
    const eventPathNoQuery = event.path.split("?")[0];
    const matches = eventPathNoQuery ? matcher.matchAll(eventPathNoQuery) : [];
    const rules = defuReplaceArray({}, ...matches.reverse());
    event.context.security.rules = rules;
  }
  return event.context.security.rules;
}
function resolveSecurityRoute(event) {
  if (!event.context.security) {
    event.context.security = {};
  }
  if (!event.context.security.route) {
    const routeNames = Object.fromEntries(Object.entries(nitroAppSecurityOptions).map(([name]) => [name, { name }]));
    const router = createRouter({ routes: routeNames });
    const eventPathNoQuery = event.path.split("?")[0];
    const match = eventPathNoQuery ? router.lookup(eventPathNoQuery) : void 0;
    const route = match?.name ?? "";
    event.context.security.route = route;
  }
  return event.context.security.route;
}

const KEYS_TO_NAMES = {
  contentSecurityPolicy: "Content-Security-Policy",
  crossOriginEmbedderPolicy: "Cross-Origin-Embedder-Policy",
  crossOriginOpenerPolicy: "Cross-Origin-Opener-Policy",
  crossOriginResourcePolicy: "Cross-Origin-Resource-Policy",
  originAgentCluster: "Origin-Agent-Cluster",
  referrerPolicy: "Referrer-Policy",
  strictTransportSecurity: "Strict-Transport-Security",
  xContentTypeOptions: "X-Content-Type-Options",
  xDNSPrefetchControl: "X-DNS-Prefetch-Control",
  xDownloadOptions: "X-Download-Options",
  xFrameOptions: "X-Frame-Options",
  xPermittedCrossDomainPolicies: "X-Permitted-Cross-Domain-Policies",
  xXSSProtection: "X-XSS-Protection",
  permissionsPolicy: "Permissions-Policy"
};
const NAMES_TO_KEYS = Object.fromEntries(Object.entries(KEYS_TO_NAMES).map(([key, name]) => [name, key]));
function getNameFromKey(key) {
  return KEYS_TO_NAMES[key];
}
function getKeyFromName(headerName) {
  const [, key] = Object.entries(NAMES_TO_KEYS).find(([name]) => name.toLowerCase() === headerName.toLowerCase()) || [];
  return key;
}
function headerStringFromObject(optionKey, optionValue) {
  if (optionValue === false) {
    return "";
  }
  if (optionKey === "contentSecurityPolicy") {
    const policies = optionValue;
    return Object.entries(policies).filter(([, value]) => value !== false).map(([directive, sources]) => {
      if (directive === "upgrade-insecure-requests") {
        return "upgrade-insecure-requests;";
      } else {
        const stringifiedSources = typeof sources === "string" ? sources : sources.map((source) => source.trim()).join(" ");
        return `${directive} ${stringifiedSources};`;
      }
    }).join(" ");
  } else if (optionKey === "strictTransportSecurity") {
    const policies = optionValue;
    return [
      `max-age=${policies.maxAge}`,
      policies.includeSubdomains && "includeSubDomains",
      policies.preload && "preload"
    ].filter(Boolean).join("; ");
  } else if (optionKey === "permissionsPolicy") {
    const policies = optionValue;
    return Object.entries(policies).filter(([, value]) => value !== false).map(([directive, sources]) => {
      if (typeof sources === "string") {
        return `${directive}=${sources}`;
      } else {
        return `${directive}=(${sources.join(" ")})`;
      }
    }).join(", ");
  } else {
    return optionValue;
  }
}
function headerObjectFromString(optionKey, headerValue) {
  if (!headerValue) {
    return false;
  }
  if (optionKey === "contentSecurityPolicy") {
    const directives = headerValue.split(";").map((directive) => directive.trim()).filter((directive) => directive);
    const objectForm = {};
    for (const directive of directives) {
      const [type, ...sources] = directive.split(" ").map((token) => token.trim());
      if (type === "upgrade-insecure-requests") {
        objectForm[type] = true;
      } else {
        objectForm[type] = sources.join(" ");
      }
    }
    return objectForm;
  } else if (optionKey === "strictTransportSecurity") {
    const directives = headerValue.split(";").map((directive) => directive.trim()).filter((directive) => directive);
    const objectForm = {};
    for (const directive of directives) {
      const [type, value] = directive.split("=").map((token) => token.trim());
      if (type === "max-age") {
        objectForm.maxAge = Number(value);
      } else if (type === "includeSubdomains" || type === "preload") {
        objectForm[type] = true;
      }
    }
    return objectForm;
  } else if (optionKey === "permissionsPolicy") {
    const directives = headerValue.split(",").map((directive) => directive.trim()).filter((directive) => directive);
    const objectForm = {};
    for (const directive of directives) {
      const [type, value] = directive.split("=").map((token) => token.trim());
      objectForm[type] = value;
    }
    return objectForm;
  } else {
    return headerValue;
  }
}
function standardToSecurity(standardHeaders) {
  if (!standardHeaders) {
    return void 0;
  }
  const standardHeadersAsObject = {};
  Object.entries(standardHeaders).forEach(([headerName, headerValue]) => {
    const optionKey = getKeyFromName(headerName);
    if (optionKey) {
      if (typeof headerValue === "string") {
        const objectValue = headerObjectFromString(optionKey, headerValue);
        standardHeadersAsObject[optionKey] = objectValue;
      } else {
        standardHeadersAsObject[optionKey] = headerValue;
      }
    }
  });
  if (Object.keys(standardHeadersAsObject).length === 0) {
    return void 0;
  }
  return standardHeadersAsObject;
}
function backwardsCompatibleSecurity(securityHeaders) {
  if (!securityHeaders) {
    return void 0;
  }
  const securityHeadersAsObject = {};
  Object.entries(securityHeaders).forEach(([key, value]) => {
    const optionKey = key;
    if ((optionKey === "contentSecurityPolicy" || optionKey === "permissionsPolicy" || optionKey === "strictTransportSecurity") && typeof value === "string") {
      const objectValue = headerObjectFromString(optionKey, value);
      securityHeadersAsObject[optionKey] = objectValue;
    } else if (value === "") {
      securityHeadersAsObject[optionKey] = false;
    } else {
      securityHeadersAsObject[optionKey] = value;
    }
  });
  return securityHeadersAsObject;
}

const _2OuMflHrJUG_yRktNkDwDubbswGUYt5P4tNd_irNEM = defineNitroPlugin(async (nitroApp) => {
  const appSecurityOptions = getAppSecurityOptions();
  const runtimeConfig = useRuntimeConfig();
  for (const route in runtimeConfig.nitro.routeRules) {
    const rule = runtimeConfig.nitro.routeRules[route];
    if (!rule) continue;
    const { headers: headers2 } = rule;
    const securityHeaders2 = standardToSecurity(headers2);
    if (securityHeaders2) {
      appSecurityOptions[route] = { headers: securityHeaders2 };
    }
  }
  const securityOptions = runtimeConfig.security;
  const { headers } = securityOptions;
  const securityHeaders = backwardsCompatibleSecurity(headers);
  appSecurityOptions["/**"] = defuReplaceArray(
    { headers: securityHeaders },
    securityOptions,
    appSecurityOptions["/**"]
  );
  for (const route in runtimeConfig.nitro.routeRules) {
    const rule = runtimeConfig.nitro.routeRules[route];
    if (!rule) continue;
    const { security } = rule;
    if (security) {
      const { headers: headers2 } = security;
      const securityHeaders2 = backwardsCompatibleSecurity(headers2);
      appSecurityOptions[route] = defuReplaceArray(
        { headers: securityHeaders2 },
        security,
        appSecurityOptions[route]
      );
    }
  }
  nitroApp.hooks.hook("nuxt-security:headers", ({ route, headers: headers2 }) => {
    appSecurityOptions[route] = defuReplaceArray(
      { headers: headers2 },
      appSecurityOptions[route]
    );
  });
  nitroApp.hooks.hook("nuxt-security:ready", async () => {
    await nitroApp.hooks.callHook("nuxt-security:routeRules", appSecurityOptions);
  });
  await nitroApp.hooks.callHook("nuxt-security:ready");
});

const sriHashes = {"/_nuxt/builds/meta/dev.json":"sha384-eSJt/IkdK3Sxbrtvl1IcErgI/8mIoClDm7/I3Lb9NAGAHmnLKvElrPcpcWLC/2qB","/_nuxt/builds/latest.json":"sha384-PoQr5HUAyVPQRhXMsaMQRJQkVYZKtBMaMmpILCQqqjJAdj+0t+ctsbL1ydKpXoRY","/cover.jpg":"sha384-FUPRJ/qGXNMDXwRM+vr9COHIxTZ/szkVrLzqO+XBjg77J4QrqF+VQgV1JDiPjQqu","/favicon.ico":"sha384-BSy2B2dijvuCFfuWfM5iuXPjPBYkwd2Zof/6Kyj8aUlSaxNpOVZfikOaKh2EtMKO","/rss.xml":"sha384-90De0nO1wLO8vrwSPtLn79jq/Xs1BvDymTvIRWGKyN0vQtuJAgg5+yfZWmRlGAoP"};

const SCRIPT_RE$1 = /<script((?=[^>]+\bsrc="([^"]+)")(?![^>]+\bintegrity="[^"]+")[^>]+)(?:\/>|><\/script>)/g;
const LINK_RE$1 = /<link((?=[^>]+\brel="(?:stylesheet|preload|modulepreload)")(?=[^>]+\bhref="([^"]+)")(?![^>]+\bintegrity="[\w\-+/=]+")[^>]+)>/g;
const __gwydc28avI2I1LcfogDoDhh579CjIExv5Kg22lBUM = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    const rules = resolveSecurityRules(event);
    if (!rules.enabled || !rules.sri) {
      return;
    }
    const sections = ["body", "bodyAppend", "bodyPrepend", "head"];
    for (const section of sections) {
      html[section] = html[section].map((element) => {
        if (typeof element !== "string") {
          return element;
        }
        element = element.replace(SCRIPT_RE$1, (match, rest, src) => {
          const hash = sriHashes[src];
          if (hash) {
            const integrityScript = `<script integrity="${hash}"${rest}><\/script>`;
            return integrityScript;
          } else {
            return match;
          }
        });
        element = element.replace(LINK_RE$1, (match, rest, href) => {
          const hash = sriHashes[href];
          if (hash) {
            const integrityLink = `<link integrity="${hash}"${rest}>`;
            return integrityLink;
          } else {
            return match;
          }
        });
        return element;
      });
    }
  });
});

function generateRandomNonce() {
  const array = new Uint8Array(18);
  crypto.getRandomValues(array);
  const nonce = btoa(String.fromCharCode(...array));
  return nonce;
}

const _5_52Ejf0I7rlgn3oE2E4htOVPROzjHNDk15flYnAEA = defineNitroPlugin((nitroApp) => {
  {
    return;
  }
});

const LINK_RE = /<link\b([^>]*?>)/gi;
const NONCE_RE = /nonce="[^"]+"/i;
const SCRIPT_RE = /<script\b([^>]*?>)/gi;
const STYLE_RE = /<style\b([^>]*?>)/gi;
const QUOTE_MASK_RE = /"((?:[^"\\]|\\.)*)"/g;
const QUOTE_RESTORE_RE = /__QUOTE_PLACEHOLDER_(\d+)__/g;
function injectNonceToTags(element, nonce) {
  if (typeof element !== "string") {
    return element;
  }
  const quotes = [];
  let maskedElement = element.replace(QUOTE_MASK_RE, (match) => {
    quotes.push(match);
    return `__QUOTE_PLACEHOLDER_${quotes.length - 1}__`;
  });
  maskedElement = maskedElement.replace(LINK_RE, (match, rest) => {
    if (NONCE_RE.test(rest)) {
      return match.replace(NONCE_RE, `nonce="${nonce}"`);
    }
    return `<link nonce="${nonce}"` + rest;
  });
  maskedElement = maskedElement.replace(SCRIPT_RE, (match, rest) => {
    return `<script nonce="${nonce}"` + rest;
  });
  maskedElement = maskedElement.replace(STYLE_RE, (match, rest) => {
    return `<style nonce="${nonce}"` + rest;
  });
  const restoredHtml = maskedElement.replace(QUOTE_RESTORE_RE, (match, index) => {
    return quotes[parseInt(index, 10)];
  });
  return restoredHtml;
}
const _kV0i1VXmzakjepAawF3XexhNYyNWA4eY0vIDJTf5aIc = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("request", (event) => {
    if (event.context.security?.nonce) {
      return;
    }
    const rules = resolveSecurityRules(event);
    if (rules.enabled && rules.nonce && true) {
      const nonce = generateRandomNonce();
      event.context.security.nonce = nonce;
    }
  });
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    const rules = resolveSecurityRules(event);
    if (!rules.enabled || !rules.headers || !rules.headers.contentSecurityPolicy || !rules.nonce) {
      return;
    }
    const nonce = event.context.security.nonce;
    const sections = ["body", "bodyAppend", "bodyPrepend", "head"];
    for (const section of sections) {
      html[section] = html[section].map((element) => injectNonceToTags(element, nonce));
    }
    {
      html.head.push(
        `<meta property="csp-nonce" nonce="${nonce}">`
      );
    }
  });
});

const _OUWY0CsRIXheFYRqXT5ZCwr7dSc6QAW1Sgb6uNygYbk = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (response, { event }) => {
    if (response.island) {
      return;
    }
    const rules = resolveSecurityRules(event);
    if (rules.enabled && rules.headers) {
      const headers = rules.headers;
      if (headers.contentSecurityPolicy) {
        const csp = headers.contentSecurityPolicy;
        const nonce = event.context.security?.nonce;
        const scriptHashes = event.context.security?.hashes?.script;
        const styleHashes = event.context.security?.hashes?.style;
        headers.contentSecurityPolicy = updateCspVariables(csp, nonce, scriptHashes, styleHashes);
      }
    }
  });
});
function updateCspVariables(csp, nonce, scriptHashes, styleHashes) {
  const generatedCsp = Object.fromEntries(Object.entries(csp).map(([directive, value]) => {
    if (typeof value === "boolean") {
      return [directive, value];
    }
    const sources = typeof value === "string" ? value.split(" ").map((token) => token.trim()).filter((token) => token) : value;
    const modifiedSources = sources.filter((source) => {
      if (source.startsWith("'nonce-") && source !== "'nonce-{{nonce}}'") {
        console.warn("[nuxt-security] removing static nonce from CSP header");
        return false;
      }
      return true;
    }).map((source) => {
      if (source === "'nonce-{{nonce}}'") {
        return nonce ? `'nonce-${nonce}'` : "";
      } else {
        return source;
      }
    }).filter((source) => source);
    if (["script-src", "script-src-elem"].includes(directive) && scriptHashes) {
      modifiedSources.push(...scriptHashes);
    }
    if (["style-src", "style-src-elem"].includes(directive) && styleHashes) {
      modifiedSources.push(...styleHashes);
    }
    return [directive, modifiedSources];
  }));
  return generatedCsp;
}

const _d3Ttr254l51WvKuV4YedDYV3fiuTOrgBREUdkPLGJ0 = defineNitroPlugin((nitroApp) => {
  {
    return;
  }
});

const _DKF_tvSHhyoNWuTiTb1tWxCO5QmJcIgyUL7XM8iv2k = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:response", (response, { event }) => {
    const rules = resolveSecurityRules(event);
    if (rules.enabled && rules.headers) {
      const headers = rules.headers;
      Object.entries(headers).forEach(([header, value]) => {
        const headerName = getNameFromKey(header);
        if (value === false) {
          const { headers: standardHeaders } = getRouteRules(event);
          const standardHeaderValue = standardHeaders?.[headerName];
          const currentHeaderValue = getResponseHeader(event, headerName);
          if (standardHeaderValue === currentHeaderValue) {
            removeResponseHeader(event, headerName);
          }
        } else {
          const headerValue = headerStringFromObject(header, value);
          setResponseHeader(event, headerName, headerValue);
        }
      });
    }
  });
});

const _75XLNZeah5eK0MwZaHqdBXFhepMhYetm3Me7Fnw3I = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("beforeResponse", (event) => {
    const rules = resolveSecurityRules(event);
    if (rules.enabled && rules.hidePoweredBy && !event.node.res.headersSent) {
      removeResponseHeader(event, "x-powered-by");
    }
  });
});

const _WoccBSc87jQAOJstdcFpIUsTRLRKlH6XgSTGViw2jE8 = defineNitroPlugin(async (nitroApp) => {
  {
    const prerenderedHeaders = await useStorage("assets:nuxt-security").getItem("headers.json") || {};
    nitroApp.hooks.hook("beforeResponse", (event) => {
      const rules = resolveSecurityRules(event);
      if (rules.enabled && rules.ssg && rules.ssg.nitroHeaders) {
        const path = event.path.split("?")[0];
        if (path && prerenderedHeaders[path]) {
          setResponseHeaders(event, prerenderedHeaders[path]);
        }
      }
    });
  }
});

const plugins = [
  _V2BwBeaBOKDwgEp5BFe0Lw3FaTUP4q2IrDqkMFyeag,
__1PCBQN2ObbRaRnmBazuy7KFnaegFqnA_mqXwjB4Qs,
_9UXNblxFCpf7x2WOtkSP27ijXELsq2dYRZD88FQl2M,
_15DJ_UPj05PrI_BCCcMe_XYkMKlTazdvaOdpqpNM0,
_2OuMflHrJUG_yRktNkDwDubbswGUYt5P4tNd_irNEM,
__gwydc28avI2I1LcfogDoDhh579CjIExv5Kg22lBUM,
_5_52Ejf0I7rlgn3oE2E4htOVPROzjHNDk15flYnAEA,
_kV0i1VXmzakjepAawF3XexhNYyNWA4eY0vIDJTf5aIc,
_OUWY0CsRIXheFYRqXT5ZCwr7dSc6QAW1Sgb6uNygYbk,
_d3Ttr254l51WvKuV4YedDYV3fiuTOrgBREUdkPLGJ0,
_DKF_tvSHhyoNWuTiTb1tWxCO5QmJcIgyUL7XM8iv2k,
_75XLNZeah5eK0MwZaHqdBXFhepMhYetm3Me7Fnw3I,
_WoccBSc87jQAOJstdcFpIUsTRLRKlH6XgSTGViw2jE8,
_wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$2(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_fonts/":{"maxAge":31536000},"/_scripts/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _r7PvHQ = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

const NUXT_PAYLOAD_INLINE = false;

const payloadCache = useStorage("cache:nuxt:payload") ;

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
};

function createSSRContext(event) {
	const ssrContext = {
		url: event.path,
		event,
		runtimeConfig: useRuntimeConfig(event),
		noSSR: event.context.nuxt?.noSSR || (false),
		head: createHead(unheadOptions),
		error: false,
		nuxt: undefined,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: new Set()
	};
	return ssrContext;
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

function buildAssetsDir() {
	// TODO: support passing event to `useRuntimeConfig`
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	// TODO: support passing event to `useRuntimeConfig`
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
// @ts-expect-error file will be produced after app build
const getServerEntry = () => import('file:///home/lucy/git/Helltop/.nuxt//dist/server/server.mjs').then((r) => r.default || r);
// @ts-expect-error file will be produced after app build
const getClientManifest = () => import('file:///home/lucy/git/Helltop/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
// -- SSR Renderer --
const getSSRRenderer = lazyCachedFunction(async () => {
	// Load server bundle
	const createSSRApp = await getServerEntry();
	if (!createSSRApp) {
		throw new Error("Server bundle is not available");
	}
	// Load precomputed dependencies
	const precomputed = undefined ;
	// Create renderer
	const renderer = createRenderer(createSSRApp, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: renderToString$1,
		buildAssetsURL
	});
	async function renderToString$1(input, context) {
		const html = await renderToString(input, context);
		// In development with vite-node, the manifest is on-demand and will be available after rendering
		// eslint-disable-next-line no-restricted-globals
		if (process.env.NUXT_VITE_NODE_OPTIONS) {
			renderer.rendererContext.updateManifest(await getClientManifest());
		}
		return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
	}
	return renderer;
});
// -- SPA Renderer --
const getSPARenderer = lazyCachedFunction(async () => {
	const precomputed = undefined ;
	// @ts-expect-error virtual file
	const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
		{
			const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
			const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
			const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
			const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
			return appTemplate + loaderTemplate;
		}
	});
	// Create SPA renderer and cache the result for all requests
	const renderer = createRenderer(() => () => {}, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: () => spaTemplate,
		buildAssetsURL
	});
	const result = await renderer.renderToString({});
	const renderToString = (ssrContext) => {
		const config = useRuntimeConfig(ssrContext.event);
		ssrContext.modules ||= new Set();
		ssrContext.payload.serverRendered = false;
		ssrContext.config = {
			public: config.public,
			app: config.app
		};
		return Promise.resolve(result);
	};
	return {
		rendererContext: renderer.rendererContext,
		renderToString
	};
});
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) {
			res = fn().catch((err) => {
				res = null;
				throw err;
			});
		}
		return res;
	};
}
function getRenderer(ssrContext) {
	return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
// @ts-expect-error file will be produced after app build
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = new Set();
	for (const mod of usedModules) {
		if (mod in styleMap && styleMap[mod]) {
			for (const style of await styleMap[mod]()) {
				inlinedStyles.add(style);
			}
		}
	}
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

// @ts-expect-error virtual file
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
/**
* remove the root node from the html body
*/
function getServerComponentHTML(body) {
	const match = body.match(ROOT_NODE_REGEX);
	return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
		return undefined;
	}
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
		response[name] = {
			...slot,
			fallback: ssrContext.teleports?.[`island-fallback=${name}`]
		};
	}
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
		return undefined;
	}
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		// remove teleport anchor to avoid hydration issues
		const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) {
				continue;
			}
			slots[slot] = value;
		}
	}
	return slots;
}
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) {
		return html;
	}
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
		}
	}
	return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const handler$1 = defineEventHandler(async (event) => {
	const nitroApp = useNitroApp();
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(event),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	// Render app
	const renderer = await getSSRRenderer();
	const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	// Handle errors
	if (ssrContext.payload?.error) {
		throw ssrContext.payload.error;
	}
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		for (const resource of Object.values(styles)) {
			// Do not add links to resources that are inlined (vite v5+)
			if ("inline" in getQuery(resource.file)) {
				continue;
			}
			// Add CSS links in <head> for CSS files
			// - in dev mode when rendering an island and the file has scoped styles and is not a page
			if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
				link.push({
					rel: "stylesheet",
					href: renderer.rendererContext.buildAssetsURL(resource.file),
					crossorigin: ""
				});
			}
		}
		if (link.length) {
			ssrContext.head.push({ link }, { mode: "server" });
		}
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
			const currentValue = islandHead[key];
			if (Array.isArray(currentValue)) {
				currentValue.push(...value);
			} else {
				islandHead[key] = value;
			}
		}
	}
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
});
const ISLAND_PATH_PREFIX = "/__nuxt_island/";
const VALID_COMPONENT_NAME_RE = /^[a-z][\w.-]*$/i;
async function getIslandContext(event) {
	let url = event.path || "";
	if (!url.startsWith(ISLAND_PATH_PREFIX)) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island request path"
		});
	}
	const componentParts = url.substring(ISLAND_PATH_PREFIX.length).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : undefined;
	const componentName = componentParts.join("_");
	if (!componentName || !VALID_COMPONENT_NAME_RE.test(componentName)) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island component name"
		});
	}
	const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
	// Only extract known context fields to prevent arbitrary data injection
	return {
		url: typeof context?.url === "string" ? context.url : "/",
		id: hashId,
		name: componentName,
		props: destr$1(context.props) || {},
		slots: {},
		components: {}
	};
}

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const r=Object.create(null),i=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),o=new Proxy(r,{get(e,s){return i()[s]??r[s]},has(e,s){const E=i();return s in E||s in r},set(e,s,E){const B=i(true);return B[s]=E,true},deleteProperty(e,s){if(!s)return  false;const E=i(true);return delete E[s],true},ownKeys(){const e=i(true);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",f=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:true}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:true}],["CLOUDFLARE_WORKERS","WORKERS_CI",{ci:true}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:false}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:false}],["VERCEL","VERCEL_ENV",{ci:false}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:false}],["CODESANDBOX","CODESANDBOX_HOST",{ci:false}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:true}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"],["DENO-DEPLOY","DENO_DEPLOYMENT_ID"],["FIREBASE_APP_HOSTING","FIREBASE_APP_HOSTING",{ci:true}]];function b(){if(globalThis.process?.env)for(const e of f){const s=e[1]||e[0];if(globalThis.process?.env[s])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:false}:{name:"",ci:false}}const l=b();l.name;function n$1(e){return e?e!=="false":false}const I=globalThis.process?.platform||"",T=n$1(o.CI)||l.ci!==false,R=n$1(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n$1(o.DEBUG);const a=t==="test"||n$1(o.TEST),h=t==="dev"||t==="development";n$1(o.MINIMAL)||T||a||!R;const A=/^win/i.test(I);!n$1(o.NO_COLOR)&&(n$1(o.FORCE_COLOR)||(R||A)&&o.TERM!=="dumb"||T);const C=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(C?.split(".")[0])||null;const W=globalThis.process||Object.create(null),_={versions:{}};new Proxy(W,{get(e,s){if(s==="env")return o;if(s in e)return e[s];if(s in _)return _[s]}});const O=globalThis.process?.release?.name==="node",c=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,L=!!globalThis.fastly,S=!!globalThis.Netlify,u=!!globalThis.EdgeRuntime,N=globalThis.navigator?.userAgent==="Cloudflare-Workers",F=[[S,"netlify"],[u,"edge-light"],[N,"workerd"],[L,"fastly"],[D,"deno"],[c,"bun"],[O,"node"]];function G(){const e=F.find(s=>s[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

const checksums = {
  "content": "v3.5.0--uk2q1hXeYSt1umIm8K7SCuCyg-SnUQFYPROlGNvaTvE",
  "blog": "v3.5.0--ad3DtKXS0JNVUiGBHqCq2OJTV5sg0M7mg-A4A4Fcivc",
  "homepage": "v3.5.0---tyd_G5sY6okuIoRlx3BqQXedHr1lNrCD-t3zqn2JPI"
};
const checksumsStructure = {
  "content": "uk2q1hXeYSt1umIm8K7SCuCyg-SnUQFYPROlGNvaTvE",
  "blog": "z3BBFYcK_rppwLBoTW3uTreqdqFc4UWhlyoT0F-NHA4",
  "homepage": "uPWLCQB3G7UyFuOA9cvvgQFk69tRUssO1k95-vnP0xc"
};
const tables = {
  "content": "_content_content",
  "blog": "_content_blog",
  "homepage": "_content_homepage",
  "info": "_content_info"
};
const contentManifest = {
  "content": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "layout": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "blog": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "author": "string",
      "body": "json",
      "category": "string",
      "date": "string",
      "description": "string",
      "draft": "boolean",
      "extension": "string",
      "layout": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "slug": "string",
      "stem": "string"
    }
  },
  "homepage": {
    "type": "data",
    "fields": {
      "id": "string",
      "extension": "string",
      "footer": "json",
      "hero": "json",
      "meta": "json",
      "sections": "json",
      "stem": "string"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
};

const buildGroup = (group, type) => {
  const conditions = group._conditions;
  return conditions.length > 0 ? `(${conditions.join(` ${type} `)})` : "";
};
const collectionQueryGroup = (collection) => {
  const conditions = [];
  const query = {
    // @ts-expect-error -- internal
    _conditions: conditions,
    where(field, operator, value) {
      let condition;
      switch (operator.toUpperCase()) {
        case "IN":
        case "NOT IN":
          if (Array.isArray(value)) {
            const values = value.map((val) => singleQuote(val)).join(", ");
            condition = `"${String(field)}" ${operator.toUpperCase()} (${values})`;
          } else {
            throw new TypeError(`Value for ${operator} must be an array`);
          }
          break;
        case "BETWEEN":
        case "NOT BETWEEN":
          if (Array.isArray(value) && value.length === 2) {
            condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value[0])} AND ${singleQuote(value[1])}`;
          } else {
            throw new Error(`Value for ${operator} must be an array with two elements`);
          }
          break;
        case "IS NULL":
        case "IS NOT NULL":
          condition = `"${String(field)}" ${operator.toUpperCase()}`;
          break;
        case "LIKE":
        case "NOT LIKE":
          condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value)}`;
          break;
        default:
          condition = `"${String(field)}" ${operator} ${singleQuote(typeof value === "boolean" ? Number(value) : value)}`;
      }
      conditions.push(`${condition}`);
      return query;
    },
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "OR"));
      return query;
    }
  };
  return query;
};
const collectionQueryBuilder = (collection, fetch) => {
  const params = {
    conditions: [],
    selectedFields: [],
    offset: 0,
    limit: 0,
    orderBy: [],
    // Count query
    count: {
      field: "",
      distinct: false
    }
  };
  const query = {
    // @ts-expect-error -- internal
    __params: params,
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "OR"));
      return query;
    },
    path(path) {
      return query.where("path", "=", withoutTrailingSlash(path));
    },
    skip(skip) {
      params.offset = skip;
      return query;
    },
    where(field, operator, value) {
      query.andWhere((group) => group.where(String(field), operator, value));
      return query;
    },
    limit(limit) {
      params.limit = limit;
      return query;
    },
    select(...fields) {
      if (fields.length) {
        params.selectedFields.push(...fields);
      }
      return query;
    },
    order(field, direction) {
      params.orderBy.push(`"${String(field)}" ${direction}`);
      return query;
    },
    async all() {
      return fetch(collection, buildQuery()).then((res) => res || []);
    },
    async first() {
      return fetch(collection, buildQuery({ limit: 1 })).then((res) => res[0] || null);
    },
    async count(field = "*", distinct = false) {
      return fetch(collection, buildQuery({
        count: { field: String(field), distinct }
      })).then((m) => m[0].count);
    }
  };
  function buildQuery(opts = {}) {
    let query2 = "SELECT ";
    if (opts?.count) {
      query2 += `COUNT(${opts.count.distinct ? "DISTINCT " : ""}${opts.count.field}) as count`;
    } else {
      const fields = Array.from(new Set(params.selectedFields));
      query2 += fields.length > 0 ? fields.map((f) => `"${String(f)}"`).join(", ") : "*";
    }
    query2 += ` FROM ${tables[String(collection)]}`;
    if (params.conditions.length > 0) {
      query2 += ` WHERE ${params.conditions.join(" AND ")}`;
    }
    if (params.orderBy.length > 0) {
      query2 += ` ORDER BY ${params.orderBy.join(", ")}`;
    } else {
      query2 += ` ORDER BY stem ASC`;
    }
    const limit = opts?.limit || params.limit;
    if (limit > 0) {
      if (params.offset > 0) {
        query2 += ` LIMIT ${limit} OFFSET ${params.offset}`;
      } else {
        query2 += ` LIMIT ${limit}`;
      }
    }
    return query2;
  }
  return query;
};
function singleQuote(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}

async function fetchContent(event, collection, path, options) {
  const headers = event ? getRequestHeaders(event) : {};
  headers["accept-encoding"] = void 0;
  const url = `/__nuxt_content/${collection}/${path}`;
  const fetchOptions = {
    ...options,
    headers: {
      ...headers,
      ...options.headers
    },
    query: { v: checksums[String(collection)], t: Date.now()  }
  };
  return event ? await event.$fetch(url, fetchOptions) : await $fetch(url, fetchOptions);
}
async function fetchDatabase(event, collection) {
  return fetchContent(event, collection, "sql_dump.txt", {
    responseType: "text",
    headers: {
      "content-type": "text/plain"
    }
  });
}
async function fetchQuery(event, collection, sql) {
  return fetchContent(event, collection, "query", {
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    body: {
      sql
    }
  });
}

const queryCollection = (event, collection) => {
  return collectionQueryBuilder(collection, (collection2, sql) => fetchQuery(event, collection2, sql));
};

const requiredUserFields = ["name", "email"];
async function setStudioUserSession(event, userSession) {
  const config = useRuntimeConfig().public;
  const provider = config.studio.repository.provider;
  const accessToken = provider === "github" ? process.env.STUDIO_GITHUB_TOKEN : provider === "gitlab" ? process.env.STUDIO_GITLAB_TOKEN : null;
  if (!accessToken) {
    throw createError({
      statusCode: 500,
      statusMessage: `Missing access token for ${provider} Git provider`
    });
  }
  await setInternalStudioUserSession(event, {
    ...userSession,
    provider,
    accessToken
  });
}
async function setInternalStudioUserSession(event, user) {
  const missingFields = requiredUserFields.filter((key) => !user[key]);
  if (missingFields.length > 0) {
    throw createError({
      statusCode: 400,
      statusMessage: `Missing required Studio user fields: ${missingFields.join(", ")}`
    });
  }
  const session = await useSession(event, {
    name: "studio-session",
    password: useRuntimeConfig(event).studio?.auth?.sessionSecret,
    cookie: {
      // Use secure cookies over HTTPS, required for locally testing purposes
      secure: getRequestProtocol(event) === "https",
      path: "/"
    }
  });
  const payload = defu$1({
    user: {
      ...user
    }
  }, session.data);
  await session.update(payload);
  setCookie(event, "studio-session-check", "true", {
    httpOnly: false,
    path: "/",
    // Keep behavior consistent with the session cookie and OAuth cookies
    secure: getRequestProtocol(event) === "https",
    sameSite: "lax"
  });
  await useNitroApp().hooks.callHook("studio:auth:login", { user, event });
  return {
    ...payload,
    id: session.id
  };
}
async function clearStudioUserSession(event) {
  const session = await useSession(event, {
    name: "studio-session",
    password: useRuntimeConfig(event).studio?.auth?.sessionSecret,
    cookie: {
      // Use secure cookies over HTTPS, required for locally testing purposes
      secure: getRequestProtocol(event) === "https",
      path: "/"
    }
  });
  const user = session.data.user;
  await session.clear();
  deleteCookie(event, "studio-session-check", { path: "/" });
  if (user) {
    await useNitroApp().hooks.callHook("studio:auth:logout", { user, event });
  }
  return { loggedOut: true };
}

function isLocalhostHost(host) {
  if (!host || host.startsWith("localhost") || host.startsWith("127.") || host.startsWith("0.0.0.0"))
    return true;
  const hostname = host.startsWith("[") ? host.slice(0, host.indexOf("]") + 1) : host;
  return hostname === "[::1]" || hostname === "::1" || hostname === "[::]" || hostname === "::";
}
function extractHostname(host) {
  if (host.startsWith("[")) {
    const close = host.indexOf("]");
    return close !== -1 ? host.slice(0, close + 1) : host;
  }
  const colonCount = host.split(":").length - 1;
  return colonCount === 1 ? host.slice(0, host.indexOf(":")) : host;
}
function splitHostPort(host) {
  if (host.startsWith("[")) {
    const close = host.indexOf("]");
    const hostname = close !== -1 ? host.slice(0, close + 1) : host;
    const port = close !== -1 && host[close + 1] === ":" ? host.slice(close + 2) : "";
    const normalized = hostname === "[::1]" || hostname === "[::]" ? "localhost" : hostname;
    return { host: normalized, port };
  }
  if (host === "0.0.0.0" || host.startsWith("0.0.0.0:")) {
    const i = host.indexOf(":");
    return { host: "localhost", port: i !== -1 ? host.slice(i + 1) : "" };
  }
  const colonCount = host.split(":").length - 1;
  if (colonCount === 1) {
    const i = host.indexOf(":");
    return { host: host.slice(0, i), port: host.slice(i + 1) };
  }
  if (colonCount > 1) {
    const normalized = host === "::1" || host === "::" ? "localhost" : `[${host}]`;
    return { host: normalized, port: "" };
  }
  return { host, port: "" };
}
function getNitroOrigin$1(ctx = {}) {
  const isDev = ctx.isDev ?? h;
  const isPrerender = ctx.isPrerender ?? !!o.prerender;
  let host = "";
  let port = "";
  let protocol = o.NITRO_SSL_CERT && o.NITRO_SSL_KEY ? "https" : "http";
  if (isDev || isPrerender) {
    const devEnv = o.__NUXT_DEV__ || o.NUXT_VITE_NODE_OPTIONS;
    if (devEnv) {
      const parsed = JSON.parse(devEnv);
      const origin = parsed.proxy?.url || parsed.baseURL?.replace("/__nuxt_vite_node__", "");
      host = origin.replace(/^https?:\/\//, "").replace(/\/$/, "");
      protocol = origin.startsWith("https") ? "https" : "http";
    }
  }
  if (isDev && isLocalhostHost(host) && ctx.requestHost) {
    const reqHost = extractHostname(ctx.requestHost);
    if (reqHost && !isLocalhostHost(reqHost)) {
      host = ctx.requestHost;
      protocol = ctx.requestProtocol || protocol;
    }
  }
  if (!host && ctx.requestHost) {
    host = ctx.requestHost;
    protocol = ctx.requestProtocol || protocol;
  }
  if (!host) {
    host = o.NITRO_HOST || o.HOST || "";
    if (isDev)
      port = o.NITRO_PORT || o.PORT || "3000";
  }
  const split = splitHostPort(host);
  host = split.host;
  if (split.port)
    port = split.port;
  host = o.NUXT_SITE_HOST_OVERRIDE || host;
  port = o.NUXT_SITE_PORT_OVERRIDE || port;
  if (host.startsWith("http://") || host.startsWith("https://")) {
    protocol = host.startsWith("https://") ? "https" : "http";
    host = host.replace(/^https?:\/\//, "");
  } else if (!isDev && (!host || !isLocalhostHost(host))) {
    protocol = "https";
  }
  return `${protocol}://${host}${port ? `:${port}` : ""}/`;
}

function getNitroOrigin(e) {
  return getNitroOrigin$1({
    isDev: true,
    isPrerender: false,
    requestHost: e ? getRequestHost(e, { xForwardedHost: true }) : void 0,
    requestProtocol: e ? getRequestProtocol(e, { xForwardedProto: true }) : void 0
  });
}

function useSiteConfig(e, _options) {
  return getSiteConfig$1(e, _options);
}

function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
const fileExtensions = [
  // Images
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "webp",
  "svg",
  "ico",
  // Documents
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx",
  "txt",
  "md",
  "markdown",
  // Archives
  "zip",
  "rar",
  "7z",
  "tar",
  "gz",
  // Audio
  "mp3",
  "wav",
  "flac",
  "ogg",
  "opus",
  "m4a",
  "aac",
  "midi",
  "mid",
  // Video
  "mp4",
  "avi",
  "mkv",
  "mov",
  "wmv",
  "flv",
  "webm",
  // Web
  "html",
  "css",
  "js",
  "json",
  "xml",
  "tsx",
  "jsx",
  "ts",
  "vue",
  "svelte",
  "xsl",
  "rss",
  "atom",
  // Programming
  "php",
  "py",
  "rb",
  "java",
  "c",
  "cpp",
  "h",
  "go",
  // Data formats
  "csv",
  "tsv",
  "sql",
  "yaml",
  "yml",
  // Fonts
  "woff",
  "woff2",
  "ttf",
  "otf",
  "eot",
  // Executables/Binaries
  "exe",
  "msi",
  "apk",
  "ipa",
  "dmg",
  "iso",
  "bin",
  // Scripts/Config
  "bat",
  "cmd",
  "sh",
  "env",
  "htaccess",
  "conf",
  "toml",
  "ini",
  // Package formats
  "deb",
  "rpm",
  "jar",
  "war",
  // E-books
  "epub",
  "mobi",
  // Common temporary/backup files
  "log",
  "tmp",
  "bak",
  "old",
  "sav"
];
function isPathFile(path) {
  const lastSegment = path.split("/").pop();
  const ext = (lastSegment || path).match(/\.[0-9a-z]+$/i)?.[0];
  return ext && fileExtensions.includes(ext.replace(".", ""));
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = getSiteConfig$1(e);
  const nitroOrigin = getNitroOrigin(e);
  const nuxtBase = useRuntimeConfig(e).app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || false ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

function parseFrontmatter(content) {
  const res = {};
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return res;
  const block = m[1];
  const lines = block.split(/\r?\n/);
  for (const line of lines) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (!val) continue;
    if (val === "true") val = "true";
    else if (val === "false") val = "false";
    else if (val.startsWith("[") && val.endsWith("]")) {
      try {
        res[key] = JSON.parse(val);
      } catch {
        res[key] = val.slice(1, -1).split(",").map((s) => s.trim());
      }
    } else if (val.includes(",") && !val.includes("http")) {
      res[key] = val.split(",").map((s) => s.trim());
    } else {
      res[key] = val;
    }
  }
  return res;
}
function stripFrontmatter(content) {
  return content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
}
async function getSiteConfig() {
  const configs = ["app.config.ts", "nuxt.config.ts"];
  for (const config of configs) {
    try {
      const configPath = path.join(process.cwd(), config);
      const configContent = await fs.readFile(configPath, "utf8");
      const siteNameMatch = configContent.match(/siteName:\s*['"]([^'"]+)['"]/);
      const siteUrlMatch = configContent.match(/siteUrl:\s*['"]([^'"]+)['"]/);
      if (siteNameMatch || siteUrlMatch) {
        return {
          siteName: (siteNameMatch == null ? void 0 : siteNameMatch[1]) || "Helltop Blog",
          siteUrl: (siteUrlMatch == null ? void 0 : siteUrlMatch[1]) || ""
        };
      }
    } catch {
    }
  }
  return {
    siteName: "Helltop Blog",
    siteUrl: ""
  };
}
async function generateRss() {
  const siteConfig = await getSiteConfig();
  const envUrl = process.env.NUXT_PUBLIC_SITE_URL || process.env.SITE_URL || "";
  let baseUrl = envUrl || siteConfig.siteUrl || "";
  if (!baseUrl) baseUrl = "https://helltop.net/blog/";
  const feed = new RSS({
    title: siteConfig.siteName || "Blog",
    description: "Latest blog posts",
    feed_url: `${baseUrl}/rss.xml`,
    site_url: baseUrl,
    language: "en",
    pubDate: /* @__PURE__ */ new Date(),
    custom_namespaces: {
      atom: "http://www.w3.org/2005/Atom"
    },
    custom_elements: [
      { "atom:link": { _attr: { href: `${baseUrl}/rss.xml`, rel: "self", type: "application/rss+xml" } } },
      { lastBuildDate: (/* @__PURE__ */ new Date()).toUTCString() }
    ]
  });
  const posts = [];
  try {
    const contentDir = path.join(process.cwd(), "content", "blog");
    const entries = await fs.readdir(contentDir);
    const mdFiles = entries.filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
    for (const file of mdFiles) {
      const full = path.join(contentDir, file);
      const txt = await fs.readFile(full, "utf8");
      const fm = parseFrontmatter(txt);
      const slug = file.replace(/\.mdx?$/, "");
      posts.push({
        title: fm.title,
        description: fm.description || fm.excerpt || "",
        date: fm.date,
        draft: fm.draft,
        tags: fm.tags,
        _path: `/blog/${slug}`,
        slug,
        author: fm.author,
        content_raw: stripFrontmatter(txt)
      });
    }
    posts.sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });
    console.log(`generateRss: loaded ${posts.length} posts from content/blog`);
  } catch (err) {
    console.warn("RSS: failed to read content files:", err);
  }
  const md = new MarkdownIt({ html: true });
  for (const post of posts) {
    if (post.draft) continue;
    const postPath = post._path || (post.slug ? `/${post.slug}` : "/");
    const postDate = post.date || post.publishedAt || post.createdAt;
    const contentHtml = post.content_raw ? md.render(post.content_raw) : "";
    const description = post.description || "";
    const item = {
      title: post.title || "Untitled",
      description,
      url: `${baseUrl}${postPath}`,
      guid: `${baseUrl}${postPath}`,
      date: postDate ? new Date(postDate) : /* @__PURE__ */ new Date(),
      categories: Array.isArray(post.tags) ? post.tags : post.tag ? [post.tag] : [],
      author: post.author || siteConfig.siteName || ""
    };
    if (contentHtml) {
      item.custom_elements = [
        { "content:encoded": { _cdata: contentHtml } }
      ];
    }
    feed.item(item);
  }
  const xml = feed.xml({ indent: true });
  const publicDir = path.join(process.cwd(), "public");
  await fs.mkdir(publicDir, { recursive: true });
  await fs.writeFile(path.join(publicDir, "rss.xml"), xml, "utf8");
  console.log("Generated rss.xml in public/");
  return xml;
}

const warnOnceSet = /* @__PURE__ */ new Set();
const DEFAULT_ENDPOINT = "https://api.iconify.design";
const _ZR4FCM = defineCachedEventHandler(async (event) => {
  const url = getRequestURL(event);
  if (!url)
    return createError({ status: 400, message: "Invalid icon request" });
  const options = useAppConfig().icon;
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint || DEFAULT_ENDPOINT;
  const icons = url.searchParams.get("icons")?.split(",");
  if (collection) {
    if (icons?.length) {
      const data = getIcons(
        collection,
        icons
      );
      consola$1.debug(`[Icon] serving ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
      return data;
    }
  } else {
    if (collectionName && !warnOnceSet.has(collectionName) && apiEndPoint === DEFAULT_ENDPOINT) {
      consola$1.warn([
        `[Icon] Collection \`${collectionName}\` is not found locally`,
        `We suggest to install it via \`npm i -D @iconify-json/${collectionName}\` to provide the best end-user experience.`
      ].join("\n"));
      warnOnceSet.add(collectionName);
    }
  }
  if (options.fallbackToApi === true || options.fallbackToApi === "server-only") {
    const apiUrl = new URL("./" + basename(url.pathname) + url.search, apiEndPoint);
    consola$1.debug(`[Icon] fetching ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError({ status: 400, message: "Invalid icon request" });
    }
    try {
      const data = await $fetch(apiUrl.href);
      return data;
    } catch (e) {
      consola$1.error(e);
      if (e.status === 404)
        return createError({ status: 404 });
      else
        return createError({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(getQuery$1(event).icons || "");
    return `${collection}_${icons.split(",")[0]}_${icons.length}_${hash$1(icons)}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const _b8nazP = eventHandler(async (event) => {
  const path = event.path.replace("/__nuxt_studio/dev/content/", "");
  const key = path.replace(/\//g, ":").replace(/^content:/, "");
  const storage = useStorage("nuxt_studio_content");
  if (event.method === "GET") {
    const isRaw = getRequestHeader(event, "accept") === "application/octet-stream";
    const driverValue = await (isRaw ? storage.getItemRaw(key) : storage.getItem(key));
    if (driverValue === null) {
      throw createError({
        statusCode: 404,
        statusMessage: "KV value not found"
      });
    }
    setMetaHeaders(event, await storage.getMeta(key));
    return isRaw ? driverValue : String(driverValue);
  }
  if (event.method === "PUT") {
    if (getRequestHeader(event, "content-type") === "application/octet-stream") {
      const value = await readRawBody(event, false);
      await storage.setItemRaw(key, value);
    } else if (getRequestHeader(event, "content-type") === "text/plain") {
      const value = await readRawBody(event, "utf8");
      await storage.setItem(key, value);
    }
    return "OK";
  }
  if (event.method === "DELETE") {
    await storage.removeItem(key);
    return "OK";
  }
});
function setMetaHeaders(event, meta) {
  if (meta.mtime) {
    setResponseHeader(
      event,
      "last-modified",
      new Date(meta.mtime).toUTCString()
    );
  }
  if (meta.ttl) {
    setResponseHeader(event, "x-ttl", `${meta.ttl}`);
    setResponseHeader(event, "cache-control", `max-age=${meta.ttl}`);
  }
}

const VIRTUAL_MEDIA_COLLECTION_NAME = "public-assets";

const _Jqxgin = eventHandler(async (event) => {
  const path = event.path.replace("/__nuxt_studio/dev/public/", "");
  const key = path.replace(/\//g, ":").replace(new RegExp(`^${VIRTUAL_MEDIA_COLLECTION_NAME}:`), "");
  const storage = useStorage("nuxt_studio_public_assets");
  if (event.method === "GET") {
    const lastChar = key[key.length - 1];
    const isBaseKey = lastChar === "/" || lastChar === ":";
    if (isBaseKey) {
      const keys = await storage.getKeys(key);
      return keys.map((key2) => key2.replace(/:/g, "/"));
    }
    const item = await storage.getMeta(key);
    if (!item) {
      throw createError({
        statusCode: 404,
        statusMessage: "KV value not found"
      });
    }
    return {
      id: `${VIRTUAL_MEDIA_COLLECTION_NAME}/${key.replace(/:/g, "/")}`,
      extension: key.split(".").pop(),
      stem: key.split(".").join("."),
      path: "/" + key.replace(/:/g, "/"),
      fsPath: withLeadingSlash(key.replace(/:/g, "/")),
      version: new Date(item.mtime || /* @__PURE__ */ new Date()).getTime()
    };
  }
  if (event.method === "PUT") {
    if (getRequestHeader(event, "content-type") === "application/octet-stream") {
      const value = await readRawBody(event, false);
      await storage.setItemRaw(key, value);
    } else if (getRequestHeader(event, "content-type") === "text/plain") {
      const value = await readRawBody(event, "utf8");
      await storage.setItem(key, value);
    } else {
      const value = await readRawBody(event, "utf8");
      const json = JSON.parse(value || "{}");
      const data = json.raw.split(";base64,")[1];
      await storage.setItemRaw(key, Buffer.from(data, "base64"));
    }
    return "OK";
  }
  if (event.method === "DELETE") {
    await storage.removeItem(key);
    return "OK";
  }
});

async function requireStudioAuth(event) {
  {
    return;
  }
}
async function requestAccessToken$1(url, options) {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    ...options.headers
  };
  const body = headers["Content-Type"] === "application/x-www-form-urlencoded" ? new URLSearchParams(
    options.body || options.params || {}
  ).toString() : options.body;
  return $fetch(url, {
    method: "POST",
    headers,
    body
  }).catch((error) => {
    if (error instanceof FetchError && error.status === 401) {
      return error.data;
    }
    throw error;
  });
}
async function generateOAuthState(event) {
  const newState = getRandomBytes(32);
  setCookie(event, "studio-oauth-state", newState, {
    path: "/",
    httpOnly: true,
    // Use secure cookies over HTTPS, required for locally testing purposes
    secure: getRequestProtocol(event) === "https",
    sameSite: "lax",
    maxAge: 60 * 15
    // 15 minutes
  });
  return newState;
}
function validateOAuthState(event, receivedState) {
  const storedState = getCookie(event, "studio-oauth-state");
  if (!storedState) {
    throw createError({
      statusCode: 400,
      message: "OAuth state cookie not found. Please try logging in again.",
      data: {
        hint: "State cookie may have expired or been cleared"
      }
    });
  }
  if (receivedState !== storedState) {
    throw createError({
      statusCode: 400,
      message: "Invalid state - OAuth state mismatch",
      data: {
        hint: "This may be caused by browser refresh, navigation, or expired session"
      }
    });
  }
  deleteCookie(event, "studio-oauth-state");
}
async function generatePKCECodeVerifier(event) {
  const codeVerifier = getRandomBytes(32);
  setCookie(event, "studio-oauth-pkce", codeVerifier, {
    path: "/",
    httpOnly: true,
    secure: getRequestProtocol(event) === "https",
    sameSite: "lax",
    maxAge: 60 * 15
    // 15 minutes
  });
  return codeVerifier;
}
async function generateCodeChallenge(codeVerifier) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(codeVerifier));
  return encodeBase64Url(new Uint8Array(digest));
}
function consumePKCECodeVerifier(event) {
  const codeVerifier = getCookie(event, "studio-oauth-pkce");
  if (!codeVerifier) {
    throw createError({
      statusCode: 400,
      message: "PKCE code verifier cookie not found. Please try logging in again.",
      data: {
        hint: "Code verifier cookie may have expired or been cleared"
      }
    });
  }
  deleteCookie(event, "studio-oauth-pkce");
  return codeVerifier;
}
function getRandomBytes(size = 32) {
  return encodeBase64Url(getRandomValues(new Uint8Array(size)));
}
function encodeBase64Url(input) {
  return btoa(String.fromCharCode.apply(null, Array.from(input))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

const customDefu = createDefu((obj, key, value) => {
  if (obj[key] === "" && value !== void 0 && value !== null && value !== "") {
    obj[key] = value;
    return true;
  }
  if (obj[key] !== void 0 && obj[key] !== null) {
    return true;
  }
  return false;
});
function mergeConfig(config, defaults) {
  return customDefu(defaults, config || {});
}

const _jdgCp5 = eventHandler(async (event) => {
  const studioConfig = useRuntimeConfig(event).studio;
  const instanceUrl = withoutTrailingSlash(studioConfig?.auth?.github?.instanceUrl || studioConfig?.repository?.instanceUrl || "https://github.com");
  const isEnterprise = new URL(instanceUrl).hostname !== "github.com";
  const config = mergeConfig(studioConfig?.auth?.github, {
    clientId: process.env.STUDIO_GITHUB_CLIENT_ID,
    clientSecret: process.env.STUDIO_GITHUB_CLIENT_SECRET,
    redirectURL: process.env.STUDIO_GITHUB_REDIRECT_URL,
    instanceUrl,
    authorizationURL: `${instanceUrl}/login/oauth/authorize`,
    tokenURL: `${instanceUrl}/login/oauth/access_token`,
    apiURL: isEnterprise ? `${instanceUrl}/api/v3` : "https://api.github.com",
    authorizationParams: {},
    emailRequired: true
  });
  const query = getQuery$1(event);
  if (query.error) {
    throw createError({
      statusCode: 401,
      message: `GitHub login failed: ${query.error || "Unknown error"}`,
      data: query
    });
  }
  if (!config.clientId || !config.clientSecret) {
    throw createError({
      statusCode: 500,
      message: "Missing GitHub client ID or secret",
      data: config
    });
  }
  const requestURL = getRequestURL(event);
  config.redirectURL = config.redirectURL || `${requestURL.protocol}//${requestURL.host}${requestURL.pathname}`;
  if (!query.code) {
    const state = await generateOAuthState(event);
    config.scope = config.scope || [];
    if (config.emailRequired && !config.scope.includes("user:email")) {
      config.scope.push("user:email");
    }
    if (config.emailRequired && !config.scope.includes("repo") && !config.scope.includes("public_repo")) {
      config.scope.push(studioConfig.repository.private ? "repo" : "public_repo");
    }
    return sendRedirect(
      event,
      withQuery(config.authorizationURL, {
        client_id: config.clientId,
        redirect_uri: config.redirectURL,
        scope: config.scope.join(" "),
        state,
        ...config.authorizationParams
      })
    );
  }
  validateOAuthState(event, query.state);
  if (studioConfig.repository.provider !== "github") {
    throw createError({
      statusCode: 500,
      message: "GitHub Oauth provider only supports GitHub repository provider"
    });
  }
  const token = await requestAccessToken$1(config.tokenURL, {
    body: {
      grant_type: "authorization_code",
      client_id: config.clientId,
      client_secret: config.clientSecret,
      redirect_uri: config.redirectURL,
      code: query.code
    }
  });
  if (token.error || !token.access_token) {
    throw createError({
      statusCode: 500,
      message: "Failed to get access token",
      data: token
    });
  }
  const accessToken = token.access_token;
  const user = await $fetch(`${config.apiURL}/user`, {
    headers: {
      "User-Agent": `Github-OAuth-${config.clientId}`,
      "Authorization": `token ${accessToken}`
    }
  });
  if (!user.email && config.emailRequired) {
    const emails = await $fetch(`${config.apiURL}/user/emails`, {
      headers: {
        "User-Agent": `Github-OAuth-${config.clientId}`,
        "Authorization": `token ${accessToken}`
      }
    });
    const primaryEmail = emails.find((email) => email.primary);
    if (!primaryEmail) {
      throw createError({
        statusCode: 500,
        message: "Could not get GitHub user email",
        data: token
      });
    }
    user.email = primaryEmail.email;
  }
  const moderators = process.env.STUDIO_GITHUB_MODERATORS?.split(",") || [];
  if (moderators.length > 0 && !moderators.includes(String(user.email))) {
    throw createError({
      statusCode: 403,
      message: "You are not authorized to access the studio"
    });
  }
  await setInternalStudioUserSession(event, {
    providerId: user.id.toString(),
    accessToken: token.access_token,
    name: user.name || user.login,
    avatar: user.avatar_url,
    email: user.email,
    provider: "github"
  });
  const redirect = decodeURIComponent(getCookie(event, "studio-redirect") || "");
  deleteCookie(event, "studio-redirect");
  if (redirect && redirect.startsWith("/") && !redirect.startsWith("//")) {
    return sendRedirect(event, redirect);
  }
  return sendRedirect(event, "/");
});

const logger$1 = consola$1.withTag("Nuxt Studio");
const _X34IjP = eventHandler(async (event) => {
  const studioConfig = useRuntimeConfig(event).studio;
  const config = mergeConfig(studioConfig?.auth?.google, {
    clientId: process.env.STUDIO_GOOGLE_CLIENT_ID,
    clientSecret: process.env.STUDIO_GOOGLE_CLIENT_SECRET,
    redirectURL: process.env.STUDIO_GOOGLE_REDIRECT_URL,
    authorizationURL: "https://accounts.google.com/o/oauth2/v2/auth",
    tokenURL: "https://oauth2.googleapis.com/token",
    userURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    authorizationParams: {},
    emailRequired: true
  });
  const query = getQuery$1(event);
  if (query.error) {
    throw createError({
      statusCode: 401,
      message: `Google login failed: ${query.error || "Unknown error"}`,
      data: query
    });
  }
  if (!config.clientId || !config.clientSecret) {
    throw createError({
      statusCode: 500,
      message: "Missing Google client ID or secret",
      data: config
    });
  }
  const requestURL = getRequestURL(event);
  config.redirectURL = config.redirectURL || `${requestURL.protocol}//${requestURL.host}${requestURL.pathname}`;
  if (!query.code) {
    const state = await generateOAuthState(event);
    config.scope = config.scope || ["email", "profile"];
    return sendRedirect(
      event,
      withQuery(config.authorizationURL, {
        response_type: "code",
        client_id: config.clientId,
        redirect_uri: config.redirectURL,
        scope: config.scope.join(" "),
        state,
        ...config.authorizationParams
      })
    );
  }
  validateOAuthState(event, query.state);
  const provider = studioConfig?.repository.provider;
  if (provider === "github" && !process.env.STUDIO_GITHUB_TOKEN) {
    throw createError({
      statusCode: 500,
      message: "`STUDIO_GITHUB_TOKEN` is not set. Google authenticated users cannot push changes to the repository without a valid GitHub token."
    });
  }
  if (provider === "gitlab" && !process.env.STUDIO_GITLAB_TOKEN) {
    throw createError({
      statusCode: 500,
      message: "`STUDIO_GITLAB_TOKEN` is not set. Google authenticated users cannot push changes to the repository without a valid GitLab token."
    });
  }
  const repositoryToken = provider === "github" ? process.env.STUDIO_GITHUB_TOKEN : process.env.STUDIO_GITLAB_TOKEN;
  const token = await requestAccessToken$1(config.tokenURL, {
    body: {
      grant_type: "authorization_code",
      code: query.code,
      client_id: config.clientId,
      client_secret: config.clientSecret,
      redirect_uri: config.redirectURL
    }
  });
  if (token.error || !token.access_token) {
    throw createError({
      statusCode: 500,
      message: "Failed to get access token",
      data: token
    });
  }
  const accessToken = token.access_token;
  const user = await $fetch(
    config.userURL,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
  if (!user.email && config.emailRequired) {
    throw createError({
      statusCode: 500,
      message: "Could not get Google user email",
      data: user
    });
  }
  const moderators = process.env.STUDIO_GOOGLE_MODERATORS?.split(",") || [];
  if (!moderators.includes(user.email)) {
    if (moderators.length === 0) {
      logger$1.warn([
        "No moderators defined. Moderators are required for Google authentication.",
        "Please set the `STUDIO_GOOGLE_MODERATORS` environment variable to a comma-separated list of email addresses of the moderators."
      ].join("\n"));
    }
    throw createError({
      statusCode: 403,
      message: "You are not authorized to access the studio"
    });
  }
  await setInternalStudioUserSession(event, {
    providerId: String(user.sub).toString(),
    accessToken: repositoryToken,
    name: user.name || `${user.given_name || ""} ${user.family_name || ""}`.trim(),
    avatar: user.picture,
    email: user.email,
    provider: "google"
  });
  const redirect = decodeURIComponent(getCookie(event, "studio-redirect") || "");
  deleteCookie(event, "studio-redirect");
  if (redirect && redirect.startsWith("/") && !redirect.startsWith("//")) {
    return sendRedirect(event, redirect);
  }
  return sendRedirect(event, "/");
});

const _XCzCMt = eventHandler(async (event) => {
  const studioConfig = useRuntimeConfig(event).studio;
  const instanceUrl = withoutTrailingSlash(studioConfig?.auth?.gitlab?.instanceUrl || studioConfig?.repository?.instanceUrl || "https://gitlab.com");
  const config = mergeConfig(studioConfig?.auth?.gitlab, {
    applicationId: process.env.STUDIO_GITLAB_APPLICATION_ID,
    applicationSecret: process.env.STUDIO_GITLAB_APPLICATION_SECRET,
    redirectURL: process.env.STUDIO_GITLAB_REDIRECT_URL,
    instanceUrl,
    authorizationURL: `${instanceUrl}/oauth/authorize`,
    tokenURL: `${instanceUrl}/oauth/token`,
    apiURL: `${instanceUrl}/api/v4`,
    authorizationParams: {},
    emailRequired: true
  });
  const query = getQuery$1(event);
  if (query.error) {
    throw createError({
      statusCode: 401,
      message: `GitLab login failed: ${query.error || "Unknown error"}`,
      data: query
    });
  }
  if (!config.applicationId || !config.applicationSecret) {
    throw createError({
      statusCode: 500,
      message: "Missing GitLab application ID or secret",
      data: config
    });
  }
  const requestURL = getRequestURL(event);
  config.redirectURL = config.redirectURL || `${requestURL.protocol}//${requestURL.host}${requestURL.pathname}`;
  if (!query.code) {
    const state = await generateOAuthState(event);
    config.scope = config.scope || [];
    if (!config.scope.includes("api")) {
      config.scope.push("api");
    }
    return sendRedirect(
      event,
      withQuery(config.authorizationURL, {
        client_id: config.applicationId,
        redirect_uri: config.redirectURL,
        response_type: "code",
        scope: config.scope.join(" "),
        state,
        ...config.authorizationParams
      })
    );
  }
  validateOAuthState(event, query.state);
  if (studioConfig.repository.provider !== "gitlab") {
    throw createError({
      statusCode: 500,
      message: "GitLab Oauth provider only supports GitLab repository provider"
    });
  }
  const token = await requestAccessToken(config.tokenURL, {
    body: {
      grant_type: "authorization_code",
      client_id: config.applicationId,
      client_secret: config.applicationSecret,
      redirect_uri: config.redirectURL,
      code: query.code
    }
  });
  if (token.error || !token.access_token) {
    throw createError({
      statusCode: 500,
      message: "Failed to get access token",
      data: token
    });
  }
  const accessToken = token.access_token;
  const user = await $fetch(`${config.apiURL}/user`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  if (!user.email && config.emailRequired) {
    throw createError({
      statusCode: 500,
      message: "Could not get GitLab user email",
      data: token
    });
  }
  const moderators = process.env.STUDIO_GITLAB_MODERATORS?.split(",") || [];
  if (moderators.length > 0 && !moderators.includes(String(user.email))) {
    throw createError({
      statusCode: 403,
      message: "You are not authorized to access the studio"
    });
  }
  await setInternalStudioUserSession(event, {
    providerId: user.id.toString(),
    accessToken: token.access_token,
    name: user.name || user.username,
    avatar: user.avatar_url,
    email: user.email,
    provider: "gitlab"
  });
  const redirect = decodeURIComponent(getCookie(event, "studio-redirect") || "/");
  deleteCookie(event, "studio-redirect");
  if (redirect && redirect.startsWith("/") && !redirect.startsWith("//")) {
    return sendRedirect(event, redirect);
  }
  return sendRedirect(event, "/");
});
async function requestAccessToken(url, options) {
  try {
    return await $fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: options.body,
      params: options.params
    });
  } catch (error) {
    if (error instanceof FetchError) {
      return error.data || { error: error.message };
    }
    return { error: "Unknown error" };
  }
}

const _5kzZbx = eventHandler(async (event) => {
  const studioConfig = useRuntimeConfig(event).studio;
  const config = mergeConfig(studioConfig?.auth?.sso, {
    serverUrl: process.env.STUDIO_SSO_URL,
    clientId: process.env.STUDIO_SSO_CLIENT_ID,
    clientSecret: process.env.STUDIO_SSO_CLIENT_SECRET,
    redirectURL: process.env.STUDIO_SSO_REDIRECT_URL
  });
  const query = getQuery$1(event);
  if (query.error) {
    throw createError({
      statusCode: 401,
      message: `SSO login failed: ${query.error_description || query.error || "Unknown error"}`,
      data: query
    });
  }
  if (!config.serverUrl || !config.clientId || !config.clientSecret) {
    throw createError({
      statusCode: 500,
      message: "Missing SSO server URL, client ID, or client secret. Set STUDIO_SSO_URL, STUDIO_SSO_CLIENT_ID, and STUDIO_SSO_CLIENT_SECRET environment variables.",
      data: config
    });
  }
  const serverUrl = config.serverUrl.replace(/\/$/, "");
  const requestURL = getRequestURL(event);
  config.redirectURL = config.redirectURL || `${requestURL.protocol}//${requestURL.host}${requestURL.pathname}`;
  if (!query.code) {
    const state = await generateOAuthState(event);
    const codeVerifier2 = await generatePKCECodeVerifier(event);
    const codeChallenge = await generateCodeChallenge(codeVerifier2);
    return sendRedirect(
      event,
      withQuery(`${serverUrl}/oauth/authorize`, {
        response_type: "code",
        client_id: config.clientId,
        redirect_uri: config.redirectURL,
        state,
        code_challenge: codeChallenge,
        code_challenge_method: "S256"
      })
    );
  }
  validateOAuthState(event, query.state);
  const codeVerifier = consumePKCECodeVerifier(event);
  const provider = studioConfig?.repository.provider;
  const token = await requestAccessToken$1(`${serverUrl}/oauth/token`, {
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      grant_type: "authorization_code",
      code: query.code,
      client_id: config.clientId,
      client_secret: config.clientSecret,
      redirect_uri: config.redirectURL,
      code_verifier: codeVerifier
    }
  });
  if (token.error || !token.access_token) {
    throw createError({
      statusCode: 500,
      message: `Failed to get access token: ${token.error_description || token.error || "Unknown error"}`,
      data: token
    });
  }
  const user = await $fetch(
    `${serverUrl}/oauth/userinfo`,
    {
      headers: {
        Authorization: `Bearer ${token.access_token}`
      }
    }
  );
  if (!user.email) {
    throw createError({
      statusCode: 500,
      message: "Could not get user email from SSO server",
      data: user
    });
  }
  let repositoryToken;
  if (provider === "github" && user.github_token) {
    repositoryToken = user.github_token;
  } else if (provider === "github") {
    repositoryToken = process.env.STUDIO_GITHUB_TOKEN;
  } else if (provider === "gitlab") {
    repositoryToken = process.env.STUDIO_GITLAB_TOKEN;
  }
  if (provider === "github" && !repositoryToken) {
    throw createError({
      statusCode: 500,
      message: "No GitHub token available. Make sure to login with GitHub on the SSO server."
    });
  }
  if (provider === "gitlab" && !repositoryToken) {
    throw createError({
      statusCode: 500,
      message: "`STUDIO_GITLAB_TOKEN` is not set. SSO authenticated users cannot push changes to the repository without a valid GitLab token."
    });
  }
  await setInternalStudioUserSession(event, {
    providerId: user.sub,
    accessToken: repositoryToken,
    name: user.name,
    avatar: user.picture,
    email: user.email,
    provider: user.git_provider || "github"
    // Use the git provider from SSO, default to github
  });
  const redirect = decodeURIComponent(getCookie(event, "studio-redirect") || "");
  deleteCookie(event, "studio-redirect");
  if (redirect && redirect.startsWith("/") && !redirect.startsWith("//")) {
    return sendRedirect(event, redirect);
  }
  return sendRedirect(event, "/");
});

const _vrFw3E = eventHandler(async (event) => {
  const session = await useSession(event, {
    name: "studio-session",
    password: useRuntimeConfig(event).studio?.auth?.sessionSecret,
    cookie: {
      // Use secure cookies over HTTPS, required for locally testing purposes
      secure: getRequestProtocol(event) === "https",
      path: "/"
    }
  });
  if (!session.data || Object.keys(session.data).length === 0) {
    deleteCookie(event, "studio-session-check", { path: "/" });
  }
  return {
    ...session.data,
    id: session.id
  };
});

const _ZQKJKO = eventHandler(async (event) => {
  return await clearStudioUserSession(event);
});

const _WcCsmA = eventHandler((event) => {
  const { redirect } = getQuery$1(event);
  if (redirect) {
    setCookie(event, "studio-redirect", String(redirect), {
      path: "/",
      // Use secure cookies over HTTPS, required for locally testing purposes
      secure: getRequestProtocol(event) === "https",
      httpOnly: true
    });
  }
  const hasGithub = process.env.STUDIO_GITHUB_CLIENT_ID && "github";
  const hasGitlab = process.env.STUDIO_GITLAB_APPLICATION_ID && "gitlab";
  const hasGoogle = process.env.STUDIO_GOOGLE_CLIENT_ID && "google";
  const hasSSO = process.env.STUDIO_SSO_URL && process.env.STUDIO_SSO_CLIENT_ID && process.env.STUDIO_SSO_CLIENT_SECRET && "sso";
  const providers = [hasGithub, hasGitlab, hasGoogle, hasSSO].filter(Boolean);
  if (providers.length === 0) {
    throw createError({
      statusCode: 404,
      message: "No authentication provider found"
    });
  }
  if (providers.length === 1) {
    return sendRedirect(event, `/__nuxt_studio/auth/${providers[0]}`);
  }
  const githubButton = hasGithub ? `<a href="#" class="provider-btn github" data-provider="github">
                <svg viewBox="0 0 16 16" version="1.1" aria-hidden="true">
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
                Continue with GitHub
            </a>` : "";
  const gitlabButton = hasGitlab ? `<a href="#" class="provider-btn gitlab" data-provider="gitlab">
                <svg viewBox="0 0 380 380" aria-hidden="true">
                    <g fill="#ffffff">
                        <path d="M282.83,170.73l-.27-.69-26.14-68.22a6.81,6.81,0,0,0-2.69-3.24,7,7,0,0,0-8,.43,7,7,0,0,0-2.32,3.52l-17.65,54H154.29l-17.65-54A6.86,6.86,0,0,0,134.32,99a7,7,0,0,0-8-.43,6.87,6.87,0,0,0-2.69,3.24L97.44,170l-.26.69a48.54,48.54,0,0,0,16.1,56.1l.09.07.24.17,39.82,29.82,19.7,14.91,12,9.06a8.07,8.07,0,0,0,9.76,0l12-9.06,19.7-14.91,40.06-30,.1-.08A48.56,48.56,0,0,0,282.83,170.73Z"/>
                    </g>
                </svg>
                Continue with GitLab
            </a>` : "";
  const googleButton = hasGoogle ? `<a href="#" class="provider-btn google" data-provider="google">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
            </a>` : "";
  const ssoButton = hasSSO ? `<a href="#" class="provider-btn sso" data-provider="sso">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill="currentColor"/>
                </svg>
                Continue with SSO
            </a>` : "";
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Content Studio</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
      (function () {
        var storageListenerKey = 'studio-auth-popup'

        function navigateToProvider(provider) {
          window.location.assign('/__nuxt_studio/auth/' + provider)
        }

        function notifyOpenerAndClose() {
          try {
            if (window.opener && !window.opener.closed) {
              window.opener.localStorage.setItem('temp-' + storageListenerKey, String(Date.now()))
            }
          } catch (_) {}
          setTimeout(function () { window.close() }, 100)
        }

        // If this page was opened as a popup with ?done=1, signal the opener and close
        var params = new URLSearchParams(window.location.search)
        if (params.get('done') === '1') {
          notifyOpenerAndClose()
        }

        window.addEventListener('DOMContentLoaded', function () {
          var buttons = document.querySelectorAll('.provider-btn')
          buttons.forEach(function(btn) {
            btn.addEventListener('click', function (e) {
              e.preventDefault()
              var provider = btn.getAttribute('data-provider')
              navigateToProvider(provider)
            })
          })
        })
      })()
    <\/script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --background: #0d1117;
            --surface: #161b22;
            --surface-hover: #21262d;
            --border: #30363d;
            --text-primary: #f0f6fc;
            --text-secondary: #8b949e;
            --github: #24292f;
            --github-hover: #32383f;
            --gitlab: #fc6d26;
            --gitlab-hover: #e85b15;
            --google: #ffffff;
            --google-hover: #f8f9fa;
            --google-text: #1f1f1f;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
            background: var(--background);
            color: var(--text-primary);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1.5;
        }

        .login-container {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 48px;
            width: 100%;
            max-width: 400px;
            box-shadow: 0 16px 32px rgba(1, 4, 9, 0.85);
        }

        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .logo img {
            width: 48px;
            height: 48px;
        }

        .header {
            text-align: center;
            margin-bottom: 24px;
        }

        .header h1 {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 8px;
            color: var(--text-primary);
        }

        .header p {
            color: var(--text-secondary);
            font-size: 16px;
        }

        .providers {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .provider-btn {
            width: 100%;
            border: 1px solid var(--border);
            padding: 14px 20px;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            transition: all 0.2s ease;
            text-decoration: none;
        }

        .provider-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .provider-btn svg {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
        }

        .provider-btn.gitlab svg {
            height: 30px;
            width: 30px;
        }

        .provider-btn.github {
            background: var(--github);
            color: var(--text-primary);
        }

        .provider-btn.github:hover {
            background: var(--github-hover);
            border-color: var(--github-hover);
        }

        .provider-btn.github svg {
            fill: currentColor;
        }

        .provider-btn.gitlab {
            background: var(--gitlab);
            color: #ffffff;
            border-color: var(--gitlab);
        }

        .provider-btn.gitlab:hover {
            background: var(--gitlab-hover);
            border-color: var(--gitlab-hover);
        }

        .provider-btn.google {
            background: var(--google);
            color: var(--google-text);
            border-color: #dadce0;
        }

        .provider-btn.google:hover {
            background: var(--google-hover);
            border-color: #d2d3d4;
        }

        .provider-btn.sso {
            background: var(--surface-hover);
            color: var(--text-primary);
            border-color: var(--border);
        }

        .provider-btn.sso:hover {
            background: var(--border);
            border-color: #484f58;
        }

        .footer {
            text-align: center;
            margin-top: 32px;
            padding-top: 24px;
            border-top: 1px solid var(--border);
        }

        .footer p {
            color: var(--text-secondary);
            font-size: 14px;
        }

        .footer a {
            color: #0969da;
            text-decoration: none;
        }

        .footer a:hover {
            text-decoration: underline;
        }

        @media (max-width: 480px) {
            .login-container {
                padding: 32px 24px;
                margin: 16px;
            }

            .provider-btn {
                font-size: 14px;
                padding: 12px 16px;
            }
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="logo">
          <img src="https://nuxt.com/assets/design-kit/icon-white.svg" alt="Nuxt Logo" />
        </div>

        <div class="header">
            <h1>Nuxt Studio</h1>
            <p>Sign in to start editing your website.</p>
        </div>

        <div class="providers">
            ${githubButton}
            ${gitlabButton}
            ${googleButton}
            ${ssoButton}
        </div>

    </div>
</body>
</html>`;
});

// Auto-generated deduplicated module
// Strings and objects extracted for memory efficiency

const _s = [
  "",
  "undefined",
  "enum",
  "param",
  "event",
  "string | undefined",
  "string",
  "any",
  "{} | undefined",
  "object",
  "ClassNameValue",
  "all",
  "{ base?: any; } | undefined",
  "ui",
  "() => string",
  "(): string",
  "{}",
  "default",
  "deprecated",
  "A legacy feature for browser compatibility",
  "boolean | undefined",
  "{ base?: any; }",
  "base",
  "defaultValue",
  "false",
  "null",
  "name",
  "true",
  "number",
  "In | undefined",
  "Dn | undefined",
  "{ (locales?: string | string[] | undefined): string; (locales?: Intl.LocalesArgument): string; }",
  "icon",
  "replace",
  "that String to compare to target string",
  "searchValue A string to search for.",
  "replacer A function that returns the replacement text.",
  "id",
  "string | number | undefined",
  "array",
  "label",
  "hash",
  "description",
  "string | St | vt | undefined",
  "Gt",
  "_n | undefined",
  "path",
  "query",
  "Replace the entry in the history instead of pushing a new entry",
  "force",
  "Triggers the navigation even if the location is the same as the current one.\nNote this will also add a new entry to the history unless `replace: true`\nis passed.",
  "state",
  "State to save using the History API. This cannot contain any reactive\nvalues and some primitives like Symbols are forbidden. More info at\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
  "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
  "(searchString: string, position?: number | undefined) => number",
  "(searchString: string, position?: number | undefined): number",
  "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.",
  "options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.",
  "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: Intl.CollatorOptions | undefined): number; (that: string, locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions | undefined): number; }",
  "regexp A variable name or string literal containing the regular expression pattern and flags.",
  "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }",
  "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string; (searchValue: { [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string; }, replacer: (substring: string, ...args: any[]) => string): string; }",
  "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }",
  "limit A value used to limit the number of elements returned in the array.",
  "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }",
  "(searchString: string, position?: number | undefined) => boolean",
  "(searchString: string, position?: number | undefined): boolean",
  "form Applicable values: \"NFC\", \"NFD\", \"NFKC\", or \"NFKD\", If not specified default\nis \"NFC\"",
  "{ (form: \"NFC\" | \"NFD\" | \"NFKC\" | \"NFKD\"): string; (form?: string | undefined): string; }",
  "{ (size: number): string; (size: string): string; }",
  "maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string's length, the current string will be returned as it is.",
  "fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is \" \" (U+0020).",
  "(maxLength: number, fillString?: string | undefined) => string",
  "(maxLength: number, fillString?: string | undefined): string",
  "Removes the trailing white space and line terminator characters from a string.",
  "Removes the leading white space and line terminator characters from a string.",
  "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }",
  "\"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"error\" | \"neutral\" | undefined",
  "example",
  "{ base?: ClassNameValue; link?: ClassNameValue; } | undefined",
  "{ base?: ClassNameValue; leading?: ClassNameValue; leadingIcon?: ClassNameValue; link?: ClassNameValue; } | undefined",
  "class",
  "\"left\" | \"center\" | \"right\" | undefined",
  "7K1TJpYTXEhCa6ZpGmgQYdZlwRLEgEXXo0NhZrKiWYg",
  "target",
  "\"_blank\"",
  "\"_parent\"",
  "\"_self\"",
  "\"_top\"",
  "root",
  "0",
  "0n",
  "ClassNameArray",
  "trigger",
  "content",
  "toString",
  "length",
  "color",
  "\"primary\"",
  "\"secondary\"",
  "\"success\"",
  "\"info\"",
  "\"warning\"",
  "\"error\"",
  "\"neutral\"",
  "modelValue",
  "update:modelValue",
  "[value: string | undefined]",
  "(event: \"update:modelValue\", value: string | undefined): void",
  "Function"
];

const _emptyArray = [];
const _ref0 = {"0": _s[1], "1": _s[6]};
const _emptyObject = {};
const _ref1 = [_s[10]];
const _ref2 = {"0": _s[1], "1": _s[24], "2": _s[27]};
const _ref3 = {kind: _s[4], type: _s[15]};
const _ref4 = {name: _s[3], text: _s[34]};
const _ref5 = {name: _s[3], text: _s[56]};
const _ref6 = {name: _s[3], text: _s[57]};
const _ref7 = {name: _s[3], text: _s[59]};
const _ref8 = {name: _s[3], text: _s[35]};
const _ref9 = {name: _s[3], text: _s[36]};
const _ref10 = {name: _s[3], text: _s[63]};
const _ref11 = {name: _s[18], text: _s[19]};
const _ref12 = {name: _s[3], text: _s[67]};
const _ref13 = {name: _s[3], text: _s[70]};
const _ref14 = {name: _s[3], text: _s[71]};
const _ref15 = [_s[1], _s[6]];
const _ref16 = {"0": _s[1], "1": _s[6], "2": _s[28]};
const _ref17 = {name: _s[22], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[7], schema: _s[7]};
const _ref18 = {name: _s[93], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]};
const _ref19 = {name: _s[94], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]};
const _ref20 = {name: _s[40], global: false, description: _s[0], tags: _emptyArray, required: true, type: _s[6], schema: _s[6]};
const _ref21 = {name: _s[49], global: false, description: _s[50], tags: _emptyArray, required: false, type: _s[20], schema: _s[20]};
const _ref22 = {name: _s[32], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[7], schema: _s[7]};
const _ref23 = {name: _s[81], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[7], schema: _s[7]};
const _ref24 = {type: 1, props: _emptyArray, slots: _emptyArray, events: _emptyArray, exposed: _emptyArray, hash: _s[83]};
const _ref25 = {kind: _s[2], type: _s[5], schema: _ref0};
const _ref26 = {kind: _s[9], type: _s[16], schema: _emptyObject};
const _ref27 = {kind: _s[4], type: _s[55], schema: _emptyObject};
const _ref28 = {kind: _s[4], type: _s[66], schema: _emptyObject};
const _ref29 = {kind: _s[4], type: _s[73], schema: _emptyObject};
const _ref30 = {kind: _s[39], type: _s[92], schema: _ref1};
const _ref31 = {kind: _s[2], type: _s[20], schema: _ref2};
const _ref32 = [_ref11];
const _ref33 = [_ref13, _ref14];
const _ref34 = {kind: _s[2], type: _s[5], schema: _ref15};
const _ref35 = {kind: _s[2], type: _s[38], schema: _ref16};
const _ref36 = {base: _ref17};
const _ref37 = {name: _s[42], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _ref25};
const _ref38 = {name: _s[37], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _ref25};
const _ref39 = {"0": _s[1], "1": _ref26};
const _ref40 = {"0": _s[1], "1": _s[25], "2": _s[6], "3": _s[24], "4": _s[90], "5": _s[91], "6": _ref30};
const _ref41 = [_ref34];
const _ref42 = {kind: _s[9], type: _s[21], schema: _ref36};
const _ref43 = {kind: _s[2], type: _s[8], schema: _ref39};
const _ref44 = {kind: _s[2], type: _s[10], schema: _ref40};
const _ref45 = {name: _s[106], description: _s[0], tags: _emptyArray, type: _s[107], signature: _s[108], schema: _ref41};
const _ref46 = {"0": _s[1], "1": _ref42};
const _ref47 = {name: _s[17], type: _s[8], description: _s[0], tags: _emptyArray, schema: _ref43};
const _ref48 = {name: _s[89], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _ref44};
const _ref49 = [_ref45];
const _ref50 = {kind: _s[2], type: _s[12], schema: _ref46};
const _ref51 = [_ref47];
const _ref52 = {name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[12], schema: _ref50};
const _ref53 = [_ref52];

const components = {ProseA: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/A.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/A.vue", pascalName: "ProseA", kebabName: "prose-a", chunkName: "components/prose-a", priority: 0, _scanned: true, meta: {type: 1, props: [{name: "href", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, {name: _s[84], global: false, description: _s[0], tags: _emptyArray, required: false, type: "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | null | undefined", schema: {kind: _s[2], type: "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | null | undefined", schema: {"0": _s[1], "1": _s[25], "2": _s[85], "3": _s[86], "4": _s[87], "5": _s[88]}}}, _ref52], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "7XiOPzg9kvzYCE4Jlh3yYHBMPUjjqyaeyy-jgAy2r1c"}}, ProseAccordion: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Accordion.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Accordion.vue", pascalName: "ProseAccordion", kebabName: "prose-accordion", chunkName: "components/prose-accordion", priority: 0, _scanned: true, meta: {type: 1, props: [{name: "type", global: false, description: _s[0], tags: _emptyArray, required: false, type: "\"single\" | \"multiple\" | undefined", schema: {kind: _s[2], type: "\"single\" | \"multiple\" | undefined", schema: {"0": _s[1], "1": "\"single\"", "2": "\"multiple\""}}}, {name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: "({ root?: ClassNameValue; trigger?: ClassNameValue; } & { root?: ClassNameValue; item?: ClassNameValue; header?: ClassNameValue; trigger?: ClassNameValue; content?: ClassNameValue; body?: ClassNameValue; leadingIcon?: ClassNameValue; trailingIcon?: ClassNameValue; label?: ClassNameValue; }) | undefined", schema: {kind: _s[2], type: "({ root?: ClassNameValue; trigger?: ClassNameValue; } & { root?: ClassNameValue; item?: ClassNameValue; header?: ClassNameValue; trigger?: ClassNameValue; content?: ClassNameValue; body?: ClassNameValue; leadingIcon?: ClassNameValue; trailingIcon?: ClassNameValue; label?: ClassNameValue; }) | undefined", schema: {"0": _s[1], "1": {kind: _s[9], type: "{ root?: ClassNameValue; trigger?: ClassNameValue; } & { root?: ClassNameValue; item?: ClassNameValue; header?: ClassNameValue; trigger?: ClassNameValue; content?: ClassNameValue; body?: ClassNameValue; leadingIcon?: ClassNameValue; trailingIcon?: ClassNameValue; label?: ClassNameValue; }", schema: {root: _ref48, trigger: _ref18, item: {name: "item", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]}, header: {name: "header", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]}, content: _ref19, body: {name: "body", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]}, leadingIcon: {name: "leadingIcon", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]}, trailingIcon: {name: "trailingIcon", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]}, label: {name: _s[40], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]}}}}}}], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "Trp0TD6hZTPP2ymi1xAhRzDFHEraCrQ03TKuOE1UcGc"}}, ProseAccordionItem: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/AccordionItem.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/AccordionItem.vue", pascalName: "ProseAccordionItem", kebabName: "prose-accordion-item", chunkName: "components/prose-accordion-item", priority: 0, _scanned: true, meta: {type: 1, props: [_ref20, _ref37, _ref52], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "6McaYRFRNvvnLh4qsFla--42HAzqODZWQ7AYGLRiKD8"}}, ProseBadge: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Badge.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Badge.vue", pascalName: "ProseBadge", kebabName: "prose-badge", chunkName: "components/prose-badge", priority: 0, _scanned: true, meta: {type: 1, props: _ref53, slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "kvfHz_prjF4MJUFKdGQ4MBl1OuH--yjPsclA3iRzfuo"}}, ProseBlockquote: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Blockquote.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Blockquote.vue", pascalName: "ProseBlockquote", kebabName: "prose-blockquote", chunkName: "components/prose-blockquote", priority: 0, _scanned: true, meta: {type: 1, props: _ref53, slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "KicPuoa8OFM0220kT8362owWCAonN3Ybd2kR1RxhQiU"}}, ProseCallout: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Callout.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Callout.vue", pascalName: "ProseCallout", kebabName: "prose-callout", chunkName: "components/prose-callout", priority: 0, _scanned: true, meta: {type: 1, props: [{name: "to", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[43], schema: {kind: _s[2], type: _s[43], schema: {"0": _s[1], "1": _s[6], "2": {kind: _s[9], type: "St", schema: {name: {name: _s[26], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[44], schema: {kind: _s[2], type: _s[44], schema: {"0": _s[1], "1": _s[6], "2": "symbol"}}}, params: {name: "params", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[45], schema: {kind: _s[2], type: _s[45], schema: {"0": _s[1], "1": "_n"}}}, path: {name: _s[46], global: false, description: "A relative path to the current location. This property should be removed", tags: _emptyArray, required: false, type: _s[1], schema: _s[1]}, query: {name: _s[47], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[29], schema: {kind: _s[2], type: _s[29], schema: {"0": _s[1], "1": "In"}}}, hash: {name: _s[41], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, replace: {name: _s[33], global: false, description: _s[48], tags: _emptyArray, required: false, type: _s[20], schema: _ref31}, force: _ref21, state: {name: _s[51], global: false, description: _s[52], tags: _emptyArray, required: false, type: _s[30], schema: {kind: _s[2], type: _s[30], schema: {"0": _s[1], "1": {kind: _s[9], type: "Dn", schema: _emptyObject}}}}}}, "3": {kind: _s[9], type: "vt", schema: {path: {name: _s[46], global: false, description: "Percentage encoded pathname section of the URL.", tags: _emptyArray, required: true, type: _s[6], schema: _s[6]}, query: {name: _s[47], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[29], schema: _s[29]}, hash: {name: _s[41], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _s[5]}, replace: {name: _s[33], global: false, description: _s[48], tags: _emptyArray, required: false, type: _s[20], schema: _s[20]}, force: _ref21, state: {name: _s[51], global: false, description: _s[52], tags: _emptyArray, required: false, type: _s[30], schema: _s[30]}}}}}}, {name: _s[84], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[53], schema: {kind: _s[2], type: _s[53], schema: {"0": _s[1], "1": _s[25], "2": _s[85], "3": _s[86], "4": _s[87], "5": _s[88], "6": {kind: _s[9], type: "string & {}", schema: {toString: {name: _s[95], global: false, description: "Returns a string representation of a string.", tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, charAt: {name: "charAt", global: false, description: "Returns the character at the specified index.", tags: [{name: _s[3], text: "pos The zero-based index of the desired character."}], required: true, type: "(pos: number) => string", schema: {kind: _s[4], type: "(pos: number): string", schema: _emptyObject}}, charCodeAt: {name: "charCodeAt", global: false, description: "Returns the Unicode value of the character at the specified location.", tags: [{name: _s[3], text: "index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned."}], required: true, type: "(index: number) => number", schema: {kind: _s[4], type: "(index: number): number", schema: _emptyObject}}, concat: {name: "concat", global: false, description: "Returns a string that contains the concatenation of two or more strings.", tags: [{name: _s[3], text: "strings The strings to append to the end of the string."}], required: true, type: "(...strings: string[]) => string", schema: {kind: _s[4], type: "(...strings: string[]): string", schema: {"0": _s[6]}}}, indexOf: {name: "indexOf", global: false, description: "Returns the position of the first occurrence of a substring.", tags: [{name: _s[3], text: "searchString The substring to search for in the string"}, {name: _s[3], text: "position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string."}], required: true, type: _s[54], schema: _ref27}, lastIndexOf: {name: "lastIndexOf", global: false, description: "Returns the last occurrence of a substring in the string.", tags: [{name: _s[3], text: "searchString The substring to search for."}, {name: _s[3], text: "position The index at which to begin searching. If omitted, the search begins at the end of the string."}], required: true, type: _s[54], schema: _ref27}, localeCompare: {name: "localeCompare", global: false, description: "Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.", tags: [_ref4, _ref4, _ref5, _ref6, _ref4, _ref5, _ref6], required: true, type: _s[58], schema: _s[58]}, match: {name: "match", global: false, description: "Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string or an object that supports being matched against, and returns an array\ncontaining the results of that search, or null if no matches are found.", tags: [_ref7, {name: _s[3], text: "matcher An object that supports being matched against."}], required: true, type: _s[60], schema: _s[60]}, replace: {name: _s[33], global: false, description: "Replaces text in a string, using a regular expression or search string.\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\nReplaces text in a string, using an object that supports replacement within a string.", tags: [{name: _s[3], text: "searchValue A string or regular expression to search for."}, {name: _s[3], text: "replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced."}, _ref8, _ref9, {name: _s[3], text: "searchValue An object that supports searching for and replacing matches within a string."}, {name: _s[3], text: "replaceValue The replacement text."}, {name: _s[3], text: "searchValue A object can search for and replace matches within a string."}, _ref9], required: true, type: _s[61], schema: _s[61]}, search: {name: "search", global: false, description: "Finds the first substring match in a regular expression search.", tags: [{name: _s[3], text: "regexp The regular expression pattern and applicable flags."}, {name: _s[3], text: "searcher An object which supports searching within a string."}], required: true, type: _s[62], schema: _s[62]}, slice: {name: "slice", global: false, description: "Returns a section of a string.", tags: [{name: _s[3], text: "start The index to the beginning of the specified portion of stringObj."}, {name: _s[3], text: "end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\nIf this value is not specified, the substring continues to the end of stringObj."}], required: true, type: "(start?: number | undefined, end?: number | undefined) => string", schema: {kind: _s[4], type: "(start?: number | undefined, end?: number | undefined): string", schema: _emptyObject}}, split: {name: "split", global: false, description: "Split a string into substrings using the specified separator and return them as an array.", tags: [{name: _s[3], text: "separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned."}, _ref10, {name: _s[3], text: "splitter An object that can split a string."}, _ref10], required: true, type: _s[64], schema: _s[64]}, substring: {name: "substring", global: false, description: "Returns the substring at the specified location within a String object.", tags: [{name: _s[3], text: "start The zero-based index number indicating the beginning of the substring."}, {name: _s[3], text: "end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\nIf end is omitted, the characters from start through the end of the original string are returned."}], required: true, type: "(start: number, end?: number | undefined) => string", schema: {kind: _s[4], type: "(start: number, end?: number | undefined): string", schema: _emptyObject}}, toLowerCase: {name: "toLowerCase", global: false, description: "Converts all the alphabetic characters in a string to lowercase.", tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, toLocaleLowerCase: {name: "toLocaleLowerCase", global: false, description: "Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.", tags: _emptyArray, required: true, type: _s[31], schema: _s[31]}, toUpperCase: {name: "toUpperCase", global: false, description: "Converts all the alphabetic characters in a string to uppercase.", tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, toLocaleUpperCase: {name: "toLocaleUpperCase", global: false, description: "Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.", tags: _emptyArray, required: true, type: _s[31], schema: _s[31]}, trim: {name: "trim", global: false, description: "Removes the leading and trailing white space and line terminator characters from a string.", tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, length: {name: _s[96], global: false, description: "Returns the length of a String object.", tags: _emptyArray, required: true, type: _s[28], schema: _s[28]}, substr: {name: "substr", global: false, description: "Gets a substring beginning at the specified location and having the specified length.", tags: [_ref11, {name: _s[3], text: "from The starting position of the desired substring. The index of the first character in the string is zero."}, {name: _s[3], text: "length The number of characters to include in the returned substring."}], required: true, type: "(from: number, length?: number | undefined) => string", schema: {kind: _s[4], type: "(from: number, length?: number | undefined): string", schema: _emptyObject}}, valueOf: {name: "valueOf", global: false, description: "Returns the primitive value of the specified object.", tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, codePointAt: {name: "codePointAt", global: false, description: "Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\nthe String resulting from converting this object to a String.\nIf there is no element at that position, the result is undefined.\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.", tags: _emptyArray, required: true, type: "(pos: number) => number | undefined", schema: {kind: _s[4], type: "(pos: number): number | undefined", schema: _emptyObject}}, includes: {name: "includes", global: false, description: "Returns true if searchString appears as a substring of the result of converting this\nobject to a String, at one or more positions that are\ngreater than or equal to position; otherwise, returns false.", tags: [{name: _s[3], text: "searchString search string"}, {name: _s[3], text: "position If position is undefined, 0 is assumed, so as to search all of the String."}], required: true, type: _s[65], schema: _ref28}, endsWith: {name: "endsWith", global: false, description: "Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nendPosition – length(this). Otherwise returns false.", tags: _emptyArray, required: true, type: "(searchString: string, endPosition?: number | undefined) => boolean", schema: {kind: _s[4], type: "(searchString: string, endPosition?: number | undefined): boolean", schema: _emptyObject}}, normalize: {name: "normalize", global: false, description: "Returns the String value result of normalizing the string into the normalization form\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.", tags: [_ref12, _ref12], required: true, type: _s[68], schema: _s[68]}, repeat: {name: "repeat", global: false, description: "Returns a String value that is made from count copies appended together. If count is 0,\nthe empty string is returned.", tags: [{name: _s[3], text: "count number of copies to append"}], required: true, type: "(count: number) => string", schema: {kind: _s[4], type: "(count: number): string", schema: _emptyObject}}, startsWith: {name: "startsWith", global: false, description: "Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nposition. Otherwise returns false.", tags: _emptyArray, required: true, type: _s[65], schema: _ref28}, anchor: {name: "anchor", global: false, description: "Returns an `<a>` HTML anchor element and sets the name attribute to the text value", tags: [_ref11, {name: _s[3], text: _s[26]}], required: true, type: "(name: string) => string", schema: {kind: _s[4], type: "(name: string): string", schema: _emptyObject}}, big: {name: "big", global: false, description: "Returns a `<big>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, blink: {name: "blink", global: false, description: "Returns a `<blink>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, bold: {name: "bold", global: false, description: "Returns a `<b>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, fixed: {name: "fixed", global: false, description: "Returns a `<tt>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, fontcolor: {name: "fontcolor", global: false, description: "Returns a `<font>` HTML element and sets the color attribute value", tags: _ref32, required: true, type: "(color: string) => string", schema: {kind: _s[4], type: "(color: string): string", schema: _emptyObject}}, fontsize: {name: "fontsize", global: false, description: "Returns a `<font>` HTML element and sets the size attribute value", tags: [_ref11, _ref11], required: true, type: _s[69], schema: _s[69]}, italics: {name: "italics", global: false, description: "Returns an `<i>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, link: {name: "link", global: false, description: "Returns an `<a>` HTML element and sets the href attribute value", tags: _ref32, required: true, type: "(url: string) => string", schema: {kind: _s[4], type: "(url: string): string", schema: _emptyObject}}, small: {name: "small", global: false, description: "Returns a `<small>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, strike: {name: "strike", global: false, description: "Returns a `<strike>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, sub: {name: "sub", global: false, description: "Returns a `<sub>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, sup: {name: "sup", global: false, description: "Returns a `<sup>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, padStart: {name: "padStart", global: false, description: "Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the start (left) of the current string.", tags: _ref33, required: true, type: _s[72], schema: _ref29}, padEnd: {name: "padEnd", global: false, description: "Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the end (right) of the current string.", tags: _ref33, required: true, type: _s[72], schema: _ref29}, trimEnd: {name: "trimEnd", global: false, description: _s[74], tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, trimStart: {name: "trimStart", global: false, description: _s[75], tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, trimLeft: {name: "trimLeft", global: false, description: _s[75], tags: [{name: _s[18], text: "A legacy feature for browser compatibility. Use `trimStart` instead"}], required: true, type: _s[14], schema: _ref3}, trimRight: {name: "trimRight", global: false, description: _s[74], tags: [{name: _s[18], text: "A legacy feature for browser compatibility. Use `trimEnd` instead"}], required: true, type: _s[14], schema: _ref3}, matchAll: {name: "matchAll", global: false, description: "Matches a string with a regular expression, and returns an iterable of matches\ncontaining the results of that search.", tags: [_ref7], required: true, type: "(regexp: RegExp) => RegExpStringIterator<RegExpExecArray>", schema: {kind: _s[4], type: "(regexp: RegExp): RegExpStringIterator<RegExpExecArray>", schema: _emptyObject}}, replaceAll: {name: "replaceAll", global: false, description: "Replace all instances of a substring in a string, using a regular expression or search string.", tags: [_ref8, {name: _s[3], text: "replaceValue A string containing the text to replace for every successful match of searchValue in this string."}, _ref8, _ref9], required: true, type: _s[76], schema: _s[76]}, at: {name: "at", global: false, description: "Returns a new String consisting of the single UTF-16 code unit located at the specified index.", tags: [{name: _s[3], text: "index The zero-based index of the desired code unit. A negative index will count back from the last item."}], required: true, type: "(index: number) => string | undefined", schema: {kind: _s[4], type: "(index: number): string | undefined", schema: _emptyObject}}, isWellFormed: {name: "isWellFormed", global: false, description: "Returns true if all leading surrogates and trailing surrogates appear paired and in order.", tags: _emptyArray, required: true, type: "() => boolean", schema: {kind: _s[4], type: "(): boolean"}}, toWellFormed: {name: "toWellFormed", global: false, description: "Returns a string where all lone or out-of-order surrogates have been replaced by the Unicode replacement character (U+FFFD).", tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, "__@iterator@393": {name: "__@iterator@393", global: false, description: "Iterator", tags: _emptyArray, required: true, type: "() => StringIterator<string>", schema: {kind: _s[4], type: "(): StringIterator<string>"}}}}}}}, _ref22, {name: _s[97], global: false, description: _s[0], tags: [{name: _s[23], text: "'neutral'"}], required: false, type: _s[77], schema: {kind: _s[2], type: _s[77], schema: {"0": _s[1], "1": _s[98], "2": _s[99], "3": _s[100], "4": _s[101], "5": _s[102], "6": _s[103], "7": _s[104]}}}, {name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: "{ base?: ClassNameValue; icon?: ClassNameValue; externalIcon?: ClassNameValue; } | undefined", schema: {kind: _s[2], type: "{ base?: ClassNameValue; icon?: ClassNameValue; externalIcon?: ClassNameValue; } | undefined", schema: {"0": _s[1], "1": "{ base?: ClassNameValue; icon?: ClassNameValue; externalIcon?: ClassNameValue; }"}}}], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "88eyMBJHQNurmXlYUwTmdhaLShgDPgqpgPoXBxWoYGc"}}, ProseCard: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Card.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Card.vue", pascalName: "ProseCard", kebabName: "prose-card", chunkName: "components/prose-card", priority: 0, _scanned: true, meta: {type: 1, props: [{name: "to", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[43], schema: {kind: _s[2], type: _s[43], schema: {"0": _s[1], "1": _s[6], "2": {kind: _s[9], type: "St", schema: {name: {name: _s[26], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[44], schema: {kind: _s[2], type: _s[44], schema: {"0": _s[1], "1": _s[6], "2": "symbol"}}}, params: {name: "params", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[45], schema: {kind: _s[2], type: _s[45], schema: {"0": _s[1], "1": "_n"}}}, path: {name: _s[46], global: false, description: "A relative path to the current location. This property should be removed", tags: _emptyArray, required: false, type: _s[1], schema: _s[1]}, query: {name: _s[47], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[29], schema: {kind: _s[2], type: _s[29], schema: {"0": _s[1], "1": "In"}}}, hash: {name: _s[41], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, replace: {name: _s[33], global: false, description: _s[48], tags: _emptyArray, required: false, type: _s[20], schema: _ref31}, force: _ref21, state: {name: _s[51], global: false, description: _s[52], tags: _emptyArray, required: false, type: _s[30], schema: {kind: _s[2], type: _s[30], schema: {"0": _s[1], "1": {kind: _s[9], type: "Dn", schema: _emptyObject}}}}}}, "3": {kind: _s[9], type: "vt", schema: {path: {name: _s[46], global: false, description: "Percentage encoded pathname section of the URL.", tags: _emptyArray, required: true, type: _s[6], schema: _s[6]}, query: {name: _s[47], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[29], schema: _s[29]}, hash: {name: _s[41], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _s[5]}, replace: {name: _s[33], global: false, description: _s[48], tags: _emptyArray, required: false, type: _s[20], schema: _s[20]}, force: _ref21, state: {name: _s[51], global: false, description: _s[52], tags: _emptyArray, required: false, type: _s[30], schema: _s[30]}}}}}}, {name: _s[84], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[53], schema: {kind: _s[2], type: _s[53], schema: {"0": _s[1], "1": _s[25], "2": _s[85], "3": _s[86], "4": _s[87], "5": _s[88], "6": {kind: _s[9], type: "string & {}", schema: {toString: {name: _s[95], global: false, description: "Returns a string representation of a string.", tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, charAt: {name: "charAt", global: false, description: "Returns the character at the specified index.", tags: [{name: _s[3], text: "pos The zero-based index of the desired character."}], required: true, type: "(pos: number) => string", schema: {kind: _s[4], type: "(pos: number): string", schema: _emptyObject}}, charCodeAt: {name: "charCodeAt", global: false, description: "Returns the Unicode value of the character at the specified location.", tags: [{name: _s[3], text: "index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned."}], required: true, type: "(index: number) => number", schema: {kind: _s[4], type: "(index: number): number", schema: _emptyObject}}, concat: {name: "concat", global: false, description: "Returns a string that contains the concatenation of two or more strings.", tags: [{name: _s[3], text: "strings The strings to append to the end of the string."}], required: true, type: "(...strings: string[]) => string", schema: {kind: _s[4], type: "(...strings: string[]): string", schema: {"0": _s[6]}}}, indexOf: {name: "indexOf", global: false, description: "Returns the position of the first occurrence of a substring.", tags: [{name: _s[3], text: "searchString The substring to search for in the string"}, {name: _s[3], text: "position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string."}], required: true, type: _s[54], schema: _ref27}, lastIndexOf: {name: "lastIndexOf", global: false, description: "Returns the last occurrence of a substring in the string.", tags: [{name: _s[3], text: "searchString The substring to search for."}, {name: _s[3], text: "position The index at which to begin searching. If omitted, the search begins at the end of the string."}], required: true, type: _s[54], schema: _ref27}, localeCompare: {name: "localeCompare", global: false, description: "Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.", tags: [_ref4, _ref4, _ref5, _ref6, _ref4, _ref5, _ref6], required: true, type: _s[58], schema: _s[58]}, match: {name: "match", global: false, description: "Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string or an object that supports being matched against, and returns an array\ncontaining the results of that search, or null if no matches are found.", tags: [_ref7, {name: _s[3], text: "matcher An object that supports being matched against."}], required: true, type: _s[60], schema: _s[60]}, replace: {name: _s[33], global: false, description: "Replaces text in a string, using a regular expression or search string.\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\nReplaces text in a string, using an object that supports replacement within a string.", tags: [{name: _s[3], text: "searchValue A string or regular expression to search for."}, {name: _s[3], text: "replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced."}, _ref8, _ref9, {name: _s[3], text: "searchValue An object that supports searching for and replacing matches within a string."}, {name: _s[3], text: "replaceValue The replacement text."}, {name: _s[3], text: "searchValue A object can search for and replace matches within a string."}, _ref9], required: true, type: _s[61], schema: _s[61]}, search: {name: "search", global: false, description: "Finds the first substring match in a regular expression search.", tags: [{name: _s[3], text: "regexp The regular expression pattern and applicable flags."}, {name: _s[3], text: "searcher An object which supports searching within a string."}], required: true, type: _s[62], schema: _s[62]}, slice: {name: "slice", global: false, description: "Returns a section of a string.", tags: [{name: _s[3], text: "start The index to the beginning of the specified portion of stringObj."}, {name: _s[3], text: "end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\nIf this value is not specified, the substring continues to the end of stringObj."}], required: true, type: "(start?: number | undefined, end?: number | undefined) => string", schema: {kind: _s[4], type: "(start?: number | undefined, end?: number | undefined): string", schema: _emptyObject}}, split: {name: "split", global: false, description: "Split a string into substrings using the specified separator and return them as an array.", tags: [{name: _s[3], text: "separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned."}, _ref10, {name: _s[3], text: "splitter An object that can split a string."}, _ref10], required: true, type: _s[64], schema: _s[64]}, substring: {name: "substring", global: false, description: "Returns the substring at the specified location within a String object.", tags: [{name: _s[3], text: "start The zero-based index number indicating the beginning of the substring."}, {name: _s[3], text: "end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\nIf end is omitted, the characters from start through the end of the original string are returned."}], required: true, type: "(start: number, end?: number | undefined) => string", schema: {kind: _s[4], type: "(start: number, end?: number | undefined): string", schema: _emptyObject}}, toLowerCase: {name: "toLowerCase", global: false, description: "Converts all the alphabetic characters in a string to lowercase.", tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, toLocaleLowerCase: {name: "toLocaleLowerCase", global: false, description: "Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.", tags: _emptyArray, required: true, type: _s[31], schema: _s[31]}, toUpperCase: {name: "toUpperCase", global: false, description: "Converts all the alphabetic characters in a string to uppercase.", tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, toLocaleUpperCase: {name: "toLocaleUpperCase", global: false, description: "Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.", tags: _emptyArray, required: true, type: _s[31], schema: _s[31]}, trim: {name: "trim", global: false, description: "Removes the leading and trailing white space and line terminator characters from a string.", tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, length: {name: _s[96], global: false, description: "Returns the length of a String object.", tags: _emptyArray, required: true, type: _s[28], schema: _s[28]}, substr: {name: "substr", global: false, description: "Gets a substring beginning at the specified location and having the specified length.", tags: [_ref11, {name: _s[3], text: "from The starting position of the desired substring. The index of the first character in the string is zero."}, {name: _s[3], text: "length The number of characters to include in the returned substring."}], required: true, type: "(from: number, length?: number | undefined) => string", schema: {kind: _s[4], type: "(from: number, length?: number | undefined): string", schema: _emptyObject}}, valueOf: {name: "valueOf", global: false, description: "Returns the primitive value of the specified object.", tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, codePointAt: {name: "codePointAt", global: false, description: "Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\nthe String resulting from converting this object to a String.\nIf there is no element at that position, the result is undefined.\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.", tags: _emptyArray, required: true, type: "(pos: number) => number | undefined", schema: {kind: _s[4], type: "(pos: number): number | undefined", schema: _emptyObject}}, includes: {name: "includes", global: false, description: "Returns true if searchString appears as a substring of the result of converting this\nobject to a String, at one or more positions that are\ngreater than or equal to position; otherwise, returns false.", tags: [{name: _s[3], text: "searchString search string"}, {name: _s[3], text: "position If position is undefined, 0 is assumed, so as to search all of the String."}], required: true, type: _s[65], schema: _ref28}, endsWith: {name: "endsWith", global: false, description: "Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nendPosition – length(this). Otherwise returns false.", tags: _emptyArray, required: true, type: "(searchString: string, endPosition?: number | undefined) => boolean", schema: {kind: _s[4], type: "(searchString: string, endPosition?: number | undefined): boolean", schema: _emptyObject}}, normalize: {name: "normalize", global: false, description: "Returns the String value result of normalizing the string into the normalization form\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.", tags: [_ref12, _ref12], required: true, type: _s[68], schema: _s[68]}, repeat: {name: "repeat", global: false, description: "Returns a String value that is made from count copies appended together. If count is 0,\nthe empty string is returned.", tags: [{name: _s[3], text: "count number of copies to append"}], required: true, type: "(count: number) => string", schema: {kind: _s[4], type: "(count: number): string", schema: _emptyObject}}, startsWith: {name: "startsWith", global: false, description: "Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nposition. Otherwise returns false.", tags: _emptyArray, required: true, type: _s[65], schema: _ref28}, anchor: {name: "anchor", global: false, description: "Returns an `<a>` HTML anchor element and sets the name attribute to the text value", tags: [_ref11, {name: _s[3], text: _s[26]}], required: true, type: "(name: string) => string", schema: {kind: _s[4], type: "(name: string): string", schema: _emptyObject}}, big: {name: "big", global: false, description: "Returns a `<big>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, blink: {name: "blink", global: false, description: "Returns a `<blink>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, bold: {name: "bold", global: false, description: "Returns a `<b>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, fixed: {name: "fixed", global: false, description: "Returns a `<tt>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, fontcolor: {name: "fontcolor", global: false, description: "Returns a `<font>` HTML element and sets the color attribute value", tags: _ref32, required: true, type: "(color: string) => string", schema: {kind: _s[4], type: "(color: string): string", schema: _emptyObject}}, fontsize: {name: "fontsize", global: false, description: "Returns a `<font>` HTML element and sets the size attribute value", tags: [_ref11, _ref11], required: true, type: _s[69], schema: _s[69]}, italics: {name: "italics", global: false, description: "Returns an `<i>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, link: {name: "link", global: false, description: "Returns an `<a>` HTML element and sets the href attribute value", tags: _ref32, required: true, type: "(url: string) => string", schema: {kind: _s[4], type: "(url: string): string", schema: _emptyObject}}, small: {name: "small", global: false, description: "Returns a `<small>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, strike: {name: "strike", global: false, description: "Returns a `<strike>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, sub: {name: "sub", global: false, description: "Returns a `<sub>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, sup: {name: "sup", global: false, description: "Returns a `<sup>` HTML element", tags: _ref32, required: true, type: _s[14], schema: _ref3}, padStart: {name: "padStart", global: false, description: "Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the start (left) of the current string.", tags: _ref33, required: true, type: _s[72], schema: _ref29}, padEnd: {name: "padEnd", global: false, description: "Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the end (right) of the current string.", tags: _ref33, required: true, type: _s[72], schema: _ref29}, trimEnd: {name: "trimEnd", global: false, description: _s[74], tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, trimStart: {name: "trimStart", global: false, description: _s[75], tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, trimLeft: {name: "trimLeft", global: false, description: _s[75], tags: [{name: _s[18], text: "A legacy feature for browser compatibility. Use `trimStart` instead"}], required: true, type: _s[14], schema: _ref3}, trimRight: {name: "trimRight", global: false, description: _s[74], tags: [{name: _s[18], text: "A legacy feature for browser compatibility. Use `trimEnd` instead"}], required: true, type: _s[14], schema: _ref3}, matchAll: {name: "matchAll", global: false, description: "Matches a string with a regular expression, and returns an iterable of matches\ncontaining the results of that search.", tags: [_ref7], required: true, type: "(regexp: RegExp) => RegExpStringIterator<RegExpExecArray>", schema: {kind: _s[4], type: "(regexp: RegExp): RegExpStringIterator<RegExpExecArray>", schema: _emptyObject}}, replaceAll: {name: "replaceAll", global: false, description: "Replace all instances of a substring in a string, using a regular expression or search string.", tags: [_ref8, {name: _s[3], text: "replaceValue A string containing the text to replace for every successful match of searchValue in this string."}, _ref8, _ref9], required: true, type: _s[76], schema: _s[76]}, at: {name: "at", global: false, description: "Returns a new String consisting of the single UTF-16 code unit located at the specified index.", tags: [{name: _s[3], text: "index The zero-based index of the desired code unit. A negative index will count back from the last item."}], required: true, type: "(index: number) => string | undefined", schema: {kind: _s[4], type: "(index: number): string | undefined", schema: _emptyObject}}, isWellFormed: {name: "isWellFormed", global: false, description: "Returns true if all leading surrogates and trailing surrogates appear paired and in order.", tags: _emptyArray, required: true, type: "() => boolean", schema: {kind: _s[4], type: "(): boolean"}}, toWellFormed: {name: "toWellFormed", global: false, description: "Returns a string where all lone or out-of-order surrogates have been replaced by the Unicode replacement character (U+FFFD).", tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, "__@iterator@393": {name: "__@iterator@393", global: false, description: "Iterator", tags: _emptyArray, required: true, type: "() => StringIterator<string>", schema: {kind: _s[4], type: "(): StringIterator<string>"}}}}}}}, _ref22, {name: "title", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, _ref37, {name: _s[97], global: false, description: _s[0], tags: [{name: _s[23], text: "'primary'"}], required: false, type: _s[77], schema: {kind: _s[2], type: _s[77], schema: {"0": _s[1], "1": _s[98], "2": _s[99], "3": _s[100], "4": _s[101], "5": _s[102], "6": _s[103], "7": _s[104]}}}, {name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: "{ base?: ClassNameValue; icon?: ClassNameValue; title?: ClassNameValue; description?: ClassNameValue; externalIcon?: ClassNameValue; } | undefined", schema: {kind: _s[2], type: "{ base?: ClassNameValue; icon?: ClassNameValue; title?: ClassNameValue; description?: ClassNameValue; externalIcon?: ClassNameValue; } | undefined", schema: {"0": _s[1], "1": "{ base?: ClassNameValue; icon?: ClassNameValue; title?: ClassNameValue; description?: ClassNameValue; externalIcon?: ClassNameValue; }"}}}], slots: [_ref47, {name: "title", type: _s[8], description: _s[0], tags: _emptyArray, schema: _ref43}], events: _emptyArray, exposed: _emptyArray, hash: "5I2kawxGptVxEsWWRPDD6-y3tK57XkH33vY8Wle6yBI"}}, ProseCardGroup: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/CardGroup.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/CardGroup.vue", pascalName: "ProseCardGroup", kebabName: "prose-card-group", chunkName: "components/prose-card-group", priority: 0, _scanned: true, meta: {type: 1, props: _ref53, slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "HBAV13-gk94r9IVAwL1sQkhXVpErqjDbOor2CHXZ0ns"}}, ProseCode: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Code.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Code.vue", pascalName: "ProseCode", kebabName: "prose-code", chunkName: "components/prose-code", priority: 0, _scanned: true, meta: {type: 1, props: [{name: "lang", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, {name: _s[97], global: false, description: _s[0], tags: [{name: _s[23], text: "'neutral'"}], required: false, type: "\"neutral\" | \"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"error\" | undefined", schema: {kind: _s[2], type: "\"neutral\" | \"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"error\" | undefined", schema: {"0": _s[1], "1": _s[104], "2": _s[98], "3": _s[99], "4": _s[100], "5": _s[101], "6": _s[102], "7": _s[103]}}}, _ref52], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "7lGCZPgyONJhEMk2Vs6LQX63Gn9Bk1KvSmxYQUutPH8"}}, ProseCodeCollapse: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeCollapse.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeCollapse.vue", pascalName: "ProseCodeCollapse", kebabName: "prose-code-collapse", chunkName: "components/prose-code-collapse", priority: 0, _scanned: true, meta: {type: 1, props: [{name: _s[32], global: false, description: "The icon displayed to toggle the code.", tags: [{name: _s[23], text: "appConfig.ui.icons.chevronDown"}], required: false, type: _s[7], schema: _s[7]}, {name: _s[26], global: false, description: "The name displayed in the trigger label.", tags: [{name: _s[23], text: "t('prose.codeCollapse.name')"}], required: false, type: _s[5], schema: _ref25}, {name: "openText", global: false, description: "The text displayed when the code is collapsed.", tags: [{name: _s[23], text: "t('prose.codeCollapse.openText')"}], required: false, type: _s[5], schema: _ref25}, {name: "closeText", global: false, description: "The text displayed when the code is expanded.", tags: [{name: _s[23], text: "t('prose.codeCollapse.closeText')"}], required: false, type: _s[5], schema: _ref25}, {name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: "{ root?: ClassNameValue; footer?: ClassNameValue; trigger?: ClassNameValue; triggerIcon?: ClassNameValue; } | undefined", schema: {kind: _s[2], type: "{ root?: ClassNameValue; footer?: ClassNameValue; trigger?: ClassNameValue; triggerIcon?: ClassNameValue; } | undefined", schema: {"0": _s[1], "1": "{ root?: ClassNameValue; footer?: ClassNameValue; trigger?: ClassNameValue; triggerIcon?: ClassNameValue; }"}}}, {name: "open", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[20], schema: _ref31}], slots: _ref51, events: [{name: "update:open", description: _s[0], tags: _emptyArray, type: "[value: boolean]", signature: "(event: \"update:open\", value: boolean): void", schema: [{kind: _s[2], type: "boolean", schema: [_s[24], _s[27]]}]}], exposed: _emptyArray, hash: "w7XcFVik9-za_pFMRmk0eBGrnlNgA9t96NYMHlxjXVQ"}}, ProseCodeGroup: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeGroup.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeGroup.vue", pascalName: "ProseCodeGroup", kebabName: "prose-code-group", chunkName: "components/prose-code-group", priority: 0, _scanned: true, meta: {type: 1, props: [{name: _s[23], global: false, description: "The default tab to select.", tags: [{name: _s[78], text: "'1'"}], required: false, type: _s[5], schema: _ref25}, {name: "sync", global: false, description: "Sync the selected tab with a local storage key.", tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, {name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: "{ root?: ClassNameValue; list?: ClassNameValue; indicator?: ClassNameValue; trigger?: ClassNameValue; triggerIcon?: ClassNameValue; triggerLabel?: ClassNameValue; } | undefined", schema: {kind: _s[2], type: "{ root?: ClassNameValue; list?: ClassNameValue; indicator?: ClassNameValue; trigger?: ClassNameValue; triggerIcon?: ClassNameValue; triggerLabel?: ClassNameValue; } | undefined", schema: {"0": _s[1], "1": "{ root?: ClassNameValue; list?: ClassNameValue; indicator?: ClassNameValue; trigger?: ClassNameValue; triggerIcon?: ClassNameValue; triggerLabel?: ClassNameValue; }"}}}, {name: _s[105], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _ref25}], slots: _ref51, events: _ref49, exposed: _emptyArray, hash: "lMIgxs8shpIHIZ-J7mCgMs6rObzFCmCNuxINKusYUms"}}, ProseCodeIcon: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeIcon.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeIcon.vue", pascalName: "ProseCodeIcon", kebabName: "prose-code-icon", chunkName: "components/prose-code-icon", priority: 0, _scanned: true, meta: {type: 1, props: [_ref22, {name: "filename", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _ref25}], slots: _emptyArray, events: _emptyArray, exposed: _emptyArray, hash: "0s2IStwZrVO_BlezsgRBv33aB2J0zuPaRMMvVbG2FvQ"}}, ProseCodePreview: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/CodePreview.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/CodePreview.vue", pascalName: "ProseCodePreview", kebabName: "prose-code-preview", chunkName: "components/prose-code-preview", priority: 0, _scanned: true, meta: {type: 1, props: [{name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: "{ root?: ClassNameValue; preview?: ClassNameValue; code?: ClassNameValue; } | undefined", schema: {kind: _s[2], type: "{ root?: ClassNameValue; preview?: ClassNameValue; code?: ClassNameValue; } | undefined", schema: {"0": _s[1], "1": "{ root?: ClassNameValue; preview?: ClassNameValue; code?: ClassNameValue; }"}}}], slots: [_ref47, {name: "code", type: _s[8], description: _s[0], tags: _emptyArray, schema: _ref43}], events: _emptyArray, exposed: _emptyArray, hash: "lonniHVNDmW315-NCYq-hE_KbIWWEzZqN8WM2lJjOwc"}}, ProseCodeTree: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeTree.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/CodeTree.vue", pascalName: "ProseCodeTree", kebabName: "prose-code-tree", chunkName: "components/prose-code-tree", priority: 0, _scanned: true, meta: {type: 1, props: [{name: "items", global: false, description: _s[0], tags: _emptyArray, required: false, type: "TreeItem[] | undefined", schema: {kind: _s[2], type: "TreeItem[] | undefined", schema: {"0": _s[1], "1": {kind: _s[39], type: "TreeItem[]", schema: [{kind: _s[9], type: "TreeItem", schema: {label: _ref20, icon: {name: _s[32], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, component: {name: "component", global: false, description: _s[0], tags: _emptyArray, required: true, type: _s[7], schema: _s[7]}}}]}}}}, {name: _s[105], global: false, description: "The selected path.", tags: [{name: _s[78], text: "'package.json'"}], required: false, type: _s[5], schema: _ref25}, {name: _s[23], global: false, description: "The default path to select.", tags: [{name: _s[78], text: "'package.json'"}], required: false, type: _s[5], schema: _ref25}, {name: "expandAll", global: false, description: "Expand all directories by default.", tags: [{name: _s[23], text: _s[24]}], required: false, type: _s[20], schema: _ref31}, {name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: "{ root?: ClassNameValue; list?: ClassNameValue; item?: ClassNameValue; listWithChildren?: ClassNameValue; itemWithChildren?: ClassNameValue; link?: ClassNameValue; linkLeadingIcon?: ClassNameValue; linkLabel?: ClassNameValue; linkTrailing?: ClassNameValue; linkTrailingIcon?: ClassNameValue; content?: ClassNameValue; } | undefined", schema: {kind: _s[2], type: "{ root?: ClassNameValue; list?: ClassNameValue; item?: ClassNameValue; listWithChildren?: ClassNameValue; itemWithChildren?: ClassNameValue; link?: ClassNameValue; linkLeadingIcon?: ClassNameValue; linkLabel?: ClassNameValue; linkTrailing?: ClassNameValue; linkTrailingIcon?: ClassNameValue; content?: ClassNameValue; } | undefined", schema: {"0": _s[1], "1": "{ root?: ClassNameValue; list?: ClassNameValue; item?: ClassNameValue; listWithChildren?: ClassNameValue; itemWithChildren?: ClassNameValue; link?: ClassNameValue; linkLeadingIcon?: ClassNameValue; linkLabel?: ClassNameValue; linkTrailing?: ClassNameValue; linkTrailingIcon?: ClassNameValue; content?: ClassNameValue; }"}}}], slots: _ref51, events: _ref49, exposed: _emptyArray, hash: "9X63pAIWTErOVRU3cCbO86f6_SGj5j1OGZb3-3iMfv8"}}, ProseCollapsible: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Collapsible.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Collapsible.vue", pascalName: "ProseCollapsible", kebabName: "prose-collapsible", chunkName: "components/prose-collapsible", priority: 0, _scanned: true, meta: {type: 1, props: [{name: _s[32], global: false, description: "The icon displayed to toggle the collapsible.", tags: [{name: _s[23], text: "appConfig.ui.icons.chevronDown"}], required: false, type: _s[7], schema: _s[7]}, {name: _s[26], global: false, description: "The name displayed in the trigger label.", tags: [{name: _s[23], text: "t('prose.collapsible.name')"}], required: false, type: _s[5], schema: _ref25}, {name: "openText", global: false, description: "The text displayed when the collapsible is open.", tags: [{name: _s[23], text: "t('prose.collapsible.openText')"}], required: false, type: _s[5], schema: _ref25}, {name: "closeText", global: false, description: "The text displayed when the collapsible is closed.", tags: [{name: _s[23], text: "t('prose.collapsible.closeText')"}], required: false, type: _s[5], schema: _ref25}, {name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: "({ root?: ClassNameValue; trigger?: ClassNameValue; triggerIcon?: ClassNameValue; triggerLabel?: ClassNameValue; content?: ClassNameValue; } & { root?: ClassNameValue; content?: ClassNameValue; }) | undefined", schema: {kind: _s[2], type: "({ root?: ClassNameValue; trigger?: ClassNameValue; triggerIcon?: ClassNameValue; triggerLabel?: ClassNameValue; content?: ClassNameValue; } & { root?: ClassNameValue; content?: ClassNameValue; }) | undefined", schema: {"0": _s[1], "1": {kind: _s[9], type: "{ root?: ClassNameValue; trigger?: ClassNameValue; triggerIcon?: ClassNameValue; triggerLabel?: ClassNameValue; content?: ClassNameValue; } & { root?: ClassNameValue; content?: ClassNameValue; }", schema: {root: _ref48, trigger: _ref18, triggerIcon: {name: "triggerIcon", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]}, triggerLabel: {name: "triggerLabel", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]}, content: _ref19}}}}}], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "jvuD4tJDe6Xm5VcoWlMWPG93fCnwECEirYqYECza9UY"}}, ProseEm: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Em.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Em.vue", pascalName: "ProseEm", kebabName: "prose-em", chunkName: "components/prose-em", priority: 0, _scanned: true, meta: {type: 1, props: _ref53, slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "hvha0B-E37NVAAy9B8gWDmvWOcjut2gld5TgMh665n8"}}, ProseField: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Field.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Field.vue", pascalName: "ProseField", kebabName: "prose-field", chunkName: "components/prose-field", priority: 0, _scanned: true, meta: {type: 1, props: [{name: "as", global: false, description: "The element or component this component should render as.", tags: [{name: _s[23], text: "'div'"}], required: false, type: _s[7], schema: _s[7]}, {name: _s[26], global: false, description: "The name of the field.", tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, {name: "type", global: false, description: "Expected type of the field's value", tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, {name: _s[42], global: false, description: "Description of the field", tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, {name: "required", global: false, description: "Indicate whether the field is required", tags: _emptyArray, required: false, type: _s[20], schema: _ref31}, {name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: "{ root?: ClassNameValue; container?: ClassNameValue; name?: ClassNameValue; wrapper?: ClassNameValue; required?: ClassNameValue; type?: ClassNameValue; description?: ClassNameValue; } | undefined", schema: {kind: _s[2], type: "{ root?: ClassNameValue; container?: ClassNameValue; name?: ClassNameValue; wrapper?: ClassNameValue; required?: ClassNameValue; type?: ClassNameValue; description?: ClassNameValue; } | undefined", schema: {"0": _s[1], "1": "{ root?: ClassNameValue; container?: ClassNameValue; name?: ClassNameValue; wrapper?: ClassNameValue; required?: ClassNameValue; type?: ClassNameValue; description?: ClassNameValue; }"}}}], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "McNUC82204unziR_JkSOG2qwq_44_tzzb3rtDenkmzM"}}, ProseFieldGroup: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/FieldGroup.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/FieldGroup.vue", pascalName: "ProseFieldGroup", kebabName: "prose-field-group", chunkName: "components/prose-field-group", priority: 0, _scanned: true, meta: {type: 1, props: [{name: "as", global: false, description: "The element or component this component should render as.", tags: [{name: _s[23], text: "'div'"}], required: false, type: _s[7], schema: _s[7]}, _ref52], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "-RENvhOLej5Ca2KHxpzrFzyDLvI-i7WKPVeuOJ7M-vA"}}, ProseH1: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/H1.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/H1.vue", pascalName: "ProseH1", kebabName: "prose-h1", chunkName: "components/prose-h1", priority: 0, _scanned: true, meta: {type: 1, props: [_ref38, {name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[79], schema: {kind: _s[2], type: _s[79], schema: {"0": _s[1], "1": "{ base?: ClassNameValue; link?: ClassNameValue; }"}}}], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "W4eBcoxJcZXUvOMkNh9xUixjaLOmqkOlOMxASKv1d9g"}}, ProseH2: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/H2.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/H2.vue", pascalName: "ProseH2", kebabName: "prose-h2", chunkName: "components/prose-h2", priority: 0, _scanned: true, meta: {type: 1, props: [_ref38, {name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[80], schema: {kind: _s[2], type: _s[80], schema: {"0": _s[1], "1": "{ base?: ClassNameValue; leading?: ClassNameValue; leadingIcon?: ClassNameValue; link?: ClassNameValue; }"}}}], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "fMGhf7q4vjEl3utcrphXB7uhycB6TiS_BVjAZM7GA_g"}}, ProseH3: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/H3.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/H3.vue", pascalName: "ProseH3", kebabName: "prose-h3", chunkName: "components/prose-h3", priority: 0, _scanned: true, meta: {type: 1, props: [_ref38, {name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[80], schema: {kind: _s[2], type: _s[80], schema: {"0": _s[1], "1": "{ base?: ClassNameValue; leading?: ClassNameValue; leadingIcon?: ClassNameValue; link?: ClassNameValue; }"}}}], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "b5hB4lYQY-BCQUZnZ4ERiz1aQBPg9mo0oJLzSZoQfco"}}, ProseH4: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/H4.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/H4.vue", pascalName: "ProseH4", kebabName: "prose-h4", chunkName: "components/prose-h4", priority: 0, _scanned: true, meta: {type: 1, props: [_ref38, {name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[79], schema: {kind: _s[2], type: _s[79], schema: {"0": _s[1], "1": "{ base?: ClassNameValue; link?: ClassNameValue; }"}}}], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "6KX-_765cGGcSAjITrXv90Qpk88_R5baqTF2LDuJsHE"}}, ProseHr: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Hr.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Hr.vue", pascalName: "ProseHr", kebabName: "prose-hr", chunkName: "components/prose-hr", priority: 0, _scanned: true, meta: {type: 1, props: [_ref23, _ref52], slots: _emptyArray, events: _emptyArray, exposed: _emptyArray, hash: "WtQ-EZ3AaqiOuEuicOtRqCiUWf_fN6Y4MYf3Iu7je-c"}}, ProseIcon: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Icon.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Icon.vue", pascalName: "ProseIcon", kebabName: "prose-icon", chunkName: "components/prose-icon", priority: 0, _scanned: true, meta: {type: 1, props: [{name: _s[26], global: false, description: _s[0], tags: _emptyArray, required: true, type: _s[6], schema: _s[6]}, _ref23, _ref52], slots: _emptyArray, events: _emptyArray, exposed: _emptyArray, hash: "fbyl-NT16iwirvJATe8LQyDk0CCnk5mrJ68fpQKC85w"}}, ProseImg: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Img.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Img.vue", pascalName: "ProseImg", kebabName: "prose-img", chunkName: "components/prose-img", priority: 0, _scanned: true, meta: {type: 1, props: [{name: "src", global: false, description: _s[0], tags: _emptyArray, required: true, type: _s[6], schema: _s[6]}, {name: "alt", global: false, description: _s[0], tags: _emptyArray, required: true, type: _s[6], schema: _s[6]}, _ref23, {name: "width", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[38], schema: _ref35}, {name: "height", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[38], schema: _ref35}, {name: "zoom", global: false, description: "Zoom image on click", tags: [{name: _s[23], text: _s[27]}], required: false, type: _s[20], schema: _ref31}, {name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: "{ base?: ClassNameValue; overlay?: ClassNameValue; content?: ClassNameValue; zoomedImage?: ClassNameValue; } | undefined", schema: {kind: _s[2], type: "{ base?: ClassNameValue; overlay?: ClassNameValue; content?: ClassNameValue; zoomedImage?: ClassNameValue; } | undefined", schema: {"0": _s[1], "1": "{ base?: ClassNameValue; overlay?: ClassNameValue; content?: ClassNameValue; zoomedImage?: ClassNameValue; }"}}}], slots: _emptyArray, events: _emptyArray, exposed: _emptyArray, hash: "bzO5bFZqo5rZ1nKrSCbqmKkDMXc0f2nqSSnMMUS6uAU"}}, ProseKbd: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Kbd.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Kbd.vue", pascalName: "ProseKbd", kebabName: "prose-kbd", chunkName: "components/prose-kbd", priority: 0, _scanned: true, meta: {type: 1, props: [{name: "value", global: false, description: _s[0], tags: _emptyArray, required: true, type: _s[6], schema: _s[6]}, _ref23, _ref52], slots: _emptyArray, events: _emptyArray, exposed: _emptyArray, hash: "-bk5ezfoKbH46ZsjPIVYksL9gJFT3YBR803c5nJMyuI"}}, ProseLi: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Li.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Li.vue", pascalName: "ProseLi", kebabName: "prose-li", chunkName: "components/prose-li", priority: 0, _scanned: true, meta: {type: 1, props: _ref53, slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "L9XTqk-3htKB6TjGHIQYgykSkwnIToIzzQkjjy2Cx6E"}}, ProseOl: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Ol.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Ol.vue", pascalName: "ProseOl", kebabName: "prose-ol", chunkName: "components/prose-ol", priority: 0, _scanned: true, meta: {type: 1, props: _ref53, slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "t4o27Gfxt59wictHxzVsRXLeugmtsJIKsr_RoaP0l-E"}}, ProseP: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/P.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/P.vue", pascalName: "ProseP", kebabName: "prose-p", chunkName: "components/prose-p", priority: 0, _scanned: true, meta: {type: 1, props: _ref53, slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "yoUmmbCLa9zFJZUcJS2GXNeCmIhZpxFbKtfVqbQYRgs"}}, ProsePre: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Pre.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Pre.vue", pascalName: "ProsePre", kebabName: "prose-pre", chunkName: "components/prose-pre", priority: 0, _scanned: true, meta: {type: 1, props: [_ref22, {name: "code", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, {name: "language", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, {name: "filename", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, {name: "highlights", global: false, description: _s[0], tags: _emptyArray, required: false, type: "number[] | undefined", schema: {kind: _s[2], type: "number[] | undefined", schema: {"0": _s[1], "1": {kind: _s[39], type: "number[]", schema: [_s[28]]}}}}, {name: "hideHeader", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[20], schema: _ref31}, {name: "meta", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, {name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: "{ root?: ClassNameValue; header?: ClassNameValue; filename?: ClassNameValue; icon?: ClassNameValue; copy?: ClassNameValue; base?: ClassNameValue; } | undefined", schema: {kind: _s[2], type: "{ root?: ClassNameValue; header?: ClassNameValue; filename?: ClassNameValue; icon?: ClassNameValue; copy?: ClassNameValue; base?: ClassNameValue; } | undefined", schema: {"0": _s[1], "1": "{ root?: ClassNameValue; header?: ClassNameValue; filename?: ClassNameValue; icon?: ClassNameValue; copy?: ClassNameValue; base?: ClassNameValue; }"}}}], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "kAjytAq6GlMvpkr-y5FndOu8ESuSRr1i_quz06bealU"}}, ProseScript: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Script.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Script.vue", pascalName: "ProseScript", kebabName: "prose-script", chunkName: "components/prose-script", priority: 0, _scanned: true, meta: {type: 1, props: [{name: "src", global: false, description: _s[0], tags: _emptyArray, required: true, type: _s[6], schema: _s[6]}], slots: _emptyArray, events: _emptyArray, exposed: _emptyArray, hash: "P5a1W22-fzQL0JnsptjsM6xO3R0fJPAQ7vn8EKc7kQc"}}, ProseSteps: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Steps.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Steps.vue", pascalName: "ProseSteps", kebabName: "prose-steps", chunkName: "components/prose-steps", priority: 0, _scanned: true, meta: {type: 1, props: [{name: "level", global: false, description: "The heading level to apply to the steps.", tags: [{name: _s[23], text: "'3'"}], required: false, type: "\"3\" | \"2\" | \"4\" | undefined", schema: {kind: _s[2], type: "\"3\" | \"2\" | \"4\" | undefined", schema: {"0": _s[1], "1": "\"3\"", "2": "\"2\"", "3": "\"4\""}}}, _ref52], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "DLVd_9BSdlTw0zEJPJv70_AgqXSXSeFaHDGgCADCgNo"}}, ProseStrong: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Strong.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Strong.vue", pascalName: "ProseStrong", kebabName: "prose-strong", chunkName: "components/prose-strong", priority: 0, _scanned: true, meta: {type: 1, props: _ref53, slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "3fb1lE7eh8dsgNiFWduUu73Y_hSSOQyp61L4rag7xmc"}}, ProseTable: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Table.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Table.vue", pascalName: "ProseTable", kebabName: "prose-table", chunkName: "components/prose-table", priority: 0, _scanned: true, meta: {type: 1, props: [{name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: "{ root?: ClassNameValue; base?: ClassNameValue; } | undefined", schema: {kind: _s[2], type: "{ root?: ClassNameValue; base?: ClassNameValue; } | undefined", schema: {"0": _s[1], "1": "{ root?: ClassNameValue; base?: ClassNameValue; }"}}}], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "dWkFq566zAJEk9utSv-W_nitBHFHkVMYbQ4oyhj6qbY"}}, ProseTabs: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Tabs.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Tabs.vue", pascalName: "ProseTabs", kebabName: "prose-tabs", chunkName: "components/prose-tabs", priority: 0, _scanned: true, meta: {type: 1, props: [{name: _s[23], global: false, description: "The default tab to select.", tags: [{name: _s[78], text: "'1'"}], required: false, type: _s[5], schema: _ref25}, {name: "sync", global: false, description: "Sync the selected tab with a local storage key.", tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, {name: _s[41], global: false, description: "The hash to scroll to when the tab is selected.", tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, {name: _s[13], global: false, description: _s[0], tags: _emptyArray, required: false, type: "({ root?: ClassNameValue; } & { root?: ClassNameValue; list?: ClassNameValue; indicator?: ClassNameValue; trigger?: ClassNameValue; leadingIcon?: ClassNameValue; leadingAvatar?: ClassNameValue; leadingAvatarSize?: ClassNameValue; label?: ClassNameValue; trailingBadge?: ClassNameValue; trailingBadgeSize?: ClassNameValue; content?: ClassNameValue; }) | undefined", schema: {kind: _s[2], type: "({ root?: ClassNameValue; } & { root?: ClassNameValue; list?: ClassNameValue; indicator?: ClassNameValue; trigger?: ClassNameValue; leadingIcon?: ClassNameValue; leadingAvatar?: ClassNameValue; leadingAvatarSize?: ClassNameValue; label?: ClassNameValue; trailingBadge?: ClassNameValue; trailingBadgeSize?: ClassNameValue; content?: ClassNameValue; }) | undefined", schema: {"0": _s[1], "1": {kind: _s[9], type: "{ root?: ClassNameValue; } & { root?: ClassNameValue; list?: ClassNameValue; indicator?: ClassNameValue; trigger?: ClassNameValue; leadingIcon?: ClassNameValue; leadingAvatar?: ClassNameValue; leadingAvatarSize?: ClassNameValue; label?: ClassNameValue; trailingBadge?: ClassNameValue; trailingBadgeSize?: ClassNameValue; content?: ClassNameValue; }", schema: {root: _ref48, list: {name: "list", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]}, indicator: {name: "indicator", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]}, trigger: _ref18, leadingIcon: {name: "leadingIcon", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]}, leadingAvatar: {name: "leadingAvatar", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]}, leadingAvatarSize: {name: "leadingAvatarSize", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]}, label: {name: _s[40], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]}, trailingBadge: {name: "trailingBadge", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]}, trailingBadgeSize: {name: "trailingBadgeSize", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[10], schema: _s[10]}, content: _ref19}}}}}, {name: _s[105], global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _ref25}], slots: _ref51, events: _ref49, exposed: _emptyArray, hash: "wd2chLahbuSsvSPwaKISsgbq6ZwjSXZfxV50-cD-Tok"}}, ProseTabsItem: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/TabsItem.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/TabsItem.vue", pascalName: "ProseTabsItem", kebabName: "prose-tabs-item", chunkName: "components/prose-tabs-item", priority: 0, _scanned: true, meta: {type: 1, props: [_ref20, _ref37, _ref52], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "ZtqBUyFduDvsaGGtLI2uunJvpv5ZaJs4CoHYkLp0gpQ"}}, ProseTbody: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Tbody.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Tbody.vue", pascalName: "ProseTbody", kebabName: "prose-tbody", chunkName: "components/prose-tbody", priority: 0, _scanned: true, meta: {type: 1, props: _ref53, slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "KF4xY6ZVThY4dBle82JCBLZzHxiW4WrsToZutTBbBQE"}}, ProseTd: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Td.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Td.vue", pascalName: "ProseTd", kebabName: "prose-td", chunkName: "components/prose-td", priority: 0, _scanned: true, meta: {type: 1, props: [{name: "align", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[82], schema: {kind: _s[2], type: _s[82], schema: {"0": _s[1], "1": "\"left\"", "2": "\"center\"", "3": "\"right\""}}}, _ref52], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "P2lmxwsYBddDR5Dyte8J-exMz5BrOMvw2fh5z2YasgU"}}, ProseTh: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Th.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Th.vue", pascalName: "ProseTh", kebabName: "prose-th", chunkName: "components/prose-th", priority: 0, _scanned: true, meta: {type: 1, props: [{name: "align", global: false, description: _s[0], tags: _emptyArray, required: false, type: _s[82], schema: {kind: _s[2], type: _s[82], schema: {"0": _s[1], "1": "\"left\"", "2": "\"center\"", "3": "\"right\""}}}, _ref52], slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "ZCpXZVEAUTXnQBmuxNWXh3OYEBnctRmGouF5hRn-Ue8"}}, ProseThead: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Thead.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Thead.vue", pascalName: "ProseThead", kebabName: "prose-thead", chunkName: "components/prose-thead", priority: 0, _scanned: true, meta: {type: 1, props: _ref53, slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "kXhiORs_iKy7gdaFjt0tkX3aSB-0UoS50TU2TbwgBGA"}}, ProseTr: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Tr.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Tr.vue", pascalName: "ProseTr", kebabName: "prose-tr", chunkName: "components/prose-tr", priority: 0, _scanned: true, meta: {type: 1, props: _ref53, slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "KcqG5TblaWFGFQ_2IBrD_rh3mXeo0N_MKdzJr4nhnIc"}}, ProseUl: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Ul.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/Ul.vue", pascalName: "ProseUl", kebabName: "prose-ul", chunkName: "components/prose-ul", priority: 0, _scanned: true, meta: {type: 1, props: _ref53, slots: _ref51, events: _emptyArray, exposed: _emptyArray, hash: "rzFF-jFBTYXONA148wN9N0M5p7dRzeRYPuEHWNdEpU0"}}, ProseCaution: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Caution.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Caution.vue", pascalName: "ProseCaution", kebabName: "prose-caution", chunkName: "components/prose-caution", priority: 0, _scanned: true, meta: _ref24}, ProseNote: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Note.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Note.vue", pascalName: "ProseNote", kebabName: "prose-note", chunkName: "components/prose-note", priority: 0, _scanned: true, meta: _ref24}, ProseTip: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Tip.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Tip.vue", pascalName: "ProseTip", kebabName: "prose-tip", chunkName: "components/prose-tip", priority: 0, _scanned: true, meta: _ref24}, ProseWarning: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Warning.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxt+ui@4.5.1_@nuxt+content@3.12.0_better-sqlite3@12.8.0_magicast@0.5.2_valibot@1.2.0__7ff80a9185de8c0d0f2401a2d2b0ad17/node_modules/@nuxt/ui/dist/runtime/components/prose/callout/Warning.vue", pascalName: "ProseWarning", kebabName: "prose-warning", chunkName: "components/prose-warning", priority: 0, _scanned: true, meta: _ref24}, ProseH5: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue", pascalName: "ProseH5", kebabName: "prose-h5", chunkName: "components/prose-h5", priority: 0, _scanned: true, meta: {type: 1, props: [_ref38], slots: _emptyArray, events: _emptyArray, exposed: _emptyArray, hash: "7NpFNd5Rf6HVlizsmOfqORLvw42su90eq6uzqbwPPAc"}}, ProseH6: {mode: _s[11], global: true, prefetch: false, preload: false, filePath: "node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue", declarationPath: "/home/lucy/git/Helltop/node_modules/.pnpm/@nuxtjs+mdc@0.20.2_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue", pascalName: "ProseH6", kebabName: "prose-h6", chunkName: "components/prose-h6", priority: 0, _scanned: true, meta: {type: 1, props: [_ref38], slots: _emptyArray, events: _emptyArray, exposed: _emptyArray, hash: "7NpFNd5Rf6HVlizsmOfqORLvw42su90eq6uzqbwPPAc"}}, Icon: {chunkName: "components/icon", global: true, kebabName: _s[32], pascalName: "Icon", prefetch: false, preload: false, mode: _s[11], priority: 0, meta: {type: 1, props: [{name: _s[26], global: false, description: _s[0], tags: _emptyArray, required: true, type: _s[6], schema: _s[6]}, {name: "mode", global: false, default: _s[25], description: _s[0], tags: _emptyArray, required: false, type: _s[5], schema: _ref25}, {name: "size", global: false, default: _s[25], description: _s[0], tags: _emptyArray, required: false, type: _s[38], schema: _ref35}, {name: "customize", global: false, default: _s[25], description: _s[0], tags: _emptyArray, required: false, type: "boolean | Function | null | undefined", schema: {kind: _s[2], type: "boolean | Function | null | undefined", schema: {"0": _s[1], "1": _s[25], "2": _s[24], "3": _s[27], "4": {kind: _s[9], type: _s[109], schema: {apply: {name: "apply", global: false, description: "Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.", tags: [{name: _s[3], text: "thisArg The object to be used as the this object."}, {name: _s[3], text: "argArray A set of arguments to be passed to the function."}], required: true, type: "(this: Function, thisArg: any, argArray?: any) => any", schema: {kind: _s[4], type: "(this: Function, thisArg: any, argArray?: any): any", schema: _emptyObject}}, call: {name: "call", global: false, description: "Calls a method of an object, substituting another object for the current object.", tags: [{name: _s[3], text: "thisArg The object to be used as the current object."}, {name: _s[3], text: "argArray A list of arguments to be passed to the method."}], required: true, type: "(this: Function, thisArg: any, ...argArray: any[]) => any", schema: {kind: _s[4], type: "(this: Function, thisArg: any, ...argArray: any[]): any", schema: _emptyObject}}, bind: {name: "bind", global: false, description: "For a given function, creates a bound function that has the same body as the original function.\nThe this object of the bound function is associated with the specified object, and has the specified initial parameters.", tags: [{name: _s[3], text: "thisArg An object to which the this keyword can refer inside the new function."}, {name: _s[3], text: "argArray A list of arguments to be passed to the new function."}], required: true, type: "(this: Function, thisArg: any, ...argArray: any[]) => any", schema: {kind: _s[4], type: "(this: Function, thisArg: any, ...argArray: any[]): any", schema: _emptyObject}}, toString: {name: _s[95], global: false, description: "Returns a string representation of a function.", tags: _emptyArray, required: true, type: _s[14], schema: _ref3}, prototype: {name: "prototype", global: false, description: _s[0], tags: _emptyArray, required: true, type: _s[7], schema: _s[7]}, length: {name: _s[96], global: false, description: _s[0], tags: _emptyArray, required: true, type: _s[28], schema: _s[28]}, arguments: {name: "arguments", global: false, description: _s[0], tags: _emptyArray, required: true, type: _s[7], schema: _s[7]}, caller: {name: "caller", global: false, description: _s[0], tags: _emptyArray, required: true, type: _s[109], schema: _s[109]}, name: {name: _s[26], global: false, description: "Returns the name of the function. Function names are read-only and can not be changed.", tags: _emptyArray, required: true, type: _s[6], schema: _s[6]}, "__@hasInstance@493": {name: "__@hasInstance@493", global: false, description: "Determines whether the given value inherits from this function if this function was used\nas a constructor function.\n\nA constructor function can control which objects are recognized as its instances by\n'instanceof' by overriding this method.", tags: _emptyArray, required: true, type: "(value: any) => boolean", schema: {kind: _s[4], type: "(value: any): boolean", schema: _emptyObject}}, "__@metadata@495": {name: "__@metadata@495", global: false, description: _s[0], tags: _emptyArray, required: true, type: "DecoratorMetadataObject | null", schema: {kind: _s[2], type: "DecoratorMetadataObject | null", schema: {"0": _s[25], "1": {kind: _s[9], type: "DecoratorMetadataObject", schema: _emptyObject}}}}}}}}}], slots: _emptyArray, events: _emptyArray, exposed: _emptyArray, hash: "aFktfg79RoxhUJUbTqae26vK6eRtWxXTPNQOUXaL02A"}, name: "Icon", filePath: "node_modules/.pnpm/@nuxt+icon@2.2.1_magicast@0.5.2_vite@7.3.1_@types+node@25.5.0_jiti@2.6.1_lightningcss@1_dafee9dd5d55e91ecb455eeceb45ba8b/node_modules/@nuxt/icon/dist/runtime/components/index.js"}};

const highlight = {"theme":{"light":"material-theme-lighter","default":"github-light","dark":"github-dark"}};

function filterComponents(components, options) {
  const { include = [], exclude = [] } = options;
  if (components.length === 0) {
    return [];
  }
  let result = components;
  if (include.length > 0) {
    result = result.filter((component) => matchAnyPattern(component, include));
  }
  if (exclude.length > 0) {
    result = result.filter((component) => !matchAnyPattern(component, exclude));
  }
  return result;
}
function matchAnyPattern(component, patterns) {
  return patterns.some((pattern) => {
    const value = pattern.includes("/") ? component.path : component.name;
    return minimatch(value, pattern);
  });
}

const _FeKNbb = eventHandler(async (event) => {
  await requireStudioAuth();
  const config = useRuntimeConfig();
  const mappedComponents = Object.values(components).map(({ pascalName, filePath, meta }) => {
    return {
      name: pascalName,
      path: filePath,
      meta: {
        props: meta.props,
        slots: meta.slots,
        events: meta.events
      }
    };
  });
  const filteredComponents = filterComponents(
    mappedComponents,
    config.studio?.meta?.components
  );
  return {
    markdownConfig: config.studio.markdown || {},
    highlightTheme: highlight?.theme || { default: "github-light", dark: "github-dark", light: "github-light" },
    components: filteredComponents
  };
});

const n=()=>"\nconst DB_NAME = 'studio-media'\nconst STORE_NAME = 'drafts'\n\nconst DraftStatus = {\n  Deleted: 'deleted',\n  Created: 'created',\n  Updated: 'updated',\n  Pristine: 'pristine'\n}\n\nconst MEDIA_EXTENSIONS = [\n  'png',\n  'jpg',\n  'jpeg',\n  'svg',\n  'webp',\n  'avif',\n  'ico',\n  'gif',\n  'mp4',\n  'mov',\n  'avi',\n  'mkv',\n  'webm',\n  'ogg',\n  'mp3',\n  'wav',\n  'aac',\n  'm4a',\n  'm4v',\n  'm4b',\n]\n\nfunction extractImagePath(url) {\n  const pathname = url.pathname;\n  if (pathname.startsWith('/_ipx/_/')) {\n    return pathname.replace('/_ipx/_', '')\n  }\n\n  if (pathname.startsWith('/_vercel/image')) {\n    return url.searchParams.get('url') || null\n  }\n\n  if (MEDIA_EXTENSIONS.includes(pathname.split('.').pop())) {\n    return pathname\n  }\n\n  return null\n}\n\nself.addEventListener('install', event => {\n  self.skipWaiting()\n})\n\nself.addEventListener('activate', event => {\n  event.waitUntil(self.clients.claim())\n})\n\nself.addEventListener('fetch', event => {\n  const url = new URL(event.request.url);\n  const isSameDomain = url.origin === self.location.origin;\n\n  if (!isSameDomain) {\n    return\n  }\n\n  const imageUrl = extractImagePath(url);\n  if (imageUrl) {\n    return event.respondWith(fetchFromIndexedDB(event, imageUrl));\n  }\n})\n\nfunction fetchFromIndexedDB(event, url) {\n  const dbKey = url.replace(/^\\//g, '').replace(/\\//g, ':')\n  return getData(dbKey).then(data => {\n    if (!data) {\n      return fetch(event.request);\n    }\n\n    const dbItem = JSON.parse(data)\n\n    console.log('Data found in IndexedDB:', dbItem);\n\n    // Deleted file\n    if (dbItem.status === DraftStatus.Deleted) {\n      return fetch('https://placehold.co/1200x800?text=Deleted');\n    }\n\n    // Renamed file\n    if (dbItem.original?.path) {\n      return fetch(dbItem.original.path);\n    }\n\n    // Created file\n    const parsed = parseDataUrl(dbItem.modified.raw);\n    const bytes = base64ToUint8Array(parsed.base64);\n\n    return new Response(bytes, {\n      headers: { 'Content-Type': parsed.mime }\n    });\n  })\n}\n\nfunction parseDataUrl(dataUrl) {\n  // Example: data:image/png;base64,iVBORw0KG...\n  const match = dataUrl.match(/^data:(.+);base64,(.+)$/);\n  if (!match) return null;\n  return {\n    mime: match[1],\n    base64: match[2]\n  };\n}\n\nfunction base64ToUint8Array(base64) {\n  const binary = atob(base64);\n  const len = binary.length;\n  const bytes = new Uint8Array(len);\n  for (let i = 0; i < len; i++) {\n    bytes[i] = binary.charCodeAt(i);\n  }\n  return bytes;\n}\n\n// IndexedDB\nfunction openDB() {\n  return new Promise((resolve, reject) => {\n    const request = indexedDB.open(DB_NAME, 1);\n    request.onupgradeneeded = event => {\n      const db = event.target.result;\n      db.createObjectStore(STORE_NAME, { keyPath: 'id' });\n    };\n    request.onsuccess = event => resolve(event.target.result);\n    request.onerror = event => reject(event.target.error);\n  });\n}\n\n// Read data from the object store\nfunction getData(key) {\n  return openDB().then(db => {\n    return new Promise((resolve, reject) => {\n      const tx = db.transaction('drafts', 'readonly');\n      const store = tx.objectStore('drafts');\n      const request = store.get(key);\n      request.onsuccess = () => resolve(request.result);\n      request.onerror = () => reject(request.error);\n    });\n  });\n}\n";

const _7pv8PV = eventHandler(async (event) => {
  setHeader(event, "Content-Type", "application/javascript");
  return n();
});

const _xGQpIf = eventHandler(async (e) => {
  if (e.context._initedSiteConfig)
    return;
  const runtimeConfig = useRuntimeConfig(e);
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = e.context.siteConfig || createSiteConfigStack({
    debug: config.debug
  });
  const nitroOrigin = getNitroOrigin(e);
  e.context.siteConfigNitroOrigin = nitroOrigin;
  {
    siteConfig.push({
      _context: "nitro:init",
      _priority: -4,
      url: nitroOrigin
    });
  }
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: 0,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    ...envSiteConfig(globalThis._importMeta_.env || {})
    // just in-case, shouldn't be needed
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (e.context._nitro.routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...e.context._nitro.routeRules.site
    });
  }
  if (config.multiTenancy) {
    const host = parseURL(nitroOrigin).host?.replace(/:\d+$/, "") || "";
    const tenant = config.multiTenancy?.find((t) => t.hosts.includes(host));
    if (tenant) {
      siteConfig.push({
        _context: `multi-tenancy:${host}`,
        _priority: 0,
        ...tenant.config
      });
    }
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
  e.context._initedSiteConfig = true;
});

const _oIL1jx = eventHandler(async (e) => {
  const siteConfig = getSiteConfig$1(e);
  const nitroOrigin = getNitroOrigin(e);
  const runtimeConfig = useRuntimeConfig(e);
  const stack = e.context.siteConfig.stack;
  setHeader(e, "Content-Type", "application/json");
  return {
    config: siteConfig,
    stack,
    nitroOrigin,
    version: runtimeConfig["nuxt-site-config"].version
  };
});

const filters = new Map();

const onUrlFns = new Map();

const _GcBjqS = defineEventHandler(async (e) => {
  const collections = [];
  for (const collection in contentManifest) {
    if (contentManifest[collection].fields.sitemap)
      collections.push(collection);
  }
  const contentList = [];
  for (const collection of collections) {
    const needsAllFields = filters?.has(collection) || onUrlFns?.has(collection);
    const query = queryCollection(e, collection).where("path", "IS NOT NULL").where("sitemap", "IS NOT NULL");
    if (!needsAllFields)
      query.select("path", "sitemap");
    contentList.push(
      query.all().then((results2) => {
        const filter = filters?.get(collection);
        return { collection, entries: filter ? results2.filter(filter) : results2 };
      })
    );
  }
  const results = await Promise.all(contentList);
  return results.flatMap(({ collection, entries }) => {
    const onUrl = onUrlFns?.get(collection);
    return entries.filter((c) => c.sitemap !== false && c.path).map((c) => {
      const url = {
        loc: c.path,
        ...typeof c.sitemap === "object" ? c.sitemap : {}
      };
      onUrl?.(url, c, collection);
      return url;
    });
  }).filter(Boolean);
});

const logger = createConsola({
  defaults: {
    tag: "@nuxt/sitemap"
  }
});
const merger = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value))
    obj[key] = Array.from(/* @__PURE__ */ new Set([...obj[key], ...value]));
  return obj[key];
});
function mergeOnKey(arr, key) {
  const seen = /* @__PURE__ */ new Map();
  let resultLength = 0;
  const result = Array.from({ length: arr.length });
  for (const item of arr) {
    const k = item[key];
    if (seen.has(k)) {
      const existingIndex = seen.get(k);
      result[existingIndex] = merger(item, result[existingIndex]);
    } else {
      seen.set(k, resultLength);
      result[resultLength++] = item;
    }
  }
  result.length = resultLength;
  return result;
}
function splitForLocales(path, locales) {
  const prefix = withLeadingSlash(path).split("/")[1];
  if (prefix && locales.includes(prefix))
    return [prefix, path.replace(`/${prefix}`, "")];
  return [null, path];
}
const StringifiedRegExpPattern = /\/(.*?)\/([gimsuy]*)$/;
function normalizeRuntimeFilters(input) {
  return (input || []).map((rule) => {
    if (rule instanceof RegExp || typeof rule === "string")
      return rule;
    const match = rule.regex.match(StringifiedRegExpPattern);
    if (match)
      return new RegExp(match[1], match[2]);
    return false;
  }).filter(Boolean);
}
function createPathFilter(options = {}) {
  const urlFilter = createFilter(options);
  return (loc) => {
    let path = loc;
    try {
      path = parseURL(loc).pathname;
    } catch {
      return false;
    }
    return urlFilter(path);
  };
}
function findPageMapping(pathWithoutPrefix, pages) {
  const stripped = pathWithoutPrefix[0] === "/" ? pathWithoutPrefix.slice(1) : pathWithoutPrefix;
  const pageKey = stripped.endsWith("/index") ? stripped.slice(0, -6) || "index" : stripped || "index";
  if (pages[pageKey])
    return { mappings: pages[pageKey], paramSegments: [] };
  const sortedKeys = Object.keys(pages).sort((a, b) => b.length - a.length);
  for (const key of sortedKeys) {
    if (pageKey.startsWith(key + "/")) {
      const paramPath = pageKey.slice(key.length + 1);
      return { mappings: pages[key], paramSegments: paramPath.split("/") };
    }
  }
  return null;
}
function applyDynamicParams(customPath, paramSegments) {
  if (!paramSegments.length)
    return customPath;
  let i = 0;
  return customPath.replace(/\[[^\]]+\]/g, () => paramSegments[i++] || "");
}
function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  const excludeRegex = exclude.filter((r) => r instanceof RegExp);
  const includeRegex = include.filter((r) => r instanceof RegExp);
  const excludeStrings = exclude.filter((r) => typeof r === "string");
  const includeStrings = include.filter((r) => typeof r === "string");
  const excludeMatcher = excludeStrings.length > 0 ? toRouteMatcher(createRouter({
    routes: Object.fromEntries(excludeStrings.map((r) => [r, true])),
    strictTrailingSlash: false
  })) : null;
  const includeMatcher = includeStrings.length > 0 ? toRouteMatcher(createRouter({
    routes: Object.fromEntries(includeStrings.map((r) => [r, true])),
    strictTrailingSlash: false
  })) : null;
  const excludeExact = new Set(excludeStrings);
  const includeExact = new Set(includeStrings);
  return function(path) {
    if (excludeRegex.some((r) => r.test(path)))
      return false;
    if (excludeExact.has(path))
      return false;
    if (excludeMatcher && excludeMatcher.matchAll(path).length > 0)
      return false;
    if (includeRegex.some((r) => r.test(path)))
      return true;
    if (includeExact.has(path))
      return true;
    if (includeMatcher && includeMatcher.matchAll(path).length > 0)
      return true;
    return include.length === 0;
  };
}

function xmlEscape(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function useSitemapRuntimeConfig(e) {
  const clone = JSON.parse(JSON.stringify(useRuntimeConfig(e).sitemap));
  for (const k in clone.sitemaps) {
    const sitemap = clone.sitemaps[k];
    sitemap.include = normalizeRuntimeFilters(sitemap.include);
    sitemap.exclude = normalizeRuntimeFilters(sitemap.exclude);
    clone.sitemaps[k] = sitemap;
  }
  return Object.freeze(clone);
}

const _8v1PiQ = defineEventHandler(async (e) => {
  const fixPath = createSitePathResolver(e, { absolute: false, withBase: true });
  const { sitemapName: fallbackSitemapName, cacheMaxAgeSeconds, version, xslColumns, xslTips } = useSitemapRuntimeConfig();
  setHeader(e, "Content-Type", "application/xslt+xml");
  if (cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  const { name: siteName, url: siteUrl } = useSiteConfig(e);
  const referrer = getHeader(e, "Referer") || "/";
  const referrerPath = parseURL(referrer).pathname;
  const isNotIndexButHasIndex = referrerPath !== "/sitemap.xml" && referrerPath !== "/sitemap_index.xml" && referrerPath.endsWith(".xml");
  const sitemapName = parseURL(referrer).pathname.split("/").pop()?.split("-sitemap")[0] || fallbackSitemapName;
  const title = `${siteName}${sitemapName !== "sitemap.xml" ? ` - ${sitemapName === "sitemap_index.xml" ? "index" : sitemapName}` : ""}`.replace(/&/g, "&amp;");
  const isIndexPage = referrerPath === "/sitemap.xml" || referrerPath === "/sitemap_index.xml";
  const canonicalQuery = getQuery(referrer).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const debugUrl = xmlEscape(withQuery("/__sitemap__/debug.json", { sitemap: sitemapName }));
  const devUrl = xmlEscape(referrerPath);
  const prodUrl = xmlEscape(withQuery(referrerPath, { canonical: "" }));
  const fetchErrors = [];
  const xslQuery = getQuery$1(e);
  if (xslQuery.error_messages) {
    const errorMessages = xslQuery.error_messages;
    const errorUrls = xslQuery.error_urls;
    if (errorMessages) {
      const messages = Array.isArray(errorMessages) ? errorMessages : [errorMessages];
      const urls = Array.isArray(errorUrls) ? errorUrls : errorUrls ? [errorUrls] : [];
      messages.forEach((msg, i) => {
        const errorParts = [xmlEscape(msg)];
        if (urls[i])
          errorParts.push(xmlEscape(urls[i]));
        fetchErrors.push(`<span class="error-item">${errorParts.join(" \u2014 ")}</span>`);
      });
    }
  }
  const hasRuntimeErrors = fetchErrors.length > 0;
  const showDevTools = xslTips !== false;
  const hints = [
    `This is an XSL sitemap (CSS for XML). Disable with <code>xsl: false</code>`,
    `View the raw XML by adding <code>?canonical</code> to the URL`,
    `Check <code>/__sitemap__/debug.json</code> for full sitemap diagnostics`
  ];
  const hint = hints[Math.floor(Math.random() * hints.length)];
  let columns = [...xslColumns];
  if (!columns.length) {
    columns = [
      { label: "URL", width: "50%" },
      { label: "Images", width: "25%", select: "count(image:image)" },
      { label: "Last Updated", width: "25%", select: "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" }
    ];
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          :root {
            --accent: #00dc82;
            --accent-hover: #00b86b;
            --bg: #0a0a0a;
            --bg-elevated: #141414;
            --bg-subtle: #1a1a1a;
            --border: #262626;
            --border-subtle: #1f1f1f;
            --text: #e5e5e5;
            --text-muted: #737373;
            --text-faint: #525252;
            --error: #ef4444;
            --error-bg: rgba(239,68,68,0.1);
            --warning: #f59e0b;
          }
          * { box-sizing: border-box; }
          body {
            font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
            font-size: 13px;
            color: var(--text);
            background: var(--bg);
            margin: 0;
            padding: 0;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
          }
          a { color: inherit; transition: color 0.15s; }
          a:hover { color: var(--accent); }

          /* Debug bar (dev only) */
          .debug-bar {
            position: fixed;
            bottom: 0.75rem;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            background: var(--bg-elevated);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 0 1rem;
            height: 2.5rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            z-index: 100;
            font-size: 11px;
          }
          .debug-bar-brand {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-muted);
            text-decoration: none;
          }
          .debug-bar-brand:hover { color: var(--text); }
          .debug-bar-brand svg { flex-shrink: 0; }
          .debug-bar-hint {
            color: var(--text-faint);
            margin-right: auto;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .debug-bar-hint code {
            background: var(--bg-subtle);
            padding: 0.1rem 0.3rem;
            border-radius: 3px;
            font-size: 10px;
          }
          .mode-badge {
            font-size: 9px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            padding: 0.2rem 0.4rem;
            border-radius: 3px;
          }
          .mode-dev { background: rgba(245,158,11,0.15); color: var(--warning); }
          .mode-prod { background: rgba(0,220,130,0.12); color: var(--accent); }
          .mode-toggle {
            display: inline-flex;
            border-radius: 4px;
            overflow: hidden;
            background: var(--bg-subtle);
            padding: 2px;
            gap: 1px;
          }
          .mode-toggle a {
            padding: 0.2rem 0.4rem;
            font-size: 9px;
            font-weight: 500;
            text-decoration: none;
            color: var(--text-muted);
            border-radius: 2px;
            transition: all 0.15s;
          }
          .mode-toggle a:hover { color: var(--text); }
          .mode-toggle a.active {
            background: var(--accent);
            color: #0a0a0a;
          }
          .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            text-decoration: none;
            font-size: 10px;
            font-weight: 500;
            transition: all 0.15s;
          }
          .btn-primary {
            background: var(--accent);
            color: #0a0a0a;
          }
          .btn-primary:hover { background: var(--accent-hover); color: #0a0a0a; }
          .btn svg { width: 12px; height: 12px; }

          /* Error banner */
          .error-banner {
            background: var(--error-bg);
            border-bottom: 1px solid rgba(239,68,68,0.2);
            padding: 0.75rem 1.5rem;
            color: #fca5a5;
            font-size: 12px;
          }
          .error-banner strong { color: var(--error); }
          .error-item { display: block; margin-top: 0.375rem; color: #fca5a5; }
          .error-debug-link {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            margin-top: 0.625rem;
            padding: 0.25rem 0.5rem;
            background: var(--error);
            color: #fff;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 500;
            text-decoration: none;
            transition: background 0.15s;
          }
          .error-debug-link:hover { background: #dc2626; color: #fff; }

          /* Main content */
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1.5rem;
          }
          .header {
            margin-bottom: 1.25rem;
          }
          .header h1 {
            font-size: 1rem;
            font-weight: 600;
            margin: 0 0 0.25rem 0;
            color: var(--text);
          }
          .header-meta {
            color: var(--text-muted);
            font-size: 12px;
          }
          .header-meta a {
            color: var(--text-muted);
            text-decoration: underline;
            text-decoration-color: var(--border);
            text-underline-offset: 2px;
          }
          .header-meta a:hover { color: var(--accent); text-decoration-color: var(--accent); }

          /* Table */
          .table-wrap {
            border: 1px solid var(--border);
            border-radius: 8px;
            overflow: hidden;
            background: var(--bg-elevated);
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th {
            text-align: left;
            padding: 0.625rem 1rem;
            font-size: 10px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-muted);
            background: var(--bg-subtle);
            border-bottom: 1px solid var(--border);
          }
          td {
            padding: 0.5rem 1rem;
            border-bottom: 1px solid var(--border-subtle);
            font-size: 12px;
            color: var(--text);
          }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: rgba(255,255,255,0.02); }
          td a {
            text-decoration: none;
            word-break: break-all;
            color: var(--text);
          }
          td a:hover { color: var(--accent); }
          .inline-warning {
            font-size: 11px;
            color: var(--warning);
            margin-top: 0.25rem;
            line-height: 1.4;
          }
          .inline-warning::before {
            content: "\u26A0 ";
          }
          .count {
            display: inline-block;
            min-width: 1.25rem;
            padding: 0.125rem 0.375rem;
            background: var(--bg-subtle);
            border-radius: 4px;
            text-align: center;
            font-size: 11px;
            color: var(--text-muted);
            font-variant-numeric: tabular-nums;
          }
          .count:empty::before { content: "0"; }

          /* Light mode */
          @media (prefers-color-scheme: light) {
            :root {
              --accent: #00a963;
              --accent-hover: #008f54;
              --bg: #ffffff;
              --bg-elevated: #f5f5f5;
              --bg-subtle: #ebebeb;
              --border: #d4d4d4;
              --border-subtle: #e5e5e5;
              --text: #171717;
              --text-muted: #525252;
              --text-faint: #737373;
              --error: #dc2626;
              --error-bg: rgba(220,38,38,0.08);
              --warning: #b45309;
            }
            tr:hover td { background: rgba(0,0,0,0.02); }
            .btn-primary { color: #fff; }
            .btn-primary:hover { color: #fff; }
            .mode-toggle a.active { color: #fff; }
            .error-banner { color: #991b1b; }
            .error-item { color: #b91c1c; }
            .error-debug-link { color: #fff; }
            .error-debug-link:hover { color: #fff; }
          }

          .debug-bar-version {
            color: var(--text-faint);
            font-size: 10px;
          }

          /* Responsive */
          @media (max-width: 640px) {
            .debug-bar { padding: 0 0.75rem; gap: 0.5rem; width: 95%; }
            .debug-bar-brand span { display: none; }
            .debug-bar-hint { display: none; }
            .debug-bar-version { display: none; }
            .mode-badge { display: none; }
            .container { padding: 1rem; }
            th, td { padding: 0.5rem 0.75rem; }
          }
          ${showDevTools ? "body { padding-bottom: 3.5rem; }" : ""}
        </style>
      </head>
      <body>
        ${hasRuntimeErrors ? `<div class="error-banner">
            <strong>Sitemap Generation Errors</strong>
            ${fetchErrors.join("")}
            <a href="${debugUrl}" target="_blank" class="error-debug-link">View Debug Info \u2192</a>
          </div>` : ""}
        <div class="container">
          <div class="header">
            <h1>${xmlEscape(title)}</h1>
            <div class="header-meta">
              ${isNotIndexButHasIndex ? `Part of <a href="${xmlEscape(fixPath("/sitemap_index.xml"))}">${xmlEscape(fixPath("/sitemap_index.xml"))}</a> \xB7 ` : ""}
              <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
                <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps
              </xsl:if>
              <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
                <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs
              </xsl:if>
            </div>
          </div>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th style="width:70%">Sitemap</th>
                    <th style="width:30%">Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                    <xsl:variable name="sitemapURL">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:variable>
                    <tr>
                      <td>
                        <a href="{$sitemapURL}">
                          <xsl:value-of select="sitemap:loc"/>
                        </a>
                      </td>
                      <td>
                        <xsl:value-of
                          select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </div>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    ${columns.map((c) => `<th style="width:${c.width}">${c.label}</th>`).join("\n")}
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <tr>
                      <td>
                        <xsl:variable name="itemURL">
                          <xsl:value-of select="sitemap:loc"/>
                        </xsl:variable>
                        <a href="{$itemURL}">
                          <xsl:value-of select="sitemap:loc"/>
                        </a>
                        ${showDevTools ? `<xsl:for-each select="comment()[starts-with(normalize-space(.), 'WARN:')]">
                          <div class="inline-warning">
                            <xsl:value-of select="substring-after(normalize-space(.), 'WARN:')"/>
                          </div>
                        </xsl:for-each>` : ""}
                      </td>
                      ${columns.filter((c) => c.label !== "URL").map((c) => `<td><span class="count"><xsl:value-of select="${c.select}"/></span></td>`).join("\n")}
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </div>
          </xsl:if>
        </div>
        ${showDevTools ? `<div class="debug-bar">
            <a href="${xmlEscape(fixPath("/sitemap_index.xml"))}" class="debug-bar-brand">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32"><path fill="#00dc82" d="M4 26h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4zm1-10h-8v-2h-2v2H7a2 2 0 0 0-2 2v6h2v-6h8v6h2v-6h8v6h2v-6a2 2 0 0 0-2-2zM9 2v10h14V2zm2 2h2v6h-2zm10 6h-6V4h6z"/></svg>
              <span>Sitemap Debug Bar</span>
            </a>
            <span class="debug-bar-version">v${version} \xB7 ${xmlEscape(siteUrl)}</span>
            <span class="debug-bar-hint">Hint: ${hint}</span>
            ${isIndexPage ? `<span class="mode-badge ${isShowingCanonical ? "mode-prod" : "mode-dev"}">${isShowingCanonical ? "Prod" : "Dev"}</span>
              <div class="mode-toggle">
                <a href="${isShowingCanonical ? devUrl : "#"}" class="${!isShowingCanonical ? "active" : ""}">Dev</a>
                <a href="${!isShowingCanonical ? prodUrl : "#"}" class="${isShowingCanonical ? "active" : ""}">Prod</a>
              </div>` : ""}
            <a href="${debugUrl}" target="_blank" class="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              Debug
            </a>
          </div>` : ""}
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
});

const _36uHtj = defineEventHandler(async (e) => {
  {
    const { sitemapXmlEventHandler } = await Promise.resolve().then(function () { return eventHandlers; });
    return sitemapXmlEventHandler(e);
  }
});

const defaultThrowErrorValue = { throwError: true };
const defaultSecurityConfig = (serverlUrl, strict) => {
  const defaultConfig = {
    strict,
    headers: {
      crossOriginResourcePolicy: "same-origin",
      crossOriginOpenerPolicy: "same-origin",
      crossOriginEmbedderPolicy: "unsafe-none" ,
      contentSecurityPolicy: {
        "base-uri": ["'none'"],
        "font-src": ["'self'", "https:", "data:"],
        "form-action": ["'self'"],
        "frame-ancestors": ["'self'"],
        "img-src": ["'self'", "data:"],
        "object-src": ["'none'"],
        "script-src-attr": ["'none'"],
        "style-src": ["'self'", "https:", "'unsafe-inline'"],
        "script-src": ["'self'", "https:", "'unsafe-inline'", "'strict-dynamic'", "'nonce-{{nonce}}'"],
        "upgrade-insecure-requests": true
      },
      originAgentCluster: "?1",
      referrerPolicy: "no-referrer",
      strictTransportSecurity: {
        maxAge: 15552e3,
        includeSubdomains: true
      },
      xContentTypeOptions: "nosniff",
      xDNSPrefetchControl: "off",
      xDownloadOptions: "noopen",
      xFrameOptions: "SAMEORIGIN",
      xPermittedCrossDomainPolicies: "none",
      xXSSProtection: "0",
      permissionsPolicy: {
        camera: [],
        "display-capture": [],
        fullscreen: [],
        geolocation: [],
        microphone: []
      }
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 2e6,
      maxUploadFileRequestInBytes: 8e6,
      ...defaultThrowErrorValue
    },
    rateLimiter: {
      // Twitter search rate limiting
      tokensPerInterval: 150,
      interval: 3e5,
      headers: false,
      driver: {
        name: "lruCache"
      },
      whiteList: void 0,
      ipHeader: void 0,
      ...defaultThrowErrorValue
    },
    xssValidator: {
      methods: ["GET", "POST"],
      ...defaultThrowErrorValue
    },
    corsHandler: {
      // Options by CORS middleware for Express https://github.com/expressjs/cors#configuration-options
      origin: serverlUrl,
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      preflight: {
        statusCode: 204
      }
    },
    allowedMethodsRestricter: {
      methods: "*",
      ...defaultThrowErrorValue
    },
    hidePoweredBy: true,
    basicAuth: false,
    enabled: true,
    csrf: false,
    nonce: true,
    removeLoggers: true,
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: false,
      nitroHeaders: true,
      exportToPresets: true
    },
    sri: true
  };
  {
    defaultConfig.headers.crossOriginEmbedderPolicy = "unsafe-none" ;
    defaultConfig.headers.contentSecurityPolicy = {
      "base-uri": ["'none'"],
      "default-src": ["'none'"],
      "connect-src": ["'self'"],
      "font-src": ["'self'"],
      "form-action": ["'self'"],
      "frame-ancestors": ["'self'"],
      "frame-src": ["'self'"],
      "img-src": ["'self'"],
      "manifest-src": ["'self'"],
      "media-src": ["'self'"],
      "object-src": ["'none'"],
      "script-src-attr": ["'none'"],
      "style-src": ["'self'", "'nonce-{{nonce}}'"],
      "script-src": ["'self'", "'strict-dynamic'", "'nonce-{{nonce}}'"],
      "upgrade-insecure-requests": true,
      "worker-src": ["'self'"]
    };
    defaultConfig.ssg.hashStyles = true;
    defaultConfig.headers.strictTransportSecurity = {
      maxAge: 31536e3,
      includeSubdomains: true,
      preload: true
    }, defaultConfig.headers.xFrameOptions = "DENY";
    defaultConfig.headers.permissionsPolicy = {
      accelerometer: [],
      /* Disable OWASP Experimental values
      'ambient-light-sensor':[],
      */
      autoplay: [],
      /* Disable OWASP Experimental values
      battery:[],
      */
      camera: [],
      "display-capture": [],
      /* Disable OWASP Experimental values
      'document-domain':[],
      */
      "encrypted-media": [],
      fullscreen: [],
      /* Disable OWASP Experimental values
      gamepad:[],
      */
      geolocation: [],
      gyroscope: [],
      /* Disable OWASP Experimental values
      'layout-animations':['self'],
      */
      /* Disable OWASP Experimental values
      'legacy-image-formats':['self'],
      */
      magnetometer: [],
      microphone: [],
      midi: [],
      /* Disable OWASP Experimental values
      'oversized-images':['self'],
      */
      payment: [],
      "picture-in-picture": [],
      "publickey-credentials-get": [],
      "screen-wake-lock": [],
      /* Disable OWASP Experimental values
      'speaker-selection':[],
      */
      "sync-xhr": ["self"],
      /* Disable OWASP Experimental values
      'unoptimized-images':['self'],
      */
      /* Disable OWASP Experimental values
      'unsized-media':['self'],
      */
      usb: [],
      "web-share": [],
      "xr-spatial-tracking": []
    };
  }
  return defaultConfig;
};

const FILE_UPLOAD_HEADER = "multipart/form-data";
const defaultSizeLimiter = defaultSecurityConfig("", true).requestSizeLimiter;
const _0SkVNx = defineEventHandler((event) => {
  const rules = resolveSecurityRules(event);
  if (rules.enabled && rules.requestSizeLimiter) {
    const requestSizeLimiter = defu(
      rules.requestSizeLimiter,
      defaultSizeLimiter
    );
    if (["POST", "PUT", "DELETE"].includes(event.node.req.method)) {
      const contentLengthValue = getRequestHeader(event, "content-length");
      const contentTypeValue = getRequestHeader(event, "content-type");
      const isFileUpload = contentTypeValue?.includes(FILE_UPLOAD_HEADER);
      const requestLimit = isFileUpload ? requestSizeLimiter.maxUploadFileRequestInBytes : requestSizeLimiter.maxRequestSizeInBytes;
      if (parseInt(contentLengthValue) >= requestLimit) {
        const payloadTooLargeError = {
          statusCode: 413,
          statusMessage: "Payload Too Large"
        };
        if (requestSizeLimiter.throwError === false) {
          return payloadTooLargeError;
        }
        throw createError(payloadTooLargeError);
      }
    }
  }
});

const _jkzY3H = defineEventHandler((event) => {
  const rules = resolveSecurityRules(event);
  if (rules.enabled && rules.corsHandler) {
    const { corsHandler } = rules;
    let origin;
    if (typeof corsHandler.origin === "string" && corsHandler.origin !== "*") {
      origin = [corsHandler.origin];
    } else {
      origin = corsHandler.origin;
    }
    if (origin && origin !== "*" && corsHandler.useRegExp) {
      origin = origin.map((o) => new RegExp(o, "i"));
    }
    handleCors(event, {
      origin,
      methods: corsHandler.methods,
      allowHeaders: corsHandler.allowHeaders,
      exposeHeaders: corsHandler.exposeHeaders,
      credentials: corsHandler.credentials,
      maxAge: corsHandler.maxAge,
      preflight: corsHandler.preflight
    });
  }
});

const _jJ8ZRm = defineEventHandler((event) => {
  const rules = resolveSecurityRules(event);
  if (rules.enabled && rules.allowedMethodsRestricter) {
    const { allowedMethodsRestricter } = rules;
    const allowedMethods = allowedMethodsRestricter.methods;
    if (allowedMethods !== "*" && !allowedMethods.includes(event.node.req.method)) {
      const methodNotAllowedError = {
        statusCode: 405,
        statusMessage: "Method not allowed"
      };
      if (allowedMethodsRestricter.throwError === false) {
        return methodNotAllowedError;
      }
      throw createError(methodNotAllowedError);
    }
  }
});

const storage = useStorage("#rate-limiter-storage");
const defaultRateLimiter = defaultSecurityConfig("", true).rateLimiter;
const _1EzLtw = defineEventHandler(async (event) => {
  const rules = resolveSecurityRules(event);
  const route = resolveSecurityRoute(event);
  if (rules.enabled && rules.rateLimiter) {
    const rateLimiter = defu(
      rules.rateLimiter,
      defaultRateLimiter
    );
    const ip = getIP(event, rateLimiter.ipHeader);
    if (rateLimiter.whiteList && rateLimiter.whiteList.includes(ip)) {
      return;
    }
    const url = ip + route;
    let storageItem = await storage.getItem(url);
    if (!storageItem) {
      await setStorageItem(rateLimiter, url);
    } else {
      if (typeof storageItem !== "object") {
        return;
      }
      const timeSinceFirstRateLimit = storageItem.date;
      const timeForInterval = storageItem.date + Number(rateLimiter.interval);
      if (Date.now() >= timeForInterval) {
        await setStorageItem(rateLimiter, url);
        storageItem = await storage.getItem(url);
      }
      const isLimited = timeSinceFirstRateLimit <= timeForInterval && storageItem.value === 0;
      if (isLimited) {
        const tooManyRequestsError = {
          statusCode: 429,
          statusMessage: "Too Many Requests"
        };
        if (rules.rateLimiter.headers) {
          setResponseHeader(event, "x-ratelimit-remaining", 0);
          setResponseHeader(event, "x-ratelimit-limit", rateLimiter.tokensPerInterval);
          setResponseHeader(event, "x-ratelimit-reset", timeForInterval);
        }
        if (rateLimiter.throwError === false) {
          return tooManyRequestsError;
        }
        throw createError(tooManyRequestsError);
      }
      const newItemDate = timeSinceFirstRateLimit > timeForInterval ? Date.now() : storageItem.date;
      const newStorageItem = { value: storageItem.value - 1, date: newItemDate };
      await storage.setItem(url, newStorageItem);
      const currentItem = await storage.getItem(url);
      if (currentItem && rateLimiter.headers) {
        setResponseHeader(event, "x-ratelimit-remaining", currentItem.value);
        setResponseHeader(event, "x-ratelimit-limit", rateLimiter.tokensPerInterval);
        setResponseHeader(event, "x-ratelimit-reset", timeForInterval);
      }
    }
  }
});
async function setStorageItem(rateLimiter, url) {
  const rateLimitedObject = { value: rateLimiter.tokensPerInterval, date: Date.now() };
  await storage.setItem(url, rateLimitedObject);
}
function getIP(event, customIpHeader) {
  const ip = customIpHeader ? getRequestHeader(event, customIpHeader) || "" : getRequestIP(event, { xForwardedFor: true }) || "";
  return ip;
}

const _tLtiv5 = defineEventHandler(async (event) => {
  const rules = resolveSecurityRules(event);
  if (rules.enabled && rules.xssValidator) {
    const filterOpt = {
      ...rules.xssValidator,
      escapeHtml: void 0
    };
    if (rules.xssValidator.escapeHtml === false) {
      filterOpt.escapeHtml = (value) => value;
    }
    const xssValidator = new FilterXSS(filterOpt);
    if (event.node.req.socket.readyState !== "readOnly") {
      if (rules.xssValidator.methods && rules.xssValidator.methods.includes(
        event.node.req.method
      )) {
        const valueToFilter = event.node.req.method === "GET" ? getQuery$1(event) : event.node.req.headers["content-type"]?.includes(
          "multipart/form-data"
        ) ? await readMultipartFormData(event) : await readBody(event);
        if (valueToFilter && Object.keys(valueToFilter).length) {
          if (valueToFilter.statusMessage && valueToFilter.statusMessage !== "Bad Request") {
            return;
          }
          const stringifiedValue = JSON.stringify(valueToFilter);
          const processedValue = xssValidator.process(
            JSON.stringify(valueToFilter)
          );
          if (processedValue !== stringifiedValue) {
            const badRequestError = {
              statusCode: 400,
              statusMessage: "Bad Request"
            };
            if (rules.xssValidator.throwError === false) {
              return badRequestError;
            }
            throw createError(badRequestError);
          }
        }
      }
    }
  }
});

const _FeQ2ll = eventHandler(async (event) => {
  const collection = getRouterParam(event, "collection") || event.path?.split("/")?.[2] || "";
  setHeader(event, "Content-Type", "text/plain");
  const data = await useStorage().getItem(`build:content:database.compressed.mjs`) || "";
  if (data) {
    const lineStart = `export const ${collection} = "`;
    const content = String(data).split("\n").find((line) => line.startsWith(lineStart));
    if (content) {
      return content.substring(lineStart.length, content.length - 1);
    }
  }
  return await import('file:///home/lucy/git/Helltop/.nuxt/content/database.compressed.mjs').then((m) => m[collection]);
});

const _4fHHux = defineEventHandler((event) => {
  appendHeader(event, "Access-Control-Allow-Origin", "*");
  const componentName = (event.context.params?.["component?"] || "").replace(/\.json$/, "");
  if (componentName) {
    const meta = components[pascalCase(componentName)];
    if (!meta) {
      throw createError({
        statusMessage: "Components not found!",
        statusCode: 404,
        data: {
          description: "Please make sure you are looking for correct component"
        }
      });
    }
    return meta;
  }
  return components;
});

async function decompressSQLDump(base64Str, compressionType = "gzip") {
  let binaryData;
  if (typeof Buffer !== "undefined") {
    const buffer = Buffer.from(base64Str, "base64");
    binaryData = Uint8Array.from(buffer);
  } else if (typeof atob !== "undefined") {
    binaryData = Uint8Array.from(atob(base64Str), (c) => c.charCodeAt(0));
  } else {
    throw new TypeError("No base64 decoding method available");
  }
  const response = new Response(new Blob([binaryData]));
  const decompressedStream = response.body?.pipeThrough(new DecompressionStream(compressionType));
  const text = await new Response(decompressedStream).text();
  return JSON.parse(text);
}

function refineContentFields(sql, doc) {
  const fields = findCollectionFields(sql);
  const item = { ...doc };
  for (const key in item) {
    if (fields[key] === "json" && item[key] && item[key] !== "undefined") {
      item[key] = JSON.parse(item[key]);
    }
    if (fields[key] === "boolean" && item[key] !== "undefined") {
      item[key] = Boolean(item[key]);
    }
  }
  for (const key in item) {
    if (item[key] === "NULL") {
      item[key] = void 0;
    }
  }
  return item;
}
function findCollectionFields(sql) {
  const table = sql.match(/FROM\s+(\w+)/);
  if (!table) {
    return {};
  }
  const info = contentManifest[getCollectionName(table[1])];
  return info?.fields || {};
}
function getCollectionName(table) {
  return table.replace(/^_content_/, "");
}

let db;
function loadDatabaseAdapter(config) {
  const { database, localDatabase } = config;
  if (!db) {
    {
      db = localAdapter(refineDatabaseConfig(localDatabase));
    }
  }
  return {
    all: async (sql, params = []) => {
      return db.prepare(sql).all(...params).then((result) => (result || []).map((item) => refineContentFields(sql, item)));
    },
    first: async (sql, params = []) => {
      return db.prepare(sql).get(...params).then((item) => item ? refineContentFields(sql, item) : item);
    },
    exec: async (sql, params = []) => {
      return db.prepare(sql).run(...params);
    }
  };
}
const checkDatabaseIntegrity = /* @__PURE__ */ new Map();
const integrityCheckPromise = /* @__PURE__ */ new Map();
async function checkAndImportDatabaseIntegrity(event, collection, config) {
  if (checkDatabaseIntegrity.get(collection) !== false) {
    checkDatabaseIntegrity.set(collection, false);
    if (!integrityCheckPromise.has(collection)) {
      const _integrityCheck = _checkAndImportDatabaseIntegrity(event, collection, checksums[collection], checksumsStructure[collection], config).then((isValid) => {
        checkDatabaseIntegrity.set(collection, !isValid);
      }).catch((error) => {
        console.error("Database integrity check failed", error);
        checkDatabaseIntegrity.set(collection, true);
        integrityCheckPromise.delete(collection);
      });
      integrityCheckPromise.set(collection, _integrityCheck);
    }
  }
  if (integrityCheckPromise.has(collection)) {
    await integrityCheckPromise.get(collection);
  }
}
async function _checkAndImportDatabaseIntegrity(event, collection, integrityVersion, structureIntegrityVersion, config) {
  const db2 = loadDatabaseAdapter(config);
  const before = await db2.first(`SELECT * FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => null);
  if (before?.version && !String(before.version)?.startsWith(`${config.databaseVersion}--`)) {
    await db2.exec(`DROP TABLE IF EXISTS ${tables.info}`);
    before.version = "";
  }
  const unchangedStructure = before?.structureVersion === structureIntegrityVersion;
  if (before?.version) {
    if (before.version === integrityVersion) {
      if (before.ready) {
        return true;
      }
      await waitUntilDatabaseIsReady(db2, collection);
      return true;
    }
    await db2.exec(`DELETE FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]);
    if (!unchangedStructure) {
      await db2.exec(`DROP TABLE IF EXISTS ${tables[collection]}`);
    }
  }
  const dump = await loadDatabaseDump(event, collection).then(decompressSQLDump);
  const dumpLinesHash = dump.map((row) => row.split(" -- ").pop());
  let hashesInDb = /* @__PURE__ */ new Set();
  if (unchangedStructure) {
    const hashListFromTheDump = new Set(dumpLinesHash);
    const hashesInDbRecords = await db2.all(`SELECT __hash__ FROM ${tables[collection]}`).catch(() => []);
    hashesInDb = new Set(hashesInDbRecords.map((r) => r.__hash__));
    const hashesToDelete = hashesInDb.difference(hashListFromTheDump);
    if (hashesToDelete.size) {
      await db2.exec(`DELETE FROM ${tables[collection]} WHERE __hash__ IN (${Array(hashesToDelete.size).fill("?").join(",")})`, Array.from(hashesToDelete));
    }
  }
  await dump.reduce(async (prev, sql, index) => {
    await prev;
    const hash = dumpLinesHash[index];
    const statement = sql.substring(0, sql.length - hash.length - 4);
    if (unchangedStructure) {
      if (hash === "structure") {
        return Promise.resolve();
      }
      if (hashesInDb.has(hash)) {
        return Promise.resolve();
      }
    }
    await db2.exec(statement).catch((err) => {
      const message = err.message || "Unknown error";
      console.error(`Failed to execute SQL ${sql}: ${message}`);
    });
  }, Promise.resolve());
  const after = await db2.first(`SELECT version FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ version: "" }));
  return after?.version === integrityVersion;
}
const REQUEST_TIMEOUT = 90;
async function waitUntilDatabaseIsReady(db2, collection) {
  let iterationCount = 0;
  let interval;
  await new Promise((resolve, reject) => {
    interval = setInterval(async () => {
      const row = await db2.first(`SELECT ready FROM ${tables.info} WHERE id = ?`, [`checksum_${collection}`]).catch(() => ({ ready: true }));
      if (row?.ready) {
        clearInterval(interval);
        resolve(0);
      }
      if (iterationCount++ > REQUEST_TIMEOUT) {
        clearInterval(interval);
        reject(new Error("Waiting for another database initialization timed out"));
      }
    }, 1e3);
  }).catch((e) => {
    throw e;
  }).finally(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
}
async function loadDatabaseDump(event, collection) {
  return await fetchDatabase(event, collection).catch((e) => {
    console.error("Failed to fetch compressed dump", e);
    return "";
  });
}
function refineDatabaseConfig(config) {
  if (config.type === "d1") {
    return { ...config, bindingName: config.bindingName || config.binding };
  }
  if (config.type === "sqlite") {
    const _config = { ...config };
    if (config.filename === ":memory:") {
      return { name: ":memory:" };
    }
    if ("filename" in config) {
      const filename = isAbsolute(config?.filename || "") || config?.filename === ":memory:" ? config?.filename : new URL(config.filename, globalThis._importMeta_.url).pathname;
      _config.path = process.platform === "win32" && filename.startsWith("/") ? filename.slice(1) : filename;
    }
    return _config;
  }
  if (config.type === "pglite") {
    return {
      dataDir: config.dataDir,
      // Pass through any other PGlite-specific options
      ...config
    };
  }
  return config;
}

const SQL_COMMANDS = /SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|\$/i;
const SQL_COUNT_REGEX = /COUNT\((DISTINCT )?([a-z_]\w+|\*)\)/i;
const SQL_SELECT_REGEX = /^SELECT (.*) FROM (\w+)( WHERE .*)? ORDER BY (["\w,\s]+) (ASC|DESC)( LIMIT \d+)?( OFFSET \d+)?$/;
function assertSafeQuery(sql, collection) {
  if (!sql) {
    throw new Error("Invalid query: Query cannot be empty");
  }
  const cleanedupQuery = cleanupQuery(sql);
  if (cleanedupQuery !== sql) {
    throw new Error("Invalid query: SQL comments are not allowed");
  }
  const match = sql.match(SQL_SELECT_REGEX);
  if (!match) {
    throw new Error("Invalid query: Query must be a valid SELECT statement with proper syntax");
  }
  const [_, select, from, where, orderBy, order, limit, offset] = match;
  const columns = select?.trim().split(", ") || [];
  if (columns.length === 1) {
    if (columns[0] !== "*" && !columns[0]?.match(SQL_COUNT_REGEX) && !columns[0]?.match(/^"[a-z_]\w+"$/i)) {
      throw new Error(`Invalid query: Column '${columns[0]}' has invalid format. Expected *, COUNT(), or a quoted column name`);
    }
  } else if (!columns.every((column) => column.match(/^"[a-z_]\w+"$/i))) {
    throw new Error("Invalid query: Multiple columns must be properly quoted and alphanumeric");
  }
  if (from !== `_content_${collection}`) {
    const collection2 = String(from || "").replace(/^_content_/, "");
    throw new Error(`Invalid query: Collection '${collection2}' does not exist`);
  }
  if (where) {
    if (!where.startsWith(" WHERE (") || !where.endsWith(")")) {
      throw new Error("Invalid query: WHERE clause must be properly enclosed in parentheses");
    }
    const noString = cleanupQuery(where, { removeString: true });
    if (noString.match(SQL_COMMANDS)) {
      throw new Error("Invalid query: WHERE clause contains unsafe SQL commands");
    }
  }
  const _order = (orderBy + " " + order).split(", ");
  if (!_order.every((column) => column.match(/^("[a-zA-Z_]+"|[a-zA-Z_]+) (ASC|DESC)$/))) {
    throw new Error("Invalid query: ORDER BY clause must contain valid column names followed by ASC or DESC");
  }
  if (limit !== void 0 && !limit.match(/^ LIMIT \d+$/)) {
    throw new Error("Invalid query: LIMIT clause must be a positive number");
  }
  if (offset !== void 0 && !offset.match(/^ OFFSET \d+$/)) {
    throw new Error("Invalid query: OFFSET clause must be a positive number");
  }
  return true;
}
function cleanupQuery(query, options = { removeString: false }) {
  let inString = false;
  let stringFence = "";
  let result = "";
  for (let i = 0; i < query.length; i++) {
    const char = query[i];
    const prevChar = query[i - 1];
    const nextChar = query[i + 1];
    if (char === "'" || char === '"') {
      if (!options?.removeString) {
        result += char;
        continue;
      }
      if (inString) {
        if (char !== stringFence || nextChar === stringFence || prevChar === stringFence) {
          continue;
        }
        inString = false;
        stringFence = "";
        continue;
      } else {
        inString = true;
        stringFence = char;
        continue;
      }
    }
    if (!inString) {
      if (char === "-" && nextChar === "-") {
        return result;
      }
      if (char === "/" && nextChar === "*") {
        i += 2;
        while (i < query.length && !(query[i] === "*" && query[i + 1] === "/")) {
          i += 1;
        }
        i += 2;
        continue;
      }
      result += char;
    }
  }
  return result;
}

const _33wuwV = eventHandler(async (event) => {
  const { sql } = await readBody(event);
  const collection = getRouterParam(event, "collection") || event.path?.split("/")?.[2] || "";
  assertSafeQuery(sql, collection);
  const conf = useRuntimeConfig().content;
  if (conf.integrityCheck) {
    await checkAndImportDatabaseIntegrity(event, collection, conf);
  }
  return loadDatabaseAdapter(conf).all(sql);
});

const _96y3qe = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_KsW2OI = () => Promise.resolve().then(function () { return login_get$1; });
const _lazy_PPc1yC = () => Promise.resolve().then(function () { return logout_get$1; });
const _lazy_lzSwJY = () => Promise.resolve().then(function () { return rss_xml$1; });
const _lazy_BjGM60 = () => Promise.resolve().then(function () { return renderer; });

const handlers = [
  { route: '', handler: _r7PvHQ, lazy: false, middleware: true, method: undefined },
  { route: '/api/studio/login', handler: _lazy_KsW2OI, lazy: true, middleware: false, method: "get" },
  { route: '/api/studio/logout', handler: _lazy_PPc1yC, lazy: true, middleware: false, method: "get" },
  { route: '/rss.xml', handler: _lazy_lzSwJY, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_BjGM60, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: handler$1, lazy: false, middleware: false, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _ZR4FCM, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_studio/dev/content/**', handler: _b8nazP, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_studio/dev/public/**', handler: _Jqxgin, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_studio/auth/github', handler: _jdgCp5, lazy: false, middleware: false, method: "get" },
  { route: '/__nuxt_studio/auth/google', handler: _X34IjP, lazy: false, middleware: false, method: "get" },
  { route: '/__nuxt_studio/auth/gitlab', handler: _XCzCMt, lazy: false, middleware: false, method: "get" },
  { route: '/__nuxt_studio/auth/sso', handler: _5kzZbx, lazy: false, middleware: false, method: "get" },
  { route: '/__nuxt_studio/auth/session', handler: _vrFw3E, lazy: false, middleware: false, method: "get" },
  { route: '/__nuxt_studio/auth/session', handler: _ZQKJKO, lazy: false, middleware: false, method: "delete" },
  { route: '/_studio', handler: _WcCsmA, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_studio/meta', handler: _FeKNbb, lazy: false, middleware: false, method: undefined },
  { route: '/sw.js', handler: _7pv8PV, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _xGQpIf, lazy: false, middleware: true, method: undefined },
  { route: '/__site-config__/debug.json', handler: _oIL1jx, lazy: false, middleware: false, method: undefined },
  { route: '/__sitemap__/nuxt-content-urls.json', handler: _GcBjqS, lazy: false, middleware: false, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _8v1PiQ, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _36uHtj, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _0SkVNx, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _jkzY3H, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _jJ8ZRm, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _1EzLtw, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _tLtiv5, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/content/sql_dump.txt', handler: _FeQ2ll, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/blog/sql_dump.txt', handler: _FeQ2ll, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/homepage/sql_dump.txt', handler: _FeQ2ll, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/info/sql_dump.txt', handler: _FeQ2ll, lazy: false, middleware: false, method: undefined },
  { route: '/api/component-meta', handler: _4fHHux, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta.json', handler: _4fHHux, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta/:component?', handler: _4fHHux, lazy: false, middleware: false, method: "get" },
  { route: '/__nuxt_content/content/query', handler: _33wuwV, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/blog/query', handler: _33wuwV, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/homepage/query', handler: _33wuwV, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_content/info/query', handler: _33wuwV, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _96y3qe, lazy: false, middleware: false, method: undefined },
  { route: '/_fonts/**', handler: _lazy_BjGM60, lazy: true, middleware: false, method: undefined },
  { route: '/_scripts/**', handler: _lazy_BjGM60, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_BjGM60, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = {
	"appName": "Nuxt",
	"status": 500,
	"statusText": "Internal server error",
	"description": "This page is temporarily unavailable.",
	"refresh": "Refresh this page"
};
const template$1 = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0\" name=\"viewport\"><script>!function(){const e=document.createElement(\"link\").relList;if(!(e&&e.supports&&e.supports(\"modulepreload\"))){for(const e of document.querySelectorAll('link[rel=\"modulepreload\"]'))r(e);new MutationObserver(e=>{for(const o of e)if(\"childList\"===o.type)for(const e of o.addedNodes)\"LINK\"===e.tagName&&\"modulepreload\"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),\"use-credentials\"===e.crossOrigin?r.credentials=\"include\":\"anonymous\"===e.crossOrigin?r.credentials=\"omit\":r.credentials=\"same-origin\",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:\"\"}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[80px\\]{font-size:80px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\]{font-size:110px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class=\"antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide\"><div class=\"max-w-520px text-center\"><h1 class=\"font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]\">" + escapeHtml(messages.status) + "</h1><h2 class=\"font-semibold mb-2 sm:text-3xl text-2xl\">" + escapeHtml(messages.statusText) + "</h2><p class=\"mb-4 px-2 text-[#64748B] text-md\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [path === "/" ? path : withoutTrailingSlash(path), rules])
      )
    })
  );
  return (pathOrUrl) => {
    const path = pathOrUrl[0] === "/" ? pathOrUrl : parseURL(pathOrUrl, app.baseURL).pathname;
    const pathWithoutQuery = withoutQuery(path);
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(pathWithoutQuery === "/" ? pathWithoutQuery : withoutTrailingSlash(pathWithoutQuery), app.baseURL)
    ).reverse());
  };
}

const VALID_CHANGEFREQ = ["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"];
function validateSitemapUrl(url) {
  if (typeof url === "string")
    return [];
  const warnings = [];
  if (url.lastmod) {
    const d = typeof url.lastmod === "string" ? url.lastmod : void 0;
    if (d && !isValidW3CDate(d))
      warnings.push(`lastmod "${d}" is not a valid W3C date`);
  }
  if (url.changefreq && !VALID_CHANGEFREQ.includes(url.changefreq))
    warnings.push(`changefreq "${url.changefreq}" is not valid (expected: always|hourly|daily|weekly|monthly|yearly|never)`);
  if (url.priority !== void 0) {
    const p = typeof url.priority === "number" ? url.priority : Number.parseFloat(String(url.priority));
    if (Number.isNaN(p) || p < 0 || p > 1)
      warnings.push(`priority "${url.priority}" is not valid (expected: number between 0.0 and 1.0)`);
  }
  return warnings;
}
function resolve(s, resolvers) {
  if (typeof s === "undefined")
    return void 0;
  const str = typeof s === "string" ? s : s.toString();
  if (!resolvers)
    return str;
  if (hasProtocol(str, { acceptRelative: true, strict: false }))
    return resolvers.fixSlashes(str);
  return resolvers.canonicalUrlResolver(str);
}
function removeTrailingSlash(s) {
  return s.replace(/\/(\?|#|$)/, "$1");
}
function preNormalizeEntry(_e, resolvers) {
  const input = typeof _e === "string" ? { loc: _e } : { ..._e };
  if (input.url && !input.loc) {
    input.loc = input.url;
  }
  delete input.url;
  if (typeof input.loc !== "string") {
    input.loc = "";
  }
  const skipEncoding = input._encoded === true;
  const e = input;
  e.loc = removeTrailingSlash(e.loc);
  e._abs = hasProtocol(e.loc, { acceptRelative: false, strict: false });
  try {
    e._path = e._abs ? parseURL(e.loc) : parsePath(e.loc);
  } catch {
    e._path = null;
  }
  if (e._path) {
    const search = e._path.search;
    const qs = search && search.length > 1 ? stringifyQuery(parseQuery(search)) : "";
    const pathname = skipEncoding ? e._path.pathname : encodePath(e._path.pathname);
    e._relativeLoc = `${pathname}${qs.length ? `?${qs}` : ""}`;
    if (e._path.host) {
      e.loc = stringifyParsedURL(e._path);
    } else {
      e.loc = e._relativeLoc;
    }
  } else if (!skipEncoding && !isEncoded(e.loc)) {
    e.loc = encodeURI(e.loc);
  }
  if (e.loc === "")
    e.loc = `/`;
  e.loc = resolve(e.loc, resolvers);
  e._key = `${e._sitemap || ""}${withoutTrailingSlash(e.loc)}`;
  return e;
}
function isEncoded(url) {
  try {
    return url !== decodeURIComponent(url);
  } catch {
    return false;
  }
}
function normaliseEntry(_e, defaults, resolvers) {
  const e = defu$1(_e, defaults);
  {
    const warnings = validateSitemapUrl(e);
    if (warnings.length)
      e._warnings = (e._warnings || []).concat(warnings);
  }
  if (e.lastmod) {
    const date = normaliseDate(e.lastmod);
    if (date)
      e.lastmod = date;
    else
      delete e.lastmod;
  }
  if (!e.lastmod)
    delete e.lastmod;
  e.loc = resolve(e.loc, resolvers);
  if (e.alternatives) {
    const alternatives = e.alternatives.map((a) => ({ ...a }));
    for (const alt of alternatives) {
      if (typeof alt.href === "string") {
        alt.href = resolve(alt.href, resolvers);
      } else if (typeof alt.href === "object" && alt.href) {
        alt.href = resolve(alt.href.href, resolvers);
      }
    }
    e.alternatives = mergeOnKey(alternatives, "hreflang");
  }
  if (e.images) {
    const images = e.images.map((i) => ({ ...i }));
    for (const img of images) {
      img.loc = resolve(img.loc, resolvers);
    }
    e.images = mergeOnKey(images, "loc");
  }
  if (e.videos) {
    const videos = e.videos.map((v) => ({ ...v }));
    for (const video of videos) {
      if (video.content_loc) {
        video.content_loc = resolve(video.content_loc, resolvers);
      }
    }
    e.videos = mergeOnKey(videos, "content_loc");
  }
  return e;
}
const IS_VALID_W3C_DATE = [
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
  /^\d{4}-[01]\d-[0-3]\d$/,
  /^\d{4}-[01]\d$/,
  /^\d{4}$/
];
function isValidW3CDate(d) {
  return IS_VALID_W3C_DATE.some((r) => r.test(d));
}
function normaliseDate(d) {
  if (typeof d === "string") {
    const tIdx = d.indexOf("T");
    if (tIdx !== -1) {
      const t = d.slice(tIdx + 1);
      if (!t.includes("+") && !t.includes("-") && !t.includes("Z")) {
        d += "Z";
      }
    }
    if (!isValidW3CDate(d))
      return false;
    d = new Date(d);
    d.setMilliseconds(0);
    if (Number.isNaN(d.getTime()))
      return false;
  }
  const z = (n) => `0${n}`.slice(-2);
  const date = `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}`;
  if (d.getUTCHours() > 0 || d.getUTCMinutes() > 0 || d.getUTCSeconds() > 0) {
    return `${date}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}Z`;
  }
  return date;
}

function isValidString(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function parseNumber(value) {
  if (typeof value === "number") return value;
  if (typeof value === "string" && value.trim()) {
    const num = Number.parseFloat(value.trim());
    return Number.isNaN(num) ? void 0 : num;
  }
  return void 0;
}
function parseInteger(value) {
  if (typeof value === "number") return Math.floor(value);
  if (typeof value === "string" && value.trim()) {
    const num = Number.parseInt(value.trim(), 10);
    return Number.isNaN(num) ? void 0 : num;
  }
  return void 0;
}
function extractUrlFromParsedElement(urlElement, warnings) {
  if (!isValidString(urlElement.loc)) {
    warnings.push({
      type: "validation",
      message: "URL entry missing required loc element",
      context: { url: String(urlElement.loc || "undefined") }
    });
    return null;
  }
  const urlObj = { loc: urlElement.loc };
  if (isValidString(urlElement.lastmod)) {
    urlObj.lastmod = urlElement.lastmod;
  }
  if (isValidString(urlElement.changefreq)) {
    const validFreqs = ["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"];
    if (validFreqs.includes(urlElement.changefreq)) {
      urlObj.changefreq = urlElement.changefreq;
    } else {
      warnings.push({
        type: "validation",
        message: "Invalid changefreq value",
        context: { url: urlElement.loc, field: "changefreq", value: urlElement.changefreq }
      });
    }
  }
  const priority = parseNumber(urlElement.priority);
  if (priority !== void 0 && !Number.isNaN(priority)) {
    if (priority < 0 || priority > 1) {
      warnings.push({
        type: "validation",
        message: "Priority value should be between 0.0 and 1.0, clamping to valid range",
        context: { url: urlElement.loc, field: "priority", value: priority }
      });
    }
    urlObj.priority = Math.max(0, Math.min(1, priority));
  } else if (urlElement.priority !== void 0) {
    warnings.push({
      type: "validation",
      message: "Invalid priority value",
      context: { url: urlElement.loc, field: "priority", value: urlElement.priority }
    });
  }
  if (urlElement.image) {
    const images = Array.isArray(urlElement.image) ? urlElement.image : [urlElement.image];
    const validImages = images.map((img) => {
      if (isValidString(img.loc)) {
        return { loc: img.loc };
      } else {
        warnings.push({
          type: "validation",
          message: "Image missing required loc element",
          context: { url: urlElement.loc, field: "image.loc" }
        });
        return null;
      }
    }).filter((img) => img !== null);
    if (validImages.length > 0) {
      urlObj.images = validImages;
    }
  }
  if (urlElement.video) {
    const videos = Array.isArray(urlElement.video) ? urlElement.video : [urlElement.video];
    const validVideos = videos.map((video) => {
      const missingFields = [];
      if (!isValidString(video.title)) missingFields.push("title");
      if (!isValidString(video.thumbnail_loc)) missingFields.push("thumbnail_loc");
      if (!isValidString(video.description)) missingFields.push("description");
      if (!isValidString(video.content_loc)) missingFields.push("content_loc");
      if (missingFields.length > 0) {
        warnings.push({
          type: "validation",
          message: `Video missing required fields: ${missingFields.join(", ")}`,
          context: { url: urlElement.loc, field: "video" }
        });
        return null;
      }
      const videoObj = {
        title: video.title,
        thumbnail_loc: video.thumbnail_loc,
        description: video.description,
        content_loc: video.content_loc
      };
      if (isValidString(video.player_loc)) {
        videoObj.player_loc = video.player_loc;
      }
      const duration = parseInteger(video.duration);
      if (duration !== void 0) {
        videoObj.duration = duration;
      } else if (video.duration !== void 0) {
        warnings.push({
          type: "validation",
          message: "Invalid video duration value",
          context: { url: urlElement.loc, field: "video.duration", value: video.duration }
        });
      }
      if (isValidString(video.expiration_date)) {
        videoObj.expiration_date = video.expiration_date;
      }
      const rating = parseNumber(video.rating);
      if (rating !== void 0) {
        if (rating < 0 || rating > 5) {
          warnings.push({
            type: "validation",
            message: "Video rating should be between 0.0 and 5.0",
            context: { url: urlElement.loc, field: "video.rating", value: rating }
          });
        }
        videoObj.rating = rating;
      } else if (video.rating !== void 0) {
        warnings.push({
          type: "validation",
          message: "Invalid video rating value",
          context: { url: urlElement.loc, field: "video.rating", value: video.rating }
        });
      }
      const viewCount = parseInteger(video.view_count);
      if (viewCount !== void 0) {
        videoObj.view_count = viewCount;
      } else if (video.view_count !== void 0) {
        warnings.push({
          type: "validation",
          message: "Invalid video view_count value",
          context: { url: urlElement.loc, field: "video.view_count", value: video.view_count }
        });
      }
      if (isValidString(video.publication_date)) {
        videoObj.publication_date = video.publication_date;
      }
      if (isValidString(video.family_friendly)) {
        const validValues = ["yes", "no"];
        if (validValues.includes(video.family_friendly)) {
          videoObj.family_friendly = video.family_friendly;
        } else {
          warnings.push({
            type: "validation",
            message: 'Invalid video family_friendly value, should be "yes" or "no"',
            context: { url: urlElement.loc, field: "video.family_friendly", value: video.family_friendly }
          });
        }
      }
      if (isValidString(video.requires_subscription)) {
        const validValues = ["yes", "no"];
        if (validValues.includes(video.requires_subscription)) {
          videoObj.requires_subscription = video.requires_subscription;
        } else {
          warnings.push({
            type: "validation",
            message: 'Invalid video requires_subscription value, should be "yes" or "no"',
            context: { url: urlElement.loc, field: "video.requires_subscription", value: video.requires_subscription }
          });
        }
      }
      if (isValidString(video.live)) {
        const validValues = ["yes", "no"];
        if (validValues.includes(video.live)) {
          videoObj.live = video.live;
        } else {
          warnings.push({
            type: "validation",
            message: 'Invalid video live value, should be "yes" or "no"',
            context: { url: urlElement.loc, field: "video.live", value: video.live }
          });
        }
      }
      if (video.restriction && typeof video.restriction === "object") {
        const restriction = video.restriction;
        if (isValidString(restriction.relationship) && isValidString(restriction["#text"])) {
          const validRelationships = ["allow", "deny"];
          if (validRelationships.includes(restriction.relationship)) {
            videoObj.restriction = {
              relationship: restriction.relationship,
              restriction: restriction["#text"]
            };
          } else {
            warnings.push({
              type: "validation",
              message: 'Invalid video restriction relationship, should be "allow" or "deny"',
              context: { url: urlElement.loc, field: "video.restriction.relationship", value: restriction.relationship }
            });
          }
        }
      }
      if (video.platform && typeof video.platform === "object") {
        const platform = video.platform;
        if (isValidString(platform.relationship) && isValidString(platform["#text"])) {
          const validRelationships = ["allow", "deny"];
          if (validRelationships.includes(platform.relationship)) {
            videoObj.platform = {
              relationship: platform.relationship,
              platform: platform["#text"]
            };
          } else {
            warnings.push({
              type: "validation",
              message: 'Invalid video platform relationship, should be "allow" or "deny"',
              context: { url: urlElement.loc, field: "video.platform.relationship", value: platform.relationship }
            });
          }
        }
      }
      if (video.price) {
        const prices = Array.isArray(video.price) ? video.price : [video.price];
        const validPrices = prices.map((price) => {
          const priceValue = price["#text"];
          if (priceValue == null || typeof priceValue !== "string" && typeof priceValue !== "number") {
            warnings.push({
              type: "validation",
              message: "Video price missing value",
              context: { url: urlElement.loc, field: "video.price" }
            });
            return null;
          }
          const validTypes = ["rent", "purchase", "package", "subscription"];
          if (price.type && !validTypes.includes(price.type)) {
            warnings.push({
              type: "validation",
              message: `Invalid video price type "${price.type}", should be one of: ${validTypes.join(", ")}`,
              context: { url: urlElement.loc, field: "video.price.type", value: price.type }
            });
          }
          return {
            price: String(priceValue),
            currency: price.currency,
            type: price.type
          };
        }).filter((p) => p !== null);
        if (validPrices.length > 0) {
          videoObj.price = validPrices;
        }
      }
      if (video.uploader && typeof video.uploader === "object") {
        const uploader = video.uploader;
        if (isValidString(uploader.info) && isValidString(uploader["#text"])) {
          videoObj.uploader = {
            uploader: uploader["#text"],
            info: uploader.info
          };
        } else {
          warnings.push({
            type: "validation",
            message: "Video uploader missing required info or name",
            context: { url: urlElement.loc, field: "video.uploader" }
          });
        }
      }
      if (video.tag) {
        const tags = Array.isArray(video.tag) ? video.tag : [video.tag];
        const validTags = tags.filter(isValidString);
        if (validTags.length > 0) {
          videoObj.tag = validTags;
        }
      }
      return videoObj;
    }).filter((video) => video !== null);
    if (validVideos.length > 0) {
      urlObj.videos = validVideos;
    }
  }
  if (urlElement.link) {
    const links = Array.isArray(urlElement.link) ? urlElement.link : [urlElement.link];
    const alternatives = links.map((link) => {
      if (link.rel === "alternate" && isValidString(link.hreflang) && isValidString(link.href)) {
        return {
          hreflang: link.hreflang,
          href: link.href
        };
      } else {
        warnings.push({
          type: "validation",
          message: 'Alternative link missing required rel="alternate", hreflang, or href',
          context: { url: urlElement.loc, field: "link" }
        });
        return null;
      }
    }).filter((alt) => alt !== null);
    if (alternatives.length > 0) {
      urlObj.alternatives = alternatives;
    }
  }
  if (urlElement.news && typeof urlElement.news === "object") {
    const news = urlElement.news;
    if (isValidString(news.title) && isValidString(news.publication_date) && news.publication && isValidString(news.publication.name) && isValidString(news.publication.language)) {
      urlObj.news = {
        title: news.title,
        publication_date: news.publication_date,
        publication: {
          name: news.publication.name,
          language: news.publication.language
        }
      };
    } else {
      warnings.push({
        type: "validation",
        message: "News entry missing required fields (title, publication_date, publication.name, publication.language)",
        context: { url: urlElement.loc, field: "news" }
      });
    }
  }
  return Object.fromEntries(
    Object.entries(urlObj).filter(
      ([_, value]) => value != null && (!Array.isArray(value) || value.length > 0)
    )
  );
}
async function parseSitemapXml(xml) {
  const warnings = [];
  if (!xml) {
    throw new Error("Empty XML input provided");
  }
  const { XMLParser } = await import('file:///home/lucy/git/Helltop/node_modules/.pnpm/fast-xml-parser@5.5.5/node_modules/fast-xml-parser/src/fxp.js');
  const parser = new XMLParser({
    isArray: (tagName) => ["url", "image", "video", "link", "tag", "price"].includes(tagName),
    removeNSPrefix: true,
    parseAttributeValue: false,
    ignoreAttributes: false,
    attributeNamePrefix: "",
    trimValues: true
  });
  try {
    const parsed = parser.parse(xml);
    if (!parsed?.urlset) {
      throw new Error("XML does not contain a valid urlset element");
    }
    if (!parsed.urlset.url) {
      throw new Error("Sitemap contains no URL entries");
    }
    const urls = Array.isArray(parsed.urlset.url) ? parsed.urlset.url : [parsed.urlset.url];
    const validUrls = urls.map((url) => extractUrlFromParsedElement(url, warnings)).filter((url) => url !== null);
    if (validUrls.length === 0 && urls.length > 0) {
      warnings.push({
        type: "validation",
        message: "No valid URLs found in sitemap after validation"
      });
    }
    return { urls: validUrls, warnings };
  } catch (error) {
    if (error instanceof Error && (error.message === "Empty XML input provided" || error.message === "XML does not contain a valid urlset element" || error.message === "Sitemap contains no URL entries")) {
      throw error;
    }
    throw new Error(`Failed to parse XML: ${error instanceof Error ? error.message : String(error)}`);
  }
}

new XMLParser({
  isArray: (tagName) => tagName === "sitemap",
  removeNSPrefix: true,
  trimValues: true
});

function normalizeSourceInput(source) {
  if (typeof source === "string") {
    return { context: { name: "hook" }, fetch: source };
  }
  if (Array.isArray(source)) {
    return { context: { name: "hook" }, fetch: source };
  }
  return source;
}
async function tryFetchWithFallback(url, options, event) {
  const isExternalUrl = !url.startsWith("/");
  if (isExternalUrl) {
    const strategies = [
      // Strategy 1: Use globalThis.$fetch (original approach)
      () => globalThis.$fetch(url, options),
      // Strategy 2: If event is available, try using event context even for external URLs
      event ? () => event.$fetch(url, options) : null,
      // Strategy 3: Use native fetch as last resort
      () => $fetch(url, options)
    ].filter(Boolean);
    let lastError = null;
    for (const strategy of strategies) {
      try {
        return await strategy();
      } catch (error) {
        lastError = error;
        continue;
      }
    }
    throw lastError;
  }
  const fetchContainer = url.startsWith("/") && event ? event : globalThis;
  return await fetchContainer.$fetch(url, options);
}
async function fetchDataSource(input, event) {
  const context = typeof input.context === "string" ? { name: input.context } : input.context || { name: "fetch" };
  const url = typeof input.fetch === "string" ? input.fetch : input.fetch[0];
  const options = typeof input.fetch === "string" ? {} : input.fetch[1];
  const start = Date.now();
  const isExternalUrl = !url.startsWith("/");
  const timeout = isExternalUrl ? 1e4 : options.timeout || 5e3;
  const timeoutController = new AbortController();
  const abortRequestTimeout = setTimeout(() => timeoutController.abort(), timeout);
  try {
    let isMaybeErrorResponse = false;
    const isXmlRequest = parseURL(url).pathname.endsWith(".xml");
    const mergedHeaders = defu$1(
      options?.headers,
      {
        Accept: isXmlRequest ? "text/xml" : "application/json"
      },
      event && !isExternalUrl ? { host: getRequestHost(event, { xForwardedHost: true }) } : {}
    );
    const fetchOptions = {
      ...options,
      responseType: isXmlRequest ? "text" : "json",
      signal: timeoutController.signal,
      headers: mergedHeaders,
      // Use ofetch's built-in retry for external sources
      ...isExternalUrl && {
        retry: 2,
        retryDelay: 200
      },
      // @ts-expect-error untyped
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isMaybeErrorResponse = true;
      }
    };
    const res = await tryFetchWithFallback(url, fetchOptions, event);
    const timeTakenMs = Date.now() - start;
    if (isMaybeErrorResponse) {
      return {
        ...input,
        context,
        urls: [],
        timeTakenMs,
        error: "Received HTML response instead of JSON"
      };
    }
    let urls = [];
    if (typeof res === "object") {
      urls = res.urls || res;
    } else if (typeof res === "string" && parseURL(url).pathname.endsWith(".xml")) {
      const result = await parseSitemapXml(res);
      urls = result.urls;
    }
    return {
      ...input,
      context,
      timeTakenMs,
      urls
    };
  } catch (_err) {
    const error = _err;
    if (isExternalUrl) {
      const errorInfo = {
        url,
        timeout,
        error: error.message,
        statusCode: error.response?.status,
        statusText: error.response?.statusText,
        method: options?.method || "GET"
      };
      logger.error("Failed to fetch external source.", errorInfo);
    } else {
      logger.error("Failed to fetch source.", { url, error: error.message });
    }
    return {
      ...input,
      context,
      urls: [],
      error: error.message,
      _isFailure: true
      // Mark as failure to prevent caching
    };
  } finally {
    if (abortRequestTimeout) {
      clearTimeout(abortRequestTimeout);
    }
  }
}
async function globalSitemapSources() {
  const m = await Promise.resolve().then(function () { return globalSources; });
  return [...m.sources];
}
async function childSitemapSources(definition) {
  if (!definition?._hasSourceChunk)
    return [];
  const m = await Promise.resolve().then(function () { return childSources; });
  return [...m.sources[definition.sitemapName] || []];
}
async function resolveSitemapSources(sources, event) {
  return (await Promise.all(
    sources.map((source) => {
      const normalized = normalizeSourceInput(source);
      if ("urls" in normalized) {
        return {
          timeTakenMs: 0,
          ...normalized,
          urls: normalized.urls
        };
      }
      if (normalized.fetch)
        return fetchDataSource(normalized, event);
      return {
        ...normalized,
        error: "Invalid source"
      };
    })
  )).flat();
}

function sortInPlace(urls) {
  urls.sort((a, b) => {
    const aLoc = typeof a === "string" ? a : a.loc;
    const bLoc = typeof b === "string" ? b : b.loc;
    const aSegments = aLoc.split("/").length;
    const bSegments = bLoc.split("/").length;
    if (aSegments !== bSegments) {
      return aSegments - bSegments;
    }
    return aLoc.localeCompare(bLoc, void 0, { numeric: true });
  });
  return urls;
}

function parseChunkInfo(sitemapName, sitemaps, defaultChunkSize) {
  defaultChunkSize = defaultChunkSize || 1e3;
  if (typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemapName))) {
    return {
      isChunked: true,
      baseSitemapName: "sitemap",
      chunkIndex: Number(sitemapName),
      chunkSize: defaultChunkSize
    };
  }
  if (sitemapName.includes("-")) {
    const parts = sitemapName.split("-");
    const lastPart = parts.pop();
    if (!Number.isNaN(Number(lastPart))) {
      const baseSitemapName = parts.join("-");
      const baseSitemap = sitemaps[baseSitemapName];
      if (baseSitemap && (baseSitemap.chunks || baseSitemap._isChunking)) {
        const chunkSize = typeof baseSitemap.chunks === "number" ? baseSitemap.chunks : baseSitemap.chunkSize || defaultChunkSize;
        return {
          isChunked: true,
          baseSitemapName,
          chunkIndex: Number(lastPart),
          chunkSize
        };
      }
    }
  }
  return {
    isChunked: false,
    baseSitemapName: sitemapName,
    chunkIndex: void 0,
    chunkSize: defaultChunkSize
  };
}
function sliceUrlsForChunk(urls, sitemapName, sitemaps, defaultChunkSize = 1e3) {
  const chunkInfo = parseChunkInfo(sitemapName, sitemaps, defaultChunkSize);
  if (chunkInfo.isChunked && chunkInfo.chunkIndex !== void 0) {
    const startIndex = chunkInfo.chunkIndex * chunkInfo.chunkSize;
    const endIndex = (chunkInfo.chunkIndex + 1) * chunkInfo.chunkSize;
    return urls.slice(startIndex, endIndex);
  }
  return urls;
}

function escapeValueForXml(value) {
  if (value === true || value === false)
    return value ? "yes" : "no";
  return xmlEscape(String(value));
}
const yesNo = (v) => v === "yes" || v === true ? "yes" : "no";
const URLSET_OPENING_TAG = '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
function buildUrlXml(url, NL, I1, I2, I3, I4) {
  let xml = `${I1}<url>${NL}`;
  if (url.loc) xml += `${I2}<loc>${xmlEscape(url.loc)}</loc>${NL}`;
  if (url.lastmod) xml += `${I2}<lastmod>${url.lastmod}</lastmod>${NL}`;
  if (url.changefreq) xml += `${I2}<changefreq>${url.changefreq}</changefreq>${NL}`;
  if (url.priority !== void 0) {
    const p = typeof url.priority === "number" ? url.priority : Number.parseFloat(url.priority);
    xml += `${I2}<priority>${p.toFixed(1)}</priority>${NL}`;
  }
  if (url.alternatives) {
    for (const alt of url.alternatives) {
      let attrs = "";
      for (const [k, v] of Object.entries(alt)) attrs += ` ${k}="${xmlEscape(String(v))}"`;
      xml += `${I2}<xhtml:link rel="alternate"${attrs} />${NL}`;
    }
  }
  if (url.images) {
    for (const img of url.images) {
      xml += `${I2}<image:image>${NL}${I3}<image:loc>${xmlEscape(img.loc)}</image:loc>${NL}`;
      if (img.title) xml += `${I3}<image:title>${xmlEscape(img.title)}</image:title>${NL}`;
      if (img.caption) xml += `${I3}<image:caption>${xmlEscape(img.caption)}</image:caption>${NL}`;
      if (img.geo_location) xml += `${I3}<image:geo_location>${xmlEscape(img.geo_location)}</image:geo_location>${NL}`;
      if (img.license) xml += `${I3}<image:license>${xmlEscape(img.license)}</image:license>${NL}`;
      xml += `${I2}</image:image>${NL}`;
    }
  }
  if (url.videos) {
    for (const video of url.videos) {
      xml += `${I2}<video:video>${NL}${I3}<video:title>${xmlEscape(video.title)}</video:title>${NL}`;
      if (video.thumbnail_loc) xml += `${I3}<video:thumbnail_loc>${xmlEscape(video.thumbnail_loc)}</video:thumbnail_loc>${NL}`;
      xml += `${I3}<video:description>${xmlEscape(video.description)}</video:description>${NL}`;
      if (video.content_loc) xml += `${I3}<video:content_loc>${xmlEscape(video.content_loc)}</video:content_loc>${NL}`;
      if (video.player_loc) xml += `${I3}<video:player_loc>${xmlEscape(video.player_loc)}</video:player_loc>${NL}`;
      if (video.duration !== void 0) xml += `${I3}<video:duration>${video.duration}</video:duration>${NL}`;
      if (video.expiration_date) xml += `${I3}<video:expiration_date>${video.expiration_date}</video:expiration_date>${NL}`;
      if (video.rating !== void 0) xml += `${I3}<video:rating>${video.rating}</video:rating>${NL}`;
      if (video.view_count !== void 0) xml += `${I3}<video:view_count>${video.view_count}</video:view_count>${NL}`;
      if (video.publication_date) xml += `${I3}<video:publication_date>${video.publication_date}</video:publication_date>${NL}`;
      if (video.family_friendly !== void 0) xml += `${I3}<video:family_friendly>${yesNo(video.family_friendly)}</video:family_friendly>${NL}`;
      if (video.restriction) xml += `${I3}<video:restriction relationship="${video.restriction.relationship || "allow"}">${xmlEscape(video.restriction.restriction)}</video:restriction>${NL}`;
      if (video.platform) xml += `${I3}<video:platform relationship="${video.platform.relationship || "allow"}">${xmlEscape(video.platform.platform)}</video:platform>${NL}`;
      if (video.requires_subscription !== void 0) xml += `${I3}<video:requires_subscription>${yesNo(video.requires_subscription)}</video:requires_subscription>${NL}`;
      if (video.price) {
        for (const price of video.price) {
          const c = price.currency ? ` currency="${price.currency}"` : "";
          const t = price.type ? ` type="${price.type}"` : "";
          xml += `${I3}<video:price${c}${t}>${xmlEscape(String(price.price ?? ""))}</video:price>${NL}`;
        }
      }
      if (video.uploader) {
        const info = video.uploader.info ? ` info="${xmlEscape(video.uploader.info)}"` : "";
        xml += `${I3}<video:uploader${info}>${xmlEscape(video.uploader.uploader)}</video:uploader>${NL}`;
      }
      if (video.live !== void 0) xml += `${I3}<video:live>${yesNo(video.live)}</video:live>${NL}`;
      if (video.tag) {
        const tags = Array.isArray(video.tag) ? video.tag : [video.tag];
        for (const t of tags) xml += `${I3}<video:tag>${xmlEscape(t)}</video:tag>${NL}`;
      }
      if (video.category) xml += `${I3}<video:category>${xmlEscape(video.category)}</video:category>${NL}`;
      if (video.gallery_loc) xml += `${I3}<video:gallery_loc>${xmlEscape(video.gallery_loc)}</video:gallery_loc>${NL}`;
      xml += `${I2}</video:video>${NL}`;
    }
  }
  if (url.news) {
    xml += `${I2}<news:news>${NL}${I3}<news:publication>${NL}`;
    xml += `${I4}<news:name>${xmlEscape(url.news.publication.name)}</news:name>${NL}`;
    xml += `${I4}<news:language>${xmlEscape(url.news.publication.language)}</news:language>${NL}`;
    xml += `${I3}</news:publication>${NL}`;
    if (url.news.title) xml += `${I3}<news:title>${xmlEscape(url.news.title)}</news:title>${NL}`;
    if (url.news.publication_date) xml += `${I3}<news:publication_date>${url.news.publication_date}</news:publication_date>${NL}`;
    xml += `${I2}</news:news>${NL}`;
  }
  if (url._warnings?.length) {
    for (const w of url._warnings)
      xml += `${I2}<!-- WARN: ${w} -->${NL}`;
  }
  xml += `${I1}</url>`;
  return xml;
}
function urlsToXml(urls, resolvers, { version, xsl, credits, minify }, errorInfo) {
  let xslHref = xsl ? resolvers.relativeBaseUrlResolver(xsl) : false;
  if (xslHref && errorInfo?.messages.length) {
    xslHref = withQuery(xslHref, {
      errors: "true",
      error_messages: errorInfo.messages,
      error_urls: errorInfo.urls
    });
  }
  const NL = minify ? "" : "\n";
  const I1 = minify ? "" : "    ";
  const I2 = minify ? "" : "        ";
  const I3 = minify ? "" : "            ";
  const I4 = minify ? "" : "                ";
  let xml = xslHref ? `<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="${escapeValueForXml(xslHref)}"?>${NL}` : `<?xml version="1.0" encoding="UTF-8"?>${NL}`;
  xml += URLSET_OPENING_TAG + NL;
  for (const url of urls) {
    xml += buildUrlXml(url, NL, I1, I2, I3, I4) + NL;
  }
  xml += "</urlset>";
  if (credits) {
    xml += `${NL}<!-- XML Sitemap generated by @nuxtjs/sitemap v${version} at ${(/* @__PURE__ */ new Date()).toISOString()} -->`;
  }
  return xml;
}

function resolveSitemapEntries(sitemap, urls, runtimeConfig, resolvers) {
  const {
    autoI18n,
    isI18nMapped
  } = runtimeConfig;
  const filterPath = createPathFilter({
    include: sitemap.include,
    exclude: sitemap.exclude
  });
  const _urls = urls.map((_e) => {
    const e = preNormalizeEntry(_e, resolvers);
    if (!e.loc || !filterPath(e.loc))
      return false;
    return e;
  }).filter(Boolean);
  let validI18nUrlsForTransform = [];
  const withoutPrefixPaths = {};
  if (autoI18n && autoI18n.strategy !== "no_prefix") {
    const localeCodes = autoI18n.locales.map((l) => l.code);
    const localeByCode = new Map(autoI18n.locales.map((l) => [l.code, l]));
    const isPrefixStrategy = autoI18n.strategy === "prefix";
    const isPrefixExceptOrAndDefault = autoI18n.strategy === "prefix_and_default" || autoI18n.strategy === "prefix_except_default";
    const xDefaultAndLocales = [{ code: "x-default", _hreflang: "x-default" }, ...autoI18n.locales];
    const defaultLocale = autoI18n.defaultLocale;
    const hasPages = !!autoI18n.pages;
    const hasDifferentDomains = !!autoI18n.differentDomains;
    validI18nUrlsForTransform = _urls.map((_e, i) => {
      if (_e._abs)
        return false;
      const split = splitForLocales(_e._relativeLoc, localeCodes);
      let localeCode = split[0];
      const pathWithoutPrefix = split[1];
      if (!localeCode)
        localeCode = defaultLocale;
      const e = _e;
      e._pathWithoutPrefix = pathWithoutPrefix;
      const locale = localeByCode.get(localeCode);
      if (!locale)
        return false;
      e._locale = locale;
      e._index = i;
      e._key = `${e._sitemap || ""}${e._path?.pathname || "/"}${e._path?.search || ""}`;
      withoutPrefixPaths[pathWithoutPrefix] = withoutPrefixPaths[pathWithoutPrefix] || [];
      if (!withoutPrefixPaths[pathWithoutPrefix].some((e2) => e2._locale.code === locale.code))
        withoutPrefixPaths[pathWithoutPrefix].push(e);
      return e;
    }).filter(Boolean);
    for (const e of validI18nUrlsForTransform) {
      if (!e._i18nTransform && !e.alternatives?.length) {
        const alternatives = (withoutPrefixPaths[e._pathWithoutPrefix] || []).map((u) => {
          const entries = [];
          if (u._locale.code === defaultLocale) {
            entries.push({
              href: u.loc,
              hreflang: "x-default"
            });
          }
          entries.push({
            href: u.loc,
            hreflang: u._locale._hreflang || defaultLocale
          });
          return entries;
        }).flat().filter(Boolean);
        if (alternatives.length)
          e.alternatives = alternatives;
      } else if (e._i18nTransform) {
        delete e._i18nTransform;
        if (hasDifferentDomains) {
          const defLocale = localeByCode.get(defaultLocale);
          e.alternatives = [
            {
              ...defLocale,
              code: "x-default"
            },
            ...autoI18n.locales.filter((l) => !!l.domain)
          ].map((locale) => {
            return {
              hreflang: locale._hreflang,
              href: joinURL(withHttps(locale.domain), e._pathWithoutPrefix)
            };
          });
        } else {
          const pageMatch = hasPages ? findPageMapping(e._pathWithoutPrefix, autoI18n.pages) : null;
          const pathSearch = e._path?.search || "";
          const pathWithoutPrefix = e._pathWithoutPrefix;
          for (const l of autoI18n.locales) {
            let loc = pathWithoutPrefix;
            if (pageMatch && pageMatch.mappings[l.code] !== void 0) {
              const customPath = pageMatch.mappings[l.code];
              if (customPath === false)
                continue;
              if (typeof customPath === "string") {
                loc = customPath[0] === "/" ? customPath : `/${customPath}`;
                loc = applyDynamicParams(loc, pageMatch.paramSegments);
                if (isPrefixStrategy || isPrefixExceptOrAndDefault && l.code !== defaultLocale)
                  loc = joinURL(`/${l.code}`, loc);
              }
            } else if (!hasDifferentDomains && !(isPrefixExceptOrAndDefault && l.code === defaultLocale)) {
              loc = joinURL(`/${l.code}`, pathWithoutPrefix);
            }
            const _sitemap = isI18nMapped ? l._sitemap : void 0;
            const alternatives = [];
            for (const locale of xDefaultAndLocales) {
              const code = locale.code === "x-default" ? defaultLocale : locale.code;
              const isDefault = locale.code === "x-default" || locale.code === defaultLocale;
              let href = pathWithoutPrefix;
              if (pageMatch && pageMatch.mappings[code] !== void 0) {
                const customPath = pageMatch.mappings[code];
                if (customPath === false)
                  continue;
                if (typeof customPath === "string") {
                  href = customPath[0] === "/" ? customPath : `/${customPath}`;
                  href = applyDynamicParams(href, pageMatch.paramSegments);
                  if (isPrefixStrategy || isPrefixExceptOrAndDefault && !isDefault)
                    href = joinURL("/", code, href);
                }
              } else if (isPrefixStrategy) {
                href = joinURL("/", code, pathWithoutPrefix);
              } else if (isPrefixExceptOrAndDefault && !isDefault) {
                href = joinURL("/", code, pathWithoutPrefix);
              }
              if (!filterPath(href))
                continue;
              alternatives.push({
                hreflang: locale._hreflang,
                href
              });
            }
            const { _index: _, ...rest } = e;
            const newEntry = preNormalizeEntry({
              _sitemap,
              ...rest,
              _key: `${_sitemap || ""}${loc || "/"}${pathSearch}`,
              _locale: l,
              loc,
              alternatives
            }, resolvers);
            if (e._locale.code === newEntry._locale.code) {
              _urls[e._index] = newEntry;
              e._index = void 0;
            } else {
              _urls.push(newEntry);
            }
          }
        }
      }
      if (isI18nMapped) {
        e._sitemap = e._sitemap || e._locale._sitemap;
        e._key = `${e._sitemap || ""}${e.loc || "/"}${e._path?.search || ""}`;
      }
      if (e._index)
        _urls[e._index] = e;
    }
  }
  return _urls;
}
async function buildSitemapUrls(sitemap, resolvers, runtimeConfig, nitro) {
  const {
    sitemaps,
    // enhancing
    autoI18n,
    isI18nMapped,
    isMultiSitemap,
    // sorting
    sortEntries,
    // chunking
    defaultSitemapsChunkSize
  } = runtimeConfig;
  const chunkSize = defaultSitemapsChunkSize || void 0;
  const chunkInfo = parseChunkInfo(sitemap.sitemapName, sitemaps, chunkSize);
  function maybeSort(urls2) {
    return sortEntries ? sortInPlace(urls2) : urls2;
  }
  function maybeSlice(urls2) {
    return sliceUrlsForChunk(urls2, sitemap.sitemapName, sitemaps, chunkSize);
  }
  if (autoI18n?.differentDomains) {
    const domain = autoI18n.locales.find((e) => e.language === sitemap.sitemapName || e.code === sitemap.sitemapName)?.domain;
    if (domain) {
      const _tester = resolvers.canonicalUrlResolver;
      resolvers.canonicalUrlResolver = (path) => resolveSitePath(path, {
        absolute: true,
        withBase: false,
        siteUrl: withHttps(domain),
        trailingSlash: _tester("/test/").endsWith("/"),
        base: "/"
      });
    }
  }
  let effectiveSitemap = sitemap;
  const baseSitemapName = chunkInfo.baseSitemapName;
  if (chunkInfo.isChunked && baseSitemapName !== sitemap.sitemapName && sitemaps[baseSitemapName]) {
    effectiveSitemap = sitemaps[baseSitemapName];
  }
  let sourcesInput = effectiveSitemap.includeAppSources ? [...await globalSitemapSources(), ...await childSitemapSources(effectiveSitemap)] : await childSitemapSources(effectiveSitemap);
  if (nitro && resolvers.event) {
    const ctx = {
      event: resolvers.event,
      sitemapName: baseSitemapName,
      sources: sourcesInput
    };
    await nitro.hooks.callHook("sitemap:sources", ctx);
    sourcesInput = ctx.sources;
  }
  const sources = await resolveSitemapSources(sourcesInput, resolvers.event);
  const failedSources = sources.filter((source) => source.error && source._isFailure).map((source) => ({
    url: typeof source.fetch === "string" ? source.fetch : source.fetch?.[0] || "unknown",
    error: source.error || "Unknown error"
  }));
  const resolvedCtx = {
    urls: sources.flatMap((s) => s.urls),
    sitemapName: sitemap.sitemapName,
    event: resolvers.event
  };
  await nitro?.hooks.callHook("sitemap:input", resolvedCtx);
  const enhancedUrls = resolveSitemapEntries(sitemap, resolvedCtx.urls, { autoI18n, isI18nMapped }, resolvers);
  if (isMultiSitemap) {
    const sitemapNames = Object.keys(sitemaps).filter((k) => k !== "index");
    const warnedSitemaps = nitro?._sitemapWarnedSitemaps || /* @__PURE__ */ new Set();
    for (const e of enhancedUrls) {
      if (typeof e._sitemap === "string" && !sitemapNames.includes(e._sitemap)) {
        if (!warnedSitemaps.has(e._sitemap)) {
          warnedSitemaps.add(e._sitemap);
          logger.error(`Sitemap \`${e._sitemap}\` not found in sitemap config. Available sitemaps: ${sitemapNames.join(", ")}. Entry \`${e.loc}\` will be omitted.`);
        }
      }
    }
    if (nitro) {
      nitro._sitemapWarnedSitemaps = warnedSitemaps;
    }
  }
  const filteredUrls = enhancedUrls.filter((e) => {
    if (e._sitemap === false)
      return false;
    if (isMultiSitemap && e._sitemap && sitemap.sitemapName) {
      if (sitemap._isChunking)
        return sitemap.sitemapName.startsWith(e._sitemap + "-");
      return e._sitemap === sitemap.sitemapName;
    }
    return true;
  });
  const sortedUrls = maybeSort(filteredUrls);
  const urls = maybeSlice(sortedUrls);
  return { urls, failedSources };
}

function useNitroUrlResolvers(e) {
  const canonicalQuery = getQuery$1(e).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const siteConfig = getSiteConfig$1(e);
  return {
    event: e,
    fixSlashes: (path) => fixSlashes(siteConfig.trailingSlash, path),
    // we need these as they depend on the nitro event
    canonicalUrlResolver: createSitePathResolver(e, {
      canonical: isShowingCanonical || false,
      absolute: true,
      withBase: true
    }),
    relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true })
  };
}
async function buildSitemapXml(event, definition, resolvers, runtimeConfig) {
  const { sitemapName } = definition;
  const nitro = useNitroApp();
  const { urls: sitemapUrls, failedSources } = await buildSitemapUrls(definition, resolvers, runtimeConfig, nitro);
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  const { autoI18n } = runtimeConfig;
  let validCount = 0;
  for (let i = 0; i < sitemapUrls.length; i++) {
    const u = sitemapUrls[i];
    const path = u._path?.pathname || u.loc;
    let routeRules = routeRuleMatcher(path);
    if (autoI18n?.locales && autoI18n?.strategy !== "no_prefix") {
      const match = splitForLocales(path, autoI18n.locales.map((l) => l.code));
      const pathWithoutPrefix = match[1];
      if (pathWithoutPrefix && pathWithoutPrefix !== path)
        routeRules = defu$1(routeRules, routeRuleMatcher(pathWithoutPrefix));
    }
    if (routeRules.sitemap === false)
      continue;
    if (typeof routeRules.robots !== "undefined" && !routeRules.robots)
      continue;
    const hasRobotsDisabled = Object.entries(routeRules.headers || {}).some(([name, value]) => name.toLowerCase() === "x-robots-tag" && value.toLowerCase().includes("noindex"));
    if (routeRules.redirect || hasRobotsDisabled)
      continue;
    sitemapUrls[validCount++] = routeRules.sitemap ? defu$1(u, routeRules.sitemap) : u;
  }
  sitemapUrls.length = validCount;
  if (validCount === 0 && sitemapUrls.length > 0) {
    logger.warn(`Sitemap had ${sitemapUrls.length} that were all filtered out. This may be due to a robots rules blocking these URLs from indexing. Check your /** route rules or robots.txt configuration.`);
  }
  const locSize = sitemapUrls.length;
  const resolvedCtx = {
    urls: sitemapUrls,
    sitemapName,
    event
  };
  await nitro.hooks.callHook("sitemap:resolved", resolvedCtx);
  if (resolvedCtx.urls.length !== locSize) {
    resolvedCtx.urls = resolvedCtx.urls.map((e) => preNormalizeEntry(e, resolvers));
  }
  const maybeSort = (urls2) => runtimeConfig.sortEntries ? sortInPlace(urls2) : urls2;
  const defaults = definition.defaults || {};
  const normalizedPreDedupe = resolvedCtx.urls.map((e) => normaliseEntry(e, defaults, resolvers));
  const urls = maybeSort(mergeOnKey(normalizedPreDedupe, "_key").map((e) => normaliseEntry(e, defaults, resolvers)));
  if (definition._isChunking && definition.sitemapName.includes("-")) {
    const parts = definition.sitemapName.split("-");
    const lastPart = parts.pop();
    if (!Number.isNaN(Number(lastPart))) {
      const chunkIndex = Number(lastPart);
      const baseSitemapName = parts.join("-");
      if (urls.length === 0 && chunkIndex > 0) {
        throw createError({
          statusCode: 404,
          message: `Sitemap chunk ${chunkIndex} for "${baseSitemapName}" does not exist.`
        });
      }
    }
  }
  const errorInfo = failedSources.length > 0 ? {
    messages: failedSources.map((f) => f.error),
    urls: failedSources.map((f) => f.url)
  } : void 0;
  const sitemap = urlsToXml(urls, resolvers, runtimeConfig, errorInfo);
  const ctx = { sitemap, sitemapName, event };
  await nitro.hooks.callHook("sitemap:output", ctx);
  return ctx.sitemap;
}
defineCachedFunction(
  buildSitemapXml,
  {
    name: "sitemap:xml",
    group: "sitemap",
    maxAge: 60 * 10,
    // Default 10 minutes
    base: "sitemap",
    // Use the sitemap storage
    getKey: (event, definition) => {
      const host = getHeader(event, "host") || getHeader(event, "x-forwarded-host") || "";
      const proto = getHeader(event, "x-forwarded-proto") || "https";
      const sitemapName = definition.sitemapName || "default";
      return `${sitemapName}-${proto}-${host}`;
    },
    swr: true
    // Enable stale-while-revalidate
  }
);
async function createSitemap(event, definition, runtimeConfig) {
  const resolvers = useNitroUrlResolvers(event);
  const xml = await buildSitemapXml(event, definition, resolvers, runtimeConfig);
  setHeader(event, "Content-Type", "text/xml; charset=UTF-8");
  if (runtimeConfig.cacheMaxAgeSeconds) {
    setHeader(event, "Cache-Control", `public, max-age=${runtimeConfig.cacheMaxAgeSeconds}, s-maxage=${runtimeConfig.cacheMaxAgeSeconds}, stale-while-revalidate=3600`);
    const now = /* @__PURE__ */ new Date();
    setHeader(event, "X-Sitemap-Generated", now.toISOString());
    setHeader(event, "X-Sitemap-Cache-Duration", `${runtimeConfig.cacheMaxAgeSeconds}s`);
    const expiryTime = new Date(now.getTime() + runtimeConfig.cacheMaxAgeSeconds * 1e3);
    setHeader(event, "X-Sitemap-Cache-Expires", expiryTime.toISOString());
    const remainingSeconds = Math.floor((expiryTime.getTime() - now.getTime()) / 1e3);
    setHeader(event, "X-Sitemap-Cache-Remaining", `${remainingSeconds}s`);
  } else {
    setHeader(event, "Cache-Control", `no-cache, no-store`);
  }
  event.context._isSitemap = true;
  return xml;
}

async function sitemapXmlEventHandler(e) {
  const runtimeConfig = useSitemapRuntimeConfig();
  const { sitemaps } = runtimeConfig;
  if ("index" in sitemaps)
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 302 );
  return createSitemap(e, Object.values(sitemaps)[0], runtimeConfig);
}

const eventHandlers = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  sitemapXmlEventHandler: sitemapXmlEventHandler
}, Symbol.toStringTag, { value: 'Module' }));

const login_get = defineEventHandler(async (event) => {
  const user = getHeader(event, "remote-user");
  const name = getHeader(event, "remote-name") || user;
  const email = getHeader(event, "remote-email");
  if (!user) {
    return sendRedirect(event, "/_studio");
  }
  await setStudioUserSession(event, {
    name,
    email,
    providerId: user
  });
  return sendRedirect(event, "/_studio");
});

const login_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: login_get
}, Symbol.toStringTag, { value: 'Module' }));

const logout_get = defineEventHandler(async (event) => {
  await clearStudioUserSession(event);
  return sendRedirect(event, "/");
});

const logout_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: logout_get
}, Symbol.toStringTag, { value: 'Module' }));

const rss_xml = defineEventHandler(async (event) => {
  const xml = await generateRss();
  setResponseHeader(event, "Content-Type", "application/xml");
  return xml;
});

const rss_xml$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: rss_xml
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
	return {
		body: encodeForwardSlashes(stringify(splitPayload(ssrContext).payload, ssrContext["~payloadReducers"])) ,
		statusCode: getResponseStatus(ssrContext.event),
		statusMessage: getResponseStatusText(ssrContext.event),
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const contents = opts.data ? encodeForwardSlashes(stringify(opts.data, opts.ssrContext["~payloadReducers"])) : "";
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": !(opts.ssrContext.noSSR)
	};
	{
		payload.id = "__NUXT_DATA__";
	}
	if (opts.src) {
		payload["data-src"] = opts.src;
	}
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}
/**
* Encode forward slashes as unicode escape sequences to prevent
* Google from treating them as internal links and trying to crawl them.
* @see https://github.com/nuxt/nuxt/issues/24175
*/
function encodeForwardSlashes(str) {
	return str.replaceAll("/", "\\u002F");
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, ...initial } = ssrContext.payload;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload: {
			data,
			prerenderedAt
		}
	};
}

const renderSSRHeadOptions = {"omitLineBreaks":true};

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
const handler = defineRenderHandler(async (event) => {
	const nitroApp = useNitroApp();
	// Whether we're rendering an error page
	const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
	if (ssrError && !("__unenv__" in event.node.req)) {
		throw createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error",
			message: "Page Not Found: /__nuxt_error"
		});
	}
	// Initialize ssr context
	const ssrContext = createSSRContext(event);
	// needed for hash hydration plugin to work
	const headEntryOptions = { mode: "server" };
	ssrContext.head.push(appHead, headEntryOptions);
	if (ssrError) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		const status = ssrError.status || ssrError.statusCode;
		if (status) {
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			ssrError.status = ssrError.statusCode = Number.parseInt(status);
		}
		if (typeof ssrError.data === "string") {
			try {
				ssrError.data = destr(ssrError.data);
			} catch {}
		}
		setSSRError(ssrContext, ssrError);
	}
	// Get route options (for `ssr: false`, `isr`, `cache` and `noScripts`)
	const routeOptions = getRouteRules(event);
	// Whether we are prerendering route or using ISR/SWR caching
	const _PAYLOAD_EXTRACTION = !ssrContext.noSSR && ((routeOptions.isr || routeOptions.cache));
	// When NUXT_PAYLOAD_INLINE is true (payloadExtraction: 'client'), we inline the full payload
	// in the HTML to avoid a separate _payload.json fetch on initial load (which would trigger a
	// second render or lambda invocation). The _payload.json endpoint still works for client-side nav.
	const _PAYLOAD_INLINE = !_PAYLOAD_EXTRACTION || NUXT_PAYLOAD_INLINE;
	const isRenderingPayload = (_PAYLOAD_EXTRACTION || routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
		ssrContext.url = url;
		event._path = event.node.req.url = url;
		if (payloadCache && await payloadCache.hasItem(url)) {
			return payloadCache.getItem(url);
		}
	}
	if (routeOptions.ssr === false) {
		ssrContext.noSSR = true;
	}
	const payloadURL = _PAYLOAD_EXTRACTION ? joinURL(ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL, ssrContext.url.replace(/\?.*$/, ""), PAYLOAD_FILENAME) + "?" + ssrContext.runtimeConfig.app.buildId : undefined;
	// Render app
	const renderer = await getRenderer(ssrContext);
	const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
		// We use error to bypass full render if we have an early response we can make
		// TODO: remove _renderResponse in nuxt v5
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") {
			return {};
		}
		// Use explicitly thrown error in preference to subsequent rendering errors
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	// Render inline styles
	// TODO: remove _renderResponse in nuxt v5
	const inlinedStyles = [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) {
		// TODO: remove _renderResponse in nuxt v5
		return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	}
	// Handle errors
	if (ssrContext.payload?.error && !ssrError) {
		throw ssrContext.payload.error;
	}
	// Directly render payload routes
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext);
		if (payloadCache) {
			await payloadCache.setItem(ssrContext.url, response);
		}
		return response;
	}
	if (_PAYLOAD_EXTRACTION) {
		// Cache payload from the current SSR context so _payload.json requests can be served
		// without a full re-render (during prerender via LRU+FS, at runtime via in-memory TTL cache)
		if (payloadCache) {
			await payloadCache.setItem(ssrContext.url === "/" ? "/" : ssrContext.url.replace(/\/$/, ""), renderPayloadResponse(ssrContext));
		}
	}
	const NO_SCRIPTS = routeOptions.noScripts;
	// Setup head
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	// 1. Preload payloads and app manifest
	// Skip preload when inlining full payload in HTML (no separate fetch needed for initial load)
	if (_PAYLOAD_EXTRACTION && !_PAYLOAD_INLINE && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			crossorigin: "anonymous",
			href: payloadURL
		} ] }, headEntryOptions);
	}
	// 2. Styles
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	const link = [];
	for (const resource of Object.values(styles)) {
		// Do not add links to resources that are inlined (vite v5+)
		if ("inline" in getQuery(resource.file)) {
			continue;
		}
		// Add CSS links in <head> for CSS files
		// - in production
		// - in dev mode when not rendering an island
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) {
		ssrContext.head.push({ link }, headEntryOptions);
	}
	if (!NO_SCRIPTS) {
		// 4. Resource Hints
		// Remove lazy hydrated modules from ssrContext.modules so they don't get preloaded
		// (CSS links are already added above, this only affects JS preloads)
		if (ssrContext["~lazyHydratedModules"]) {
			for (const id of ssrContext["~lazyHydratedModules"]) {
				ssrContext.modules?.delete(id);
			}
		}
		ssrContext.head.push({ link: getPreloadLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		ssrContext.head.push({ link: getPrefetchLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		// 5. Payloads
		ssrContext.head.push({ script: _PAYLOAD_INLINE ? renderPayloadJsonScript({
			ssrContext,
			data: ssrContext.payload
		})  : renderPayloadJsonScript({
			ssrContext,
			data: splitPayload(ssrContext).initial,
			src: payloadURL
		})  }, {
			...headEntryOptions,
			tagPosition: "bodyClose",
			tagPriority: "high"
		});
	}
	// 6. Scripts
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			tagPosition,
			crossorigin: ""
		})) }, headEntryOptions);
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	// Create render context
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	// Allow hooking into the rendered result
	await nitroApp.hooks.callHook("render:html", htmlContext, { event });
	// Construct HTML response
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: getResponseStatus(event),
		statusMessage: getResponseStatusText(event),
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
});
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) {
			result.push(chunk);
		}
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) {
		return "";
	}
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return "<!DOCTYPE html>" + `<html${joinAttrs(html.htmlAttrs)}>` + `<head>${joinTags(html.head)}</head>` + `<body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>` + "</html>";
}

const renderer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handler
}, Symbol.toStringTag, { value: 'Module' }));

const sources$1 = [];

const globalSources = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  sources: sources$1
}, Symbol.toStringTag, { value: 'Module' }));

const sources = {};

const childSources = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  sources: sources
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
