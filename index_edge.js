/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['source-sans-pro, sans-serif']='<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>';
   fonts['amatic-sc, sans-serif']='<script src=\"http://use.edgefonts.net/amatic-sc:n4,n7:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'contentArea',
            type:'rect',
            rect:['252px','auto','291px','276px','auto','auto'],
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"contentArea",
            c:[
            {
               id:'content',
               type:'rect',
               rect:['0px','0px','auto','auto','auto','auto'],
               transform:[]
            }]
         },
         {
            id:'leftFrame',
            type:'rect',
            rect:['0px','0px','83px','100%','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'leftFrameBG',
               type:'rect',
               rect:['0px','1px','83px','100%','auto','auto'],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[2,"rgb(255, 255, 255)","none"]
            },
            {
               id:'leftFrame3',
               type:'image',
               rect:['0px','0px','81px','2000px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"leftFrame.png",'0px','0px']
            }]
         },
         {
            id:'sidebarResults',
            type:'rect',
            rect:['10','auto','auto','auto','auto','2px']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['1px','0px','960px','100%','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [
         {
            id:'content',
            symbolName:'content'
         },
         {
            id:'sidebarResults',
            symbolName:'sidebarResults'
         }
         ]
      },
   states: {
      "Base State": {
         "${_contentArea}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "bottom", 'auto'],
            ["style", "overflow", 'auto'],
            ["style", "height", '276px'],
            ["style", "top", 'auto'],
            ["style", "left", '252px'],
            ["style", "width", '291px']
         ],
         "${_leftFrameBG}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-style", 'none'],
            ["style", "height", '100%'],
            ["style", "width", '83px']
         ],
         "${_leftFrame}": [
            ["style", "overflow", 'hidden'],
            ["style", "width", '83px']
         ],
         "${_content}": [
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '960px'],
            ["style", "height", '100%'],
            ["style", "overflow", 'visible']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_sidebarResults}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '2px']
         ],
         "${_leftFrame3}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid449", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid448", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1000 }         ]
      }
   }
},
"content": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','880px','100%','auto','auto'],
      userClass: 'content',
      id: 'Background',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(123,170,175,1.00)']
   },
   {
      id: 'scene_results',
      type: 'rect',
      rect: ['13px','4577px','auto','auto','auto','auto']
   },
   {
      id: 'scene_inspect',
      type: 'rect',
      rect: ['0px','5518px','auto','auto','auto','auto']
   },
   {
      id: 'scene_code',
      type: 'rect',
      rect: ['0','4020px','auto','auto','auto','auto']
   },
   {
      id: 'scene_reflow',
      type: 'rect',
      rect: ['-136','3078','auto','auto','auto','auto']
   },
   {
      id: 'scene_animate',
      type: 'rect',
      rect: ['0','1680px','auto','auto','auto','auto']
   },
   {
      id: 'scene_intro',
      type: 'rect',
      rect: ['960','1774','auto','auto','auto','auto']
   },
   {
      id: 'introFade',
      type: 'rect',
      rect: ['0','670','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'scene_intro',
      symbolName: 'scene_intro'
   },
   {
      id: 'scene_inspect',
      symbolName: 'scene_inspect'
   },
   {
      id: 'scene_code',
      symbolName: 'scene_code'
   },
   {
      id: 'introFade',
      symbolName: 'introFade'
   },
   {
      id: 'scene_results',
      symbolName: 'scene_results'
   },
   {
      id: 'scene_reflow',
      symbolName: 'scene_reflow'
   },
   {
      id: 'scene_animate',
      symbolName: 'scene_animate'
   }   ]
   },
   states: {
      "Base State": {
         "${_scene_animate}": [
            ["style", "top", '970px']
         ],
         "${_scene_code}": [
            ["style", "top", '2910px']
         ],
         "${_scene_results}": [
            ["style", "left", '0px'],
            ["style", "top", '4850px']
         ],
         "${symbolSelector}": [
            ["style", "height", '8000px'],
            ["style", "width", '880px'],
            ["style", "overflow", 'hidden']
         ],
         "${_scene_intro}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_scene_reflow}": [
            ["style", "left", '0px'],
            ["style", "top", '1940px']
         ],
         "${_scene_inspect}": [
            ["style", "top", '3880px'],
            ["style", "left", '0px']
         ],
         "${_Background}": [
            ["style", "top", '0px'],
            ["style", "height", '100%'],
            ["color", "background-color", 'rgba(123,170,175,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '880px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
            { id: "eid362", tween: [ "style", "${_scene_animate}", "top", '970px', { fromValue: '970px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid367", tween: [ "style", "${_scene_code}", "top", '2910px', { fromValue: '2910px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid435", tween: [ "style", "${_scene_results}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutCubic" },
            { id: "eid371", tween: [ "style", "${_scene_inspect}", "top", '3880px', { fromValue: '3880px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid364", tween: [ "style", "${_scene_reflow}", "top", '1940px', { fromValue: '1940px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid163", tween: [ "style", "${_scene_reflow}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutCubic" },
            { id: "eid360", tween: [ "style", "${_scene_intro}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid437", tween: [ "style", "${_scene_results}", "top", '4850px', { fromValue: '4850px'}], position: 0, duration: 0, easing: "easeInOutCubic" },
            { id: "eid46", tween: [ "style", "${_scene_intro}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid240", tween: [ "style", "${_scene_inspect}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
      }
   }
},
"scene_intro": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'intro_background',
      type: 'image',
      rect: ['0px','0px','880px','670px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_background.jpg','0px','0px']
   },
   {
      rect: ['0px','540px','960px','130px','auto','auto'],
      id: 'Horizon',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.00)',[270,[['rgba(151,151,151,0.31)',0],['rgba(255,255,255,0.00)',100]]]]
   },
   {
      id: 'intro_icon',
      type: 'image',
      rect: ['56px','126px','127px','118px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_icon.png','0px','0px']
   },
   {
      id: 'intro_modernweb',
      type: 'image',
      rect: ['612px','204px','196px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_modernweb.png','0px','0px']
   },
   {
      id: 'intro_forthe',
      type: 'image',
      rect: ['612px','126px','196px','65px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_forthe.png','0px','0px']
   },
   {
      id: 'intro_speechbubble',
      type: 'image',
      rect: ['72px','299px','481px','149px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_speechbubble.png','0px','0px']
   },
   {
      id: 'intro_tools',
      type: 'image',
      rect: ['334px','109px','278px','152px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_tools.png','0px','0px']
   },
   {
      id: 'intro_theright',
      type: 'image',
      rect: ['206px','211px','125px','32px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_theright.png','0px','0px']
   },
   {
      id: 'intro_find',
      type: 'image',
      rect: ['208px','131px','121px','69px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_find.png','0px','0px']
   },
   {
      id: 'intro_host',
      type: 'image',
      rect: ['541px','224px','127px','432px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_host.png','0px','0px']
   },
   {
      id: 'scrollDownIcon2',
      type: 'rect',
      rect: ['398','573','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'scrollDownIcon2',
      symbolName: 'scrollDownIcon'
   }   ]
   },
   states: {
      "Base State": {
         "${_intro_find}": [
            ["style", "left", '-137px'],
            ["style", "top", '130px']
         ],
         "${_intro_speechbubble}": [
            ["style", "left", '-495px'],
            ["style", "top", '299px']
         ],
         "${_scrollDownIcon2}": [
            ["style", "opacity", '0']
         ],
         "${_Horizon}": [
            ["style", "top", '540px'],
            ["color", "background-color", 'rgba(255,255,255,0)'],
            ["style", "height", '130px'],
            ["gradient", "background-image", [270,[['rgba(151,151,151,0.31)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '2000px']
         ],
         "${_intro_theright}": [
            ["style", "left", '933px'],
            ["style", "top", '211px']
         ],
         "${_intro_host}": [
            ["style", "left", '892px'],
            ["style", "top", '224px']
         ],
         "${symbolSelector}": [
            ["style", "height", '670px'],
            ["style", "width", '880px']
         ],
         "${_intro_forthe}": [
            ["style", "top", '-74px'],
            ["style", "left", '622px']
         ],
         "${_intro_icon}": [
            ["style", "top", '126px'],
            ["style", "left", '-143px']
         ],
         "${_intro_modernweb}": [
            ["style", "left", '897px'],
            ["style", "top", '205px']
         ],
         "${_intro_tools}": [
            ["style", "top", '374px'],
            ["style", "opacity", '0'],
            ["style", "left", '342px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6250,
         autoPlay: true,
         timeline: [
            { id: "eid385", tween: [ "style", "${_intro_tools}", "top", '109px', { fromValue: '374px'}], position: 1250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid400", tween: [ "style", "${_scrollDownIcon2}", "opacity", '1', { fromValue: '0'}], position: 5750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid375", tween: [ "style", "${_intro_find}", "left", '208px', { fromValue: '-137px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid388", tween: [ "style", "${_intro_tools}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid398", tween: [ "style", "${_intro_speechbubble}", "left", '72px', { fromValue: '-495px'}], position: 3500, duration: 750, easing: "easeInOutQuad" },
            { id: "eid392", tween: [ "style", "${_intro_modernweb}", "left", '622px', { fromValue: '897px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid377", tween: [ "style", "${_intro_find}", "top", '131px', { fromValue: '130px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid380", tween: [ "style", "${symbolSelector}", "width", '880px', { fromValue: '880px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid381", tween: [ "style", "${symbolSelector}", "width", '880px', { fromValue: '880px'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid373", tween: [ "style", "${_intro_icon}", "left", '56px', { fromValue: '-143px'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid379", tween: [ "style", "${_intro_theright}", "left", '206px', { fromValue: '933px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid396", tween: [ "style", "${_intro_host}", "left", '545px', { fromValue: '892px'}], position: 3500, duration: 750, easing: "easeInOutQuad" },
            { id: "eid242", tween: [ "style", "${symbolSelector}", "height", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid391", tween: [ "style", "${_intro_forthe}", "top", '130px', { fromValue: '-74px'}], position: 1750, duration: 500, easing: "easeInOutQuad" }         ]
      }
   }
},
"scene_animate": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','960px','560px','auto','auto'],
      id: 'Area',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['0px','0px','2000px','560px','auto','auto'],
      id: 'container',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.00)'],
      c: [
      {
         rect: ['0px','660px','2000px','11px','auto','auto'],
         id: 'Floor',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(0,0,0,0.30)']
      },
      {
         rect: ['0px','500px','960px','130px','auto','auto'],
         id: 'Horizon',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,0.00)',[270,[['rgba(0,0,0,0.31)',0],['rgba(0,0,0,0.00)',100]]]]
      },
      {
         rect: ['1120px','0px','880px','670px','auto','auto'],
         id: 'details',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,0.00)'],
         c: [
         {
            rect: ['155px','248px','640px','26px','auto','auto'],
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal'],
            id: 'feature1',
            text: 'Be creative in a visual environment',
            align: 'left',
            type: 'text'
         },
         {
            rect: ['155px','297px','640px','auto','auto','auto'],
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal'],
            id: 'feature2',
            text: 'Create complex animations with Motion Paths',
            align: 'left',
            type: 'text'
         },
         {
            rect: ['155px','349px','640px','auto','auto','auto'],
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal'],
            id: 'feature3',
            text: 'Add Interactions using JavaScript + Animate API',
            align: 'left',
            type: 'text'
         },
         {
            rect: ['155px','401px','640px','auto','auto','auto'],
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal'],
            id: 'feature4',
            text: 'Publish to web and e-Publications (with Adobe InDesign CC)',
            align: 'left',
            type: 'text'
         },
         {
            rect: ['155px','453px','640px','auto','auto','auto'],
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal'],
            id: 'feature5',
            text: 'Use Extension Libraries (e.g. Edge Commons)',
            align: 'left',
            type: 'text'
         },
         {
            id: 'feature01',
            type: 'image',
            rect: ['99px','294px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/animate/feature01.png','0px','0px']
         },
         {
            id: 'feature02',
            type: 'image',
            rect: ['99px','243px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/animate/feature02.png','0px','0px']
         },
         {
            id: 'feature04',
            type: 'image',
            rect: ['99px','397px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/animate/feature04.png','0px','0px']
         },
         {
            id: 'feature05',
            type: 'image',
            rect: ['99px','448px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/animate/feature05.png','0px','0px']
         },
         {
            id: 'feature03',
            type: 'image',
            rect: ['99px','346px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/animate/feature03.png','0px','0px']
         },
         {
            id: 'speechbubble_b',
            type: 'image',
            rect: ['401px','36px','445px','166px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/animate/speechbubble_b.png','0px','0px']
         },
         {
            id: 'character_b3',
            type: 'image',
            rect: ['624px','155px','182px','446px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/animate/character_b.png','0px','0px']
         }]
      },
      {
         rect: ['0px','0px','880px','670px','auto','auto'],
         id: 'primary',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,0.00)'],
         c: [
         {
            id: 'assetFishtank',
            type: 'image',
            rect: ['741px','401px','105px','199px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/animate/assetFishtank.png','0px','0px']
         },
         {
            id: 'assetTable',
            type: 'image',
            rect: ['174px','438px','391px','163px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/animate/assetTable.png','0px','0px']
         },
         {
            id: 'assetPosterHTML5',
            type: 'image',
            rect: ['61px','177px','148px','206px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/animate/assetPosterHTML5.png','0px','0px']
         },
         {
            id: 'assetScreen',
            type: 'image',
            rect: ['231px','289px','206px','162px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/animate/assetScreen.png','0px','0px']
         },
         {
            id: 'assetTablet',
            type: 'image',
            rect: ['420px','340px','75px','110px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/animate/assetTablet.png','0px','0px']
         },
         {
            id: 'speechbubble_a',
            type: 'image',
            rect: ['49px','38px','781px','124px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/animate/speechbubble_a.png','0px','0px']
         },
         {
            id: 'character_a4',
            type: 'image',
            rect: ['500px','166px','260px','470px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/animate/character_a.png','0px','0px']
         },
         {
            id: 'btnYes',
            type: 'rect',
            rect: ['987px','454px','auto','auto','auto','auto']
         },
         {
            id: 'btnNo',
            type: 'rect',
            rect: ['135px','460px','auto','auto','auto','auto']
         },
         {
            id: 'assetLamp2',
            type: 'image',
            rect: ['83px','-291px','61px','386px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/assetLamp2.png','0px','0px']
         },
         {
            id: 'assetLamp2Copy',
            type: 'image',
            rect: ['741px','-291px','61px','386px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/assetLamp2.png','0px','0px']
         },
         {
            id: 'scrollDownIcon3',
            type: 'rect',
            rect: ['1518px','565','auto','auto','auto','auto']
         },
         {
            rect: ['0px','-300px','880px','10px','auto','auto'],
            id: 'lampConnec',
            stroke: [0,'rgb(0, 0, 0)','none'],
            type: 'rect',
            fill: ['rgba(255,43,93,1.00)']
         }]
      }]
   }],
   symbolInstances: [
   {
      id: 'btnNo',
      symbolName: 'btnNope'
   },
   {
      id: 'scrollDownIcon3',
      symbolName: 'scrollDownIcon'
   },
   {
      id: 'btnYes',
      symbolName: 'btnAbsolutely'
   }   ]
   },
   states: {
      "Base State": {
         "${_btnYes}": [
            ["style", "left", '880px'],
            ["style", "top", '580px']
         ],
         "${_assetScreen}": [
            ["style", "top", '289px'],
            ["style", "opacity", '0'],
            ["style", "left", '231px']
         ],
         "${_feature02}": [
            ["style", "left", '99px'],
            ["style", "top", '243px']
         ],
         "${_scrollDownIcon3}": [
            ["style", "top", '577px'],
            ["style", "opacity", '0'],
            ["style", "left", '1518px']
         ],
         "${_assetLamp2Copy}": [
            ["style", "left", '741px'],
            ["style", "top", '-291px']
         ],
         "${_feature4}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '155px'],
            ["style", "font-size", '26px'],
            ["style", "top", '401px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_feature01}": [
            ["style", "left", '99px'],
            ["style", "top", '294px']
         ],
         "${_speechbubble_b}": [
            ["style", "top", '36px'],
            ["style", "left", '401px']
         ],
         "${_character_a4}": [
            ["style", "top", '166px'],
            ["style", "opacity", '0'],
            ["style", "left", '500px']
         ],
         "${_feature5}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '155px'],
            ["style", "font-size", '26px'],
            ["style", "top", '453px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_Horizon}": [
            ["style", "top", '500px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '130px'],
            ["gradient", "background-image", [270,[['rgba(0,0,0,0.31)',0],['rgba(0,0,0,0.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '2000px']
         ],
         "${_feature1}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '155px'],
            ["style", "font-size", '26px'],
            ["style", "top", '248px'],
            ["style", "text-align", 'left'],
            ["style", "height", '26px'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_feature04}": [
            ["style", "left", '99px'],
            ["style", "top", '397px']
         ],
         "${_feature03}": [
            ["style", "left", '99px'],
            ["style", "top", '346px']
         ],
         "${_assetTable}": [
            ["style", "top", '438px'],
            ["style", "opacity", '0'],
            ["style", "left", '174px']
         ],
         "${symbolSelector}": [
            ["style", "height", '670px'],
            ["style", "width", '880px']
         ],
         "${_Floor}": [
            ["color", "background-color", 'rgba(0,0,0,0.30)'],
            ["style", "top", '660px'],
            ["style", "width", '2000px']
         ],
         "${_container}": [
            ["style", "height", '560px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '2000px']
         ],
         "${_btnNo}": [
            ["style", "top", '580px'],
            ["style", "left", '-220px']
         ],
         "${_feature2}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '155px'],
            ["style", "font-size", '26px'],
            ["style", "top", '297px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_assetTablet}": [
            ["style", "top", '340px'],
            ["style", "opacity", '0'],
            ["style", "left", '420px']
         ],
         "${_speechbubble_a}": [
            ["style", "left", '901px'],
            ["style", "top", '38px']
         ],
         "${_character_b3}": [
            ["style", "left", '624px'],
            ["style", "top", '155px']
         ],
         "${_lampConnec}": [
            ["style", "top", '-300px'],
            ["color", "background-color", 'rgba(255,43,93,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '10px']
         ],
         "${_assetFishtank}": [
            ["style", "left", '888px'],
            ["style", "top", '401px']
         ],
         "${_assetPosterHTML5}": [
            ["style", "left", '-167px'],
            ["style", "top", '177px']
         ],
         "${_feature05}": [
            ["style", "left", '99px'],
            ["style", "top", '448px']
         ],
         "${_details}": [
            ["style", "top", '0px'],
            ["style", "height", '670px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '1120px'],
            ["style", "width", '880px']
         ],
         "${_primary}": [
            ["style", "top", '0px'],
            ["style", "height", '670px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '880px']
         ],
         "${_Area}": [
            ["style", "top", '0px'],
            ["style", "height", '560px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '960px']
         ],
         "${_assetLamp2}": [
            ["style", "left", '83px'],
            ["style", "top", '-291px']
         ],
         "${_feature3}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '155px'],
            ["style", "font-size", '26px'],
            ["style", "top", '349px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13250,
         autoPlay: false,
         labels: {
            "details": 10000
         },
         timeline: [
            { id: "eid404", tween: [ "style", "${_scrollDownIcon3}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 250, easing: "easeInOutQuad" },
            { id: "eid219", tween: [ "style", "${_speechbubble_a}", "left", '49px', { fromValue: '901px'}], position: 1500, duration: 1000, easing: "easeOutBack" },
            { id: "eid283", tween: [ "style", "${_btnNo}", "left", '219px', { fromValue: '-220px'}], position: 3000, duration: 500, easing: "easeOutQuint" },
            { id: "eid124", tween: [ "style", "${_container}", "left", '-1120px', { fromValue: '0px'}], position: 10000, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid225", tween: [ "style", "${_assetTable}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
            { id: "eid221", tween: [ "style", "${_assetPosterHTML5}", "left", '61px', { fromValue: '-167px'}], position: 0, duration: 750, easing: "easeOutBack" },
            { id: "eid333", tween: [ "style", "${_character_a4}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 750, easing: "easeOutBack" },
            { id: "eid140", tween: [ "style", "${symbolSelector}", "width", '880px', { fromValue: '880px'}], position: 0, duration: 0 },
            { id: "eid141", tween: [ "style", "${symbolSelector}", "width", '880px', { fromValue: '880px'}], position: 2000, duration: 0 },
            { id: "eid229", tween: [ "style", "${_assetTablet}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeOutBack" },
            { id: "eid223", tween: [ "style", "${_assetFishtank}", "left", '741px', { fromValue: '888px'}], position: 0, duration: 750, easing: "easeOutBack" },
            { id: "eid227", tween: [ "style", "${_assetScreen}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
            { id: "eid126", tween: [ "style", "${symbolSelector}", "height", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid149", tween: [ "style", "${_btnYes}", "left", '441px', { fromValue: '880px'}], position: 3000, duration: 500, easing: "easeOutQuart" }         ]
      }
   }
},
"btnAbsolutely": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['auto','auto','220px','80px','0px','10px'],
      id: 'Rectangle2',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)'],
      c: [
      {
         rect: ['auto','auto','220px','10px','0px','-10px'],
         id: 'marker',
         stroke: [0,'rgb(255, 255, 255)','solid'],
         type: 'rect',
         fill: ['rgba(93,89,158,1.00)']
      },
      {
         rect: ['auto','auto','220px','39px','0px','21px'],
         font: ['source-sans-pro, sans-serif',32,'rgba(0,0,0,1.00)','bold','none','normal'],
         id: 'Text3',
         text: 'Absolutely.',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['0px','0px','220px','90px','auto','auto'],
      type: 'rect',
      id: 'hotspot',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hotspot}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '220px']
         ],
         "${_Text3}": [
            ["style", "bottom", '21px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '32px'],
            ["style", "top", 'auto'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "width", '220px'],
            ["style", "right", '0px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "bottom", '10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '220px'],
            ["style", "top", 'auto'],
            ["style", "height", '80px'],
            ["style", "cursor", 'auto'],
            ["style", "left", 'auto'],
            ["style", "right", '0px']
         ],
         "${_marker}": [
            ["color", "background-color", 'rgba(93,89,158,1.00)'],
            ["style", "bottom", '-10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '220px'],
            ["style", "top", 'auto'],
            ["style", "height", '10px'],
            ["style", "left", 'auto'],
            ["style", "right", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         timeline: [
            { id: "eid68", tween: [ "color", "${_Text3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid67", tween: [ "style", "${_marker}", "height", '90px', { fromValue: '10px'}], position: 0, duration: 250, easing: "easeInOutCubic" }         ]
      }
   }
},
"btnNope": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['auto','auto','220px','80px','0px','10px'],
      id: 'Rectangle2',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)'],
      c: [
      {
         rect: ['auto','auto','220px','10px','0px','-10px'],
         id: 'marker',
         stroke: [0,'rgb(255, 255, 255)','solid'],
         type: 'rect',
         fill: ['rgba(150,150,150,1.00)']
      },
      {
         rect: ['auto','auto','220px','39px','0px','21px'],
         font: ['source-sans-pro, sans-serif',32,'rgba(0,0,0,1.00)','bold','none','normal'],
         id: 'Text3',
         text: 'Nope.',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['0px','0px','220px','90px','auto','auto'],
      type: 'rect',
      id: 'hotspot',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hotspot}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '220px']
         ],
         "${_Text3}": [
            ["style", "bottom", '21px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '32px'],
            ["style", "top", 'auto'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "right", '0px'],
            ["style", "width", '220px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "bottom", '10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '220px'],
            ["style", "top", 'auto'],
            ["style", "height", '80px'],
            ["style", "right", '0px'],
            ["style", "left", 'auto'],
            ["style", "cursor", 'auto']
         ],
         "${_marker}": [
            ["color", "background-color", 'rgba(150,150,150,1.00)'],
            ["style", "bottom", '-10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '220px'],
            ["style", "top", 'auto'],
            ["style", "height", '10px'],
            ["style", "right", '0px'],
            ["style", "left", 'auto']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         timeline: [
            { id: "eid68", tween: [ "color", "${_Text3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid67", tween: [ "style", "${_marker}", "height", '90px', { fromValue: '10px'}], position: 0, duration: 250, easing: "easeInOutCubic" }         ]
      }
   }
},
"scene_reflow": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Area',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','960px','560px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'rect',
      id: 'container',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','2000px','560px','auto','auto'],
      fill: ['rgba(255,255,255,0.00)'],
      c: [
      {
         type: 'rect',
         id: 'Floor',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['0px','660px','2000px','11px','auto','auto'],
         fill: ['rgba(0,0,0,0.30)']
      },
      {
         type: 'rect',
         id: 'Horizon',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['0px','500px','960px','130px','auto','auto'],
         fill: ['rgba(255,255,255,0.00)',[270,[['rgba(0,0,0,0.31)',0],['rgba(0,0,0,0.00)',100]]]]
      },
      {
         type: 'rect',
         id: 'details',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['1120px','0px','880px','670px','auto','auto'],
         fill: ['rgba(255,255,255,0.00)'],
         c: [
         {
            id: 'speechbubble_b',
            type: 'image',
            rect: ['378px','40px','445px','166px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/reflow/speechbubble_b.png','0px','0px']
         },
         {
            id: 'character_b4',
            type: 'image',
            rect: ['549px','122px','266px','498px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/reflow/character_b.png','0px','0px']
         },
         {
            type: 'text',
            rect: ['151px','448px','640px','26px','auto','auto'],
            id: 'feature1',
            text: 'Inspect your work on multiple devices easily',
            align: 'left',
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal']
         },
         {
            type: 'text',
            rect: ['151px','243px','640px','auto','auto','auto'],
            id: 'feature2',
            text: 'Create responsive designs with fluid grids',
            align: 'left',
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal']
         },
         {
            type: 'text',
            rect: ['151px','344px','640px','auto','auto','auto'],
            id: 'feature3',
            text: 'Connect to photoshop for a seamless workflow',
            align: 'left',
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal']
         },
         {
            type: 'text',
            rect: ['151px','395px','640px','auto','auto','auto'],
            id: 'feature4',
            text: 'Create multiple pages',
            align: 'left',
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal']
         },
         {
            type: 'text',
            rect: ['151px','294px','640px','auto','auto','auto'],
            id: 'feature5',
            text: 'Add breakpoints/media queries with a single click',
            align: 'left',
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal']
         },
         {
            id: 'RfFeature1',
            type: 'image',
            rect: ['99px','240px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/reflow/RfFeature1.png','0px','0px']
         },
         {
            id: 'RfFeature2',
            type: 'image',
            rect: ['99px','291px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/reflow/RfFeature2.png','0px','0px']
         },
         {
            id: 'RfFeature3',
            type: 'image',
            rect: ['99px','342px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/reflow/RfFeature3.png','0px','0px']
         },
         {
            id: 'RfFeature4',
            type: 'image',
            rect: ['99px','393px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/reflow/RfFeature4.png','0px','0px']
         },
         {
            id: 'RfFeature5',
            type: 'image',
            rect: ['99px','444px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/reflow/RfFeature5.png','0px','0px']
         },
         {
            id: 'scrollDownIcon',
            type: 'rect',
            rect: ['-722px','596','auto','auto','auto','auto']
         }]
      },
      {
         type: 'rect',
         id: 'primary',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['0px','0px','880px','670px','auto','auto'],
         fill: ['rgba(255,255,255,0.00)'],
         c: [
         {
            id: 'speechbubble_a2',
            type: 'image',
            rect: ['49px','40px','781px','126px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/reflow/speechbubble_a.png','0px','0px']
         },
         {
            id: 'assetTableWithBoxes',
            type: 'image',
            rect: ['250px','396px','592px','219px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/reflow/assetTableWithBoxes.png','0px','0px']
         },
         {
            id: 'assetTablet2',
            type: 'image',
            rect: ['540px','316px','75px','110px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/reflow/assetTablet.png','0px','0px']
         },
         {
            id: 'character_a5',
            type: 'image',
            rect: ['91px','122px','215px','498px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/reflow/character_a.png','0px','0px']
         },
         {
            id: 'assetLaptop',
            type: 'image',
            rect: ['328px','291px','191px','135px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/reflow/assetLaptop.png','0px','0px']
         },
         {
            id: 'assetSmartphone',
            type: 'image',
            rect: ['640px','327px','49px','99px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/reflow/assetSmartphone.png','0px','0px']
         },
         {
            id: 'assetFlower',
            type: 'image',
            rect: ['742px','352px','49px','74px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/reflow/assetFlower.png','0px','0px']
         },
         {
            id: 'btnRfNo',
            type: 'rect',
            rect: ['-22px','500px','auto','auto','auto','auto']
         },
         {
            id: 'btnYes',
            type: 'rect',
            rect: ['922px','416px','auto','auto','auto','auto']
         },
         {
            id: 'assetLamp3',
            type: 'image',
            rect: ['91px','-300px','65px','391px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/assetLamp3.png','0px','0px']
         },
         {
            id: 'assetLamp3Copy',
            type: 'image',
            rect: ['726px','-300px','65px','391px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/assetLamp3.png','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   {
      id: 'btnRfNo',
      symbolName: 'btnRfNo'
   },
   {
      id: 'btnYes',
      symbolName: 'btnRfYes'
   },
   {
      id: 'scrollDownIcon',
      symbolName: 'scrollDownIcon'
   }   ]
   },
   states: {
      "Base State": {
         "${_btnYes}": [
            ["style", "left", '880px'],
            ["style", "top", '580px']
         ],
         "${_RfFeature3}": [
            ["style", "left", '99px'],
            ["style", "top", '342px']
         ],
         "${_RfFeature1}": [
            ["style", "left", '99px'],
            ["style", "top", '240px']
         ],
         "${_RfFeature4}": [
            ["style", "left", '99px'],
            ["style", "top", '393px']
         ],
         "${_assetTablet2}": [
            ["style", "top", '180px'],
            ["style", "opacity", '0'],
            ["style", "left", '540px']
         ],
         "${_assetSmartphone}": [
            ["style", "top", '191px'],
            ["style", "opacity", '0'],
            ["style", "left", '640px']
         ],
         "${_assetLamp3}": [
            ["style", "left", '91px'],
            ["style", "top", '-300px']
         ],
         "${_scrollDownIcon}": [
            ["style", "top", '577px'],
            ["style", "opacity", '0'],
            ["style", "left", '430px']
         ],
         "${_RfFeature5}": [
            ["style", "left", '99px'],
            ["style", "top", '444px']
         ],
         "${_feature4}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", '100'],
            ["style", "left", '151px'],
            ["style", "font-size", '26px'],
            ["style", "top", '395px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_character_a5}": [
            ["style", "left", '-218px'],
            ["style", "top", '122px']
         ],
         "${_assetFlower}": [
            ["style", "left", '890px'],
            ["style", "top", '352px']
         ],
         "${_Area}": [
            ["style", "top", '0px'],
            ["style", "height", '560px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '960px']
         ],
         "${_assetLaptop}": [
            ["style", "top", '155px'],
            ["style", "opacity", '0'],
            ["style", "left", '328px']
         ],
         "${_speechbubble_b}": [
            ["style", "left", '378px'],
            ["style", "top", '40px']
         ],
         "${_feature1}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", '100'],
            ["style", "left", '151px'],
            ["style", "font-size", '26px'],
            ["style", "top", '448px'],
            ["style", "text-align", 'left'],
            ["style", "height", '26px'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_primary}": [
            ["style", "top", '0px'],
            ["style", "height", '670px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '880px']
         ],
         "${_feature3}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", '100'],
            ["style", "left", '151px'],
            ["style", "font-size", '26px'],
            ["style", "top", '344px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_character_b4}": [
            ["style", "left", '549px'],
            ["style", "top", '122px']
         ],
         "${_Floor}": [
            ["style", "top", '660px'],
            ["color", "background-color", 'rgba(0,0,0,0.2969)'],
            ["style", "width", '2000px']
         ],
         "${_container}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '560px'],
            ["style", "left", '0px'],
            ["style", "width", '2000px']
         ],
         "${_Horizon}": [
            ["style", "top", '500px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '130px'],
            ["gradient", "background-image", [270,[['rgba(0,0,0,0.31)',0],['rgba(0,0,0,0.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '2000px']
         ],
         "${_assetTableWithBoxes}": [
            ["style", "left", '889px'],
            ["style", "top", '396px']
         ],
         "${_speechbubble_a2}": [
            ["style", "left", '896px'],
            ["style", "top", '40px']
         ],
         "${_assetLamp3Copy}": [
            ["style", "top", '-300px'],
            ["style", "left", '726px']
         ],
         "${_feature2}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", '100'],
            ["style", "left", '151px'],
            ["style", "font-size", '26px'],
            ["style", "top", '243px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_feature5}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", '100'],
            ["style", "left", '151px'],
            ["style", "font-size", '26px'],
            ["style", "top", '294px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_details}": [
            ["style", "top", '0px'],
            ["style", "height", '670px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '1120px'],
            ["style", "width", '880px']
         ],
         "${_RfFeature2}": [
            ["style", "left", '99px'],
            ["style", "top", '291px']
         ],
         "${symbolSelector}": [
            ["style", "height", '670px'],
            ["style", "width", '880px']
         ],
         "${_btnRfNo}": [
            ["style", "left", '-220px'],
            ["style", "top", '580px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13250,
         autoPlay: false,
         labels: {
            "details": 10000
         },
         timeline: [
            { id: "eid304", tween: [ "style", "${_btnRfNo}", "top", '580px', { fromValue: '580px'}], position: 4000, duration: 0, easing: "easeInOutCubic" },
            { id: "eid305", tween: [ "style", "${_btnRfNo}", "top", '580px', { fromValue: '580px'}], position: 4500, duration: 0, easing: "easeInOutCubic" },
            { id: "eid445", tween: [ "style", "${_scrollDownIcon}", "left", '430px', { fromValue: '430px'}], position: 13000, duration: 0 },
            { id: "eid197", tween: [ "style", "${_assetTablet2}", "top", '316px', { fromValue: '180px'}], position: 1750, duration: 500, easing: "easeOutBounce" },
            { id: "eid207", tween: [ "style", "${_assetSmartphone}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutBounce" },
            { id: "eid203", tween: [ "style", "${_assetTablet2}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutBounce" },
            { id: "eid124", tween: [ "style", "${_container}", "left", '-1120px', { fromValue: '0px'}], position: 10000, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid140", tween: [ "style", "${symbolSelector}", "width", '880px', { fromValue: '880px'}], position: 0, duration: 0 },
            { id: "eid141", tween: [ "style", "${symbolSelector}", "width", '880px', { fromValue: '880px'}], position: 2000, duration: 0 },
            { id: "eid302", tween: [ "style", "${_btnYes}", "top", '580px', { fromValue: '580px'}], position: 4000, duration: 0, easing: "easeInOutCubic" },
            { id: "eid303", tween: [ "style", "${_btnYes}", "top", '580px', { fromValue: '580px'}], position: 4500, duration: 0, easing: "easeInOutCubic" },
            { id: "eid213", tween: [ "style", "${_speechbubble_a2}", "left", '49px', { fromValue: '896px'}], position: 0, duration: 1000, easing: "easeOutQuart" },
            { id: "eid201", tween: [ "style", "${_assetSmartphone}", "top", '327px', { fromValue: '191px'}], position: 2000, duration: 500, easing: "easeOutBounce" },
            { id: "eid295", tween: [ "style", "${_btnRfNo}", "left", '218px', { fromValue: '-220px'}], position: 4000, duration: 500, easing: "easeInOutCubic" },
            { id: "eid205", tween: [ "style", "${_assetLaptop}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500, easing: "easeOutBounce" },
            { id: "eid211", tween: [ "style", "${_character_a5}", "left", '91px', { fromValue: '-218px'}], position: 0, duration: 1000, easing: "easeOutQuart" },
            { id: "eid195", tween: [ "style", "${_assetTableWithBoxes}", "left", '250px', { fromValue: '889px'}], position: 1000, duration: 500, easing: "easeOutQuart" },
            { id: "eid426", tween: [ "style", "${_scrollDownIcon}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 250, easing: "easeInOutQuad" },
            { id: "eid209", tween: [ "style", "${_assetFlower}", "left", '742px', { fromValue: '890px'}], position: 3000, duration: 750, easing: "easeOutBack" },
            { id: "eid199", tween: [ "style", "${_assetLaptop}", "top", '291px', { fromValue: '155px'}], position: 1500, duration: 500, easing: "easeOutBounce" },
            { id: "eid126", tween: [ "style", "${symbolSelector}", "height", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid299", tween: [ "style", "${_btnYes}", "left", '441px', { fromValue: '880px'}], position: 4000, duration: 500, easing: "easeInOutCubic" }         ]
      }
   }
},
"scene_code": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','960px','560px','auto','auto'],
      id: 'Area',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['0px','0px','2000px','560px','auto','auto'],
      id: 'container',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.00)'],
      c: [
      {
         rect: ['0px','660px','2000px','11px','auto','auto'],
         id: 'Floor',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(0,0,0,0.30)']
      },
      {
         rect: ['0px','500px','960px','130px','auto','auto'],
         id: 'Horizon',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,0.00)',[270,[['rgba(0,0,0,0.31)',0],['rgba(0,0,0,0.00)',100]]]]
      },
      {
         rect: ['1120px','0px','880px','670px','auto','auto'],
         id: 'details',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,0.00)'],
         c: [
         {
            rect: ['455px','451px','640px','26px','auto','auto'],
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal'],
            id: 'feature1',
            text: 'Core is open source (aka brackets)',
            align: 'left',
            type: 'text'
         },
         {
            rect: ['455px','246px','640px','auto','auto','auto'],
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal'],
            id: 'feature2',
            text: 'Optimized for frontend development',
            align: 'left',
            type: 'text'
         },
         {
            rect: ['455px','347px','640px','auto','auto','auto'],
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal'],
            id: 'feature3',
            text: 'Big pool of extensions',
            align: 'left',
            type: 'text'
         },
         {
            rect: ['455px','398px','640px','auto','auto','auto'],
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal'],
            id: 'feature4',
            text: 'Built with webstandards =&gt; easy to extend',
            align: 'left',
            type: 'text'
         },
         {
            rect: ['455px','297px','640px','auto','auto','auto'],
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal'],
            id: 'feature5',
            text: 'Inline CSS Editing + live browser preview',
            align: 'left',
            type: 'text'
         },
         {
            id: 'CoFeature1',
            type: 'image',
            rect: ['404px','241px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/code/CoFeature1.png','0px','0px']
         },
         {
            id: 'CoFeature2',
            type: 'image',
            rect: ['404px','292px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/code/CoFeature2.png','0px','0px']
         },
         {
            id: 'CoFeature3',
            type: 'image',
            rect: ['404px','343px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/code/CoFeature3.png','0px','0px']
         },
         {
            id: 'CoFeature4',
            type: 'image',
            rect: ['404px','394px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/code/CoFeature4.png','0px','0px']
         },
         {
            id: 'CoFeature5',
            type: 'image',
            rect: ['404px','448px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/code/CoFeature5.png','0px','0px']
         },
         {
            id: 'speechbubble_b2',
            type: 'image',
            rect: ['39px','33px','495px','166px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/code/speechbubble_b.png','0px','0px']
         },
         {
            id: 'character_b',
            type: 'image',
            rect: ['49px','123px','213px','497px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/code/character_b.png','0px','0px']
         },
         {
            id: 'scrollDownIcon2',
            type: 'rect',
            rect: ['404','596','auto','auto','auto','auto']
         }]
      },
      {
         rect: ['0px','0px','880px','670px','auto','auto'],
         id: 'primary',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,0.00)'],
         c: [
         {
            id: 'assetBackground',
            type: 'image',
            rect: ['48px','171px','849px','277px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/code/assetBackground.png','0px','0px']
         },
         {
            id: 'speechbubble_a',
            type: 'image',
            rect: ['29px','36px','781px','124px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/code/speechbubble_a.png','0px','0px']
         },
         {
            id: 'character_a',
            type: 'image',
            rect: ['558px','116px','213px','497px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/code/character_a.png','0px','0px']
         },
         {
            id: 'btnCoNo',
            type: 'rect',
            rect: ['287px','505px','auto','auto','auto','auto']
         },
         {
            id: 'btnCoYes',
            type: 'rect',
            rect: ['558px','550px','auto','auto','auto','auto']
         },
         {
            id: 'assetLamp3',
            type: 'image',
            rect: ['733px','-300px','66px','449px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/assetLamp.png','0px','0px']
         },
         {
            id: 'assetLamp3Copy2',
            type: 'image',
            rect: ['48px','-300px','66px','449px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/assetLamp.png','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   {
      id: 'btnCoNo',
      symbolName: 'btnCoNo'
   },
   {
      id: 'btnCoYes',
      symbolName: 'btnCoYes'
   },
   {
      id: 'scrollDownIcon2',
      symbolName: 'scrollDownIcon'
   }   ]
   },
   states: {
      "Base State": {
         "${_assetBackground}": [
            ["style", "left", '888px'],
            ["style", "top", '174px']
         ],
         "${_scrollDownIcon2}": [
            ["style", "top", '577px'],
            ["style", "opacity", '0'],
            ["style", "left", '398px']
         ],
         "${_btnCoNo}": [
            ["style", "left", '880px'],
            ["style", "top", '580px']
         ],
         "${_CoFeature1}": [
            ["style", "left", '404px'],
            ["style", "top", '241px']
         ],
         "${_Area}": [
            ["style", "top", '0px'],
            ["style", "height", '560px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '960px']
         ],
         "${_feature4}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '455px'],
            ["style", "font-size", '26px'],
            ["style", "top", '398px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${symbolSelector}": [
            ["style", "height", '670px'],
            ["style", "width", '880px']
         ],
         "${_Floor}": [
            ["style", "top", '660px'],
            ["color", "background-color", 'rgba(0,0,0,0.2969)'],
            ["style", "width", '2000px']
         ],
         "${_container}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '560px'],
            ["style", "left", '0px'],
            ["style", "width", '2000px']
         ],
         "${_character_a}": [
            ["style", "left", '-227px'],
            ["style", "top", '123px']
         ],
         "${_CoFeature4}": [
            ["style", "left", '404px'],
            ["style", "top", '395px']
         ],
         "${_speechbubble_b2}": [
            ["style", "left", '39px'],
            ["style", "top", '33px']
         ],
         "${_CoFeature3}": [
            ["style", "left", '404px'],
            ["style", "top", '343px']
         ],
         "${_feature3}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '455px'],
            ["style", "font-size", '26px'],
            ["style", "top", '347px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_feature5}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '455px'],
            ["style", "font-size", '26px'],
            ["style", "top", '297px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_btnCoYes}": [
            ["style", "left", '-220px'],
            ["style", "top", '580px']
         ],
         "${_speechbubble_a}": [
            ["style", "left", '-797px'],
            ["style", "top", '33px']
         ],
         "${_Horizon}": [
            ["style", "top", '500px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '130px'],
            ["gradient", "background-image", [270,[['rgba(0,0,0,0.31)',0],['rgba(0,0,0,0.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '2000px']
         ],
         "${_feature1}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '455px'],
            ["style", "font-size", '26px'],
            ["style", "top", '451px'],
            ["style", "text-align", 'left'],
            ["style", "height", '26px'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_CoFeature5}": [
            ["style", "left", '404px'],
            ["style", "top", '448px']
         ],
         "${_character_b}": [
            ["style", "left", '49px'],
            ["style", "top", '123px']
         ],
         "${_assetLamp3}": [
            ["style", "top", '-300px'],
            ["style", "left", '733px']
         ],
         "${_feature2}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '455px'],
            ["style", "font-size", '26px'],
            ["style", "top", '246px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_details}": [
            ["style", "top", '0px'],
            ["style", "height", '670px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '1120px'],
            ["style", "width", '880px']
         ],
         "${_primary}": [
            ["style", "top", '0px'],
            ["style", "height", '670px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '880px']
         ],
         "${_assetLamp3Copy2}": [
            ["style", "top", '-300px'],
            ["style", "left", '48px']
         ],
         "${_CoFeature2}": [
            ["style", "left", '404px'],
            ["style", "top", '292px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13250,
         autoPlay: false,
         labels: {
            "details": 10000
         },
         timeline: [
            { id: "eid330", tween: [ "style", "${_btnCoYes}", "left", '219px', { fromValue: '-220px'}], position: 4500, duration: 500, easing: "easeInOutCubic" },
            { id: "eid430", tween: [ "style", "${_scrollDownIcon2}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 250, easing: "easeInOutQuad" },
            { id: "eid331", tween: [ "style", "${_btnCoNo}", "left", '441px', { fromValue: '880px'}], position: 4500, duration: 500, easing: "easeInOutCubic" },
            { id: "eid418", tween: [ "style", "${_CoFeature4}", "top", '395px', { fromValue: '395px'}], position: 12000, duration: 0 },
            { id: "eid124", tween: [ "style", "${_container}", "left", '-1120px', { fromValue: '0px'}], position: 10000, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid179", tween: [ "style", "${_character_a}", "left", '897px', { fromValue: '-227px'}], position: 750, duration: 750, easing: "easeOutQuad" },
            { id: "eid182", tween: [ "style", "${_character_a}", "left", '558px', { fromValue: '897px'}], position: 1500, duration: 2750, easing: "easeOutElastic" },
            { id: "eid187", tween: [ "style", "${_assetBackground}", "left", '48px', { fromValue: '888px'}], position: 0, duration: 750, easing: "easeOutBack" },
            { id: "eid140", tween: [ "style", "${symbolSelector}", "width", '880px', { fromValue: '880px'}], position: 0, duration: 0 },
            { id: "eid141", tween: [ "style", "${symbolSelector}", "width", '880px', { fromValue: '880px'}], position: 2000, duration: 0 },
            { id: "eid193", tween: [ "style", "${_speechbubble_a}", "top", '36px', { fromValue: '33px'}], position: 3500, duration: 500, easing: "easeOutQuart" },
            { id: "eid191", tween: [ "style", "${_speechbubble_a}", "left", '29px', { fromValue: '-797px'}], position: 3500, duration: 500, easing: "easeOutQuart" },
            { id: "eid181", tween: [ "style", "${_character_a}", "top", '114px', { fromValue: '123px'}], position: 750, duration: 750, easing: "easeOutBack" },
            { id: "eid183", tween: [ "style", "${_character_a}", "top", '116px', { fromValue: '114px'}], position: 1500, duration: 2750, easing: "easeOutBack" },
            { id: "eid126", tween: [ "style", "${symbolSelector}", "height", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid189", tween: [ "style", "${_assetBackground}", "top", '171px', { fromValue: '174px'}], position: 0, duration: 750, easing: "easeOutBack" }         ]
      }
   }
},
"scene_inspect": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','960px','560px','auto','auto'],
      id: 'Area',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['0px','0px','2000px','560px','auto','auto'],
      id: 'container',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.00)'],
      c: [
      {
         rect: ['0px','660px','2000px','11px','auto','auto'],
         id: 'Floor',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(0,0,0,0.30)']
      },
      {
         rect: ['0px','500px','960px','130px','auto','auto'],
         id: 'Horizon',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,0.00)',[270,[['rgba(0,0,0,0.31)',0],['rgba(0,0,0,0.00)',100]]]]
      },
      {
         rect: ['1120px','0px','880px','670px','auto','auto'],
         id: 'details',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,0.00)'],
         c: [
         {
            rect: ['120px','451px','640px','26px','auto','auto'],
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal'],
            id: 'feature1',
            text: 'Integrated into Adobe Edge Reflow CC',
            align: 'left',
            type: 'text'
         },
         {
            rect: ['120px','246px','640px','auto','auto','auto'],
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal'],
            id: 'feature2',
            text: 'Synchronized browsing and refreshing',
            align: 'left',
            type: 'text'
         },
         {
            rect: ['120px','347px','640px','auto','auto','auto'],
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal'],
            id: 'feature3',
            text: 'Remote inspection',
            align: 'left',
            type: 'text'
         },
         {
            rect: ['120px','398px','640px','auto','auto','auto'],
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal'],
            id: 'feature4',
            text: 'Taking multiple Screenshots without touching devices',
            align: 'left',
            type: 'text'
         },
         {
            rect: ['120px','297px','640px','auto','auto','auto'],
            font: ['amatic-sc, sans-serif',26,'rgba(255,255,255,1.00)','100','none','normal'],
            id: 'feature5',
            text: 'Wirelessly pair multiple devices to your computer',
            align: 'left',
            type: 'text'
         },
         {
            id: 'InFeature1',
            type: 'image',
            rect: ['67px','294px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/inspect/InFeature1.png','0px','0px']
         },
         {
            id: 'InFeature2',
            type: 'image',
            rect: ['67px','243px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/inspect/InFeature2.png','0px','0px']
         },
         {
            id: 'InFeature3',
            type: 'image',
            rect: ['67px','394px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/inspect/InFeature3.png','0px','0px']
         },
         {
            id: 'InFeature5',
            type: 'image',
            rect: ['67px','447px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/inspect/InFeature5.png','0px','0px']
         },
         {
            id: 'InFeature4',
            type: 'image',
            rect: ['67px','343px','40px','40px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/inspect/InFeature4.png','0px','0px']
         },
         {
            id: 'speechbubble_b3',
            type: 'image',
            rect: ['330px','29px','445px','166px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/inspect/speechbubble_b.png','0px','0px']
         },
         {
            id: 'character_b2',
            type: 'image',
            rect: ['645px','145px','130px','475px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/inspect/character_b.png','0px','0px']
         },
         {
            id: 'scrollDownIcon3',
            type: 'rect',
            rect: ['344px','534px','auto','auto','auto','auto']
         }]
      },
      {
         rect: ['0px','0px','880px','670px','auto','auto'],
         id: 'primary',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,0.00)'],
         c: [
         {
            id: 'assetDevices',
            type: 'image',
            rect: ['353px','148px','436px','413px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/inspect/assetDevices.png','0px','0px']
         },
         {
            id: 'speechbubble_a2',
            type: 'image',
            rect: ['33px','24px','781px','124px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/inspect/speechbubble_a.png','0px','0px']
         },
         {
            id: 'character_a2',
            type: 'image',
            rect: ['89px','105px','210px','475px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/inspect/character_a.png','0px','0px']
         },
         {
            id: 'btnInNo',
            type: 'rect',
            rect: ['-26px','464px','auto','auto','auto','auto']
         },
         {
            id: 'btnInYes',
            type: 'rect',
            rect: ['902px','554px','auto','auto','auto','auto']
         },
         {
            id: 'assetLamp32',
            type: 'image',
            rect: ['698','-300px','65px','391px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/assetLamp3.png','0px','0px']
         },
         {
            id: 'assetLamp32Copy',
            type: 'image',
            rect: ['81px','-300px','65px','391px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/assetLamp3.png','0px','0px']
         }]
      }]
   }],
   symbolInstances: [
   {
      id: 'btnInYes',
      symbolName: 'btnInYes'
   },
   {
      id: 'btnInNo',
      symbolName: 'btnInNo'
   },
   {
      id: 'scrollDownIcon3',
      symbolName: 'scrollDownIcon'
   }   ]
   },
   states: {
      "Base State": {
         "${_InFeature5}": [
            ["style", "left", '67px'],
            ["style", "top", '447px']
         ],
         "${_character_a2}": [
            ["style", "left", '-210px'],
            ["style", "top", '105px']
         ],
         "${_btnInNo}": [
            ["style", "left", '-220px'],
            ["style", "top", '580px']
         ],
         "${_scrollDownIcon3}": [
            ["style", "top", '577px'],
            ["style", "opacity", '0'],
            ["style", "left", '398px']
         ],
         "${_speechbubble_b3}": [
            ["style", "left", '330px'],
            ["style", "top", '29px']
         ],
         "${_feature4}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '120px'],
            ["style", "font-size", '26px'],
            ["style", "top", '398px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_InFeature2}": [
            ["style", "left", '67px'],
            ["style", "top", '243px']
         ],
         "${_Floor}": [
            ["style", "top", '660px'],
            ["color", "background-color", 'rgba(0,0,0,0.2969)'],
            ["style", "width", '2000px']
         ],
         "${_Area}": [
            ["style", "top", '0px'],
            ["style", "height", '560px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '960px']
         ],
         "${_InFeature3}": [
            ["style", "left", '67px'],
            ["style", "top", '394px']
         ],
         "${_primary}": [
            ["style", "top", '0px'],
            ["style", "height", '670px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '880px']
         ],
         "${_feature3}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '120px'],
            ["style", "font-size", '26px'],
            ["style", "top", '347px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_assetDevices}": [
            ["style", "top", '168px'],
            ["style", "opacity", '0'],
            ["style", "left", '353px']
         ],
         "${_speechbubble_a2}": [
            ["style", "left", '892px'],
            ["style", "top", '24px']
         ],
         "${_feature2}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '120px'],
            ["style", "font-size", '26px'],
            ["style", "top", '246px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_details}": [
            ["style", "top", '0px'],
            ["style", "height", '670px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '1120px'],
            ["style", "width", '880px']
         ],
         "${_btnInYes}": [
            ["style", "left", '880px'],
            ["style", "top", '580px']
         ],
         "${_Horizon}": [
            ["style", "top", '500px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "height", '130px'],
            ["gradient", "background-image", [270,[['rgba(0,0,0,0.31)',0],['rgba(0,0,0,0.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '2000px']
         ],
         "${_InFeature1}": [
            ["style", "left", '67px'],
            ["style", "top", '294px']
         ],
         "${_InFeature4}": [
            ["style", "left", '67px'],
            ["style", "top", '343px']
         ],
         "${_character_b2}": [
            ["style", "left", '645px'],
            ["style", "top", '145px']
         ],
         "${_feature1}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '120px'],
            ["style", "font-size", '26px'],
            ["style", "top", '451px'],
            ["style", "text-align", 'left'],
            ["style", "height", '26px'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_feature5}": [
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '120px'],
            ["style", "font-size", '26px'],
            ["style", "top", '297px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'amatic-sc, sans-serif'],
            ["style", "width", '640px']
         ],
         "${_assetLamp32Copy}": [
            ["style", "top", '-300px'],
            ["style", "left", '81px']
         ],
         "${_container}": [
            ["style", "height", '560px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '2000px']
         ],
         "${symbolSelector}": [
            ["style", "height", '670px'],
            ["style", "width", '880px']
         ],
         "${_assetLamp32}": [
            ["style", "top", '-300px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13250,
         autoPlay: false,
         labels: {
            "details": 10000
         },
         timeline: [
            { id: "eid434", tween: [ "style", "${_scrollDownIcon3}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 250, easing: "easeInOutQuad" },
            { id: "eid323", tween: [ "style", "${_btnInNo}", "left", '203px', { fromValue: '-220px'}], position: 2000, duration: 500, easing: "easeInOutCubic" },
            { id: "eid321", tween: [ "style", "${_btnInYes}", "top", '580px', { fromValue: '580px'}], position: 2000, duration: 0, easing: "easeInOutCubic" },
            { id: "eid329", tween: [ "style", "${_btnInYes}", "top", '580px', { fromValue: '580px'}], position: 2500, duration: 0, easing: "easeInOutCubic" },
            { id: "eid432", tween: [ "style", "${_scrollDownIcon3}", "top", '577px', { fromValue: '577px'}], position: 13000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid124", tween: [ "style", "${_container}", "left", '-1120px', { fromValue: '0px'}], position: 10000, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid177", tween: [ "style", "${_assetDevices}", "top", '148px', { fromValue: '168px'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid431", tween: [ "style", "${_scrollDownIcon3}", "left", '398px', { fromValue: '398px'}], position: 13000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid171", tween: [ "style", "${_character_a2}", "left", '89px', { fromValue: '-210px'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid325", tween: [ "style", "${_btnInNo}", "top", '580px', { fromValue: '580px'}], position: 2000, duration: 0, easing: "easeInOutCubic" },
            { id: "eid327", tween: [ "style", "${_btnInNo}", "top", '580px', { fromValue: '580px'}], position: 2500, duration: 0, easing: "easeInOutCubic" },
            { id: "eid173", tween: [ "style", "${_speechbubble_a2}", "left", '33px', { fromValue: '892px'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid140", tween: [ "style", "${symbolSelector}", "width", '880px', { fromValue: '880px'}], position: 0, duration: 0 },
            { id: "eid141", tween: [ "style", "${symbolSelector}", "width", '880px', { fromValue: '880px'}], position: 2000, duration: 0 },
            { id: "eid175", tween: [ "style", "${_assetDevices}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutBack" },
            { id: "eid126", tween: [ "style", "${symbolSelector}", "height", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid319", tween: [ "style", "${_btnInYes}", "left", '426px', { fromValue: '880px'}], position: 2000, duration: 500, easing: "easeInOutCubic" }         ]
      }
   }
},
"sidebarResults": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'AnLogo',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'RfLogo',
      type: 'rect',
      rect: ['0','70','auto','auto','auto','auto']
   },
   {
      id: 'CoLogo',
      type: 'rect',
      rect: ['0','140','auto','auto','auto','auto']
   },
   {
      id: 'InLogo',
      type: 'rect',
      rect: ['0','210','auto','auto','auto','auto']
   },
   {
      id: 'toolsYouShouldCheckOut',
      type: 'image',
      rect: ['0px','-113px','60px','108px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/toolsYouShouldCheckOut.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'InLogo',
      symbolName: 'InLogo'
   },
   {
      id: 'AnLogo',
      symbolName: 'AnLogo'
   },
   {
      id: 'RfLogo',
      symbolName: 'RfLogo'
   },
   {
      id: 'CoLogo',
      symbolName: 'CoLogo'
   }   ]
   },
   states: {
      "Base State": {
         "${_AnLogo}": [
            ["subproperty", "filter.grayscale", '0'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "opacity", '1']
         ],
         "${_toolsYouShouldCheckOut}": [
            ["style", "left", '0px'],
            ["style", "top", '-113px']
         ],
         "${symbolSelector}": [
            ["style", "height", '299px'],
            ["style", "width", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
            { id: "eid253", tween: [ "style", "${_AnLogo}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuint" },
            { id: "eid247", tween: [ "subproperty", "${_AnLogo}", "filter.grayscale", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid246", tween: [ "subproperty", "${_AnLogo}", "filter.blur", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid248", tween: [ "style", "${_AnLogo}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 }         ]
      }
   }
},
"AnLogo": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','60px','60px','auto','auto'],
      filter: [0,0,1,1,0,0,1,2,'rgba(0,0,0,0)',0,0,0],
      id: 'AnLogo',
      opacity: 0.1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/AnLogo.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['841px','0px','60px','60px','auto','auto'],
      id: 'AnLogo3',
      fill: ['rgba(0,0,0,0)','images/AnLogo.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_AnLogo}": [
            ["subproperty", "filter.grayscale", '1'],
            ["style", "top", '0px'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "left", '0px'],
            ["style", "opacity", '0.1']
         ],
         "${_AnLogo3}": [
            ["motion", "location", '871px 30px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '60px'],
            ["style", "width", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: false,
         timeline: [
            { id: "eid257", tween: [ "motion", "${_AnLogo3}", [[871,30,0,0],[372.76,174,-801.17,0,-655.64,0],[30,30,0,0]]], position: 250, duration: 2000, easing: "easeOutQuint" },
            { id: "eid259", tween: [ "style", "${_AnLogo3}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 750, easing: "easeOutQuint" },
            { id: "eid255", tween: [ "style", "${_AnLogo3}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeOutQuint" }         ]
      }
   }
},
"RfLogo": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','60px','60px','auto','auto'],
      filter: [0,0,1,1,0,0,1,2,'rgba(0,0,0,0)',0,0,0],
      id: 'RfLogo',
      opacity: 0.1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/RfLogo.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['855px','-76px','60px','60px','auto','auto'],
      id: 'RfLogo3',
      fill: ['rgba(0,0,0,0)','images/RfLogo.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RfLogo3}": [
            ["motion", "location", '885px -46px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
         ],
         "${_RfLogo}": [
            ["subproperty", "filter.grayscale", '1'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "opacity", '0.1'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '60px'],
            ["style", "width", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         timeline: [
            { id: "eid264", tween: [ "style", "${_RfLogo3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutQuint" },
            { id: "eid262", tween: [ "motion", "${_RfLogo3}", [[885,-46,0,0],[278.86,125.72,-575.62,43.59,-880.79,66.7],[30,30,0,0]]], position: 500, duration: 1500, easing: "easeOutQuint" },
            { id: "eid260", tween: [ "style", "${_RfLogo3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuint" }         ]
      }
   }
},
"CoLogo": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','60px','60px','auto','auto'],
      filter: [0,0,1,1,0,0,1,2,'rgba(0,0,0,0)',0,0,0],
      id: 'CoLogo2',
      opacity: 0.1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/CoLogo.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['820px','-138px','60px','60px','auto','auto'],
      id: 'CoLogo4',
      fill: ['rgba(0,0,0,0)','images/CoLogo.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_CoLogo2}": [
            ["subproperty", "filter.grayscale", '1'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "opacity", '0.1'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_CoLogo4}": [
            ["motion", "location", '850px -108px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '60px'],
            ["style", "width", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         timeline: [
            { id: "eid265", tween: [ "style", "${_CoLogo4}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuint" },
            { id: "eid270", tween: [ "motion", "${_CoLogo4}", [[850,-108,0,0],[293.46,81.04,-643,108.21,-584.17,98.31],[30,30,0,0]]], position: 500, duration: 1500, easing: "easeOutQuint" },
            { id: "eid272", tween: [ "style", "${_CoLogo4}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutQuint" }         ]
      }
   }
},
"InLogo": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','60px','60px','auto','auto'],
      filter: [0,0,1,1,0,0,1,2,'rgba(0,0,0,0)',0,0,0],
      id: 'InLogo',
      opacity: 0.1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/InLogo.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['834px','-306px','60px','60px','auto','auto'],
      id: 'InLogo3',
      fill: ['rgba(0,0,0,0)','images/InLogo.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_InLogo}": [
            ["subproperty", "filter.grayscale", '1'],
            ["subproperty", "filter.blur", '2px'],
            ["style", "opacity", '0.1'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_InLogo3}": [
            ["motion", "location", '864px -276px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '60px'],
            ["style", "width", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         timeline: [
            { id: "eid277", tween: [ "style", "${_InLogo3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutQuint" },
            { id: "eid273", tween: [ "style", "${_InLogo3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuint" },
            { id: "eid275", tween: [ "motion", "${_InLogo3}", [[864,-276,0,0],[428.66,-1.88,-653.7,239.85,-594.48,218.12],[30,30,0,0]]], position: 500, duration: 1500, easing: "easeOutQuint" }         ]
      }
   }
},
"btnRfNo": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['auto','auto','220px','80px','0px','10px'],
      id: 'Rectangle2',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)'],
      c: [
      {
         rect: ['auto','auto','220px','10px','0px','-10px'],
         id: 'marker',
         stroke: [0,'rgb(255, 255, 255)','solid'],
         type: 'rect',
         fill: ['rgba(150,150,150,1.00)']
      },
      {
         rect: ['auto','auto','220px','39px','0px','21px'],
         font: ['source-sans-pro, sans-serif',32,'rgba(0,0,0,1.00)','bold','none','normal'],
         id: 'Text3',
         text: 'No,',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['auto','auto','220px','39px','0px','21px'],
         font: ['source-sans-pro, sans-serif',32,'rgba(0,0,0,1.00)','300','none','normal'],
         id: 'Text3Copy',
         text: 'I don\'t have a multiple device.',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['0px','0px','220px','90px','auto','auto'],
      type: 'rect',
      id: 'hotspot',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "bottom", '10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '220px'],
            ["style", "top", 'auto'],
            ["style", "height", '80px'],
            ["style", "cursor", 'auto'],
            ["style", "left", 'auto'],
            ["style", "right", '0px']
         ],
         "${_Text3Copy}": [
            ["style", "bottom", '-8px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-weight", '300'],
            ["style", "left", 'auto'],
            ["style", "font-size", '16px'],
            ["style", "top", 'auto'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "right", '0px'],
            ["style", "width", '220px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '220px']
         ],
         "${_Text3}": [
            ["style", "bottom", '31px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '32px'],
            ["style", "top", 'auto'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "width", '220px'],
            ["style", "right", '0px']
         ],
         "${_hotspot}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '0px']
         ],
         "${_marker}": [
            ["color", "background-color", 'rgba(150,150,150,1.00)'],
            ["style", "bottom", '-10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '220px'],
            ["style", "top", 'auto'],
            ["style", "height", '10px'],
            ["style", "left", 'auto'],
            ["style", "right", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         timeline: [
            { id: "eid68", tween: [ "color", "${_Text3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid67", tween: [ "style", "${_marker}", "height", '90px', { fromValue: '10px'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid287", tween: [ "style", "${_Text3Copy}", "bottom", '-8px', { fromValue: '-8px'}], position: 0, duration: 0, easing: "easeInOutCubic" },
            { id: "eid285", tween: [ "color", "${_Text3Copy}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid284", tween: [ "style", "${_Text3}", "bottom", '31px', { fromValue: '31px'}], position: 0, duration: 0, easing: "easeOutQuint" },
            { id: "eid288", tween: [ "style", "${_Text3Copy}", "font-size", '16px', { fromValue: '16px'}], position: 0, duration: 0, easing: "easeInOutCubic" }         ]
      }
   }
},
"btnRfYes": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['auto','auto','220px','80px','0px','10px'],
      id: 'Rectangle2',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)'],
      c: [
      {
         rect: ['auto','auto','220px','10px','0px','-10px'],
         id: 'marker',
         stroke: [0,'rgb(255, 255, 255)','solid'],
         type: 'rect',
         fill: ['rgba(0,222,254,1.00)']
      },
      {
         rect: ['auto','auto','220px','39px','0px','21px'],
         font: ['source-sans-pro, sans-serif',32,'rgba(0,0,0,1.00)','bold','none','normal'],
         id: 'Text3',
         text: 'Sure,',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['auto','auto','220px','39px','0px','21px'],
         font: ['source-sans-pro, sans-serif',32,'rgba(0,0,0,1.00)','300','none','normal'],
         id: 'Text3Copy2',
         text: 'fixed layouts are so \'99.',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['0px','0px','220px','90px','auto','auto'],
      type: 'rect',
      id: 'hotspot',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "bottom", '10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '220px'],
            ["style", "top", 'auto'],
            ["style", "height", '80px'],
            ["style", "right", '0px'],
            ["style", "left", 'auto'],
            ["style", "cursor", 'auto']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '220px']
         ],
         "${_Text3}": [
            ["style", "bottom", '31px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '32px'],
            ["style", "top", 'auto'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "right", '0px'],
            ["style", "width", '220px']
         ],
         "${_Text3Copy2}": [
            ["style", "bottom", '-8px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-weight", '300'],
            ["style", "left", 'auto'],
            ["style", "font-size", '16px'],
            ["style", "top", 'auto'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "width", '220px'],
            ["style", "right", '0px']
         ],
         "${_hotspot}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '0px']
         ],
         "${_marker}": [
            ["color", "background-color", 'rgba(0,222,254,1.00)'],
            ["style", "bottom", '-10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '220px'],
            ["style", "top", 'auto'],
            ["style", "height", '10px'],
            ["style", "right", '0px'],
            ["style", "left", 'auto']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         timeline: [
            { id: "eid290", tween: [ "color", "${_Text3Copy2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid68", tween: [ "color", "${_Text3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid67", tween: [ "style", "${_marker}", "height", '90px', { fromValue: '10px'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid292", tween: [ "style", "${_Text3Copy2}", "bottom", '-8px', { fromValue: '-8px'}], position: 0, duration: 0, easing: "easeInOutCubic" },
            { id: "eid289", tween: [ "style", "${_Text3}", "bottom", '31px', { fromValue: '31px'}], position: 0, duration: 0, easing: "easeInOutCubic" },
            { id: "eid293", tween: [ "style", "${_Text3Copy2}", "font-size", '16px', { fromValue: '16px'}], position: 0, duration: 0, easing: "easeInOutCubic" }         ]
      }
   }
},
"btnCoNo": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['auto','auto','220px','80px','0px','10px'],
      id: 'Rectangle2',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)'],
      c: [
      {
         rect: ['auto','auto','220px','10px','0px','-10px'],
         id: 'marker',
         stroke: [0,'rgb(255, 255, 255)','solid'],
         type: 'rect',
         fill: ['rgba(150,150,150,1.00)']
      },
      {
         rect: ['auto','auto','220px','39px','0px','21px'],
         font: ['source-sans-pro, sans-serif',32,'rgba(0,0,0,1.00)','bold','none','normal'],
         id: 'Text3',
         text: 'YES!!!',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['auto','auto','220px','39px','0px','21px'],
         font: ['source-sans-pro, sans-serif',32,'rgba(0,0,0,1.00)','300','none','normal'],
         id: 'Text3Copy',
         text: 'That\'s wicked sorcery.',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['0px','0px','220px','90px','auto','auto'],
      type: 'rect',
      id: 'hotspot',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hotspot}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '0px']
         ],
         "${_Text3Copy}": [
            ["style", "bottom", '-8px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-weight", '300'],
            ["style", "left", 'auto'],
            ["style", "font-size", '16px'],
            ["style", "top", 'auto'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "width", '220px'],
            ["style", "right", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '220px']
         ],
         "${_Text3}": [
            ["style", "bottom", '31px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '32px'],
            ["style", "top", 'auto'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "right", '0px'],
            ["style", "width", '220px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "bottom", '10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '220px'],
            ["style", "top", 'auto'],
            ["style", "height", '80px'],
            ["style", "right", '0px'],
            ["style", "left", 'auto'],
            ["style", "cursor", 'auto']
         ],
         "${_marker}": [
            ["color", "background-color", 'rgba(150,150,150,1.00)'],
            ["style", "bottom", '-10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '220px'],
            ["style", "top", 'auto'],
            ["style", "height", '10px'],
            ["style", "right", '0px'],
            ["style", "left", 'auto']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         timeline: [
            { id: "eid68", tween: [ "color", "${_Text3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid67", tween: [ "style", "${_marker}", "height", '90px', { fromValue: '10px'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid287", tween: [ "style", "${_Text3Copy}", "bottom", '-8px', { fromValue: '-8px'}], position: 0, duration: 0, easing: "easeInOutCubic" },
            { id: "eid288", tween: [ "style", "${_Text3Copy}", "font-size", '16px', { fromValue: '16px'}], position: 0, duration: 0, easing: "easeInOutCubic" },
            { id: "eid284", tween: [ "style", "${_Text3}", "bottom", '31px', { fromValue: '31px'}], position: 0, duration: 0, easing: "easeOutQuint" },
            { id: "eid285", tween: [ "color", "${_Text3Copy}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 250, easing: "easeInOutCubic" }         ]
      }
   }
},
"btnCoYes": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['auto','auto','220px','80px','0px','10px'],
      id: 'Rectangle2',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)'],
      c: [
      {
         rect: ['auto','auto','220px','10px','0px','-10px'],
         id: 'marker',
         stroke: [0,'rgb(255, 255, 255)','solid'],
         type: 'rect',
         fill: ['rgba(0,177,157,1.00)']
      },
      {
         rect: ['auto','auto','220px','39px','0px','21px'],
         font: ['source-sans-pro, sans-serif',32,'rgba(0,0,0,1.00)','bold','none','normal'],
         id: 'Text3',
         text: 'Hell no,',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['auto','auto','220px','39px','0px','21px'],
         font: ['source-sans-pro, sans-serif',32,'rgba(0,0,0,1.00)','300','none','normal'],
         id: 'Text3Copy2',
         text: 'I dream in &lt;code&gt;!',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['0px','0px','220px','90px','auto','auto'],
      type: 'rect',
      id: 'hotspot',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hotspot}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '220px']
         ],
         "${_Text3}": [
            ["style", "bottom", '31px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '32px'],
            ["style", "top", 'auto'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "width", '220px'],
            ["style", "right", '0px']
         ],
         "${_Text3Copy2}": [
            ["style", "bottom", '-8px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-weight", '300'],
            ["style", "left", 'auto'],
            ["style", "font-size", '16px'],
            ["style", "top", 'auto'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "right", '0px'],
            ["style", "width", '220px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "bottom", '10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '220px'],
            ["style", "top", 'auto'],
            ["style", "height", '80px'],
            ["style", "cursor", 'auto'],
            ["style", "left", 'auto'],
            ["style", "right", '0px']
         ],
         "${_marker}": [
            ["color", "background-color", 'rgba(0,177,157,1.00)'],
            ["style", "bottom", '-10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '220px'],
            ["style", "top", 'auto'],
            ["style", "height", '10px'],
            ["style", "left", 'auto'],
            ["style", "right", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         timeline: [
            { id: "eid290", tween: [ "color", "${_Text3Copy2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid68", tween: [ "color", "${_Text3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid67", tween: [ "style", "${_marker}", "height", '90px', { fromValue: '10px'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid293", tween: [ "style", "${_Text3Copy2}", "font-size", '16px', { fromValue: '16px'}], position: 0, duration: 0, easing: "easeInOutCubic" },
            { id: "eid289", tween: [ "style", "${_Text3}", "bottom", '31px', { fromValue: '31px'}], position: 0, duration: 0, easing: "easeInOutCubic" },
            { id: "eid292", tween: [ "style", "${_Text3Copy2}", "bottom", '-8px', { fromValue: '-8px'}], position: 0, duration: 0, easing: "easeInOutCubic" }         ]
      }
   }
},
"btnInNo": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['auto','auto','220px','80px','0px','10px'],
      id: 'Rectangle2',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)'],
      c: [
      {
         rect: ['auto','auto','220px','10px','0px','-10px'],
         id: 'marker',
         stroke: [0,'rgb(255, 255, 255)','solid'],
         type: 'rect',
         fill: ['rgba(150,150,150,1.00)']
      },
      {
         rect: ['auto','auto','220px','39px','0px','21px'],
         font: ['source-sans-pro, sans-serif',32,'rgba(0,0,0,1.00)','bold','none','normal'],
         id: 'Text3',
         text: 'Nay,',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['auto','auto','220px','39px','0px','21px'],
         font: ['source-sans-pro, sans-serif',32,'rgba(0,0,0,1.00)','300','none','normal'],
         id: 'Text3Copy',
         text: 'testing is overrated.',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['0px','0px','220px','90px','auto','auto'],
      type: 'rect',
      id: 'hotspot',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hotspot}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '0px']
         ],
         "${_Text3Copy}": [
            ["style", "bottom", '-8px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-weight", '300'],
            ["style", "left", 'auto'],
            ["style", "font-size", '16px'],
            ["style", "top", 'auto'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "right", '0px'],
            ["style", "width", '220px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '220px']
         ],
         "${_Text3}": [
            ["style", "bottom", '31px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '32px'],
            ["style", "top", 'auto'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "width", '220px'],
            ["style", "right", '0px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "bottom", '10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '220px'],
            ["style", "top", 'auto'],
            ["style", "height", '80px'],
            ["style", "cursor", 'auto'],
            ["style", "left", 'auto'],
            ["style", "right", '0px']
         ],
         "${_marker}": [
            ["color", "background-color", 'rgba(150,150,150,1.00)'],
            ["style", "bottom", '-10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '220px'],
            ["style", "top", 'auto'],
            ["style", "height", '10px'],
            ["style", "left", 'auto'],
            ["style", "right", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         timeline: [
            { id: "eid68", tween: [ "color", "${_Text3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid67", tween: [ "style", "${_marker}", "height", '90px', { fromValue: '10px'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid287", tween: [ "style", "${_Text3Copy}", "bottom", '-8px', { fromValue: '-8px'}], position: 0, duration: 0, easing: "easeInOutCubic" },
            { id: "eid285", tween: [ "color", "${_Text3Copy}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid284", tween: [ "style", "${_Text3}", "bottom", '31px', { fromValue: '31px'}], position: 0, duration: 0, easing: "easeOutQuint" },
            { id: "eid288", tween: [ "style", "${_Text3Copy}", "font-size", '16px', { fromValue: '16px'}], position: 0, duration: 0, easing: "easeInOutCubic" }         ]
      }
   }
},
"btnInYes": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['auto','auto','220px','80px','0px','10px'],
      id: 'Rectangle2',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)'],
      c: [
      {
         rect: ['auto','auto','220px','10px','0px','-10px'],
         id: 'marker',
         stroke: [0,'rgb(255, 255, 255)','solid'],
         type: 'rect',
         fill: ['rgba(255,157,30,1.00)']
      },
      {
         rect: ['auto','auto','220px','39px','0px','21px'],
         font: ['source-sans-pro, sans-serif',32,'rgba(0,0,0,1.00)','bold','none','normal'],
         id: 'Text3',
         text: 'You bet,',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['auto','auto','220px','39px','0px','21px'],
         font: ['source-sans-pro, sans-serif',32,'rgba(0,0,0,1.00)','300','none','normal'],
         id: 'Text3Copy2',
         text: 'testing saves lifes.',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['0px','0px','220px','90px','auto','auto'],
      type: 'rect',
      id: 'hotspot',
      stroke: [0,'rgb(255, 255, 255)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hotspot}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '220px']
         ],
         "${_Text3}": [
            ["style", "bottom", '31px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '32px'],
            ["style", "top", 'auto'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "right", '0px'],
            ["style", "width", '220px']
         ],
         "${_Text3Copy2}": [
            ["style", "bottom", '-8px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-weight", '300'],
            ["style", "left", 'auto'],
            ["style", "font-size", '16px'],
            ["style", "top", 'auto'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "width", '220px'],
            ["style", "right", '0px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "bottom", '10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '220px'],
            ["style", "top", 'auto'],
            ["style", "height", '80px'],
            ["style", "right", '0px'],
            ["style", "left", 'auto'],
            ["style", "cursor", 'auto']
         ],
         "${_marker}": [
            ["color", "background-color", 'rgba(255,157,30,1.00)'],
            ["style", "bottom", '-10px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '0px'],
            ["style", "width", '220px'],
            ["style", "top", 'auto'],
            ["style", "height", '10px'],
            ["style", "right", '0px'],
            ["style", "left", 'auto']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         timeline: [
            { id: "eid290", tween: [ "color", "${_Text3Copy2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid68", tween: [ "color", "${_Text3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid67", tween: [ "style", "${_marker}", "height", '90px', { fromValue: '10px'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid292", tween: [ "style", "${_Text3Copy2}", "bottom", '-8px', { fromValue: '-8px'}], position: 0, duration: 0, easing: "easeInOutCubic" },
            { id: "eid289", tween: [ "style", "${_Text3}", "bottom", '31px', { fromValue: '31px'}], position: 0, duration: 0, easing: "easeInOutCubic" },
            { id: "eid293", tween: [ "style", "${_Text3Copy2}", "font-size", '16px', { fromValue: '16px'}], position: 0, duration: 0, easing: "easeInOutCubic" }         ]
      }
   }
},
"scrollDownIcon": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'scrollDownIcon',
      type: 'image',
      rect: ['0px','0px','83px','83px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/scrollDownIcon.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scrollDownIcon}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '83px'],
            ["style", "width", '83px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid358", tween: [ "style", "${_scrollDownIcon}", "opacity", '1', { fromValue: '0.1'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid359", tween: [ "style", "${_scrollDownIcon}", "opacity", '0.1', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeInOutQuad" }         ]
      }
   }
},
"introFade": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'intro_background3',
      type: 'image',
      rect: ['212','70','880px','670px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_background.jpg','0px','0px']
   },
   {
      id: 'intro_background3Copy',
      type: 'image',
      rect: ['212','70','880px','670px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_background.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_intro_background3}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '-1']
         ],
         "${symbolSelector}": [
            ["style", "height", '1200px'],
            ["style", "width", '880px'],
            ["style", "overflow", 'hidden']
         ],
         "${_intro_background3Copy}": [
            ["style", "top", '670px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '1']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid413", tween: [ "style", "${_intro_background3}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid414", tween: [ "style", "${_intro_background3Copy}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500, easing: "easeInOutQuad" }         ]
      }
   }
},
"scene_results": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'intro_background',
      type: 'image',
      rect: ['0px','0px','880px','670px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_background.jpg','0px','0px']
   },
   {
      rect: ['0px','540px','960px','130px','auto','auto'],
      id: 'Horizon',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.00)',[270,[['rgba(151,151,151,0.31)',0],['rgba(255,255,255,0.00)',100]]]]
   },
   {
      id: 'intro_icon',
      type: 'image',
      rect: ['56px','126px','127px','118px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_icon.png','0px','0px']
   },
   {
      id: 'intro_modernweb',
      type: 'image',
      rect: ['612px','204px','196px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_modernweb.png','0px','0px']
   },
   {
      id: 'intro_forthe',
      type: 'image',
      rect: ['612px','126px','196px','65px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_forthe.png','0px','0px']
   },
   {
      id: 'intro_tools',
      type: 'image',
      rect: ['334px','109px','278px','152px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_tools.png','0px','0px']
   },
   {
      id: 'intro_theright',
      type: 'image',
      rect: ['206px','211px','125px','32px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_theright.png','0px','0px']
   },
   {
      id: 'intro_find',
      type: 'image',
      rect: ['208px','131px','121px','69px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_find.png','0px','0px']
   },
   {
      id: 'intro_host',
      type: 'image',
      rect: ['541px','224px','127px','432px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/intro_host.png','0px','0px']
   },
   {
      id: 'results_speechbubble',
      type: 'image',
      rect: ['73px','292px','481px','192px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/results_speechbubble.png','0px','0px']
   },
   {
      rect: ['102px','397px','414px','81px','auto','auto'],
      id: 'resultArea',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0)'],
      c: [
      {
         rect: ['239px','0px','60px','60px','auto','auto'],
         id: 'InLogo',
         opacity: 0.1,
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/InLogo.png','0px','0px']
      },
      {
         rect: ['160px','0px','60px','60px','auto','auto'],
         id: 'CoLogo',
         opacity: 0.1,
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/CoLogo.png','0px','0px']
      },
      {
         rect: ['80px','0px','60px','60px','auto','auto'],
         id: 'RfLogo',
         opacity: 0.1,
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/RfLogo.png','0px','0px']
      },
      {
         rect: ['0px','0px','60px','60px','auto','auto'],
         id: 'AnLogo',
         opacity: 0.1,
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/AnLogo.png','0px','0px']
      }]
   },
   {
      rect: ['0px','670px','880px','670px','auto','auto'],
      id: 'intro_backgroundCopy',
      transform: [[0,0],[],[],['1','-1']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/intro_background.jpg','0px','0px']
   },
   {
      rect: ['150px','445px','24px','24px','auto','auto'],
      id: 'link',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/link.png','0px','0px']
   },
   {
      rect: ['230px','445px','24px','24px','auto','auto'],
      id: 'linkCopy',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/link.png','0px','0px']
   },
   {
      rect: ['310px','445px','24px','24px','auto','auto'],
      id: 'linkCopy2',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/link.png','0px','0px']
   },
   {
      rect: ['389px','445px','24px','24px','auto','auto'],
      id: 'linkCopy3',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/link.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_intro_backgroundCopy}": [
            ["style", "top", '670px'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '-1']
         ],
         "${_intro_find}": [
            ["style", "left", '-137px'],
            ["style", "top", '130px']
         ],
         "${_linkCopy}": [
            ["style", "top", '445px'],
            ["style", "left", '230px'],
            ["style", "cursor", 'pointer']
         ],
         "${_intro_host}": [
            ["style", "left", '892px'],
            ["style", "top", '224px']
         ],
         "${symbolSelector}": [
            ["style", "height", '670px'],
            ["style", "width", '880px']
         ],
         "${_intro_forthe}": [
            ["style", "top", '126px'],
            ["style", "left", '622px']
         ],
         "${_resultArea}": [
            ["style", "top", '397px']
         ],
         "${_results_speechbubble}": [
            ["style", "left", '73px'],
            ["style", "top", '292px']
         ],
         "${_AnLogo}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.1'],
            ["style", "left", '0px']
         ],
         "${_InLogo}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.1'],
            ["style", "left", '239px']
         ],
         "${_RfLogo}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.1'],
            ["style", "left", '80px']
         ],
         "${_intro_modernweb}": [
            ["style", "left", '897px'],
            ["style", "top", '205px']
         ],
         "${_Horizon}": [
            ["style", "top", '540px'],
            ["color", "background-color", 'rgba(255,255,255,0)'],
            ["style", "height", '130px'],
            ["gradient", "background-image", [270,[['rgba(151,151,151,0.31)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '2000px']
         ],
         "${_link}": [
            ["style", "top", '445px'],
            ["style", "left", '150px'],
            ["style", "cursor", 'pointer']
         ],
         "${_linkCopy2}": [
            ["style", "top", '445px'],
            ["style", "left", '310px'],
            ["style", "cursor", 'pointer']
         ],
         "${_CoLogo}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.1'],
            ["style", "left", '160px']
         ],
         "${_intro_theright}": [
            ["style", "left", '933px'],
            ["style", "top", '211px']
         ],
         "${_linkCopy3}": [
            ["style", "top", '445px'],
            ["style", "left", '389px'],
            ["style", "cursor", 'pointer']
         ],
         "${_intro_icon}": [
            ["style", "top", '126px'],
            ["style", "left", '-143px']
         ],
         "${_intro_tools}": [
            ["style", "top", '374px'],
            ["style", "opacity", '0'],
            ["style", "left", '342px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         timeline: [
            { id: "eid385", tween: [ "style", "${_intro_tools}", "top", '109px', { fromValue: '374px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid375", tween: [ "style", "${_intro_find}", "left", '208px', { fromValue: '-137px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid388", tween: [ "style", "${_intro_tools}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid392", tween: [ "style", "${_intro_modernweb}", "left", '622px', { fromValue: '897px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid377", tween: [ "style", "${_intro_find}", "top", '131px', { fromValue: '130px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid380", tween: [ "style", "${symbolSelector}", "width", '880px', { fromValue: '880px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid381", tween: [ "style", "${symbolSelector}", "width", '880px', { fromValue: '880px'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid373", tween: [ "style", "${_intro_icon}", "left", '56px', { fromValue: '-143px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid379", tween: [ "style", "${_intro_theright}", "left", '206px', { fromValue: '933px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid242", tween: [ "style", "${symbolSelector}", "height", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid396", tween: [ "style", "${_intro_host}", "left", '545px', { fromValue: '892px'}], position: 0, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-709357467");
