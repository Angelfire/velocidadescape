---
date: "2020-08-01"
title: "How to automate your Github Profile README automatically using NodeJS"
description: "How to automate your Github Profile README automatically using NodeJS and Github actions"
author: "Andres Bedoya"
tags: ["JavaScript"]
---

GitHub’s new profile page README feature was release a couple of weeks ago, and it's a great feature that allows you to personalize your profile in multiple ways, some quite creative.

Markdown lends itself best to standard static text content, that's not a problem for creative people, like **Victoria Drake**, who automate her profile using GO, and this post is inspired by her post. [How to Automate Your GitHub Profile README](https://victoria.dev/blog/go-automate-your-github-profile-readme/).

However, I am not a GO developer and I'm pretty bad at graphic design, so the first thing I thought was: If she could do it using a backend language, this should be friendlier using a frontend language, like JavaScript.

Probably a good way to improve your profile, be it showing your latest posts, your latest videos on Youtube, your latest tweets, etc.

My current README refreshes itself daily with a link to my latest blog post. Here’s how I built a self-updating README.md with NodeJS and GitHub actions (with a cronjob).

**Disclaimer:** I'm not a big expert using NodeJS and this is the first time I use github actions, so possibly there are some errors, any help is always welcome.

## Reading and writing files with NodeJS

I'm front-end, obviously my first choice was to be JavaScript, and I was sure that this could be done more easily than with Go.

To create my README.md, I’m going to get some static content from an existing file, mix it together with some new dynamic content that I’ll generate with NodeJS.

```js
const { readFile } = require('fs').promises;

const readMarkdown = async (mdFile) => {
  try {
    const mdData = await readFile(mdFile, 'utf8');

    return mdData;
  } catch (e) {
    throw new Error(`Failed to load file at ${mdFile}`);
  }
}
```

Next, I will use a package to read my RSS feed data and get my most recent post.

```js
const Parser = require('rss-parser');

const getRSS = async(rssUrl) => {
  const feed = await parser.parseURL(rssUrl);

  return feed.items[0];
}
```

This will be my dynamic content, but the possibilities are endless:

```js
  const lastPost = `- Read my latest blog post: [${feed.title}](${feed.link})`;
  const date = `Last update on ${today.toDateString()}`;
```

And finally, we are going to mix everything:

```js
const main = async(staticMD, rssURL) => {
  const oldMd = await readMarkdown(staticMD);
  const feed = await getRSS(rssURL);
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const lastPost = `- Read my latest blog post: [${feed.title}](${feed.link})`;
  const date = `Last update on ${today.toDateString()}`;

  const data = `${oldMd}
${lastPost}

${date}`;

  writeFile(filePathReadme, data);
}
```

## Running your NodeJS script on a schedule with Actions

This is something new to me, but basically, you can create a GitHub Action workflow that [triggers](https://docs.github.com/en/actions/reference/events-that-trigger-workflows) both on a push to your master branch as well as on a daily schedule.

The cronjob runs everyday at midnight (GMT -5)
```yml
on:
  push:
    branches:
      - master
  schedule:
    - cron: '0 5 * * *'
```

To run the NodeJS script that rebuilds our README, we first need a copy of our files. We use actions/checkout for that:

```yml
- name: Get working copy
  uses: actions/checkout@master
  with:
    fetch-depth: 1 
```

This step install the dependencies and run one script (that I created in my `package.json`):

```yml
- name: Install dependencies and run
  run: |
    npm ci
    npm start
```

Finally, we push the updated files back to our repository:

```yml
- name: Deploy
  run: |
    git config user.name "${GITHUB_ACTOR}"
    git config user.email "${GITHUB_ACTOR}@users.noreply.github.com"
    git add .
    git commit -am "Update dynamic content"
    git push --all -f https://${{ secrets.GITHUB_TOKEN }}@github.com/${GITHUB_REPOSITORY}.git
```

[Here is my repo](https://github.com/Angelfire/Angelfire), there you can find my NodeJS script and my Github Workflow.

If you have any question, if you can help me with my script and my Github Action, please, dont' hesitate and let me know!.
