import { CURRENCY_CODE, PLAN, REGION } from "@/shared/constants";
import { getters, initialState, mutations } from "@/store/index";

describe("Store", () => {
  it("Initial State", () => {
    const state = initialState();
    expect(state).toEqual({
      age: 0,
      name: "",
      plan: "Standard",
      region: "Hong Kong",
    });
  });

  it("Mutations setAge", () => {
    const state = initialState();
    const age = 10;
    mutations.setAge(state, age);
    expect(state.age).toBe(age);
  });

  it("Mutations setName", () => {
    const state = initialState();
    const name = "Rohit Sharma";
    mutations.setName(state, name);
    expect(state.name).toBe(name);
  });

  it("Mutations setPlan", () => {
    const state = initialState();
    const plan = PLAN.SUPER_SAFE;
    mutations.setPlan(state, plan);
    expect(state.plan).toBe(plan);
  });

  it("Mutations setRegion", () => {
    const state = initialState();
    const region = REGION.USA;
    mutations.setRegion(state, region);
    expect(state.region).toBe(region);
  });

  it("Getters getRate for each region", () => {
    const state = initialState();
    let rate = getters.getRate(state, getters, state, getters);
    //for Hong Kong region the rate is 1
    expect(rate).toBe(1);

    //for USA region the rate is 2
    mutations.setRegion(state, REGION.USA);
    rate = getters.getRate(state, getters, state, getters);
    expect(rate).toBe(2);

    //for Australia region the rate is 3
    mutations.setRegion(state, REGION.AUSTRALIA);
    rate = getters.getRate(state, getters, state, getters);
    expect(rate).toBe(3);
  });

  it("Getters getCurrencyCode for each region", () => {
    const state = initialState();
    let currencyCode = getters.getCurrencyCode(state, getters, state, getters);
    //for Hong Kong region the currency code is "HKD"
    expect(currencyCode).toBe(CURRENCY_CODE.HONG_KONG);

    //for USA region the currency code is "USD"
    mutations.setRegion(state, REGION.USA);
    currencyCode = getters.getCurrencyCode(state, getters, state, getters);
    expect(currencyCode).toBe(CURRENCY_CODE.USA);

    //for Australia region the currency code is "AUD"
    mutations.setRegion(state, REGION.AUSTRALIA);
    currencyCode = getters.getCurrencyCode(state, getters, state, getters);
    expect(currencyCode).toBe(CURRENCY_CODE.AUSTRALIA);
  });
});
