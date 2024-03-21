import {expect, describe, test} from 'vitest'
import { render, fireEvent } from '@testing-library/react';
import Footer from '../src/components/common/Footer';

describe('Footer component', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<Footer />);
    const footerElement = getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });

  test('clicking on "Book a meeting" button opens Calendly link', () => {
    const { getByText } = render(<Footer />);
    const bookMeetingButton = getByText('Book a meeting');
    fireEvent.click(bookMeetingButton);
    expect(window.location.href).toBe('https://calendly.com/anastasiaadamoudi/30min?month=2024-03');
  });

  // Add more tests for toggling modals
  test('clicking on "Design & Development Team" button toggles TeamPopup', () => {
    const { getByText, getByTestId } = render(<Footer />);
    const teamButton = getByText('Design & Development Team');
    fireEvent.click(teamButton);
    const teamPopup = getByTestId('team-popup');
    expect(teamPopup).toBeInTheDocument();
  });

  // Add more tests as needed
});
