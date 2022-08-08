import { mount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("Button.vue", () => {
  it("Button renders text defined in props", () => {
    const wrapper = mount(Button, {
      props: {
        text: "Start",
      },
    });
    expect(wrapper.text()).toBe("Start");
  });

  it("Button to have class passed as className props", () => {
    const className = "test-class";
    const wrapper = mount(Button, {
      props: {
        text: "Start",
        className,
      },
    });
    expect(wrapper.classes()).toContain(className);
  });

  it("Button to be disabled", () => {
    const wrapper = mount(Button, {
      props: {
        text: "Start",
        disabled: true,
      },
    });
    expect(wrapper.classes()).toContain("cursor-not-allowed");
  });
});
