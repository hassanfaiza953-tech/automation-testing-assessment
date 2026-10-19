
import { test, expect } from '@playwright/test';

test('Q5 - Update user with PUT', async ({ request }) => {

  const response = await request.put('https://reqres.in/api/users/2', {
    headers: {
      'x-api-key': 'free_user_3Ku6YndE2KDxYeW5596oi2rTH9i',
      'Content-Type': 'application/json'
    },
    data: {
      name: 'Toufik Vubon',
      job: 'QA Engineer'
    }
  });

  expect(response.status()).toBe(200);

  const data = await response.json();

  expect(data.name).toBe('Toufik Vubon');
  expect(data.job).toBe('QA Engineer');
  expect(data.updatedAt).toBeTruthy();

  console.log('Updated At:', data.updatedAt);

});
