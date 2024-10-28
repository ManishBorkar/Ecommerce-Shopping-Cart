const LoadingSpinner = ({ label }: { label?: string }) => (
  <div className="flex flex-col justify-center items-center py-8">
    <div className="animate-spin rounded-full h-40 w-40 border-t-2 border-b-2 border-blue-500"></div>
    {label && <p className="ml-4 mt-4 text-lg font-semibold text-gray-600">{label}</p>}
  </div>
);

export default LoadingSpinner;
