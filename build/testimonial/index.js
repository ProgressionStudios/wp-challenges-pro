(()=>{"use strict";var e,t={80:()=>{const e=window.wp.blocks,t=window.React,a=window.wp.i18n,o=window.wp.blockEditor,l=JSON.parse('{"u2":"wp-challenges-pro/testimonial"}');(0,e.registerBlockType)(l.u2,{edit:function({attributes:e,setAttributes:l}){const{authorName:r,jobTitle:n}=e;return(0,t.createElement)("div",{...(0,o.useBlockProps)()},(0,t.createElement)("div",{className:"quote-icon-testimonial"},"“"),(0,t.createElement)("div",{className:"quote-content-testimonial"},(0,t.createElement)(o.InnerBlocks,{template:[["core/paragraph",{placeholder:(0,a.__)("Insert quote here","wp-challenges-pro"),content:(0,a.__)("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel venenatis lacus, at feugiat lacus.","wp-challenges-pro")}]]})),(0,t.createElement)("div",{className:"meta-testimonial"},(0,t.createElement)(o.RichText,{className:"author-testimonial",tagName:"div",value:r,allowedFormats:["core/bold","core/italic","core/link"],onChange:e=>l({authorName:e}),placeholder:(0,a.__)("Add Name...","wp-challenges-pro")}),(0,t.createElement)(o.RichText,{className:"job-title-testimonial",tagName:"div",value:n,allowedFormats:["core/bold","core/italic","core/link"],onChange:e=>l({jobTitle:e}),placeholder:(0,a.__)("Add job title...","wp-challenges-pro")})))},save:function({attributes:e}){const{authorName:a,jobTitle:l}=e;return(0,t.createElement)("div",{...o.useBlockProps.save()},(0,t.createElement)("div",{className:"quote-icon-testimonial"},"“"),(0,t.createElement)("div",{className:"quote-content-testimonial"},(0,t.createElement)(o.InnerBlocks.Content,null)),(0,t.createElement)("div",{className:"meta-testimonial"},(0,t.createElement)(o.RichText.Content,{...o.useBlockProps,tagName:"div",value:a}),(0,t.createElement)(o.RichText.Content,{...o.useBlockProps,tagName:"div",value:l})))}})}},a={};function o(e){var l=a[e];if(void 0!==l)return l.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,a,l,r)=>{if(!a){var n=1/0;for(m=0;m<e.length;m++){for(var[a,l,r]=e[m],i=!0,c=0;c<a.length;c++)(!1&r||n>=r)&&Object.keys(o.O).every((e=>o.O[e](a[c])))?a.splice(c--,1):(i=!1,r<n&&(n=r));if(i){e.splice(m--,1);var s=l();void 0!==s&&(t=s)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[a,l,r]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={556:0,313:0};o.O.j=t=>0===e[t];var t=(t,a)=>{var l,r,[n,i,c]=a,s=0;if(n.some((t=>0!==e[t]))){for(l in i)o.o(i,l)&&(o.m[l]=i[l]);if(c)var m=c(o)}for(t&&t(a);s<n.length;s++)r=n[s],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(m)},a=globalThis.webpackChunkwp_challenges_pro=globalThis.webpackChunkwp_challenges_pro||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=o.O(void 0,[313],(()=>o(80)));l=o.O(l)})();