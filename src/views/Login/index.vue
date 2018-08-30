<!-- login -->
<template>
  <div class='wrap'>
      <el-input v-model="username" placeholder="xx"/>
      <el-input v-model="password" placeholder="xx"/>
      <el-button type="primary" @click="submit">submit</el-button>
  </div>
</template>

<script>
import { login } from '@/api/user';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    submit() {
      const { username } = this;
      const { password } = this;
      login({ username, password })
        .then((res) => {
          const { code } = res.data;
          if (code === 1000) {
            const user = res.data.data;
            this.$store.dispatch('SetUser', user);
          }
        });
    },
  },
};
</script>
<style lang='scss' scoped>
</style>
