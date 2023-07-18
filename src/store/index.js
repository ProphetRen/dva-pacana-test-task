import {createStore} from 'vuex'

export default createStore({
    state: {
        userItems: [
            {
                "id": 1,
                "name": "Shoes 1"
            },
            {
                "id": 2,
                "name": "Shoes 2"
            },
            {
                "id": 3,
                "name": "Shoes 3"
            },
            {
                "id": 4,
                "name": "Shoes 4"
            },
            {
                "id": 5,
                "name": "T-shirt 1"
            },
            {
                "id": 6,
                "name": "T-shirt 2"
            },
            {
                "id": 7,
                "name": "T-shirt 3"
            },
            {
                "id": 8,
                "name": "T-shirt 4"
            }
        ],
        items: [
            {
                "id": 11,
                "name": "Jacket 1"
            },
            {
                "id": 12,
                "name": "Jacket 2"
            },
            {
                "id": 13,
                "name": "Jacket 3"
            },
            {
                "id": 14,
                "name": "Jacket 4"
            },
            {
                "id": 15,
                "name": "Hoodie 1"
            },
            {
                "id": 16,
                "name": "Hoodie 2"
            },
            {
                "id": 17,
                "name": "Hoodie 3"
            },
            {
                "id": 18,
                "name": "Hoodie 4"
            }
        ],
        selectedUserItems: [],
        selectedItem: {
            name: 'none'
        }
    },
    mutations: {
        addSelectedItem(state, payload) {
            if (state[payload.listName].length === 6) return alert('Максимум 6 вещей')
            state[payload.listName].push(payload.item)
        },
        deleteSelectedItem(state, payload) {
            const listName = state[payload.listName]
            listName.splice(listName.indexOf(payload.item), 1)
        },
        setItem(state, payload) {
            state.selectedItem = payload.item
        }
    },
    actions: {
        changeList({commit, state}, payload) {
            const listName = state[payload.listName]
            if (payload.listName === 'selectedUserItems') {
                listName.indexOf(payload.item) === -1 ? commit('addSelectedItem', {
                    item: payload.item,
                    listName: payload.listName
                }) : commit('deleteSelectedItem', {
                    item: payload.item,
                    listName: payload.listName
                })
            } else {
                commit('setItem', {
                    item: payload.item,
                })
            }
        }
    },
})
