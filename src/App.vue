<template >
  <div
    :class="
      $route.name === 'Artiste' ||
      $route.name === 'Concert' ||
      $route.name === 'Contact' ||
      $route.name === 'CreateArtiste' ||
      $route.name === 'UpdateArtiste' ||
      $route.name === 'DeleteArtiste' ||
      $route.name === 'Page404'
        ? 'bg-gray-900 text-white'
        : 'bg-white text-black'
    "
  >
    <RouterView />
  </div>
</template>

<script>
</script>