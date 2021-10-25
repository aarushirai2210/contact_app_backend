const {dbconnect} = require('./dbConfig')

exports.createContact = (request,response)=>{
    dbconnect.query('INSERT INTO contact_list (first_name,last_name,email,phone_number) VALUES (?,?,?,?)',[request.body.first_name,request.body.last_name,request.body.email,request.body.phone_number],(error,result,fields)=>{
        if(error){
            return response.status(400).json(error.sqlMessage);
        }
        return response.status(201).json(request.body);
    })
}
exports.getContact = (request,response)=>{
    dbconnect.query('SELECT * FROM contact_list',(error,result,fields)=>{
        if(error){
            return response.status(400).json(error.sqlMessage);
        }
        return response.status(200).json(result);
    })
}