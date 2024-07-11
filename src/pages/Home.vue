<template>
  <div class="md-body">
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide class="wrapper__card" v-for="item in items" :key="item.id">
        <my-card
          :name="`${item.lvl} lvl`"
          :title="item.title"
          :imgUrl="item.img"
          :link="`/${item.alias}`"
        >
          <template v-slot:body>
            {{ item.descr }}
          </template>
          <template v-slot:footer>
          <card-stats :info="item.info"/>
          </template>
          <br />
        </my-card>
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script>
import items from '@/seeders/items.js'
import CardStats from '@/components/cardStats.vue'
import MyCard from '@/components/UI/MyCard.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default {
  components: {
    MyCard,
    Carousel,
    Slide,
    Navigation,
    CardStats
  },
  name: 'HomePages',
  data() {
    return {
      items,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: 'center'
      },
      breakpoints: {
        300: {
          itemsToShow: 1
        },
        700: {
          itemsToShow: 2
        }
      }
    }
  }
}
</script>
