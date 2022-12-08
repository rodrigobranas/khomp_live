import Todo from "../../entity/Todo";

export default interface TodosGateway {
	getTodos (): Promise<Todo[]>;
}