import { useState } from 'react'
import { categories } from 'mock'
import { useHooks } from 'hooks'
import './style.scss'
import './mobile.scss'

const CategoryBtns = () => {
  const { get } = useHooks()
  const [selectedCategory, setSelectedCategory] = useState({
    id: 1,
    title: "Antioksidantlar"
  },)
  return (
    <div className="catalog-categories">
      {categories.map((category) => (
        <button  className={get(selectedCategory, "id") == get(category, "id") ? 'selectedCategory category-btn' : 'category-btn'} onClick={() => setSelectedCategory(category)} key={get(category, "id")}>
          {get(category, "title")}
        </button>
      ))}
    </div>
  )
}

export default CategoryBtns