<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue'; // mounted means the component is ready to be used and loaded on the page

const newOrder = ref('');
const orders = ref(['Elixir of Eternal Luminescence'])
const addOrder = () => {
  if (newOrder.value.trim() !== '') {
    orders.value.push(newOrder.value);
    newOrder.value = '';
  }
}

const deleteOrder = (index) => {
  orders.value.splice(index, 1);
}
</script>
<template>
  <h1>Eisblume's Apothecary Shop</h1>


  <form @submit.prevent="addOrder">
    <label for="newOrder">Order</label>
    <input type="text" id="newOrder" name="newOrder" v-model="newOrder">
    <button type="submit">Add Order</button>
  </form>

  <ul>
    <li v-for="(order, index) in orders" :key="order">
      <span>
        {{ order }}
      </span>
      <button @click="deleteOrder(index)">Delete</button>
    </li>
  </ul>
</template>

