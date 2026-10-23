import Technology from '../components/Technology';

const technologies = [
  'JavaScript', 'Node.js', 'React', 'Next.js', 'RESTful APIs',
  'MongoDB', 'DynamoDB', 'AWS Lambda', 'AWS EC2', 'AWS S3',
  'AWS SQS', 'Express.js', 'Shell Scripting', 'Elasticsearch', 'Stripe',
  'HTML5 & CSS3', 'TailwindCSS', 'Figma', 'Photoshop', 'Angular',
];

const Stack = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
      {technologies.map(name => <Technology name={name} key={name} />)}
    </div>
  )
}

export default Stack;
