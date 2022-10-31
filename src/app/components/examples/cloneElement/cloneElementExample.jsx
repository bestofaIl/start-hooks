import React from "react";
import CardWrapper from "../../common/Card";

import SmallTitle from "../../common/typografy/smallTitle";
import TextField from "../../common/form/textField";
const CloneElementExample = () => {
    const field = <TextField label="email" name="email" />;
    const handleChange = ({ value }) => {
        console.log("change: ", value);
    };
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {field}
            {React.cloneElement(field, { onChange: handleChange, label: "ClonedEmail" }) }
        </CardWrapper>
    );
};

export default CloneElementExample;
