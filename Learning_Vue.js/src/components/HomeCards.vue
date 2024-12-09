<script setup>

import Card from "@/components/Card.vue";


</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
     <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
       <Card/>

       <Card headline="For Apothecaries"
             description="List your herbal potions and remedies in our shop. We offer a platform for you to showcase your products and reach a wider audience of herbal enthusiasts."
             cardColor="bg-sepia"
             buttonText="List Your Products"
             buttonColor="bg-pale-green"
             buttonHoverColor="hover:bg-white"
             textHoverColor="hover:text-sepia"
       />


     </div>
    </div>
  </section>
</template>