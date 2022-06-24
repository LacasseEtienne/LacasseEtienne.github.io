export function isOverflown({ clientWidth, clientHeight, scrollWidth, scrollHeight }: HTMLDivElement) {
  return scrollHeight > clientHeight || scrollWidth > clientWidth;
}
