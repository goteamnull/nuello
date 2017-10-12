export default function PositionCalculator(items, targetPosition, originalPosition) {
  const itemsClone = items.slice();
  const isOnly = itemsClone.length === 0;
  const isFirst = targetPosition === 0;

  itemsClone.sort((a, b) => a.position - b.position);

  if (originalPosition === 0 || originalPosition > 0) itemsClone.splice(originalPosition, 1);

  const isLast = targetPosition >= itemsClone.length;

  if (isOnly || itemsClone.length === 0) {
    return 65535;
  } else if (isFirst) {
    return itemsClone[0].position / 2;
  } else if (isLast) {
    return itemsClone[itemsClone.length - 1].position + 65536;
  } else {
    let itemBefore, itemAfter;

    itemBefore = itemsClone[targetPosition - 1];
    itemAfter = itemsClone[targetPosition];

    return (itemBefore.position + itemAfter.position) / 2;
  }
};
