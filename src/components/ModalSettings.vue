<template>
  <div class="content">
    <li>Edit</li>
    <li>Delete</li>
  </div>
</template>

<script>
export default {
  name: 'ModalSettings'
}
</script>

<style scoped>
.content{
  background-color: #32AB9B;
  border: 1px solid black;
  position: absolute;
  width: 100px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
}
li:hover{
  cursor: pointer;
  text-decoration: underline;
}
</style>
