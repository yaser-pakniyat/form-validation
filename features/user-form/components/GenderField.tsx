export default function GenderField() {
  return (
    <div>
      <fieldset>
        {/* male */}
        <legend>Gender</legend>
        <label htmlFor="male">
          <input id="male" type="radio" value="male" />
          Male
        </label>

        {/* female */}
        <label htmlFor="female">
          <input id="female" type="radio" value="female" />
          Female
        </label>
      </fieldset>
    </div>
  );
}
