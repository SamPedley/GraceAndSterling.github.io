<template>
<modal :on-close='onClose'>
    <h1>Does this look right?</h1>

    <div class='sending-body'>

      <h4>RSVP for {{people.length}} {{people.length === 1 ? 'person' : 'people'}}:</h4>
    
    <div v-for='(person, index) in people' :key='index'>
      {{person.name}} - {{trans[person.attending] || 'is really weird'}}.
    </div>


    </div>

  <div class='rsvp_actions'>       
    <button class='rsvp_button warning' @click='onClose'><i class='material-icons'>close</i> Hold on...</button>
    <button class='rsvp_button save' @click='onConfirm'><i class='material-icons'>check</i> Looks good</button>
  </div>
  </modal>
</template>

<script>
import Modal from './modal'
  export default {
    components: { modal: Modal },
    props: ['onClose', 'onConfirm', 'people'],
     data: () => ({
       trans: {
         both: 'is Attending',
        ceremony: 'can ONLY make the Ceremony',
        reception: 'can ONLY make the Reception',
        none: 'is NOT Attending'
       }
     })
  };
</script>


