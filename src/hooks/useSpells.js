import { useState, useEffect } from "react";
import { fetchSpells } from "../services/apiService";

const useSpells = () => {
    const [spells, setSpells] = useState([]);
    const [searchSpell, setSearchSpell] = useState('');
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [selectedSchools, setSelectedSchools] = useState([]);

    useEffect(() => {
        const getSpells = async () => {
            try {
                const spellsData = await fetchSpells(selectedLevels, selectedSchools);
                setSpells(spellsData);
            } catch (error) {
                console.error('Failed to get spells:', error);
            }
        };
        getSpells();
    }, [selectedLevels, selectedSchools]);

    const handleSearchChange = (e) => {
        setSearchSpell(e.target.value);
    };

    const handleLevelChange = (e) => {
        const options = [...e.target.options];
        const selected = options
            .filter(option => option.selected)
            .map(option => option.value);

        setSelectedLevels(selected.includes('all') ? [] : selected);
    };

    const handleSchoolChange = (e) => {
        const options = [...e.target.options];
        const selected = options
            .filter(option => option.selected)
            .map(option => option.value);

        setSelectedSchools(selected.includes('all') ? [] : selected);
    };

    const filteredSpells = spells.filter(spell =>
        spell.name.toLowerCase().includes(searchSpell.toLowerCase())
    );

    return {
        searchSpell,
        filteredSpells,
        handleSearchChange,
        handleLevelChange,
        handleSchoolChange
    };
};

export default useSpells;
