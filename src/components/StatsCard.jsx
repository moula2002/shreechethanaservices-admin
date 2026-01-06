const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h4 className="text-gray-500">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;
