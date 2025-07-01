const logger =
  (state: { getState: () => unknown }) =>
  (next: (action: unknown) => unknown) =>
  (action: unknown) => {
    console.group((action as { type: string }).type);
    console.info("Previous State:", state.getState());
    const result = next(action);
    console.info("Next State:", state.getState());
    console.groupEnd();
    return result;
  };

export default logger;
