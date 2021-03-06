import React from 'react'
import Avatar from 'react-avatar'
import './index.scss'
import FileUpload from '../FileUpload/index'

class ProfilePopup extends React.Component {
  state = {
    hidePopup: true
  };

  togglePopup = (event) => {
    this.setState({ hidePopup: !this.state.hidePopup })
    event.stopPropagation()
  };

  render () {
    return (
      <div className='profilecontainer'>
        <div className={this.state.hidePopup ? 'email' : 'email expand'} onClick={this.togglePopup}>
          <div className='from'>
            <div className='from-contents'>
              <Avatar className='me' facebookId='100001939396276' size={25} round={true}/>
              <div className='name'>User Name</div>
            </div>
          </div>
          <div className='to'>
            <div className='to-contents'>
              <div className='top'>
                <Avatar className='me' githubHandle='r-bower' size={56} round={true}/>
                <FileUpload/>
                <div className='name-large'>User Name</div>
                <div className={this.state.hidePopup ? '' : 'expand x-touch'} onClick={this.togglePopup}>
                  <div className='x'>
                    <div className='line1'/>
                    <div className='line2'/>
                  </div>
                </div>
              </div>
              <div className='bottom'>
                <div className='row'>
                  <svg className='twitter' viewBox='0 0 300 244.18703'>
                    <g transform='translate(-539.17946,-568.85777)' id='layer1'>
                      <path id='path3611' style={{ fill: '#1da1f2', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                        d='m 633.89823,812.04479 c 112.46038,0 173.95627,-93.16765 173.95627,-173.95625 0,-2.64628 -0.0539,-5.28062 -0.1726,-7.90305 11.93799,-8.63016 22.31446,-19.39999 30.49762,-31.65984 -10.95459,4.86937 -22.74358,8.14741 -35.11071,9.62551 12.62341,-7.56929 22.31446,-19.54304 26.88583,-33.81739 -11.81284,7.00307 -24.89517,12.09297 -38.82383,14.84055 -11.15723,-11.88436 -27.04079,-19.31655 -44.62892,-19.31655 -33.76374,0 -61.14426,27.38052 -61.14426,61.13233 0,4.79784 0.5364,9.46458 1.58538,13.94057 -50.81546,-2.55686 -95.87353,-26.88582 -126.02546,-63.87991 -5.25082,9.03545 -8.27852,19.53111 -8.27852,30.73006 0,21.21186 10.79366,39.93837 27.20766,50.89296 -10.03077,-0.30992 -19.45363,-3.06348 -27.69044,-7.64676 -0.009,0.25652 -0.009,0.50661 -0.009,0.78077 0,29.60957 21.07478,54.3319 49.0513,59.93435 -5.13757,1.40062 -10.54335,2.15158 -16.12196,2.15158 -3.93364,0 -7.76596,-0.38716 -11.49099,-1.1026 7.78383,24.2932 30.35457,41.97073 57.11525,42.46543 -20.92578,16.40207 -47.28712,26.17062 -75.93712,26.17062 -4.92898,0 -9.79834,-0.28036 -14.58427,-0.84634 27.05868,17.34379 59.18936,27.46396 93.72193,27.46396'/>
                    </g>
                  </svg>
                  <div className='link'><a href=''>asdf</a></div>
                </div>
                <div className='row'>
                  <svg className='medium' viewBox='0 0 24 24'>
                    <style type='text/css' id='style2'
                      dangerouslySetInnerHTML={{ __html: '\n                .st0{fill:#3DD87F;}\n                .st1{fill:#FFFFFF;}\n              ' }}/>
                    <g id='Page-1' transform='translate(0,1)'>
                      <g id='Monogram'>
                        <rect id='Rectangle-path' x={0} y={-1} className='st0' width={24} height={24}
                          style={{ fill: '#000000', fillOpacity: 1, strokeWidth: '1.090909' }}/>
                        <path id='Shape' className='st1'
                          d='m 6.3,7.6 c 0,-0.2 -0.1,-0.4 -0.2,-0.5 l -1.3,-1.7 v -0.2 h 4.3 l 3.3,7.3 2.9,-7.3 h 4.1 v 0.2 l -1.2,1.1 c -0.1,0.1 -0.2,0.2 -0.1,0.3 v 8.3 c 0,0.1 0,0.3 0.1,0.3 l 1.2,1.1 v 0.2 h -5.8 v -0.2 l 1.2,-1.2 c 0.1,-0.1 0.1,-0.2 0.1,-0.3 v -6.6 l -3.3,8.4 h -0.4 l -4,-8.4 v 5.6 c 0,0.2 0,0.5 0.2,0.6 l 1.6,1.9 v 0.2 h -4.4 v -0.2 l 1.5,-1.8 c 0.2,-0.2 0.2,-0.4 0.2,-0.6 z'
                          inkscapeconnector-curvature='0' style={{ fill: '#ffffff' }}/>
                      </g>
                    </g>
                  </svg>
                  <div className='link'><a href=''>asdf</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfilePopup
