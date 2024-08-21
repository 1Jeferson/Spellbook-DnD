import { useEffect, useState } from "react";
import { FaArrowLeft, FaBolt, FaBookOpen, FaClock, FaCloud, FaCogs, FaDiceD20, FaDragon, FaFire, FaRuler, FaSkull, FaSnowflake, FaStar } from 'react-icons/fa';
import { useNavigate, useParams } from "react-router-dom";
import { fetchSpellDetails } from '../../services/apiService';
import './style.css';

const SpellDetails = () => {
    const { index } = useParams();
    const [spell, setSpell] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getSpellDetails = async () => {
            try {
                const data = await fetchSpellDetails(index);
                setSpell(data);
            } catch (error) {
                console.error("Failed to fetch spell details:", error);
            }
        };
        getSpellDetails();
    }, [index]);

    if (!spell) {
        return null;
    }

    return (
        <div className="spell-details-container">
            <button onClick={() => navigate(-1)} className="back-button">
                <FaArrowLeft size={24} />
            </button>
            <h2>{spell.name}</h2>
            <div className="spell-detail-section">
                <p><FaStar /> <strong>Level:</strong> {spell.level}</p>
                <p><FaBookOpen /> <strong>School:</strong> {spell.school.name}</p>
                <p><FaRuler /> <strong>Range:</strong> {spell.range}</p>
                <p><FaCogs /> <strong>Components:</strong> {spell.components.join(', ')}</p>
                {spell.material && (
                    <p><FaCogs />{spell.material}</p>
                )}
                <p><FaClock /> <strong>Duration:</strong> {spell.duration}</p>
                <p><FaClock /> <strong>Casting Time:</strong> {spell.casting_time}</p>
                {spell.concentration && (
                    <p><FaClock /> <strong>Concentration:</strong> Yes</p>
                )}
                {spell.ritual && (
                    <p><FaClock /> <strong>Ritual:</strong> Yes</p>
                )}
            </div>

            <div className="spell-detail-section">
                <p>{spell.desc.join(' ')}</p>
                {spell.higher_level && (
                    <p>{spell.higher_level.join(' ')}</p>
                )}
            </div>

            {spell.damage && spell.damage.damage_at_slot_level && (
                <div className="spell-detail-section">
                    <p><FaDiceD20 /> <strong>Damage at Slot Level:</strong></p>
                    <ul>
                        {Object.keys(spell.damage.damage_at_slot_level).map((level) => (
                            <li key={level}>
                                Level {level}: {spell.damage.damage_at_slot_level[level]}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {spell.damage && (
                <div className="spell-detail-section">
                    <p><FaSkull /> <strong>Damage Type:</strong> {spell.damage.damage_type.name}</p>
                </div>
            )}

            {spell.classes && spell.classes.length > 0 && (
                <div className="spell-detail-section">
                    <p><FaDragon /> <strong>Classes:</strong></p>
                    <ul>
                        {spell.classes.map((cls) => (
                            <li key={cls.index}>{cls.name}</li>
                        ))}
                    </ul>
                </div>
            )}

            {spell.subclasses && spell.subclasses.length > 0 && (
                <div className="spell-detail-section">
                    <p><FaDragon /> <strong>Subclasses:</strong></p>
                    <ul>
                        {spell.subclasses.map((subcls) => (
                            <li key={subcls.index}>{subcls.name}</li>
                        ))}
                    </ul>
                </div>
            )}

            {spell.damage && spell.damage.damage_type.name === 'Fire' && (
                <div className="spell-detail-section">
                    <p><FaFire /> <strong>Fire Damage:</strong> {spell.damage.damage_type.name}</p>
                </div>
            )}
            {spell.damage && spell.damage.damage_type.name === 'Cold' && (
                <div className="spell-detail-section">
                    <p><FaSnowflake /> <strong>Cold Damage:</strong> {spell.damage.damage_type.name}</p>
                </div>
            )}
            {spell.damage && spell.damage.damage_type.name === 'Lightning' && (
                <div className="spell-detail-section">
                    <p><FaBolt /> <strong>Lightning Damage:</strong> {spell.damage.damage_type.name}</p>
                </div>
            )}
            {spell.damage && spell.damage.damage_type.name === 'Thunder' && (
                <div className="spell-detail-section">
                    <p><FaCloud /> <strong>Thunder Damage:</strong> {spell.damage.damage_type.name}</p>
                </div>
            )}
        </div>
    );
}

export default SpellDetails;
