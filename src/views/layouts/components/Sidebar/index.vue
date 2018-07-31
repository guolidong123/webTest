<template>
  <div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Menu from './Menu'
  import ScrollBar from '@/components/ScrollBar'

  export default{
    components:{
      Menu,
     // ScrollBar
    },
   /* computed:{
      ...mapGetters([
        'permission_routers',
        'sidebar'
      ]),
    isCollapse(){
    return !this.sidebar.opened
    }
    data () {
      return {
        permission_routers: [
          {
            name: '首页'
          },
          {
            name: '收银',
            children: [{
              name: '收银开单',
              path: '/Charge'
            }]
          }, {
            name: '财务',
            children: [{
              name: '财务结算',
              path: '/count'
            }]
          }
        ]
      }
    }
    */
    }
  }
</script>


