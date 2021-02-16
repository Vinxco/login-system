import { shallowMount } from "@vue/test-utils";
import Timer from "@/components/Timer.vue";


describe('Timer.vue Implementation Test', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(Timer)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('initializes with correct elements', () => {

    // check that the heading text is rendered
    expect(wrapper.findAll('h2').length).toEqual(1)
    expect(wrapper.findAll('h2').at(0).text()).toMatch('Welcome!')

    expect(wrapper.findAll('h1').length).toEqual(1)
    expect(wrapper.findAll('h1').at(0).text()).toMatch('The last time you accessed was')

    // check that all the labels are created
    expect(wrapper.findAll('span').length).toEqual(4)
    expect(wrapper.findAll('span').at(0).text()).toMatch('Days')
    expect(wrapper.findAll('span').at(1).text()).toMatch('Hours')
    expect(wrapper.findAll('span').at(2).text()).toMatch('Minutes')
    expect(wrapper.findAll('span').at(3).text()).toMatch('Seconds')

    // check that all the timers are created
    expect(wrapper.findAll('time').length).toEqual(4)
    expect(wrapper.findAll('time').at(0).text()).toMatch('')

    expect(wrapper.vm.currentDays).toBe(null)

    // Check tha the button is created
    expect(wrapper.findAll('button').length).toEqual(1)
    expect(wrapper.findAll('button').at(0).text()).toMatch('Logout')
    
    // match to the snapshot
    expect(wrapper).toMatchSnapshot();
  })

})

