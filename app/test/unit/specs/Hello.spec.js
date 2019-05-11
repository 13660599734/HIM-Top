import Vue from 'vue'
import hello from '@/components/Hello'
import faker from 'faker'

function getRenderedVm (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm
}
describe('页面渲染', () => { // eslint-disable-line null
  it('必须加载成功', () => {
    let title = faker.lorem.words()
    let topDate = faker.date.past()
    let bodyText = faker.lorem.paragraph()
    let helloVm = getRenderedVm(hello, {
      text: title,
      pubDate: topDate,
      bodyText: bodyText
    })
    expect(helloVm.text).to.be.equal(title)
    expect(helloVm.pubDate).to.be.equal(topDate)
    expect(helloVm.bodyText).to.be.equal(bodyText)
  })
})
