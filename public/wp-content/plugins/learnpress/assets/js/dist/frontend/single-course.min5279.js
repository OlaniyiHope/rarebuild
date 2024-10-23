(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var o in s)e.o(s,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:s[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};window.React,window.wp.element,window.LP.quiz;const t=jQuery,{throttle:s}=lodash,o=()=>{const e=document.querySelector("#sidebar-toggle");e&&(t(window).innerWidth()<=768||LP.Cookies.get("sidebar-toggle")?e.setAttribute("checked","checked"):e.removeAttribute("checked"),document.querySelector("#popup-course").addEventListener("click",(e=>{var s;"sidebar-toggle"===e.target.id&&(LP.Cookies.set("sidebar-toggle",!!e.target.checked),s=LP.Cookies.get("sidebar-toggle"),t("body").removeClass("lp-sidebar-toggle__open"),t("body").removeClass("lp-sidebar-toggle__close"),s?t("body").addClass("lp-sidebar-toggle__close"):t("body").addClass("lp-sidebar-toggle__open"))}))),t("#learn-press-course-curriculum").find(".section-desc").each(((e,s)=>{const o=t('<span class="show-desc"></span>').on("click",(()=>{r.toggleClass("c")})),r=t(s).siblings(".section-title").append(o)})),t(".section").each((function(){const e=t(this);e.find(".section-left").on("click",(function(){const t=e.toggleClass("closed").hasClass("closed"),s=LP.Cookies.get("closed-section-"+lpGlobalSettings.post_id)||[],o=parseInt(e.data("section-id")),r=s.findIndex((e=>e==o));t?s.push(parseInt(e.data("section-id"))):s.splice(r,1),LP.Cookies.remove("closed-section-(.*)"),LP.Cookies.set("closed-section-"+lpGlobalSettings.post_id,[...new Set(s)])}))}))};document.addEventListener("DOMContentLoaded",(()=>{o()}));const r=window.wp.url,a=jQuery;let l=null;const n={elLPOverlay:null,elMainContent:null,elTitle:null,elBtnYes:null,elBtnNo:null,elFooter:null,elCalledModal:null,callBackYes:null,instance:null,init(){return!!this.instance||(this.elLPOverlay=a(".lp-overlay"),!!this.elLPOverlay.length&&(l=this.elLPOverlay,this.elMainContent=l.find(".main-content"),this.elTitle=l.find(".modal-title"),this.elBtnYes=l.find(".btn-yes"),this.elBtnNo=l.find(".btn-no"),this.elFooter=l.find(".lp-modal-footer"),a(document).on("click",".close, .btn-no",(function(){l.hide()})),a(document).on("click",".btn-yes",(function(e){e.preventDefault(),e.stopPropagation(),"function"==typeof n.callBackYes&&n.callBackYes()})),this.instance=this,!0))},setElCalledModal(e){this.elCalledModal=e},setContentModal(e,t){this.elMainContent.html(e),"function"==typeof t&&t()},setTitleModal(e){this.elTitle.html(e)}},c=n,i={elBtnFinishCourse:null,elBtnCompleteItem:null,init(){c.init()&&void 0!==lpGlobalSettings&&"yes"===lpGlobalSettings.option_enable_popup_confirm_finish&&(this.elBtnFinishCourse=document.querySelectorAll(".lp-btn-finish-course"),this.elBtnCompleteItem=document.querySelector(".lp-btn-complete-item"),this.elBtnCompleteItem&&this.elBtnCompleteItem.addEventListener("click",(e=>{e.preventDefault();const t=e.target.closest("form");c.elLPOverlay.show(),c.setTitleModal(t.dataset.title),c.setContentModal('<div class="pd-2em">'+t.dataset.confirm+"</div>"),c.callBackYes=()=>{t.submit()}})),this.elBtnFinishCourse&&this.elBtnFinishCourse.forEach((e=>e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.closest("form");c.elLPOverlay.show(),c.setTitleModal(t.dataset.title),c.setContentModal('<div class="pd-2em">'+t.dataset.confirm+"</div>"),c.callBackYes=()=>{t.submit()}})))))}},d=jQuery,u={init(){this.scrollToItemViewing=function(){const e=d(".viewing-course-item");if(e.length){const t=d("#learn-press-course-curriculum"),s=(d("#popup-sidebar").outerHeight(),d(".section-title").outerHeight(),d(".section-header").outerHeight()),o=new RegExp("^viewing-course-item-([0-9].*)"),r=e.attr("class").split(/\s+/);let a=0;if(d.each(r,(function(e,t){const s=o.exec(t);if(s)return a=s[1],!1})),0===a)return;const l=d(".course-item-"+a);l.addClass("current"),l.offset().top;const n=l.offset().top-t.offset().top+t.scrollTop();t.animate({scrollTop:LP.Hook.applyFilters("scroll-item-current",n-s)},800)}},this.scrollToItemViewing()}},p=()=>{const e=document.querySelector("#popup-course"),t=document.querySelector("#learn-press-course-curriculum");if(e&&t){const s=t.querySelector(".curriculum-sections"),o=e.querySelector(".search-course"),r=e.querySelector('.search-course input[type="text"]');if(!r||!s||!o)return;const a=s.querySelectorAll("li.section"),l=s.querySelectorAll("li.course-item"),n=[];l.forEach((e=>{const t=e.dataset.id,s=e.querySelector(".item-name");n.push({id:t,name:s?s.textContent.toLowerCase():""})}));const c=e=>{e.preventDefault();const t=r.value;o.classList.add("searching"),t||o.classList.remove("searching");const s=[];n.forEach((e=>{t&&!e.name.match(t.toLowerCase())||(s.push(e.id),l.forEach((e=>{-1!==s.indexOf(e.dataset.id)?e.classList.remove("hide-if-js"):e.classList.add("hide-if-js")})))})),a.forEach((e=>{const t=e.querySelectorAll(".course-item"),o=[];t.forEach((e=>{s.includes(e.dataset.id)&&o.push(e.dataset.id)})),0===o.length?e.classList.add("hide-if-js"):e.classList.remove("hide-if-js")}))},i=o.querySelector(".clear");i&&i.addEventListener("click",(e=>{e.preventDefault(),r.value="",c(e)})),o.addEventListener("submit",c),r.addEventListener("keyup",c)}};function m(e=""){let t=!1,s=!1;const o=async({ele:e,returnData:t,sectionID:s,itemID:o,data2:r,pages2:l,page2:n})=>{const c=(new DOMParser).parseFromString(t,"text/html");if(r){const e=c.querySelector(".curriculum-sections"),t=c.querySelector(".curriculum-more__button");t&&(l<=n?t.remove():t.dataset.page=n),e.insertAdjacentHTML("beforeend",r)}const i=c.querySelector(`[data-section-id="${s}"]`);if(i){const e=[...i.querySelectorAll(".course-item")].map((e=>e.dataset.id)),t=i.querySelector(".section-content"),r=i.querySelector(".section-item__loadmore");if(o&&!e.includes(o)){const e=await a("",2,s,o),{data3:l,pages3:n,paged3:c,page:i}=e;n<=c||n<=i?r.remove():r.dataset.page=i,l&&t&&t.insertAdjacentHTML("beforeend",l)}}e.insertAdjacentHTML("beforeend",c.body.innerHTML),u.init()},a=async(e,s,o,l)=>{let n=lpData.lp_rest_url+"lp/v1/lazy-load/course-curriculum-items/";n=(0,r.addQueryArgs)(n,{sectionId:o||"",page:s});let c={};0!==parseInt(lpData.user_id)&&(c={headers:{"X-WP-Nonce":lpData.nonce}});let i=await fetch(n,{method:"GET",...c});i=await i.json();const{data:d,status:u,pages:p,message:m}=i,{page:g}=d;let h;if("success"===u){const t=d.content;if(h=d.item_ids,e+=t,o&&h&&l&&!h.includes(l))return a(e,s+1,o,l)}return t=!1,{data3:e,pages3:p||d.pages,status3:u,message3:m,page:g||0}},l=async(t,o,a)=>{let n=lpData.lp_rest_url+"lp/v1/lazy-load/course-curriculum/";n=(0,r.addQueryArgs)(n,{courseId:e||lpGlobalSettings.post_id||"",page:o,sectionID:a||"",loadMore:!0});let c={};0!==parseInt(lpData.user_id)&&(c={headers:{"X-WP-Nonce":lpData.nonce}});let i=await fetch(n,{method:"GET",...c});i=await i.json();const{data:d,status:u,message:p}=i,m=d.content,g=d.section_ids,h=d.pages;return"success"===u&&(t+=m,a&&g&&g.length>0&&!g.includes(a))?l(t,o+1,a):(s=!1,{data2:t,pages2:h||d.pages,page2:o,status2:u,message2:p})};(()=>{const t=document.querySelector(".learnpress-course-curriculum");t&&(async t=>{const s=t.querySelector(".lp-skeleton-animation"),a=t.dataset.id,n=t.dataset.section;try{const s=1;let c=lpData.lp_rest_url+"lp/v1/lazy-load/course-curriculum/";c=(0,r.addQueryArgs)(c,{courseId:e||lpGlobalSettings.post_id||"",page:s,sectionID:n||""});let i={};0!==parseInt(lpData.user_id)&&(i={headers:{"X-WP-Nonce":lpData.nonce}});let d=await fetch(c,{method:"GET",...i});d=await d.json();const{data:u,status:p,message:m}=d,g=u.section_ids;if("error"===p)throw new Error(m||"Error");const h=u.content;if(n)if(g&&!g.includes(n)){const e=await l("",s+1,n);if(e){const{data2:s,pages2:r,page2:l}=e;await o({ele:t,returnData:h,sectionID:n,itemID:a,data2:s,pages2:r,page2:l})}}else await o({ele:t,returnData:h,sectionID:n,itemID:a});else h&&t.insertAdjacentHTML("beforeend",h)}catch(e){t.insertAdjacentHTML("beforeend",`<div class="lp-ajax-message error" style="display:block">${e.message||"Error: Query lp/v1/lazy-load/course-curriculum"}</div>`)}s&&s.remove(),p()})(t)})(),document.addEventListener("click",(e=>{[...document.querySelectorAll(".section-item__loadmore")].map((async s=>{if(s.contains(e.target)&&!t){t=!0;const e=s.parentNode,o=e.getAttribute("data-section-id"),r=e.querySelector(".section-content"),l=parseInt(s.dataset.page);s.classList.add("loading");try{const e=await a("",l+1,o,""),{data3:t,pages3:n,status3:c,message3:i}=e;if("error"===c)throw new Error(i||"Error");n<=l+1?s.remove():s.dataset.page=l+1,r.insertAdjacentHTML("beforeend",t)}catch(e){r.insertAdjacentHTML("beforeend",`<div class="lp-ajax-message error" style="display:block">${e.message||"Error: Query lp/v1/lazy-load/course-curriculum"}</div>`)}s.classList.remove("loading"),p()}})),[...document.querySelectorAll(".curriculum-more__button")].map((async t=>{if(t.contains(e.target)&&!s){s=!0;const e=parseInt(t.dataset.page),o=t.parentNode.parentNode.querySelector(".curriculum-sections");if(e&&o){t.classList.add("loading");try{const s=await l("",e+1,""),{data2:r,pages2:a,status2:n,message2:c}=s;if("error"===n)throw new Error(c||"Error");a<=e+1?t.remove():t.dataset.page=e+1,o.insertAdjacentHTML("beforeend",r)}catch(e){o.insertAdjacentHTML("beforeend",`<div class="lp-ajax-message error" style="display:block">${e.message||"Error: Query lp/v1/lazy-load/course-curriculum"}</div>`)}t.classList.remove("loading"),p()}}})),document.querySelector(".learnpress-course-curriculum")&&[...document.querySelectorAll(".section")].map((t=>{t.contains(e.target)&&t.querySelector(".section-left").contains(e.target)&&t.classList.toggle("closed")}))}))}const g=window.wp.apiFetch;var h=e.n(g);const y=jQuery;y(window).on("load",(()=>{y("#popup-course"),y("#learn-press-course-curriculum"),(()=>{const e=document.querySelectorAll(".course-extra-box");[...e].map((t=>{const s=t.querySelector(".course-extra-box__title");t.classList.remove("active");const o=t.querySelector(".course-extra-box__content");o.style.height="0",s.addEventListener("click",(()=>{const s=t.classList.contains("active");[...e].forEach((e=>{e!==t&&(e.classList.remove("active"),e.querySelector(".course-extra-box__content").style.height="0")})),s?(t.classList.remove("active"),o.style.height="0"):(t.classList.add("active"),o.style.height=o.scrollHeight+"px")}))}))})(),y("#learn-press-course-tabs").on("change",'input[name="learn-press-course-tab-radio"]',(function(e){const t=y('input[name="learn-press-course-tab-radio"]:checked').val();LP.Cookies.set("course-tab",t),y('label[for="'+y(e.target).attr("id")+'"]').closest("li").addClass("active").siblings().removeClass("active")})),function(){const e=y(".course-summary-sidebar");if(!e.length)return;const t=y(window),s=e.children(),o=e.offset();let r=0;const a=e.height(),l=s.height();t.on("scroll.fixed-course-sidebar",(function(){r=t.scrollTop();const n=r-o.top+32;if(n<0)return e.removeClass("slide-top slide-down"),void s.css("top","");n>a-l?(e.removeClass("slide-down").addClass("slide-top"),s.css("top",a-l)):(e.removeClass("slide-top").addClass("slide-down"),s.css("top",32))})).trigger("scroll.fixed-course-sidebar")}(),(()=>{const e=document.querySelectorAll("form.enroll-course");e.length>0&&e.forEach((e=>{e.addEventListener("submit",(t=>{t.preventDefault();const s=e.querySelector("input[name=enroll-course]").value,o=e.querySelector("button.button-enroll-course");o.classList.add("loading"),o.disabled=!0,(async(t,s)=>{try{const o=await wp.apiFetch({path:"lp/v1/courses/enroll-course",method:"POST",data:{id:t}});s.classList.remove("loading"),s.disabled=!1;const{status:r,data:{redirect:a},message:l}=o;l&&r&&(s.style.display="none",e.innerHTML+=`<div class="lp-enroll-notice ${r}">${l}</div>`,a&&(window.location.href=a))}catch(e){form.innerHTML+=`<div class="lp-enroll-notice error">${e.message&&e.message}</div>`}})(s,o)}))})),null!==document.querySelector(".course-detail-info")&&window.addEventListener("pageshow",(e=>{(e.persisted||void 0!==window.performance&&"back_forward"==String(window.performance.getEntriesByType("navigation")[0].type))&&location.reload()}))})(),(()=>{const e=document.querySelectorAll("form.purchase-course");e.length>0&&e.forEach((e=>{const t=async(s,o,r=!1)=>{try{const a=await wp.apiFetch({path:"lp/v1/courses/purchase-course",method:"POST",data:{id:s,repurchaseType:r}});o&&(o.classList.remove("loading"),o.disabled=!1);const{status:l,data:{redirect:n,type:i,html:d,titlePopup:u},message:p}=a;if("allow_repurchase"===i&&"success"===l){if(!e.querySelector(".lp_allow_repuchase_select")){if(!c.init())return;c.elLPOverlay.show(),c.setTitleModal(u||""),c.setContentModal(d),c.callBackYes=()=>{c.elLPOverlay.hide(),document.querySelectorAll(".lp_allow_repuchase_select").forEach((s=>{const o=s.querySelectorAll("[name=_lp_allow_repurchase_type]");for(let s=0,r=o.length;s<r;s++)if(o[s].checked){const r=o[s].value,a=e.querySelector("input[name=purchase-course]").value,l=e.querySelector("button.button-purchase-course");l.classList.add("loading"),l.disabled=!0,t(a,l,r);break}}))}}}else p&&l&&(e.innerHTML+=`<div class="lp-enroll-notice ${l}">${p}</div>`,"success"===l&&n&&(window.location.href=n))}catch(t){e.innerHTML+=`<div class="lp-enroll-notice error">${t.message&&t.message}</div>`}};e.addEventListener("submit",(s=>{s.preventDefault();const o=e.querySelector("input[name=purchase-course]").value,r=e.querySelector("button.button-purchase-course");r.classList.add("loading"),r.disabled=!0,t(o,r)}))}))})(),(()=>{const e=document.querySelectorAll(".lp-form-retake-course");e.length&&e.forEach((e=>{const t=e.querySelector(".button-retake-course"),s=e.querySelector("[name=retake-course]").value,o=e.querySelector(".lp-ajax-message");e.addEventListener("submit",(e=>{e.preventDefault()})),t.addEventListener("click",(e=>{var r;e.preventDefault(),t.classList.add("loading"),t.disabled=!0,r=t,wp.apiFetch({path:"/lp/v1/courses/retake-course",method:"POST",data:{id:s}}).then((e=>{const{status:t,message:s,data:a}=e;o.innerHTML=s,null!=t&&"success"===t?(r.style.display="none",setTimeout((()=>{window.location.replace(a.url_redirect)}),1e3)):o.classList.add("error")})).catch((e=>{o.classList.add("error"),o.innerHTML="error: "+e.message})).then((()=>{r.classList.remove("loading"),r.disabled=!1,o.style.display="block"}))}))}))})(),(()=>{const e=document.querySelectorAll(".lp-course-progress-wrapper");if(!e.length)return;if("IntersectionObserver"in window){const s=new IntersectionObserver(((e,o)=>{e.forEach((e=>{if(e.isIntersecting){const o=e.target;setTimeout((function(){t(o)}),600),s.unobserve(o)}}))}));[...e].map((e=>s.observe(e)))}const t=async e=>{const t=await wp.apiFetch({path:"lp/v1/lazy-load/course-progress",method:"POST",data:{courseId:lpGlobalSettings.post_id||"",userId:lpGlobalSettings.user_id||""}}),{data:s}=t;e.innerHTML=s}})(),(()=>{const e=document.querySelectorAll("form.continue-course");null!=e&&lpGlobalSettings.user_id>0&&(async e=>await wp.apiFetch({path:"lp/v1/courses/continue-course",method:"POST",data:{courseId:lpGlobalSettings.post_id||"",userId:lpGlobalSettings.user_id||""}}))().then((function(t){"success"===t.status&&e.forEach((e=>{e.style.display="block",e.action=t.data}))}))})(),i.init(),function(e=!1){const t=async(t,s=1)=>{let o=0;if(e){const e=document.querySelector(".learnpress-course-curriculum");if(!e)return;o=e.dataset.id||0}else o=lpGlobalSettings.post_id;const a=t.querySelector(".course-material-table"),l=document.querySelector(".lp-loadmore-material");try{const e=await h()({path:(0,r.addQueryArgs)(`lp/v1/material/item-materials/${o}`,{page:s}),method:"GET"}),{data:n,status:c,message:i,load_more:d}=e;if(200!==c)throw new Error(i||"Error");n.length>0&&(t.querySelector(".lp-skeleton-animation")&&t.querySelector(".lp-skeleton-animation").remove(),a.style.display="table",a.querySelector("tbody").insertAdjacentHTML("beforeend",n)),d?(l.style.display="inline-block",l.setAttribute("page",s+1),l.classList.contains("loading")&&l.classList.remove("loading")):l.style.display="none"}catch(e){console.log(e.message)}};(()=>{const e=document.querySelector(".lp-material-skeleton");if(!e)return;const s=e.querySelector(".lp-loadmore-material");e.querySelector(".course-material-table").style.display="none",s.style.display="none",t(e)})(),document.addEventListener("click",(function(e){const s=e.target;if(s.classList.contains("lp-loadmore-material")){const e=document.querySelector(".lp-material-skeleton"),o=parseInt(s.getAttribute("page"));s.classList.add("loading"),t(e,o)}}))}()}));const f=setInterval((function(){document.querySelector(".learnpress-course-curriculum")&&(m(),clearInterval(f))}),1);LP.Hook.addAction("lp_course_curriculum_skeleton",(function(e){m(e)}))})();