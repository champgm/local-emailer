<template>
  <b-container>
      <b-row>
        <b-col></b-col>

        <b-col cols="5">
          <b-form-group>
            <b-container>
            <b-col>
            <b-row align-h="center" class="margintop1">
              <b-form-checkbox-group
                buttons v-model="selectedRecipients"
                name="butons1"
                :options="recipients">
              </b-form-checkbox-group>
            </b-row>
            <b-row align-h="center" class="margintop2">
              <b-form-input
                v-model="subject"
                type="text">
              </b-form-input>
            </b-row>
            <b-row align-h="center" class="margintop2">
              <b-form-textarea
                id="body"
                v-model="body"
                :rows="10"
                :max-rows="10">
              </b-form-textarea>
            </b-row>
            <b-row class="margintop2">
            <b-col>
              <b-button
                v-on:click="clear()"
                variant="danger"
                align-h="left">
                Clear
              </b-button>
            </b-col>
            <b-col>
              <b-button
                v-on:click="submit()"
                variant="success">
                Submit
              </b-button>
            </b-col>
            </b-row>
            </b-col>
            </b-container>
          </b-form-group>
        </b-col>

        <b-col></b-col>
      </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import request from "request-promise-native";

@Component
export default class Emailer extends Vue {
  recipients: { text: string; value: string }[] = this.mapRecipientsToButtons();
  selectedRecipients: string[] = this.$store.state.defaultRecipients;
  subject = "";
  body = "";

  mapRecipientsToButtons(): { text: string; value: string }[] {
    const recipients: string[] = this.$store.state.recipients;
    return recipients.map(recipient => {
      return { text: recipient, value: recipient };
    });
  }

  clear() {
    console.log(`CLEAR`);
    this.body = "";
    this.subject = "";
  }

  async submit() {
    const requestBody: any = {};
    requestBody.recipients = this.selectedRecipients;
    requestBody.body = this.body;
    requestBody.subject = this.subject;
    try {
      console.log(`Sending email...`);
      const response = await request.post(
        `${this.$store.state.backendEndpoint}/email`,
        {
          json: true,
          body: requestBody
        }
      );
      console.log(`Got response:`);
      console.log(`${JSON.stringify(response)}`);
    } catch (error) {
      console.log(`Error while sending email:`);
      console.log(`${JSON.stringify(error)}`);
    }
  }
}
</script>

<style scoped lang="scss">
.margintop1 {
  margin-top: 50px !important;
}
.margintop2 {
  margin-top: 25px !important;
}
</style>
