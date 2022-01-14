import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSoda } from "../../store/soda";
import { useHistory, Redirect, useParams } from "react-router-dom";
import './newSoda.css'
const CreateSodaForm = () => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const { sodaId } = useParams();

console.log(sodaId)

  const updateName = (e) => setName(e.target.value);
  const updateBody = (e) => setBody(e.target.value);





  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      body,
      soda_id : sodaId
    };

    const soda = await dispatch(createSoda(payload));
    if (soda) history.push(`/sodas`);
  };
  if (sessionUser) {
    return (
      <>
        <form id="new-soda" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={updateName}
            required
          />
          <textarea
            className="text"
            placeholder="Flavors..."
            value={body}
            onChange={updateBody}
            required
          />
          <button type="submit" onSubmit={handleSubmit}>
            Save
          </button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <Redirect to="/" />
      </>
    );
  }
};

export default CreateSodaForm;
