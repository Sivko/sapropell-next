import { Store } from '@tanstack/react-store'

// You can use instantiate a Store outside of React components too!
type TStore = {
  cursor: "default" | "text"
  cursorText: string
}
export const store = new Store<TStore>({
  cursor: "default",
  cursorText: ""
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