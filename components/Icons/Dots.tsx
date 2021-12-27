const DotsIcon = (props: any) => (
  <svg
    strokeWidth={0}
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={5} cy={12} r={2} />
    <circle cx={12} cy={12} r={2} />
    <circle cx={19} cy={12} r={2} />
  </svg>
);

export default DotsIcon;
