# Turso Database Setup

## Issue: HTTP 400 Error with LibSQL

The error you're seeing is caused by using placeholder authentication tokens in the `.env` file:

```
ASTRO_DB_APP_TOKEN=your-actual-turso-auth-token-here
CMS_LIBSQL_AUTH_TOKEN=your-actual-turso-auth-token-here
```

## Solution

### 1. Get Your Turso Authentication Token

If you have access to the Turso database, you need to:

1. **Via Turso CLI:**
   ```bash
   # If you have the Turso CLI installed
   turso auth token
   ```

2. **Via Turso Dashboard:**
   - Go to https://app.turso.tech/
   - Select your database: `helltop-anoraktrend`
   - Navigate to the "Tokens" or "Authentication" section
   - Generate a new API token

3. **Follow the official tutorial:**
   For detailed setup instructions, see the official guide: [Add Comments to Your Astro Blog with AstroDB and Turso](https://turso.tech/blog/add-comments-to-your-astro-blog-with-astrodb-and-turso)

### 2. Update Environment Variables

Replace the placeholder values in your `.env` file:

```bash
# Replace this:
ASTRO_DB_APP_TOKEN=your-actual-turso-auth-token-here
CMS_LIBSQL_AUTH_TOKEN=your-actual-turso-auth-token-here

# With your actual token:
ASTRO_DB_APP_TOKEN=your-actual-turso-auth-token-here
CMS_LIBSQL_AUTH_TOKEN=your-actual-turso-auth-token-here
```

### 3. Alternative: Use Local Database

If you don't have access to the Turso database, you can switch to a local database:

1. **Install SQLite locally:**
   ```bash
   npm install sqlite3
   ```

2. **Update your `.env` file:**
   ```bash
   # Comment out or remove the remote database settings
   # ASTRO_DB_REMOTE_URL=libsql://helltop-anoraktrend.aws-us-west-2.turso.io
   # ASTRO_DB_APP_TOKEN=your-actual-turso-auth-token-here
   
   # Use local database instead
   ASTRO_DB_URL=file:./db/local.db
   ```

3. **Update `astro.config.mjs`:**
   ```javascript
   // Remove or comment out the db() integration if using local SQLite
   integrations: [svelte(), icon(), mdx(), alpinejs()],
   ```

### 4. Database Schema

The current database schema expects a `Comment` table with these fields:
- `id` (number, primary key)
- `author` (text)
- `body` (text) 
- `postId` (text)
- `publishedAt` (date, default: NOW)

## Testing

After updating the authentication token:

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Visit a blog post page that uses the Comments component
3. The HTTP 400 error should be resolved

## Netlify Deployment

For production deployment on Netlify, you must set environment variables in the Netlify dashboard:

1. **Go to Netlify Dashboard:**
   - Navigate to your site settings
   - Go to "Build & deploy" → "Environment"

2. **Add Environment Variables:**
   ```
   ASTRO_DB_REMOTE_URL=libsql://helltop-anoraktrend.aws-us-west-2.turso.io
   ASTRO_DB_APP_TOKEN=your-actual-turso-auth-token-here
   CMS_LIBSQL_URL=libsql://helltop-anoraktrend.aws-us-west-2.turso.io
   CMS_LIBSQL_AUTH_TOKEN=your-actual-turso-auth-token-here
   ```

3. **Functions Configuration:**
   - The `netlify.toml` file has been updated to properly handle AstroDB functions
   - Functions directory is set to `dist/functions`
   - Required dependencies are properly configured

4. **Trigger a New Deploy:**
   - Push a change to your repository, or
   - Trigger a manual deploy from the Netlify dashboard

5. **Verify in Production:**
   - Visit your deployed site
   - Check the browser console for any database connection errors
   - The Comments component should work without HTTP 400 errors

## Alternative Solution: Graceful Error Handling

If you cannot access the Turso database, the Comments component has been updated with graceful error handling:

- Database connection failures are caught and logged as warnings (you'll see "Database connection failed, using empty comments list" in the console)
- The component displays an empty comments list instead of crashing
- Form submissions are also protected with error handling
- The site continues to function normally even without database access

**Expected Behavior:** When using placeholder tokens, you'll see warning messages in the console like:
```
Database connection failed, using empty comments list: LibsqlError: SERVER_ERROR: Server returned HTTP status 400
```

This is normal and expected - the site will still work perfectly, just without persistent comment storage.

This allows the site to work locally while still supporting the full database functionality when proper credentials are available.

## Troubleshooting

- **Still getting HTTP 400?** Double-check that your token is correct and hasn't expired
- **Database connection issues?** Verify the database URL is correct
- **Need help?** Contact the project maintainer for the correct Turso credentials