import { useEffect, useState, useRef } from "react";
import Icons from "../icons";
import axios from "axios";

const VideoForm = ({ selectedInterview, favourite }: { selectedInterview?: any, favourite?: any }) => {
  const [job, setSetJob] = useState<any>(null);
  const [playing, setPlaying] = useState(false);
  const [hoverShow, setHoverShow] = useState(false);
  const [playPromise, setPlayPromise] = useState<any>(undefined);
  const videoRef = useRef<any>(null);


  useEffect(() => {
    if (selectedInterview?.id) {
      setPlaying(false);
      setHoverShow(false);
      getJobDetails(selectedInterview.id);
    }
  }, [selectedInterview]);

  useEffect(() => {
    if (videoRef?.current) {
      if (playing) {
        setPlayPromise(videoRef.current.play());
      } else {
        if (playPromise != undefined) {
          playPromise.then((_: any) => {
            videoRef.current.pause();
          }).catch(() => { }).finally(() => {
            setPlayPromise(undefined);
          });
        } else {
          videoRef.current.pause();
          setPlayPromise(undefined);
        }
      }
    }
  }, [playing]);

  const getJobDetails = (_id: any) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/interviews/${_id}`)
      .then(async response => {
        setSetJob(response.data)
      })
      .catch(console.error)
  }

  const _showHover = () => {
    setHoverShow(true);
  };

  const _hideHover = () => {
    setHoverShow(false);
  };

  return (
    <div className="kjjfds-janwkea4">
      {/* <img src={require("../../images/i6.png")} /> */}
      <div className={`jljdskaflsd ${hoverShow ? `d-flex` : `d-${playing ? 'none' : 'flex'}`}`}>
        <div className='kldfjads'>
          <div>
            <img src={require('../../images/i5.png')} />
          </div>
          <div>
            <h5>{selectedInterview?.interviewee?.name || 'Sarah Pillman-Murphy'}</h5>
            <h6>
              <Icons iconNumber={17} />
              {selectedInterview?.interviewee?.location || '-'}
            </h6>
          </div>
        </div>
        {favourite ? (
          <div className='odjfks-amds'>
            <Icons iconNumber={65} />
          </div>
        ) : null}
      </div>
      <div className="kjdflmas-sdmfe kamnask-asnw kljdnas-jdnwd" onMouseOver={_showHover} onMouseOut={_hideHover}>
        {selectedInterview?.videoLink && selectedInterview?.id ? (
          <video key={selectedInterview.id} ref={videoRef} style={{ position: 'relative', borderRadius: 25, width: '99%', background: 'black' }}>
            <source src={selectedInterview.videoLink} type="video/mp4" />
            Couldn't load video.
          </video>
        ) : null}

        <div style={{ position: 'absolute', width: '100%', height: '100%' }} className={`${hoverShow ? `d-flex` : `d-${playing ? 'none' : 'flex'}`}`}>
          <div className="d-flex justify-content-between skdjand-wkemd ksljfsa-asjd">
            <div className="circleButtons">
              <h5></h5>
            </div>
            <div className="circleButtons" onClick={() => {
              setPlaying(!playing);
            }}>
              <Icons iconNumber={playing ? 20.1 : 20} />
              <h5>{playing ? 'Pause' : 'Watch'}</h5>
            </div>
            <div className="circleButtons">
              <h5></h5>
            </div>
          </div>
        </div>
        <div className={`klasdjf-jdsifm d-${playing ? 'none' : 'flex'}`} style={{ width: '99%', left: 1 }}></div>

        <div className='kdjasldk-ajsdmkd'>
          {/* <img src={require('../../images/i8.png')} /> */}
        </div>
        <div className={`kjfds-jandsa ${hoverShow ? `d-flex` : `d-${playing ? 'none' : 'flex'}`}`} >
        </div>
        <div className={`kjjsad-awek ${hoverShow ? `d-flex` : `d-${playing ? 'none' : 'flex'}`}`} style={{
          width: "93%",
          borderRadius: 12
        }}>
        </div>
        <div className={`kjdsia-ajdwnkd ${hoverShow ? `d-flex` : `d-${playing ? 'none' : 'flex'}`}`}>
          <Icons iconNumber={25} />
          <h5>{job?.questions?.length ? job?.questions[0]?.question_id?.question : 'What are your strengths and weaknesses?'}</h5>
          <div className='kjda-ejmnwae'>
            <Icons iconNumber={26} />
            <h6>{job?.questions?.length ? job?.questions[0]?.question_id?.time_duration : '30s'}</h6>
          </div>
        </div>
      </div>
      <div className="ldkjfal0-fdsnfe1">
        <Icons iconNumber={63} />
      </div>
    </div>
  );
};
export default VideoForm