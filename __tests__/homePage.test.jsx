import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('Home page', () => {
    it('renders main heading', () => {
        render(<HomePage />);
        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1).toHaveTextContent('Software Developer');
    });
    it('renders section headings', () => {
        render(<HomePage />);
        const expected = ['Projects', 'Experience', 'Certifications'];
        const headings2 = screen.getAllByRole('heading', { level: 2 });

        const headings2Text = headings2.map((h2) => h2.innerHTML);

        expect(headings2Text).toEqual(expect.arrayContaining(expected));
    });
});
