import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
    return c.text(`Sentry release is ${SENTRY_RELEASE}`);
});

export default app;
