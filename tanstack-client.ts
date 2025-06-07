import { Store } from '@tanstack/react-store'

// You can use instantiate a Store outside of React components too!
type TStore = {
  cursor: "default" | "text"
}
export const store = new Store<TStore>({
  cursor: "default" 
})

export const updateCursor = (cursor: TStore["cursor"]) => {
  store.setState((state) => {
    return {
      ...state,
      cursor,
    }
  })
} 