(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(9267)}])},3686:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return j}});let r=i(8754),n=i(1757),o=i(5893),s=n._(i(7294)),l=r._(i(3935)),a=r._(i(6665)),c=i(1908),u=i(4706),d=i(5670);i(1558);let f=i(1973),m=r._(i(3293)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,i,r,n,o){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function g(e){let[t,i]=s.version.split(".",2),r=parseInt(t,10),n=parseInt(i,10);return r>18||18===r&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let v=(0,s.forwardRef)((e,t)=>{let{src:i,srcSet:r,sizes:n,height:l,width:a,decoding:c,className:u,style:d,fetchPriority:f,placeholder:m,loading:p,unoptimized:v,fill:b,onLoadRef:j,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:x,onLoad:S,onError:_,...C}=e;return(0,o.jsx)("img",{...C,...g(f),loading:p,width:a,height:l,decoding:c,"data-nimg":b?"fill":"1",className:u,style:d,sizes:n,srcSet:r,src:i,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&h(e,m,j,y,w,v))},[i,m,j,y,w,_,v,t]),onLoad:e=>{h(e.currentTarget,m,j,y,w,v)},onError:e=>{x(!0),"empty"!==m&&w(!0),_&&_(e)}})});function b(e){let{isAppRouter:t,imgAttributes:i}=e,r={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...g(i.fetchPriority)};return t&&l.default.preload?(l.default.preload(i.src,r),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...r},"__nimg-"+i.src+i.srcSet+i.sizes)})}let j=(0,s.forwardRef)((e,t)=>{let i=(0,s.useContext)(f.RouterContext),r=(0,s.useContext)(d.ImageConfigContext),n=(0,s.useMemo)(()=>{let e=p||r||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[r]),{onLoad:l,onLoadingComplete:a}=e,h=(0,s.useRef)(l);(0,s.useEffect)(()=>{h.current=l},[l]);let g=(0,s.useRef)(a);(0,s.useEffect)(()=>{g.current=a},[a]);let[j,y]=(0,s.useState)(!1),[w,x]=(0,s.useState)(!1),{props:S,meta:_}=(0,c.getImgProps)(e,{defaultLoader:m.default,imgConf:n,blurComplete:j,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...S,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:x,ref:t}),_.priority?(0,o.jsx)(b,{isAppRouter:!i,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1908:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),i(1558);let r=i(7386),n=i(4706);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var i;let l,a,c,{src:u,sizes:d,unoptimized:f=!1,priority:m=!1,loading:p,className:h,quality:g,width:v,height:b,fill:j=!1,style:y,onLoad:w,onLoadingComplete:x,placeholder:S="empty",blurDataURL:_,fetchPriority:C,layout:N,objectFit:P,objectPosition:z,lazyBoundary:E,lazyRoot:O,...R}=e,{imgConf:I,showAltText:M,blurComplete:k,defaultLoader:A}=t,F=I||n.imageConfigDefault;if("allSizes"in F)l=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t);l={...F,allSizes:e,deviceSizes:t}}let D=R.loader||A;delete R.loader,delete R.srcSet;let T="__next_img_default"in D;if(T){if("custom"===l.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:i,...r}=t;return e(r)}}if(N){"fill"===N&&(j=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[N];t&&!d&&(d=t)}let G="",B=s(v),L=s(b);if("object"==typeof(i=u)&&(o(i)||void 0!==i.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,c=e.blurHeight,_=_||e.blurDataURL,G=e.src,!j){if(B||L){if(B&&!L){let t=B/e.width;L=Math.round(e.height*t)}else if(!B&&L){let t=L/e.height;B=Math.round(e.width*t)}}else B=e.width,L=e.height}}let W=!m&&("lazy"===p||void 0===p);(!(u="string"==typeof u?u:G)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,W=!1),l.unoptimized&&(f=!0),T&&u.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),m&&(C="high");let J=s(g),U=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:z}:{},M?{}:{color:"transparent"},y),V=k||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:B,heightInt:L,blurWidth:a,blurHeight:c,blurDataURL:_||"",objectFit:U.objectFit})+'")':'url("'+S+'")',q=V?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},X=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:o,sizes:s,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:a,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,s),u=a.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:a.map((e,r)=>l({config:t,src:i,quality:o,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:l({config:t,src:i,quality:o,width:a[u]})}}({config:l,src:u,unoptimized:f,width:B,quality:J,sizes:d,loader:D});return{props:{...R,loading:W?"lazy":p,fetchPriority:C,width:B,height:L,decoding:"async",className:h,style:{...U,...q},sizes:X.sizes,srcSet:X.srcSet,src:X.src},meta:{unoptimized:f,priority:m,placeholder:S,fill:j}}}},7386:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:o,objectFit:s}=e,l=r?40*r:t,a=n?40*n:i,c=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},7481:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{getImageProps:function(){return l},default:function(){return a}});let r=i(8754),n=i(1908),o=i(3686),s=r._(i(3293)),l=e=>{let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},a=o.Image},3293:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},9267:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return o}});var r=i(5893);i(5675),i(9575);var n=i(7294);function o(){let e=(0,n.useRef)(),t=(0,n.useRef)(),i=(0,n.useRef)(),[o,s]=(0,n.useState)([]),[l,a]=(0,n.useState)(!1);async function c(){let e=await fetch("".concat("http://localhost:3000/","/api/hello"),{method:"GET",headers:{"Content-Type":"application/json"}});s((await e.json()).information)}async function u(){let t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.current.value.trim()})},i=await fetch("".concat("http://localhost:3000/","/api/hello"),t),r=await i.json();a(!0);let n=r.information;s([...o,{id:n.id,name:n.name}])}return(0,n.useEffect)(()=>{c()},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("main",{className:"bg-gray",children:(0,r.jsxs)("div",{className:"row mt-4",children:[(0,r.jsx)("div",{className:"col-md-4"}),(0,r.jsxs)("div",{className:"col-md-4 mb-4",children:[(0,r.jsx)("h1",{children:"All Data"}),o.map((e,t)=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("span",{className:"me-2",children:[e.id,"."]}),(0,r.jsx)("span",{children:e.name}),(0,r.jsx)("br",{})]}))]}),(0,r.jsx)("div",{className:"col-md-4"}),(0,r.jsx)("div",{className:"col-md-4"}),(0,r.jsxs)("div",{className:"col-md-4",children:[(0,r.jsx)("label",{htmlFor:"",children:"Name"}),(0,r.jsx)("input",{type:"text",className:"form-control",ref:e}),(0,r.jsx)("label",{htmlFor:"",children:"Address"}),(0,r.jsx)("input",{type:"text",className:"form-control",ref:t}),(0,r.jsx)("label",{htmlFor:"",children:"Contact Number"}),(0,r.jsx)("input",{type:"text",className:"form-control",ref:i}),l?(0,r.jsx)("div",{className:"text-success",children:"Success"}):null,(0,r.jsx)("input",{type:"button",value:"Save",className:"btn btn-primary mt-3",onClick:u})]}),(0,r.jsx)("div",{className:"col-md-4"})]})})})}},9575:function(){},5675:function(e,t,i){i(7481)}},function(e){e.O(0,[29,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);