import { d as defineEventHandler, u as useRuntimeConfig, r as readBody } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const sendgrid_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  await $fetch(
    "https://api.sendgrid.com/v3/mail/send",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + config.SENDGRID_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    }
  ).catch((error) => {
    return error;
  });
});

export { sendgrid_post as default };
//# sourceMappingURL=sendgrid.post.mjs.map
