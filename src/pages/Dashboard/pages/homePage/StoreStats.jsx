// stats component
const StatDiv = ({ title, value, isMoney = false }) => {
  return (
    <div className="stat flex flex-col justify-center bg-black rounded-3xl flex-1 max-w-[248px] min-h-[140px] px-5 capitalize">
      <h1 className="text-xl text-white">{title}</h1>
      <h1 className="text-green text-4xl font-bold text-right mt-2">
        {isMoney ? "$" : ""}
        {value.toLocaleString()} {/* This will add commas */}
      </h1>
    </div>
  );
};
const StoreStats = () => {
  return (
    <div className="flex flex-wrap gap-5 my-5">
      <StatDiv title="items shipped" value={10723} />
      <StatDiv title="items in stock" value={500234} />
      <StatDiv title="total sales" isMoney={true} value={10723} />
      <StatDiv title="total profit" isMoney={true} value={1000232} />
    </div>
  );
};

export default StoreStats;
