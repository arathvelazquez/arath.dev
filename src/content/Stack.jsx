import Technology from '../components/Technology';

const Stack = () => {
  return (
    <div>
      <div className="inline md:hidden">
        <div className="flex">
          <Technology name="Javascript" />
          <Technology name="Node.js" />
          <Technology name="React" />
        </div>
        <div className="flex">
          <Technology name="RESTful APIs" />
          <Technology name="MongoDB" />
          <Technology name="AWS Lambda" />
        </div>
        <div className="flex">
          <Technology name="AWS EC2" />
          <Technology name="Express.js" />
          <Technology name="Shell Scripting" />
        </div>
        <div className="flex">
          <Technology name="Elastic Search" />
          <Technology name="HTML5 & CSS3" />
          <Technology name="TailwindCSS" />
        </div>
        <div className="flex">
          <Technology name="Figma" />
          <Technology name="Photoshop" />
          <Technology name="Angular" />
        </div>
      </div>

      <div className="hidden md:inline">
        <div className="flex">
          <Technology name="Javascript" />
          <Technology name="Node.js" />
          <Technology name="React" />
          <Technology name="RESTful APIs" />
          <Technology name="MongoDB" />
        </div>
        <div className="flex">
          <Technology name="AWS Lambda" />
          <Technology name="AWS EC2" />
          <Technology name="Express.js" />
          <Technology name="Shell Scripting" />
          <Technology name="Elastic Search" />
        </div>
        <div className="flex">
          <Technology name="HTML5 & CSS3" />
          <Technology name="TailwindCSS" />
          <Technology name="Figma" />
          <Technology name="Photoshop" />
          <Technology name="Angular" />
        </div>
      </div>
    </div>
  )
}

export default Stack;