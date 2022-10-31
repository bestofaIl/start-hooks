import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setotherState] = useState(false);
    const toggleOtherState = () => {
        setotherState(!otherState);
    };
    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider></Divider>
            <p>renderCount: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>Click</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
