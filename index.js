import { useQuery } from "react-query"
import { useRouter } from "next/router"

async function fetchSession() {
  const res = await fetch("/api/auth/session")
  const session = await res.json()
  if (Object.keys(session).length) {
    return session
  }
  return null
}

export function useSession({
  required,
  redirectTo = "/api/auth/signin?error=SessionExpired",
  { onSettled, ...restQueryConfig },
} = {}) {
  const router = useRouter()
  const query = useQuery(["session"], fetchSession, {
    onSettled(data) {
      if (onSettled) onSettled(data)
      if (data || !required) return
      router.push(redirectTo)
    },
    ...restQueryConfig,
  })
  return [query.data, query.status === "loading"]
}
