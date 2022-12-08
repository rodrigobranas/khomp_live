import { mount } from "@vue/test-utils";
import AppVue from "../src/App.vue";
import TodoListComponentVue from "../src/component/TodoListComponent.vue";
import TodoList from "../src/entity/TodoList";
import TodosGateway from "../src/infra/gateway/TodosGateway";

test("Deve testar a todo list", async function () {
	const todoList = new TodoList();
	todoList.addTodo("A");
	todoList.addTodo("B", true);
	const wrapper = mount(TodoListComponentVue, {
		props: {
			todoList
		}
	});
	expect(wrapper.get(".total").text()).toBe("2");
	expect(wrapper.get(".completed").text()).toBe("50%");
	expect(wrapper.findAll(".todo-description").at(1)?.text()).toBe("B");
	await wrapper.findAll(".todo-toggle-done-button").at(0)?.trigger("click");
	expect(wrapper.get(".completed").text()).toBe("100%");
});
