import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  async () => {
    return HttpResponse.json({
      id: 'customer-user-id',
      name: 'John Doe',
      email: 'johndoe@email.com',
      phone: '55 666 999',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
