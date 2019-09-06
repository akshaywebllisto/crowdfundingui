/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(e,o,i){if(void 0===o){var n=null;if(document.cookie&&""!=document.cookie)for(var r=document.cookie.split(";"),t=0;t<r.length;t++){var p=jQuery.trim(r[t]);if(p.substring(0,e.length+1)==e+"="){n=decodeURIComponent(p.substring(e.length+1));break}}return n}i=i||{},null===o&&(o="",i.expires=-1);var s,u="";i.expires&&("number"==typeof i.expires||i.expires.toUTCString)&&("number"==typeof i.expires?(s=new Date).setTime(s.getTime()+24*i.expires*60*60*1e3):s=i.expires,u="; expires="+s.toUTCString());var c=i.path?"; path="+i.path:"",m=i.domain?"; domain="+i.domain:"",a=i.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(o),u,c,m,a].join("")};