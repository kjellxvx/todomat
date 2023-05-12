export const useFoo = () => {
  return useState("foo", () => "bar");
};

export const useComplete = () => {
    return useState("complete", () => false);
}

export const useKeyboard = () => {
    return useState("keyboard", () => false);
}

export const useTodos = () => {
    return useState("todos", () => {
        return {}
    });
}

export const useData = () => {
    return useState("data", () => {
        return {}
    });
}