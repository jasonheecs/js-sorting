/**
 * @param  {Array} elements
 * @return {Array}
 */
export default function (elements) {
  qsort(0, elements.length - 1);

  return elements;

  /**
 * @param  {number} start
 * @return {number} end
 */
  function qsort (start, end) {
    if (start >= end) return;

    const pivot = elements[end];
    let left = start;
    let right = end - 1;

    while (left <= right) {
      while (left <= (end - 1) && elements[left] < pivot) {
        left++;
      }

      while (right >= start && elements[right] > pivot) {
        right--;
      }

      if (left >= right) break;

      swap(left, right);
      left++;
      right--;
    }

    swap(end, left);
    qsort(start, left - 1);
    qsort(left + 1, end);
  }

  /**
   * @param  {number} i
   * @param  {number} j
   */
  function swap (i, j) {
    [elements[i], elements[j]] = [elements[j], elements[i]];
  }
}
