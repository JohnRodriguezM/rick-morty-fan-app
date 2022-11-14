export class PageActions {
  private dispatch: Function;
  public constructor(dispatch: Function) {
    this.dispatch = dispatch;
  }
  public nextPage = () =>
    this.dispatch({ type: "NextPage", payload: 1 });

  public previousPage = () =>
    this.dispatch({ type: "PreviousPage", payload: 1 });

  public specificPage = (value: number) =>
    this.dispatch({ type: "specificPage", payload: value });

  public reset = () =>
    this.dispatch({ type: "restarPagination", payload: 1 });
}
