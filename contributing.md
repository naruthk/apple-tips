# Contributing to Apple Tips

**Apple Tips** is an open-sourced project, which means you are more than welcome to help grow this project even further!

### To add a new content

This site reads all articles that are stored in the `./src/content` folder.

So simply create a new Markdown article and place your file inside the appropriate folder (whether that'd be iOS, macOS, etc.). The folder you place your file will determine the category that it belongs to.

Check out any existing articles inside the of `./src/content` folder as examples.

### To format your Markdown document

To keep things organized and to ensure that the site can read and parse the content of your article correctly, make sure the Frontmatter section at the top of your Markdown file contains the following structure:

```
---
layout: page
title: Your post title
date: 2020-10-25
author: Your name
shortcuts: [Up, Down, Shift, "8"]
description: A short excerpt
source: Link to the article
osVersion: 14.1
---

The main content of your article goes here
```

|   Key  | Values/Types Allowed | Definition |
| ------ | ------------- | --------- |
| layout | page | This remains as is in order to render the correct layout |
| title | string | Your post title |
| date | year-month-date | The date in which you publish the article |
| author | string| Your name |
| shorcuts | list of string values | The keyboard shortcuts if there are a any. Note that a number must be wrapped with a set of quotation mark |
| description | string | An excerpt |
| source | url | Link to an external site |
| osVersion | number | The operating system version that your tip applies to |

### To add a new category

To add a new category (a `Collection` such as `iOS`, `macOS`), you need to do update two places:

1. In `./src/constants.tsx`, add the new category to the list.
2. In `./gatsby-config.js`, append to the list of plugins with the object of the following properties:
```javascript
{
  resolve: 'gatsby-source-filesystem',
  options: {
    name: 'name-of-os-in-lower-case',
    path: `${__dirname}/src/content/name-of-os-in-lower-case`
  }
},
```
</details>
