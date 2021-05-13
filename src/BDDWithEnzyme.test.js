import { shallow, mount, render } from 'enzyme';
import AppARIA from './AppARIA';

describe('App', () => {
  let componentUnderTest;

  beforeEach(() => {
    componentUnderTest = mount(<AppARIA />)
  })

  afterEach(() => {
    componentUnderTest.unmount();
  })

  describe('Header', () => {
    it('should have a logo', () => {
      const logo = componentUnderTest.find('.header--logo')
      expect(logo.length).toBe(1)
    })

    it('should have a <Nav /> component', () => {
      const nav = componentUnderTest.find('.nav--container')
      expect(nav.length).toBe(1)
    })
  });
  
  describe('Nav', () => {
    it('should have a Blog link', () => {
      const blogLink = componentUnderTest.find({ 'data-test-id': 'blog_link'})
      expect(blogLink.length).toBe(1)
      expect(blogLink.text()).toMatch(/blog/i)
    })

    it('should have a Jobs link', () => {
      const jobsLink = componentUnderTest.find({ 'data-test-id': 'jobs_link'})
      expect(jobsLink.length).toBe(1)
      expect(jobsLink.text()).toMatch(/jobs/i)
    })

    it('should have a Contact Us link', () => {
      const contactUsLink = componentUnderTest.find({ 'data-test-id': 'contact_us_link'})
      expect(contactUsLink.length).toBe(1)
      expect(contactUsLink.text()).toMatch(/contact us/i)
    })
  })

  describe('TabList', () => {
    const getSelectedTab = () => {
      return componentUnderTest.find('.tab--item__selected')
    }

    it('should have the sign in tab selected by default', () => {
      expect(getSelectedTab().text()).toMatch(/sign in/i)
    })
  
    it('should select sign up tab on click', () => {
      const signUpTab = componentUnderTest.find({ 'data-test-id': 'sign_up_tab'})
      signUpTab.simulate('click')
      expect(getSelectedTab().text()).toMatch(/sign up/i)
    })

    it('should select sign in tab on click', () => {
      const signInTab = componentUnderTest.find({ 'data-test-id': 'sign_in_tab'})
      signInTab.simulate('click')
      expect(getSelectedTab().text()).toMatch(/sign in/i)
    })
  })
})
