import React, { useState } from 'react';
import { BiCircle, BiCheckCircle } from 'react-icons/bi';

const testList = [
    ['처음 보는 친구들에게 나는?', '내가 먼저 말을 건낸다.', '대부분 다른 친구가 먼저 말을 건낸다.'],
    ['주말에 난?', '혼자 있는 게 싫지 않은 편이다.', '사람들과 만나는 것을 즐긴다.'],
    ['친구들과 놀 때 나는?', '소수의 친구들과 소소하게 대화하는 것을 좋아한다.', '왁자지껄한 신나는 분위기를 좋아한다.'],
    ['내가 더 중요하게 생각하는 것은?', '현재가 없으면 미래도 없다.', '미래를 생각하지 않으면 발전이 없다.'],
    ['일할 때 나는?', '남들이 하는 대로 따라가는 것이 좋다.', '스스로 나만의 방법을 만드는 게 좋다.'],
    ['주변 사람들이 나에게 하는 말은?', '창의적이고 독창적이라는 말을 자주한다.', '꾸준하고 참을성이 있다는 말을 자주한다.'],
    ['거절해야 하는 상황이 오면 나는?', '강력하게 할 수 없다고 말한다.', '고민하다가 대부분 들어주는 편이다.'],
    ['화났을 때 나는?', '할말이 많지만 너무 분해서 눈물부터 난다.', '논리적으로 잘 말하면서 따진다.'],
    ['고민을 얘기하는 친구, 듣다 보니 친구의 잘못인 것 같다. 그럴 때 나는?', '친구의 잘못된 점을 말해준다.', '쓰기 귀찮앙'],
    ['10번째 질문', '10번째 질문에 대한 첫번째 답', '10번째 질문에 대한 두번째 답'],
    ['11번째 질문', '11번째 질문에 대한 첫번째 답', '11번째 질문에 대한 두번째 답'],
    ['12번째 질문', '12번째 질문에 대한 첫번째 답', '12번째 질문에 대한 두번째 답']
];// 나중에 따로 뺄 예정

const AnswerList = ({ FIRST_ANSWER, SECOND_ANSWER, onClickAnswerHandler ,check, idx, value }) => {
    const {first, second} = check;

    return(
        <>
            <progress max={12} value={idx+1} />
            <span>Q{idx+1}. {value[0]}</span>
            <section>
                <button id={FIRST_ANSWER} onClick={e => onClickAnswerHandler(e)}>
                    { first ? <BiCheckCircle /> : <BiCircle /> }
                    {value[1]}
                </button>
                <button id={SECOND_ANSWER} onClick={e => onClickAnswerHandler(e)}>
                    { second ? <BiCheckCircle /> : <BiCircle /> }
                    {value[2]}
                </button>
            </section>
        </>
    )
};

function Test({history}) {
    const FIRST_ANSWER = 'firstAnswer';
    const SECOND_ANSWER = 'secondAnswer';
    const [check, setCheck] = useState({ first: false, second: false });
    const [idx, setIdx] = useState(0)

    const onClickAnswerHandler = (e) => {
        e.target.id === FIRST_ANSWER ?
            setCheck({...check, first: !check.first})
            :
            setCheck({...check, second: !check.second});
    };

    const onPassHandler = () => {
        setIdx(idx+1);
        setCheck({...check, first: false, second: false})
    };

    const onClickButtonHandler = () => {
        history.push('/result/ISTJ');
    };

    return (
        <article>
            <AnswerList
                FIRST_ANSWER={FIRST_ANSWER}
                SECOND_ANSWER={SECOND_ANSWER}
                onClickAnswerHandler={onClickAnswerHandler}
                check={check}
                idx={idx}
                value={testList[idx]}
            />
            {
                idx < 11 ?
                    <button onClick={onPassHandler}>다음 질문</button>
                    :
                    <button onClick={onClickButtonHandler}>결과보기</button>
            }
        </article>
    )
}

export default Test;

// Test page (/result, 결과페이지)

// TODO
// 로직 정하면 로직 적용하기, 함수 명 바꾸기