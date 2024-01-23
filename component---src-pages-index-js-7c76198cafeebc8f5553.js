"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,l=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,r=/[_.\- ]+/,i=new RegExp("^"+r.source),s=new RegExp(r.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const r=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):r(e);return e!==r(e)&&(e=((e,l,n)=>{let r=!1,i=!1,s=!1;for(let o=0;o<e.length;o++){const c=e[o];r&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),r=!1,s=i,i=!0,o++):i&&s&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),s=i,i=!1,r=!0):(r=l(c)===c&&n(c)!==c,s=i,i=n(c)===c&&l(c)!==c)}return e})(e,r,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(l.lastIndex=0,e.replace(l,(e=>t(e)))))(e,r):r(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,o.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return _},L:function(){return f},M:function(){return N},P:function(){return k},S:function(){return H},_:function(){return s},a:function(){return i},b:function(){return u},c:function(){return c},g:function(){return m},h:function(){return o}});var l=a(7294),n=(a(3204),a(5697)),r=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t.indexOf(a=r[l])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a){const l={};let n="gatsby-image-wrapper";return"fixed"===a?(l.width=e,l.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:l}}function u(e,t,a,l,n){return void 0===n&&(n={}),i({},a,{loading:l,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function m(e,t,a,l,n,r,s,o){const c={};r&&(c.backgroundColor=r,"fixed"===a?(c.width=l,c.height=n,c.backgroundColor=r,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const g=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?l.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?l.createElement("div",{style:{maxWidth:a,display:"block"}},l.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=s(e,g);return l.createElement(l.Fragment,null,l.createElement(p,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],E=function(e){let{src:t,srcSet:a,loading:n,alt:r="",shouldLoad:o}=e,c=s(e,h);return l.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:r}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,r=s(e,y);const o=r.sizes||(null==t?void 0:t.sizes),c=l.createElement(E,i({},r,t,{sizes:o,shouldLoad:n}));return a.length?l.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:r}=e;return l.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var v;E.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],k=function(e){let{fallback:t}=e,a=s(e,w);return t?l.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):l.createElement("div",i({},a))};k.displayName="Placeholder",k.propTypes={fallback:n.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const N=function(e){return l.createElement(l.Fragment,null,l.createElement(b,i({},e)),l.createElement("noscript",null,l.createElement(b,i({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=b.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],x=["style","className"],C=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var l=arguments.length,n=new Array(l>3?l-3:0),i=3;i<l;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?r().string.apply(r(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:r().object.isRequired,alt:L},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],O=new Set;let P,R;const A=function(e){let{as:t="div",image:n,style:r,backgroundColor:c,className:u,class:m,onStartLoad:g,onLoad:p,onError:f}=e,h=s(e,T);const{width:y,height:E,layout:b}=n,v=d(y,E,b),{style:w,className:k}=v,N=s(v,j),S=(0,l.useRef)(),x=(0,l.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const C=function(e,t,a){let l="";return"fullWidth"===e&&(l='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(l='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),l}(b,y,E);return(0,l.useEffect)((()=>{P||(P=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(x);if(R&&O.has(x))return;let t,l;return P.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;S.current&&(S.current.innerHTML=a(i({isLoading:!0,isLoaded:O.has(x),image:n},h)),O.has(x)||(t=requestAnimationFrame((()=>{S.current&&(l=s(S.current,x,O,r,g,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),l&&l()}}),[n]),(0,l.useLayoutEffect)((()=>{O.has(x)&&R&&(S.current.innerHTML=R(i({isLoading:O.has(x),isLoaded:O.has(x),image:n},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,l.createElement)(t,i({},N,{style:i({},w,r,{backgroundColor:c}),className:k+(u?" "+u:""),ref:S,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},_=(0,l.memo)((function(e){return e.image?(0,l.createElement)(A,e):null}));_.propTypes=I,_.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:n,__error:r}=t,o=s(t,q);return r&&console.warn(r),n?l.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const D=z((function(e){let{as:t="div",className:a,class:n,style:r,image:o,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:h,objectFit:y,objectPosition:E}=e,b=s(e,S);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=i({objectFit:y,objectPosition:E,backgroundColor:h},p);const{width:v,height:w,layout:L,images:I,placeholder:T,backgroundColor:j}=o,O=d(v,w,L),{style:P,className:R}=O,A=s(O,x),_={fallback:void 0,sources:[]};return I.fallback&&(_.fallback=i({},I.fallback,{srcSet:I.fallback.srcSet?C(I.fallback.srcSet):void 0})),I.sources&&(_.sources=I.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),l.createElement(t,i({},A,{style:i({},P,r,{backgroundColor:h}),className:R+(a?" "+a:"")}),l.createElement(f,{layout:L,width:v,height:w},l.createElement(k,i({},m(T,!1,L,v,w,j,y,E))),l.createElement(N,i({"data-gatsby-image-ssr":"",className:g},b,u("eager"===c,!1,_,c,p)))))})),F=function(e,t){for(var a=arguments.length,l=new Array(a>2?a-2:0),n=2;n<a;n++)l[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(l)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),M={src:r().string.isRequired,alt:L,width:F,height:F,sizes:r().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};D.displayName="StaticImage",D.propTypes=M;const H=z(_);H.displayName="StaticImage",H.propTypes=M},5347:function(e,t,a){a.d(t,{l:function(){return r}});var l=a(7294),n=a(4160);const r=()=>l.createElement("div",{className:"navbar-color"},l.createElement("div",{className:"navbar-links"},l.createElement("ul",null,l.createElement("li",null,l.createElement(n.rU,{to:"/"},l.createElement("h1",null,"portfolio"))),l.createElement("li",null,l.createElement(n.rU,{to:"/about"},"yaxin")))))},3463:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c},default:function(){return o}});var l=a(7294),n=a(5347);function r(e){let{children:t}=e;return l.createElement("div",null,t)}var i=a(8032),s=a(4160);var o=e=>{let{data:t}=e;const{edges:o}=t.allMarkdownRemark;return l.createElement(l.Fragment,null,l.createElement(n.l,null),l.createElement(r,null,l.createElement("div",{className:"columns-container"},l.createElement("div",{className:"left-container"},l.createElement(i.S,{src:"../images/yding.jpg",alt:"Creator of this site",className:"profile-pic",__imageData:a(1125)}),l.createElement("div",{className:"left-container-txt"},l.createElement("p",null,"A collection of projects made by Yaxin Ding - MSc Software Systems Engineering graduate from UCL."))),l.createElement("div",{className:"right-container"},l.createElement("div",{className:"right-container-txt"},l.createElement("h3",null,"Favourites ♡"),l.createElement("div",{className:"blog-posts-container"},l.createElement("div",{className:"blog-posts"},o.filter((e=>!0===e.node.frontmatter.featured)).map((e=>{var t,a;let{node:n}=e;return l.createElement("div",{className:"blog-post-preview",key:n.id},l.createElement("div",{className:"blog-post-image-container"},l.createElement(i.G,{image:(0,i.c)(null===(t=n.frontmatter.thumbnail)||void 0===t||null===(a=t.childImageSharp)||void 0===a?void 0:a.gatsbyImageData),className:"post-icon",alt:"image"})),l.createElement("div",{className:"blog-content-container"},l.createElement("h1",null,l.createElement(s.rU,{to:n.frontmatter.path},n.frontmatter.title)),l.createElement("div",{className:"tech-pills"},n.frontmatter.skills.map(((e,t)=>l.createElement("p",{className:"pill"}," ",e," ")))),l.createElement("p",null,n.excerpt)))}))))))),l.createElement("div",{className:"lower-page-container"},l.createElement("div",{className:"down-arrow-container"},l.createElement("div",{className:"down-arrow"},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",strokeWidth:"1.5",viewBox:"0 0 24 24",stroke:"currentColor",className:"down-arrow-svg"},l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})))),l.createElement("h2",{className:"tech-stack-title"}," Tech Stack"),l.createElement("div",{className:"tech-stack-container"},l.createElement("div",{className:"tech-stack-flex-item"},l.createElement("div",{className:"languages-list"},l.createElement("h3",null,"Languages"),l.createElement("ul",null,l.createElement("li",null,"Python"),l.createElement("li",null,"Java"),l.createElement("li",null,"JavaScript"),l.createElement("li",null,"Ruby"),l.createElement("li",null,"Haskell"),l.createElement("li",null,"Flutter"),l.createElement("li",null,"TypeScript")))),l.createElement("div",{className:"tech-stack-flex-item"},l.createElement("div",{className:"devtools-list"},l.createElement("h3",null,"Dev Tools"),l.createElement("ul",null,l.createElement("li",null,"Google Cloud Platform (GCP)"),l.createElement("li",null,"Amazon Web Services (AWS)"),l.createElement("li",null,"GitHub"),l.createElement("li",null,"GitLab"),l.createElement("li",null,"Jira"),l.createElement("li",null,"Confluence"),l.createElement("li",null,"Docker")))),l.createElement("div",{className:"tech-stack-flex-item"},l.createElement("div",{className:"skills-list"},l.createElement("h3",null,"Skills"),l.createElement("ul",null,l.createElement("li",null,"English (Fluent)"),l.createElement("li",null,"Chinese - Mandarin (Fluent)"),l.createElement("li",null,"Cooking"),l.createElement("li",null,"Digital Art"),l.createElement("li",null,"Piano"),l.createElement("li",null,"Violin"),l.createElement("li",null,"Sleeping"))))))))};const c=()=>l.createElement("title",null,"Home Page")},1125:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181808","images":{"fallback":{"src":"/portfolio/static/0e7d76010f0bd7fa62d292d490355cf2/b36b0/yding.jpg","srcSet":"/portfolio/static/0e7d76010f0bd7fa62d292d490355cf2/93197/yding.jpg 768w,\\n/portfolio/static/0e7d76010f0bd7fa62d292d490355cf2/173a4/yding.jpg 1536w,\\n/portfolio/static/0e7d76010f0bd7fa62d292d490355cf2/b36b0/yding.jpg 3072w","sizes":"(min-width: 3072px) 3072px, 100vw"},"sources":[{"srcSet":"/portfolio/static/0e7d76010f0bd7fa62d292d490355cf2/910b8/yding.webp 768w,\\n/portfolio/static/0e7d76010f0bd7fa62d292d490355cf2/2b1b7/yding.webp 1536w,\\n/portfolio/static/0e7d76010f0bd7fa62d292d490355cf2/b0df0/yding.webp 3072w","type":"image/webp","sizes":"(min-width: 3072px) 3072px, 100vw"}]},"width":3072,"height":4080}')}}]);
//# sourceMappingURL=component---src-pages-index-js-7c76198cafeebc8f5553.js.map