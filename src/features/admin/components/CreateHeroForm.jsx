import { useRef, useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import SelectedQuestion from "./SelectedQuestion";
import adminApi from "../../../api/admin";
import ImageIcon from "../../../icons/Image";

const initialInput = {
  title: "",
  description: "",
  quiz1: 0,
  quiz2: 0,
  quiz3: 0,
  quiz4: 0,
  eventPicture: "",
};

export default function CreateHeroForm({
  setHeroContent,
  onSuccess,
  questions,
}) {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [input, setInput] = useState(initialInput);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleClickSave = async () => {
    try {
      const formData = new FormData()
      formData.append("eventPicture", file)
      formData.append("hero", JSON.stringify(input))
      const res = await adminApi.createHero(formData)
      setHeroContent({ ...res.data.hero })
      onSuccess()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col p-4">
      <div className="flex gap-2">
        <div className="w-[800px] h-[280px] gap-4 p-4 rounded-xl grid grid-cols-5 ">
          <div
            role="button"
            className="col-span-2 h-full bg-grey flex justify-center items-center rounded-xl shadow-xl hover:bg-darkgrey"
            onClick={handleImageClick}
          >
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                className="object-fill"
                alt="Selected"
              />
            ) : (
              <div className="flex flex-col justify-center items-center">
                <div className="p-2 border-2 border-black rounded-md">
                  <ImageIcon />
                </div>

                <div className="text-font-title-card">Add image</div>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between gap-3 col-span-3">
            <Input
              name="title"
              placeholder="Title"
              value={input?.title}
              onChange={handleChangeInput}
            />
            <TextArea
              name="detail"
              placeholder="Description"
              value={input?.detail}
              onChange={handleChangeInput}
            />
          </div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
        <div className="max-w-[400px] rounded-xl flex flex-col gap-2 p-2">
          <div className="text-font-title border-grey">My Quiz</div>
          <SelectedQuestion
            p={"2"}
            questions={questions}
            onChange={handleChangeInput}
            name={`quiz1`}
            value={input.quiz1}
          />
          <SelectedQuestion
            p={"2"}
            questions={questions}
            onChange={handleChangeInput}
            name={`quiz2`}
            value={input.quiz2}
          />
          <SelectedQuestion
            p={"2"}
            questions={questions}
            onChange={handleChangeInput}
            name={`quiz3`}
            value={input.quiz3}
          />
          <SelectedQuestion
            p={"2"}
            questions={questions}
            onChange={handleChangeInput}
            name={`quiz4`}
            value={input.quiz4}
          />
        </div>
      </div>
      <div className="flex p-4 gap-12 justify-start ">
        <Button bg={`black`} width={60} onClick={onSuccess}>
          Cancel
        </Button>
        <Button
          bg={`blue`}
          color={`white`}
          width={60}
          onClick={handleClickSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
