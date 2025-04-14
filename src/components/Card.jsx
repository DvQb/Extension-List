// Card.jsx
// import Toggle from './Toggle'


const Card = ({ id, title, active, toggleCardState, img, description}) => {
  return (
    <div className="p-5 border  rounded-xl shadow flex flex-col gap-14   bg-elementLight dark:text-neutral-50 border-neutral-200 dark:border-neutral-600 dark:bg-elementDark">
        <div className="flex gap-5">
          <img src={img} className="w-16 " />
          <div className="grid gap-2">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center ">


          <button className=" cursor-pointer bg-neutral-50 rounded-full h-10 font-medium px-4 border border-neutral-300 dark:text-neutral-50 dark:border-neutral-600 dark:bg-transparent">Remove</button>
            {/* Toggle para cambiar estado */}
            <div
              onClick={() => toggleCardState(id)}
              className={`w-11 h-6 hover:brightness-105 relative rounded-full cursor-pointer transition-all transform duration-300
                ${active ? 'bg-red-700 dark:bg-red-400 ' : ' bg-neutral-300  dark:bg-neutral-600 '}
              `}
            >
              <div className={`w-5 h-5 rounded-full bg-neutral-50 absolute top-0.5 left-0.5 transform transition-transform duration-200 ${active ? 'translate-x-5' : ""} `}></div>
            </div>
        </div>
    </div>
  );
};

export default Card;
  