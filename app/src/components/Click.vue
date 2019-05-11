<template>
  <div >
    <h3>Counter.vue</h3>
      <p class="num">{{ count }}</p>
    <button @click="increment">自增</button>
  </div>
</template>

<script>
export default {
  name: 'Click',
  data () {
    return {
      count: 0
    }
  },

  methods: {
    increment () {
      this.count++
    }
  }
}
</script>
