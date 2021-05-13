import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppARIA from './AppARIA';

describe('App', () => {
  let componentUnderTest;

  beforeEach(() => {
    componentUnderTest = render(<AppARIA />)
  })

  afterEach(() => {
    componentUnderTest.unmount();
  })
  
  describe('Header', () => {
    it('should have a logo', () => {
      const logo = screen.getByLabelText('The company logo')
      expect(logo).toBeVisible()
    })

    it('should have Nav component', () => {
      const nav = screen.getByLabelText('Main navigation')
      expect(nav).toBeVisible()
    })
  })

  describe('Nav', () => {
    it('should have a Blog link', () => {
      const blogLink = screen.getByLabelText('Blog, Visit our engineering blog')
      expect(blogLink).toBeVisible()
      expect(blogLink.textContent).toMatch(/blog/i)
    })

    it('should have a Jobs link', () => {
      const jobsLink = screen.getByLabelText('Jobs, See our open positions and be part of our team')
      expect(jobsLink).toBeVisible()
      expect(jobsLink.textContent).toMatch(/jobs/i)
    })

    it('should have a Contact Us link', () => {
      const contactUsLink = screen.getByLabelText('Contact us, Get in touch with us')
      expect(contactUsLink).toBeVisible()
      expect(contactUsLink.textContent).toMatch(/contact us/i)
    })
  })

  describe('TabList', () => {
    const getSelectedTab = () => {
      return screen.getByRole('tab', { selected: true })
    }

    it('should have the sign in tab selected by default', () => {
      expect(getSelectedTab().textContent).toMatch(/sign in/i)
    })
  
    it('should select sign up tab on click', () => {
      const signUpTab = screen.getByLabelText('Sign up tab item')
      userEvent.click(signUpTab)
      expect(getSelectedTab().textContent).toMatch(/sign up/i)
    })

    it('should select sign in tab on click', () => {
      const signInTab = screen.getByLabelText('Sign in tab item')
      userEvent.click(signInTab)
      expect(getSelectedTab().textContent).toMatch(/sign in/i)
    })
  })
})
