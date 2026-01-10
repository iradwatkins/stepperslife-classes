import { redirect } from "next/navigation";

export default function HomePage() {
  // Redirect to classes listing
  redirect("/classes");
}
