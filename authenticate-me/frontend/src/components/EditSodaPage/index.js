import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneSoda, updateSoda, deleteSoda } from "../../store/soda";
import { useParams, useHistory, Redirect, NavLink } from "react-router-dom";

const EditSodaForm = () => {
  const { sodaId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getOneSoda(sodaId));
  }, [dispatch, sodaId]);

  const soda = useSelector((state) => state.soda[sodaId]);
  const sessionUser = useSelector((state) => state.session.user);

  const [name, setName] = useState(soda?.name);
  const [body, setBody] = useState(soda?.body);
  const updateName = (e) => setName(e.target.value);
  const updateBody = (e) => setBody(e.target.value);
  const ahandleSubmit = async (e) => {
    e.preventDefault();
    dispatch(deleteSoda(sodaId));
    history.push(`/sodas`);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...soda,
      name,
      body,
    };

    await dispatch(updateSoda(payload));
    history.push(`/sodas`);
  };
  if (sessionUser) {
    return (
      <>
        <form id="new-soda" onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={updateName} required />
          <textarea value={body} onChange={updateBody} required />
          <button type="submit">Edit</button>
          <NavLink to="/sodas">
            <button className="options" id="del-button" onClick={ahandleSubmit}>
              Delete
            </button>
          </NavLink>
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

export default EditSodaForm;
