import { html, define } from 'hybrids';
import style from './style.less';
import portalStyle from './portal.less';
import menuApplicationIcon from '@images/menu-application.svg?raw';
import chevronRightIcon from '@images/chevron-right.svg?raw';
import { isIntranet } from '@utils/index';
import { logoMenuConfigCdn, logoMenuConfigWoaCdn, logoMenuSvgPrefix } from '@config';
import { getHeaderConfig } from '@config/header.js';

const headerConfig = getHeaderConfig();
const { menus } = headerConfig;


function renderLinks({site,title}) {
  const gitLink = html`
    <a class="home" href="${site}" title="${title}" target="_blank">
     ${title}
    </a>
  `;
  return gitLink;
}

function renderList(list = []) {
  return html`
    <div class="list">
      ${list.map(item => (html`
        <a class="item" href="${item.url}" target="${item.target}">
          <img class="icon" src="${logoMenuSvgPrefix}/${item.key}.svg" />
          <div class="details">
            <span class="name">${item.title}</span>
            <span class="desc">${item.desc}</span>
          </div>
        </a>`))
      }
    </div>`;
}

function renderMenu(list) {
  const len = list.length;
  return list.map((item, index) => html`
    ${
      item.category_url ? html`
        <a href="${item.category_url}" class="title" target="${item.target}">
          ${item.category_title} <i innerHTML="${chevronRightIcon}"></i>
        </a>
      ` : html`
        <span class="title">
          ${item.category_title}
        </span>
      `
    }
    ${renderList(item.children)}
    ${index < (len - 1) ? html`<div class="line"></div>` : html``}
  `);
}

export default define({
  tag: 'td-logo',
  site: '/',
  title: '文档中心',
  menuList: {
    get: (host, lastValue) => lastValue || [],
    set: (host, value) => value,
    connect: (host) => {
      // const menuCdn = isIntranet() ? logoMenuConfigWoaCdn : logoMenuConfigCdn;
      const menuList = menus;
      // fetch(menuCdn).then(res => res.json()).then(menuList => {
      // 整理 menu 字段
      menuList.forEach(menu => {
        menu.target = '_blank';
        menu.children.forEach(child => {
          if (child.url.includes('tdesign')) {
            child.target = '_self';
          } else {
            child.target = '_blank';
          }
        });
      });
      Object.assign(host, { menuList });
      // });
    },
  },
  isIntranet: {
    get: () => isIntranet(),
    set: (value) => value,
    connect: (host) => {
      // var url;
      //
      // url = window.location.href; /* 获取完整URL */
      // console.log(url); /* http://127.0.0.1:8020/Test/index.html#test?name=test */
      //
      // url = window.location.pathname; /* 获取文件路径（文件地址） */
      // console.log(url); /* /Test/index.html */
      //
      // url = window.location.protocol; /* 获取协议 */
      // console.log(url); /* http */
      //
      // url = window.location.host; /* 获取主机地址和端口号 */
      // console.log(url); /* http://127.0.0.1:8020/ */
      //
      // url = window.location.hostname; /* 获取主机地址 */
      // console.log(url); /* http://127.0.0.1/ */
      //
      // url = window.location.port; /* 获取端口号 */
      // console.log(url); /* 8020 */
      //
      // url = window.location.hash; /* 获取锚点（“#”后面的分段） */
      // console.log(url); /* #test?name=test */
      //
      // url = window.location.search; /* 获取属性（“?”后面的分段） */
      // console.log(url);
      //
      // /* 如果需要URL中的某一部分，可以自己进行处理 */
      // url = window.location.pathname;
      // url = url.substring(url.lastIndexOf('/') + 1, url.length);
      // console.log(url); /* /index.html */

      // const menuCdn = isIntranet() ? logoMenuConfigWoaCdn : logoMenuConfigCdn;
      // const menuList = menus;
      // fetch(menuCdn).then(res => res.json()).then(menuList => {
        // console.log(menuList);
        // console.log(111)
        // 整理 menu 字段
      // menuList.forEach(menu => {
      //   menu.target = '_blank';
      //   menu.children.forEach(child => {
      //     if (child.url.includes('tdesign')) {
      //       child.target = '_self';
      //     } else {
      //       child.target = '_blank';
      //     }
      //   });
      // });
      // Object.assign(host, { menuList });
      // });
    },
  },
  render: (host) =>{
    const { site,title,menuList } = host;
    return  html`
    <style>${style}</style>
    <div class="TDesign-header-logo">
      <td-doc-popup portalStyle="${portalStyle}" placement="bottom-start">
        <div class="TDesign-header-logo__menu" innerHTML="${menuApplicationIcon}"></div>
        <div slot="content" class="TDesign-header-logo__content">
          ${renderMenu(menuList)}
        </div>
      </td-doc-popup>
      <span class="divider"></span>
      ${renderLinks(host)}
    </div>
  `;
  }
});
