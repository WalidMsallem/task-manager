interface Item {
  id: string;
  title: string;
  description: string;
}
interface ErrorsState {
  getItems: string;
  uploadItems: string;
}
interface LoadingState {
  getItems: boolean;
  uploadItems: boolean;
}

interface ItemState {
  items: Item[];
  errors: ErrorsState;
  loading: LoadingState;
}
export { ItemState, LoadingState, ErrorsState, Item };
