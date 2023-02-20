import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import i18nForTest from 'shared/config/i18n/i18nForTests';

export interface renderComponentOptions {
  route?: string
}

export const renderComponent = (component: ReactNode, options: renderComponentOptions = {}) => {
    const {
        route = '/',
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
};
