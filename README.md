A simulated city, with AI controlled, self-driving cars!

## Run this project locally

It's very simple to setup since this can be run statically. Most of the config work is already done.

1. Use your preferred package manager. I prefer `pnpm`, but any node package manager works.

```bash
pnpm i
```

```bash
pnpm dev
```

## Serving this statically

This is currently configured with SvetlteKit to build and host statically. I chose this so I can easily host it on my [github.io](elijahstorm.github.io) page.

```bash
pnpm release
```

Running this command will build the last commit to a local `/docs` file in the `release` branch, which can be configured in your `github.com/[username/repo-name]/settings/pages` to automatically deploy statically when a commit is pushed to the remote repo.

Running the above `build` step will handle managing, building, and pushing to the release branch for you. You can edit these steps to fit your needs.

(I did it like this because I'm lazy, but I like to be clean.)
