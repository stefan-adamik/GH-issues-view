const debounce = (
  func: (...args: unknown[]) => void,
  timeout = 300
): ((...args: unknown[]) => void) => {
  let timer: NodeJS.Timeout;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export default debounce;
