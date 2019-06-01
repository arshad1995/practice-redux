import * as newsActions from "../actions/news.actions";

const initialState = {
  loading: false,
  newsFeeds: "",
  status: null,
  error: null
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case newsActions.NEWS_FEED_REQUESTING:
      return {
        ...state,
        loading: true,
        status: action.status
      };
    case newsActions.NEWS_FEED_SUCCESS:
      return {
        ...state,
        loading: false,
        newsFeeds: action.data,
        status: action.status
      };

    case newsActions.NEWS_FEED_FAILURE:
      return {
        ...state,
        loading: false,
        newsFeeds: action.error,
        status: action.status
      };
    default:
      return state;
  }
};
export default newsReducer;
