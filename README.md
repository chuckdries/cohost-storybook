# Cohost Storybook

A storybook of posts for [cohost!](https://cohost.org), a social network that allows inline styling (and is cool for a number of other reasons !!)

## Todo
- [ ] more stories!
- [ ] improve `Post`
  - [ ] implement large breakpoint preview (profile pics to left of post)
- [ ] improve `StoryTemplate`
  - [ ] ancillary UI like top nav, sidebars
  - [ ] more precise copy of width/sizing behavior (will want to poke at live site's responsive strategy)(maybe belongs in `Post`?)
- [ ] improve tailwind config/`index.css`
  - [ ] `mask` and related classes (`mask-squircle` etc)
  - [ ] reverse engineer spacing and typography settings?
  - [ ] copy colors into config (implement their technique of defining the rgb values as CSS custom properties and reading them with `rgb(var())` in the tailwind config)
   