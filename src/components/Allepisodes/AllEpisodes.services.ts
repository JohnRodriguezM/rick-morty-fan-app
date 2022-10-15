export const clasesStore = {
  number1:
    "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-3xl bg-white",
  number2: "flex flex-1 justify-between sm:hidden",
  number3:
    "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50",
  number4:
    "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50",
  number5: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",
  number6: "isolate inline-flex -space-x-px rounded-md shadow-sm",
  number7:
    "relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20",
  number8:
    "relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20",
  number9:
    "relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20",
};

export const style = {
  display: "grid",
  gridTemplateColumns: `repeat(
    auto-fit,
    minmax(200px, 1fr)
  )`,
  gridGap: "1rem",
  border: "1px solid #ccc",
};