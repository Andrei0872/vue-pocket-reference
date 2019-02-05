<template>
  <div class="hello">
    <h1>Time to build awesome things!</h1>
    <br>
    <label>Change locale:</label>
    <select @change="changeLocale" v-model="selectedLocale">
      <option v-for="locale in locales" :key="locale.loc" :value="locale.loc">
        {{ locale.label }}
      </option>
    </select>
    <br>
    <h3>{{ $t('name') }}</h3>
    <h3>{{ $t('age') }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data: () => ({
    selectedLocale: 'en-US',
    locales: [
      { label: 'English', loc: 'en-US' },
      { label: 'Spanish', loc: 'es-EU' },
    ],
  }),
  methods: {
    changeLocale (ev) {
      console.log(ev.target.value)
      this.$i18n.locale = this.selectedLocale;
    }
  }
};
</script>