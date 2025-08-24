import { NextRequest, NextResponse } from "next/server"
import type { ApiResponse } from "@/types"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const name = searchParams.get("name") || "World"

  const response: ApiResponse<{ message: string; timestamp: string }> = {
    success: true,
    data: {
      message: `Hello, ${name}!`,
      timestamp: new Date().toISOString(),
    },
  }

  return NextResponse.json(response)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name = "Anonymous" } = body

    const response: ApiResponse<{ message: string; receivedData: any }> = {
      success: true,
      data: {
        message: `Hello, ${name}! Your data was received.`,
        receivedData: body,
      },
    }

    return NextResponse.json(response)
  } catch (error) {
    const errorResponse: ApiResponse = {
      success: false,
      error: "Invalid JSON in request body",
    }

    return NextResponse.json(errorResponse, { status: 400 })
  }
}