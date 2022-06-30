import React from "react";
import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  useranswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  useranswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    QuestionCard
    <p className="number">
      Question: {questionNr}/{totalQuestions}{" "}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((ans) => (
        <div key={ans}>
          {/* //!!를 앞에 쓰면 다른 타입을 boolean으로 전환 시켜줌 */}
          <button disabled={!!useranswer} value={ans} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: ans }} />{" "}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
