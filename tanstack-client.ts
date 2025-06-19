import { Store } from '@tanstack/react-store'

// You can use instantiate a Store outside of React components too!
type TStore = {
  cursor: "default" | "text" | "carriage"
  cursorText: string
  modals: React.ReactNode[]
}
export const store = new Store<TStore>({
  cursor: "default",
  cursorText: "",
  modals: []
})

export const updateCursor = (cursor: TStore["cursor"], cursorText?: TStore["cursorText"]) => {
  store.setState((state) => {
    return {
      ...state,
      cursor,
      cursorText: cursorText || ""
    }
  })
} 

export const addModal = (modal: React.ReactNode) => {
  store.setState((state) => ({
    ...state,
    modals: [...state.modals, modal],
  }));
};

export const removeModal = () => {
  store.setState((state) => ({
    ...state,
    modals: state.modals.slice(0, -1),
  }));
};