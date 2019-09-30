## React Beauty Marquee
React Beauty Marquee is a plugin for whom want to use marquee.
You can
use it do beautify your web
or
use is to show some message repeatly
[DEMO](https://event.hearst.com.tw/uiuxstoredemo/beautymarquee/)


## How to install
1. go to your terminal and type the following:
```bash
yarn add react-beauty-marquee
```

## How to use:
```js
import BeautyMarquee from 'react-beauty-marquee'

const DemoComp = () => (
  <div className='react-beauty-marquee'>  //  step1. draw the region of marquee and adjust its position in this div
       <BeautyMarquee stop_on_box_hover desktop_speed={200} mobile_speed={100}>  //  step3. once you have your marquee content CSS done, add the BeautyContent component to trigger it !
              <div className='outer-box'>  //   step2. adjust the content of marquee with your own CSS in this div and add content into it
                     /*  the content you want to the marquee */
              </div>
       </BeautyMarquee >
  </div>
)
```

## Thank You for Your Use
It's welcome to report me any issue or bug, thanks a lot!

## Author
[WreewanMorhee](https://github.com/WreewanMorhee)
