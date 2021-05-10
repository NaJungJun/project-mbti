import React from "react";

const AnswerBox = ({ FIRST_ANSWER, SECOND_ANSWER, idx, value, onClickListHandler }) => {
    return(
        <>
            <span>Q{idx+1}. {value[0]}</span>
            <section>
                <button id={FIRST_ANSWER} onClick={ e => onClickListHandler(e) } className={'btn_test'}>
                    {value[1]}
                </button>
                <button id={SECOND_ANSWER} onClick={ e => onClickListHandler(e) } className={'btn_test'}>
                    {value[2]}
                </button>
            </section>
        </>
    )
};

export default AnswerBox;

// Test page 의 컴포넌트
// 질문, 선택지로 구성됨