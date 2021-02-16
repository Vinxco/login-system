import { shallowMount } from "@vue/test-utils";
import InputSection from "@/components/Input.vue";

const factory = (values = {}) => {
  return shallowMount(InputSection, {
    data: function() {
      return {
        ...values
      };
    }
  });
};

describe("Input.vue", () => {
  it("El componente renderiza el mismo ‘snapshot’ que la última vez.", () => {
    const wrapper = factory();

    expect(wrapper).toMatchSnapshot();
  });

});
