// Интерфейс для одного элемента статистики
export interface Statistic {
    icon: string; // Путь к иконке
    alt: string; // Текст для атрибута alt
    number: string; // Числовое значение (например, "50k+")
    description: string; // Описание (например, "Meals Delivered")
  }
  
  // Интерфейс для пропсов компонента
  export interface StatisticsProps {
    statistics?: Statistic[]; // Массив данных для отображения статистики
  }