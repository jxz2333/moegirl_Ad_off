// ==UserScript==
// @name         关闭萌娘百科的广告屏蔽器弹窗
// @namespace    your-namespace
// @version      1.0
// @description  关闭萌娘百科广告屏蔽器提示，建议搭配AdBlock使用
// @author       Jxz
// @match        https://zh.moegirl.org.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Auto click on the specified element
    function autoClick() {
        const elementToClick = document.querySelector('.fc-close');
        if (elementToClick) {
            elementToClick.click();
        }
    }

    // Observe DOM changes to auto click the element dynamically
    const observer = new MutationObserver(autoClick);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Auto click the element on page load
    autoClick();
})();
