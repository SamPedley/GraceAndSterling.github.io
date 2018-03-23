<template>
  <section class='galery'>
    <h2 id='rsvp'>RSVP</h2>
    <div v-if='showError' class='rsvp-failure'>
      <h3>:( Oh No!</h3>
      <p>Looks like our servers are having some issues right now. Don't worry though we've dispatched an angry hord of monkeys to pummle sterling until it's fixed.</p>
      <p style="marginBottom:0px">However, it looks like you're going to have to rsvp the old fassion way... by email. Please send an email to <a href="mailto:sam@sampedley.com">sam@sampedley.com</a> with your rsvp details</p>
    </div>
    <form v-on:submit.prevent='toggleModal'>
      <div v-if='people.length === 0' @click='onAdd'>Click to add another RSVP</div>
      <div v-for='(person, index) in people' :key='index'>
        <form-input
          :person='person'
          :on-remove='() => onRemove(index)'
          :show-close='people.length > 1'>
        </form-input>
      </div>

        <div class='rsvp_actions'>
        <button class='rsvp_button' @click='onAdd' type='button'><i class='material-icons'>add</i> Add another guest</button>
        <button class='rsvp_button save' type='submit'>
          <i class='material-icons'>save</i> {{ showError ? 'Try Sending Again' : 'Send my RSVP' }}
        </button>
      </div>
    </form>
    <confirm-send v-if='showModal' :on-close='toggleModal' :on-confirm='onConfirm' :people='people'></confirm-send>
    <div v-if='showLoading' class='spinner'>
      <i class='material-icons'>autorenew</i>
    </div>
  </section>
</template>

<script>
  import Form from './Form'
  import SendingModal from './Sending'
  import Modal from './modal'
  import axios from 'axios'

  export default {
    components: { 'form-input': Form, 'confirm-send': SendingModal, modal: Modal },
    data: () => ({
      people: [],
      savedPeople: [],
      showLoading: false,
      showModal: false,
      showError: false
    }),
    methods: {
      onAdd(){
        this.people.push({
          name: '',
          email: '',
          attending: '',
          notes: ''
        })
      },
      onRemove(index) {
        if(this.people.length > 1) {
          this.people = this.people.filter((_, key) => key !== index)
        }
      },
      toggleModal(){
        this.showModal = !this.showModal
      },
      onConfirm() {
        axios.post('https://api.graceandsterling.com/save')
        .then(res => {
            this.showLoading = false
            this.showModal = false
            this.showError = false
            this.savedPeople = [...this.people]
            this.people = []
        })
        .catch(err => {
          this.showLoading = false
          this.showModal = false
          this.showError = true
        })
      }
    },
    created() { this.onAdd() }

  };
</script>