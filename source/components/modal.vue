<template>
    <div class='modal-background' @click='onClose'>
      <div class='modal-container' @click.stop.self>
        
        <section class='modal-body'>
          <button class='remove_button' @click='onClose'>
            <i class='material-icons' aria-hidden='true'>close</i>
          </button>

          <slot>...</slot>
        </section>

      </div>
    </div>
</template>

<script>
  export default {
    props: ['onClose', 'onCancle']
  };
</script>


