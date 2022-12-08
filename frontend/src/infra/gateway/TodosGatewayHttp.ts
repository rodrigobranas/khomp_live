import TodosGateway from "./TodosGateway";
import axios from "axios";
import HttpClient from "../http/HttpClient";
import Todo from "../../entity/Todo";

export default class TodosGatewayHttp implements TodosGateway {
	
	constructor (
		readonly httpClient: HttpClient,
		readonly baseUrl: string
	) {
	}

	async getTodos(): Promise<Todo[]> {
		const todosData = await this.httpClient.get(`${this.baseUrl}/todos`);
		const todos: Todo[] = [];
		for (const todoData of todosData) {
			todos.push(new Todo(todoData.description, todoData.done));
		}
		return todos;
	}

}