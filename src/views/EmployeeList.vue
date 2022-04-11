<template>
  <div class="top-wrapper">
    <div class="container">
      <div>従業員数:{{ employeeCount }}人</div>
      <div class="row">
        <table class="striped">
          <thead>
            <tr>
              <th>名前</th>
              <th>入社日</th>
              <th>扶養人数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const employeeCount = ref(0);


</script>

<style scoped></style>
