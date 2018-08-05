<template>
    <!-- <img src="../assets/logo.png"> -->
    <b-row align-v="center">
      <b-col align-self="center">
        <Emailer/>
      </b-col>
    </b-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Emailer from "@/components/Emailer.vue"; // @ is an alias to /src

@Component({
  components: {
    Emailer
  }
})
export default class Home extends Vue {}
</script>
