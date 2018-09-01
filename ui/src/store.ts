import Vue from 'vue';
import Vuex from 'vuex';
import { configuration } from '../.env.client';
import * as bunyan from 'bunyan';
import * as path from 'path';

Vue.use(Vuex);

const state = {
  logger: bunyan.createLogger({ name: `${path.basename(__filename)}` }),
  recipients: getRecipients(),
  defaultRecipients: getDefaultRecipients(),
  backendEndpoint: getBackendEndpoint(),
};

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
});

function getRecipients(): string[] {
  try {
    const recipients = configuration.RECIPIENTS;
    return recipients;
  } catch (error) {
    state.logger.error(
      { error },
      'Error while retrieving recipients list from configuration',
    );
    return [];
  }
}

function getDefaultRecipients(): string[] {
  try {
    const defaultRecipients = configuration.DEFAULT_RECIPIENTS;
    return defaultRecipients;
  } catch (error) {
    state.logger.error(
      { error },
      'Error while retrieving default recipients map from configuration',
    );
    return [];
  }
}

function getBackendEndpoint(): string {
  try {
    const backend = configuration.BACKEND_ENDPOINT;
    return backend;
  } catch (error) {
    state.logger.error(
      { error },
      'Error while retrieving backend endpoint from configuration',
    );
    return '';
  }
}
