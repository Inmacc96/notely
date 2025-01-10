import SelectInput from "./SelectInput";

const FormNote: React.FC = () => {
  return (
    <form className="grid grid-cols-2 gap-x-6 gap-y-7">
      <div className="col-span-1 space-y-2">
        <label className="text-sm font-bold text-primary" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Add title"
          className="block w-full text-sm text-primary bg-backgroundMain border border-[#0000001F] focus:outline-none focus:border-[#42A5F5] rounded-md placeholder:text-secondary font-medium p-3"
        />
      </div>
      <div className="col-span-1 space-y-2">
        <label className="text-sm font-bold text-primary">Category</label>
        <SelectInput options={["Personal", "Home", "Business"]} />
      </div>
      <div className="col-span-2 space-y-2">
        <div className="flex justify-between">
          <label
            className="text-sm font-bold text-primary"
            htmlFor="description"
          >
            Description{" "}
            <span className="text-secondary font-normal">{`(optional)`}</span>
          </label>
          <p className="text-secondary text-sm">0/200</p>
        </div>
        <textarea
          id="description"
          placeholder="Add description"
          className="block w-full h-36 resize-none text-sm text-primary bg-backgroundMain border border-[#0000001F] focus:outline-none focus:border-[#42A5F5] rounded-md placeholder:text-secondary font-medium p-3"
          maxLength={200}
        />
      </div>
    </form>
  );
};

export default FormNote;
