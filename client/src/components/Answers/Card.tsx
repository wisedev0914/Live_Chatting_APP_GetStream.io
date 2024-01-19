import Icons from "../icons"

const Card = ({ showFav, setMainScreen, showScreen, setshowScreen, interview, handleFilteration, setSelectedInterview }: { showFav?: boolean, setMainScreen: any, showScreen: number, setshowScreen: any, interview: any, handleFilteration: any, setSelectedInterview: any }) => {

  return <div onClick={() => {
    setSelectedInterview(interview);
  }} className="candidateCard" style={{ height: 226, width: 120 }}>
    <video style={{ position: 'relative', borderRadius: 10, background: 'rgba(0,0,0,0.6)' }} width={116} height={211}
      src={interview.videoLink}
    />
    <div className="cardInfoDiv" style={{ padding: '0px 5px 0px 7px' }}>
      <h4>{interview?.interviewee?.name}</h4>
      <h5>
        <Icons iconNumber={32} />
        {interview?.interviewee?.location}
      </h5>
    </div>
    {interview?.favourite ? (
      <div className='odjfks-amds' style={{ top: '2.5px', right: '2.5px' }}>
        <Icons iconNumber={65.5} />
      </div>
    ) : null}
  </div>
}
export default Card