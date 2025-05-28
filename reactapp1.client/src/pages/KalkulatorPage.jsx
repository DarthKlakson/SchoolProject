import React, { useState } from 'react';
import './KalkulatorPageStyles.css';

const productsData = [
    { name: 'Pierś z kurczaka', caloriesPer100g: 165 },
    { name: 'Pierś z indyka', caloriesPer100g: 135 },
    { name: 'Chuda wołowina', caloriesPer100g: 250 },
    { name: 'Schab', caloriesPer100g: 242 },
    { name: 'Łosoś', caloriesPer100g: 208 },
    { name: 'Tuńczyk', caloriesPer100g: 132 },
    { name: 'Dorsz', caloriesPer100g: 82 },
    { name: 'Krewetki', caloriesPer100g: 99 },
    { name: 'Jajka całe', caloriesPer100g: 155 },
    { name: 'Białko jaja', caloriesPer100g: 52 },
    { name: 'Mleko pełne', caloriesPer100g: 60 },
    { name: 'Mleko odtłuszczone', caloriesPer100g: 35 },
    { name: 'Jogurt naturalny', caloriesPer100g: 59 },
    { name: 'Jogurt grecki', caloriesPer100g: 97 },
    { name: 'Masło', caloriesPer100g: 717 },
    { name: 'Oliwa z oliwek', caloriesPer100g: 884 },
    { name: 'Olej słonecznikowy', caloriesPer100g: 884 },
    { name: 'Migdały', caloriesPer100g: 579 },
    { name: 'Orzechy włoskie', caloriesPer100g: 654 },
    { name: 'Orzeszki ziemne', caloriesPer100g: 567 },
    { name: 'Ryż biały gotowany', caloriesPer100g: 130 },
    { name: 'Ryż brązowy gotowany', caloriesPer100g: 111 },
    { name: 'Makaron gotowany', caloriesPer100g: 131 },
    { name: 'Chleb biały', caloriesPer100g: 265 },
    { name: 'Chleb pełnoziarnisty', caloriesPer100g: 247 },
    { name: 'Płatki owsiane surowe', caloriesPer100g: 389 },
    { name: 'Ziemniaki gotowane', caloriesPer100g: 87 },
    { name: 'Słodki ziemniak', caloriesPer100g: 86 },
    { name: 'Marchew', caloriesPer100g: 41 },
    { name: 'Brokuły', caloriesPer100g: 55 },
    { name: 'Szpinak', caloriesPer100g: 23 },
    { name: 'Jarmuż', caloriesPer100g: 35 },
    { name: 'Pomidor', caloriesPer100g: 18 },
    { name: 'Ogórek', caloriesPer100g: 16 },
    { name: 'Cebula', caloriesPer100g: 40 },
    { name: 'Czosnek', caloriesPer100g: 149 },
    { name: 'Jabłko', caloriesPer100g: 52 },
    { name: 'Banan', caloriesPer100g: 89 },
    { name: 'Pomarańcza', caloriesPer100g: 47 },
    { name: 'Truskawki', caloriesPer100g: 32 },
    { name: 'Jagody', caloriesPer100g: 57 },
    { name: 'Winogrona', caloriesPer100g: 69 },
    { name: 'Awokado', caloriesPer100g: 160 },
    { name: 'Tofu', caloriesPer100g: 76 },
    { name: 'Ciecierzyca gotowana', caloriesPer100g: 164 },
    { name: 'Soczewica gotowana', caloriesPer100g: 116 },
    { name: 'Fasola czarna gotowana', caloriesPer100g: 132 },
    { name: 'Kukurydza gotowana', caloriesPer100g: 96 },
    { name: 'Groszek gotowany', caloriesPer100g: 81 },
    { name: 'Ciemna czekolada (70% kakao)', caloriesPer100g: 546 }
];

const weightOptions = [25, 50, 100, 500];

const productOptions = productsData.flatMap(product =>
    weightOptions.map(weight => {
        const cals = Math.round(product.caloriesPer100g * weight / 100);
        return {
            id: `${product.name}-${weight}`,
            name: product.name,
            weight,
            calories: cals,
            label: `${product.name} – ${weight} g (${cals} kcal)`
        };
    })
);

export const Kalkulator = () => {
    const [selectedOption, setSelectedOption] = useState(productOptions[0]?.id || '');
    const [selectedItems, setSelectedItems] = useState([]);

    const handleAdd = () => {
        const item = productOptions.find(opt => opt.id === selectedOption);
        if (item) setSelectedItems(prev => [...prev, item]);
    };

    const handleRemove = idx =>
        setSelectedItems(prev => prev.filter((_, i) => i !== idx));

    const totalCalories = selectedItems.reduce((sum, i) => sum + i.calories, 0);

    return (
        <div className="calculator-page">
            <h2>Kalkulator kalorii</h2>

            <div className="calculator-inputs">
                <select
                    value={selectedOption}
                    onChange={e => setSelectedOption(e.target.value)}
                >
                    {productOptions.map(opt => (
                        <option key={opt.id} value={opt.id}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                <button className="add-button" onClick={handleAdd}>+</button>
            </div>

            <table className="calculator-table">
                <thead>
                    <tr>
                        <th>Produkt</th>
                        <th>Ilość (g)</th>
                        <th>Kalorie</th>
                        <th>Usuń</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedItems.map((item, i) => (
                        <tr key={`${item.id}-${i}`}>
                            <td>{item.name}</td>
                            <td>{item.weight}</td>
                            <td>{item.calories}</td>
                            <td>
                                <button
                                    className="remove-button"
                                    onClick={() => handleRemove(i)}
                                >
                                    ×
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="total-calories">Łącznie: {totalCalories} kcal</div>
        </div>
    );
};
