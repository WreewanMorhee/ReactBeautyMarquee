## React Beauty Marquee
React Beauty Marquee is a plugin for whom want to use marquee.
You can
use it to beautify your web
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
  <div className='react-beauty-marquee'>  //  STEP1. draw the region of marquee and adjust its position in this div
    <BeautyMarquee 
      stop_on_box_hover
      desktop_speed={200} 
      mobile_speed={100}
    >  //  STEP3. once you have your marquee content CSS done, add the BeautyMarquee component to trigger it !
      <div className='outer-box'>  //   STEP2. adjust the content of marquee with your own CSS in this div and add content into it
        /*  the content you want to marquee */
      </div>
    </BeautyMarquee >
  </div>
)
```

## Props                  
### desktop_speed         
type: number    
default: 200    
usage: marquee speed in desktop (window.innerWidth > 768)



### mobile_speed               
type: number        
default: 100      
usage: marquee speed in mobile(window.innerWidth <= 768)



### vertical
type: boolean      
default: false     
usage: if true, change marquee to vertical



### reverse
type: boolean    
default: false    
usage: if horizontal, marque move from left to right, reverse will from right to left        
if vertical, marquee move from top to bottom, reverse will from bottom to top



### stop_on_box_hover
type: boolean       
default: false      
usage: if true, marquee will stop when user hover marquee region



### stop_on_content_hover
type: boolean      
default: false       
usage: if true, marquee will stop when user hover marquee content



### turn_on
type: boolean      
default: true      
usage: if true, will run marquee, otherwise, won't trigger marquee

## Thank You for Your Use
It's welcome to report me any issue or bug, thanks a lot!

## Author
[WreewanMorhee](https://github.com/WreewanMorhee)
