# bench-technical-test
This repository contains the codin exercise executed for Bench's interview
process

## Considerations
Seeing as this was a coding test and not intended to take a huge amount of time
there are some steps I have omited from this project that I would otherwise have
taken if it were a real production application. These include:

- Adding I18n or equivalent intenationalization support
- Careful consideration to Accessibility guidelines. ( There are few
  interactions here so not much opportunity really)
- Thorough setup of Webpack pipelines with optimizations for assets and cache
  busting
- SEO Considerations
- Server side pre-rendering ( if marketing pages are part of the SPA)
- Transitions and loading animations

## Comments on the API
The API was fairly straightforward to use, just wish all the numbers weren't
provided as strings but I suspect that is something common in the financial
world?

## Libraries Used
I made use of a couple of simple libraries to speed up the process of getting
this application built to spec. These include:

- Vue-Moment: Used for formatting dates into readable english.
- Vue-Currency-filter: Similar to moment, it formats currency strings to be
  proper.
- Axios: A nice little Ajax wrapper for Vue (and others). It keeps the syntax
  nice and clean and easy to read. Less verbose than a standard vanilla JS Ajax
  request would be.
- crowbar-sass: Self built lightweight front end SCSS library that I often use
  when building quick projeccts like this. It has just the very basics of what I
  find I end up using on every project I do. Most notably I appreciate the
  responsibe breakpoint system.

## Usage
```bash
# First install dependencies
npm install

# Run dev server
npm run dev

# Package for production
npm run prod
```
