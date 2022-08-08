import { shallowMount } from "@vue/test-utils";
import Welcome from "@/components/Welcome.vue";

describe("Welcome.vue", () => {
  it("renders welcome message to user", () => {
    const wrapper = shallowMount(Welcome);
    expect(wrapper.find("h2").text()).toMatch("Hello There!");
    expect(wrapper.find("p").text()).toMatch(
      "Let's buy some insurance. It is going to take only a few steps"
    );
  });
});
