import './style.css'

const Skeleton = (props) => {
  const {
    className = '',
    width,
    height,
    radius,
    marginBottom
  } = props

  const style = {
    width,
    height,
    borderRadius: radius,
    marginBottom
  }

  return (
    <div style={style} className={`skeleton ${className}`}></div>
  )
}

export default Skeleton;