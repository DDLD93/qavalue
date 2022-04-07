import Button from "./component/Button";
import Main from "./component/Layout";
import Card from "./component/Card";
import Question from "./component/Card/Question";
import { questions } from "./Question";
import { SetStateAction, useState } from "react";
import Summary from "./component/Card/Summary";

function App() {
  const [page, setpage] = useState(0);
  const [done, setdone] = useState(false)
  const [summary, setSummary] = useState([] as any)
  const [responseValue, setresponseValue] = useState('')
  const { question, responseType, label } = questions[page];

const Next =()=>{
  //console.log("page >>>> ",page,"  length>>>> ", questions.length)
  let summaryObj :any = {
    quest: question,
    ans: responseValue
  }
  summary.push(summaryObj)
  console.log("Respone>>>>>>> ", responseValue)
  setpage(prevCount => page != questions.length-1 ? prevCount+1:0)
  if(page === questions.length-1){
     setdone(true)
  }
}
 

  return (
    <Main>
      <Card>
        {done ? (<>
        {summary.map((e: any) =>(
          <Summary
          question={e.quest}
          answer={e.ans}
          />
        ))}
        </>):(
          <Question
            Question={question}
            responseType={responseType}
            label={label}
            targetValue={(e: { target: { value: SetStateAction<string>; }; })=>setresponseValue(e.target.value)}
          />

        )}
        <Button click={done?()=>{setdone(false);setpage(0);setSummary([])}:Next}>
          {done?"Restart":"Next"}
        </Button>
      </Card>
    </Main>
  );
}

export default App;
