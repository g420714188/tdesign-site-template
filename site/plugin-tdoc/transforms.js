import mdToVue from './md-to-vue.js';

export default {
  render({ source, file, md }) {
    console.log(source)
    const sfc = mdToVue({ md, file, source });

    return sfc;
  },
};
