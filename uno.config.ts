import { defineConfig, presetAttributify, transformerAttributifyJsx, presetIcons } from 'unocss';
import presetWind4 from '@unocss/preset-wind4';

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons(),
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
  ],
  shortcuts: {
    section: 'p-4 mb-5 border border-solid border-#444 rounded',
  },
  transformers: [transformerAttributifyJsx()],
});
