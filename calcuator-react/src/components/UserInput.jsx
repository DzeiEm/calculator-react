export default function UserInput({ onChangeInput, userInputValue }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInputValue.initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInputValue.annualInvestment}
            required
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            value={userInputValue.expectedReturn}
            required
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInputValue.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
            required
          ></input>
        </p>
      </div>
    </section>
  );
}
