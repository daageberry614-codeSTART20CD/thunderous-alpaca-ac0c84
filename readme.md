# EarnHub Auth Bridge

Copy `src/auth.js` and `src/auth-guard.js` into your existing Vite project's `src/` folder.

After Create Account:
```js
import {createDemoAccount} from "./auth";
createDemoAccount({email, displayName, password});
window.location.href="/dashboard";
```

After Login:
```js
import {loginDemoAccount} from "./auth";
loginDemoAccount({email, password});
window.location.href="/dashboard";
```

For the dashboard:
```js
import {requireLogin} from "./auth";
const user=requireLogin();
```

This is a DEMO/local authentication bridge. It uses browser localStorage and is NOT suitable for real-money authentication or real withdrawals. Real production authentication, balances and withdrawals must be server-side.
