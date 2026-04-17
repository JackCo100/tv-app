export const querySlice = (set) => ({
    query: "",
    setQuery: (value) => set({ query: value }),

    results: [],
    setResults: (value) => set({ results: value }),

    loading: false,
    setLoading: (value) => set({ loading: value }),
    
    error: null,
    setError: (value) => set({ error: value })
});