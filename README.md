## Reproduction for issue in [vaul](https://github.com/emilkowalski/vaul)

#### Description of the issue
- iOS only: Elements that exist below the height of the screen, and that overflow off the page horizontally, will flash when the drawer is closed
- Tested on Safari, Chrome, and Firefox with same results in each
- On Android (Galaxy S22, Android 14) and web (Mac M2 OS 14.4.1), the elements behave as expected with no flash (although sometimes scroll position of the page is recalculated on drawer opening, which is undesired)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ParkerMJones/vaul-flash-repro)


#### Environment
  - Remix 2.9.2
  - vaul 0.9.1
  - tested on: iPad (9th Gen) OS 17.4.1

#### Video Recording

https://github.com/ParkerMJones/vaul-flash-repro/assets/80937296/dab773e5-94c8-48ea-974e-a7623a07b17d

