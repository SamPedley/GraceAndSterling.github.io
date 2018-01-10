<template>
  <section class='galery'>
    <h2 id='rsvp'>RSVP</h2>
    <form>
      <div class='person_container' v-for='(person, index) in people' :key="index">
        <h3>RSVP for {{person.name || '...'}}</h3>

      <button class='remove_button' v-if='people.length > 1' type='button' @click='onRemove(index)'><i class="material-icons">close</i></button>

      <div class='row'>
        <div class="form-group col-12 col-sm-6">
          <label class="sr-only" for="">Name</label>
          <input type="text" class="form-control" placeholder="Name" v-model='person.name'>
        </div>

        <div class="form-group col-12 col-sm-6">
          <label class="sr-only" for="">Email</label>
         <input type="email" class="form-control" placeholder="Email" v-model='person.email'>
        </div>
      </div>


        <div class="form-group">
          <label for="">I plan to attend...</label>
        <select v-model='person.attending' class="form-control">
          <option disabled value="">Please select one</option>
          <option value='both'>Both the Ceremony and Reception</option>
          <option value='ceremony'>Only the Ceremony</option>
          <option value='reception'>Only the Reception</option>
          <option value='none'>I will not be able to make the wedding</option>
        </select>
        </div>

        <div v-if='person.attending == "both" || person.attending == "reception"'  class="form-group">
          <label for="">And I would like eat...</label>
          <select v-model='person.food' class="form-control">
            <option disabled value="">Please select one</option>
            <option>Chicken</option>
            <option>Fish</option>
            <option>Poop</option>
          </select>
        </div>

        <!-- <textarea v-model="person.notes" placeholder="add multiple lines"></textarea> -->

        <p>{{person.food}}</p>
      </div>
    </form>

    <div class='rsvp_actions'>
      <button class='rsvp_button' @click="onAdd"><i class="material-icons">add</i> Add another guest</button>
      <button class='rsvp_button save' @click='onSave'><i class="material-icons">save</i> Send my RSVP</button>
    </div>
  </section>
</template>

<script>
  export default {
    data: () => ({
      people: []
    }),
    methods: {
      onAdd(){
        this.people.push({
          name: '',
          email: '',
          attending: '',
          food: '',
          notes: ''
        })
      },
      onRemove(index) {
        if(this.people.length > 1) {
          this.people = this.people.filter((item, key) => key !== index)
        }
      },
      onSave() {
        console.log('save')
      }
    },
    created() { this.onAdd() }

  };
</script>