const items = [
  'TypeScript', 'React', 'AWS Lambda', 'Node.js', 'Terraform',
  'Docker', 'GraphQL', 'DynamoDB', 'Next.js', 'Serverless',
  'TypeScript', 'React', 'AWS Lambda', 'Node.js', 'Terraform',
  'Docker', 'GraphQL', 'DynamoDB', 'Next.js', 'Serverless',
];

export function Marquee() {
  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            <span>✦</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}
