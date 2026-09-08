import type { UnpluginInstance } from 'unplugin';
import type { Options } from './types';
import { createVitePlugin } from 'unplugin';
import { unpluginFactory } from '.';

// The explicit annotation is what carries `Options` into `dist/*.d.mts`; without it the declaration
// emit widens the plugin's option parameter to `unknown`/`any` and consumers lose autocompletion.
const vitePlugin: UnpluginInstance<Options | undefined>['vite'] = createVitePlugin<Options | undefined>(
    unpluginFactory
);

export default vitePlugin;
