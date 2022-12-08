import { mount } from "@vue/test-utils";
import AppVue from "../src/App.vue";
import TodosGateway from "../src/infra/gateway/TodosGateway";

function sleep (time: number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, time);
	});
}

test("Deve testar a todo list", async function () {
	const todosGateway: TodosGateway = {
		async getTodos (): Promise<any> {
			return [
				{ description: "A", done: false },
				{ description: "B", done: true}
			]
		}
	}
	const wrapper = mount(AppVue, {
		global: {
			provide: {
				todosGateway
			}
		}
	});
	await sleep(100);
	expect(wrapper.get(".total").text()).toBe("3");
	expect(wrapper.get(".completed").text()).toBe("33%");
	expect(wrapper.findAll(".todo-description").at(2)?.text()).toBe("B");
	await wrapper.findAll(".todo-toggle-done-button").at(0)?.trigger("click");
	expect(wrapper.get(".completed").text()).toBe("67%");
});
