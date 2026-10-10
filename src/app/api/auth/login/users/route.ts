import { USERS } from '@/constants/users.constant'
import { UserType } from '@/types/user'
import { NextRequest, NextResponse } from 'next/server'

export function GET(): NextResponse {
  return NextResponse.json(USERS)
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const user: Omit<UserType, 'id'> = await req.json()

    const isUserExist = USERS.some(
      (item) => item.email === user.email && item.password === user.password,
    )

    const response = isUserExist
      ? NextResponse.json({ message: 'Login successfully' }, { status: 200 })
      : NextResponse.json({ message: 'User was not found' }, { status: 401 })

    response.cookies.set('ISUSEREXISTS', JSON.stringify(isUserExist), {
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
