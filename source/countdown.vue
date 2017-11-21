<style lang="sass">
</style>

<template>
  <div>
    {{days}} Days {{hours}} Hours {{minutes}} Minutes {{seconds}} Seconds
  </div>
</template>

<script>
  export default {
    data() {
      return {
        days: '50',
        hours: '20',
        minutes: '10',
        seconds: '4'
      };
    }
  };
</script>