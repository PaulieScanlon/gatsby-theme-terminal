## gatsby-theme-terminal

You need at least a folder called `pages` located at `src/pages` or you'll get a GraphQL error

and it needs to have a `navigationLabel` field in front matter

Wherever you decided to source other mdx files from be it `posts` or `projects` you'll need to include a `title` in frontmatter to avoid the GraphQL error, this is also how the theme distinguishes between pages and and other mdx files

Comes with all `@theme-ui/components` as shortcodes, so you can use them anywhere in your `.mdx`

In the options you can define where to source files from. By default any `.mdx` in `src/pages` will be found but using options.source you can define a string eg: `posts` or an array of strings `['posts' 'projects']`

List out the components used in Main

Intro
SourceList
