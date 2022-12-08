import TodoList from "../src/entity/TodoList"

test("Deve testar a todo list", function () {
	const todoList = new TodoList();
	todoList.addTodo("A");
	todoList.addTodo("B", true);
	expect(todoList.getTotal()).toBe(2);
	expect(todoList.getCompleted()).toBe(50);
})