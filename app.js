// var Vue = require('vue');

new Vue({
  el: '#events',

  data: {
    event: { title: '', detail: '', date: '' },
    events: [],
    page: 1
  },

  ready: function () {
    this.fetchEvents();

  },

  methods: {
    fetchEvents: function () {
      var events = [];
      this.$set('page',1);

      this.$http.get('/api/events')
        .success(function (events) {
          var page=this.$get('page')-1;
          this.$set('allevents',events);
          this.$set('events', events.slice(page*50,page*50+50));
          console.log(events);
        })
        .error(function (err) {
          console.log(err);
        });
    },
    dataAnalysis: function (e) {
      this.$http.get('/api/events')
        .success(function (events) {
          if(e==1)
          { 
            var dict={};
            dict['Title1']=0;
            dict['Title2']=0;
            dict['Title3']=0;
            dict['Title4']=0;
            dict['Title5']=0;
            dict['Title6']=0;
            dict['Title7']=0;
            dict['Title8']=0;
            dict['Title9']=0;
            dict['Title10']=0;
            for(var i=0;i<events.length;i++)
            {
               dict[events[i].Title]=dict[events[i].Title]+events[i].Amount;
            }



            max1=dict['Title1'];Title1='Title1';
            max2=0;Title2='';
            max3=0;Title3='';
            max4=0;Title4='';
            max5=0;Title5='';

            if(dict['Title2']>max1)
            {
              Title2=Title1;
              max2=max1;
              max1=dict['Title2'];
              Title1='Title2';
            }
            else
            {
              Title2='Title2';
              max2=dict['Title2'];
            }
            if(dict['Title3']>max1)
            {
              Title3=Title2;
              max3=max2;
              Title2=Title1;
              max2=max1;
              Title1='Title3'
              max1=dict['Title3'];
            }
            else if(dict['Title3']>max2)
            {
              Title3=Title2;
              max3=max2;
              Title2='Title3';
              max2=dict['Title3'];
            }
            else{
              Title3='Title3';
              max3=dict['Title3'];
            }
            if(dict['Title4']>max1)
            {
              Title4=Title3;
              Title3=Title2;
              Title2=Title1;
              Title1='Title4';
              max4=max3;
              max3=max2;
              max2=max1;
              max1=dict['Title4'];
            }
            else if(dict['Title4']>max2)
            { 
              Title4=Title3;
              Title3=Title2;
              Title2='Title4';
              max4=max3;
              max3=max2;
              max2=dict['Title4'];
            }
            else if(dict['Title4']>max3)
            { 
              Title4=Title3;
              Title3='Title4';
              max4=max3;
              max3=dict['Title4'];
            }
            else{
               Title4='Title4';
              max4=dict['Title4'];
            }
            if(dict['Title5']>max1){
              Title5=Title4
              Title4=Title3;
              Title3=Title2;
              Title2=Title1;
              Title1='Title5';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=max1;
              max1=dict['Title5'];
            }
            else if(dict['Title5']>max2){
              Title5=Title4
              Title4=Title3;
              Title3=Title2;
              Title2='Title5';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=dict['Title5'];
            }
            else if(dict['Title5']>max3){
              Title5=Title4
              Title4=Title3;
              Title3='Title5';
              max5=max4;
              max4=max3;
              max3=dict['Title5'];
            }
            else if(dict['Title5']>max4){
              Title5=Title4
              Title4='Title5';
              max5=max4;
              max4=dict['Title5'];
            }
            else{
              Title5='Title5';
              max5=dict['Title5'];
            }

            if(dict['Title6']>max1){
              Title5=Title4
              Title4=Title3;
              Title3=Title2;
              Title2=Title1;
              Title1='Title6';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=max1;
              max1=dict['Title6'];
            }
            else if(dict['Title6']>max2){
              Title5=Title4
              Title4=Title3;
              Title3=Title2;
              Title2='Title6';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=dict['Title6'];
            }
            else if(dict['Title6']>max3){
              Title5=Title4
              Title4=Title3;
              Title3='Title6';
              max5=max4;
              max4=max3;
              max3=dict['Title6'];
            }
            else if(dict['Title6']>max4){
              Title5=Title4
              Title4='Title6';
              max5=max4;
              max4=dict['Title6'];
            }
            else if(dict['Title6']>max5){
              Title5='Title6';
              max5=dict['Title6'];
            }
            if(dict['Title7']>max1){
              Title5=Title4
              Title4=Title3;
              Title3=Title2;
              Title2=Title1;
              Title1='Title7';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=max1;
              max1=dict['Title7'];
            }
            else if(dict['Title7']>max2){
              Title5=Title4
              Title4=Title3;
              Title3=Title2;
              Title2='Title7';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=dict['Title7'];
            }
            else if(dict['Title7']>max3){
              Title5=Title4
              Title4=Title3;
              Title3='Title7';
              max5=max4;
              max4=max3;
              max3=dict['Title7'];
            }
            else if(dict['Title7']>max4){
              Title5=Title4
              Title4='Title7';
              max5=max4;
              max4=dict['Title7'];
            }
            else if(dict['Title7']>max5){
              Title5='Title7';
              max5=dict['Title7'];
            }
            if(dict['Title8']>max1){
              Title5=Title4
              Title4=Title3;
              Title3=Title2;
              Title2=Title1;
              Title1='Title8';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=max1;
              max1=dict['Title8'];
            }
            else if(dict['Title8']>max2){
              Title5=Title4
              Title4=Title3;
              Title3=Title2;
              Title2='Title8';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=dict['Title8'];
            }
            else if(dict['Title8']>max3){
              Title5=Title4
              Title4=Title3;
              Title3='Title8';
              max5=max4;
              max4=max3;
              max3=dict['Title8'];
            }
            else if(dict['Title8']>max4){
              Title5=Title4
              Title4='Title8';
              max5=max4;
              max4=dict['Title8'];
            }
            else if(dict['Title8']>max5){
              Title5='Title8';
              max5=dict['Title8'];
            }
            if(dict['Title9']>max1){
              Title5=Title4
              Title4=Title3;
              Title3=Title2;
              Title2=Title1;
              Title1='Title9';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=max1;
              max1=dict['Title9'];
            }
            else if(dict['Title9']>max2){
              Title5=Title4
              Title4=Title3;
              Title3=Title2;
              Title2='Title9';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=dict['Title9'];
            }
            else if(dict['Title9']>max3){
              Title5=Title4
              Title4=Title3;
              Title3='Title9';
              max5=max4;
              max4=max3;
              max3=dict['Title9'];
            }
            else if(dict['Title9']>max4){
              Title5=Title4
              Title4='Title9';
              max5=max4;
              max4=dict['Title9'];
            }
            else if(dict['Title9']>max5){
              Title5='Title9';
              max5=dict['Title9'];
            }

            if(dict['Title10']>max1){
              Title5=Title4
              Title4=Title3;
              Title3=Title2;
              Title2=Title1;
              Title1='Title10';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=max1;
              max1=dict['Title10'];
            }
            else if(dict['Title10']>max2){
              Title5=Title4
              Title4=Title3;
              Title3=Title2;
              Title2='Title10';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=dict['Title10'];
            }
            else if(dict['Title10']>max3){
              Title5=Title4
              Title4=Title3;
              Title3='Title10';
              max5=max4;
              max4=max3;
              max3=dict['Title10'];
            }
            else if(dict['Title10']>max4){
              Title5=Title4
              Title4='Title10';
              max5=max4;
              max4=dict['Title10'];
            }
            else if(dict['Title10']>max5){
              Title5='Title10';
              max5=dict['Title10'];
            }

var data = [{
  x: [Title1,Title2,Title3,Title4,Title5],
  y: [max1,max2,max3,max4,max5],
  marker:{
    color: ['rgba(222,45,38,0.8)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)'],
    line: {
      color: 'rgba(0,0,0,1.0)',
      width: 1
    }
  },
  type: 'bar',

}];
var layout = {
  title: 'The Best Selling Product is : '.concat(Title1),
  xaxis:{
    title:"Title Of The Product"
  },
  yaxis:{
    title:"Sales in $"
  }
}

Plotly.newPlot('myDiv', data,layout);

this.$set('Title1',Title1);
this.$set('maxtitle',max1);
          }

          else if(e==3)
          {
            var dict={};
            months=[0,0,0,0,0,0,0,0,0,0,0,0]
            for(var i=0;i<events.length;i++)
            {
              monthvar=new Date(events[i].Date).getMonth();
              months[monthvar]=months[monthvar]+events[i].Amount;
            }
            var data = [{
  x: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  y: [months[0],months[1],months[2],months[3],months[4],months[5],months[6],months[7],months[8],months[9],months[10],months[11]],
  marker:{
    color: ['rgba(219, 64, 82, 1)','rgba(55,128,191,1)','rgba(50,171, 96, 0.7)','rgba(219, 64, 82, 1)','rgba(55,128,191,1)','rgba(50,171, 96, 0.7)','rgba(219, 64, 82, 1)','rgba(55,128,191,1)','rgba(50,171, 96, 0.7)','rgba(219, 64, 82, 1)','rgba(55,128,191,1)','rgba(50,171, 96, 0.7)'],
    line: {
      color: 'rgba(0,0,0,1.0)',
      width: 1
    }
  
  },
  type: 'bar'
}];

var layout = {
  title: 'Monthly Report',
  yaxis:{
    title:"Sales in $"
  }
}

Plotly.newPlot('myDiv', data, layout);
          
          }


          else if(e==2)
          {
            var dict={};
            dict['Merchant1']=0;
            dict['Merchant2']=0;
            dict['Merchant3']=0;
            dict['Merchant4']=0;
            dict['Merchant5']=0;
            dict['Merchant6']=0;
            dict['Merchant7']=0;
            dict['Merchant8']=0;
            dict['Merchant9']=0;
            dict['Merchant10']=0;
            for(var i=0;i<events.length;i++)
            {
               dict[events[i].NameOfTheMerchant]=dict[events[i].NameOfTheMerchant]+events[i].Amount;
            }


            max1=dict['Merchant1'];Merchant1='Merchant1';
            max2=0;Merchant2='';
            max3=0;Merchant3='';
            max4=0;Merchant4='';
            max5=0;Merchant5='';


            if(dict['Merchant2']>max1)
            {
              Merchant2=Merchant2;
              max2=max1;
              max1=dict['Merchant2'];
              Merchant1='Merchant2';
            }
            else
            {
              Merchant2='Merchant2';
              max2=dict['Merchant2'];
            }
            if(dict['Merchant3']>max1)
            {
              Merchant3=Merchant2;
              max3=max2;
              Merchant2=Merchant1;
              max2=max1;
              Merchant1='Merchant3'
              max1=dict['Merchant3'];
            }
            else if(dict['Merchant3']>max2)
            {
              Merchant3=Merchant2;
              max3=max2;
              Merchant2='Merchant3';
              max2=dict['Merchant3'];
            }
            else{
              Merchant3='Merchant3';
              max3=dict['Merchant3'];
            }
            if(dict['Merchant4']>max1)
            {
              Merchant4=Merchant3;
              Merchant3=Merchant2;
              Merchant2=Merchant1;
              Merchant1='Merchant4';
              max4=max3;
              max3=max2;
              max2=max1;
              max1=dict['Merchant4'];
            }
            else if(dict['Merchant4']>max2)
            { 
              Merchant4=Merchant3;
              Merchant3=Merchant2;
              Merchant2='Merchant4';
              max4=max3;
              max3=max2;
              max2=dict['Merchant4'];
            }
            else if(dict['Merchant4']>max3)
            { 
              Merchant4=Merchant3;
              Merchant3='Merchant4';
              max4=max3;
              max3=dict['Merchant4'];
            }
            else{
               Merchant4='Merchant4';
              max4=dict['Merchant4'];
            }
            if(dict['Merchant5']>max1){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3=Merchant2;
              Merchant2=Merchant1;
              Merchant1='Merchant5';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=max1;
              max1=dict['Merchant5'];
            }
            else if(dict['Merchant5']>max2){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3=Merchant2;
              Merchant2='Merchant5';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=dict['Merchant5'];
            }
            else if(dict['Merchant5']>max3){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3='Merchant5';
              max5=max4;
              max4=max3;
              max3=dict['Merchant5'];
            }
            else if(dict['Merchant5']>max4){
              Merchant5=Merchant4
              Merchant4='Merchant5';
              max5=max4;
              max4=dict['Merchant5'];
            }
            else{
              Merchant5='Merchant5';
              max5=dict['Merchant5'];
            }

            if(dict['Merchant6']>max1){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3=Merchant2;
              Merchant2=Merchant1;
              Merchant1='Merchant6';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=max1;
              max1=dict['Merchant6'];
            }
            else if(dict['Merchant6']>max2){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3=Merchant2;
              Merchant2='Merchant6';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=dict['Merchant6'];
            }
            else if(dict['Merchant6']>max3){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3='Merchant6';
              max5=max4;
              max4=max3;
              max3=dict['Merchant6'];
            }
            else if(dict['Merchant6']>max4){
              Merchant5=Merchant4
              Merchant4='Merchant6';
              max5=max4;
              max4=dict['Merchant6'];
            }
            else if(dict['Merchant6']>max5){
              Merchant5='Merchant6';
              max5=dict['Merchant6'];
            }
            if(dict['Merchant7']>max1){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3=Merchant2;
              Merchant2=Merchant1;
              Merchant1='Merchant7';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=max1;
              max1=dict['Merchant7'];
            }
            else if(dict['Merchant7']>max2){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3=Merchant2;
              Merchant2='Merchant7';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=dict['Merchant7'];
            }
            else if(dict['Merchant7']>max3){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3='Merchant7';
              max5=max4;
              max4=max3;
              max3=dict['Merchant7'];
            }
            else if(dict['Merchant7']>max4){
              Merchant5=Merchant4
              Merchant4='Merchant7';
              max5=max4;
              max4=dict['Merchant7'];
            }
            else if(dict['Merchant7']>max5){
              Merchant5='Merchant7';
              max5=dict['Merchant7'];
            }
            if(dict['Merchant8']>max1){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3=Merchant2;
              Merchant2=Merchant1;
              Merchant1='Merchant8';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=max1;
              max1=dict['Merchant8'];
            }
            else if(dict['Merchant8']>max2){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3=Merchant2;
              Merchant2='Merchant8';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=dict['Merchant8'];
            }
            else if(dict['Merchant8']>max3){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3='Merchant8';
              max5=max4;
              max4=max3;
              max3=dict['Merchant8'];
            }
            else if(dict['Merchant8']>max4){
              Merchant5=Merchant4
              Merchant4='Merchant8';
              max5=max4;
              max4=dict['Merchant8'];
            }
            else if(dict['Merchant8']>max5){
              Merchant5='Merchant8';
              max5=dict['Merchant8'];
            }
            if(dict['Merchant9']>max1){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3=Merchant2;
              Merchant2=Merchant1;
              Merchant1='Merchant9';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=max1;
              max1=dict['Merchant9'];
            }
            else if(dict['Merchant9']>max2){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3=Merchant2;
              Merchant2='Merchant9';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=dict['Merchant9'];
            }
            else if(dict['Merchant9']>max3){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3='Merchant9';
              max5=max4;
              max4=max3;
              max3=dict['Merchant9'];
            }
            else if(dict['Merchant9']>max4){
              Merchant5=Merchant4
              Merchant4='Merchant9';
              max5=max4;
              max4=dict['Merchant9'];
            }
            else  if(dict['Merchant9']>max5){
              Merchant5='Merchant9';
              max5=dict['Merchant9'];
            }
            if(dict['Merchant10']>max1){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3=Merchant2;
              Merchant2=Merchant1;
              Merchant1='Merchant10';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=max1;
              max1=dict['Merchant10'];
            }
            else if(dict['Merchant10']>max2){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3=Merchant2;
              Merchant2='Merchant10';
              max5=max4;
              max4=max3;
              max3=max2;
              max2=dict['Merchant10'];
            }
            else if(dict['Merchant10']>max3){
              Merchant5=Merchant4
              Merchant4=Merchant3;
              Merchant3='Merchant10';
              max5=max4;
              max4=max3;
              max3=dict['Merchant10'];
            }
            else if(dict['Merchant10']>max4){
              Merchant5=Merchant4
              Merchant4='Merchant10';
              max5=max4;
              max4=dict['Merchant10'];
            }
            else if(dict['Merchant10']>max5){
              Merchant5='Merchant10';
              max5=dict['Merchant10'];
            }
                        


var data = [{
  x: [Merchant1,Merchant2,Merchant3,Merchant4,Merchant5],
  y: [max1,max2,max3,max4,max5],
  marker:{
    color: ['rgba(34,122,4,1.0)','rgba(55,128,191,1.0)','rgba(55,128,191,1.0)','rgba(55,128,191,1.0)','rgba(55,128,191,1.0)'],
    line: {
      color: 'rgba(0,0,0,1.0)',
      width: 1
    }
  
  },
  type: 'bar'
}];
this.$set('Merchant1',Merchant1);
this.$set('maxmerchant',max1);

var layout = {
  title: 'The Top Selling Merchant is : '.concat(Merchant1),
  xaxis:{
    title:"Name of The Merchant"
  },
  yaxis:{
    title:"Sales in $"
  }
}

Plotly.newPlot('myDiv', data, layout);
          }
        })
        .error(function (err) {
          console.log(err);
        });


    },



    pageChange: function(e){
      var active=document.getElementsByClassName('active');
      active[0].classList.remove('active');
      var one=document.getElementById(e);
      var selected=document.getElementById('sortSelect');
      var page=e-1;

      if(selected.options[selected.selectedIndex].value=="Amount"){var events = [];
      // this.$set('events', events);
      this.$http.get('/api/events')
        .success(function (events) {      events.sort(function(a,b){
            return(a.Amount-b.Amount);
          });
          this.$set('allevents',events);
          this.$set('events', events.slice(page*50,page*50+50));
          console.log(events);
        })
        .error(function (err) {
          console.log(err);
        });}

      else if(selected.options[selected.selectedIndex].value=="Transaction ID"){var events = [];
      // this.$set('events', events);
      this.$http.get('/api/events')
        .success(function (events) {      events.sort(function(a,b){
            return(a.TransactionID-b.TransactionID);
          });
          this.$set('allevents',events);
          this.$set('events', events.slice(page*50,page*50+50));
          console.log(events);
        })
        .error(function (err) {
          console.log(err);
        });}

      else if(selected.options[selected.selectedIndex].value=="Title"){
        var events = [];
      // this.$set('events', events);
      this.$http.get('/api/events')
        .success(function (events) {      events.sort(function(a,b){
            var nameA=a.Title;
            var nameB=b.Title;
            if(nameA>nameB)
              {return 1;}
            else if(nameB>nameA)
              {return -1;}
            else
              {
                return 0;
              }
          });
          this.$set('allevents',events);
          this.$set('events', events.slice(page*50,page*50+50));
          console.log(events);
        })
        .error(function (err) {
          console.log(err);
        });
      }
      else{
          var events = [];
      // this.$set('events', events);
      this.$http.get('/api/events')
        .success(function (events) {  
          this.$set('allevents',events);
          this.$set('events', events.slice(page*50,page*50+50));
          console.log(events);
        })
        .error(function (err) {
          console.log(err);
        });
     


      }
    
      one.classList.add('active');
      this.$set('page',e);

      var allevents=this.$get('allevents');
      this.$set('events',events.slice(page*50,page*50+50))
      
    },

    changeItem: function (e) {
      if(e.target.value=="Amount"){var events = [];
        var page=this.$get('page')-1;
      // this.$set('events', events);
      this.$http.get('/api/events')
        .success(function (events) {      events.sort(function(a,b){
            return(a.Amount-b.Amount);
          });
          this.$set('allevents',events);
          this.$set('events', events.slice(page*50,page*50+50));
          console.log(events);
        })
        .error(function (err) {
          console.log(err);
        });}

      else if(e.target.value=="Transaction ID"){var events = [];
        var page=this.$get('page')-1;
      // this.$set('events', events);
      this.$http.get('/api/events')
        .success(function (events) {      events.sort(function(a,b){
            return(a.TransactionID-b.TransactionID);
          });
          this.$set('allevents',events);
          this.$set('events', events.slice(page*50,page*50+50));
          console.log(events);
        })
        .error(function (err) {
          console.log(err);
        });}

      else if(e.target.value=="Title"){
          var page=this.$get('page')-1;
        var events = [];
      // this.$set('events', events);
      this.$http.get('/api/events')
        .success(function (events) {      events.sort(function(a,b){
            var nameA=a.Title;
            var nameB=b.Title;
            if(nameA>nameB)
              {return 1;}
            else if(nameB>nameA)
              {return -1;}
            else
              {
                return 0;
              }
          });
          this.$set('allevents',events);
          this.$set('events', events.slice(page*50,page*50+50));
          console.log(events);
        })
        .error(function (err) {
          console.log(err);
        });
      }
    },

    
  }
});