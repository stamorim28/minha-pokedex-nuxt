const resource = "?limit=233&offset=151";
export default {
  async fetchPokemons({ commit }) {
    const { data } = await this.$axios.$get(resource);
    commit("SET_POKEMONS", data);
  },
};
