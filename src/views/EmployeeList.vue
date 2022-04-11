<template>
  <div class="top-wrapper">
    <div class="container">
      <div>従業員数:{{ store.count }}人</div>
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
            <tr v-for="employee of store.employees.value">
              <td>
                <RouterLink to="/employeeDetail">{{
                  employee.name
                }}</RouterLink>
              </td>
              <td>{{ employee.hireDate }}</td>
              <td>{{ employee.dependentsCount }}人</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { listKey } from "@/store/listStore";
import { inject, onMounted } from "vue";
import { RouterLink } from "vue-router";

const store = inject(listKey);

if (!store) {
  throw new Error("");
}

onMounted(() => {
  store.employeeList();
});
</script>

<style scoped></style>
