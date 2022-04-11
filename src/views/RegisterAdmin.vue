<template>
  <div class="msg">{{ errorMessage }}</div>
  <div class="msg margin">{{ nameError }}</div>
  <div class="position">
    <div>
      <label for="lastName">姓</label>
      <input type="text" id="lastName" v-model="lastName" />
    </div>
    <div>
      <label for="firstName">名</label>
      <input type="text" id="firstName" v-model="firstName" />
    </div>
  </div>
  <div class="msg">{{ mailError }}</div>
  <div class="position">
    <label for="mail">メールアドレス</label>
    <input type="text" id="mail" v-model="mail" />
  </div>
  <div class="msg">{{ passwordError }}</div>
  <div class="position">
    <label for="password">パスワード</label>
    <input type="password" id="password" v-model="password" />
  </div>
  <div class="position">
    <button type="button" @click="register">登録</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const lastName = ref("");
const firstName = ref("");
const mail = ref("");
const password = ref("");

const errorMessage = ref("");
const nameError = ref("");
const mailError = ref("");
const passwordError = ref("");
const errorCheck = ref(true);

// useRouter() ... this.$routerと同じ意味
const router = useRouter();

const register = async () => {
  // エラー処理
  if (lastName.value === "" || firstName.value === "") {
    nameError.value = "姓または名が入力されていません";
    errorCheck.value = false;
  } else {
    nameError.value = "";
    errorCheck.value = true;
  }

  if (mail.value === "") {
    mailError.value = "メールアドレスが入力されていません";
    errorCheck.value = false;
  } else {
    mailError.value = "";
    errorCheck.value = true;
  }

  if (password.value === "") {
    passwordError.value = "パスワードが入力されていません";
    errorCheck.value = false;
  } else {
    passwordError.value = "";
    errorCheck.value = true;
  }

  if (errorCheck.value === false) {
    return;
  }

  // データの送信
  const response = await axios.post(
    "http://153.127.48.168:8080/ex-emp-api/insert",
    {
      name: lastName.value + firstName.value,
      mail: mail.value,
      password: password.value,
    }
  );
  console.log("response", JSON.stringify(response));
  if (response.data.status !== "success") {
    errorMessage.value = "登録に失敗しました";
    return;
  }
  // ログインページに遷移する
  router.push("/login");
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>
