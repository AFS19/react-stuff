import './style.css';
import MarkdownHeader from "./MarkdownHeader.jsx";
import MarkdownFooter from "./MarkdownFooter.jsx";
import MarkdownMain from "./MarkdownMain.jsx";

function Mardown() {
    return (
        <>
            <MarkdownHeader />

            <MarkdownMain />

            <MarkdownFooter />
        </>
    );
}

export default Mardown;