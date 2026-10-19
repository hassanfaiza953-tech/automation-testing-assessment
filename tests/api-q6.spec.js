
import { test, expect } from '@playwright/test';

test('Q6 - Update one field with PATCH', async ({ request }) => {

  const response = await request.patch('https://reqres.in/api/users/2', {
    headers: {
      'x-api-key': 'free_user_3Ku6YndE2KDxYeW5596oi2rTH9i',
      'Content-Type': 'application/json'
    },
    data: {
      job: 'Automation Tester'
    }
  });

  expect(response.status()).toBe(200);

  const data = await response.json();

  expect(data.job).toBe('Automation Tester');
  expect(data.updatedAt).toBeTruthy();

  expect(data).not.toHaveProperty('name');
  expect(data).not.toHaveProperty('email');

});
