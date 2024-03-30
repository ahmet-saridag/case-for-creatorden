import fsPromises from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const filePath = path.join(process.cwd(), "app/influencers-mock.json");
    // Read the json file
    const jsonData: any = await fsPromises.readFile(filePath);
    // Parse data as json
    const objectData = JSON.parse(jsonData);
    return NextResponse.json(objectData);
  } catch (err) {
    return NextResponse.error();
  }
}
