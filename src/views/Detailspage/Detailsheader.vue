<template>
    <div id="headeritem">
     <h3>{{titleA}}</h3>
   </div>
</template>
<script>
export default {
   name:"Detailsheader",
   props:['titleA']
}
</script>
<style scoped>
#headeritem{
    width: 100%;
    height: 50px;
    background-color: rgb(212, 211, 211);
    position:fixed;
    top:0px;
    left:0px ;
    right:0px;
    z-index:999;
   text-align: center;
   line-height: 50px;

}
</style>