import { mount } from '@vue/test-utils'
import ManyForm from '../ManyForm.vue'

test('submits a form', async () => {
    const wrapper = mount(ManyForm)

    await wrapper.find('input[type=email]').setValue('name@mail.com')
    await wrapper.find('textarea').setValue('Lorem ipsum dolor sit amet')
    await wrapper.find('select').setValue('moscow')
    await wrapper.find('input[type=checkbox]').setValue()
    await wrapper.find('input[type=radio][value=monthly]').setValue()
})

test('submits the form', async () => {
    const wrapper = mount(ManyForm)
  
    const email = 'name@mail.com'
    const description = 'Lorem ipsum dolor sit amet'
    const city = 'moscow'
  
    await wrapper.find('input[type=email]').setValue(email)
    await wrapper.find('textarea').setValue(description)
    await wrapper.find('select').setValue(city)
    await wrapper.find('input[type=checkbox]').setValue()
    await wrapper.find('input[type=radio][value=monthly]').setValue()
  
    await wrapper.find('form').trigger('submit.prevent')
  
    expect(wrapper.emitted('form-submit')[0][0]).toStrictEqual({
      email,
      description,
      city,
      subscribe: true,
      interval: 'monthly'
    })
  })