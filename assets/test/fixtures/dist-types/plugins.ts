// Guards the published typings: the declaration emit has silently degraded the options
// parameter to `unknown`/`any` before, which kills autocompletion in consuming projects.

import SymfonyRsbuild from '../../../dist/rsbuild.mjs';
import SymfonyVite from '../../../dist/vite.mjs';

SymfonyVite();
SymfonyVite({ outputPath: 'public/build', publicPath: '/build/', manifestKeyPrefix: 'build/' });
// @ts-expect-error `outputPath` is a string
SymfonyVite({ outputPath: 42 });
// @ts-expect-error unknown option
SymfonyVite({ nope: true });

SymfonyRsbuild();
SymfonyRsbuild({ outputPath: 'public/build', publicPath: '/build/', manifestKeyPrefix: 'build/' });
// @ts-expect-error `outputPath` is a string
SymfonyRsbuild({ outputPath: 42 });
// @ts-expect-error unknown option
SymfonyRsbuild({ nope: true });
