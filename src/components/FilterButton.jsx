// FilterButtons.jsx
const FilterButtons = ({ currentFilter, setFilter }) => {
    return (
      <div className="flex justify-between mb-4 mt-12 ">
          <h2 className="font-bold text-4xl dark:text-neutral-50">Extension List</h2>
          <div className="flex gap-2 mb-4  ">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 h-11 text-lg shadow bg-neutral-50 border dark:bg-neutral-700 dark:text-neutral-50 dark:border-neutral-600 border-neutral-200   rounded-full ${currentFilter === "all" ? "bg-red-700 dark:bg-red-400 border-none dark:text-neutral-900 text-neutral-50"  : ""}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-5 h-11 text-lg shadow bg-neutral-50 border  dark:bg-neutral-700 dark:text-neutral-50 dark:border-neutral-600 border-neutral-200  rounded-full ${currentFilter === "active" ? "bg-red-700 dark:bg-red-400 border-none dark:text-neutral-900 text-neutral-50" : ""}`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("inactive")}
            className={`px-5 h-11 text-lg shadow bg-neutral-50 border  dark:bg-neutral-700 dark:text-neutral-50 dark:border-neutral-600 border-neutral-200  rounded-full ${currentFilter === "inactive" ? "bg-red-700 dark:bg-red-400 border-none dark:text-neutral-900 text-neutral-50" : ""}`}
          >
            Inactive
          </button>
        </div>
      </div>
    );
  };
  
  export default FilterButtons;
  