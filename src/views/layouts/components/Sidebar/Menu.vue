<template>
  <div class="menu-wrap">
    <ul>
      <li class="menu-item" v-for="i in dataSource">
        <div class="menu-name">
          <a href="/Home">{{i.name}}</a>
        </div>
        <ul>
          <li class="menu-link" v-for="link in i.children "><a :href="link.link">{{link.name}}</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    data () {
      return {
        dataSource: [
          {
            name: '首页'
          },
          {
          name: '收银',
          children: [{
            name: '收银开单',
            link: '/Charge'
          }]
          }, {
          name: '财务',
          children: [{
            name: '财务结算',
            link: '/count'
          }]
        }
      ]
    }
    }
  }
</script>

<style scoped>
  .menu-wrap {
    background: rgb(48, 65, 86);
    position: fixed;
    left: 0;
    top: 0;
    width: 180px;
    height: 100%;
    color: #fff
  }

  .menu-item {
    line-height: 56px;
  }

  .menu-item ul {
    background: #ef2d3d;
    padding-left: 40px;
  }

  .menu-name {
    height: 56px;
    text-align: left;
    padding-left: 20px;
  }

  .menu-name a{
    text-decoration: none;
    color: #fff;
  }
  .menu-link {
    height: 50px;
    line-height: 50px;
    text-align: left;
  }

  .menu-link a {
    color: #fff;
  }


</style>
