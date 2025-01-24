import { NextResponse } from "next/server";
import countryCodes from "@/data/country-codes.json";

export async function GET() {
  try {
    return NextResponse.json(countryCodes);
  } catch (error) {
    console.error("Error fetching country codes:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
