import './Info.css'

function Info() {
    return (
        <div className="info-wrapper">
            <div className="info-card">

                <h1>🕷 Hado</h1>

                <p>
                    Welcome to Hado! This language replaces letters using a fixed system.
                    There are no grammar rules — Hado is playful and experimental.
                    Use it to explore patterns, translate words, and learn creatively.
                </p>

                <h2>Letter mappings:</h2>

                <div className="mapping-grid">
                    <span>B → H</span>
                    <span>C → J</span>
                    <span>D → K</span>
                    <span>F → L</span>
                    <span>G → M</span>

                    <span>H → N</span>
                    <span>J → P</span>
                    <span>K → Q</span>
                    <span>L → R</span>
                    <span>M → S</span>

                    <span>N → Z</span>
                    <span>P → T</span>
                    <span>Q → V</span>
                    <span>R → W</span>
                    <span>S → Y</span>

                    <span>Z → B</span>
                    <span>T → X</span>
                    <span>V → D</span>
                    <span>W → F</span>
                    <span>Y → G</span>

                    <span>X → C</span>
                </div>

                <p>
                    Every task in this program gives you the chance to practice Hado!
                    Try translating words and see how the letters shift.
                </p>

            </div>
        </div>
    );
}

export default Info;