# rubricui

## Description

This project is a UI component library built with React and TypeScript.

```sh
# install dependencies
bun install

# test the package
bun test

# build the package, available under dist
bun run build
```

## Test locally

Use Bun's linking commands to create a symlink between your library and the project where you want to test it, run in your package:

```sh
bun link
```

In your test project, run:

```sh
bun link rubricui
```

While working on your library, run the watch script to automatically rebuild your library on changes:

```sh
bun run watch
```

## Publish

To publish a new version, bump the version number and run

```sh
npm publish
```
