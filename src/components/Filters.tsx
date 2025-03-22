export default function Filters() {
  return (
    <div className="bg-black p-4 rounded-lg shadow-md mb-4">
      {/* Фильтр по категории */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-left">Категория</h3>
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white">Все</button>
          <button className="px-4 py-2 rounded-lg bg-gray-200">Мужская одежда</button>
          <button className="px-4 py-2 rounded-lg bg-gray-200">Женская одежда</button>
          <button className="px-4 py-2 rounded-lg bg-gray-200">Электроника</button>
          <button className="px-4 py-2 rounded-lg bg-gray-200">Украшения</button>
        </div>
      </div>

      {/* Фильтр по цене */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-left">Цена</h3>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="От"
            className="w-20 px-3 py-2 border rounded-lg text-gray-700"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="До"
            className="w-20 px-3 py-2 border rounded-lg text-gray-700"
          />
        </div>
      </div>

      {/* Фильтр по рейтингу */}
      <div>
        <h3 className="font-semibold mb-2 text-left">Рейтинг</h3>
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded-lg bg-gray-200">4★ и выше</button>
          <button className="px-4 py-2 rounded-lg bg-gray-200">3★ и выше</button>
          <button className="px-4 py-2 rounded-lg bg-gray-200">2★ и выше</button>
        </div>
      </div>
    </div>
  );
}