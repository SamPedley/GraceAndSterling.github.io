<template>
      <div class='person_container'>
        <h3>RSVP for {{person.name || '...'}}</h3>

      <button class='remove_button' v-if='showClose' type='button' @click='onRemove()'><i class='material-icons'>close</i></button>

      <div class='row'>
        <div class='form-group col-12 col-sm-6'>
          <label class='sr-only' for='Name'>Name</label>
          <input type='text' class='form-control' placeholder='Name' v-model='person.name' required>
          <div class='valid-feedback'>Success! You've done it.</div>
        </div>

        <div class='form-group col-12 col-sm-6'>
          <label class='sr-only' for=''>Email</label>
         <input type='email' class='form-control' placeholder='Email' v-model='person.email' required>
        </div>
      </div>
      
        <div class='form-group'>
          <label for=''>I plan to attend...</label>
        <select v-model='person.attending' class='form-control' required>
          <option disabled value=''>Please select one</option>
          <option value='both'>Both the Ceremony and Reception</option>
          <option value='ceremony'>Only the Ceremony</option>
          <option value='reception'>Only the Reception</option>
          <option value='none'>I will not be able to make the wedding</option>
        </select>
        </div>

        <!-- <textarea v-model='person.notes' placeholder='add multiple lines'></textarea> -->
      </div>
</template>

<script>
  export default {
    props: ['person', 'showClose', 'onRemove']
  };
</script>