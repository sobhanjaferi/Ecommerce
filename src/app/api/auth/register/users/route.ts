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

    const isuserExist: boolean = USERS.some(
      (item) => item.email === user.email && item.password === user.password,
    )

    if (!isuserExist) {
      USERS.push({ id: v4(), ...user })

      return NextResponse.json(
        { message: 'register successfully' },
        { status: 200 },
      )
    }

    return NextResponse.json({ message: 'User Was Exists' }, { status: 409 })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ message: 'Invalid request' }, { status: 400 })
  }
}
