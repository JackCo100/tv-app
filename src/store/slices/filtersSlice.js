export const filtersSlice = (set) => ({
  filters: [],
  setFilters: ({ type, value }) => {
    if (filters[type]) {
      set();
    }
  },
});
