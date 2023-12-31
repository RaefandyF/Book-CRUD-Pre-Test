import Lists from "./lists";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Login() {
    const session = await getServerSession(authOptions)

  return (
    <div>
        <Lists />
        <pre>{JSON.stringify(session)}</pre>
    </div>
  )
}
