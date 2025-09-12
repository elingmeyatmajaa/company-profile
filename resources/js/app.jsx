import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import translate from './translate';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`../../Modules/${name}.jsx`, import.meta.glob('../../Modules/**/Resources/assets/js/*.jsx')),
    setup({ el, App, props }) {
        translate.translations = props.initialPage.props.translations
        const root = createRoot(el);
        root.render(
            <RecoilRoot>
                <App {...props} />
            </RecoilRoot>
        );
    },
    progress: {
        color: '#4B5563',

    },
});
