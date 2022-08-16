# POC Vite Build -- Devlog

I'm trying to access an asset that has been added after the build.

The goal is to do something like a mixin, where the static website has been pre-generated but the data comes during run time.

In that case, the output of a CLI app.

I'm gonna try this : https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url

...

Looks like I need to find a way to exclude a non-public file from getting it's name changed

Or I can use a name that is easy to recognize so that the CLI looks for the file in the build output and replace it after each run.

...

So I attempted to simply include the file in the asset folder, and to locate it after the build. But it doesn't work as the asset has been absorbed into a huge minified `.js` asset.

Next idea: mess around with the different options for vite static asset handling.

...

I tried using the `?raw` and the `?worker` option. The `?worker` option seems to have created a separate asset.

One solution might be to encapsulate the payload in a worker script.

...
