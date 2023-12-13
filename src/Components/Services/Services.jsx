import Title from "../../Shared/Title/Title";

const cards = [
  {
    id: 1,
    icon: "https://i.ibb.co/sqWK0mS/icon-5.png",
    title: "Optimization",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    color: "#000",
    bg: "#F59300",
  },
  {
    id: 2,
    icon: "https://i.ibb.co/5x0rtJY/icon-6.png",
    title: "Click Through Rate",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    color: "#fff",
    bg: "#5E2BA2",
  },
  {
    id: 3,
    icon: "https://i.ibb.co/WcfY53t/icon-7.png",
    title: "Regional SEO",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    color: "#000",
    bg: "#F59300",
  },
  {
    id: 4,
    icon: "https://i.ibb.co/ynqKQsr/icon-8.png",
    title: "Keyword Selection",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    color: "#fff",
    bg: "#5E2BA2",
  },
  {
    id: 4,
    icon: "https://i.ibb.co/ZVJ6Xbb/icon-9.png",
    title: "Keyword Selection",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    color: "#fff",
    bg: "#5E2BA2",
  },
  {
    id: 4,
    icon: "https://i.ibb.co/nMbFSfq/icon-10.png",
    title: "Keyword Selection",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    color: "#fff",
    bg: "#5E2BA2",
  },
];

const Services = () => {
  return (
    <div className="container py-12">
      <Title
        heading={"Obtain Immediate Optimization & Conversion For Your Website"}
        desc={
          "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      ></Title>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
        {cards.map((card) => (
          <div className=" " key={card.id}>
            <figure className="px-10 pt-10">
              <img src={card.icon} alt="Shoes" className="rounded-xl " />
            </figure>
            <div className="card-body items-start text-left">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
