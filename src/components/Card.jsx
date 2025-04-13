// Card.jsx
// import Toggle from './Toggle'


const Card = ({ id, title, active, toggleCardState, img, description}) => {
  return (
    <div className="p-4 border rounded-xl shadow flex flex-col gap-4  bg-elementLight dark:bg-elementDark">
      <div className="flex">
      <img src={img} className="w-10 " />
      <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
      </div>
      </div>
      {/* Toggle para cambiar estado */}
      <div
        onClick={() => toggleCardState(id)}
        className={`w-24 h-10 hover:brightness-105 flex items-center rounded-full cursor-pointer transition-colors transform duration-500
          ${active ? 'bg-red-700 dark:bg-red-400 justify-start ' : ' bg-neutral-300  dark:bg-neutral-600 justify-end'}
        `}
      >
       <div className={`w-8 h-8 rounded-full bg-neutral-50 `}></div>
      </div>
    </div>
  );
};

export default Card;
  