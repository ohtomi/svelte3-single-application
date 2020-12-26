import type { SvelteActionResult } from './svelte';

export function autofocus($element: HTMLElement): SvelteActionResult {
  $element.focus();
  return {};
}
