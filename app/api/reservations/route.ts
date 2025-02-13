import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return new NextResponse(
        JSON.stringify({ error: "Authentication required" }),
        { status: 401 }
      );
    }

    const reservations = await prisma.reservation.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        startDate: "desc",
      },
    });

    return NextResponse.json(reservations);
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        error: error.message || "Failed to fetch reservations",
      }),
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return new NextResponse(
        JSON.stringify({ error: "Authentication required" }),
        { status: 401 }
      );
    }

    const { startDate, endDate, items } = await req.json();

    const reservation = await prisma.reservation.create({
      data: {
        userId: session.user.id,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        items,
        status: "pending",
      },
    });

    return NextResponse.json(reservation);
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        error: error.message || "Failed to create reservation",
      }),
      { status: 500 }
    );
  }
}
