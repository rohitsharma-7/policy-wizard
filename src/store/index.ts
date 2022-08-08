import { CURRENCY_CODE, PLAN, REGION } from "@/shared/constants";
import { User } from "@/shared/types";
import { createStore, GetterTree, MutationTree } from "vuex";

export const initialState = (): User => {
  return {
    age: 0,
    name: "",
    plan: "Standard",
    region: "Hong Kong",
  };
};

export const getters: GetterTree<User, User> = {
  getAge(state) {
    return state.age;
  },
  getName(state) {
    return state.name;
  },
  getPlan(state) {
    return state.plan;
  },
  getRegion(state) {
    return state.region;
  },
  getRate(state) {
    switch (state.region) {
      case REGION.HONG_KONG:
        return 1;
      case REGION.USA:
        return 2;
      case REGION.AUSTRALIA:
        return 3;
      default:
        return 1;
    }
  },
  getCurrencyCode(state) {
    switch (state.region) {
      case REGION.USA:
        return CURRENCY_CODE.USA;
      case REGION.AUSTRALIA:
        return CURRENCY_CODE.AUSTRALIA;
      default:
        return CURRENCY_CODE.HONG_KONG;
    }
  },
  getAmount(state, getters) {
    const value: number = state.age * 10 * getters["getRate"];
    switch (state.plan) {
      case PLAN.STANDARD:
        return value;
      case PLAN.SAFE:
        return value + value * 0.5;
      case PLAN.SUPER_SAFE:
        return value + value * 0.75;
      default:
        return value;
    }
  },
};

export const mutations: MutationTree<User> = {
  resetState(state) {
    state.age = 0;
    state.name = "";
    state.plan = "Standard";
    state.region = "Hong Kong";
  },
  setAge(state, payload) {
    state.age = payload;
  },
  setName(state, payload) {
    state.name = payload;
  },
  setPlan(state, payload) {
    state.plan = payload;
  },
  setRegion(state, payload) {
    state.region = payload;
  },
};

export default createStore({
  state: initialState(),
  getters,
  mutations,
  actions: {},
  modules: {},
});
