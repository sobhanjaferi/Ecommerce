import { UserListType } from '@/types/user'
import { v4 } from 'uuid'

export const USERS: UserListType = [
  {
    id: v4(),
    email: 'sobhanj238@gmail.com',
    password: 'Sobhan 1387',
  },
  {
    id: v4(),
    email: 'sobhanjafarii87@gmail.com',
    password: 'Sobhan 1387',
  },
]
