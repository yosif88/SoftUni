function song(data){
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let n = Number(data.shift());
    let typeSong = data.pop();

    for (let i = 0; i < n; i++){
        let [type, name, time] = data[i].split('_');
        
        songs.push(new Song(type, name, time));
        
    }
    if (typeSong == 'all'){
        for (const names of songs) {
            console.log(names.name);            
        }
    }else{
        let filtered = songs.filter((type) => type.typeList === typeSong);
        filtered.forEach((type) => console.log(type.name));
    }
}

song([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])

console.log('-----------------');
song([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])

console.log('------------------------')

song(
[2,
'like_Replay_3:15',
'ban_Photoshop_3:48',
'all'])