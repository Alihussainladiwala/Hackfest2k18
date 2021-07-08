import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chart = [];
  chart2 = [];
  chart3 = [];
  chart4 = [];
  chart5 = [];
  chart6 = [];
  chart7 = [];
  chart8 = [];
  chart9 = [];
  CLIENTS_HPUX_TOTAL = '';
  CLIENTS_LIN_TOTAL = '';
  CLIENTS_OTHERS_TOTAL = '';
  CLIENTS_TOTAL = '';
  CLIENTS_VMWARE_TOTAL = '';
  CLIENTS_WIN_TOTAL = '';
  CM_HPUX_TOTAL = '';
  CM_LIN_TOTAL = '';
  CM_OTHERS_TOTAL = '';
  CM_TOTAL = '';
  CM_WIN_TOTAL = '';
  LIC_CAPACITY = '';
  LIC_EXPRESS = '';
  LIC_PREMIUM = '';
  CM_SESSIONS = '';
  protectedData = 0;
  protectedString = "";
  graph = 0;
  graph1 = 0;


  constructor(private _weather: WeatherService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this._weather.CM_VERSION()
       .subscribe(res =>  {
        let jsonData = []
        let keys = [];
        let values = [];
           jsonData = res[0].CM_VERSION;
            keys = Object.keys(jsonData);
            values = Object.values(jsonData);
            console.log(keys[1]);
            // tslint:disable-next-line:comment-format
            //CMVersion.push();

            this.chart = new Chart('CM_VERSION', {
              type: 'bar',
              data: {
                  labels: keys,
                  datasets: [{
                      label: 'CM Version',
                      data: values,
                      backgroundColor: [
                          'rgb(255, 99, 132)',
                          'rgb(54, 162, 235)',
                          'rgb(255, 206, 86)',
                          'rgb(75, 192, 192)',
                          'rgb(153, 102, 255)',
                          'rgb(255, 159, 64)'
                      ],
                      borderWidth: 1
                  }]
              },
              options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero:true
                          }
                      }]
                  }
              }
          });


          this._weather.TOTAL()
          .subscribe(res =>  {
           let keys = [];
           let values = [];
               keys = ['WINDOWS', 'HPUX', 'LINUX'];
               values = [res[0].CM_WIN_TOTAL, res[0].CM_HPUX_TOTAL, res[0].CM_LIN_TOTAL];
               console.log(keys[1]);
               // tslint:disable-next-line:comment-format
               //CMVersion.push();
       
               this.chart8 = new Chart('CM_TOTAL_3', {
                 type: 'polarArea',
                 data: {
                     labels: keys,
                     datasets: [{
                         label: 'CM Total',
                         data: values,
                         backgroundColor: [
                             'rgb(255, 99, 132)',
                             'rgb(54, 162, 235)',
                             'rgb(255, 206, 86)',
                             'rgb(75, 192, 192)',
                             'rgb(153, 102, 255)',
                             'rgb(255, 159, 64)'
                         ],
                         borderWidth: 1
                     }]
                 },
                 options: {
                     scales: {
                         yAxes: [{
                             ticks: {
                                 beginAtZero:true
                             }
                         }]
                     }
                 }
             });
       
         });
       
    
         this._weather.CLIENTS_VERSION()
         .subscribe(res =>  {
          let jsonData = []
          let keys = [];
          let values = [];
             jsonData = res[0].CLIENT_VERSION;
              keys = Object.keys(jsonData);
              values = Object.values(jsonData);
              console.log(keys[1]);
              // tslint:disable-next-line:comment-format
              //CMVersion.push();
    
              this.chart3 = new Chart('CLIENTS_VERSION', {
                type: 'doughnut',
                data: {
                    labels: keys,
                    datasets: [{
                        label: 'Clients Version',
                        data: values,
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 206, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(153, 102, 255)',
                            'rgb(255, 159, 64)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
    
        });
    
    
        this._weather.CLIENT_OS()
        .subscribe(res =>  {
         let jsonData = []
         let keys = [];
         let values = [];
            jsonData = res[0].CLIENTS_OS;
             keys = Object.keys(jsonData);
             values = Object.values(jsonData);
             console.log(keys[1]);
             // tslint:disable-next-line:comment-format
             //CMVersion.push();
    
             this.chart4 = new Chart('CLIENTS_OS', {
               type: 'horizontalBar',
               data: {
                   labels: keys,
                   datasets: [{
                       label: 'Clients Operating System',
                       data: values,
                       backgroundColor: [
                           'rgb(255, 99, 132)',
                           'rgb(54, 162, 235)',
                           'rgba(255, 206, 86)',
                           'rgb(75, 192, 192)',
                           'rgb(153, 102, 255)',
                           'rgb(255, 159, 64)',
                           'rgb(0,0,128)',
                           'rgb(0,128,128)',
                           'rgb(128,128,0)',
                           'rgb(255,165,0)',
                           'rgb(255,215,0)',
                           'rgb(0,128,0)',
                           'rgb(0,139,139)',
                           'rgb(64,224,208)',
                           'rgb(100,149,237)',
                           'rgb(138,43,226)',
                           'rgb(123,104,238)'

                       ],
                       borderWidth: 1
                   }]
               },
               options: {
                   scales: {
                       yAxes: [{
                           ticks: {
                               beginAtZero:true
                           }
                       }]
                   }
               }
           });
    
       });
    
        //backup info
        this._weather.BACKUP_INFO()
        .subscribe(res =>  {
         let jsonData = []
         let keys = [];
         let values = [];
            jsonData = res[0].BACKUP_INFO;
             keys = Object.keys(jsonData);
             values = Object.values(jsonData);
             for(var i= 0; i < values.length; i++)
             {
               this.protectedData = values[i] + this.protectedData;
               
             }
    
             this.protectedString  = this.protectedData +' '+ 'GB';
    
             console.log(keys[1]);
             // tslint:disable-next-line:comment-format
             //CMVersion.push();
    
             this.chart5 = new Chart('BACKUP_INFO', {
               type: 'doughnut',
               data: {
                   labels: keys,
                   datasets: [{
                       label: 'BACKUP INFO',
                       data: values,
                       backgroundColor: [
                           'rgb(255, 99, 132)',
                           'rgb(54, 162, 235)',
                           'rgb(255, 206, 86)',
                           'rgb(75, 192, 192)',
                           'rgb(153, 102, 255)',
                           'rgb(255, 159, 64)'
                       ],
                       borderWidth: 1
                   }]
               },
               options: {
                   scales: {
                       yAxes: [{
                           ticks: {
                               beginAtZero:true
                           }
                       }]
                   }
               }
           });
    
       });
    
    
       //media info
    
       this._weather.MEDIA_INFO()
       .subscribe(res =>  {
        let jsonData = []
        let keys = [];
        let values = [];
           jsonData = res[0].MEDIA_INFO;
            keys = Object.keys(jsonData);
            values = Object.values(jsonData);
            console.log(keys[1]);
            // tslint:disable-next-line:comment-format
            //CMVersion.push();
    
            this.chart6 = new Chart('MEDIA_INFO', {
              type: 'pie',
              data: {
                  labels: keys,
                  datasets: [{
                      label: 'MEDIA_INFO',
                      data: values,
                      backgroundColor: [
                          'rgb(255, 99, 132)',
                          'rgb(54, 162, 235)',
                          'rgb(255, 206, 86)',
                          'rgb(75, 192, 192)',
                          'rgba(153, 102, 255)',
                          'rgb(255, 159, 64)'
                      ],
                      borderWidth: 1
                  }]
              },
              options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero:true
                          }
                      }]
                  }
              }
          });
    
      });
    
    
      this._weather.TOTAL()
      .subscribe(res =>  {
       let keys = [];
       let values = [];
           keys = ['EXPRESS', 'PREMIUM', 'CAPACITY'];
           values = [res[0].LIC_EXPRESS, res[0].LIC_PREMIUM, res[0].LIC_CAPACITY];
           console.log(keys[1]);
           // tslint:disable-next-line:comment-format
           //CMVersion.push();
   
           this.chart9 = new Chart('LIC_INFO_3', {
             type: 'horizontalBar',
             data: {
                 labels: keys,
                 datasets: [{
                     label: 'LIC Total',
                     data: values,
                     backgroundColor: [
                         'rgb(255, 99, 132)',
                         'rgb(54, 162, 235)',
                         'rgb(255, 206, 86)',
                         'rgb(75, 192, 192)',
                         'rgb(153, 102, 255)',
                         'rgb(255, 159, 64)'
                     ],
                     borderWidth: 1
                 }]
             },
             options: {
                 scales: {
                     yAxes: [{
                         ticks: {
                             beginAtZero:true
                         }
                     }]
                 }
             }
         });
   
     });
   
    
     
     this._weather.TOTAL()
     .subscribe(res =>  {
    
      this.CLIENTS_HPUX_TOTAL = res[0].CLIENTS_HPUX_TOTAL;
      this.CLIENTS_LIN_TOTAL = res[0].CLIENTS_LIN_TOTAL;
      this.CLIENTS_OTHERS_TOTAL = res[0].CLIENTS_OTHERS_TOTAL;
      this.CLIENTS_TOTAL = res[0].CLIENTS_TOTAL;
      this.CLIENTS_VMWARE_TOTAL = res[0].CLIENTS_VMWARE_TOTAL;
      this.CLIENTS_WIN_TOTAL = res[0].CLIENTS_WIN_TOTAL;
      this.CM_HPUX_TOTAL = res[0].CM_HPUX_TOTAL;
      this.CM_LIN_TOTAL = res[0].CM_LIN_TOTAL;
      this.CM_OTHERS_TOTAL = res[0].CM_OTHERS_TOTAL;
      this.CM_TOTAL = res[0].CM_TOTAL;
      this.CM_WIN_TOTAL = res[0].CM_WIN_TOTAL;
      this.LIC_CAPACITY = res[0].LIC_CAPACITY;
      this.LIC_EXPRESS = res[0].LIC_EXPRESS;
      this.LIC_PREMIUM = res[0].LIC_PREMIUM;
      this.CM_SESSIONS = res[0].CM_SESSIONS;
    
        });
    
    




        });

          
     
    }

    switchForOS() {
    if (this.graph === 1) {
      this.graph = 0;
    } else {
     this.graph = 1;
    }
    this._weather.CM_OS()
    .subscribe(res =>  {
     let jsonData = []
     let keys = [];
     let values = [];
        jsonData = res[0].CM_OS;
         keys = Object.keys(jsonData);
         values = Object.values(jsonData);
         console.log(keys[1]);
         // tslint:disable-next-line:comment-format
         //CMVersion.push();

         this.chart2 = new Chart('CM_OS', {
           type: 'polarArea',
           data: {
               labels: keys,
               datasets: [{
                   label: 'Cell Manager OS',
                   data: values,
                   backgroundColor: [
                       'rgb(255, 99, 132)',
                       'rgb(54, 162, 235)',
                       'rgb(255, 206, 86)',
                       'rgb(75, 192, 192)',
                       'rgb(153, 102, 255)',
                       'rgb(255, 159, 64)'
                   ],
                   borderWidth: 1
               }]
           },
           options: {
               scales: {
                   yAxes: [{
                       ticks: {
                           beginAtZero:true
                       }
                   }]
               }
           }
       });

   });


   this._weather.TOTAL()
   .subscribe(res =>  {
    let keys = [];
    let values = [];
        keys = ['WINDOWS', 'HPUX', 'LINUX'];
        values = [res[0].CM_WIN_TOTAL, res[0].CM_HPUX_TOTAL, res[0].CM_LIN_TOTAL];
        console.log(keys[1]);
        // tslint:disable-next-line:comment-format
        //CMVersion.push();

        this.chart8 = new Chart('CM_TOTAL_3', {
          type: 'polarArea',
          data: {
              labels: keys,
              datasets: [{
                  label: 'CM Total',
                  data: values,
                  backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(54, 162, 235)',
                      'rgb(255, 206, 86)',
                      'rgb(75, 192, 192)',
                      'rgb(153, 102, 255)',
                      'rgb(255, 159, 64)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      });

  });


      

    }

    switchForLic(){

      if (this.graph1 === 1) {
        this.graph1 = 0;
      } else {
       this.graph1 = 1;
      }

      this._weather.LIC_INFO()
      .subscribe(res =>  {
       let jsonData = []
       let keys = [];
       let values = [];
          jsonData = res[0].LIC_INFO;
           keys = Object.keys(jsonData);
           values = Object.values(jsonData);
           console.log(keys[1]);
           // tslint:disable-next-line:comment-format
           //CMVersion.push();
    
           this.chart7 = new Chart('LIC_INFO', {
             type: 'horizontalBar',
             data: {
                 labels: keys,
                 datasets: [{
                     label: 'LICENSE INFO',
                     data: values,
                     backgroundColor: '#0084eb',
                     borderWidth: 1
                 }]
             },
             options: {
                 scales: {
                     yAxes: [{
                         ticks: {
                             beginAtZero:true
                         }
                     }]
                 }
             }
         });
    
     });
      
  
  
     this._weather.TOTAL()
     .subscribe(res =>  {
      let keys = [];
      let values = [];
          keys = ['EXPRESS', 'PREMIUM', 'CAPACITY'];
          values = [res[0].LIC_EXPRESS, res[0].LIC_PREMIUM, res[0].LIC_CAPACITY];
          console.log(keys[1]);
          // tslint:disable-next-line:comment-format
          //CMVersion.push();
  
          this.chart9 = new Chart('LIC_INFO_3', {
            type: 'horizontalBar',
            data: {
                labels: keys,
                datasets: [{
                    label: 'LIC Total',
                    data: values,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 206, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(153, 102, 255)',
                        'rgb(255, 159, 64)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
  
    });
  
  



    }
  }







