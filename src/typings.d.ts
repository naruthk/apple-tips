interface CSSModule {
  [className: string]: string;
}

export interface Frontmatter {
  title: string;
  date: string;
  author: string;
  description: string;
  keyboardCommand?: string;
  source?: string;
  osVersion: string;
}

export interface MarkdownRemark {
  html: string;
  excerpt?: string;
  frontmatter: Frontmatter;
}

declare module "*.module.scss" {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module "*.module.css" {
  const cssModule: CSSModule;
  export = cssModule;
}
