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

export const useSelectedTodo = () => {
  return useState("selectedTodo", () => {
    return {};
  });
};

export const useData = () => {
  return useState("data", () => {
    return {};
  });
};

export const useHeadline = () => {
  return useState("headline", () => {
    return {};
  });
};

export const useProgress = () => {
  return useState("progress", () => {
    return [0, 0, 0, 0, 0, 0];
  });
};

export const useIndex = () => {
  return useState("index", () => 0);
};

export const useCategories = () => {
  return useState("categories", () => {});
};

export const useLocal = () => {
  return useState("local", () => false);
};

export const useLoading = () => {
  return useState("loading", () => false);
};

export const usePopup = () => {
  return useState("popup", () => {
    return {
      isOpen: false,
      content: "default",
    };
  });
};

export const useStoredData = () => {
  return useState("storedData", () => {
    return {};
  });
};

export const useUserToken = () => {
  return useState("userToken", () => false);
};

export const useOrder = () => {
  return useState("order", () => [
    "menu",
    "A1",
    "A2",
    "menu",
    "B1",
    "menu",
    "C1",
    "C2",
    "C3",
    "menu",
    "D1",
    "D2",
    "D3",
    "D4",
    "menu",
    "E1",
    "E2",
    "E3",
    "E4",
    "menu",
    "F1",
    "F2",
    "F3",
    "menu",
  ]);
};
