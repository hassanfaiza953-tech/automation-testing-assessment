
import { test, expect } from '@playwright/test';

test('Q8 - Verify bad requests', async ({ request }) => {

  const headers = {
    'x-api-key': 'free_user_3Ku6YndE2KDxYeW5596oi2rTH9i',
    'Content-Type': 'application/json'
  };

  const login = await request.post('https://reqres.in/api/login', {
    headers,
    data: {
      email: 'eve.holt@reqres.in'
    }
  });

  expect(login.status()).toBe(400);

  const register = await request.post('https://reqres.in/api/register', {
    headers,
    data: {
      email: 'sydney@fife'
    }
  });

  expect(register.status()).toBe(400);

  const user = await request.get('https://reqres.in/api/users/999', {
    headers
  });

  expect(user.status()).toBe(404);

});
