type ActionButtonProps = {
  onClick: () => void;
  Icon: React.FC;
  tooltipText: string;
  isCompleted: boolean;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  Icon,
  tooltipText,
  isCompleted,
}) => {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className={`peer p-2 rounded-full hover:bg-black-12 transition-all duration-300 ${
          isCompleted ? "text-gray-900-36" : "text-gray-600"
        }`}
      >
        <Icon />
      </button>
      <p className="left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-600 text-white rounded-md p-2 text-sm mt-2 absolute peer-hover:opacity-100 opacity-0">
        {tooltipText}
      </p>
    </div>
  );
};

export default ActionButton;
