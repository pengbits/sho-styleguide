export default class ScheduleModel {
  constructor(){
    this.startDateTime;
    this.endDateTime;
    this.airingMap = [],
    this.channelMap = [],
    this.channelArray = [];
  }

  updateWindow(window){

    if(window !== undefined){

      if(window.startDateTime != undefined){
        this.startDateTime = new Date(window.startDateTime);
      }

      if(window.endDateTime != undefined){
        this.endDateTime = new Date(window.endDateTime);
      }
    }

  }

  setData(data){

    var i, j, dChannel, channel, dAiring;

    var channelListLength = data.channelList.length;

    for(i = 0; i < channelListLength; i++){

      dChannel = data.channelList[i];
      channel = this.channelMap[dChannel.channelId];
      if(this.channelMap[dChannel.channelId] === undefined){

        channel = {
          id: dChannel.channelId,
          name: dChannel.channelName,
          airings: []
        };

        this.channelMap[dChannel.channelId] = channel;
        this.channelArray.push(channel);
      }

      var airingListLength = dChannel.airingList.length;

      for(j = 0; j < airingListLength; j++){

        dAiring = dChannel.airingList[j];
        if(this.airingMap[dAiring.id] === undefined){

          dAiring.startAiringDateTime = new Date(dAiring.startAiringDateTime);
          dAiring.endAiringDateTime = new Date(dAiring.endAiringDateTime);
          channel.airings.push(dAiring);
          this.airingMap[dAiring.id] = dAiring;
        }
      }

    }
  }

  getModelView(){
    return {
      startDateTime: this.startDateTime,
      endDateTime: this.endDateTime,
      channelArray: this.channelArray,
      channelIdMap: (d) => {
        return d.id;
      },
      airingIdMap: (d) => {
        return d.id;
      }
    };
  }

}