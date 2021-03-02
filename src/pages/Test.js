import React, { useState } from 'react';

import AnswerBox from '../components/AnswerBox';
import { FIRST_ANSWER, SECOND_ANSWER, TEST_LIST } from "../utils/plainText";
import '../styles/Test.scss';

function Test({history}) {
    const [idx, setIdx] = useState(0)
    const [check, setCheck] = useState({ first: false, second: false });

    const gatherAnswer = ( idx, first ) => {
        // 선택지 고른거 모으는
    };
    const resultHandler = () => {
        history.push('/result/ISTJ');
    };
    const onClickAnswerHandler = (e) => {
        e.target.id === FIRST_ANSWER ?
            setCheck({...check, first: !check.first, second: false})
            :
            setCheck({...check, first: false, second: !check.second});

        gatherAnswer( idx, check.first );

        if ( idx !== TEST_LIST.length - 1 ) {
            setIdx(idx+1);
            setCheck({...check, first: false, second: false})
        }else{
            resultHandler();
        }
    };

    return (
        <article className={'test'}>
            <progress max={TEST_LIST.length} value={idx+1} />
            <AnswerBox
                FIRST_ANSWER={FIRST_ANSWER}
                SECOND_ANSWER={SECOND_ANSWER}
                onClickAnswerHandler={onClickAnswerHandler}
                check={check}
                idx={idx}
                value={TEST_LIST[idx]}
            />
        </article>
    )
}

export default Test;

// Test page (/result, 결과페이지)

// TODO
// 로직 정하면 로직 적용하기