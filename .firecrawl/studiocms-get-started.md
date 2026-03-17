[Skip to content](https://docs.studiocms.dev/en/start-here/getting-started/#_top)

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

- [Overview](https://docs.studiocms.dev/en/start-here/getting-started/#_top)
- [Let’s get started](https://docs.studiocms.dev/en/start-here/getting-started/#lets-get-started)
- [Prepare your database](https://docs.studiocms.dev/en/start-here/getting-started/#prepare-your-database)
- [Creating a StudioCMS project](https://docs.studiocms.dev/en/start-here/getting-started/#creating-a-studiocms-project)
  - [Configure StudioCMS Database dialect](https://docs.studiocms.dev/en/start-here/getting-started/#configure-studiocms-database-dialect-)
    - [Ensure database client packages are installed](https://docs.studiocms.dev/en/start-here/getting-started/#ensure-database-client-packages-are-installed)
  - [Configure StudioCMS rendering](https://docs.studiocms.dev/en/start-here/getting-started/#configure-studiocms-rendering-)
  - [Configure authentication](https://docs.studiocms.dev/en/start-here/getting-started/#configure-authentication)
    - [Optional: Configure oAuth authentication](https://docs.studiocms.dev/en/start-here/getting-started/#optional-configure-oauth-authentication-)
  - [Configure Storage API Manager (optional)](https://docs.studiocms.dev/en/start-here/getting-started/#configure-storage-api-manager-optional-)
    - [Example: Configure S3 Storage Manager](https://docs.studiocms.dev/en/start-here/getting-started/#example-configure-s3-storage-manager)
  - [Configure your package.json scripts](https://docs.studiocms.dev/en/start-here/getting-started/#configure-your-packagejson-scripts)
- [Running your StudioCMS project](https://docs.studiocms.dev/en/start-here/getting-started/#running-your-studiocms-project)
  - [First time Setup (or during updates if the tables schema is updated)](https://docs.studiocms.dev/en/start-here/getting-started/#first-time-setup-or-during-updates-if-the-tables-schema-is-updated)
  - [Running in Astro Development mode locally](https://docs.studiocms.dev/en/start-here/getting-started/#running-in-astro-development-mode-locally)
  - [Adding a frontend to your StudioCMS project](https://docs.studiocms.dev/en/start-here/getting-started/#adding-a-frontend-to-your-studiocms-project)
    - [Setup a blog](https://docs.studiocms.dev/en/start-here/getting-started/#setup-a-blog)
    - [Building a custom frontend](https://docs.studiocms.dev/en/start-here/getting-started/#building-a-custom-frontend)
  - [Building and deploying your StudioCMS project](https://docs.studiocms.dev/en/start-here/getting-started/#building-and-deploying-your-studiocms-project)
- [Next steps](https://docs.studiocms.dev/en/start-here/getting-started/#next-steps)

## On this page

- [Overview](https://docs.studiocms.dev/en/start-here/getting-started/#_top)
- [Let’s get started](https://docs.studiocms.dev/en/start-here/getting-started/#lets-get-started)
- [Prepare your database](https://docs.studiocms.dev/en/start-here/getting-started/#prepare-your-database)
- [Creating a StudioCMS project](https://docs.studiocms.dev/en/start-here/getting-started/#creating-a-studiocms-project)
  - [Configure StudioCMS Database dialect](https://docs.studiocms.dev/en/start-here/getting-started/#configure-studiocms-database-dialect-)
    - [Ensure database client packages are installed](https://docs.studiocms.dev/en/start-here/getting-started/#ensure-database-client-packages-are-installed)
  - [Configure StudioCMS rendering](https://docs.studiocms.dev/en/start-here/getting-started/#configure-studiocms-rendering-)
  - [Configure authentication](https://docs.studiocms.dev/en/start-here/getting-started/#configure-authentication)
    - [Optional: Configure oAuth authentication](https://docs.studiocms.dev/en/start-here/getting-started/#optional-configure-oauth-authentication-)
  - [Configure Storage API Manager (optional)](https://docs.studiocms.dev/en/start-here/getting-started/#configure-storage-api-manager-optional-)
    - [Example: Configure S3 Storage Manager](https://docs.studiocms.dev/en/start-here/getting-started/#example-configure-s3-storage-manager)
  - [Configure your package.json scripts](https://docs.studiocms.dev/en/start-here/getting-started/#configure-your-packagejson-scripts)
- [Running your StudioCMS project](https://docs.studiocms.dev/en/start-here/getting-started/#running-your-studiocms-project)
  - [First time Setup (or during updates if the tables schema is updated)](https://docs.studiocms.dev/en/start-here/getting-started/#first-time-setup-or-during-updates-if-the-tables-schema-is-updated)
  - [Running in Astro Development mode locally](https://docs.studiocms.dev/en/start-here/getting-started/#running-in-astro-development-mode-locally)
  - [Adding a frontend to your StudioCMS project](https://docs.studiocms.dev/en/start-here/getting-started/#adding-a-frontend-to-your-studiocms-project)
    - [Setup a blog](https://docs.studiocms.dev/en/start-here/getting-started/#setup-a-blog)
    - [Building a custom frontend](https://docs.studiocms.dev/en/start-here/getting-started/#building-a-custom-frontend)
  - [Building and deploying your StudioCMS project](https://docs.studiocms.dev/en/start-here/getting-started/#building-and-deploying-your-studiocms-project)
- [Next steps](https://docs.studiocms.dev/en/start-here/getting-started/#next-steps)

### Power your **StudioCMS** site with Hostinger

High-performance VPS•Perfect for CMS hosting

[Get started with **Hostinger VPS**](https://www.hostinger.com/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=STUDIOCMS&referral_id=019b8cb3-2aeb-7238-beed-5344a0189b55)

# Getting Started

[Upgrading StudioCMS to Latest](https://docs.studiocms.dev/en/guides/upgrade/latest/) Looking to Upgrade to the latest version? Look here!

## Let’s get started

[Section titled “Let’s get started”](https://docs.studiocms.dev/en/start-here/getting-started/#lets-get-started)

To start using StudioCMS, you’ll need:

- A version of [Node.js supported by Astro^](https://docs.astro.build/en/install-and-setup/#prerequisites) (Bun and Deno are not supported)
- An Astro project
- A database connection (libSQL, MySQL, or PostgreSQL)
- The StudioCMS integration

## Prepare your database

[Section titled “Prepare your database”](https://docs.studiocms.dev/en/start-here/getting-started/#prepare-your-database)

- [Turso (libSQL)](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-48)
- [libSQL](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-49)
- [MySQL](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-50)
- [PostgreSQL](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-51)

StudioCMS Coupon

Use the code `STUDIOCMS10` to get 10% off for 12 months of Turso.

1. Install the [Turso CLI ^](https://docs.turso.tech/cli/installation)

2. [Login or signup ^](https://docs.turso.tech/cli/authentication) to Turso.

3. Create a new database.

Terminal window

```
turso db create studiocms
```

4. Get and Set `CMS_LIBSQL_URL`

4a. Run the `show` command to see information about the newly created database:

Terminal window

```
turso db show studiocms
```













4b. Copy the URL value and set it as the value for `CMS_LIBSQL_URL`.

.env

```
CMS_LIBSQL_URL=libsql://studiocms-yourname.turso.io
```

5. Get and Set `CMS_LIBSQL_AUTH_TOKEN`

5a. Create a new token to authenticate requests to the database:

Terminal window

```
turso db tokens create studiocms
```













5b. Copy the output of the command and set it as the value for `CMS_LIBSQL_AUTH_TOKEN`.

.env

```
CMS_LIBSQL_AUTH_TOKEN=eyJhbGciOiJF...3ahJpTkKDw
```


Make sure you have a libSQL database setup and running. You can use a local installation, a [Docker container](https://docs.studiocms.dev/en/guides/database/sqld-server/), or a managed database service such as [Turso^](https://tur.so/studiocms).

.env

```
CMS_LIBSQL_URL=libsql://your-database.turso.io

CMS_LIBSQL_AUTH_TOKEN=<your-auth-token> (optional)
```

For more information about the required environment variables see, [Required environment variables for `libSQL`](https://docs.studiocms.dev/en/start-here/environment-variables/#libsql)

Make sure you have a MySQL database setup and running. You can use a local installation, a Docker container, or a managed database service.

.env

```
CMS_MYSQL_DATABASE=<your-database-name>

CMS_MYSQL_USER=<your-database-user>

CMS_MYSQL_PASSWORD=<your-database-password>

CMS_MYSQL_HOST=<your-database-host>

CMS_MYSQL_PORT=<your-database-port>
```

For more information about the required environment variables see, [Required environment variables for `MySQL`](https://docs.studiocms.dev/en/start-here/environment-variables/#mysql)

Make sure you have a PostgreSQL database setup and running. You can use a local installation, a Docker container, or a managed database service.

.env

```
CMS_PG_DATABASE=<your-database-name>

CMS_PG_USER=<your-database-user>

CMS_PG_PASSWORD=<your-database-password>

CMS_PG_HOST=<your-database-host>

CMS_PG_PORT=<your-database-port>
```

For more information about the required environment variables see, [Required environment variables for `PostgreSQL`](https://docs.studiocms.dev/en/start-here/environment-variables/#postgresql)

You are now ready to move on to creating your StudioCMS project!

## Creating a StudioCMS project

[Section titled “Creating a StudioCMS project”](https://docs.studiocms.dev/en/start-here/getting-started/#creating-a-studiocms-project)

- [StudioCMS CLI](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-61)
- [Astro Method](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-62)
- [Manual Method](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-63)

1. Creating a StudioCMS Project using the create command

To create a new Astro project with StudioCMS using one of our pre-made templates, simply run the following command in your terminal:




   - [npm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-15)
   - [pnpm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-16)
   - [yarn](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-17)

Terminal window

```
npm create studiocms@latest
```

Terminal window

```
pnpm create studiocms@latest
```

Terminal window

```
yarn create studiocms
```

After running the command, you’ll be prompted to answer a few questions about your project. Once completed, the CLI will create a new Astro project with StudioCMS in the specified directory.

Afterward, you will be prompted to follow the next steps, which includes ensuring your environment variables are set correctly and running the project to complete the setup.

2. After running the CLI, make sure that your `astro.config.mjs` fle is correctly configured:

astro.config.mjs

```
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import studioCMS from 'studiocms';




export default defineConfig({

       site: 'https://demo.studiocms.dev/',

       output: 'server',

       adapter: node({ mode: "standalone" }),

       integrations: [\
\
           studioCMS(),\
\
       ],

});
```


1. Creating a new Astro project

To create a new Astro project, simply run the following command in your terminal:




   - [npm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-18)
   - [pnpm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-19)
   - [yarn](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-20)

Terminal window

```
npm create astro@latest
```

Terminal window

```
pnpm create astro@latest
```

Terminal window

```
yarn create astro
```

After running the command, you’ll be prompted to answer a few questions about your project. Once completed, the CLI will create a new Astro project in the specified directory.

You should see a “Liftoff confirmed. Explore your project!” message followed by some recommended next steps.

`cd` into your new project directory to begin using Astro.

Terminal window

```
cd my-project
```

If you skipped the npm install step during the CLI wizard, then be sure to install your dependencies before continuing.

2. To add the StudioCMS integration to your project, you’ll need to install the StudioCMS package and it’s dependencies:




   - [npm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-21)
   - [pnpm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-22)
   - [yarn](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-23)

Terminal window

```
npx astro add node studiocms
```

Terminal window

```
pnpm astro add node studiocms
```

Terminal window

```
yarn astro add node studiocms
```

3. After installing the package, make sure that your `astro.config.mjs` file is correctly importing and calling the integration:

astro.config.mjs

```
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import studioCMS from 'studiocms';




export default defineConfig({

       site: 'https://demo.studiocms.dev/',

       output: 'server',

       adapter: node({ mode: "standalone" }),

       integrations: [\
\
           studioCMS(),\
\
       ],

});
```


1. Creating a new Astro project

To create a new Astro project, simply run the following command in your terminal:




   - [npm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-24)
   - [pnpm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-25)
   - [yarn](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-26)

Terminal window

```
npm create astro@latest
```

Terminal window

```
pnpm create astro@latest
```

Terminal window

```
yarn create astro
```

After running the command, you’ll be prompted to answer a few questions about your project. Once completed, the CLI will create a new Astro project in the specified directory.

You should see a “Liftoff confirmed. Explore your project!” message followed by some recommended next steps.

`cd` into your new project directory to begin using Astro.

Terminal window

```
cd my-project
```

If you skipped the npm install step during the CLI wizard, then be sure to install your dependencies before continuing.

2. To add the StudioCMS integration to your project, you’ll need to install the Astro StudioCMS package and it’s dependencies:




   - [npm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-27)
   - [pnpm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-28)
   - [yarn](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-29)

Terminal window

```
npm i @astrojs/node studiocms
```

Terminal window

```
pnpm add @astrojs/node studiocms
```

Terminal window

```
yarn add @astrojs/node studiocms
```

3. Update your `astro.config.mjs` file:

astro.config.mjs

```
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import studioCMS from 'studiocms';




export default defineConfig({

       site: 'https://demo.studiocms.dev/',

       output: 'server',

       adapter: node({ mode: "standalone" }),

       integrations: [\
\
           studioCMS(),\
\
       ],

});
```


Please note that the `site` option in the `astro.config.mjs` file is required for StudioCMS to work correctly. You can set this to your site’s URL or a placeholder URL. (i.e. `https://demo.studiocms.dev/` or `http://localhost:4321/`)

Adapter Required

StudioCMS requires an [Astro Adapter^](https://docs.astro.build/en/guides/on-demand-rendering/#server-adapters) to work correctly. Make sure to set an adapter that supports SSR Routes in your `astro.config.mjs` file.

### Configure StudioCMS Database dialect Added in beta.31

[Section titled “Configure StudioCMS Database dialect ”](https://docs.studiocms.dev/en/start-here/getting-started/#configure-studiocms-database-dialect-)

If you are using a database other than `libSQL` you will need to configure the `db` option in your `studiocms.config.mjs` file to specify the correct dialect.

studiocms.config.mjs

```
export default defineStudioCMSConfig({

  db: {

    dialect: 'postgres', // 'libsql' | 'postgres' | 'mysql'

  },

})
```

#### Ensure database client packages are installed

[Section titled “Ensure database client packages are installed”](https://docs.studiocms.dev/en/start-here/getting-started/#ensure-database-client-packages-are-installed)

You will also need to install the necessary database client packages for your chosen database dialect:

- [libSQL (default)](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-58)
- [MySQL](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-59)
- [PostgreSQL](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-60)

- [npm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-30)
- [pnpm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-31)
- [yarn](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-32)

Terminal window

```
npm i @libsql/client kysely-turso
```

Terminal window

```
pnpm add @libsql/client kysely-turso
```

Terminal window

```
yarn add @libsql/client kysely-turso
```

- [npm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-33)
- [pnpm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-34)
- [yarn](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-35)

Terminal window

```
npm i mysql2
```

Terminal window

```
pnpm add mysql2
```

Terminal window

```
yarn add mysql2
```

- [npm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-36)
- [pnpm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-37)
- [yarn](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-38)

Terminal window

```
npm i pg
```

Terminal window

```
pnpm add pg
```

Terminal window

```
yarn add pg
```

### Configure StudioCMS rendering Added in beta.22

[Section titled “Configure StudioCMS rendering ”](https://docs.studiocms.dev/en/start-here/getting-started/#configure-studiocms-rendering-)

StudioCMS requires at least one of the following rendering plugins to be installed and configured within your StudioCMS project:

- [`@studiocms/html`](https://docs.studiocms.dev/en/package-catalog/studiocms-plugins/studiocms-html/) \- for HTML rendering
- [`@studiocms/md`](https://docs.studiocms.dev/en/package-catalog/studiocms-plugins/studiocms-md/) \- for Markdown rendering
- [`@studiocms/mdx`](https://docs.studiocms.dev/en/package-catalog/studiocms-plugins/studiocms-mdx/) \- for MDX rendering
- [`@studiocms/markdoc`](https://docs.studiocms.dev/en/package-catalog/studiocms-plugins/studiocms-markdoc/) \- for MarkDoc rendering
- [`@studiocms/wysiwyg`](https://docs.studiocms.dev/en/package-catalog/studiocms-plugins/studiocms-wysiwyg/) \- for WYSIWYG rendering
- Or any other community plugin that supports rendering content in StudioCMS.

Any of these plugins can be used to render content in StudioCMS. You can use one or more of these plugins in your project, depending on your needs. They can be installed and configured using the StudioCMS config file.

studiocms.config.mjs

```
import { defineStudioCMSConfig } from 'studiocms/config';

import html from '@studiocms/html';

import md from '@studiocms/md';

export default defineStudioCMSConfig({

    plugins: [\
\
        html(),\
\
        md(),\
\
    ],

});
```

For more information about the available rendering plugins see, [Package Catalog](https://docs.studiocms.dev/en/package-catalog/)

### Configure authentication

[Section titled “Configure authentication”](https://docs.studiocms.dev/en/start-here/getting-started/#configure-authentication)

StudioCMS’s built-in authentication requires at least the [Encryption Key](https://docs.studiocms.dev/en/start-here/environment-variables/#encryption-key-for-studiocms) to be set in your `.env` file.

The following environment variables are required for StudioCMS authentication:

.env

```
# encryption key for username and password authentication

CMS_ENCRYPTION_KEY="wqR+w...sRcg=="
```

You can generate a secure encryption key using the following command:

Terminal window

```
openssl rand --base64 16
```

And set the output as the value for `CMS_ENCRYPTION_KEY`.

For more information about all the available authentication environment variables see, [Environment variables](https://docs.studiocms.dev/en/start-here/environment-variables/) page.

#### Optional: Configure oAuth authentication Revised beta.23

[Section titled “Optional: Configure oAuth authentication ”](https://docs.studiocms.dev/en/start-here/getting-started/#optional-configure-oauth-authentication-)

StudioCMS supports various oAuth authentication providers, utilizing our plugin system to enable the providers you want to use. To get started, you will need to find a plugin for the provider you want to use, or create your own plugin.

For more information about the available oAuth authentication plugins see, [Package Catalog](https://docs.studiocms.dev/en/package-catalog/)

For setting up oAuth providers, they require a callback URL. The callback URL is the path where the provider will redirect the user after authentication.

##### Setting up the callback URL

[Section titled “Setting up the callback URL”](https://docs.studiocms.dev/en/start-here/getting-started/#setting-up-the-callback-url)

The callback URL should be set to one of the following paths based on your environment:

| Environment | Callback URL |
| --- | --- |
| Production | `https://your-domain.tld/studiocms_api/auth/<provider>/callback` |
| Testing & Dev | `http://localhost:4321/studiocms_api/auth/<provider>/callback` |

##### Example callback URL paths

[Section titled “Example callback URL paths”](https://docs.studiocms.dev/en/start-here/getting-started/#example-callback-url-paths)

The following paths are examples of the callback URL for each provider:

| Provider | Callback PATH |
| --- | --- |
| [GitHub](https://docs.studiocms.dev/en/package-catalog/studiocms-plugins/studiocms-github/) | `/studiocms_api/auth/github/callback` |
| [Discord](https://docs.studiocms.dev/en/package-catalog/studiocms-plugins/studiocms-discord/) | `/studiocms_api/auth/discord/callback` |
| [Google](https://docs.studiocms.dev/en/package-catalog/studiocms-plugins/studiocms-google/) | `/studiocms_api/auth/google/callback` |
| [Auth0](https://docs.studiocms.dev/en/package-catalog/studiocms-plugins/studiocms-auth0/) | `/studiocms_api/auth/auth0/callback` |

### Configure Storage API Manager (optional) Added in v0.1.0

[Section titled “Configure Storage API Manager (optional) ”](https://docs.studiocms.dev/en/start-here/getting-started/#configure-storage-api-manager-optional-)

StudioCMS supports using different Storage API Managers to handle file and image storage. By default, StudioCMS uses a built-in no-op storage manager that does not store any files or images.

To configure a different Storage API Manager, you will need to install the appropriate plugin and configure it in your `studiocms.config.mjs` file.

For more information about the Storage API see, [Storage API Docs](https://docs.studiocms.dev/en/storage-api/)

For available storage manager plugins, see the [Package catalog](https://docs.studiocms.dev/en/package-catalog#storage-managers).

#### Example: Configure S3 Storage Manager

[Section titled “Example: Configure S3 Storage Manager”](https://docs.studiocms.dev/en/start-here/getting-started/#example-configure-s3-storage-manager)

1. Install the `@studiocms/s3-storage` plugin:




   - [npm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-39)
   - [pnpm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-40)
   - [yarn](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-41)

Terminal window

```
npm i @studiocms/s3-storage
```

Terminal window

```
pnpm add @studiocms/s3-storage
```

Terminal window

```
yarn add @studiocms/s3-storage
```

2. Update your `studiocms.config.mjs` file to use the S3 Storage Manager:

studiocms.config.mjs

```
import { defineStudioCMSConfig } from 'studiocms/config';

import s3Storage from '@studiocms/s3-storage';




export default defineStudioCMSConfig({

      storageManager: s3Storage(),

});
```

3. Set the required environment variables for the S3 Storage Manager in your `.env` file:


Supported S3 Providers





StudioCMS’s S3 Storage Manager is built using the `@aws-sdk/client-s3` package, which supports any S3-compatible storage provider, including AWS S3, DigitalOcean Spaces, MinIO, and others.




.env

```
CMS_S3_PROVIDER=ExampleS3Provider

CMS_S3_ACCESS_KEY_ID=<your-access-key-id>

CMS_S3_SECRET_ACCESS_KEY=<your-secret-access-key>

CMS_S3_BUCKET_NAME=<your-bucket-name>

# CMS_S3_ENDPOINT= # Optional: Specify a custom endpoint if required by your provider

# CMS_S3_REGION= # Optional: Specify the region if required by your provider

# CMS_S3_FORCE_PATH_STYLE= # Optional: Use path-style URLs for S3 objects

# CMS_S3_PUBLIC_ENDPOINT= # Optional: Custom public endpoint for accessing files
```













For more information about the Environment variables with the S3 Storage Manager see, [S3 Storage: Environment Variables](https://docs.studiocms.dev/en/package-catalog/storage-managers/s3-storage/#environment-variable-examples)


### Configure your `package.json` scripts

[Section titled “Configure your package.json scripts”](https://docs.studiocms.dev/en/start-here/getting-started/#configure-your-packagejson-scripts)

Setup your `package.json` scripts to include the following StudioCMS commands for easier use:

package.json

```
{

    "name": "my-studiocms-project",

    "scripts": {

        "dev": "astro dev",

        "build": "astro check & astro build",

        "astro": "astro",

        "migrate": "studiocms migrate",

        "studiocms": "studiocms",

    }

}
```

## Running your StudioCMS project

[Section titled “Running your StudioCMS project”](https://docs.studiocms.dev/en/start-here/getting-started/#running-your-studiocms-project)

Thanks to the power of Astro running StudioCMS is as easy as running the dev command for local preview, or building and deploying to your server, for the basics of how to use it locally without building here is what you need to do.

### First time Setup (or during updates if the tables schema is updated)

[Section titled “First time Setup (or during updates if the tables schema is updated)”](https://docs.studiocms.dev/en/start-here/getting-started/#first-time-setup-or-during-updates-if-the-tables-schema-is-updated)

To start your Astro project, run the following commands in your terminal:

- [npm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-42)
- [pnpm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-43)
- [yarn](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-44)

Terminal window

```
npm run studiocms migrate --latest
```

Terminal window

```
pnpm run studiocms migrate --latest
```

Terminal window

```
yarn run studiocms migrate --latest
```

- [npm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-45)
- [pnpm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-46)
- [yarn](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-47)

Terminal window

```
npm run dev
```

Terminal window

```
pnpm run dev
```

Terminal window

```
yarn run dev
```

After running the commands, you should see a message indicating that your project is running at `localhost:4321`. When first setting up StudioCMS, you will prompted to finish configuring StudioCMS at `http://localhost:4321/start`

### Running in Astro Development mode locally

[Section titled “Running in Astro Development mode locally”](https://docs.studiocms.dev/en/start-here/getting-started/#running-in-astro-development-mode-locally)

To start your Astro project, run the following command in your terminal:

- [npm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-52)
- [pnpm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-53)
- [yarn](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-54)

Terminal window

```
npm run dev
```

Terminal window

```
pnpm run dev
```

Terminal window

```
yarn run dev
```

After running the command, you should see a message indicating that your project is running at `localhost:4321`. Open your browser and navigate to `http://localhost:4321` to see your Astro project in action.

You can access the StudioCMS dashboard at `http://localhost:4321/dashboard` by default to manage your content and settings.

**Congratulations!** 🥳 You now have StudioCMS installed in your Astro project.

### Adding a frontend to your StudioCMS project

[Section titled “Adding a frontend to your StudioCMS project”](https://docs.studiocms.dev/en/start-here/getting-started/#adding-a-frontend-to-your-studiocms-project)

StudioCMS is a headless Astro CMS, which means you have to provide your own frontend to display the content. If you are looking for a frontend that is already built, you can checkout our plugins in the [Package Catalog](https://docs.studiocms.dev/en/package-catalog/).

#### Setup a blog

[Section titled “Setup a blog”](https://docs.studiocms.dev/en/start-here/getting-started/#setup-a-blog)

For example if you want to build a blog using StudioCMS, you can use the [`@studiocms/blog`](https://docs.studiocms.dev/en/package-catalog/studiocms-plugins/studiocms-blog/) plugin to get started quickly without having to build everything from scratch. This plugin provides a simple blog frontend that removes the need to have any source files for your frontend pages.

To install and setup the blog plugin, run the following command in your terminal:

- [npm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-55)
- [pnpm](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-56)
- [yarn](https://docs.studiocms.dev/en/start-here/getting-started/#tab-panel-57)

Terminal window

```
npm install @studiocms/blog
```

Terminal window

```
pnpm install @studiocms/blog
```

Terminal window

```
yarn install @studiocms/blog
```

After installing the plugin, you will need to add the plugin to your `studiocms.config.mjs` file:

studiocms.config.mjs

```
import { defineStudioCMSConfig } from 'studiocms/config';

import blog from '@studiocms/blog';

export default defineStudioCMSConfig({

    dbStartPage: false,

    plugins: [\
\
        blog(),\
\
    ],

});
```

#### Building a custom frontend

[Section titled “Building a custom frontend”](https://docs.studiocms.dev/en/start-here/getting-started/#building-a-custom-frontend)

If you want to build a custom frontend for your StudioCMS project, you can use the [StudioCMS SDK](https://docs.studiocms.dev/en/how-it-works/sdk/) or [StudioCMS RestAPI](https://docs.studiocms.dev/en/how-it-works/restapi/) to fetch and a [StudioCMS Rendering plugin](https://docs.studiocms.dev/en/plugins/renderers/) to render content from StudioCMS on your custom pages.

If you want to build a custom frontend for your StudioCMS project, you can use the [StudioCMS Renderer component and SDK](https://docs.studiocms.dev/en/guides/custom-frontend/rendering/) to render the content from StudioCMS on your custom pages.

See the [Custom Frontend Guides](https://docs.studiocms.dev/en/guides/#custom-frontend-guides) for more guides and tutorials on building a custom frontend with StudioCMS.

### Building and deploying your StudioCMS project

[Section titled “Building and deploying your StudioCMS project”](https://docs.studiocms.dev/en/start-here/getting-started/#building-and-deploying-your-studiocms-project)

After running the [first time setup steps](https://docs.studiocms.dev/en/start-here/getting-started/#first-time-setup-or-during-updates-if-the-tables-schema-is-updated), you should build and deploy your StudioCMS project to your server.

By default, StudioCMS’s dashboard is available at `http://your-domain.tld/dashboard`.

This dashboard will be available for you to manage your content and settings in development mode and production mode.

It is recommended to use StudioCMS in production mode only, as the dashboard is meant to be used by the built project. (You may see some issues/errors in development mode such as a Vite dep error.)

## Next steps

[Section titled “Next steps”](https://docs.studiocms.dev/en/start-here/getting-started/#next-steps)

Check out how to set [Environment Variables](https://docs.studiocms.dev/en/start-here/environment-variables/) in StudioCMS.

Check out the [Package Catalog](https://docs.studiocms.dev/en/package-catalog/) to find and use plugins with StudioCMS.

Learn more about the StudioCMS Config options using the [StudioCMS Reference](https://docs.studiocms.dev/en/config-reference/) pages.

[Edit page](https://github.com/withstudiocms/docs/tree/main/src/content/docs/en/start-here/getting-started.mdx)

Last updated: Mar 11, 2026

[Next \\
\\
Environment Variables](https://docs.studiocms.dev/en/start-here/environment-variables/)

[Built with Starlight](https://starlight.astro.build/)