<template>
  <div class="msg margin">{{ errorMessage }}</div>
  <div class="msg">{{ mailError }}</div>
  <div class="position">
    <label for="mail">メールアドレス</label>
    <input type="text" id="mail" v-model="mail" />
  </div>
  <div class="msg">{{ passwordError }}</div>
  <div class="position">
    <label for="password">パスワード</label>
    <input type="text" id="password" v-model="password" />
  </div>
  <div class="position">
    <button class="login-btn" type="button">ログイン</button>
  </div>
  <div class="position">
    <RouterLink to="/registerAdmin">管理者登録はこちら</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const mail = ref("");
const password = ref("");

const errorMessage = ref("");
const mailError = ref("");
const passwordError = ref("");
</script>

<style scoped>
@import "@/assets/form.css";

.login-btn {
  margin-bottom: 8px;
}
</style>
