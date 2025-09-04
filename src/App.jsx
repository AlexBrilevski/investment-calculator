import { useState } from 'react';
import { calculateInvestmentResults } from './util/investment';
import Header from './components/Header';
import InputGroup from './components/InputGroup';
import InvestmentResults from './components/InvestmentResults';

const INITIAL_USER_INPUT = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);
  const investmentResults = calculateInvestmentResults(userInput);

  function handleUserInput(fieldId, newValue) {
    setUserInput(prevUserInput => {
      const updatedUserInput = { ...prevUserInput, [fieldId]: Number(newValue) };

      return updatedUserInput;
    });
  }

  return (
    <>
      <Header />
      <main>
        <div id="user-input" className="input-group">
          <InputGroup
            fieldId='initialInvestment'
            userInput={userInput.initialInvestment}
            handleChange={handleUserInput}
            label='Initial Investment'
            type='number'
          />
          <InputGroup
            fieldId='annualInvestment'
            userInput={userInput.annualInvestment}
            handleChange={handleUserInput}
            label='Annual Investment'
            type='number'
          />
          <InputGroup
            fieldId='expectedReturn'
            userInput={userInput.expectedReturn}
            handleChange={handleUserInput}
            label='Expected Return'
            type='number'
          />
          <InputGroup
            fieldId='duration'
            userInput={userInput.duration}
            handleChange={handleUserInput}
            label='Duration'
            type='number'
          />
        </div>
        {investmentResults.length > 0 && <InvestmentResults results={investmentResults} />}
      </main>
    </>
  )
}

export default App;
