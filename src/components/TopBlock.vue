<template>
  <div class="top-block-container">
    <div class="user-items-block container">
      <div class="selected-user-item" v-for="item in selectedUserItems" :key="item.id">{{item.name}}</div>
    </div>
    <div class="selected-item-block container">
      <div class="selected-user-item">{{selectedItem.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['selectedUserItems', 'selectedItem']
}
</script>

<style scoped lang="scss">
.top-block-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
}
</style>
