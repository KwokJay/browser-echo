import { initBrowserEcho } from '@browser-echo/core';
import type { InitBrowserEchoOptions } from '@browser-echo/core';

// Vue 2's plugin API is different from Vue 3's.
// It expects an object with an `install` method that receives the Vue constructor.
interface Vue2Plugin {
  install: (Vue: any, options?: InitBrowserEchoOptions) => void;
}

export function createBrowserEchoVue2Plugin(options: InitBrowserEchoOptions = {}): Vue2Plugin {
  return {
    install(_Vue: any) {
      // The core logic is framework-agnostic. We just need to call it at the right time.
      // We check for `window` to ensure this only runs on the client-side.
      // A check for development mode should be handled by the user of the plugin.
      if (typeof window !== 'undefined') {
        initBrowserEcho(options);
      }
    }
  };
}
