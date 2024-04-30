import { WhiteLimon } from 'assets/images/icons'


const Loading = ({style}:any) => {

  return (
    <div className="loader_wrapper" style={style}>
      <div className="loader">
        <WhiteLimon/>
      </div>
    </div>
  )
}

export default Loading