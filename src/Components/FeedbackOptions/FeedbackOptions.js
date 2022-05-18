import './FeedbackOptions.css';

export default function FeedbackOptions({ options }) {
  return (
    <div>
      <button type="button" name="good" onClick={options}>
        Хорошо
      </button>

      <button type="button" name="neutral" onClick={options}>
        Нейтрально
      </button>

      <button type="button" name="bad" onClick={options}>
        Плохо
      </button>
    </div>
  );
}
