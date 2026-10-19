import esbuild from 'esbuild';
await esbuild.build({
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'cjs',
  platform: 'browser',
  target: 'es2020',
  outfile: 'main.js',
  // Provided by Obsidian at runtime — must NOT be bundled, or the Vim extension
  // would talk to a different copy of CodeMirror than the editor does.
  external: ['obsidian', 'electron', '@codemirror/*', '@lezer/*'],
  banner: { js: '/* Yarn Spinner Editor for Obsidian — built file; edit src/main.js and run `npm run build`. */' },
  logLevel: 'info',
});
