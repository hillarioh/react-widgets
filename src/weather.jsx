import React from 'react';

export class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            city: '',
            temp: ''
        };
        this.setWeather=this.setWeather.bind(this);
        this.success = this.success.bind(this)
    }

    yout(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.success, this.error);
        } else {
            console.log("too bad");
        }
    }

    success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        let output = '';

      const makeRequest = new Promise((resolve, reject) => {
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b34fddd3dae4a2eb0ad363b62f98ba1e`,{
          method: 'get',
        }).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            resolve(response.json());
          } else {
            reject(new Error(response.statusText));
          }
        }).catch((err) => {
          console.log(`Request failed, ${err}`);
        });
      });

      makeRequest.then(result => {
                this.setState({
                city: result.name,
                temp: Math.trunc(result.main.temp - 273) 
            });
      });

      

    //   this.setState({
    //     city: output.name,
    //     temp: Math.trunc(output.main.temp - 273) 
    // });
    }

    setWeather(result){
        this.setState({
            city: result.name,
            temp: Math.trunc(result.main.temp - 273) 
        });
    }
    
      error() {
        console.log('Unable to retrieve your location');
      }

    
    render(){
        this.yout();
        return(
            <div>
                <h1>Weather</h1>
                <p>
                    <span>{this.state.city}</span>
                    <span>{this.state.temp}</span>
                </p>
            </div>
        );
    }
}