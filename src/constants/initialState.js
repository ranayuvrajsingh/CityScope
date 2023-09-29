export const initialDataState = {
    list: [],
    metadata: {},
    filters: {
      limit: 15,
      page: 1,
      sort: 'createdAt',
      sortBy: 'DESC',
      id__in: [],
    },
    loading: false,
    fetching: false,
    error: null,
  };