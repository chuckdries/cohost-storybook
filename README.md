# Cohost Storybook

[![Netlify Status](https://api.netlify.com/api/v1/badges/06523df2-75ef-4f3d-bd41-1392b1560b95/deploy-status)](https://app.netlify.com/sites/cohost-storybook/deploys)

A storybook of posts for [cohost!](https://cohost.org), a social network that allows inline styling (and is cool for a number of other reasons !!)

### [Check it out!](https://cohost-storybook.netlify.app/)

## Usage
0. clone this repo and install yarn if you haven't already: 
```sh
git clone https://github.com/chuckdries/cohost-storybook.git
cd cohost-storybook
npm i -g yarn
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
4. Edit the post, including the `title` under `export default`, and then select your post in the storybook sidebar
5. Use the "Show HTML" switch in the "controls" panel to grab the generated HTML for your post!

View the [Introduction story](https://chuckdries.github.io/cohost-storybook/?path=/story/welcome-introduction--page) for more information

### Contributing stories
1. Fork this repo
2. Push your work to a branch on your fork
3. Open a PR

## Todo
- [ ] more stories!  
- [x] a more convenient way to copy the rendered HTML from the post than devtools  
- [ ] improve `Post`
  - [ ] implement large breakpoint preview (profile pics to left of post)
- [ ] improve `StoryTemplate`
  - [ ] ability to hide the top and bottom space filler posts
  - [ ] ancillary UI like top nav, sidebars (in progress - added top nav)
  - [ ] more precise copy of width/sizing behavior (will want to poke at live site's responsive strategy)(maybe belongs in `Post`?)
- [ ] improve tailwind config/`index.css`
  - [ ] `mask` and related classes (`mask-squircle` etc)
  - [ ] reverse engineer spacing and typography settings?
  - [ ] copy colors into config (implement their technique of defining the rgb values as CSS custom properties and reading them with `rgb(var())` in the tailwind config)
   