import routeSettings from '@/config/route'
import { createRouter, type RouteRecordRaw } from 'vue-router'
import { flatMultiLevelRoutes, history } from './helper'

const Layouts = () => import('@/layouts/index.vue')

/**
 * 常驻路由
 * 除了 redirect/403/404/login 等隐藏页面，其他页面建议设置 Name 属性
 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layouts,
    meta: {
      hidden: true
    },
    children: [
      {
        path: ':path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/403',
    component: () => import('@/views/error-page/403.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      hidden: true
    },
    alias: '/:pathMatch(.*)*'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true,
      vipLevel: 0
    }
  },
  {
    path: '/register',
    component: () => import('@/views/register/index.vue'),
    meta: {
      hidden: true,
      vipLevel: 0
    }
  },
  {
    path: '/',
    component: Layouts,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          svgIcon: 'dashboard',
          affix: true,
          vipLevel: 0
        }
      }
    ]
  },
  // {
  //   path: '/unocss',
  //   component: Layouts,
  //   redirect: '/unocss/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/unocss/index.vue'),
  //       name: 'UnoCSS',
  //       meta: {
  //         title: 'UnoCSS',
  //         svgIcon: 'unocss'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/table',
  //   component: Layouts,
  //   redirect: '/table/element-plus',
  //   name: 'Table',
  //   meta: {
  //     title: '表格',
  //     elIcon: 'Grid'
  //   },
  //   children: [
  //     {
  //       path: 'element-plus',
  //       component: () => import('@/views/table/element-plus/index.vue'),
  //       name: 'ElementPlus',
  //       meta: {
  //         title: 'Element Plus',
  //         keepAlive: true
  //       }
  //     },
  //     {
  //       path: 'vxe-table',
  //       component: () => import('@/views/table/vxe-table/index.vue'),
  //       name: 'VxeTable',
  //       meta: {
  //         title: 'Vxe Table',
  //         keepAlive: true
  //       }
  //     }
  //   ]
  // },
  {
    path: '/newspaper',
    redirect: '/menu/menu1',
    name: 'NewsPaper',
    meta: {
      title: '报纸',
      svgIcon: 'newspaper'
    },
    children: [
      {
        path: 'wsj',
        component: () => import('@/views/newspaper/wsj/index.vue'),
        name: 'WSJ',
        meta: {
          title: '华尔街日报'
        }
      },
      {
        path: 'nyt',
        component: () => import('@/views/newspaper/nyt/index.vue'),
        name: 'NYT',
        meta: {
          title: '纽约日报'
        }
      },
      {
        path: 'ft',
        component: () => import('@/views/newspaper/ft/index.vue'),
        name: 'FT',
        meta: {
          title: '金融时报'
        }
      },
      {
        path: 'other',
        component: () => import('@/views/newspaper/other/index.vue'),
        name: 'Other',
        meta: {
          title: '其他...'
        }
      }
    ]
  },
  {
    path: '/magazine',
    redirect: '/menu/menu1',
    name: 'Magazine',
    meta: {
      title: '杂志',
      svgIcon: 'magazine'
    },
    children: [
      {
        path: 'te',
        component: () => import('@/views/magazine/te/index.vue'),
        name: 'TE',
        meta: {
          title: '经济学人'
        }
      },
      {
        path: 'barron',
        component: () => import('@/views/magazine/barron/index.vue'),
        name: 'Barron',
        meta: {
          title: '巴伦周刊'
        }
      },
      {
        path: 'bloomberg',
        component: () => import('@/views/magazine/bloomberg/index.vue'),
        name: 'Bloomberg',
        meta: {
          title: '彭博商业周刊'
        }
      },
      {
        path: 'other',
        component: () => import('@/views/magazine/other/index.vue'),
        name: 'Other',
        meta: {
          title: '其他...'
        }
      }
    ]
  },
  {
    path: '/link',
    meta: {
      title: '联系我',
      svgIcon: 'link'
    },
    children: [
      {
        path: 'https://www.baidu.com',
        component: () => {},
        name: 'Link1',
        meta: {
          title: '微信付款码'
        }
      },
      {
        path: 'https://www.baidu.com',
        component: () => {},
        name: 'Link2',
        meta: {
          title: '支付宝口令红包'
        }
      }
    ]
  }
  // {
  //   path: '/menu',
  //   component: Layouts,
  //   redirect: '/menu/menu1',
  //   name: 'Menu',
  //   meta: {
  //     title: '多级路由',
  //     svgIcon: 'menu'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/menu/menu1/index.vue'),
  //       redirect: '/menu/menu1/menu1-1',
  //       name: 'Menu1',
  //       meta: {
  //         title: 'menu1'
  //       },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/menu/menu1/menu1-1/index.vue'),
  //           name: 'Menu1-1',
  //           meta: {
  //             title: 'menu1-1',
  //             keepAlive: true
  //           }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/menu/menu1/menu1-2/index.vue'),
  //           redirect: '/menu/menu1/menu1-2/menu1-2-1',
  //           name: 'Menu1-2',
  //           meta: {
  //             title: 'menu1-2'
  //           },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/menu/menu1/menu1-2/menu1-2-1/index.vue'),
  //               name: 'Menu1-2-1',
  //               meta: {
  //                 title: 'menu1-2-1',
  //                 keepAlive: true
  //               }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/menu/menu1/menu1-2/menu1-2-2/index.vue'),
  //               name: 'Menu1-2-2',
  //               meta: {
  //                 title: 'menu1-2-2',
  //                 keepAlive: true
  //               }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/menu/menu1/menu1-3/index.vue'),
  //           name: 'Menu1-3',
  //           meta: {
  //             title: 'menu1-3',
  //             keepAlive: true
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/menu/menu2/index.vue'),
  //       name: 'Menu2',
  //       meta: {
  //         title: 'menu2',
  //         keepAlive: true
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/hook-demo',
  //   component: Layouts,
  //   redirect: '/hook-demo/use-fetch-select',
  //   name: 'HookDemo',
  //   meta: {
  //     title: 'Hook',
  //     elIcon: 'Menu',
  //     alwaysShow: true
  //   },
  //   children: [
  //     {
  //       path: 'use-fetch-select',
  //       component: () => import('@/views/hook-demo/use-fetch-select.vue'),
  //       name: 'UseFetchSelect',
  //       meta: {
  //         title: 'useFetchSelect'
  //       }
  //     },
  //     {
  //       path: 'use-fullscreen-loading',
  //       component: () => import('@/views/hook-demo/use-fullscreen-loading.vue'),
  //       name: 'UseFullscreenLoading',
  //       meta: {
  //         title: 'useFullscreenLoading'
  //       }
  //     },
  //     {
  //       path: 'use-watermark',
  //       component: () => import('@/views/hook-demo/use-watermark.vue'),
  //       name: 'UseWatermark',
  //       meta: {
  //         title: 'useWatermark'
  //       }
  //     }
  //   ]
  // }
]

/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 */
export const dynamicRoutes: RouteRecordRaw[] = [
  // {
  //   path: '/permission',
  //   component: Layouts,
  //   redirect: '/permission/page',
  //   name: 'Permission',
  //   meta: {
  //     title: '权限',
  //     svgIcon: 'lock',
  //     // roles: ['admin', 'editor'], // 可以在根路由中设置角色
  //     vipLevel: 0,
  //     alwaysShow: true // 将始终显示根菜单
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page.vue'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: '页面级',
  //         vipLevel: 1
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive.vue'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: '按钮级' // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
  //       }
  //     }
  //   ]
  // }
]

const router = createRouter({
  history,
  routes: routeSettings.thirdLevelRouteCache ? flatMultiLevelRoutes(constantRoutes) : constantRoutes
})

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.vipLevel?.toString() !== '0') {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}

export default router
