import './Statistics.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <p>Хорошо: {good}</p>
      <p>Нейтрально: {neutral}</p>
      <p>Плохо: {bad}</p>
      <p>Общее количество:{total} </p>
      <p>Процент хороших отзывов: {positivePercentage}%</p>
    </div>
  );
}
