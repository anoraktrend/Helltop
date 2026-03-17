export const collections = {
  "content": {
    "name": "content",
    "pascalName": "Content",
    "tableName": "_content_content",
    "source": [
      {
        "_resolved": true,
        "prefix": "/",
        "include": "{about,blog}.md",
        "cwd": "/home/lucy/git/Helltop/content"
      }
    ],
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
    },
    "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$ref": "#/definitions/__SCHEMA__",
      "definitions": {
        "content": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "stem": {
              "type": "string"
            },
            "extension": {
              "type": "string",
              "enum": [
                "md",
                "yaml",
                "yml",
                "json",
                "csv",
                "xml"
              ]
            },
            "meta": {
              "type": "object",
              "additionalProperties": {}
            },
            "path": {
              "type": "string"
            },
            "title": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "seo": {
              "allOf": [
                {
                  "type": "object",
                  "properties": {
                    "title": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    }
                  }
                },
                {
                  "type": "object",
                  "additionalProperties": {}
                }
              ],
              "default": {}
            },
            "body": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string"
                },
                "children": {},
                "toc": {}
              },
              "required": [
                "type"
              ],
              "additionalProperties": false
            },
            "navigation": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "object",
                  "properties": {
                    "title": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    },
                    "icon": {
                      "type": "string",
                      "$content": {
                        "editor": {
                          "input": "icon"
                        }
                      }
                    }
                  },
                  "required": [
                    "title",
                    "description",
                    "icon"
                  ],
                  "additionalProperties": false
                }
              ],
              "default": true
            },
            "layout": {
              "type": "string",
              "default": "default"
            }
          },
          "required": [
            "id",
            "stem",
            "extension",
            "meta",
            "path",
            "title",
            "description",
            "body"
          ],
          "additionalProperties": false
        }
      }
    },
    "tableDefinition": "CREATE TABLE IF NOT EXISTS _content_content (id TEXT PRIMARY KEY, \"title\" VARCHAR, \"body\" TEXT, \"description\" VARCHAR, \"extension\" VARCHAR, \"layout\" VARCHAR DEFAULT 'default', \"meta\" TEXT, \"navigation\" TEXT DEFAULT true, \"path\" VARCHAR, \"seo\" TEXT DEFAULT '{}', \"stem\" VARCHAR, \"__hash__\" TEXT UNIQUE);"
  },
  "blog": {
    "name": "blog",
    "pascalName": "Blog",
    "tableName": "_content_blog",
    "source": [
      {
        "_resolved": true,
        "prefix": "/blog",
        "include": "blog/**",
        "cwd": "/home/lucy/git/Helltop/content"
      }
    ],
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
    },
    "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$ref": "#/definitions/__SCHEMA__",
      "definitions": {
        "blog": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "stem": {
              "type": "string"
            },
            "extension": {
              "type": "string",
              "enum": [
                "md",
                "yaml",
                "yml",
                "json",
                "csv",
                "xml"
              ]
            },
            "meta": {
              "type": "object",
              "additionalProperties": {}
            },
            "path": {
              "type": "string"
            },
            "title": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "seo": {
              "allOf": [
                {
                  "type": "object",
                  "properties": {
                    "title": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    }
                  }
                },
                {
                  "type": "object",
                  "additionalProperties": {}
                }
              ],
              "default": {}
            },
            "body": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string"
                },
                "children": {},
                "toc": {}
              },
              "required": [
                "type"
              ],
              "additionalProperties": false
            },
            "navigation": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "object",
                  "properties": {
                    "title": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    },
                    "icon": {
                      "type": "string",
                      "$content": {
                        "editor": {
                          "input": "icon"
                        }
                      }
                    }
                  },
                  "required": [
                    "title",
                    "description",
                    "icon"
                  ],
                  "additionalProperties": false
                }
              ],
              "default": true
            },
            "date": {
              "type": "string"
            },
            "author": {
              "type": "string"
            },
            "category": {
              "type": "string"
            },
            "slug": {
              "type": "string"
            },
            "layout": {
              "type": "string",
              "default": "blog"
            },
            "draft": {
              "type": "boolean",
              "default": false
            }
          },
          "required": [
            "id",
            "stem",
            "extension",
            "meta",
            "path",
            "title",
            "description",
            "body"
          ],
          "additionalProperties": false
        }
      }
    },
    "tableDefinition": "CREATE TABLE IF NOT EXISTS _content_blog (id TEXT PRIMARY KEY, \"title\" VARCHAR, \"author\" VARCHAR NULL, \"body\" TEXT, \"category\" VARCHAR NULL, \"date\" VARCHAR NULL, \"description\" VARCHAR, \"draft\" BOOLEAN DEFAULT false, \"extension\" VARCHAR, \"layout\" VARCHAR DEFAULT 'blog', \"meta\" TEXT, \"navigation\" TEXT DEFAULT true, \"path\" VARCHAR, \"seo\" TEXT DEFAULT '{}', \"slug\" VARCHAR NULL, \"stem\" VARCHAR, \"__hash__\" TEXT UNIQUE);"
  },
  "homepage": {
    "name": "homepage",
    "pascalName": "Homepage",
    "tableName": "_content_homepage",
    "source": [
      {
        "_resolved": true,
        "prefix": "/",
        "include": "1.index.json",
        "cwd": "/home/lucy/git/Helltop/content"
      }
    ],
    "type": "data",
    "fields": {
      "id": "string",
      "extension": "string",
      "footer": "json",
      "hero": "json",
      "meta": "json",
      "sections": "json",
      "stem": "string"
    },
    "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$ref": "#/definitions/__SCHEMA__",
      "definitions": {
        "homepage": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "stem": {
              "type": "string"
            },
            "extension": {
              "type": "string",
              "enum": [
                "md",
                "yaml",
                "yml",
                "json",
                "csv",
                "xml"
              ]
            },
            "meta": {
              "type": "object",
              "additionalProperties": {}
            },
            "hero": {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string"
                },
                "subtitle": {
                  "type": "string"
                },
                "description": {
                  "type": "string"
                }
              },
              "required": [
                "title",
                "subtitle",
                "description"
              ],
              "additionalProperties": false
            },
            "sections": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  },
                  "subtitle": {
                    "type": "string"
                  },
                  "type": {
                    "type": "string",
                    "enum": [
                      "text",
                      "infrastructure",
                      "software",
                      "cta"
                    ]
                  },
                  "content": {
                    "type": "string"
                  },
                  "list": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "title": {
                          "type": "string"
                        },
                        "text": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "title",
                        "text"
                      ],
                      "additionalProperties": false
                    }
                  },
                  "quote": {
                    "type": "string"
                  },
                  "items": {
                    "type": "array"
                  }
                },
                "required": [
                  "id",
                  "title",
                  "type"
                ],
                "additionalProperties": false
              }
            },
            "footer": {
              "type": "object",
              "properties": {
                "lastUpdated": {
                  "type": "string"
                },
                "statusUrl": {
                  "type": "string"
                }
              },
              "required": [
                "lastUpdated",
                "statusUrl"
              ],
              "additionalProperties": false
            }
          },
          "required": [
            "id",
            "stem",
            "extension",
            "meta",
            "hero",
            "sections",
            "footer"
          ],
          "additionalProperties": false
        }
      }
    },
    "tableDefinition": "CREATE TABLE IF NOT EXISTS _content_homepage (id TEXT PRIMARY KEY, \"extension\" VARCHAR, \"footer\" TEXT, \"hero\" TEXT, \"meta\" TEXT, \"sections\" TEXT, \"stem\" VARCHAR, \"__hash__\" TEXT UNIQUE);"
  },
  "info": {
    "name": "info",
    "pascalName": "Info",
    "tableName": "_content_info",
    "source": [],
    "type": "data",
    "fields": {},
    "schema": {
      "$ref": "#/definitions/info",
      "definitions": {},
      "$schema": "http://json-schema.org/draft-07/schema#"
    },
    "tableDefinition": "CREATE TABLE IF NOT EXISTS _content_info (id TEXT PRIMARY KEY, \"ready\" BOOLEAN, \"structureVersion\" VARCHAR, \"version\" VARCHAR, \"__hash__\" TEXT UNIQUE);"
  }
}
export const gitInfo = {}
export const appConfigSchema = {
  "properties": {
    "id": "#appConfig",
    "properties": {
      "icon": {
        "title": "Nuxt Icon",
        "description": "Configure Nuxt Icon module preferences.",
        "tags": [
          "@studioIcon material-symbols:star"
        ],
        "id": "#appConfig/icon",
        "properties": {
          "size": {
            "title": "Icon Size",
            "description": "Set the default icon size.",
            "tags": [
              "@studioIcon material-symbols:format-size-rounded"
            ],
            "tsType": "string | undefined",
            "id": "#appConfig/icon/size",
            "default": {},
            "type": "any"
          },
          "class": {
            "title": "CSS Class",
            "description": "Set the default CSS class.",
            "tags": [
              "@studioIcon material-symbols:css"
            ],
            "id": "#appConfig/icon/class",
            "default": "",
            "type": "string"
          },
          "attrs": {
            "title": "Default Attributes",
            "description": "Attributes applied to every icon component.\n\n@default { \"aria-hidden\": true }",
            "tags": [
              "@studioIcon material-symbols:settings"
            ],
            "tsType": "Record<string, string | number | boolean>",
            "id": "#appConfig/icon/attrs",
            "default": {
              "aria-hidden": true
            },
            "type": "object"
          },
          "mode": {
            "title": "Default Rendering Mode",
            "description": "Set the default rendering mode for the icon component",
            "enum": [
              "css",
              "svg"
            ],
            "tags": [
              "@studioIcon material-symbols:move-down-rounded"
            ],
            "id": "#appConfig/icon/mode",
            "default": "css",
            "type": "string"
          },
          "aliases": {
            "title": "Icon aliases",
            "description": "Define Icon aliases to update them easily without code changes.",
            "tags": [
              "@studioIcon material-symbols:star-rounded"
            ],
            "tsType": "{ [alias: string]: string }",
            "id": "#appConfig/icon/aliases",
            "default": {},
            "type": "object"
          },
          "cssSelectorPrefix": {
            "title": "CSS Selector Prefix",
            "description": "Set the default CSS selector prefix.",
            "tags": [
              "@studioIcon material-symbols:format-textdirection-l-to-r"
            ],
            "id": "#appConfig/icon/cssSelectorPrefix",
            "default": "i-",
            "type": "string"
          },
          "cssLayer": {
            "title": "CSS Layer Name",
            "description": "Set the default CSS `@layer` name.",
            "tags": [
              "@studioIcon material-symbols:layers"
            ],
            "tsType": "string | undefined",
            "id": "#appConfig/icon/cssLayer",
            "default": {},
            "type": "any"
          },
          "cssWherePseudo": {
            "title": "Use CSS `:where()` Pseudo Selector",
            "description": "Use CSS `:where()` pseudo selector to reduce specificity.",
            "tags": [
              "@studioIcon material-symbols:low-priority"
            ],
            "id": "#appConfig/icon/cssWherePseudo",
            "default": true,
            "type": "boolean"
          },
          "collections": {
            "title": "Icon Collections",
            "description": "List of known icon collections name. Used to resolve collection name ambiguity.\ne.g. `simple-icons-github` -> `simple-icons:github` instead of `simple:icons-github`\n\nWhen not provided, will use the full Iconify collection list.",
            "tags": [
              "@studioIcon material-symbols:format-list-bulleted"
            ],
            "tsType": "string[] | null",
            "id": "#appConfig/icon/collections",
            "default": null,
            "type": "any"
          },
          "customCollections": {
            "title": "Custom Icon Collections",
            "tags": [
              "@studioIcon material-symbols:format-list-bulleted"
            ],
            "tsType": "string[] | null",
            "id": "#appConfig/icon/customCollections",
            "default": null,
            "type": "any"
          },
          "provider": {
            "title": "Icon Provider",
            "description": "Provider to use for fetching icons\n\n- `server` - Fetch icons with a server handler\n- `iconify` - Fetch icons with Iconify API, purely client-side\n- `none` - Do not fetch icons (use client bundle only)\n\n`server` by default; `iconify` when `ssr: false`",
            "enum": [
              "server",
              "iconify",
              "none"
            ],
            "tags": [
              "@studioIcon material-symbols:cloud"
            ],
            "type": "\"server\" | \"iconify\" | \"none\" | undefined",
            "id": "#appConfig/icon/provider"
          },
          "iconifyApiEndpoint": {
            "title": "Iconify API Endpoint URL",
            "description": "Define a custom Iconify API endpoint URL. Useful if you want to use a self-hosted Iconify API. Learn more: https://iconify.design/docs/api.",
            "tags": [
              "@studioIcon material-symbols:api"
            ],
            "id": "#appConfig/icon/iconifyApiEndpoint",
            "default": "https://api.iconify.design",
            "type": "string"
          },
          "fallbackToApi": {
            "title": "Fallback to Iconify API",
            "description": "Fallback to Iconify API if server provider fails to found the collection.",
            "tags": [
              "@studioIcon material-symbols:public"
            ],
            "enum": [
              true,
              false,
              "server-only",
              "client-only"
            ],
            "type": "boolean | \"server-only\" | \"client-only\"",
            "id": "#appConfig/icon/fallbackToApi",
            "default": true
          },
          "localApiEndpoint": {
            "title": "Local API Endpoint Path",
            "description": "Define a custom path for the local API endpoint.",
            "tags": [
              "@studioIcon material-symbols:api"
            ],
            "id": "#appConfig/icon/localApiEndpoint",
            "default": "/api/_nuxt_icon",
            "type": "string"
          },
          "fetchTimeout": {
            "title": "Fetch Timeout",
            "description": "Set the timeout for fetching icons.",
            "tags": [
              "@studioIcon material-symbols:timer"
            ],
            "id": "#appConfig/icon/fetchTimeout",
            "default": 1500,
            "type": "number"
          },
          "customize": {
            "title": "Customize callback",
            "description": "Customize icon content (replace stroke-width, colors, etc...).",
            "tags": [
              "@studioIcon material-symbols:edit"
            ],
            "type": "IconifyIconCustomizeCallback",
            "id": "#appConfig/icon/customize"
          }
        },
        "type": "object",
        "default": {
          "size": {},
          "class": "",
          "attrs": {
            "aria-hidden": true
          },
          "mode": "css",
          "aliases": {},
          "cssSelectorPrefix": "i-",
          "cssLayer": {},
          "cssWherePseudo": true,
          "collections": null,
          "customCollections": null,
          "iconifyApiEndpoint": "https://api.iconify.design",
          "fallbackToApi": true,
          "localApiEndpoint": "/api/_nuxt_icon",
          "fetchTimeout": 1500
        }
      }
    },
    "type": "object",
    "default": {
      "icon": {
        "size": {},
        "class": "",
        "attrs": {
          "aria-hidden": true
        },
        "mode": "css",
        "aliases": {},
        "cssSelectorPrefix": "i-",
        "cssLayer": {},
        "cssWherePseudo": true,
        "collections": null,
        "customCollections": null,
        "iconifyApiEndpoint": "https://api.iconify.design",
        "fallbackToApi": true,
        "localApiEndpoint": "/api/_nuxt_icon",
        "fetchTimeout": 1500
      }
    }
  },
  "default": {
    "icon": {
      "size": {},
      "class": "",
      "attrs": {
        "aria-hidden": true
      },
      "mode": "css",
      "aliases": {},
      "cssSelectorPrefix": "i-",
      "cssLayer": {},
      "cssWherePseudo": true,
      "collections": null,
      "customCollections": null,
      "iconifyApiEndpoint": "https://api.iconify.design",
      "fallbackToApi": true,
      "localApiEndpoint": "/api/_nuxt_icon",
      "fetchTimeout": 1500
    }
  }
}