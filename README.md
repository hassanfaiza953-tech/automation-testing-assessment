# Automation Testing Assessment

## Project Overview
This project contains automated UI tests using Playwright and API tests using Postman and Newman.

## Technologies Used
- JavaScript
- Playwright
- Postman
- Newman
- ReqRes API
- HTML Test Reports

## UI Automation Test Cases
1. Verify locked-out user login error.
2. Complete a purchase using a standard user.
3. Test product sorting and checkout using a performance glitch user.

## API Automation Test Cases
1. Login and capture token.
2. Get user details.
3. Update user profile using PUT.
4. Update a single field using PATCH.
5. Validate negative scenarios for missing credentials and invalid user IDs.

## Installation
Install Node.js, then run:

```bash
npm install
npx playwright install
```

## Run Playwright Tests

```bash
npx playwright test
```

Open the Playwright HTML report:

```bash
npx playwright show-report
```

## Run Postman API Tests

Install Newman and the HTML reporter:

```bash
npm install --save-dev newman newman-reporter-htmlextra
```

Run the exported Postman collection:

```bash
npx newman run "Automation Testing Assessment API.postman_collection.json" -r cli,htmlextra
```

## Reports
- Playwright HTML report
- Newman HTML API report

## Repository
All project test scripts and configuration files are maintained in this repository.
