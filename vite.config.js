import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/core.css',
                'resources/css/admin.css',
                'resources/css/3.css',
                'resources/css/realm-status.css',
                'resources/css/news.css',
                'resources/css/navbar.css',
                'resources/css/photoswipe.css',
                'resources/css/izimodal.css',
                'resources/css/simplebar.css',
                'resources/js/app.js',
            ],
            refresh: [
                ...refreshPaths,
                'app/Http/Livewire/**',
            ],
        }),
    ],
});
