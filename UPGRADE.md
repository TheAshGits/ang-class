# Upgrade summary: Angular 10 → 15 → 18

This project was updated to fix security vulnerabilities and modernize the stack.

## Latest update (Angular 15 → 18)

- **Angular**: 15 → 18 (addresses high-severity CVEs: XSS, XSRF, i18n XSS; Angular 15 had no fix available).
- **Bootstrap**: 4 → 5.3; templates updated for Bootstrap 5 (`form-group` → `mb-3` + `form-label`, `btn-default` → `btn-secondary`, `mr-auto` → `me-auto`, `data-toggle` → `data-bs-toggle`, `btn-block` → `w-100`).
- **ng-bootstrap**: 12 → 17 (Angular 18 compatible); added peer dependency `@popperjs/core`.
- **FontAwesome**: `@fortawesome/angular-fontawesome` 0.11 → 0.15 (Angular 18).
- **Cookies**: `ngx-cookie` replaced with `ngx-cookie-service` (Angular 18 compatible); `AuthService` updated to use `get`/`set`/`delete` with JSON for user object.
- **Styles**: Bootstrap SCSS import updated (`~bootstrap/...` → `bootstrap/...`); `stylePreprocessorOptions.includePaths` set in `angular.json` so `node_modules` is included.
- **Zone.js**: 0.12 → 0.14; TypeScript 4.8 → 5.4; ESLint/TypeScript parser versions updated for Angular 18.

## Earlier (Angular 10 → 15)

- **Angular**: 10 → 15 (removed deprecated `@angular/http`; app already used `HttpClient`).
- **Dependencies**: RxJS 6 → 7, Zone.js and Bootstrap updated; FontAwesome updated to v6 API; TSLint/Protractor/codelyzer removed.
- **Config**: `angular.json` updated; lint uses ESLint; e2e project removed.
- **Polyfills**: Build uses `zone.js` directly; `src/polyfills.ts` is no longer used.
- **Tests**: `async` → `waitForAsync` in specs; Karma coverage uses `karma-coverage`.
- **Linting**: TSLint removed; ESLint + `@angular-eslint` added (`.eslintrc.json`).

## What you need to do

1. **Install dependencies**
   ```bash
   rm -rf node_modules package-lock.json
   npm install --legacy-peer-deps
   ```

2. **Check for vulnerabilities**
   ```bash
   npm audit
   npm audit fix   # safe fixes only; avoid --force unless upgrading to Angular 21
   ```

3. **Run the app**
   ```bash
   npm start
   ```

4. **Run tests**
   ```bash
   npm test
   ```
   For CI/headless (no browser window): `npm run test:ci`

5. **Run lint**
   ```bash
   npm run lint
   ```

## Notes

- **E2E**: The old Protractor e2e project was removed (Protractor is deprecated). For e2e tests, consider [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/).
- **Remaining vulnerabilities**: `npm audit` may still report issues in Angular 18 and in dev/build tooling (webpack, esbuild, tar, etc.). Full resolution often requires moving to Angular 19+ or 21+ (`npm audit fix --force` is a breaking change). For production, ensure you do not expose the dev server and use up-to-date Node LTS.
- **Further upgrades**: To move to Angular 19+, use the official [Angular Update Guide](https://update.angular.io/).
