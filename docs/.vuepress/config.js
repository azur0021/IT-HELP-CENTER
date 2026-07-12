module.exports = {
    title: '优必选软件与帮助网站',
    description: '帮您快速找到所需信息，轻松解决工作中的小问题。',
    theme:'reco',
    base: '/',  
    port: 80,
    // base: '/',       //设置站点根路径，如果访问的时候是ip+端口，那么这里就是/，如果访问的是ip+端口+工程名，那么这里就是/工程名/
    // dest: './ROOT',  // 设置编译后的输出目录./ROOT代表在工程的根目录下生成一个ROOT文件，里面是编译好的文件，可以拿ROOT直接部署。
    // port: 8086,      //本地调试的端口号，默认是8080
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              // 如果文件不存在，不报错
              emitFile: false
            }
          }
        }
      ]
    }
  },
    plugins: [
      ['@vuepress/plugin-fulltext-search',
      {
        searchComponents:'CustomSearchResult'
      }],
  
      '@vuepress/vuepress-plugin-md-enhance',
    //  {
    //     // 启用提示容器
    //     hint: true,
    //   },
    "md-enhance",
    {
      // 启用自定义容器
      container: true,
    },
    ],

    themeConfig: {
      // 默认值：'Search'
      subSidebar: 'auto',
      search:true,
      searchMaxSuggestions: 5, // 默认值：5
      searchPlaceholder: '请输入文本关键字', 
      markdown: {
         extractHeaders: [{ level: 2, consolidate: true }], // 提取Markdown中的标题生成目录，level指定提取的标题级别
      },
      lastUpdated: 'Last Updated', 
      nav: [
        { text: "首页", link: "/" },
        { 
          text: "帮助",
          items: [
            { text: "常见问题" , link: "/guide/"}
          ]
        },
        {
          text: "关联网站",
          items: [
            { text: "OA", link: "http://oa.ubtrobot.com" }
          ]
        },
      ],
      sidebar:{


        '/':[
        {
          title:'帮助文档',
          // path:'/gudie/',
              children:[
                {
                  title: '软件清单',
                  path: '/guide/it_handbook/list/'
                },
                {
                  title: '开源协议基础知识',
                  path: '/guide/it_handbook/compliance/'
                },
                {
                  title:'报销问题自助解决指南',
                  path: '/guide/it_handbook/EA/'
                },
             //   {
                //  title: '邮箱操作指南',
              //    path: '/guide/it_handbook/foxmail/'
              //  },
             //   {
              //    title: '新打印机添加和配置',
               //   path: '/guide/it_handbook/print/'
              //  },
                {
                  title:'桌管软件自定义数据表单更新',
                  path:'/guide/it_handbook/ivanti/'
                },
                // {
                //   title:'杀毒软件安装指引',
                //   path:'/guide/it_handbook/Symantec/'
                // },
                {
                  title:'加密客户端使用指南',
                  path:'/guide/it_handbook/esafenet/'
                },
                {
                  title: 'WPS Ofiice操作指南',
                  path: '/guide/it_handbook/wps/'
                },
                {
                  title: 'Windows 清理 C 盘空间指导',
                  path: '/guide/it_handbook/3/'
                },
                {
                  title:'ERP常见故障处理',
                  path:'/guide/it_handbook/K3/'
                }
              ]
        },
        {
          title:'⭐常见问题',
          path:'/guide/'
        }
      ],
  
  
  
      }


        }

      }


   

  

  
