export const useComplete = () => {
  return useState("complete", () => false);
};

export const useKeyboard = () => {
  return useState("keyboard", () => false);
};

export const useTodos = () => {
  return useState("todos", () => {
    return {};
  });
};

export const useData = () => {
  return useState("data", () => {
    return {};
  });
};

export const useIndex = () => {
  return useState("index", () => 0);
};

export const useOrder = () => {
  return useState("order", () => [
    "menu",
    "A1",
    "menu",
    "B1",
    "menu",
    "C1",
    "menu",
    "D2",
    "menu",
    "E1",
    "menu",
    "F1",
    "menu",
  ]);
};
