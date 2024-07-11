<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.descr" />
      <h1 style="color: #fff" class="title">{{ item.title }}</h1>
      <router-link to="/" class="btn btnPrimary">Back to home</router-link>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items.js'
export default {
  data() {
    return {
      item: null
    }
  },
  created() {
    const alias = this.$route.params.itemAlias
    const item = items.find(el => el.alias === alias)
    if (item) {
      this.item = item
    } else {
      this.$router.push({ name: 'notFound' })
    }

    console.log(item)
  }
}
</script>

<style lang="scss">
.wrapper-person {
  text-align: center;
}
</style>
