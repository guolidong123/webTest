<template>
    <div class="charge-page">
        <table>
            <th>
                <td>药品名称</td>
                <td>药品数量</td>
                <td>药品单价</td>
            </th>
            <tr v-for="item in dataSource">
                <td>{{item.name}}</td>
                <td>{{item.count}}</td>
                <td>{{item.price}}</td>
            </tr>
            <tr class="all-price">
              <td>{{getPrice()}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
   export default{
     name: 'charge',
     data(){
       return {
         dataSource : [
           {
             name: '1号药',
             count: 1,
             price: 12
           },
           {
             name: '2号药',
             count: 2,
             price: 10
           },
           {
             name: '3号药',
             count: 3,
             price: 35
           },
           {
             name: '4号药',
             count: 1,
             price: 12
           }
         ]
       }
     },
     methods:{
        getPrice(){
        var allPrice = 0;
        for(item in dataSource){
            allPrice += item.count*item.price;
        }
        return allPrice;
       }
     }
   }
</script>

<style scoped>
  .charge-page table{
    border: 1px solid #000;
    background: #fff;
  }

  .charge-page table th td{
    width: 100px;
    height: 40px;
    ine-height: 40px;
    background: #999;
  }

  .charge-page table tr td{
    width: 100px;
    height: 40px;
    line-height: 40px;
    background:#fff;
  }

  .all-price td{
    background: #666;
    font-size: 16px;
    font-weight: bold;
    color: red;
  }

  </style>
