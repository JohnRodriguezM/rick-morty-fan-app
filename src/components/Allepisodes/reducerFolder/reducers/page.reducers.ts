import { ActionType } from "./enumPage";

export const initialPage = { page: 1 };
export const reducerPage = (state: any, { type, payload }: any) => {
  switch (type) {
    case ActionType.NextPage:
      return { page: state.page + payload };
    case ActionType.PreviousPage:
      return { page: state.page - payload };
    case ActionType.specificPage:
      return { page: payload };
    case ActionType.restarPagination:
      return { page: (state.page = 1) };
  }
  return state;
};
