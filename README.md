# Team 303 Website

This is a redesign of the Team 303 website made in NextJS. We decided it was time for an upgrade, and we did not want to continue using wordpress to make and host our site. This new version can be exported as a static site and hosted for free on a platform such as Cloudflare.

## Developing Locally

Install dependencies with

```sh
yarn install
```

run the dev server with

```sh
yarn dev
```

## Exporting The Site

To export the site as static HTML run

```sh
yarn export
```

which will build the entire site and put it into the `out` directory.
