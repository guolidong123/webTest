import {
    login,
    logout,
    getInfo
} from 'api/login'
import { fetchNewMessage } from 'api/message'
import Cookies from 'js-cookie'

const USER_TOKEN_KEY = 'lyms_identity'

const user = {
    state: {
        username: '',
        status: '',
        email: '',
        uid: undefined,
        token: Cookies.get(USER_TOKEN_KEY),
        avatar: '',
        introduction: '',
        roles: [],
        menu: []
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_UID: (state, uid) => {
            state.uid = uid
        },
        SET_EMAIL: (state, email) => {
            state.email = email
        },
        SET_INTRODUCTION: (state, introduction) => {
            state.introduction = introduction
        },
        SET_STATUS: (state, status) => {
            state.status = status
        },
        SET_USERNAME: (state, username) => {
            state.username = username
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_MENU: (state, menu) => {
            state.menu = menu
        },
        LOGIN_SUCCESS: () => {
            console.log('login success')
        },
        LOGOUT_USER: state => {
            state.user = ''
        },
        SET_NEW_MESSAGE: (state, num) => {
            state.newMsgNum = num
        }
    },

    actions: {
        // 用户名登录
        Login ({
            commit
        }, userInfo) {
            const username = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                login(username, userInfo.password).then(response => {
                    const data = response.data
                    if (data.err_no === 2001) {
                        reject(data)
                    } else {
                        resolve()
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 获取用户信息
        GetInfo ({
            commit,
            state
        }) {
            return new Promise((resolve, reject) => {
                getInfo(state.token).then(response => {
                    const data = response.data.data
                    commit('SET_ROLES', data.roles)
                    commit('SET_USERNAME', data.username)
                    commit('SET_EMAIL', data.email)
                    commit('SET_AVATAR', data.avatar)
                    commit('SET_UID', data.id)
                    commit('SET_MENU', data.menu)
                    commit('SET_STATUS', data.status)
                    commit('SET_INTRODUCTION', data.introduction)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 登出
        LogOut ({
            commit,
            state
        }) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('SET_TOKEN', '')
                    commit('SET_ROLES', [])
                    Cookies.remove('Admin-Token')
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 前端 登出
        FedLogOut ({
            commit
        }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                Cookies.remove('Admin-Token')
                resolve()
            })
        },

        // 动态修改权限
        ChangeRole ({
            commit
        }, role) {
            return new Promise(resolve => {
                commit('SET_ROLES', [role])
                commit('SET_TOKEN', role)
                Cookies.set('Admin-Token', role)
                resolve()
            })
        },

        //获取用户的消息
        FetchNewMessage({
          commit
        }, role) {
          fetchNewMessage().then(resp => {
            commit('SET_NEW_MESSAGE', resp.data.message_number)
          });
        },
    }
}

export default user
