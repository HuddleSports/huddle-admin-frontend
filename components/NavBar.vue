<template>
  <div>
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <h1 class="navbar-item is-size-2 has-text-weight-medium">
          Huddle IT Admin
        </h1>
        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': burgerMenuOpened }"
          style="height:auto"
          @click="burgerMenuClicked()"
        >
          <span />
          <span />
          <span />
        </a>
      </div>
      <div
        class="navbar-menu"
        :class="{ 'is-active': burgerMenuOpened }"
        @click="burgerMenuClicked()"
      >
        <div class="navbar-end">
          <nuxt-link
            class="navbar-item is-size-5 has-text-weight-medium"
            to="/"
          >
            List
          </nuxt-link>

          <nuxt-link
            class="navbar-item is-size-5 has-text-weight-medium"
            to="/events/create"
          >
            Create
          </nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      burgerMenuOpened: false
    }
  },
  methods: {
    burgerMenuClicked() {
      this.burgerMenuOpened = !this.burgerMenuOpened
    }
  }
}
</script>
