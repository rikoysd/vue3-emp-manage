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
    <input type="password" id="password" v-model="password" />
  </div>
  <div class="position">
    <button class="login-btn" type="button" @click="login">ログイン</button>
  </div>
  <div class="position">
    <RouterLink to="/registerAdmin">管理者登録はこちら</RouterLink>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const mail = ref("");
const password = ref("");

const errorMessage = ref("");
const mailError = ref("");
const passwordError = ref("");
const errorCheck = ref(true);

const router = useRouter();

const login = async () => {
  // エラー処理
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

  const response = await axios.post(
    "http://153.127.48.168:8080/ex-emp-api/login",
    {
      mail: mail.value,
      password: password.value,
    }
  );
  console.log("response", JSON.stringify(response));

  if (response.data.status !== "success") {
    errorMessage.value = "メールアドレスまたはパスワードが間違っています";
    return;
  }
  router.push("/employeeList");
};
</script>

<style scoped>
@import "@/assets/form.css";

.login-btn {
  margin-bottom: 8px;
}
</style>
