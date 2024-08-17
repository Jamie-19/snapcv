import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "";

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  const { slug } = await request.json();

  const { data, error } = await supabase
    .from("User")
    .select("userName")
    .eq("userName", slug);

  return NextResponse.json({ data, error }, { status: 200 });
}