const FilterBox = ({ selectedCategories, setSelectedCategories, selectedLevels, setSelectedLevels }) => {
  const categoryOptions = [
  { id: 'Languages', label: 'Languages', icon: '🔠' },
  { id: 'Programming', label: 'Programming', icon: '💻' },
  { id: 'Sports', label: 'Sports', icon: '🏏' },
  { id: 'Music', label: 'Music', icon: '🎵' },
  { id: 'Art', label: 'Art', icon: '🎨' },
  { id: 'Drawing', label: 'Drawing', icon: '📐' },
];


  const levelOptions = [
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
  ];

  const handleCategoryChange = (id) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  const handleLevelChange = (id) => {
    if (selectedLevels.includes(id)) {
      setSelectedLevels(selectedLevels.filter(level => level !== id));
    } else {
      setSelectedLevels([...selectedLevels, id]);
    }
  };

  return (
    <div className="mt-6 ml-2 space-y-4">
      {categoryOptions.map(option => (
        <div key={option.id} className="flex items-center">
          <input
            type="checkbox"
            id={option.id}
            checked={selectedCategories.includes(option.id)}
            onChange={() => handleCategoryChange(option.id)}
            className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor={option.id} className="ml-2 text-lg font-medium text-white flex items-center gap-3">
            <span>{option.icon}</span> {option.label}
          </label>
        </div>
      ))}

      <div className="pt-6 flex justify-start ml-[-8px] ">
        <span className="text-lg">Levels</span>
      </div>

      {levelOptions.map(level => (
        <div key={level.id} className="flex items-center">
          <input
            type="checkbox"
            id={level.id}
            checked={selectedLevels.includes(level.id)}
            onChange={() => handleLevelChange(level.id)}
            className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor={level.id} className="ml-2 text-lg font-medium text-white">
            {level.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterBox;
