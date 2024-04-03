import { act, fireEvent, render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('AlertBox', () => {
    it('renders alert box', async () => {
        await act(() => {
            render(<HomePage />);
        });

        const data = {
            name: 'Bob',
            email: 'bob@email.com',
            message: 'Hello',
        };

        const nameInput = screen.getByLabelText(/Name/);
        const emailInput = screen.getByLabelText(/Your email/);
        const messageInput = screen.getByLabelText(/Message/);

        await act(() => {
            fireEvent.change(nameInput, { target: { value: data.name } });
            fireEvent.change(emailInput, { target: { value: data.email } });
            fireEvent.change(messageInput, { target: { value: data.message } });
        });

        const submitButton = screen.getByRole('button', { name: 'Submit' });

        await act(() => {
            fireEvent.click(submitButton);
        });

        const alertMessage = screen.getByText('Message sent!');
        expect(alertMessage).toBeInTheDocument();
    });
});
