import React from 'react';
import Hoocks from '../Hoocks';

class AudioPlayer extends React.Component {
  state = {
    playing: false,
    currentTime: 0,
    duration: 0
  }

  audioRef = React.createRef()

  handlePlay = () => {
    this.audioRef.current.play()
    this.setState({ playing: true })
  }

  handlePause = () => {
    this.audioRef.current.pause()
    this.setState({ playing: false })
  }

  handleTimeUpdate = () => {
    this.setState({
      currentTime: this.audioRef.current.currentTime,
      duration: this.audioRef.current.duration
    })
  }

  handleSeek = (e) => {
    this.audioRef.current.currentTime = e.target.value;
  }

  render() {
    const { playing, currentTime, duration } = this.state
    const { src,controlrouters } = this.props

    let pdf = Math.floor(currentTime*100 / duration)

    const style =  {
        backgroundSize: `${pdf}%`
    }



    function opoo(e) {
        let dfd = document.getElementById('dfd')
        currentTime = ((e.offSetX/dfd.offSetWidth) * duration)
    }


    return (
      <div style={{marginLeft:'25px',marginTop:'100px',marginBottom:'20px',position:'relative', width:'280px'}}>
        <audio
          ref={this.audioRef}
          src={src}
          onTimeUpdate={this.handleTimeUpdate}
        />
        <div style={{display:'flex'}}>
            <button style={{
                width:'35px',
                height:'35px',
                background: '#23A6FF', 
                borderRadius:'30px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                fontSize:'16px',
                color:'#fff'
            }} 
            onClick={playing ? this.handlePause : this.handlePlay} className={playing ? 'material-icons' : 'material-icons'}>
              {playing ? 'pause' : 'play_arrow'}
            </button>
            <div style={{position:'absolute', marginLeft:'45px'}}>
                <p style={{
                        position: 'absolute',
                        color: '#616161',
                        fontSize: '14px'
                }}>{controlrouters}</p>
                <p style={{
                    color:'#616161', 
                    paddingBottom:'3px', 
                    display:"flex",
                    justifyContent:'right',
                    width: '280px',
                    fontSize:'14px'
                }}>{Math.floor(currentTime)/100} / {Math.floor(duration)/100}</p>
                <input
                    type="range"
                    className='inpun__progres_bar'
                    style={style}
                    min={0}
                    max={duration}
                    step={0.01}
                    value={currentTime}
                    onChange={this.handleSeek}
                />
            </div>
        </div>
      </div>
    )
  }
}

export default AudioPlayer;