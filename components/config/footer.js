import { isIntranet, getLang } from '@utils';
import { jumpLocation } from '@utils/locale';

export const getFooterConfig = () => {
  const lang = getLang();
  const isEnglish = lang === 'en';

  const footerLinks = [
    // {
    //   title: isEnglish ? 'Resource' : '资源',
    //   links: [
    //     { name: isEnglish ? 'Design Resource' : '设计资源', url: jumpLocation('/source'), target: '_self' },
    //     { name: 'TDesign Starter', url: jumpLocation('https://tdesign.tencent.com/starter/'), target: '_self' }
    //   ],
    // },
    {
      title: '技术资源',
      links: [
        { name: '腾讯设计', url: 'https://tdesign.tencent.com/', target: '_blank' },
        { name: 'Vue', url: `https://cn.vuejs.org/`, target: '_blank' },
      ].filter(item => item),
    },
    {
      title: isEnglish ? 'About' : '关于',
      links: [
        { name: isEnglish ? 'About us' : '关于我们', url: 'https://everdt.com/new', target: '_blank' },
        { name: isEnglish ? 'Contact us' : '联系我们', url: jumpLocation('/about/contact'), target: '_self' },
        { name: isEnglish ? 'Feedback' : '意见反馈', url: 'https://support.qq.com/product/639009', target: '_blank' }
      ],
    },
  ];

  return footerLinks;
}
