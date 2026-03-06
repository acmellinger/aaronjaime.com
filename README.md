# My Personal Landing Page

A personal landing page with links to email (secured by Cloudflare Turnstile and a custom backend service), LinkedIn, etc.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## Deploying

The code should auto deploy any changes to the `main` branch via Github Actions.

## Turnstile Local Testing

The email reveal flow needs `SITEKEY`, `URL`, and `MYSITE` from `.env`.

For local UI testing without calling Turnstile or your backend, set:

```env
PUBLIC_TURNSTILE_LOCAL_BYPASS=true
PUBLIC_TEST_EMAIL="you@example.com"
```

Notes:

- `PUBLIC_TURNSTILE_LOCAL_BYPASS` is only honored in `astro dev`.
- Production builds still require a valid Turnstile flow and backend validation.
