<template >
  <div
    :class="
      $route.name === 'Artiste' || $route.name === 'Concert' || $route.name === 'Contact' ? 'bg-gray-900 text-white' : 'bg-white text-black'
    "
  >
    <RouterView />
  </div>
</template>

<script>
</script>