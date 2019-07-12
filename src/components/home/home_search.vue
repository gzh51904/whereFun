<template>
  <div class="index_search_bar">
    <input type="search" />
    <button>
      <span>
        <i class="el-icon-search"></i>
      </span>
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.index_search_bar {
  position: absolute;
  top: 0;
  left: 5rem;
  right: 5rem;
  height: 5rem;
  padding: 0;
  z-index: 20000;
  text-shadow: 1px 1px 2px #333;
  input {
    height: 2.6rem;
    line-height: 2.8rem;
    margin-top: 1rem;
    padding: 0 3.2rem 0 1.4rem;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3rem;
    font-size: 1.5rem;
    background-color: rgba(255, 255, 255, 0.4);
    // color:#fff;
    text-shadow: 0.1rem 0.1rem 0.2rem #333;
  }
  button {
    height: 2.8rem;
    font-size: 1.8rem;
    position: absolute;
    top: 0.9rem;
    right: 0.3rem;
    display: block;
    width: 3rem;
    line-height: 2.8rem;
    text-align: center;
    border: none;
    background: none;
    text-shadow: 0.1rem 0.1rem 0.1rem #777;
    padding: 0;
  }
}
</style>
