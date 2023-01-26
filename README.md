# A simulated city, with visual AI self-driving cars!

## Run this project locally

It's very simple to setup since this can be run statically. Most of the config work is already done.

1. Use your preferred package manager. I prefer `pnpm`, but any node package manager works.

```bash
pnpm i
pnpm dev
```

## Build and preview locally

```bash
pnpm build
pnpm preview
```

This will build your local changes and host a preview of the site to test how this will work when served. Please note: There might be differences here

## Serving this statically

This is currently configured with SvelteKit to build and host statically. I chose this so I can easily host it on my [github.io](http://elijahstorm.github.io/) page.

```bash
pnpm release
```

Running this command will build the last commit to a local `/docs` folder in the `release` branch, which can be configured in your `github.com/[username/repo-name]/settings/pages` to automatically deploy statically when a commit is pushed to the remote repo.

I recommend configuring it so that Github will automatically deploy from the source branch `release` within the `/docs` folder.

Running the above `pnpm release` step will manage building and pushing to the release branch for you. You can edit these steps to fit your needs.

(Notice: I did it like this because I'm lazy, but I like to be clean. There are better ways to do this via hooks, so I might update this later.)
