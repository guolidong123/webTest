<template>
  <div class="app-wrapper">
    <Menu>菜单</Menu>
    <div class="main-container">
      <Navbar>导航</Navbar>
    </div>
  </div>
</template>

<script>
  import { Navbar,Sidebar,AppMain,TagsView } from './components'
  import Menu from './components/Sidebar/Menu'
  export default{
    name: 'layout',
    components:{
      Navbar,
      Sidebar,
      AppMain,
      TagsView,
      Menu
    },
    /*computed:{
      sidebar(){
        return this.$store.state.app.sidebar
      }
    }*/
  }
</script>
