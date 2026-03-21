/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    runtime: import('@astrojs/cloudflare').RuntimeStorage;
  }
}
