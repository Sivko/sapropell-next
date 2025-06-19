"use client";

import { useStore } from "@tanstack/react-store";
import { store } from "@/tanstack-client";

export default function Modals() {
  const modals = useStore(store, (state) => state.modals);

  return (
    <div>
      {modals.map((modal, index) => (
        <div key={index}>{modal}</div>
      ))}
    </div>
  );
}
