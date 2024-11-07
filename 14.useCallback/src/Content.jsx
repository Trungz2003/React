import { memo } from "react";
/* eslint react/prop-types: "off" */
// Định nghĩa component bình thường
const Content = ({ onIncrease }) => {
    console.log('alo');
    
    return (
        <div>
            <p>hello anh em</p>
            <button onClick={onIncrease}>Click</button>
        </div>
    );
};

// Dùng named export và bọc component trong memo
export const MemoizedContent = memo(Content);
