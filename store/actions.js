const resource = "pokemon";
export default {
  async fetchPokemons({ commit }){
    const { data } = await this.$axios.$get(resource);
    commit("SET_POKEMONS", data);
  },
};
