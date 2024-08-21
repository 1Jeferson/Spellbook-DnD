import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTimes, FaBars, FaSearch, FaStar, FaBookOpen } from 'react-icons/fa';
import './style.css';

const Filters = ({ searchSpell, handleSearchChange, handleLevelChange, handleSchoolChange }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <div className="filters-container">
            {!isModalOpen && (
                <button onClick={toggleModal} className="menu-toggle">
                    <FaBars />
                </button>
            )}

            <div className="filters-desktop">
                <label>
                    <span><FaSearch /> Search:</span>
                    <input
                        type="text"
                        placeholder="Search spells..."
                        value={searchSpell}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                </label>

                <label>
                    <span><FaStar /> Level:</span>
                    <select onChange={handleLevelChange}>
                        <option value="all">All Levels</option>
                        {[...Array(9).keys()].map(i => (
                            <option key={i} value={i + 1}>
                                Level {i + 1}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    <span><FaBookOpen /> School:</span>
                    <select onChange={handleSchoolChange}>
                        <option value="all">All Schools</option>
                        {['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation'].map(school => (
                            <option key={school} value={school}>
                                {school}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            {isModalOpen && (
                <div className="filters-modal">
                    <div className="filters-modal-content">
                        <button onClick={toggleModal} className="modal-close">
                            <FaTimes />
                        </button>
                        <label>
                            <span><FaSearch /> Search:</span>
                            <input
                                type="text"
                                placeholder="Search spells..."
                                value={searchSpell}
                                onChange={handleSearchChange}
                                className="search-input"
                            />
                        </label>

                        <label>
                            <span><FaStar /> Level:</span>
                            <select onChange={handleLevelChange}>
                                <option value="all">All Levels</option>
                                {[...Array(9).keys()].map(i => (
                                    <option key={i} value={i + 1}>
                                        Level {i + 1}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label>
                            <span><FaBookOpen /> School:</span>
                            <select onChange={handleSchoolChange}>
                                <option value="all">All Schools</option>
                                {['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation'].map(school => (
                                    <option key={school} value={school}>
                                        {school}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>
            )}
        </div>
    );
};

Filters.propTypes = {
    searchSpell: PropTypes.string.isRequired,
    handleSearchChange: PropTypes.func.isRequired,
    handleLevelChange: PropTypes.func.isRequired,
    handleSchoolChange: PropTypes.func.isRequired,
};

export default Filters;
