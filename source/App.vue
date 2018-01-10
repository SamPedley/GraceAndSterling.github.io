<template>
  <div>
    <section class="hero">
    <div>
      <h1>Save the Date</h1>
      <h2>August 4th, 2018</h2>
    </div>

    <div class="hero-actions">
      <a
        class="hero-button"
        href="https://www.amazon.com/wedding/grace-pedley-sterling-hall-chicago-august-2018/registry/2A5K83MSK5SK8">
        Amazon Registry
      </a>
      <a
      class="hero-button"
      href="https://www.kohls.com/upgrade/gift_registry/kohlsgrw_home.jsp?section=list&listid=3363892&viewtype=listview&isfromsearch=true&fname=grace&lname=pedley&regtype=registry.wedding,registry.baby,registry.splday">
      Kohls Registry
    </a>
  </div>
  </section>

  
  <countdown date="8/4/2018"></countdown>

  <rsvp></rsvp>

  <section class="galery">
    <h2>Grace & Sterling</h2>

    <div class="gal-img">
      <div class="gal-left">
        <img src="/img/couple-1.jpg" class="img-fluid" alt="">
      </div>
      <div class="gal-right">
        <img src="/img/hands.jpg" class="img-fluid" alt="">
        <img src="/img/fly-you-fool.jpg" class="img-fluid" alt="">
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="inner">
      <p>&copy; 2017</p>
      <nav>
        <a href="https://www.amazon.com/wedding/grace-pedley-sterling-hall-chicago-august-2018/registry/2A5K83MSK5SK8">The Registry</a>
        <a href="https://github.com/SamPedley/grace-and-sterling/issues">Report an issue</a>
      </nav>
    </div>
  </footer>
  </div>
</template>

<script>
import Countdown from './components/countdown'
import Rsvp from './components/rsvp'

export default {
  components: {
    Countdown,
    Rsvp
  },
  name: 'app'
}
</script>
