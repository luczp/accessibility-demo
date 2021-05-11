import { shallow, mount, render } from 'enzyme';
import AppSemanticHTML from './AppSemanticHTML';

describe('App', () => {
  describe('Tabs', () => {
    let componentUnderTest;

    beforeEach(() => {
      componentUnderTest = mount(<AppSemanticHTML />)
    })

    afterEach(() => {
      componentUnderTest.unmount();
    })

    const getSelectedTab = () => {
      return componentUnderTest.find('.tab--item__selected')
    }

    it('should have the sign in tab selected by default', () => {
      expect(getSelectedTab().text()).toMatch(/sign in/i)
    })
  
    it('should select sign up tab on click', () => {
      const signUpTab = componentUnderTest.find({ 'data-test-id': 'sign_up--tab'})
      signUpTab.simulate('click')
      expect(getSelectedTab().text()).toMatch(/sign up/i)
    })
  })
})
