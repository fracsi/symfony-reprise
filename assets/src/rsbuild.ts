import type { UnpluginInstance } from 'unplugin';
import type { Options } from './types';
import { createRsbuildPlugin } from 'unplugin';
import { unpluginFactory } from '.';

// The explicit annotation is what carries `Options` into `dist/*.d.mts`; without it the declaration
// emit widens the plugin's option parameter to `unknown`/`any` and consumers lose autocompletion.
const rsbuildPlugin: UnpluginInstance<Options | undefined>['rsbuild'] = createRsbuildPlugin<Options | undefined>(
    unpluginFactory
);

export default rsbuildPlugin;
