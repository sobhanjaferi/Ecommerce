import { USERS } from '@/constants/users.constant'
import { UserType } from '@/types/user'
import { NextRequest, NextResponse } from 'next/server'

export function GET(): NextResponse {
  return NextResponse.json(USERS)
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const user: Omit<UserType, 'id'> = await req.json()

    const isuserExist: boolean = USERS.some(
      (item) => item.email === user.email && item.password === user.password,
    )

    if (!isuserExist)
      return NextResponse.json(
        { message: 'User Was not Exists' },
        { status: 409 },
      )

    return NextResponse.json({ message: 'login successfully' }, { status: 200 })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ message: 'Invalid request' }, { status: 400 })
  }
}
