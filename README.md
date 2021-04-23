<p align="center">
  <img alt="Next Auth logo"
    src="https://next-auth.js.org/img/logo/logo-sm.png"
    height="32" />&nbsp;&nbsp;&nbsp;&nbsp;<img alt="plus sign" src="https://www.svgrepo.com/show/138538/plus-sign.svg"
    height="24" />&nbsp;&nbsp;&nbsp;&nbsp;<img alt="React Query logo" src="https://react-query.tanstack.com/_next/static/images/logo-a65f848e05592e7de1dc2150454230fa.svg"
    height="32" />&nbsp;&nbsp;&nbsp;&nbsp;<img alt="equal sign" src="https://www.svgrepo.com/show/106212/equal.svg"
    height="24" /> &nbsp;&nbsp;<img alt="heart"
    src="https://upload.wikimedia.org/wikipedia/commons/3/35/Emoji_u2665.svg" height="24" />
  <h3 align="center">@next-auth/react-query</h3>
  <p align="center">React Query wrapper for NextAuth.js session management.</p>
  <p align="center" style="align: center;">
    <a href="https://www.npmtrends.com/@next-auth/react-query">
      <img src="https://img.shields.io/npm/dm/@next-auth/react-query" alt="Downloads" />
    </a>
    <a href="https://github.com/nextauthjs/react-query/stargazers">
      <img src="https://img.shields.io/github/stars/nextauthjs/react-query" alt="Github Stars" />
    </a>
    <a href="https://www.npmjs.com/package/@next-auth/react-query">
      <img src="https://img.shields.io/npm/v/@next-auth/react-query?label=latest"
        alt="Github Stable Release" />
    </a>
  </p>
</p>


## API Reference

### useSession

```ts
useSession(params: UseSessionParams) : UseSessionResult
```

React Query wrapper to retrieve `Session`. Replaces `useSession` and `Provider` from `next-auth/client` in codebases where you already use `react-query`.

#### UseSessionParams

```ts
import { useSession } from "@next-auth/react-query"
...
const [session, loading] = useSession({
  required: true,
  redirectTo: "/auth/sign-in?error=InvalidSession",
  queryConfig: {
    staleTime: 60 * 60 * 3, // 3 hours
    refetchInterval: 60 * 5 // 5 minutes 
  }
})
...
```

| Parameter | Type     | Description                       | Default |
| :-------- | :------- | :-------------------------------- | :-----: |
| `required`| `boolean`| If `true`, will redirect when no session available | `false` |
| `redrectTo`| `string`| When `required: true`, this is where the user will be redirected | `"/api/auth/session"` |
| `queryConfig` | `UseQueryOptions` | See React Query's `useQuery` [Options](https://react-query.tanstack.com/reference/useQuery) | `{}` |

> TIP: `staleTime` and `refetchInterval` respectively match `clientMaxAge` and `keepAlive` from the [Original API](https://next-auth.js.org/getting-started/client#options).

#### UseSessionResult

```ts
import { useSession } from "@next-auth/react-query"
...
const [session, loading] = useSession()
...
```

The [shape](https://github.com/nextauthjs/next-auth/blob/88ec3bad71eb60ed86b3d95d7c4671f9985c96bd/types/client.d.ts#L20-L26) of what `useSession` returns matches the [Original API](https://next-auth.js.org/getting-started/client#usesession).

## Acknowledgements

Based on [this discussion](https://github.com/nextauthjs/next-auth/discussions/1803) between [@kripod](https://github.com/kripod) and [@balazsorban44](https://github.com/balazsorban44)
