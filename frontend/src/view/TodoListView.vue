<script setup lang="ts">
import { inject, onMounted, reactive } from 'vue';
import TodosGateway from '../infra/gateway/TodosGateway';
import TodoList from '../entity/TodoList';
import TodoListComponent from '../component/TodoListComponent.vue';

	const todoList = reactive(new TodoList());
	todoList.addTodo("Estudar JavaScript");

	onMounted(async () => {
		const todosGateway = inject("todosGateway") as TodosGateway;
		const todos = await todosGateway.getTodos();
		todoList.addTodos(todos);
	});
</script>

<template>
	<TodoListComponent :todoList="todoList"></TodoListComponent>
</template>

<style scoped>
</style>
