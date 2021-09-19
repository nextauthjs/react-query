<p align="center">
  <img alt="Next Auth logo"
    src="https://next-auth.js.org/img/logo/logo-sm.png"
    height="64" />&nbsp;&nbsp;&nbsp;&nbsp;<img alt="plus sign" src="https://www.svgrepo.com/show/138538/plus-sign.svg"
    height="48" />&nbsp;&nbsp;&nbsp;&nbsp;<img alt="React Query logo" src="https://raw.githubusercontent.com/tannerlinsley/react-query/master/docs/src/images/logo.svg"
    height="64" />
  <h3 align="center">NextAuth.js React-Query Client</h3>
  <p align="center">@next-auth/react-query</p>
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

## Overview

This is an alternative client for `next-auth` based upon [`react-query`](https://react-query.tanstack.com/). It can replace the built-in session management on the client-side by taking advantage of `react-query`'s built-in caching, auto refetching, etc.

## Getting Started

```
npm install --save @next-auth/react-query
```

You can then import `useSession` from this package, instead of the core `next-auth` package. More usage details can be found below.


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
    staleTime: 60 * 1000 * 60 * 3, // 3 hours
    refetchInterval: 60 * 1000 * 5 // 5 minutes 
  }
})
...
```

| Parameter | Type     | Description                       | Default |
| :-------- | :------- | :-------------------------------- | :-----: |
| `required`| `boolean`| If `true`, will redirect when no session available | `false` |
| `redirectTo`| `string`| When `required: true`, this is where the user will be redirected | `"/api/auth/session"` |
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

## Contributing

We're open to all community contributions! If you'd like to contribute in any way, please first read our [Contributing Guide](https://github.com/nextauthjs/next-auth/blob/canary/CONTRIBUTING.md).

## License

ISC
