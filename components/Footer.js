import { useState } from "react"
import { addPost } from "../utils/mdx-utils";
import { useRouter } from 'next/router';

const initialState = {
  title: "",
  description: "",
  body: ""
} 

export default function Footer({ copyrightText }) {
  const [formData, setFormData] = useState(initialState);
  const router = useRouter();

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const plusIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="50" viewBox="0 0 50 50">
    <path fill="#ffffff" d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
    </svg>
  );

  const submitForm = (e) => {
    e.preventDefault()

    if(e.target[1].value != '' && e.target[2].value != '' && e.target[3].value != ''){
      addPost(formData);
      setFormData(initialState)
      alert("Post adicionado com sucesso!");
      router.push('/')
    } else{
      alert("Formulário em branco! Preencha os campos corretamente.");
    }
  }    

  return (
    <footer className="py-8 flex flex-col items-center w-full">
      <form method="POST" onSubmit={submitForm} className="w-full bg-next-green bg-opacity-50 rounded-lg p-4 pt-2">
        <div className="flex mb-2 ">
        <p className="inline-flex items-center font-bold">Novo post</p>
            <button type="submit" aria-label="Add Item" className="inline-flex items-center h-full rounded-3xl flex justify-center align-center w-24 h-10 transition hover:scale-110">
              {plusIcon}
            </button>
        </div>
        <div className="flex flex-col items-center w-full">
          <input name="title" type="text" placeholder="Título do post" className="w-full mb-2 p-1 text-black" onChange={handleInput}  value={formData.title}/>
          <textarea name="description" placeholder="Descrição breve do post" className="w-full mb-2 p-1 text-black" onChange={handleInput} value={formData.description}/>
          <textarea rows="4" name="body" placeholder="Corpo do post" className="w-full p-1 text-black" onChange={handleInput} value={formData.body}/>
        </div>
      </form>
      <p className="text-white uppercase mt-5 font-bold opacity-60">
        {copyrightText}
      </p>
    </footer>
  );
}
