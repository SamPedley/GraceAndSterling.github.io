<template>
  <section class="countdown">
    {{days}} Days {{hours}} Hours {{minutes}} Minutes {{seconds}} Seconds
  </section>
</template>

<script>
  export default {
    data() {
      return {
        now: Math.trunc((new Date()).getTime() / 1000),
        date: Math.trunc(Date.parse("8/4/2018") / 1000)
        }
    },
    computed: {
      seconds() {
        return (this.date - this.now) % 60
      },

      minutes() {
        return Math.trunc((this.date - this.now) / 60) % 60
      },

      hours() {
        return Math.trunc((this.date - this.now) / 60 / 60) % 24
      },

      days() {
        return Math.trunc((this.date - this.now) / 60 / 60 / 24)
      }
    },
    created() {
      window.setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000)
    },1000)
    }
  };
</script>