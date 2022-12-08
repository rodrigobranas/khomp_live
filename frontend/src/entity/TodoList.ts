import Todo from "./Todo";

export default class TodoList {
	todos: Todo[];

	constructor () {
		this.todos = [];
	}

	addTodo (description: string, done: boolean = false) {
		this.todos.push(new Todo(description, done));
	}

	addTodos (todos: Todo[]) {
		this.todos.push(...todos);
	}

	deleteTodo (todo: any) {
		this.todos.splice(this.todos.indexOf(todo), 1);
	}

	getTotal () {
		return this.todos.length;
	}

	getCompleted () {
		const total = this.getTotal();
		const completed = this.todos.filter(todo => todo.done).length;
		return Math.round((completed/total)*100);
	}
}
