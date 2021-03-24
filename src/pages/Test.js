import React, { useState , useEffect} from 'react';

import AnswerBox from '../components/AnswerBox';
import { FIRST_ANSWER, SECOND_ANSWER, TEST_LIST } from '../utils/plainText';
import '../styles/Test.scss';
import MainWrapper from '../common/MainWrapper';

function Test({history}) {
    const [idx, setIdx] = useState(0);
    const [answer, setAnswer] = useState('');
    const [animation, setAnimation] = useState('fadeIn_animation')
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(show => !show)
        if( answer.length === 12 ){
            let type='';
            const uniqueAnswer = getUniques(answer);
            uniqueAnswer.forEach(item => {
                let regexAllItem = new RegExp(item, 'g');
                let singleTypeLength = answer.match(regexAllItem).length;
                if(singleTypeLength >= 2) { type = type.concat(item); }
            });
            history.push({pathname : '/result', state: { type }});
        }
        return () => {
            // setAnimation('fadeOut_animation');
        }
    }, [ history, answer ]);

    const getUniques = array => {
        return [...new Set(array)];
    }; // 중복 제거 함수, 배열로 리턴

    const makeSingleType = ( index, listName ) => {
        let singleType;
        const isFirstAnswer = ( listName === FIRST_ANSWER );
        if( idx >= 0 && idx <= 2 ){
            isFirstAnswer ? singleType = 'E' : singleType = 'I';
        }else if( idx <= 5 ){
            isFirstAnswer ? singleType = 'S' : singleType = 'N';
        }else if( idx <= 8 ){
            isFirstAnswer ? singleType = 'T' : singleType = 'F';
        }else{
            isFirstAnswer ? singleType = 'J' : singleType = 'P';
        }
        return singleType;
    }; // 선택지에 따라 싱글타입을 결정해주는 함

    const onClickListHandler = e => {
        const listName = e.target.id;
        const isLastIdx = ( idx === TEST_LIST.length - 1 );
        const singleType = makeSingleType( idx, listName );

        setIdx(prevIdx => isLastIdx ? prevIdx : prevIdx + 1 );
        setAnswer(prevAnswer => prevAnswer.concat( singleType ));
        setShow(show => !show);
    };

    return (
        show &&
        <MainWrapper className="main-wrapper">
        <article className={ `test ${animation}` }>
            <progress max={ TEST_LIST.length } value={ idx+1 } />
            <AnswerBox
                FIRST_ANSWER={ FIRST_ANSWER }
                SECOND_ANSWER={ SECOND_ANSWER }
                onClickListHandler={ onClickListHandler }
                idx={ idx }
                value={ TEST_LIST[idx] }
            />
        </article>
        </MainWrapper>
    )
}

export default Test;

// Test page (/result, 결과페이지)
/* 테스트 로직
<요약 : 선택지를 통해 각각의 타입을 정하고 마지막에 많이 선택한 타입을 골라 페이지 이동시에 파라미터로 넘겨준다. >
(E - I) : 0 ~ 2, (S - N) : 3 ~ 5, (T - F) : 6 ~ 8, (J - P) : 9 ~ 11
각각의 singleType 을 answer 에 저장 -> 저장된 singleType 이 12(=문항수)가 되면
-> 저장된 answer 를 getUniques() 를 통해 중복 제거하여 uniqueAnswer 에 저장
-> uniqueAnswer 값이 answer 안에 각각 몇 개 있는지 산출
-> 갯수가 2개 이상이라면 type 에 concat()
-> result 페이지로 type 값 넘겨주며 페이지 이동
*/