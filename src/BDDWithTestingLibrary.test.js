import { render, screen, fireEvent } from '@testing-library/react';
import AppARIA from './AppARIA';

describe('App', () => {
  describe('Tabs', () => {
    let componentUnderTest;

    beforeEach(() => {
      componentUnderTest = render(<AppARIA />)
    })

    afterEach(() => {
      componentUnderTest.unmount();
    })

    const getSelectedTab = () => {
      return screen.getByRole('tab', { selected: true })
    }

    it('should have the sign in tab selected by default', () => {
      expect(getSelectedTab().textContent).toMatch(/sign in/i)
    })
  
    it('should select sign up tab on click', () => {
      const signUpTab = screen.getByLabelText('Sign up tab item')
      fireEvent.click(signUpTab)
      expect(getSelectedTab().textContent).toMatch(/sign up/i)
    })
  })
})
