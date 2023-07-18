<template>
  <div class="bottom-block-container">
    <div class="user-items-to-select container">
      <div class="item-to-select" v-for="item in userItems" :key="item.id"
           @click="changeList({item, listName: 'selectedUserItems'})">{{ item.name }}
      </div>
    </div>
    <div class="items-to-select container">
      <div class="item-to-select" v-for="item in items" :key="item.id"
           @click="changeList({item, listName: 'selectedItem'})">{{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "BottomBlock",
  props: ['userItems', 'items'],
  methods: {
    ...mapActions(['changeList'])
  }
}
</script>

<style lang="scss">
.bottom-block-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  > div {
    width: 45%;
  }
}


</style>