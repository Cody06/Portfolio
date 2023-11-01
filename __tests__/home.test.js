import { render, screen } from '@testing-library/react';
import HomePage from '../src/app/page';
import '@testing-library/jest-dom';

describe('Home', () => {
    it('renders a heading', () => {
        render(<HomePage />);

        const heading = screen.getByRole('heading', {
            name: 'Software Developer .',
        });

        expect(heading).toBeInTheDocument();
    });
});
