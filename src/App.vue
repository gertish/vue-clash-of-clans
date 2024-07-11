<template>
  <div class="wrapper">
    <isHeader />
    <div class="wrapper-content">
      <div class="container">
        <div class="view-sm isCenter">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <isFooter />
  </div>

</template>

<script>
import isHeader from './components/Header.vue';
import isFooter from './components/Footer.vue';
export default {
  components: { isHeader, isFooter },
}
</script>

