import { Session } from "next-auth"
import { UseQueryOptions } from "react-query"

/**
 * Fetches session from `/api/auth/session`,
 * parses its JSON response, and returns it.
 * If there is no session, it returns `null`
 */
export function fetchSession(): Promise<Session | null>

/**
 * React Query wrapper to retrieve `Session`.
 * Replaces `useSession` and `Provider` from `next-auth/client` in codebases
 * where you already use `react-query`.
 *
 * [`useSession`](https://next-auth.js.org/getting-started/client#usesession) |
 * [`Provider`](https://next-auth.js.org/getting-started/client#provider) |
 * [React Query](https://react-query.tanstack.com/guides/ssr#using-nextjs)
 */
export function useSession<R extends boolean = false>(params?: {
  /** If set to `true`, the returned session is guaranteed to not be `null` */
  required?: R
  /** If `required: true`, the user will be redirected to this URL, if they don't have a session */
  redirectTo?: string
  /** Configuration for `useQuery` */
  queryConfig?: UseQueryOptions<Session | null>
}): [R extends true ? Session : Session | null, boolean]
