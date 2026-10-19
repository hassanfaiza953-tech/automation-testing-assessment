# Automation Testing Assessment

## Overview
This project contains UI automation using Playwright and API automation using Postman and Newman.

## Technologies
- JavaScript
- Playwright
- Postman
- Newman
- Node.js

## Installation
```bash
npm install
npx playwright install
```

## UI Automation

### Q1 — Locked Out User
```bash
npx playwright test tests/locked-out.spec.js --project=chromium
```

### Q2 — Standard User Purchase
```bash
npx playwright test tests/standard-user-purchase.spec.js --project=chromium
```

### Q3 — Performance Glitch User
```bash
npx playwright test tests/performance-glitch.spec.js --project=chromium
```

### Run All UI Tests Sequentially
```bash
npx playwright test tests/locked-out.spec.js tests/standard-user-purchase.spec.js tests/performance-glitch.spec.js --project=chromium --workers=1
```

### Playwright HTML Report
```bash
npx playwright show-report
```

## API Automation

Postman collection:
`Automation Testing Assessment API.postman_collection.json`

API scenarios:
- Q3: Login and capture authentication token
- Q4: Retrieve user and verify name and email
- Q5: PUT update profile and verify updatedAt
- Q6: PATCH a single field
- Q8: Validate bad requests and 4xx responses

### Run API Collection with Newman
```bash
npx newman run "Automation Testing Assessment API.postman_collection.json" -r cli,htmlextra --reporter-htmlextra-export newman-report.html
```

## Reports
- Playwright: `playwright-report/`
- Newman: `newman-report.html`

## Security
Never commit API keys, tokens, or other secret credentials.

## Notes
The API tests validate response codes and response data returned by ReqRes. Mock update endpoints may not persist changes.
