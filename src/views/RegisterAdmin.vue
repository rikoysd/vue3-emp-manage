<template>
  <div class="name position">
    <div>
      <label for="lastName">姓</label>
      <input type="text" id="lastName" />
    </div>
    <div>
      <label for="firstName">名</label>
      <input type="text" id="firstName" />
    </div>
  </div>
  <div class="position">
    <label for="mail">メールアドレス</label>
    <input type="text" id="mail" />
  </div>
  <div class="position">
    <label for="password">パスワード</label>
    <input type="text" id="password" />
  </div>
  <div class="position">
    <button type="button">登録</button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.name {
  margin-top: 40px;
}

.position {
  display: flex;
  justify-content: center;
}

input {
  margin-bottom: 20px;
}
</style>
