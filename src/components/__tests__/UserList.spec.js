import { mount } from '@vue/test-utils';
import UserList from '../UserList.vue';

describe('UserList.vue', () => {
  it('初期ユーザーが表示されることを確認する', () => {
    const wrapper = mount(UserList);
    const users = wrapper.findAll('li');
    expect(users.length).toBe(2);
    expect(users[0].text()).toBe('Alice');
    expect(users[1].text()).toBe('Bob');
  });

  it('新しいユーザーを追加できることを確認する', async () => {
    const wrapper = mount(UserList);
    await wrapper.find('input').setValue('Charlie');
    await wrapper.find('button').trigger('click');
    const users = wrapper.findAll('li');
    expect(users.length).toBe(3);
    expect(users[2].text()).toBe('Charlie');
  });
});
