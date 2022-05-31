<template >
  <div
    :class="
      $route.name === 'Artiste' || $route.name === 'Concert' || $route.name === 'Contact' || $route.name === 'CreateArtiste'
        ? 'bg-gray-900 text-white'
        : 'bg-white text-black'
    "
  >
    <RouterView />
  </div>
</template>

<script>
</script>