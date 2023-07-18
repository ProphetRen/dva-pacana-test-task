<template>
  <div class="home">
    <top-block :selectedUserItems="selectedUserItems" :selectedItem="selectedItem"/>
    <bottom-block :userItems="userItems" :items="items"/>
  </div>
</template>

<script>
import BottomBlock from "@/components/BottomBlock";
import TopBlock from "@/components/TopBlock";
import {mapState} from "vuex";

export default {
  name: 'HomeView',
  components: {BottomBlock, TopBlock},
  computed: {
    ...mapState(['selectedUserItems', 'selectedItem', 'items', 'userItems'])
  }
}
</script>

<style lang="scss">
.container {
  padding: 15px;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  gap: 10px;

  > div {
    padding: 5px;
    border: 1px solid black;
  }
}
</style>
