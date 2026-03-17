[Skip to content](https://docs.studiocms.dev/en/start-here/environment-variables/#_top)

[![](https://docs.studiocms.dev/_astro/logo-light.Cu9JnaJE.svg)![](https://docs.studiocms.dev/_astro/logo-dark.Y-Nr7wr1.svg) StudioCMS](https://docs.studiocms.dev/en) [Docs](https://docs.studiocms.dev/en/start-here/getting-started/)

[Main Site](https://studiocms.dev/)

Search`` `K`

[GitHub](https://github.com/withstudiocms/studiocms) [Discord](https://chat.studiocms.dev/) [YouTube](https://www.youtube.com/@StudioCMS) [Twitter / X](https://x.com/withstudiocms) [BlueSky](https://bsky.app/profile/studiocms.dev) [Open Collective](https://opencollective.com/StudioCMS) [Thanks.dev](https://thanks.dev/u/gh/withstudiocms)

Select themeDarkLightAutoSelect languageEnglishEspañolDeutschFrançais简体中文한국어

- [Learn](https://docs.studiocms.dev/en/start-here/getting-started/)
- [Guides & Tutorials](https://docs.studiocms.dev/en/guides/)
- [Ecosystem & Plugins](https://docs.studiocms.dev/en/ecosystem/)
- [References](https://docs.studiocms.dev/en/config-reference/)

- Start Here

  - [Getting Started](https://docs.studiocms.dev/en/start-here/getting-started/)
  - [Environment Variables](https://docs.studiocms.dev/en/start-here/environment-variables/)
  - [StudioCMS Config](https://docs.studiocms.dev/en/start-here/configuration/)
  - [Why StudioCMS?](https://docs.studiocms.dev/en/start-here/why-studiocms/)
  - [Gallery](https://docs.studiocms.dev/en/start-here/gallery/)

- Understanding StudioCMS

  - [The Integration](https://docs.studiocms.dev/en/how-it-works/)
  - [The CLI](https://docs.studiocms.dev/en/how-it-works/cli/)
  - [The SDK](https://docs.studiocms.dev/en/how-it-works/sdk/)
  - [The REST API](https://docs.studiocms.dev/en/how-it-works/restapi/)
  - [Effect](https://docs.studiocms.dev/en/how-it-works/effect/)

- Features

  - Plugins

    - [The Basics](https://docs.studiocms.dev/en/plugins/)
    - [Making Plugins Useful](https://docs.studiocms.dev/en/plugins/extended/)
    - [Renderer Plugins](https://docs.studiocms.dev/en/plugins/renderers/)

  - Storage API

    - [Overview](https://docs.studiocms.dev/en/storage-api/)
    - [JavaScript Helpers](https://docs.studiocms.dev/en/storage-api/javascript-helpers/)
    - [API Endpoint](https://docs.studiocms.dev/en/storage-api/api-endpoint/)

[GitHub](https://github.com/withstudiocms/studiocms) [Discord](https://chat.studiocms.dev/) [YouTube](https://www.youtube.com/@StudioCMS) [Twitter / X](https://x.com/withstudiocms) [BlueSky](https://bsky.app/profile/studiocms.dev) [Open Collective](https://opencollective.com/StudioCMS) [Thanks.dev](https://thanks.dev/u/gh/withstudiocms)

Select themeDarkLightAutoSelect languageEnglishEspañolDeutschFrançais简体中文한국어

Sponsored by [Turso Tech](https://tur.so/studiocms) [Skip2 Networks](https://www.skip2.net/?utm_source=studiocms)

On this page

- [Overview](https://docs.studiocms.dev/en/start-here/environment-variables/#_top)
- [Required Environment Variables](https://docs.studiocms.dev/en/start-here/environment-variables/#required-environment-variables)
  - [Database connection](https://docs.studiocms.dev/en/start-here/environment-variables/#database-connection)
    - [libSQL](https://docs.studiocms.dev/en/start-here/environment-variables/#libsql)
    - [MySQL](https://docs.studiocms.dev/en/start-here/environment-variables/#mysql)
    - [PostgreSQL](https://docs.studiocms.dev/en/start-here/environment-variables/#postgresql)
  - [Encryption Key for studiocms](https://docs.studiocms.dev/en/start-here/environment-variables/#encryption-key-for-studiocms)
- [Optional Environment Variables](https://docs.studiocms.dev/en/start-here/environment-variables/#optional-environment-variables)
  - [Effect Log Level](https://docs.studiocms.dev/en/start-here/environment-variables/#effect-log-level)

## On this page

- [Overview](https://docs.studiocms.dev/en/start-here/environment-variables/#_top)
- [Required Environment Variables](https://docs.studiocms.dev/en/start-here/environment-variables/#required-environment-variables)
  - [Database connection](https://docs.studiocms.dev/en/start-here/environment-variables/#database-connection)
    - [libSQL](https://docs.studiocms.dev/en/start-here/environment-variables/#libsql)
    - [MySQL](https://docs.studiocms.dev/en/start-here/environment-variables/#mysql)
    - [PostgreSQL](https://docs.studiocms.dev/en/start-here/environment-variables/#postgresql)
  - [Encryption Key for studiocms](https://docs.studiocms.dev/en/start-here/environment-variables/#encryption-key-for-studiocms)
- [Optional Environment Variables](https://docs.studiocms.dev/en/start-here/environment-variables/#optional-environment-variables)
  - [Effect Log Level](https://docs.studiocms.dev/en/start-here/environment-variables/#effect-log-level)

### Power your **StudioCMS** site with Hostinger

High-performance VPS•Perfect for CMS hosting

[Get started with **Hostinger VPS**](https://www.hostinger.com/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=STUDIOCMS&referral_id=019b8cb3-2aeb-7238-beed-5344a0189b55)

# Environment Variables

For StudioCMS to work correctly, you must set up the correct environment variables. These variables are essential for establishing a secure connection to Astro DB and authenticating with the StudioCMS API. Without correctly configuring these environment variables, the application will not function as intended.

You can create a `.env` file in the root directory of your project and add the required environment variables. The `.env` file is a text file that contains key-value pairs of environment variables. The environment variables are read by the application at runtime.

For future reference on how to work with environment variables within Astro you can checkout [Environment Variables^](https://docs.astro.build/guides/environment-variables) from the Astro documentation.

## Required Environment Variables

[Section titled “Required Environment Variables”](https://docs.studiocms.dev/en/start-here/environment-variables/#required-environment-variables)

In order to use StudioCMS, there are a few required environment variables that you must set up in your `.env` file.

### Database connection

[Section titled “Database connection”](https://docs.studiocms.dev/en/start-here/environment-variables/#database-connection)

Depending on the database you are using with StudioCMS, you will need to set up the appropriate environment variables for your database connection.

#### `libSQL`

[Section titled “libSQL”](https://docs.studiocms.dev/en/start-here/environment-variables/#libsql)

.env

```
CMS_LIBSQL_URL=libsql://your-database.turso.io

# CMS_LIBSQL_URL=file:./path/to/your/database.db

CMS_LIBSQL_AUTH_TOKEN=<your-auth-token> (optional)

# CMS_LIBSQL_ENCRYPTION_KEY=<string> (optional)

# CMS_LIBSQL_SYNC_INTERVAL=<number> (optional)

# CMS_LIBSQL_SYNC_URL=<string> (optional)

# CMS_LIBSQL_READ_YOUR_WRITES=true/false (optional)

# CMS_LIBSQL_OFFLINE_MODE=true/false (optional)

# CMS_LIBSQL_TLS=true/false (optional) (helps to set false when working with local sqld instances)

# CMS_LIBSQL_CONCURRENCY=<number> (optional)
```

#### `MySQL`

[Section titled “MySQL”](https://docs.studiocms.dev/en/start-here/environment-variables/#mysql)

.env

```
CMS_MYSQL_DATABASE=<your-database-name>

CMS_MYSQL_USER=<your-database-user>

CMS_MYSQL_PASSWORD=<your-database-password>

CMS_MYSQL_HOST=<your-database-host>

CMS_MYSQL_PORT=<your-database-port>

# CMS_MYSQL_CONNECTION_LIMIT=<number> (optional)
```

#### `PostgreSQL`

[Section titled “PostgreSQL”](https://docs.studiocms.dev/en/start-here/environment-variables/#postgresql)

.env

```
CMS_PG_DATABASE=<your-database-name>

CMS_PG_USER=<your-database-user>

CMS_PG_PASSWORD=<your-database-password>

CMS_PG_HOST=<your-database-host>

CMS_PG_PORT=<your-database-port>

# CMS_PG_CONNECTION_LIMIT=<number> (optional)
```

### Encryption Key for `studiocms`

[Section titled “Encryption Key for studiocms”](https://docs.studiocms.dev/en/start-here/environment-variables/#encryption-key-for-studiocms)

`CMS_ENCRYPTION_KEY` \- A secure encryption key for encrypting sensitive data

.env

```
CMS_ENCRYPTION_KEY="wqR+w...sRcg=="
```

Use OpenSSL

You can generate a secure encryption key using the following command:

Terminal window

```
openssl rand --base64 16
```

## Optional Environment Variables

[Section titled “Optional Environment Variables”](https://docs.studiocms.dev/en/start-here/environment-variables/#optional-environment-variables)

These environment variables are optional but can be configured to customize the behavior of StudioCMS.

### Effect Log Level

[Section titled “Effect Log Level”](https://docs.studiocms.dev/en/start-here/environment-variables/#effect-log-level)

`STUDIOCMS_LOGLEVEL` \- Set the log level for all Effect based operations in StudioCMS.

- Available log levels: `All` \| `Fatal` \| `Error` \| `Warning` \| `Info` \| `Debug` \| `Trace` \| `None`
- Default: `Info`

.env

```
STUDIOCMS_LOGLEVEL="Info"
```

[Edit page](https://github.com/withstudiocms/docs/tree/main/src/content/docs/en/start-here/environment-variables.mdx)

Last updated: Mar 11, 2026

[Previous \\
\\
Getting Started](https://docs.studiocms.dev/en/start-here/getting-started/) [Next \\
\\
StudioCMS Config](https://docs.studiocms.dev/en/start-here/configuration/)

[Built with Starlight](https://starlight.astro.build/)