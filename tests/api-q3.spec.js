
import { test, expect } from '@playwright/test';

const url = 'https://reqres.in/api';
const headers = {
  'x-api-key': 'free_user_3Ku6YndE2KDxYeW5596oi2rTH9i',
  'Content-Type': 'application/json'
};

test('Q3 - Login', async ({ request }) => {
  const res = await request.post(url + '/login', {
    headers,
    data: { email: 'eve.holt@reqres.in', password: 'cityslicka' }
  });

  expect(res.status()).toBe(200);

  const data = await res.json();
  expect(data.token).toBeTruthy();
});

test('Q4 - Get user', async ({ request }) => {
  const res = await request.get(url + '/users/2', { headers });

  expect(res.status()).toBe(200);

  const data = await res.json();
  expect(data.data.first_name).toBe('Janet');
  expect(data.data.last_name).toBe('Weaver');
  expect(data.data.email).toBe('janet.weaver@reqres.in');
});

test('Q5 - Update user with PUT', async ({ request }) => {
  const res = await request.put(url + '/users/2', {
    headers,
    data: { name: 'Toufik Vubon', job: 'QA Engineer' }
  });

  expect(res.status()).toBe(200);

  const data = await res.json();
  expect(data.name).toBe('Toufik Vubon');
  expect(data.job).toBe('QA Engineer');
  expect(data.updatedAt).toBeTruthy();
});

test('Q6 - Update one field with PATCH', async ({ request }) => {
  const res = await request.patch(url + '/users/2', {
    headers,
    data: { job: 'Tester' }
  });

  expect(res.status()).toBe(200);

  const data = await res.json();
  expect(data.job).toBe('Tester');
  expect(data.updatedAt).toBeTruthy();
});

test('Q8 - Check bad requests', async ({ request }) => {
  const res1 = await request.post(url + '/login', {
    headers,
    data: { email: 'eve.holt@reqres.in' }
  });
  expect(res1.status()).toBe(400);

  const res2 = await request.post(url + '/register', {
    headers,
    data: { email: 'sydney@fife' }
  });
  expect(res2.status()).toBe(400);

  const res3 = await request.get(url + '/users/999', { headers });
  expect(res3.status()).toBe(404);
});
