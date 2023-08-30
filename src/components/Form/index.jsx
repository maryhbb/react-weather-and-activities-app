import Button from "../Button";
import "./Form.css";

export const Form = () => {
  return (
    <form
      className="form"
      aria-labelledby="formHeading"
      //   onSubmit={handleSubmit}
    >
      <h2 className="form__header" id="formHeading">
        Add new Activity:
      </h2>
      <div className="form__row">
        <label className="form__label" htmlFor="name">
          Name: 
        </label>

        <input
          className="form__input-text"
          name="name"
          id="name"
          type="text"
          required
        ></input>
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="isForGoodWeather">
          Good-weather activity:
        </label>
        <input
          className="form__input-checkbox"
          type="checkbox"
          name="isForGoodWeather"
          id="isForGoodWeather"
        ></input>
      </div>
      <div className="form__row--button">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default Form;
