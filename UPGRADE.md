# Upgrade summary: Angular 10 → 15

This project was updated to fix security vulnerabilities and modernize the stack.

## What was changed

- **Angular**: 10 → 15 (removed deprecated `@angular/http`; app already used `HttpClient`).
- **Dependencies**: RxJS 6 → 7, Zone.js and Bootstrap updated; FontAwesome updated to v6 API; TSLint/Protractor/codelyzer removed.
- **Config**: `angular.json` updated (e.g. `styleext` → `style`, removed `extractCss`, `defaultProject`; lint uses ESLint; e2e project removed).
- **Polyfills**: Build uses `zone.js` directly; `src/polyfills.ts` is no longer used.
- **Tests**: `async` → `waitForAsync` in specs; Karma coverage uses `karma-coverage` instead of istanbul.
- **Linting**: TSLint removed; ESLint + `@angular-eslint` added (`.eslintrc.json`).

## What you need to do

1. **Install dependencies**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check for vulnerabilities**
   ```bash
   npm audit
   npm audit fix   # if you want to try automatic fixes
   ```

3. **Run the app**
   ```bash
   npm start
   ```

4. **Run tests**
   ```bash
   npm test
   ```

5. **Run lint**
   ```bash
   npm run lint
   ```

## Notes

- **E2E**: The old Protractor e2e project was removed (Protractor is deprecated). For e2e tests, consider [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/).
- **ngx-cookie**: Still at 5.x. If you see peer dependency or runtime issues, consider migrating to `ngx-cookie-service` (same idea, different API).
- **Further upgrades**: To move to Angular 16+, use the official [Angular Update Guide](https://update.angular.io/).
