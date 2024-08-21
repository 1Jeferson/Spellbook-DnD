export const fetchSpells = async (levels = [], schools = []) => {
    try {
        const queryParams = new URLSearchParams();
        if (levels.length > 0) {
            queryParams.append('level', levels.join(','));
        }
        if (schools.length > 0) {
            queryParams.append('school', schools.join(','));
        }
        const url = `https://www.dnd5eapi.co/api/spells?${queryParams.toString()}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Failed to fetch spells:', error);
    }
};

export const fetchSpellDetails = async (index) => {
    try {
        const response = await fetch(`https://www.dnd5eapi.co/api/spells/${index}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch spell details:', error);
        throw error;
    }
};