<template>
    <div>
<button><slot></slot></button>
   </div>
</template>
<script>
export default {
    name:"MoviePagechildrenButton"
}
</script>
<style scoped>
button{
    width: 50px;
    height: 25px;
    background-color:RGB(255,255,255);
    border: 1px solid #ff5f16;
    color: #ff5f16;
    border-radius: 4px;
}
</style>