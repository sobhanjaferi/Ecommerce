import { USERS } from '@/constants/users.constant'
import { UserType } from '@/types/user'
import { NextRequest, NextResponse } from 'next/server'
import { v4 } from 'uuid'

export function GET(): NextResponse {
  return NextResponse.json(USERS)
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const user: Omit<UserType, 'id'> = await req.json()

    const isUserExist = USERS.some((item) => item.email === user.email)

    if (isUserExist) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 409 },
      )
    }

    USERS.push({ id: v4(), ...user })

    const response = NextResponse.json(
      { message: 'Register successfully' },
      { status: 201 },
    )

    response.cookies.set('ISUSEREXISTS', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60,
    })

    return response
  } catch (error) {
    console.error(error)

    return NextResponse.json({ message: 'Invalid request' }, { status: 400 })
  }
}
