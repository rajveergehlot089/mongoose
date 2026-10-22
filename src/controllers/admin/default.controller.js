const defaultmodal=require ('../../models/default')

exports.create = async (request,response)=>{
    defaultmodal({
        name:request.body.name,
        order:request.body.order
    }).save()
    .then ((result)=>{
        const data ={
            _status : true,
            _message : 'Record Inserted',
            _data : result
        }
    })
    .catch((error)=>{
        var errorMessages={};
        for (var i error.errors){
            errorMessages[i]=error.errors[i].messages
        }
        const data ={
            _status : true,
            _message : 'Record Inserted',
            _error:error,
            _data : ""
        }
    })
    console.log('working fine !');
    
}

exports.view = async (request,response)=>{
    
}

exports.details = async (request,response)=>{
    
}

exports.update = async (request,response)=>{
    
}

exports.changeStatus = async (request,response)=>{
    
}


exports.destroy = async (request,response)=>{
    
}