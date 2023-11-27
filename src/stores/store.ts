import { defineStore } from 'pinia';

export const useNavStore = defineStore('nav', {
  state: () => ({
    nav: {
      html101: ['1', '2', '3', '4'] as string[],
      css101: ['1', '2', '3'] as string[],
    },
  }),
  getters: {
    length: (state) => (course: string) =>
      state.nav[course as keyof typeof state.nav].length,
  },
  actions: {},
});
