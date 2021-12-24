function getOpponentData(dataName)
{
    data =  $.getJSON(`../static/data/opponent/${dataName}.json`, function(json){        
        return json    
    })
    return data 
}
