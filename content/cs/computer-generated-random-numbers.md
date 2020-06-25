---
slug: "/computer-generated-random-numbers"
date: "2020-06-25"
title: "Are computer generated random numbers really random?"
description: "Are computer generated random numbers really random?"
author: "Andres Bedoya"
tags: ["Computer Science"]
---

This morning I couldn't sleep, so I remembered something interesting, computer generated random numbers are not really random numbers, or not strictly speaking.

But first, let's talk about **Deterministic Systems** versus **Stochastic Systems**.

> In mathematics, computer science and physics, a deterministic system is a system in which no randomness is involved in the development of future states of the system. A deterministic model will thus always produce the same output from a given starting condition or initial state.

So how does this affect or why do I say that computer generated random numbers are not strictly random?...

If you want to generate a "random" number using a computer and JavaScript, you can use `Math.random()` function that returns a floating-point number in the range 0 to less than 1 (inclusive of 0, but not 1).

```
0.3111280542759336
0.25985434139900176
0.3802321554535415
```

JavaScript always uses the same algorithm with the same seeds. The algorithm follows every time the same pattern to generate those numbers. And then you could think, then could you guess the next random number? My answer is: No. The pattern is complex enough to identify it. That's why we usually call them: *Pseudo-random* numbers.

So how can we generate true random numbers? using **quantum mechanics**. How? make measurements on something that behaves randomly and from there we can extract random numbers.

But, why this is important? Because we are software developers (some of us, I guess), and we don't want our applications to be hacked.

As Steve Ward (Professor of Computer Science and Engineering at MIT’s Computer Science and Artificial Intelligence Laboratory.) says:

> Truly random numbers make such reverse engineering impossible

This is only a brief introduction and gentle, the topic is much more complex than it seems. Especially when we introduce ourselves a little more to the world of cryptography.

Read more:

[Can a computer generate a truly random number?](https://engineering.mit.edu/engage/ask-an-engineer/can-a-computer-generate-a-truly-random-number/)

[What is a random number and why is it so difficult to generate them?](https://www.euronews.com/2019/07/29/what-is-a-random-number-and-why-is-it-so-difficult-to-generate-them)