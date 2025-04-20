import connectDB from "@/config/db";
import LeadsForm from "@/models/LeadsForm";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const productId = formData.get("productId");
    let answers;
    if (typeof formData.get("answers") === "string") {
      answers = JSON.parse(formData.get("answers"));
    }
    await connectDB();
    const newLeads = await LeadsForm.create({
      productId,
      answers,
      date: Date.now(),
    });
    return NextResponse.json({
      success: true,
      message: "Form send Successful",
      newLeads,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
