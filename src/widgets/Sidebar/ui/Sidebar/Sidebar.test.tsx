import { fireEvent, screen } from '@testing-library/react';

import { renderComponent } from 'shared/lib/tests/renderComponent';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('render', () => {
        renderComponent(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle', async () => {
        renderComponent(<Sidebar />);

        const toggleBtn = await screen.findByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
