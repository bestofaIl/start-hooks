import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setotherState] = useState("false");
    const toggleOtherState = () => {
        setotherState(prevState => prevState === "false" ? "true" : "false");
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider></Divider>
            <p>prevState: {prevState.current}</p>
            <p>currentState: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>Click</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
