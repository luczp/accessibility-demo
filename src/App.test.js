import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  describe('Tabs', () => {
    let componentUnderTest;

    beforeEach(() => {
      componentUnderTest = render(<App />)
    })

    afterEach(() => {
      componentUnderTest.unmount();
    })

    const getSelectedTab = () => {
      return screen.getByRole('tab', { selected: true })
    }

    it('should have the sign in tab selected by default', () => {
      expect(getSelectedTab().textContent).toBe('Sign In')
    })
  
    it('should select sign up tab on click', () => {
      const signUpTab = screen.getByLabelText('Sign up tab item')
      fireEvent.click(signUpTab)
      expect(getSelectedTab().textContent).toBe('Sign Up')
    })
  })
})
