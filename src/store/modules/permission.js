import {
    asyncRouterMap,
    constantRouterMap
} from 'src/router'

import Layout from 'src/views/layout/Layout'

function genAsyncRouter (asyncRouterMap, menu) {
    const accessedRouters = menu.filter((route, index) => {
        if (asyncRouterMap.hasOwnProperty(route.route)) {
            route.component = asyncRouterMap[route.route].component
        } else {
            route.component = Layout
        }
        route.path = '/' + route.route
        if (route.child && route.child.length > 0) {
            route.children = genAsyncRouter(asyncRouterMap, route.child)
        }
        return true
    })
    return accessedRouters
}

// function getLastRoute (str, child = false) {
//     var index = str.lastIndexOf('/')
//     str = str.substring(index + 1, str.length)
//     if (child === false) {
//         str = `/${str}`
//     }
//     return str
// }

const permission = {
    state: {
        routers: constantRouterMap,
        addRouters: []
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers
            state.routers = constantRouterMap.concat(routers)
        }
    },
    actions: {
        GenerateRoutes ({
            commit
        }, data) {
            return new Promise(resolve => {
                const { menu } = data
                let accessedRouters
                accessedRouters = genAsyncRouter(asyncRouterMap, menu[0].child)
                // console.log(accessedRouters)
                commit('SET_ROUTERS', accessedRouters)
                resolve()
            })
        }
    }
}

export default permission
