import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "About": {},
  "Shop": {},
  "Contact": {},
  "Order": {}
}});

export default useIoStore;
