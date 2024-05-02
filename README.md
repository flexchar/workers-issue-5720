### Workers issue 5720

Please see https://github.com/cloudflare/workers-sdk/issues/5720#issuecomment-2090079286.

```bash
git clone https://github.com/flexchar/workers-issue-5720
npm install
npm run test
```

and observe an error:

```bash
> test
> wrangler deploy src/index.ts --define SENTRY_RELEASE:$(git rev-parse HEAD) --outdir dist --dry-run

 ⛅️ wrangler 3.53.0
-------------------

✘ [ERROR] Invalid define value (must be an entity name or valid JSON syntax): 7c6c2ddef3cc0c97ca532716709dd5bb086b7fa2


✘ [ERROR] Build failed with 1 error:

  error: Invalid define value (must be an entity name or valid JSON syntax):
  7c6c2ddef3cc0c97ca532716709dd5bb086b7fa2
```
