import { useEffect, useRef, useState } from "react";
import IngridientsList from "./IngridientsList";
import ClaudeReciepe from "./ClaudeReciepe";
import { getReciepeFromMIstral } from "../../../ai";

export default function Main() {
  const [ingridients, setIngridients] = useState([]);
  const [receipe, setReceipe] = useState("");
  const recipeSection = useRef(null);
  const [isloading, setIsLoading] = useState(true);

  function handleSubmit(formData) {
    const newIngridient = formData.get("ingridient");
    setIngridients((prevIngridients) => [...prevIngridients, newIngridient]);
  }

  async function generateReciepe() {
    const generatedReciepe = await getReciepeFromMIstral(ingridients);
    console.log(generatedReciepe);
    setReceipe(generatedReciepe);
    setIsLoading(false);
  }

  useEffect(() => {
    if (receipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [receipe]);

  // function signUp(formData){
  //     const email = formData.get('email')
  //     const employmentStatus = formData.get('employment-status')
  //     const hobbies =formData.getAll("hobbies")
  //     const password = formData.get("password")
  //     const color = formData.get("colors")
  // OR
  //    const data = Object.formEntries(formData)
  // }

  return (
    <main>
      <form action={handleSubmit} className="add-ingridient-form">
        <input
          type="text"
          placeholder="e.g. orange"
          aria-label=" add-ingridient"
          name="ingridient"
        />
        <button onClick={handleSubmit}>Add ingridient</button>
      </form>

      {ingridients.length > 0 && (
        <section>
          <IngridientsList IngridientsList={ingridients} ref={recipeSection} />

          {ingridients.length > 3 && (
            <div className="get-reciepe-container">
              <div>
                <h3>Ready for a recipe?</h3>

                <p>Generate a reciepe from your list of ingridients.</p>
              </div>
              <div>
                <button className="generate-btn" onClick={generateReciepe}>
                  Get Recipe
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {receipe && <ClaudeReciepe recipe={receipe} isloading={isloading} />}

      {/* <form action={signUp}>
                <h6>Signup Form</h6>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" placeholder="thrw@gmail.com" name="email"/>

                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" name="password"/>
                    <br />

                    <br />
                    <input type="submit" />

                    <fieldset>

                        <legend>Employmet Status</legend>

                        <label htmlFor="employed">
                        <input type="radio" id="employed" name="employment-status" value='employed'/>
                        employed
                        </label>

                        <label htmlFor="part-time">
                            <input type="radio" name="employment-status" id="part-time" value="part-time" defaultChecked={true}/>
                            Part-Time
                        </label>

                    </fieldset>

                    <fieldset>
                        <legend>Hobbies</legend>

                        <label htmlFor="sports">
                            <input type="checkbox" id="sports" name="hobbies" value="sports"/>
                            Sports
                        </label>

                        <label htmlFor="reading">
                            <input type="checkbox" id="reading" name="hobbies" value='reading' />
                            Reading
                        </label>

                    </fieldset>

                    <fieldset>
                        <legend>Select Color</legend>
                        <select name="colors" required>
                            <option value="" disabled>-- Choose a color --</option>
                            <option value="red">Red</option>
                            <option value="gray">gray</option>
                            <option value="green">green</option>
                        </select>
                    </fieldset>
            </form> */}
    </main>
  );
}
