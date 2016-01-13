
var DEFAULT_SETTINGS = {
  project: {
    charset: 'utf8',
    md5Length: 7,
    md5Connector: '_',
    files: ['**'],
    ignore: ['fis-conf.js', 'package.json', 'psd/**', 'node_modules/**', 'dist/**', '.git/**',]
  },

  component: {
    skipRoadmapCheck: true,
    protocol: 'github',
    author: 'fis-components'
  },

  modules: {
    hook: 'components',
    packager: 'map'
  },

  options: {}
};


fis.set('project.ignore', DEFAULT_SETTINGS.project.ignore);

fis.match('*', {
  release: '/assets/$0' // 所有资源发布时产出到 /dist/assets 目录下
});

// 所有模板放到 dist 目录下
fis.match('/page/(**.html)', {
    release: '/$1'
});

fis.match('/less/(*)', {
    rExt: '.css', // from .less to .css
    parser: fis.plugin('less-2.x', {
        // fis-parser-less-2.x option
    }),
    release: '/assets/css/$1'
});