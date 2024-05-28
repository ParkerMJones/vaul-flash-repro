## Reproduction for flashing issue in [vaul](https://github.com/emilkowalski/vaul)

#### Description of the issue
- iOS only: Elements that exist below the height of the screen, and that overflow off the page horizontally, will flash when the drawer is closed
- Sometimes on opening the drawer with these elements in view, the entire page will flash, and scroll position may be moved
- Tested on Safari, Chrome, and Firefox with same results in each
- Seems only to happen on real devices: the simulator behaves as expected (iPhone 15 Pro Max, iOS 17.2)
- On Android (Galaxy S22, Android 14) and desktop web (Mac M2 OS 14.4.1), the elements behave as expected with no flash (although sometimes scroll position of the page is recalculated on drawer opening on Android)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ParkerMJones/vaul-flash-repro)


#### Environment
  - Remix 2.9.2
  - vaul 0.9.1
  - tested on: iPad (9th Gen) OS 17.4.1

#### Video Recording

https://github.com/ParkerMJones/vaul-flash-repro/assets/80937296/dab773e5-94c8-48ea-974e-a7623a07b17d

