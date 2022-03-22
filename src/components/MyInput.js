import { forwardRef } from "react";

const MyInternalInput = forwardRef((props, ref) => {
    return <input ref={ref} className="input is-primary"/>
});

const MyInput = forwardRef((props, ref) => {
    return (
        <MyInternalInput ref={ref} />
    );
});

export default MyInput;