import Title from "../../Shared/Title/Title";

const cards = [
  {
    id: 1,
    icon: "https://i.ibb.co/d2Zmyhx/icon-1.png",
    title: "Competitor Analysis",
    desc: "Culpa fugiat fugiat amet veniam exercitation ex incididunt.",
    color: "#000",
    bg: "#F59300",
  },
  {
    id: 2,
    icon: "https://i.ibb.co/QQDG1Tz/icon-4.png",
    title: "Implementation Risk",
    desc: "Culpa fugiat fugiat amet veniam exercitation ex incididunt.",
    color: "#fff",
    bg: "#5E2BA2",
  },
  {
    id: 3,
    icon: "https://i.ibb.co/VxQ4vJQ/icon-2.png",
    title: "Creative Content",
    desc: "Culpa fugiat fugiat amet veniam exercitation ex incididunt.",
    color: "#000",
    bg: "#F59300",
  },
  {
    id: 4,
    icon: "https://i.ibb.co/72fxbZG/icon-3.png",
    title: "Business Life Cycle",
    desc: "Culpa fugiat fugiat amet veniam exercitation ex incididunt.",
    color: "#fff",
    bg: "#5E2BA2",
  },
];

const ServiceGoal = () => {
  return (
    <div className="container py-12">
      <Title
        heading={"Web Optimization & Seo"}
        desc={
          "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      ></Title>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 ">
        {cards.map((card) => (
          <div
            className={`card   shadow-xl`}
            key={card.id}
            style={{ background: card.bg, color: card.color }}
          >
            <figure className="px-10 pt-10">
              <img src={card.icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGoal;
