# Cohost Storybook

[![Netlify Status](https://api.netlify.com/api/v1/badges/06523df2-75ef-4f3d-bd41-1392b1560b95/deploy-status)](https://app.netlify.com/sites/cohost-storybook/deploys)

A storybook of posts for [cohost!](https://cohost.org), a social network that allows inline styling (and is cool for a number of other reasons !!)

### [Check it out!](https://cohost-storybook.netlify.app/)

## Usage
0. clone this repo and install yarn if you haven't already: 
```sh
npm i -g yarn
git clone https://github.com/chuckdries/cohost-storybook.git
cd cohost-storybook
```
1. install dependencies: 
```
yarn
```
2. start storybook: 
```
yarn storybook
```
3. copy-paste `src/stories/Waterfall.stories.tsx` into a new file ending in `.stories.tsx` inside `src/stories`
4. Edit the post, including the `title` under `export default` and `storyName` near the bottom, and then select your post in the storybook sidebar
5. Use the "Show HTML" switch in the "controls" panel to grab the generated HTML for your post!
6. I recommend saving as a draft before you post to double check that things look how you expect. This tool attempts to emulate what a post looks like but it's not perfect

View the [Introduction story](https://cohost-storybook.netlify.app/?path=/story/welcome-introduction--page) for more information

### Contributing stories
0. Don't forget to leave your @ in the comment at the top of any stories you add or modify (if you want to)
1. Fork this repo
2. Push your work to a branch on your fork
3. Open a PR

## Todo
- [ ] more stories!  
- [x] a more convenient way to copy the rendered HTML from the post than devtools  
- [ ] improve `Post`
  - [x] implement large breakpoint preview (profile pics to left of post)
  - [x] implement attribution props, so people can put their own name and handle on posts they contribute
- [ ] improve `StoryTemplate`
  - [x] ability to hide the top and bottom space filler posts
  - [ ] ancillary UI like top nav, sidebars (in progress - added top nav and placeholder left sidebar)
  - [ ] more precise copy of width/sizing behavior (will want to poke at live site's responsive strategy)(maybe belongs in `Post`?)
  - [x] roughly center posts (best to follow site's behavior but exactly center or whatever we can pull off should be good enough)
- [ ] improve tailwind config/`index.css`
  - [x] `mask` and related classes (`mask-squircle` etc)
  - [ ] reverse engineer spacing and typography settings?
  - [x] copy colors into config (implement their technique of defining the rgb values as CSS custom properties and reading them with `rgb(var())` in the tailwind config)
   