export const conditionChecker = (type: string, data: number, value: number) => {
  if (type === '>') {
    return data > value;
  } else if (type === '<') {
    return data < value;
  } else if (type === '>=') {
    return data >= value;
  } else if (type === '<=') {
    return data <= value;
  } else {
    return false;
  }
};
