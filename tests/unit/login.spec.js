import { mount } from "@vue/test-utils";
import Login from "@/components/Login.vue";


describe('Login.vue Implementation Test', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(Login)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('initializes with correct elements', () => {

    // check that the heading text is rendered
    expect(wrapper.findAll('figure').length).toEqual(1)

    expect(wrapper.findAll('form').length).toEqual(1)

    expect(wrapper.findAll('label').length).toEqual(2)

    expect(wrapper.findAll('input').length).toEqual(2)

    expect(wrapper.findAll('button').length).toEqual(1)
    expect(wrapper.findAll('button').at(0).text()).toMatch('Log In')

    
    // match to the snapshot
    expect(wrapper).toMatchSnapshot();
  })

})
