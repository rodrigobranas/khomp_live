<script setup lang="ts">
defineProps(["todoList"]);
const description = "";
</script>

<template>
	<span class="total">{{ todoList.getTotal() }}</span>
	<br/>
	<span class="completed">{{ todoList.getCompleted() }}%</span>
	<div v-for="todo in todoList.todos">
		<span class="todo-description" :style="{ 'text-decoration': (todo.done) ? 'line-through' : '' }">{{ todo.description }}</span> {{ todo.done }}
		<button class="todo-toggle-done-button" @click="todo.toggleDone()">done/undone</button>
		<button @click="todoList.deleteTodo(todo)">delete</button>
	</div>
	<input type="text" v-model="description" @keyup.enter="todoList.addTodo(description)"/>
</template>

<style scoped>
</style>
