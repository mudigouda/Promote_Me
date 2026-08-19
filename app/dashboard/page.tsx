import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Home from "../page";
import { COOKIE_NAME, getSessionUser } from "../../src/lib/auth";

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  const user = await getSessionUser(token);

  if (!user) redirect("/login");

  return <Home />;
}
