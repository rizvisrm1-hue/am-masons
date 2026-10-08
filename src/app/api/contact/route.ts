import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // In a real application, you would send an email, save to a database, etc.
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const message = formData.get("message");
    
    // Log the submission (server-side only)
    console.log("Contact form submission:", { name, email, company, message });
    
    // Return a success response
    // Using a redirect back to the contact page with a success parameter is a simple pattern
    // Alternatively, you can return JSON and handle it client-side
    return NextResponse.redirect(new URL("/contact?success=true", request.url));
    
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.redirect(new URL("/contact?error=true", request.url));
  }
}
