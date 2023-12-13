const Title = ({ heading, desc }) => {
  return (
    <div className="text-center mb-12 w-full lg:w-8/12 m-auto space-y-3">
      <h2 className="text-4xl font-extrabold text-black">{heading}</h2>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
};

export default Title;
