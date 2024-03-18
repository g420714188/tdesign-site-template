import vueIcon from '../src/images/vue-logo.svg?url';
import reactIcon from '../src/images/react-logo.svg?url';
import wxIcon from '../src/images/wx-logo.svg?url';
import flutterIcon from '../src/images/flutter-logo.svg?url';
import { isIntranet, getLang } from "@utils/index";
import { jumpLocation } from '@utils/locale';

const headerList = [
  {
    name: '设计',
    path: jumpLocation('/design'),
    type: 'main',
    target: '_self',
  },
  {
    name: '基础组件',
    path: '/vue/',
    type: 'base',
    target: '_self',
  },
  {
    name: '行业组件',
    path: '/trade',
    type: 'main',
    target: '_self',
  },
  {
    name: '页面模板',
    path: 'https://tdesign.tencent.com/starter/',
    type: 'main',
    target: '_self',
  },
  {
    name: '资源',
    path: jumpLocation('/source'),
    type: 'main',
    target: '_self',
  },
  {
    name: '关于',
    path: jumpLocation('/about'),
    type: 'main',
    target: '_self',
  },
];

const menus = [
  {
    "category_title": "腾讯设计云1",
    "category_url": "https://design.tencent.com/?utm_source=tdc&utm_medium=tdc.nav",
    "children": [
      {
        "key": "tdesign",
        "title": "TDesign",
        "url": "https://tdesign.tencent.com/?utm_source=tdc&utm_medium=tdc.nav",
        "desc": "企业级设计体系1"
      },
      {
        "key": "codesign",
        "title": "CoDesign",
        "url": "https://codesign.qq.com/?utm_source=tdc&utm_medium=tdc.nav",
        "desc": "一站式设计协作平台1"
      },
      {
        "key": "aidesign",
        "title": "AIDesign",
        "url": "https://design.tencent.com/product?tabIndex=4&utm_source=tdc&utm_medium=tdc.nav",
        "desc": "智能设计服务平台1"
      },
      {
        "key": "prowork",
        "title": "ProWork",
        "url": "https://prowork.qq.com/?utm_source=tdc&utm_medium=tdc.nav",
        "desc": "高效的团队协同平台1"
      }
    ]
  },
  {
    "category_title": "腾讯调研云1",
    "category_url": null,
    "children": [
      {
        "key": "wj",
        "title": "腾讯问卷",
        "url": "https://wj.qq.com/?utm_source=tdc&utm_medium=tdc.nav",
        "desc": "免费的问卷调查系统1"
      },
      {
        "key": "txc",
        "title": "兔小巢",
        "url": "https://txc.qq.com/?utm_source=tdc&utm_medium=tdc.nav",
        "desc": "用户反馈服务平台1"
      }
    ]
  }
];

const baseComponentsLinks = {
  web: {
    name: 'Web 桌面端',
    links: [
      {
        name: 'Vue', icon: vueIcon, path: jumpLocation('/vue/overview'), npm: 'tdesign-vue', status: 1,
      },
      {
        name: 'Vue Next', icon: vueIcon, path: jumpLocation('/vue-next/overview'), npm: 'tdesign-vue-next', status: 1,
      },
      {
        name: 'React', icon: reactIcon, path: jumpLocation('/react/overview'), npm: 'tdesign-react', status: 1,
      }
    ],
  },
  mobile: {
    name: 'Mobile 移动端',
    links: [
      {
        name: 'Vue Next', icon: vueIcon, path: jumpLocation('/mobile-vue/overview'), npm: 'tdesign-mobile-vue', status: 3,
      },
      {
        name: 'React', icon: reactIcon, path: jumpLocation('/mobile-react/overview'), npm: 'tdesign-mobile-react', status: 2,
      },
      {
        name: 'Flutter', icon: flutterIcon, path: jumpLocation('/flutter/overview'), npm: 'tdesign-flutter', status: 2,
      },
      {
        name: '微信小程序', icon: wxIcon, path: jumpLocation('/miniprogram/overview'), npm: 'tdesign-miniprogram', status: 1,
      },
      {
        name: 'QQ 小程序', icon: wxIcon, path: jumpLocation('/qq-miniprogram/overview'), npm: 'tdesign-qq-miniprogram', status: 2,
      },
      {
        name: 'Taro', icon: wxIcon, path: jumpLocation('/taro/overview'), npm: 'tdesign-taro', status: 0,
      },
    ],
  },
};

