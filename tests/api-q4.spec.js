
import { test, expect } from '@playwright/test';

test('Q4 - Get user details', async ({ request }) => {

  const response = await request.get('https://reqres.in/api/users/2', {
    headers: {
      'x-api-key': 'free_user_3Ku6YndE2KDxYeW5596oi2rTH9i'
    }
  });

  expect(response.status()).toBe(200);

  const data = await response.json();

  expect(data.data.first_name).toBe('Janet');
  expect(data.data.last_name).toBe('Weaver');
  expect(data.data.email).toBe('janet.weaver@reqres.in');

});
