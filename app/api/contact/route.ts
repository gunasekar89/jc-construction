import { NextResponse } from "next/server";

type ContactPayload = {
  inquiryType?: "general" | "quote";
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  projectType?: string;
  location?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (isNonEmpty(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  if (!isNonEmpty(payload.fullName)) {
    return NextResponse.json({ error: "Full name is required." }, { status: 400 });
  }

  if (!isNonEmpty(payload.email) || !EMAIL_RE.test(payload.email.trim())) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  if (!isNonEmpty(payload.message) || payload.message.trim().length < 10) {
    return NextResponse.json(
      { error: "Message must be at least 10 characters." },
      { status: 400 },
    );
  }

  if (payload.inquiryType === "quote") {
    if (!isNonEmpty(payload.projectType) || !isNonEmpty(payload.location)) {
      return NextResponse.json(
        { error: "Project type and location are required for quote requests." },
        { status: 400 },
      );
    }
  }

  const leadId = `JC-${Date.now().toString(36).toUpperCase()}`;

  console.info("[contact-lead]", {
    leadId,
    inquiryType: payload.inquiryType ?? "general",
    fullName: payload.fullName?.trim(),
    email: payload.email?.trim(),
    phone: payload.phone?.trim() || null,
    company: payload.company?.trim() || null,
    projectType: payload.projectType?.trim() || null,
    location: payload.location?.trim() || null,
    budget: payload.budget?.trim() || null,
    timeline: payload.timeline?.trim() || null,
    message: payload.message?.trim(),
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    leadId,
    message: "Thanks. Our team will contact you within one business day.",
  });
}
