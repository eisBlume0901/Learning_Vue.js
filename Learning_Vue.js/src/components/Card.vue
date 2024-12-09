<script setup>
import {defineProps} from 'vue';

defineProps({
  headline: {
    type: String,
    default: 'For Herbal Enthusiasts'
  },
  description: {
    type: String,
    default: 'Find the perfect herbal remedy for your needs. Our shop offers a wide selection of herbal potions and remedies that are carefully crafted to help you heal naturally.'
  },
  cardColor: {
    type: String,
    default: 'bg-pale-green'
  },
  buttonText: {
    type: String,
    default: 'Browse Potions'
  },
  buttonColor: {
    type: String,
    default: 'bg-bark'
  },
  buttonHoverColor: {
    type: String,
    default: 'hover:bg-sepia'
  },
  textHoverColor: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div :class="`${cardColor} p-6 rounded-lg shadow-md`">
    <h2 class="text-2xl font-bold text-white">{{ headline }}</h2>
    <p class="mt-2 mb-4 text-white">
      {{ description }}
    </p>
    <a href="" :class="`inline-block ${buttonColor} text-white rounded-lg px-4 py-2 ${buttonHoverColor} ${textHoverColor}`">{{ buttonText }}</a>
  </div>
</template>