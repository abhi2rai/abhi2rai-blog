---
path: personal-blog-paradox
date: 2020-08-05T00:54:37.531Z
title: Personal Blog Paradox
description: My personal experience trying to create a basic blog using Netlify
  and Gatsby after some experimentation
---
### Update as of 15th January, 2023

The development experience locally with this stack has been turbulent. Will share an update soon on this. 

\-----

Almost every developer I know or read about has gotten into this - "Having my own blog would be so cool". While the [idea](https://www.freecodecamp.org/news/every-developer-should-have-a-blog-heres-why-and-how-to-stick-with-it-5fd55a247fbf/) is great, the execution can get slippery depending on who you are :) 

This is what happened to me:

Had a 7-10 days of vacation coming up close to the end of year. Due to bunch of things could not really go anywhere so decided to pursue the idea with grand plans..

![](../assets/giphy.gif)

Plan was:

* Get a domain - easy. Went to Google Domain. Tried out various combinations of a name I needed and finally settled on one.
* Decide the design and layout - easy? Ha! Easy to criticize the UX/UI folks but this is **tough**. When its your own site, then stakes are really high. So after some back and forth, winged it :)
* Where to host it? - Given some familiarity with AWS, this was easy as well. Simply throw the file in S3 and use Cloud Front. That's it. 
* What do I use to build it out? -  I thought: "It should be really new, cutting edge and show what a person can do". So after some searching around and recent playing around with cross platform app development, narrowed it down to [Flutter](https://flutter.dev). Google backed project which recently released [support for using the same code base for web](https://flutter.dev/web) as well. 

Given my recent positive experience with Flutter for mobile app development, this really pumped me up to give it a go. After switching to Flutter beta channel at the time, I started playing around and it was really easy to get upto speed. In a day or so, I had a basic page up and running. Not a lot of content (more on that soon) but good enough to stand up a page.  After 2 days, narrowed down to theme, color, content and committed a version I seemed ok to host. Got the output files and copied them in S3. After an hour or so of CloudFront config, the site was up and running!

![](../assets/giphy-2.gif)

After sharing the link with a few folks - I declared victory and promised myself to keep enhancing it in the "future".

Vacation ended and got back to the grind. As time passed, started realizing that this did not address what I was trying to achieve. So I took a step back and wrote down on what I need from a personal blog:

* It needs to be personal and does not need to portray me professionally
* Recently started hating exclusive content restrictions on spaces like Medium, so wanted a place where I can write blogs without thinking
* Have a setup where I can easily write content whenever I feel like and not dabble around pushing new features each time
* Automate deployment to the hosting server with click of a button
* Try and leverage as much as new things I can learn while I do it

While Flutter was great at acheiving some of the above, it did not really help overall. Whenever I had a new thought to write about, I always thought I need to spend more development time on supporting new features before I can even do it. This eventually discouraged to me to go back and work on this more.  I always found an excuse because I knew I could not spend enough time to get it exactly as I wanted. 

Learning from this I tried reading about how others have done this and how do they keep up. One of the hot ones was [JAMstack](https://jamstack.wtf). The more I read about it, the more it felt like the right fit for my use case. Came across multiple site generators like [Gatsby](https://www.gatsbyjs.org) and [Next.js](https://nextjs.org) and CMS like [ContentFul](https://www.contentful.com), [Netlify](https://www.netlify.com) etc.. while reading about this. Eventually landed up on this gem of a tutorial by [Thomas Wang](https://www.thomas.wang/blog):

 <https://www.thomas.wang/blog/developer-blog> 

This workflow literally gave me everything I need + GitHub becomes content repo (kind of) + commit became automation pipeline for deployment. Tried around on my local, read a couple more tutorials on Netflity/Gatsby and decided to give it a go. In 3-4 hours I was all set and used Netlfiy CDN to point my domain to this. Bye bye S3 (for now) !

The current blog is written via the same mechanism and enabled me to actually \*write\* than just think about the over-engineered way to get to it. I am much more at ease with this setup and can spend sporadic time to improve what I need while still keep writing. 

Hope this helps someone out there! 

![](../assets/giphy-3.gif)