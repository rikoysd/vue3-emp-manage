import { Employee } from "@/types/employee";
import axios from "axios";
import { reactive, ref, toRefs, type InjectionKey } from "vue";

type state = {
  count: number;
};

type employees = Array<Employee>;

export const listStore = () => {
  // state
  const globalState = reactive<state>({
    count: 0,
  });

  const employees = ref<employees>([]);

  // actions
  const employeeList = async () => {
    const response = await axios.get(
      "http://153.127.48.168:8080/ex-emp-api/employee/employees"
    );
    console.log("response", JSON.stringify);
    for (let employee of response.data.employees) {
      employees.value.push(
        new Employee(
          employee.id,
          employee.name,
          employee.image,
          employee.gender,
          employee.hireDate,
          employee.mailAddress,
          employee.zipCode,
          employee.address,
          employee.telephone,
          employee.salary,
          employee.characteristics,
          employee.dependentsCount
        )
      );
    }
    console.log(employees.value);

    globalState.count = response.data.totalEmployeeCount;
  };

  return {
    ...toRefs(globalState),
    employees,
    employeeList,
  };
};

type storeType = ReturnType<typeof listStore>;
export const listKey: InjectionKey<storeType> = Symbol("store");