const baseComponentPrefix = ['vue', 'react', 'mobile-vue', 'mobile-react', 'vue-next', 'flutter', 'miniprogram'];

export default {
  headerList,
  baseComponentsLinks,
  baseComponentPrefix,
};

export const getHeaderConfig = () => {
  const intranet = isIntranet();
  const lang = getLang();
  const isEnglish = lang === 'en';

  const headerList = [
    { name: isEnglish ? 'Design' : '设计', path: jumpLocation('/design'), type: 'main', target: '_self' },
    { name: isEnglish ? 'Components' : '基础组件', path: jumpLocation('/vue/overview'), type: 'base', target: '_self' },
    intranet ? { name: isEnglish ? 'Industry component' : '行业组件', path: '/trade', type: 'main', target: '_self' } : null,
    { name: isEnglish ? 'Templates' : '页面模板', path: 'https://tdesign.tencent.com/starter/', type: 'main', target: '_self' },
    { name: isEnglish ? 'Resources' : '资源', path: jumpLocation('/source'), type: 'main', target: '_self' },
    { name: isEnglish ? 'About' : '关于', path: jumpLocation('/about/introduce'), type: 'main', target: '_self' },
  ].filter(item => item);

  const baseComponentsLinks = {
      web: {
        name: isEnglish ? 'Web PC' : 'Web 桌面端',
        links: [
          {
            name: 'Vue', icon: vueIcon, path: jumpLocation('/vue/overview'), npm: 'tdesign-vue', status: 1,
          },
          {
            name: 'Vue Next', icon: vueIcon, path: jumpLocation('/vue-next/overview'), npm: 'tdesign-vue-next', status: 1,
          },
          {
            name: 'React', icon: reactIcon, path: jumpLocation('/react/overview'), npm: 'tdesign-react', status: 1,
          }
        ],
      },
      mobile: {
        name: isEnglish ? 'Mobile' : 'Mobile 移动端',
        links: [
          {
            name: 'Vue Next', icon: vueIcon, path: jumpLocation('/mobile-vue/overview'), npm: 'tdesign-mobile-vue', status: 3,
          },
          {
            name: 'React', icon: reactIcon, path: jumpLocation('/mobile-react/overview'), npm: 'tdesign-mobile-react', status: 2,
          },
          {
            name: 'Flutter', icon: flutterIcon, path: jumpLocation('/flutter/overview'), npm: 'tdesign-flutter', status: 2,
          },
          {
            name: isEnglish ? 'WeChat-Miniprogram' : '微信小程序', icon: wxIcon, path: jumpLocation('/miniprogram/overview'), npm: 'tdesign-miniprogram', status: 1,
          },
          {
            name: isEnglish ? 'QQ-Miniprogram' : 'QQ 小程序', icon: wxIcon, path: jumpLocation('/qq-miniprogram/overview'), npm: 'tdesign-qq-miniprogram', status: 2,
          },
          {
            name: 'Taro', icon: wxIcon, path: jumpLocation('/taro/overview'), npm: 'tdesign-taro', status: 0,
          },
        ],
      },
  };

  const baseComponentPrefix = ['vue', 'react', 'mobile-vue', 'mobile-react', 'vue-next', 'flutter', 'miniprogram'];

  return {
    headerList,
    baseComponentsLinks,
    baseComponentPrefix,
    menus: menus
  };
}
