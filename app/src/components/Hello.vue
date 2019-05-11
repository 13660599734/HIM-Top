<template>
    <div>
      <h2>{{text}}</h2>
      <div><span class="top-date">{{pubDate}}</span></div>
      <div class="body">
        {{bodyText}}
      </div>
      <div class="block">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Hello',
  props: [
    'text', 'pubDate', 'bodyText'
  ]
}
</script>
<style scoped>
  .block{
    width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  .block ul li{
    float: left;
    width: 30%;
    height: 0;
    padding-bottom: 30%;
    background: pink;
  }
</style>
