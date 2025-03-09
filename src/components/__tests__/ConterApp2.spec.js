import { mount } from '@vue/test-utils'
import CounterApp2 from '../CounterApp2.vue'

test('emits an event when clicked', () => {
    const wrapper = mount(CounterApp2)
  
    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')
  
    expect(wrapper.emitted()).toHaveProperty('increment')
  })

  test('emits an event with count when clicked', () => {
    const wrapper = mount(CounterApp2)
  
    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')
    
  
    // `emitted()` accepts an argument. It returns an array with all the
    // occurrences of `this.$emit('increment')`.
    const incrementEvent = wrapper.emitted('increment')
  
    // We have "clicked" twice, so the array of `increment` should
    // have two values.
    expect(incrementEvent).toHaveLength(2)
  
    // Then, we can make sure each element of `wrapper.emitted('increment')`
    // contains an array with the expected object.
    expect(wrapper.emitted('increment')[0]).toEqual([
        {
        count: 1,
        isEven: false
        }
    ])

    expect(wrapper.emitted('increment')[1]).toEqual([
        {
        count: 2,
        isEven: true
        }
    ])
  })

  test('emits an event with count when clicked', () => {
    const wrapper = mount(CounterApp2)
  
    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')
    // 追加
    wrapper.find('button').trigger('click')
    
  
    // `emitted()` accepts an argument. It returns an array with all the
    // occurrences of `this.$emit('increment')`.
    const incrementEvent = wrapper.emitted('increment')
  
    // We have "clicked" twice, so the array of `increment` should
    // have two values.
    expect(incrementEvent).toHaveLength(3)
  
  // Then, we can make sure each element of `wrapper.emitted('increment')`
  // contains an array with the expected object.
  expect(wrapper.emitted('increment')[0]).toEqual([
    {
      count: 1,
      isEven: false
    }
  ])

  expect(wrapper.emitted('increment')[1]).toEqual([
    {
      count: 2,
      isEven: true
    }
  ])

  expect(wrapper.emitted('increment')[2]).toEqual([
    {
      count: 3,
      isEven: false
    }
  ])
  })