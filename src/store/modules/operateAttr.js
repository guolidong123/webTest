import {
    operateorderAttr,
    serviceList
} from 'api/order'

const order = {
    state: {
        room: [],
        adviser: [],
        beautician: [],
        group: [],
        sys_role: [],
        serviceList: [],
        chargemixture_type: [],
        inventory_keeper: [],
        reception: [],
        payment_type: [],
        finance: [],
        operate_order_status: [],
        change_flow_status: []
    },

    mutations: {
        SET_DATA: (state, data) => {
            state.room = data.room
            state.adviser = data.adviser
            state.beautician = data.beautician
            state.group = data.group
            state.sys_role = data.sys_role
            state.chargemixture_type = data.chargemixture_type
            state.inventory_keeper = data.inventory_keeper
            state.reception = data.reception
            state.payment_type = data.payment_type
            state.finance = data.finance
            state.operate_order_status = data.operate_order_status
            state.change_flow_status = data.change_flow_status
        },
        SET_SERVICE: (state, data) => {
            state.serviceList = data
        }
    },

    actions: {
        GetOprateAttr ({
            commit,
            state
        }) {
            return new Promise((resolve, reject) => {
                operateorderAttr().then(response => {
                    const data = response.data.data
                    commit('SET_DATA', data)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        GetServise ({
            commit,
            state
        }) {
            return new Promise((resolve, reject) => {
                serviceList().then(response => {
                    const data = response.data.data
                    commit('SET_SERVICE', data)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
    }
}

export default order
