import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

const Technology = (props) => {

  return (
    <div className="flex-1 mb-3">
      <FontAwesomeIcon className="mr-1" icon={faCheckCircle} /> 
      <span className="text-sm">
        {props.name}
      </span>
    </div>
  )

}

export default Technology;