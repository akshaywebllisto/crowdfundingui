function changeMoneyUnitToJpy(n){$(n).each(function(){var n=$(this).html();$(this).html(n.replace(/\u5186|circle|yen/gi,"JPY"))})}function undoChangeMoneyUnit(n){$(n).each(function(){var n=$(this).html();$(this).html(n.replace(/JPY/g,"\u5186"))})}$(function(){var n='[data-js="money-unit"]';window.addEventListener("wovnLangChanged",function(){"ja"===WOVN.io.getCurrentLang().code?undoChangeMoneyUnit(n):changeMoneyUnitToJpy(n)})}),$(function(){var n=window.navigator.languages&&window.navigator.languages[0]||window.navigator.language||window.navigator.userLanguage||window.navigator.browserLanguage;"ja"!==n&&"ja-JP"!==n&&changeMoneyUnitToJpy('[data-js="money-unit"]')});