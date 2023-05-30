<template>
  <notifications  width="400"
>
  <template #body="props">
    <div :class="[(props.item.type === 'success') ? 'bg-green-600' :(props.item.type == 'warning')? 'bg-[#f4a32b]' : 'bg-[#E54D42]' ]" class="my-2 top-4 right-4 w-auto  shadow-lg rounded-lg px-4 py-3 flex items-center justify-between">
      <div class="w-auto">
        <p class="text-lg  w-auto font-medium text-white">{{ props.item.title }}</p>
        <div class="text-white mt-2 leading-relaxed">
          <p v-html="props.item.text"></p>
        </div>
      </div>
      <button :class="[(props.item.type === 'success') ? 'hover:bg-[#E54D42]' :(props.item.type == 'warning')? 'hover:bg-[#E54D42]' : 'bg-[#E54D42]' ]" class="ml-4 rounded-lg text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="props.close">
        <span class="sr-only">Close</span>
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </template>
</notifications>
    <component :is="layout">
      <router-view></router-view>
    </component>
</template>
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const { currentRoute } = useRouter()
const defaultlayout = 'empty'
console.log()
const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultlayout}-layout`
)
console.log(layout)
</script>
<style>
</style>
