import { Link } from "react-router-dom";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../api/firebase";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const productsCollectionRef = collection(db, "Products");
  let navigate = useNavigate();
  const createProduct = async () => {
    await addDoc(productsCollectionRef, {
      title: title,
      description: description,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  return (
    <div className="container py-2">
      <div className="flex items-center justify-center space-x-4 flex-col">
        <Link to="/">Home</Link>
        <div className="flex flex-col space-y-2">
          <label className="bg-red-400">Title: </label>
          <input
            placeholder="Titulo"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {/* <h1 className="text-black">{title}</h1> */}
          <label className="bg-red-400">Description: </label>
          <input
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
            onClick={createProduct}
          >
            Crear publicación
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
