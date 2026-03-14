// ==UserScript==
// @name         WorldCat 图书馆列表导出
// @namespace    worldcat_tools
// @version      2.0
// @description  自动翻页导出WorldCat全部图书馆
// @match        https://www.worldcat.org/*
// @match        https://search.worldcat.org/*
// @grant        none
// ==/UserScript==

(function () {
'use strict';

let collected = new Set();
let running = false;

function sleep(ms){
    return new Promise(r=>setTimeout(r,ms));
}

function extractLibraries(){

    document.querySelectorAll("a[href*='/libraries/']").forEach(el=>{

        let name = el.textContent.trim();

        if(!name) return;

        name = name.split("\n")[0].trim();

        if(name.length<2 || name.length>120) return;

        collected.add(name);

    });

}

function getNextButton(){

    return document.querySelector('button[aria-label*="Next"],button[aria-label*="next"]');

}

async function startCollect(){

    if(running) return;

    running=true;

    while(true){

        extractLibraries();

        await sleep(2000);   // 页面读取间隔

        let next=getNextButton();

        if(!next || next.disabled){

            break;

        }

        next.click();

        await sleep(3500);   // 翻页加载时间

    }

    let result=[...collected].join("\n");

    try{
        await navigator.clipboard.writeText(result);
    }catch(e){

        let textarea=document.createElement("textarea");
        textarea.value=result;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();

    }

    alert("完成！共导出 "+collected.size+" 个图书馆，已复制到剪贴板");

    running=false;

}

function createButton(){

    let btn=document.createElement("button");

    btn.textContent="自动导出全部图书馆";

    btn.style.position="fixed";
    btn.style.bottom="20px";
    btn.style.right="20px";
    btn.style.zIndex="9999";
    btn.style.padding="10px 16px";
    btn.style.background="#1976d2";
    btn.style.color="white";
    btn.style.border="none";
    btn.style.borderRadius="6px";
    btn.style.cursor="pointer";
    btn.style.fontSize="14px";
    btn.style.boxShadow="0 2px 6px rgba(0,0,0,0.3)";

    btn.onclick=startCollect;

    document.body.appendChild(btn);

}

window.addEventListener("load",()=>{

    setTimeout(createButton,1500);

});

})();