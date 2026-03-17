export const checksums = {
  "content": "v3.5.0--uk2q1hXeYSt1umIm8K7SCuCyg-SnUQFYPROlGNvaTvE",
  "blog": "v3.5.0--ad3DtKXS0JNVUiGBHqCq2OJTV5sg0M7mg-A4A4Fcivc",
  "homepage": "v3.5.0---tyd_G5sY6okuIoRlx3BqQXedHr1lNrCD-t3zqn2JPI"
}
export const checksumsStructure = {
  "content": "uk2q1hXeYSt1umIm8K7SCuCyg-SnUQFYPROlGNvaTvE",
  "blog": "z3BBFYcK_rppwLBoTW3uTreqdqFc4UWhlyoT0F-NHA4",
  "homepage": "uPWLCQB3G7UyFuOA9cvvgQFk69tRUssO1k95-vnP0xc"
}

export const tables = {
  "content": "_content_content",
  "blog": "_content_blog",
  "homepage": "_content_homepage",
  "info": "_content_info"
}

export default {
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
}