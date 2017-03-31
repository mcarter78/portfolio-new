export function colorPicker() {
  const colors = [
    '#0fd',
    '#0cf',
    '#07f',
    '#02f',
    '#30f',
    '#80f',
    '#d0f',
    '#f0c',
    '#f07',
    '#f02',
    '#f30',
    '#f80',
    '#fd0',
    '#cf0',
    '#7f0'
  ];
  const roll = Math.floor(Math.random() * (15 - 1) + 1);
  return colors[roll];
}
