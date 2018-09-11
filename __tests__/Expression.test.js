import Vue from 'vue/dist/vue.js';
import { Expression } from '../src';
import { shallow } from 'vue-test-utils'

describe('sftx-comm-control', () => {
    Vue.component('Expression', Expression);

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="app">
                <Expression></Expression>
            </div>
        `;
        window.location.hash = '';
    });
  let cmp

  beforeEach(() => {
    cmp = shallow(Expression, {
      // Beaware that props is overriden using `propsData`
      propsData: {
        ops: ['XXX']
      }
    })
  })

  it('测试组件内的ops属性', () => {
    expect(cmp.vm.ops).toEqual(['XXX'])
  })
    it('测试是否能够mount', async () => {
      const expression = await createVm();
        expect(document.body.innerHTML).toMatchSnapshot();
        expect(expression.$style).not.toBeUndefined();
        // expect(expression.$style).toContain('header');
    });

});

async function createVm() {
    const vm = new Vue({
        el: '#app',
    });

    await Vue.nextTick();

    return vm.$children[0];
}

function progressTime(minutes) {
    const currentTime = (new Date()).getTime();

    const newTime = new Date(currentTime + (minutes * 60000));

    const originalDateClass = Date;

    // eslint-disable-next-line no-global-assign
    Date = function (dateString) {
        return new originalDateClass(dateString || newTime.toISOString());
    };
}
