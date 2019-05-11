import Vue from 'vue'
import Counter from '@/components/Click'
// 直接测事件，就直接用实例化的点出方法，然后就是点属性出值
describe('Counter.vue', () => {
  it('点击按钮后, count的值应该为1', () => {
    const Constructor = Vue.extend(Counter)
    const vm = new Constructor().$mount()
    vm.increment()
    expect(vm.count).to.equal(1)
  })
})
