export default function TextCircly() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        id="circlePath"
        d="
M 10, 50
a 40,40 0 1,1 80,0
40,40 0 1,1 -80,0
"
      />
      <text>
        <textPath href="#circlePath">натуральный компонент!</textPath>
      </text>
    </svg>
  );
}
