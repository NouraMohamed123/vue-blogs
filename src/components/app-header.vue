<template>
    <header>
        <slot></slot>
    </header>
</template>
<style>
header {
    height: 250px;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/bdda0ffc-82a6-43f6-9361-42e0bd076ad2.jpg");
    background-size: cover;
    position: relative;
}

header::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.95;
    background: #303;
    background: linear-gradient(135deg, #303, #336);
}
h1 {
    position: relative;
    margin: 0;
    color: #fff;
    font-weight: 300;
    font-size: 60px;
    z-index: 4;
    font-weight: 600;
}
.back-button{
    color: #fff;
    text-decoration: none;
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: rgba(255,255,255,0.1);
    border-radius: 5px;
    padding: 7px 15px;
    line-height: 1;
    z-index: 999;
  }
    .back-button:hover{
      background-color: rgba(255,255,255,0.2);
    }
</style>
<script>
export default {};
</script>
