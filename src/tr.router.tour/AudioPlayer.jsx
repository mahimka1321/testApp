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


  render() {
    const { playing, currentTime, duration } = this.state
    const { src,controlrouters } = this.props

    let pdf = Math.floor(currentTime*100 / duration)

    const style =  {
        position:'absolute',
        width: `${pdf}%`,
        background: '#23A6FF',
        height:'4px',
        zIndex:'10',
        borderRadius: '5px'
    }

    const style2 =  {
        position:'absolute',
        width: `${100}%`,
        background: '#616161',
        height:'4px',
        zIndex:'1',
        borderRadius: '5px'
    }
    return (
      <div style={{marginLeft:'25px',position:'relative', width:'280px'}}>
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
                    paddingBottom:'10px', 
                    display:"flex",
                    justifyContent:'right',
                    width: '280px',
                    fontSize:'14px'
                }}>{Math.floor(currentTime)/100} / {Math.floor(duration)/100}</p>
                <h3 style={style}></h3>
                <h3 style={style2}></h3>
            </div>
        </div>
      </div>
    )
  }
}

export default AudioPlayer;