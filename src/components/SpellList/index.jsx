import { Link } from "react-router-dom";
import useSpells from "../../hooks/useSpells";
import Filters from "../Filters";
import './style.css';

const SpellList = () => {
    const {
        searchSpell,
        filteredSpells,
        handleSearchChange,
        handleLevelChange,
        handleSchoolChange
    } = useSpells();

    return (
        <div className="spell-list-container">
            <h1>
                <span className="highlight">D&D</span> Spells
            </h1>

            <Filters
                searchSpell={searchSpell}
                handleSearchChange={handleSearchChange}
                handleLevelChange={handleLevelChange}
                handleSchoolChange={handleSchoolChange}
            />

            <div className="spell-list">
                {filteredSpells.map(spell => (
                    <Link to={`/spell/${spell.index}`} key={spell.index} className="spell-item">
                        {spell.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SpellList;
