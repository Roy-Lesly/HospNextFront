import { Popover } from "antd";

interface CardProps {
    title: string;
    description: string;
    icon: string;
    popContent?: any
  }
  
  const Card: React.FC<CardProps> = ({ title, description, icon, popContent }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="text-2xl text-gray-800 mb-4">
          <i className={`${icon} mr-2`}></i>
          {title}
        </div>
        <p className="text-gray-600 mb-2">{description}</p>

        <Popover content={popContent} title={title} className=''>
        <button className="bg-indigo-900 text-white rounded-md py-2 px-4 hover:bg-purple-600 transition duration-300">
          Learn More        
        </button>
        </Popover>
      </div>
    );
  };
  
  export default Card;
  