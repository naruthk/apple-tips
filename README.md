# Apple Tips

A collection of tips and tricks for people who are using Apple products and ecosystem. Beautifully designed and presented to please us Apple fans.

This is a work in progress. Stay tune!

## Inspiration

I was heavily inspired by Dominik Ferber's [gatsby-starter-help-center](https://github.com/dferber90/gatsby-starter-help-center). His starter template allowed for an easy-to-setup Help Center. But I wanted to recreate my own version that I would have full control over its architecture and tooling. That was how Apple Tips was born.

## Development

To run this project locally, run the following commands:

```bash
git clone https://github.com/naruthk/apple-tips.git
npm install
```

```bash
gatsby develop
```

## Contributions

**Apple Tips** is an open-sourced project, which means you are more than welcomed to submit a pull request and help advance this project even further!

Simply create a new Markdown article and place the file within the appropriate folder. This must be inside the `./content` folder.

To see how to format your Markdown file, check out published documents inside the `./content` folder as an example.

## FAQ

<details>
<summary>I want to add a new category</summary>
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

---

Built using Gatsby.js because it's awesome!.

This project was bootstrapped with [gatsby-starter-typescript-plus](https://github.com/resir014/gatsby-starter-typescript-plus).