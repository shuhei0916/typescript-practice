# typescript-practice
typescriptの練習用のレポジトリです。[世界一わかりやすいTypeScript講座！プログラミング初心者もOK](https://www.youtube.com/watch?v=GEMtGlBiua4&list=PLLFOC5fk1ILkLBqQRsyCk4iynGJ66spH2&index=3)を参考にしました。

- like-button: [Reactでいいねボタンを作ろう](https://typescriptbook.jp/tutorials/react-like-button-tutorial#yarn%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)

# ディレクトリ構成

(修正予定)
```
.
├── README.md
├── index.html
├── jest.config.cjs
├── like-button
│   ├── README.md
│   ├── node_modules
│   ├── package.json
│   ├── public
│   ├── src
│   ├── tsconfig.json
│   └── yarn.lock
├── node_modules
│   ├── @ampproject
│   ├── @babel
│   ├── @bcoe
│   ├── @esbuild
│   ├── @istanbuljs
│   ├── @jest
│   ├── @jridgewell
│   ├── @rollup
│   ├── @sinclair
│   ├── @sinonjs
│   ├── @types
│   ├── ansi-escapes
│   ├── ansi-regex
│   ├── ansi-styles
│   ├── anymatch
│   ├── argparse
│   ├── babel-jest
│   ├── babel-plugin-istanbul
│   ├── babel-plugin-jest-hoist
│   ├── babel-preset-current-node-syntax
│   ├── babel-preset-jest
│   ├── balanced-match
│   ├── brace-expansion
│   ├── braces
│   ├── browserslist
│   ├── bs-logger
│   ├── bser
│   ├── buffer-from
│   ├── callsites
│   ├── camelcase
│   ├── caniuse-lite
│   ├── chalk
│   ├── char-regex
│   ├── ci-info
│   ├── cjs-module-lexer
│   ├── cliui
│   ├── co
│   ├── collect-v8-coverage
│   ├── color-convert
│   ├── color-name
│   ├── concat-map
│   ├── convert-source-map
│   ├── cross-spawn
│   ├── debug
│   ├── dedent
│   ├── deepmerge
│   ├── detect-newline
│   ├── diff-sequences
│   ├── electron-to-chromium
│   ├── emittery
│   ├── emoji-regex
│   ├── error-ex
│   ├── esbuild
│   ├── escalade
│   ├── escape-string-regexp
│   ├── esprima
│   ├── execa
│   ├── exit
│   ├── expect
│   ├── fast-json-stable-stringify
│   ├── fb-watchman
│   ├── fill-range
│   ├── find-up
│   ├── fs.realpath
│   ├── function-bind
│   ├── gensync
│   ├── get-caller-file
│   ├── get-package-type
│   ├── get-stream
│   ├── glob
│   ├── globals
│   ├── graceful-fs
│   ├── has-flag
│   ├── hasown
│   ├── html-escaper
│   ├── human-signals
│   ├── import-local
│   ├── imurmurhash
│   ├── inflight
│   ├── inherits
│   ├── is-arrayish
│   ├── is-core-module
│   ├── is-fullwidth-code-point
│   ├── is-generator-fn
│   ├── is-number
│   ├── is-stream
│   ├── isexe
│   ├── istanbul-lib-coverage
│   ├── istanbul-lib-instrument
│   ├── istanbul-lib-report
│   ├── istanbul-lib-source-maps
│   ├── istanbul-reports
│   ├── jest
│   ├── jest-changed-files
│   ├── jest-circus
│   ├── jest-cli
│   ├── jest-config
│   ├── jest-diff
│   ├── jest-docblock
│   ├── jest-each
│   ├── jest-environment-node
│   ├── jest-get-type
│   ├── jest-haste-map
│   ├── jest-leak-detector
│   ├── jest-matcher-utils
│   ├── jest-message-util
│   ├── jest-mock
│   ├── jest-pnp-resolver
│   ├── jest-regex-util
│   ├── jest-resolve
│   ├── jest-resolve-dependencies
│   ├── jest-runner
│   ├── jest-runtime
│   ├── jest-snapshot
│   ├── jest-util
│   ├── jest-validate
│   ├── jest-watcher
│   ├── jest-worker
│   ├── js-tokens
│   ├── js-yaml
│   ├── jsesc
│   ├── json-parse-even-better-errors
│   ├── json5
│   ├── kleur
│   ├── leven
│   ├── lines-and-columns
│   ├── locate-path
│   ├── lodash.memoize
│   ├── lru-cache
│   ├── make-dir
│   ├── make-error
│   ├── makeerror
│   ├── merge-stream
│   ├── micromatch
│   ├── mimic-fn
│   ├── minimatch
│   ├── ms
│   ├── nanoid
│   ├── natural-compare
│   ├── node-int64
│   ├── node-releases
│   ├── normalize-path
│   ├── npm-run-path
│   ├── once
│   ├── onetime
│   ├── p-limit
│   ├── p-locate
│   ├── p-try
│   ├── parse-json
│   ├── path-exists
│   ├── path-is-absolute
│   ├── path-key
│   ├── path-parse
│   ├── picocolors
│   ├── picomatch
│   ├── pirates
│   ├── pkg-dir
│   ├── postcss
│   ├── pretty-format
│   ├── prompts
│   ├── react-is
│   ├── require-directory
│   ├── resolve
│   ├── resolve-cwd
│   ├── resolve-from
│   ├── resolve.exports
│   ├── rimraf
│   ├── rollup
│   ├── semver
│   ├── shebang-command
│   ├── shebang-regex
│   ├── signal-exit
│   ├── sisteransi
│   ├── slash
│   ├── source-map
│   ├── source-map-js
│   ├── source-map-support
│   ├── sprintf-js
│   ├── stack-utils
│   ├── string-length
│   ├── string-width
│   ├── strip-ansi
│   ├── strip-bom
│   ├── strip-final-newline
│   ├── strip-json-comments
│   ├── supports-color
│   ├── supports-hyperlinks
│   ├── supports-preserve-symlinks-flag
│   ├── terminal-link
│   ├── test-exclude
│   ├── tmpl
│   ├── to-fast-properties
│   ├── to-regex-range
│   ├── ts-jest
│   ├── type-detect
│   ├── type-fest
│   ├── typescript
│   ├── undici-types
│   ├── update-browserslist-db
│   ├── v8-to-istanbul
│   ├── vite
│   ├── walker
│   ├── which
│   ├── wrap-ansi
│   ├── wrappy
│   ├── write-file-atomic
│   ├── y18n
│   ├── yallist
│   ├── yargs
│   ├── yargs-parser
│   └── yocto-queue
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── counter.ts
│   ├── increment.js
│   ├── increment.ts
│   ├── isZero.ts
│   ├── main.ts
│   ├── sample.ts
│   ├── style.css
│   ├── typescript.svg
│   └── vite-env.d.ts
├── test
│   ├── isZero.test.ts
│   └── sample.test.ts
├── tsconfig.json
└── yarn.lock

219 directories, 23 files

```