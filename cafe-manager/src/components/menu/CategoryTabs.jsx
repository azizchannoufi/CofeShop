import '../../css/CategoryTabs.css';

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="category-tabs-container">
      <div className="category-tabs">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            style={{ '--index': index }}
            aria-current={activeCategory === category.id ? 'page' : undefined}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;