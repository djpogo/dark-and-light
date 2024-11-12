import { defineConfig } from 'vite';
import vituum from 'vituum';
import twig from '@vituum/vite-plugin-twig';

export default defineConfig({
    plugins: [
        vituum(),
        twig({
            root: './src',
        }),
    ],
});