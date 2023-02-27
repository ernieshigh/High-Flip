!function(){"use strict";var e,t={906:function(){var e=window.wp.blocks;function t(){return t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},t.apply(this,arguments)}var a=window.wp.element,l=window.wp.i18n,n=window.wp.blockEditor,o=window.wp.components;const{withSelect:r}=wp.data,{compose:i}=wp.compose,{Visualizer:c}=o.__experimentalBoxControl,g=["image"],d=[{color:"#ffffff",name:"White"},{color:"#000000",name:"Black"},{color:"#58A445",name:"Green"},{color:"#1d2a53",name:"Blue"}],{withSelect:u}=wp.data;(0,e.registerBlockType)("high-flip-block/high-flip",{supports:{align:!0},attributes:{backgroundColor:{type:"string"},backgroundImage:{type:"string"},backgroundPosition:{type:"string",default:"center"},backgroundRepeat:{type:"string",default:"no-repeat"},backgroundSize:{type:"string",default:"cover"},borderStyle:{type:"string"},borderWidth:{type:"string"},borderRadius:{type:"string"},borderColor:{type:"string"},backBackgroundColor:{type:"string"},backBackgroundImage:{type:"string"},backBackgroundPosition:{type:"string",default:"center"},backBackgroundRepeat:{type:"string",default:"no-repeat"},backBackgroundSize:{type:"string",default:"cover"},backBorderStyle:{type:"string"},backBorderWidth:{type:"string"},backBorderRadius:{type:"string"},backBorderColor:{type:"string"},height:{type:"number"},width:{type:"string"},flipDirection:{type:"string"},subheading:{type:"string"},heading:{type:"string"},content:{type:"string"},subheadingColor:{type:"string"},headingColor:{type:"string"},contentColor:{type:"string"},subheadingAlign:{type:"string"},headingAlign:{type:"string"},contentAlign:{type:"string"},backSubheading:{type:"string"},backHeading:{type:"string"},backContent:{type:"string"},backSubheadingColor:{type:"string"},backHeadingColor:{type:"string"},backContentColor:{type:"string"},backContentAlign:{type:"string"},backSubheadingAlign:{type:"string"},backHeadingAlign:{type:"string"},panelSwitch:{type:"boolean"}},edit:function(e){let{attributes:r,isSelected:i,setAttributes:c}=e;const u=(0,n.useBlockProps)(),{alignment:b,backgroundColor:h,backgroundImage:s,backgroundPosition:p,backgroundAttachment:k,backgroundRepeat:m,backgroundSize:C,borderWidth:v,borderStyle:E,borderColor:f,borderRadius:B,backBackgroundColor:y,backBackgroundImage:_,backBackgroundPosition:S,backBackgroundAttachment:R,backBackgroundRepeat:P,backBackgroundSize:A,backBorderWidth:w,backBorderStyle:x,backBorderColor:H,backBorderRadius:T,height:N,width:z,subheading:O,heading:W,content:I,subheadingColor:F,headingColor:D,contentColor:U,subheadingAlign:L,headingAlign:M,contentAlign:G,backSubheading:j,backHeading:V,backContent:$,backSubheadingColor:q,backHeadingColor:J,backContentColor:K,backSubheadingAlign:Q,backHeadingAlign:X,backContentAlign:Y,panelSwitch:Z}=r,ee=e=>{c({backgroundImage:e.sizes.full.url})},te=e=>{c({backBackgroundImage:e.sizes.full.url})},[ae,le]=(0,a.useState)({top:"20px",left:"20px",right:"20px",bottom:"20px"});return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(n.InspectorControls,null,(0,a.createElement)(o.Panel,{title:(0,l.__)("High Flip Box")},(0,a.createElement)(o.PanelBody,{title:(0,l.__)("Flip Options","high-flip-block"),initialOpen:!0},(0,a.createElement)(o.PanelRow,null,(0,a.createElement)(o.PanelHeader,null," Flip Direction "),(0,a.createElement)(o.SelectControl,{label:(0,l.__)("Select Direction"),value:r.flipDirection,options:[{label:"Vertical",value:"vert"},{label:"Horizontal",value:"hor"},{label:"Vertical Reverse",value:"vert-r"},{label:"Horizontal Reverse",value:"hor-r"}],onChange:e=>c({flipDirection:e})})),(0,a.createElement)(o.PanelRow,null,(0,a.createElement)(o.PanelHeader,null," Flip Sizing "),(0,a.createElement)(o.__experimentalUnitControl,{label:(0,l.__)("Height"),value:r.height,onChange:e=>c({height:e})}),(0,a.createElement)(o.__experimentalUnitControl,{label:(0,l.__)("Width"),value:r.width,onChange:e=>c({width:e})})),(0,a.createElement)(o.PanelRow,null,(0,a.createElement)(o.PanelHeader,null," Flip Spacing "),(0,a.createElement)(o.__experimentalBoxControl,{label:(0,l.__)("Padding","high-flip-block"),values:ae,onChange:e=>console.log(e)}))),(0,a.createElement)(o.PanelBody,{title:(0,l.__)("Switch ","high-flip-block"),initialOpen:!0},(0,a.createElement)(o.ToggleControl,{label:(0,l.__)("Switch from front to back panel?","high-flip-block"),help:Z?"Front":"Back",checked:Z,onChange:()=>c({panelSwitch:!Z})}))),Z&&(0,a.createElement)(o.Panel,{title:(0,l.__)("Front Settings")},(0,a.createElement)(o.PanelBody,{title:(0,l.__)("Front Styles ","high-flip-block"),initialOpen:!1},(0,a.createElement)(o.PanelRow,null,(0,a.createElement)(o.PanelHeader,null," Background Image"),(0,a.createElement)(n.MediaUploadCheck,null,(0,a.createElement)(n.MediaUpload,{onSelect:ee,allowedTypes:g,value:s,render:e=>{let{open:t}=e;return(0,a.createElement)("button",{className:s?"editor-post-featured-image__preview":"editor-post-featured-image__toggle",onClick:t},!s&&(0,l.__)("Add Front Background Image","high-flip"),!!s&&(0,a.createElement)(o.ResponsiveWrapper,{naturalWidth:220,naturalHeight:220},(0,a.createElement)("img",{src:s,alt:(0,l.__)("Front Background Image","high-flip")})))}})),s&&(0,a.createElement)(n.MediaUploadCheck,null,(0,a.createElement)(n.MediaUpload,{title:(0,l.__)("Background image","high-flip"),onSelect:ee,allowedTypes:g,value:s,render:e=>{let{open:t}=e;return(0,a.createElement)(o.Button,{onClick:t,isDefault:!0,isLarge:!0},(0,l.__)("Replace background image","high-flip"))}})),s&&(0,a.createElement)(n.MediaUploadCheck,null,(0,a.createElement)(o.Button,{onClick:()=>{c({backgroundImage:void 0})},isLink:!0,isDestructive:!0},(0,l.__)("Remove background image","high-flip"))),(0,a.createElement)(o.SelectControl,{label:(0,l.__)("Background Position"),value:r.backgroundPosition,options:[{label:"Center",value:"center"},{label:"Center Top",value:"center top"},{label:"Center Bottom",value:"center bottom"},{label:"Left Top",value:"left top"},{label:"Left Center",value:"left center"},{label:"Left Bottom",value:"left bottom"},{label:"Right Top",value:"right top"},{label:"Right Center",value:"right center"},{label:"Right Bottom",value:"right bottom"}],onChange:e=>c({backgroundPosition:e})}),(0,a.createElement)(o.SelectControl,{label:(0,l.__)("Background Size"),value:r.backgroundSize,options:[{label:"Cover",value:"cover"},{label:"Contain",value:"contain"},{label:"auto",value:"auto 100%"},{label:"100%",value:"100% auto"}],onChange:e=>c({backgroundSize:e})}),(0,a.createElement)(o.SelectControl,{label:(0,l.__)("Background Repeat"),value:r.backgroundRepeat,options:[{label:"No Repeat",value:"no-repeat"},{label:"Repeat",value:"repeat"},{label:"Repeat Horizontally",value:"repeat-x"},{label:"Repeat Vertically",value:"repeat-y"}],onChange:e=>c({backgroundRepeat:e})})),(0,a.createElement)(o.PanelRow,null,(0,a.createElement)(o.PanelHeader,null,"Background Color"),(0,a.createElement)(o.ColorPalette,{colors:[...d],value:h,onChange:e=>{c({backgroundColor:e})}})),(0,a.createElement)(o.PanelRow,null,(0,a.createElement)(o.PanelHeader,null," Front Borders"),(0,a.createElement)(o.__experimentalUnitControl,{label:(0,l.__)("Border Width"),value:r.borderWidth,onChange:e=>c({borderWidth:e})}),(0,a.createElement)(o.SelectControl,{label:(0,l.__)("Border Style"),value:r.borderStyle,options:[{label:"Choose Style",value:""},{label:"Solid",value:"solid"},{label:"Dashed",value:"dashed"},{label:"Dotted",value:"dotted"},{label:"Double",value:"double"},{label:"Grooved",value:"grooved"},{label:"Outset",value:"outset"},{label:"Ridge",value:"ridge"}],onChange:e=>c({borderStyle:e})}),(0,a.createElement)("h4",null," Border Color"),(0,a.createElement)(o.ColorPalette,{title:"Border Color",value:f,colors:[...d],onChange:e=>c({borderColor:e})}),(0,a.createElement)(o.__experimentalUnitControl,{label:(0,l.__)("Border Radius"),value:r.borderRadius,onChange:e=>c({borderRadius:e})}))),(0,a.createElement)(o.PanelBody,{title:(0,l.__)("Front Content","high-flip-block"),initialOpen:!1},(0,a.createElement)(o.PanelRow,null,(0,a.createElement)(o.PanelHeader,null,"Front Sub-heading  "),(0,a.createElement)("h4",null," Subheading Color"),(0,a.createElement)(o.ColorPalette,{colors:[...d],value:r.subheadingColor,onChange:e=>c({subheadingColor:e})}),(0,a.createElement)("h4",null,"Subheading Align"),(0,a.createElement)(n.AlignmentToolbar,{value:r.headingAlign,onChange:e=>{c({subheadingAlign:e})}}),(0,a.createElement)(o.PanelHeader,null," Front Heading"),(0,a.createElement)("h4",null,"Heading Color"),(0,a.createElement)(o.ColorPalette,{colors:[...d],value:r.headingColor,onChange:e=>c({headingColor:e})}),(0,a.createElement)("h4",null,"Heading Align"),(0,a.createElement)(n.AlignmentToolbar,{value:r.headingAlign,onChange:e=>{c({headingAlign:e})}}),(0,a.createElement)("h3",null,"Panel Header"),(0,a.createElement)("h4",null," Text Color "),(0,a.createElement)(o.ColorPalette,{colors:[...d],value:r.contentColor,onChange:e=>c({contentColor:e})}),(0,a.createElement)("h4",null,"Text Align"),(0,a.createElement)(n.AlignmentToolbar,{value:r.contentAlign,onChange:e=>{c({contentAlign:e})}})))),!Z&&(0,a.createElement)(o.Panel,{title:(0,l.__)("Back Settings"),initialOpen:!1},(0,a.createElement)(o.PanelBody,{title:(0,l.__)("Back Styles","high-flip-block")},(0,a.createElement)(o.PanelRow,null,(0,a.createElement)(o.PanelHeader,null,"Background Image"),(0,a.createElement)(n.MediaUploadCheck,null,(0,a.createElement)(n.MediaUpload,{onSelect:te,allowedTypes:g,value:_,render:e=>{let{open:t}=e;return(0,a.createElement)("button",{className:_?"editor-post-featured-image__preview":"editor-post-featured-image__toggle",onClick:t},!_&&(0,l.__)("Add Back Background Image","high-flip"),!!_&&(0,a.createElement)(o.ResponsiveWrapper,{naturalWidth:220,naturalHeight:220},(0,a.createElement)("img",{src:_,alt:(0,l.__)("Back Background Image","high-flip")})))}})),_&&(0,a.createElement)(n.MediaUploadCheck,null,(0,a.createElement)(n.MediaUpload,{title:(0,l.__)("Background image","high-flip"),onSelect:te,allowedTypes:g,value:_,render:e=>{let{open:t}=e;return(0,a.createElement)(o.Button,{onClick:t,isDefault:!0,isLarge:!0},(0,l.__)("Replace background image","high-flip"))}})),_&&(0,a.createElement)(n.MediaUploadCheck,null,(0,a.createElement)(o.Button,{onClick:()=>{c({backBackgroundImage:void 0})},isLink:!0,isDestructive:!0},(0,l.__)("Remove background image","high-flip"))),(0,a.createElement)(o.SelectControl,{label:(0,l.__)("Background Position"),value:r.backBackgroundPosition,options:[{label:"Center",value:"center"},{label:"Center Top",value:"center top"},{label:"Center Bottom",value:"center bottom"},{label:"Left Top",value:"left top"},{label:"Left Center",value:"left center"},{label:"Left Bottom",value:"left bottom"},{label:"Right Top",value:"right top"},{label:"Right Center",value:"right center"},{label:"Right Bottom",value:"right bottom"}],onChange:e=>c({backBackgroundPosition:e})}),(0,a.createElement)(o.SelectControl,{label:(0,l.__)("Background Size"),value:r.backBackgroundSize,options:[{label:"Cover",value:"cover"},{label:"Contain",value:"contain"},{label:"auto",value:"auto 100%"},{label:"100%",value:"100% auto"}],onChange:e=>c({backBackgroundSize:e})}),(0,a.createElement)(o.SelectControl,{label:(0,l.__)("Background Repeat"),value:r.backBackgroundRepeat,options:[{label:"No Repeat",value:"no-repeat"},{label:"Repeat",value:"repeat"},{label:"Repeat Horizontally",value:"repeat-x"},{label:"Repeat Vertically",value:"repeat-y"}],onChange:e=>c({backBackgroundRepeat:e})})),(0,a.createElement)(o.PanelRow,null,(0,a.createElement)(o.PanelHeader,null," Back Background Color "),(0,a.createElement)(o.ColorPalette,{colors:[...d],value:y,onChange:e=>{c({backBackgroundColor:e})}})),(0,a.createElement)(o.PanelRow,null,(0,a.createElement)(o.PanelHeader,null," Back Borders"),(0,a.createElement)(o.__experimentalUnitControl,{label:(0,l.__)("Border Width"),value:r.backBorderWidth,onChange:e=>c({backBorderWidth:e})}),(0,a.createElement)(o.SelectControl,{label:(0,l.__)("Border Style"),value:r.backBorderStyle,options:[{label:"Choose Style",value:""},{label:"Solid",value:"solid"},{label:"Dashed",value:"dashed"},{label:"Dotted",value:"dotted"},{label:"Double",value:"double"},{label:"Grooved",value:"grooved"},{label:"Outset",value:"outset"},{label:"Ridge",value:"ridge"}],onChange:e=>c({backBorderStyle:e})}),(0,a.createElement)("h4",null," Border Color"),(0,a.createElement)(o.ColorPalette,{title:"Border Color",value:H,colors:[...d],onChange:e=>c({backBorderColor:e})}),(0,a.createElement)(o.__experimentalUnitControl,{label:(0,l.__)("Border Radius"),value:r.backBorderRadius,onChange:e=>c({backBorderRadius:e})}))),(0,a.createElement)(o.PanelBody,{title:(0,l.__)("Back Content","high-flip-block"),initialOpen:!1},(0,a.createElement)(o.PanelRow,null,(0,a.createElement)(o.PanelHeader,null," Back Sub-heading  "),(0,a.createElement)("h4",null," Subheading Color"),(0,a.createElement)(o.ColorPalette,{colors:[...d],value:r.backSubheadingColor,onChange:e=>c({backSubheadingColor:e})}),(0,a.createElement)("h4",null,"Subheading Align"),(0,a.createElement)(n.AlignmentToolbar,{value:r.backSubheadingAlign,onChange:e=>{c({backSubheadingAlign:e})}}),(0,a.createElement)(o.PanelHeader,null," Front Heading"),(0,a.createElement)("h4",null,"Heading Color"),(0,a.createElement)(o.ColorPalette,{colors:[...d],value:r.backHeadingColor,onChange:e=>c({backHeadingColor:e})}),(0,a.createElement)("h4",null,"Heading Align"),(0,a.createElement)(n.AlignmentToolbar,{value:r.backHeadingAlign,onChange:e=>{c({backHeadingAlign:e})}}),(0,a.createElement)(o.PanelHeader,null,"Back Text"),(0,a.createElement)("h4",null," Text  Color "),(0,a.createElement)(o.ColorPalette,{colors:[...d],value:r.backContentColor,onChange:e=>c({backContentColor:e})}),(0,a.createElement)("h4",null,"Text Align"),(0,a.createElement)(n.AlignmentToolbar,{value:r.backContentAlign,onChange:e=>{c({backContentAlign:e})}}))))),",",(0,a.createElement)("div",t({},(0,n.useBlockProps)(),{style:{height:N,width:z}}),(0,a.createElement)("div",null,Z&&(0,a.createElement)("div",{className:"high-flip-front-background",style:{backgroundColor:h,backgroundImage:`url(${s})`,backgroundPosition:p,backgroundSize:C,backgroundRepeat:m,borderWidth:v,borderColor:f,borderStyle:E,borderRadius:B}},(0,a.createElement)(n.RichText,t({},u,{tagName:"h3",className:"front-subheading",value:O,onChange:e=>c({subheading:e}),placeholder:"Subheading Goes Here",style:{color:F,textAlign:L}})),(0,a.createElement)(n.RichText,{tagName:"h2",className:"front-heading",value:W,onChange:e=>c({heading:e}),placeholder:"Heading Goes Here",style:{color:D,textAlign:M}}),(0,a.createElement)(n.RichText,t({},u,{tagName:"p",className:"card-content",multiline:"",value:I,onChange:e=>c({content:e}),placeholder:"Fron Content",style:{color:U,textAlign:G}}))),!Z&&(0,a.createElement)("div",{className:"high-flip-back-background",style:{backgroundColor:y,backgroundImage:`url(${_})`,backgroundPosition:S,backgroundSize:A,backgroundRepeat:P,borderWidth:w,borderColor:H,borderStyle:x,borderRadius:T}},(0,a.createElement)(n.RichText,t({},u,{tagName:"h3",className:"back-subheading",value:j,onChange:e=>c({backSubheading:e}),placeholder:"Subheading Goes Here",style:{color:q,textAlign:Q}})),(0,a.createElement)(n.RichText,{tagName:"h2",className:"back-heading",value:V,onChange:e=>c({backHeading:e}),placeholder:"Heading Goes Here",style:{color:J,textAlign:X}}),(0,a.createElement)(n.RichText,t({},u,{tagName:"p",className:"card-content",multiline:"",value:$,onChange:e=>c({backContent:e}),placeholder:"Back Content",style:{color:K,textAlign:Y}}))))))},save:function(e){let{attributes:l,isSelected:o,setAttributes:r,className:i}=e;const{alignment:c,backgroundColor:g,backgroundImage:d,backgroundPosition:u,backgroundAttachment:b,backgroundRepeat:h,backgroundSize:s,borderWidth:p,borderStyle:k,borderColor:m,borderRadius:C,backBackgroundColor:v,backBackgroundImage:E,backBackgroundPosition:f,backBackgroundAttachment:B,backBackgroundRepeat:y,backBackgroundSize:_,backBorderStyle:S,backBorderColor:R,backBorderWidth:P,backBorderRadius:A,height:w,width:x,subheading:H,heading:T,content:N,subheadingColor:z,headingColor:O,contentColor:W,subheadingAlign:I,headingAlign:F,contentAlign:D,backSubheading:U,backHeading:L,backContent:M,backSubheadingColor:G,backHeadingColor:j,backContentColor:V,backSubheadingAlign:$,backHeadingAlign:q,backContentAlign:J,panelSwitch:K}=l;return(0,a.createElement)("div",t({},n.useBlockProps.save(),{style:{height:w,width:x}}),(0,a.createElement)("div",{className:"high-inner-flip "+l.flipDirection},(0,a.createElement)("div",{className:"high-flip-front-background",style:{backgroundColor:g,backgroundImage:`url(${d})`,backgroundPosition:u,backgroundSize:s,backgroundRepeat:h,borderWidth:p,borderColor:m,borderStyle:k,borderRadius:C}},(0,a.createElement)(n.RichText.Content,{tagName:"h3",className:"flip-subhead front-subheading",value:l.subheading,style:{color:z,textAlign:I}}),(0,a.createElement)(n.RichText.Content,{tagName:"h2",className:"flip-head front-heading",value:l.heading,style:{color:O,textAlign:F}}),(0,a.createElement)(n.RichText.Content,{tagName:"p",className:"flip-content front-content",value:l.content,style:{color:W,textAlign:D}})),(0,a.createElement)("div",{className:"high-flip-back-background",style:{backgroundColor:v,backgroundImage:`url(${E})`,backgroundPosition:f,backgroundSize:_,backgroundRepeat:y,borderWidth:P,borderColor:R,borderStyle:S,borderRadius:A}},(0,a.createElement)(n.RichText.Content,{tagName:"h3",className:"flip-subhead back-subheading",value:l.backSubheading,style:{color:G,textAlign:$}}),(0,a.createElement)(n.RichText.Content,{tagName:"h2",className:"flip head back-heading",value:l.backHeading,style:{color:j,textAlign:q}}),(0,a.createElement)(n.RichText.Content,{tagName:"p",className:"flip-content back-content",value:l.backContent,style:{color:V,textAlign:J}}))))}})}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=function(t,a,n,o){if(!a){var r=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],o=e[d][2];for(var i=!0,c=0;c<a.length;c++)(!1&o||r>=o)&&Object.keys(l.O).every((function(e){return l.O[e](a[c])}))?a.splice(c--,1):(i=!1,o<r&&(r=o));if(i){e.splice(d--,1);var g=n();void 0!==g&&(t=g)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,n,o]},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,o,r=a[0],i=a[1],c=a[2],g=0;if(r.some((function(t){return 0!==e[t]}))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(c)var d=c(l)}for(t&&t(a);g<r.length;g++)o=r[g],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(d)},a=self.webpackChunkhigh_flip=self.webpackChunkhigh_flip||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var n=l.O(void 0,[431],(function(){return l(906)}));n=l.O(n)}();