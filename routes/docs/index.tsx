import type { Handlers } from "$fresh/server.ts";

export const handler: Handlers<void> = {
  GET(_ctx) {
    return new Response("", {
      status: 307,
      headers: { location: "/docs/introduction" },
    });
  },
};
