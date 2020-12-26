const MAX_PAGE_LINKS = 10;
const CURRENT_IS_NTH = 6;

export function toShowingPageLinks(current: number, total: number): number[] {
  /**
   * 01 02 03 04 05 06 07 08 09
   *  ^
   * |                        |
   *
   * 01 02 03 04 05 06 07 08 09
   *     ^
   * |                        |
   *
   * 01 02 03 04 05 06 07 08 09
   *                 ^
   * |                        |
   *
   */
  if (total <= MAX_PAGE_LINKS) {
    // 1 から 10 まで、もしくは、1 から 最終ページ まで
    return Array.from({ length: Math.min(total, MAX_PAGE_LINKS) }, (_, i) => i + 1);
  }

  /**
   * 01 02 03 04 05 06 07 08 09 10
   *  ^
   * |                           |
   *
   * 01 02 03 04 05 06 07 08 09 10
   *     ^
   * |                           |
   *
   * 01 02 03 04 05 06 07 08 09 10
   *              ^
   * |                           |
   *
   */
  if (current < CURRENT_IS_NTH) {
    // 1 から 10 まで、もしくは、1 から 最終ページ まで
    return Array.from({ length: Math.min(total, MAX_PAGE_LINKS) }, (_, i) => i + 1);
  }

  const links: number[] = [];
  const offset = [CURRENT_IS_NTH - MAX_PAGE_LINKS - 1, MAX_PAGE_LINKS - CURRENT_IS_NTH];

  /**
   * 01 02 03 04 05 06 07 08 09 10
   *                    ^
   * |                           |
   *
   * 7 + (-5) + 10 - 1 = 11
   * 11 > 10 つまり 右側が足りないので、不足ぶんだけ左側を伸ばす
   * (-5) + (11 - 10) = -6
   * 7 + (-6) つまり 1 から 10 ページ まで
   *
   *
   * 01 02 03 04 05 06 07 08 09 10 11
   *                    ^
   *    |                           |
   *
   * 7 + (-5) + 10 - 1 = 11
   * 11 === 11 つまり 右側が足りているので、そのまま
   * 7 + (-5) つまり 2 から 11 ページ まで
   *
   *
   * 01 02 03 04 05 06 07 08 09 10 11 12
   *                    ^
   *    |                           |
   *
   * 7 + (-5) + 10 - 1 = 11
   * 11 < 12 つまり 右側が足りているので、そのまま
   * 7 + (-5) つまり 2 から 11 ページ まで
   *
   */
  if (current + offset[0] + MAX_PAGE_LINKS - 1 > total) {
    offset[0] -= current + offset[0] + MAX_PAGE_LINKS - 1 - total;
    offset[1] = MAX_PAGE_LINKS + offset[0] - 1;
  }

  for (let i = offset[0]; i < offset[1] + 1; i++) {
    if (current + i >= 1 && current + i <= total) {
      links.push(current + i);
    }
  }

  return links;
}
