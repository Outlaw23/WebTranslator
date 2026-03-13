import { useState } from "react";
import { translateFromHado } from "../../utils/hadoTranslator";
import "./HadoR.css";

function Hado() {

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const translate = () => {
        const result = translateFromHado(input);
        setOutput(result);
    };



    return (
        <div className="hado-container">
            <h1>HadoR</h1>

            <button className="translate-btn" onClick={translate}>
                Translate to normal
            </button>

            <textarea
                className="input-box"
                placeholder="Type text..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <textarea
                className="output-box"
                value={output}
                readOnly
            />

        </div>
    );
}

export default Hado;